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

<section class="flex justify-center bg-[#0a0a0a] px-8 py-40" id="join">
	<div class="w-full max-w-[800px]">
		<div class="border border-[#222] bg-[#111] px-8 py-20 text-center md:px-16" bind:this={cardRef}>
			<h2 class="font-['Inter'] text-[2.5rem] font-black tracking-[0.1em] text-white uppercase">
				RECRUITMENT
			</h2>
			<div
				class="mx-auto my-6 mb-12 h-[2px] w-[50px] bg-[#00ffff] [box-shadow:0_0_10px_#00ffff]"
			></div>
			<p class="mb-16 font-['Inter'] text-[1.1rem] leading-relaxed text-[#888]">
				The Rising Order is looking for individuals with ambition and discipline. Submit your
				declaration of loyalty to the faction.
			</p>

			<form class="text-left" onsubmit={(e) => e.preventDefault()}>
				<div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
					<div class="flex flex-col gap-3">
						<label
							for="name"
							class="font-['Inter'] text-[0.8rem] font-bold tracking-[0.1em] text-[#555] uppercase"
							>Name</label
						>
						<input
							type="text"
							id="name"
							placeholder="Roman"
							class="border border-[#333] bg-[#1a1a1a] p-4 font-['Inter'] text-white transition-all duration-300 outline-none focus:border-[#00ffff] focus:[box-shadow:0_0_15px_rgba(0,255,255,0.1)]"
						/>
					</div>
					<div class="flex flex-col gap-3">
						<label
							for="district"
							class="font-['Inter'] text-[0.8rem] font-bold tracking-[0.1em] text-[#555] uppercase"
							>Current Residence</label
						>
						<select
							id="district"
							class="border border-[#333] bg-[#1a1a1a] p-4 font-['Inter'] text-white transition-all duration-300 outline-none focus:border-[#00ffff] focus:[box-shadow:0_0_15px_rgba(0,255,255,0.1)]"
						>
							{#each districts as district}
								<option>{district}</option>
							{/each}
						</select>
					</div>
				</div>

				<button
					type="submit"
					class="w-full cursor-pointer border border-[#444] bg-[#111] p-5 font-['Inter'] font-extrabold tracking-[0.2em] text-white uppercase transition-all duration-400 hover:border-[#00ffff] hover:bg-black hover:text-[#00ffff] hover:[box-shadow:0_0_25px_rgba(0,255,255,0.3)]"
					bind:this={btnRef}
				>
					Enlist in the Rising Order
				</button>
			</form>
		</div>
	</div>
</section>
