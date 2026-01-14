<script lang="ts">
	import { animateHero } from '$lib/utils/animations';

	let titleRef = $state<HTMLElement>();
	let taglineRef = $state<HTMLElement>();
	let buttonRef = $state<HTMLElement>();

	$effect(() => {
		if (titleRef && taglineRef && buttonRef) {
			animateHero(titleRef, taglineRef, buttonRef);
		}
	});
</script>

<section class="relative h-screen w-full flex items-center justify-center overflow-hidden text-white bg-[#0a0a0a]" id="hero">
	<div class="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/hero-bg.png')] bg-cover bg-center grayscale-[40%] brightness-[60%] z-[1] opacity-80"></div>
	<div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.9)_100%)] z-[2]"></div>
	
	<div class="relative z-[3] text-center max-w-[800px] px-8">
		<h1 
			class="font-['Inter'] font-black text-[clamp(3.5rem,12vw,7rem)] tracking-[-0.02em] m-0 uppercase text-white [text-shadow:0_0_5px_#00ffff] leading-none" 
			bind:this={titleRef}
		>
			BELLIC RISING
		</h1>
		<div class="w-[120px] h-[2px] bg-[#00ffff] my-8 mx-auto [box-shadow:0_0_10px_#00ffff]"></div>
		
		<p class="font-['Inter'] text-xl md:text-2xl text-[#cccccc] mb-14 italic tracking-[0.1em]" bind:this={taglineRef}>
			"Order. Loyalty. Liberty."
		</p>
		
		<a 
			href="#join"
			class="inline-block font-['Inter'] bg-[#111] text-white border border-[#333] py-[1.25rem] px-[3.5rem] text-base font-bold uppercase tracking-[0.15em] cursor-pointer transition-all duration-400 [transition-timing-function:cubic-bezier(0.165,0.84,0.44,1)] rounded-[2px] hover:border-[#00ffff] hover:[box-shadow:0_0_30px_rgba(0,255,255,0.4)] hover:-translate-y-[2px] hover:bg-black hover:text-[#00ffff] no-underline" 
			bind:this={buttonRef}
		>
			Enlist in the Rising Order
		</a>
	</div>
</section>
