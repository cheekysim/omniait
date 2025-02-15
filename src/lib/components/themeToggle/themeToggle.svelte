<script lang="ts">
	import { Switch } from '$lib/components/ui/switch';
	import { Toggle } from '$lib/components/ui/toggle';
	import { Sun, Moon } from 'lucide-svelte';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { onMount } from 'svelte';
	import { setMode, mode } from 'mode-watcher';

	let themeState = $state($mode === 'dark');

	$effect(() => {
		setMode(themeState ? 'dark' : 'light');
	});

	let loaded = $state(false);

	onMount(() => {
		setTimeout(() => {
			loaded = true;
		}, 500);
	});
</script>

{#if !loaded}
	<div class="rounded-full border-2 border-border/40 p-1 min-[872px]:hidden">
		<Skeleton class="size-6 rounded-full" />
	</div>
{:else}
	<Toggle
		aria-label="Toggle Theme"
		class="relative size-9 min-w-8 rounded-full border-2 border-border/40 p-0 data-[state]:bg-transparent min-[872px]:hidden"
		bind:pressed={themeState}
	>
		<Sun class={$mode === 'dark' ? 'hidden' : ''} />
		<Moon class={$mode === 'light' ? 'hidden' : ''} />
	</Toggle>
{/if}
<div
	class="hidden grid-flow-col place-items-center justify-items-center gap-2 rounded-full border-2 border-border/40 px-1 py-1 md:px-2 min-[872px]:grid"
>
	{#if !loaded}
		<Skeleton class="hidden h-6 w-[76px] md:block" />
		<Skeleton class="size-6 rounded-full md:hidden" />
	{:else}
		<Switch class="block" id="darkmode" bind:checked={themeState} />
		<div class="relative h-6 w-6">
			<Sun class="absolute z-10  {$mode === 'dark' ? 'hidden' : ''}" />
			<Moon class="absolute z-10  {$mode === 'light' ? 'hidden' : ''}" />
		</div>
	{/if}
</div>
