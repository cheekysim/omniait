<script lang="ts">
	import '../app.css';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { ModeWatcher, setMode } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';
	// import { Nav, Mnav } from '$lib/components/nav';
	// import { ThemeToggle } from '$lib/components/themeToggle';
	// import { Separator } from '$lib/components/ui/separator';
	// import { Footer } from '$lib/components/footer';
	import '@fontsource-variable/open-sans';

	injectAnalytics();
	setMode('dark');

	let { children } = $props();
</script>

<svelte:head>
	<title>Omnia IT</title>
	<meta
		name="description"
		content="Omnia IT - IT Consulting Company that specializes in Website Development."
	/>
</svelte:head>

<Toaster />
<ModeWatcher />
<div class="flex min-h-dvh flex-col justify-between overflow-x-hidden">
	<!-- <header
		class="sticky top-0 z-50 h-14 w-full border-b border-border/40 bg-background/95 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60"
	>
		<div class="mx-auto flex max-w-screen-2xl items-center justify-between">
			<div class="flex flex-row items-center gap-2">
				<Mnav />
				<div class="flex-row gap-2 md:gap-6 lg:gap-8">
					<a href="/" class="flex items-center">
						<img
							src="https://picsum.photos/seed/3/400/400"
							alt="Logo"
							class="mr-2 hidden h-8 w-8 rounded-md min-[420px]:block"
						/>
						<h1 class="text-md sm:text-l sm:hidden min-[795px]:inline lg:text-xl">Omnia IT</h1>
					</a>
				</div>
				<Separator orientation="vertical" class="hidden h-8 md:block" />
				<Nav />
			</div>
			<ThemeToggle />
		</div>
	</header> -->
	<main class="flex w-full flex-grow flex-col items-center">
		{@render children()}
	</main>
	<!-- <Footer /> -->
</div>

<style>
	:global(body) {
		font-family: 'Open Sans Variable', sans-serif;
	}
</style>
