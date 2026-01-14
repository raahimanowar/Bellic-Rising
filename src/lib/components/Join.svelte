<script lang="ts">
	import { animateFadeIn, animateScaleIn } from '$lib/utils/animations';
	import { districts } from '$lib/constants/data';

	let cardRef = $state<HTMLElement>();
	let btnRef = $state<HTMLElement>();

	$effect(() => {
		if (cardRef) animateFadeIn(cardRef, 0.2, 0, 30);
		if (btnRef) animateScaleIn(btnRef, 0.2);
	});
</script>

<section class="py-40 px-8 bg-[#0a0a0a] flex justify-center" id="join">
	<div class="max-w-[800px] w-full">
		<div class="bg-[#111] py-20 px-8 md:px-16 border border-[#222] text-center" bind:this={cardRef}>
			<h2 class="font-['Inter'] font-black text-[2.5rem] uppercase text-white tracking-[0.1em]">RECRUITMENT</h2>
			<div class="w-[50px] h-[2px] bg-[#00ffff] my-6 mx-auto mb-12 [box-shadow:0_0_10px_#00ffff]"></div>
			<p class="font-['Inter'] text-[#888] mb-16 leading-relaxed text-[1.1rem]">
				The Rising Order is looking for individuals with ambition and discipline. Submit your declaration of loyalty to the faction.
			</p>

			<form class="text-left" on:submit|preventDefault>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
					<div class="flex flex-col gap-3">
						<label for="name" class="font-['Inter'] font-bold text-[0.8rem] uppercase text-[#555] tracking-[0.1em]">Name</label>
						<input 
							type="text" 
							id="name" 
							placeholder="Roman" 
							class="bg-[#1a1a1a] border border-[#333] p-4 text-white font-['Inter'] outline-none transition-all duration-300 focus:border-[#00ffff] focus:[box-shadow:0_0_15px_rgba(0,255,255,0.1)]" 
						/>
					</div>
					<div class="flex flex-col gap-3">
						<label for="district" class="font-['Inter'] font-bold text-[0.8rem] uppercase text-[#555] tracking-[0.1em]">Current Residence</label>
						<select 
							id="district" 
							class="bg-[#1a1a1a] border border-[#333] p-4 text-white font-['Inter'] outline-none transition-all duration-300 focus:border-[#00ffff] focus:[box-shadow:0_0_15px_rgba(0,255,255,0.1)]"
						>
							{#each districts as district}
								<option>{district}</option>
							{/each}
						</select>
					</div>
				</div>

				<button 
					type="submit" 
					class="w-full bg-[#111] text-white border border-[#444] p-5 font-['Inter'] font-extrabold uppercase tracking-[0.2em] cursor-pointer transition-all duration-400 hover:bg-black hover:border-[#00ffff] hover:text-[#00ffff] hover:[box-shadow:0_0_25px_rgba(0,255,255,0.3)]" 
					bind:this={btnRef}
				>
					Enlist in the Rising Order
				</button>
			</form>
		</div>
	</div>
</section>
