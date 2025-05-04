<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Omnia IT</title>
	<meta
		name="description"
		content="Omnia IT - A Premium IT Consulting Company, Who handles technology transformation and project management."
	/>
</svelte:head>

<section class="relative grid flex-grow place-items-center">
	<div class="z-10 space-y-2 text-center">
		<h1 class="text-4xl font-bold">Omnia IT - A Premium IT Consulting Company</h1>
		<p class="text-primary-foreground/60">Website Under Construction - Currently Completing Client Work</p>
	</div>
	<div class="animate-orbit absolute size-64 rounded-full bg-primary/60 blur-[192px]"></div>
	<div class="animate-orbit-alt absolute size-64 rounded-full bg-primary/60 blur-[192px]"></div>
</section>

<style>
	@keyframes orbit {
		0% {
			transform: rotate(0deg) translateX(250px) rotate(0deg);
		}
		25% {
			transform: rotate(90deg) translateX(250px) rotate(-90deg);
		}
		50% {
			transform: rotate(180deg) translateX(200px) rotate(-180deg);
		}
		75% {
			transform: rotate(270deg) translateX(200px) rotate(-270deg);
		}
		100% {
			transform: rotate(360deg) translateX(250px) rotate(-360deg);
		}
	}

	/* Orbit with different translations */

	@keyframes orbit-alt {
		0% {
			transform: rotate(0deg) translateX(200px) rotate(0deg);
		}
		25% {
			transform: rotate(90deg) translateX(250px) rotate(-90deg);
		}
		50% {
			transform: rotate(180deg) translateX(200px) rotate(-180deg);
		}
		75% {
			transform: rotate(270deg) translateX(250px) rotate(-270deg);
		}
		100% {
			transform: rotate(360deg) translateX(200px) rotate(-360deg);
		}
	}

	:global(.animate-orbit) {
		animation: orbit 20s linear infinite;
	}

	:global(.animate-orbit-alt) {
		animation: orbit-alt 20s linear infinite;
		animation-delay: -10s;
	}
</style>
