<script lang="ts">
	import { page } from '$app/stores';

	import * as Drawer from '$lib/components/ui/drawer';
	import {
		GalleryVerticalEnd,
		MessageSquareMore,
		Settings,
		Info,
		Home,
		Menu,
		MessageCircleMore
	} from 'lucide-svelte';

	let open = $state(false);
</script>

<Drawer.Drawer direction="top" bind:open>
	<Drawer.Trigger>
		<Menu class="block min-[640px]:hidden" />
	</Drawer.Trigger>
	<Drawer.Content class="top-0">
		<Drawer.Header>
			<Drawer.Title class="text-2xl">Navigation</Drawer.Title>
		</Drawer.Header>
		<nav>
			<ul class="flex flex-col items-center gap-2">
				<li>
					<a
						class={`flex items-center gap-2 text-lg transition-colors ${$page.url.pathname === '/' ? 'text-foreground' : 'text-foreground/80'}`}
						onclick={() => (open = false)}
						href="/"><Home /> Home</a
					>
				</li>
				<!-- <li>
					<a
						class={`flex items-center gap-2 text-lg transition-colors ${$page.url.pathname === '/gallery' ? 'text-foreground' : 'text-foreground/80'}`}
						onclick={() => (open = false)}
						href="/gallery"><GalleryVerticalEnd /> Gallery</a
					>
				</li>
				<li>
					<a
						class={`flex items-center gap-2 text-lg transition-colors ${$page.url.pathname === '/services' ? 'text-foreground' : 'text-foreground/80'}`}
						onclick={() => (open = false)}
						href="/services"><Settings /> Services</a
					>
				</li>
				<li>
					<a
						class={`flex items-center gap-2 text-lg transition-colors ${$page.url.pathname === '/about' ? 'text-foreground' : 'text-foreground/80'}`}
						onclick={() => (open = false)}
						href="/about"><Info /> About</a
					>
				</li>
				<li>
					<a
						class={`flex items-center gap-2 text-lg transition-colors ${$page.url.pathname === '/reviews' ? 'text-foreground' : 'text-foreground/80'}`}
						onclick={() => (open = false)}
						href="/reviews"><MessageSquareMore /> Reviews</a
					>
				</li>
				<li>
					<a
						class={`flex items-center gap-2 text-lg transition-colors ${$page.url.pathname === '/contact' ? 'text-foreground' : 'text-foreground/80'}`}
						onclick={() => (open = false)}
						href="/contact"><MessageCircleMore /> Contact</a
					>
				</li> -->
			</ul>
		</nav>
	</Drawer.Content>
</Drawer.Drawer>
