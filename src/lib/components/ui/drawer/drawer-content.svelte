<script lang="ts">
	import { Drawer as DrawerPrimitive } from 'vaul-svelte';
	import DrawerOverlay from './drawer-overlay.svelte';
	import { cn } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		portalProps,
		children,
		...restProps
	}: DrawerPrimitive.ContentProps & {
		portalProps?: DrawerPrimitive.PortalProps;
	} = $props();
</script>

<DrawerPrimitive.Portal {...portalProps}>
	<DrawerOverlay />
	<DrawerPrimitive.Content
		bind:ref
		class={cn(
			'fixed inset-x-0 top-0 z-50 flex h-auto flex-col rounded-b-[10px] border bg-background',
			className
		)}
		{...restProps}
	>
		{@render children?.()}
		<div class="mx-auto my-4 h-2 w-[100px] rounded-full bg-muted"></div>
	</DrawerPrimitive.Content>
</DrawerPrimitive.Portal>
