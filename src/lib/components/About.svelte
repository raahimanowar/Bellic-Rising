<script lang="ts">
	import { animateFadeIn } from '$lib/utils/animations';

	let imageRef = $state<HTMLElement>();
	let contentRef = $state<HTMLElement>();
	let lineRef = $state<HTMLElement>();

	$effect(() => {
		if (imageRef) animateFadeIn(imageRef, 0, -50, 0);
		if (contentRef) animateFadeIn(contentRef, 0.2, 50, 0);
		if (lineRef) animateFadeIn(lineRef, 0.4, -20, 0);
	});
</script>

<section class="py-48 px-8 bg-[#0a0a0a] overflow-hidden" id="about">
	<div class="max-w-[1100px] mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center text-center md:text-left">
			<div class="relative max-w-[500px] mx-auto md:mx-0" bind:this={imageRef}>
				<img src="/assets/images/niko-portrait.png" alt="Niko Bellic Portrait" class="w-full h-auto border border-[#222] contrast-[1.1] brightness-[0.9]" />
				<div class="absolute inset-0 [box-shadow:inset_0_0_50px_rgba(0,0,0,0.5),0_0_20px_rgba(0,255,255,0.1)] pointer-events-none"></div>
			</div>
			
			<div bind:this={contentRef}>
				<h2 class="font-['Inter'] font-black text-5xl uppercase m-0 text-white leading-tight">About Niko Bellic</h2>
				<div class="w-20 h-[3px] bg-[#00ffff] mt-6 mb-10 mx-auto md:mx-0 [box-shadow:0_0_10px_rgba(0,255,255,0.5)]" bind:this={lineRef}></div>
				
				<p class="font-['Inter'] text-[1.15rem] leading-[1.8] text-[#cccccc] mb-8">
					Born in Eastern Europe, Niko came to Liberty City seeking opportunity… and found power. Through loyalty and strategy, he built the Rising Order into a formidable faction.
				</p>
				<p class="font-['Inter'] text-[1.15rem] leading-[1.8] text-[#cccccc] mb-8">
					His leadership ensures order, control, and prosperity for those under his command. The streets of Liberty City are changing, and the Rising Order is the force behind that change.
				</p>
			</div>
		</div>
	</div>
</section>
