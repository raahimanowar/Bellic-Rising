<script lang="ts">
	import { animateStaggerFadeIn } from '$lib/utils/animations';
	import { galleryItems } from '$lib/constants/data';

	let itemsRefs = $state<HTMLElement[]>([]);

	$effect(() => {
		if (itemsRefs.length > 0) animateStaggerFadeIn(itemsRefs, 0, 40);
	});
</script>

<section class="bg-[#0a0a0a] px-8 py-40" id="media">
	<div class="mx-auto max-w-[1200px]">
		<div class="mb-20 text-center">
			<h2
				class="font-['Inter'] text-[clamp(1.75rem,5vw,2.5rem)] font-black tracking-[0.05em] text-white uppercase md:tracking-[0.15em]"
			>
				THE ORDER IN ACTION
			</h2>
			<div class="mx-auto my-6 h-[2px] w-[60px] bg-[#00ffff] [box-shadow:0_0_10px_#00ffff]"></div>
		</div>

		<div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
			{#each galleryItems as item, i}
				<div
					class="group relative aspect-[16/10] cursor-pointer overflow-hidden border border-[#222] bg-[#111]"
					bind:this={itemsRefs[i]}
				>
					<div class="relative h-full w-full">
						<img
							src={item.src}
							alt={item.caption}
							class="h-full w-full object-cover contrast-[1.2] grayscale-[80%] transition-all duration-700 group-hover:scale-105 group-hover:contrast-100 group-hover:grayscale-[20%]"
						/>
						<div
							class="absolute inset-0 flex items-end bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)] p-8 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
						>
							<span
								class="font-['Inter'] text-[0.85rem] font-bold tracking-[0.1em] text-white uppercase"
								>{item.caption}</span
							>
						</div>
						<div
							class="pointer-events-none absolute inset-0 border border-[#00ffff] opacity-0 transition-opacity duration-400 group-hover:opacity-50 group-hover:[box-shadow:inset_0_0_20px_rgba(0,255,255,0.2)]"
						></div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
