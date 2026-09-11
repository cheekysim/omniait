"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Check, Mail, MapPin, Phone, Send } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import BackHome from "@/components/BackHome";
import GridBackground from "@/components/GridBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";

declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

const TURNSTILE_PRIVACY_URL = "https://www.cloudflare.com/en-gb/turnstile-privacy-policy/";

type FormValues = { name: string; email: string; message: string; website: string };
type FormErrors = Partial<Record<keyof FormValues, string>>;
const initialValues: FormValues = { name: "", email: "", message: "", website: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPage() {
  const prefersReduced = useReducedMotion();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [token, setToken] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | undefined>(undefined);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  // Render an invisible (interaction-only) Turnstile widget and start a fresh
  // execution. Removing + re-rendering issues a brand-new token so the hidden
  // security check re-runs every time the form is shown again after a send.
  const renderWidget = () => {
    if (!siteKey || !turnstileRef.current || !window.turnstile) return;
    if (widgetId.current) {
      try {
        window.turnstile.remove(widgetId.current);
      } catch {
        /* ignore */
      }
      widgetId.current = undefined;
    }
    setToken("");
    setCaptchaError("");
    widgetId.current = window.turnstile.render(turnstileRef.current, {
      sitekey: siteKey,
      appearance: "interaction-only",
      callback: (value: string) => setToken(value),
      "expired-callback": () => {
        setToken("");
        setCaptchaError("");
        renderWidget();
      },
      "error-callback": () => {
        setToken("");
        setCaptchaError("Security check unavailable — please reload or email us directly.");
      },
    });
  };

  // Load the Turnstile API once.
  useEffect(() => {
    if (window.turnstile) return;
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = () => renderWidget();
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };
  const validate = () => {
    const next: FormErrors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!emailPattern.test(values.email.trim())) next.email = "Enter a valid email address.";
    if (values.message.trim().length < 10) next.message = "Please tell us a little more (at least 10 characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    if (!validate()) return;
    if (!siteKey) {
      setStatus("error");
      setMessage("The security check is not configured yet. Please email us directly.");
      return;
    }
    if (!token) {
      setStatus("error");
      setMessage("Please complete the security check before sending.");
      return;
    }
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, turnstileToken: token }),
      });
      const result = (await response.json()) as { success: boolean; error?: string };
      if (!response.ok || !result.success) throw new Error(result.error || "Something went wrong.");
      setStatus("success");
      setValues(initialValues);
      setToken("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };
  const entrance = (index: number) => ({
    initial: prefersReduced ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReduced ? 0 : 0.45, delay: prefersReduced ? 0 : index * 0.09 },
  });

  return (
    <main className="relative min-h-screen overflow-hidden px-5 py-24 sm:px-8">
      <GridBackground />
      <BackHome />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12">
        <motion.header {...entrance(0)} className="max-w-3xl">
          <p className="font-mono text-sm tracking-[0.3em] text-primary uppercase">Open a channel</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight sm:text-7xl">
            Let&apos;s make the next <span className="text-primary">signal</span> count.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Tell us where you are heading. We&apos;ll bring technical clarity, momentum, and a
            considered digital experience to the conversation.
          </p>
        </motion.header>
        <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.aside {...entrance(1)} className="flex flex-col gap-4">
            <ContactCard icon={Mail} title="Email" detail="euan@omniait.co.uk" href="mailto:euan@omniait.co.uk" />
            <ContactCard icon={Phone} title="Phone" detail="+44 7922 022877" href="tel:+44792202877" />
            <ContactCard icon={MapPin} title="Based in" detail="Caldicot, South Wales" />
            <p className="px-1 pt-3 text-sm text-muted-foreground">
              Prefer email? That works too. Every enquiry is read by a human.
            </p>
          </motion.aside>
          <motion.div {...entrance(2)}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Start the conversation</CardTitle>
                <CardDescription>Share the outline. We&apos;ll take it from there.</CardDescription>
              </CardHeader>
              <CardContent>
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={prefersReduced ? false : { opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex min-h-96 flex-col items-center justify-center gap-5 text-center"
                    >
                      <motion.div
                        animate={prefersReduced ? undefined : { rotate: [0, -8, 8, 0] }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground"
                      >
                        <Check />
                      </motion.div>
                      <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-semibold">Message sent.</h2>
                        <p className="max-w-sm text-muted-foreground">
                          Your signal is on its way. We&apos;ll be in touch shortly.
                        </p>
                      </div>
                      <Button variant="outline" onClick={() => setStatus("idle")}>
                        Send another message
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={prefersReduced ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={submit}
                    >
                      <FieldGroup>
                        {([
                          ["name", "Your name", "How should we address you?"],
                          ["email", "Email address", "Where should we reply?"],
                        ] as const).map(([field, label, placeholder], index) => (
                          <motion.div key={field} {...entrance(index + 3)}>
                            <Field data-invalid={Boolean(errors[field])}>
                              <FieldLabel htmlFor={field}>{label}</FieldLabel>
                              <Input
                                id={field}
                                type={field === "email" ? "email" : "text"}
                                autoComplete={field === "email" ? "email" : "name"}
                                value={values[field]}
                                onChange={(event) => update(field, event.target.value)}
                                placeholder={placeholder}
                                aria-invalid={Boolean(errors[field])}
                                disabled={status === "submitting"}
                              />
                              {errors[field] && <FieldError>{errors[field]}</FieldError>}
                            </Field>
                          </motion.div>
                        ))}
                        <motion.div {...entrance(5)}>
                          <Field data-invalid={Boolean(errors.message)}>
                            <FieldLabel htmlFor="message">Your message</FieldLabel>
                            <Textarea
                              id="message"
                              value={values.message}
                              onChange={(event) => update("message", event.target.value)}
                              placeholder="What are you hoping to build, improve, or solve?"
                              rows={6}
                              aria-invalid={Boolean(errors.message)}
                              disabled={status === "submitting"}
                            />
                            {errors.message ? (
                              <FieldError>{errors.message}</FieldError>
                            ) : (
                              <FieldDescription>A little context helps us prepare a useful reply.</FieldDescription>
                            )}
                          </Field>
                        </motion.div>
                        <Field className="sr-only" aria-hidden="true">
                          <FieldLabel htmlFor="website">Website</FieldLabel>
                          <Input
                            id="website"
                            tabIndex={-1}
                            autoComplete="off"
                            value={values.website}
                            onChange={(event) => update("website", event.target.value)}
                          />
                        </Field>
                        <motion.div {...entrance(6)} className="flex flex-col gap-4">
                          {/* Mount-callback ref: renders a fresh invisible widget exactly when the
                              container mounts — on first load and again after "Send another message" —
                              so the hidden security check re-runs after every send. */}
                          <div
                            ref={(el) => {
                              turnstileRef.current = el;
                              if (el && status === "idle") renderWidget();
                            }}
                            aria-label="Security check"
                          />
                          <Button
                            type="submit"
                            size="lg"
                            className="cursor-pointer"
                            disabled={status === "submitting" || !token}
                          >
                            {status === "submitting" ? (
                              <>
                                <Spinner data-icon="inline-start" />
                                Sending signal&hellip;
                              </>
                            ) : !siteKey ? (
                              <>Security check unavailable &mdash; please email us directly</>
                            ) : captchaError ? (
                              <>{captchaError}</>
                            ) : !token ? (
                              <>
                                <Spinner data-icon="inline-start" />
                                Verifying your identity&hellip;
                              </>
                            ) : status === "error" ? (
                              <>{message || "Something went wrong."}</>
                            ) : (
                              <>
                                <Send data-icon="inline-start" />
                                Send message
                              </>
                            )}
                          </Button>
                          <p className="text-xs text-muted-foreground">
                            This form is protected by Cloudflare Turnstile. See the{" "}
                            <a
                              href={TURNSTILE_PRIVACY_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary underline"
                            >
                              Cloudflare Turnstile privacy policy
                            </a>
                            .
                          </p>
                        </motion.div>
                      </FieldGroup>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

function ContactCard({ icon: Icon, title, detail, href }: { icon: typeof Mail; title: string; detail: string; href?: string }) {
  const content = (
    <>
      <Icon className="size-5 text-primary" />
      <div className="flex flex-col gap-1">
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="font-medium">{detail}</p>
      </div>
    </>
  );
  return href ? (
    <a href={href} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-transform hover:-translate-y-1">
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">{content}</div>
  );
}