<script lang="ts">
	import { animateFadeIn, animateStaggerFadeIn } from '$lib/utils/animations';
	import { supportData } from '$lib/constants/data';

	let mapRef = $state<HTMLElement>();
	let infoRefs = $state<HTMLElement[]>([]);

	$effect(() => {
		if (mapRef) animateFadeIn(mapRef);
		if (infoRefs.length > 0) animateStaggerFadeIn(infoRefs, 0.4, 30);
	});
</script>

<section class="py-40 px-8 bg-[#050505]" id="map">
	<div class="max-w-[1200px] mx-auto">
		<div class="text-center mb-24">
			<h2 class="font-['Inter'] font-black text-5xl uppercase text-white tracking-[0.1em]">Territory Control</h2>
			<div class="w-[100px] h-[2px] bg-[#00ffff] my-6 mx-auto [box-shadow:0_0_15px_#00ffff]"></div>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
			<div 
				class="relative border border-[#333] bg-black p-2 [box-shadow:0_0_40px_rgba(0,0,0,0.5)] max-w-[600px] lg:max-w-none mx-auto lg:mx-0 w-full" 
				bind:this={mapRef}
			>
				<div class="relative w-full aspect-square bg-black overflow-hidden">
					<img 
						src="/assets/images/gta-map.png" 
						alt="Liberty City Strategic Map" 
						class="w-full h-full object-cover brightness-[0.9] contrast-[1.1] opacity-90" 
					/>
					<div class="absolute inset-0 [background:repeating-linear-gradient(0deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1)_1px,transparent_1px,transparent_2px)] pointer-events-none"></div>
				</div>
			</div>

			<div class="info-wrapper">
				<h3 class="font-['Inter'] font-extrabold text-2xl uppercase mb-10 text-white tracking-[0.05em]">Rising Order Support</h3>
				<div class="flex flex-col gap-8">
					{#each supportData as item, i}
						<div class="w-full" bind:this={infoRefs[i]}>
							<div class="flex justify-between mb-3">
								<span class="font-['Inter'] font-bold text-[0.9rem] text-[#999] uppercase tracking-[0.1em]">{item.district}</span>
								<span class="font-['Inter'] font-black text-base text-white">{item.support}%</span>
							</div>
							<div class="w-full h-[4px] bg-[#1a1a1a] rounded-[2px] overflow-hidden">
								<div 
									class="h-full transition-[width] duration-[1500ms] [transition-timing-function:cubic-bezier(0.165,0.84,0.44,1)]" 
									style="width: {item.support}%; background: {item.color}; box-shadow: 0 0 10px {item.color};"
								></div>
							</div>
						</div>
					{/each}
				</div>
				<p class="mt-16 font-['Inter'] text-[0.95rem] text-[#555] leading-relaxed italic">
					Strategic dominance is maintained through loyalty and overwhelming presence. Each percentage represents families and businesses under the Rising Order's protection.
				</p>
			</div>
		</div>
	</div>
</section>
