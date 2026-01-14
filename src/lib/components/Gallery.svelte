<script lang="ts">
	import { animateStaggerFadeIn } from '$lib/utils/animations';
	import { galleryItems } from '$lib/constants/data';

	let itemsRefs = $state<HTMLElement[]>([]);

	$effect(() => {
		if (itemsRefs.length > 0) animateStaggerFadeIn(itemsRefs, 0, 40);
	});
</script>

<section class="py-40 px-8 bg-[#0a0a0a]" id="media">
	<div class="max-w-[1200px] mx-auto">
		<div class="text-center mb-20">
			<h2 class="font-['Inter'] font-black text-[2.5rem] uppercase text-white tracking-[0.15em]">THE ORDER IN ACTION</h2>
			<div class="w-[60px] h-[2px] bg-[#00ffff] my-6 mx-auto [box-shadow:0_0_10px_#00ffff]"></div>
		</div>

		<div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
			{#each galleryItems as item, i}
				<div 
					class="relative aspect-[16/10] overflow-hidden bg-[#111] border border-[#222] cursor-pointer group" 
					bind:this={itemsRefs[i]}
				>
					<div class="w-full h-full relative">
						<img 
							src={item.src} 
							alt={item.caption} 
							class="w-full h-full object-cover grayscale-[80%] contrast-[1.2] transition-all duration-700 group-hover:grayscale-[20%] group-hover:contrast-100 group-hover:scale-105" 
						/>
						<div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)] flex items-end p-8 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
							<span class="text-white font-['Inter'] font-bold text-[0.85rem] uppercase tracking-[0.1em]">{item.caption}</span>
						</div>
						<div class="absolute inset-0 border border-[#00ffff] opacity-0 transition-opacity duration-400 pointer-events-none group-hover:opacity-50 group-hover:[box-shadow:inset_0_0_20px_rgba(0,255,255,0.2)]"></div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
