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
