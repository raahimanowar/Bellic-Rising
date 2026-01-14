<script lang="ts">
	import { animateFadeIn } from '$lib/utils/animations';
	import { Twitter, Instagram, Facebook } from '@lucide/svelte';

	let footerRef = $state<HTMLElement>();

	$effect(() => {
		if (footerRef) animateFadeIn(footerRef, 0, 0, 15);
	});
</script>

<footer class="py-8 px-8 bg-[#050505] relative" id="footer" bind:this={footerRef}>
	<div class="absolute top-0 left-0 w-full h-[1px] bg-[linear-gradient(90deg,transparent,#00ffff,transparent)] opacity-20"></div>
	<div class="max-w-[1100px] mx-auto">
		<div class="flex flex-col items-center gap-3">
			<h2 class="font-['Inter'] font-black text-lg tracking-[0.2em] text-white m-0">BELLIC RISING</h2>
			
			<div class="flex items-center gap-5">
				<a href="https://x.com/" class="text-[#444] transition-all duration-300 hover:text-[#00ffff] hover:[filter:drop-shadow(0_0_8px_rgba(0,255,255,0.5))]" aria-label="X (Twitter)">
					<Twitter size={18} />
				</a>
				<a href="https://instagram.com/" class="text-[#444] transition-all duration-300 hover:text-[#00ffff] hover:[filter:drop-shadow(0_0_8px_rgba(0,255,255,0.5))]" aria-label="Instagram">
					<Instagram size={18} />
				</a>
				<a href="https://facebook.com/" class="text-[#444] transition-all duration-300 hover:text-[#00ffff] hover:[filter:drop-shadow(0_0_8px_rgba(0,255,255,0.5))]" aria-label="Facebook">
					<Facebook size={18} />
				</a>
			</div>

			<a href="mailto:niko.bellic@gtaiv.com" class="font-['Inter'] text-xs text-[#666] hover:text-[#00ffff] transition-all duration-300 no-underline">
				niko.bellic@gtaiv.com
			</a>
		</div>
		
		<div class="pt-4 mt-4 border-t border-[#111] text-center">
			<p class="font-['Inter'] text-[0.75rem] text-[#555] tracking-[0.1em] m-0">
				&copy; 2026 THE RISING ORDER CAMPAIGN. LIBERTY CITY.
			</p>
		</div>
	</div>
</footer>
