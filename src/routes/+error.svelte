<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="grid flex-grow place-items-center">
	{#if $page.status === 403}
		<div class="space-y-2 text-center">
			<h1 class="text-4xl">Oh No! An error has occurred!</h1>
			<p class="text-6xl text-muted-foreground">{$page.status}: {$page.error?.message}</p>
			<p class="text-md text-muted-foreground/80">
				Don't worry, this error has been reported to us automatically!
			</p>
		</div>
	{:else}
		<h1 class="text-4xl">Oh Snap! This page does not exist!</h1>
	{/if}
</div>
