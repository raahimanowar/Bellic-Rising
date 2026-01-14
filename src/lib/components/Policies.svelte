<script lang="ts">
	import { animateStaggerFadeIn } from '$lib/utils/animations';
	import { policies } from '$lib/constants/data';

	let cardsRefs = $state<HTMLElement[]>([]);

	$effect(() => {
		if (cardsRefs.length > 0) animateStaggerFadeIn(cardsRefs);
	});
</script>

<section class="py-40 px-8 bg-[#0d0d0d]" id="policies">
	<div class="max-w-[1200px] mx-auto">
		<div class="text-center mb-24">
			<h2 class="font-['Inter'] font-black text-5xl uppercase text-white tracking-[0.1em]">FACTION DOCTRINE</h2>
			<div class="w-[100px] h-[2px] bg-[#00ffff] my-6 mx-auto [box-shadow:0_0_15px_#00ffff]"></div>
		</div>

		<div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10">
			{#each policies as policy, i}
				<div 
					class="bg-[#111] py-14 px-10 border border-[#222] relative transition-all duration-500 [transition-timing-function:cubic-bezier(0.165,0.84,0.44,1)] overflow-hidden hover:-translate-y-2 hover:border-[#00ffff] hover:[box-shadow:0_20px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(0,255,255,0.2)] group" 
					bind:this={cardsRefs[i]}
				>
					<div class="absolute top-0 left-0 w-full h-[2px] bg-[#00ffff] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
					<h3 class="font-['Inter'] font-extrabold text-[1.4rem] mb-6 text-white uppercase tracking-[0.05em]">{policy.title}</h3>
					<p class="font-['Inter'] text-base text-[#888] leading-[1.7]">{policy.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
