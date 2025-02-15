<script lang="ts">
	import { page } from '$app/stores';

	import {
		GalleryVerticalEnd,
		MessageSquareMore,
		Settings,
		Info,
		Home,
		MessageCircleMore
	} from 'lucide-svelte';
</script>

<nav class="align-center hidden justify-center min-[640px]:flex">
	<li class="list-none pr-2 after:bg-primary">
		<a
			class={`flex items-center gap-2 text-lg transition-colors ${$page.url.pathname === '/' ? 'text-foreground' : 'text-foreground/80'}`}
			href="/"><Home class="hidden h-4 w-4 min-[1070px]:inline" /> Home</a
		>
	</li>
	<!-- <li class="list-none px-2 after:bg-primary">
		<a
			class={`flex items-center gap-2 text-lg transition-colors ${$page.url.pathname === '/gallery' ? 'text-foreground' : 'text-foreground/80'}`}
			href="/gallery"><GalleryVerticalEnd class="hidden h-4 w-4 min-[1070px]:inline" /> Gallery</a
		>
	</li>
	<li class="list-none px-2 after:bg-primary">
		<a
			class={`flex items-center gap-2 text-lg transition-colors ${$page.url.pathname === '/services' ? 'text-foreground' : 'text-foreground/80'}`}
			href="/services"><Settings class="hidden h-4 w-4 min-[1070px]:inline" /> Services</a
		>
	</li>
	<li class="list-none px-2 after:bg-primary">
		<a
			class={`flex items-center gap-2 text-lg transition-colors ${$page.url.pathname === '/about' ? 'text-foreground' : 'text-foreground/80'}`}
			href="/about"><Info class="hidden h-4 w-4 min-[1070px]:inline" /> About</a
		>
	</li>
	<li class="list-none px-2 after:bg-primary">
		<a
			class={`flex items-center gap-2 text-lg transition-colors ${$page.url.pathname === '/reviews' ? 'text-foreground' : 'text-foreground/80'}`}
			href="/reviews"><MessageSquareMore class="hidden h-4 w-4 min-[1070px]:inline" /> Reviews</a
		>
	</li>
	<li class="list-none pl-2 after:bg-primary">
		<a
			class={`flex items-center gap-2 text-lg transition-colors ${$page.url.pathname === '/contact' ? 'text-foreground' : 'text-foreground/80'}`}
			href="/contact"><MessageCircleMore class="hidden h-4 w-4 min-[1070px]:inline" /> Contact</a
		>
	</li> -->
</nav>

<style>
	@import './nav.css';
</style>
