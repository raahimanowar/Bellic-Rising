<script lang="ts">
	import { fade } from 'svelte/transition';
	import { gsap } from 'gsap';

	let navContainer = $state<HTMLElement>();
	let lastScrollY = $state(0);
	let isHidden = $state(false);
	let isMenuOpen = $state(false);

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	};

	const closeMenu = () => {
		isMenuOpen = false;
		document.body.style.overflow = '';
	};

	const handleScroll = () => {
		if (isMenuOpen) return;
		const currentScrollY = window.scrollY;
		
		if (currentScrollY > lastScrollY && currentScrollY > 100) {
			if (!isHidden) {
				if (navContainer) {
					gsap.to(navContainer, { y: -150, duration: 0.4, ease: 'power2.inOut' });
				}
				isHidden = true;
			}
		} else {
			if (isHidden) {
				if (navContainer) {
					gsap.to(navContainer, { y: 0, duration: 0.4, ease: 'power2.out' });
				}
				isHidden = false;
			}
		}
		
		lastScrollY = currentScrollY;
	};

	$effect(() => {
		if (navContainer) {
			gsap.from(navContainer, {
				y: -100,
				opacity: 0,
				duration: 1,
				delay: 1,
				ease: 'power3.out'
			});

			window.addEventListener('scroll', handleScroll);

			return () => {
				window.removeEventListener('scroll', handleScroll);
				document.body.style.overflow = '';
			};
		}
	});
</script>

{#if isMenuOpen}
	<div 
		class="fixed inset-0 bg-[rgba(10,10,10,0.98)] backdrop-blur-xl z-[1100] p-8 flex flex-col items-center justify-center gap-8 md:hidden"
		transition:fade={{ duration: 300 }}
		on:click={closeMenu}
		on:keydown={(e) => e.key === 'Escape' && closeMenu()}
		role="button"
		tabindex="0"
	>
		<a href="#about" on:click={closeMenu} class="font-['Inter'] font-black text-3xl text-white no-underline tracking-[0.2em] transition-all duration-300 hover:text-[#00ffff] hover:[text-shadow:0_0_20px_rgba(0,255,255,0.6)]">ABOUT</a>
		<a href="#policies" on:click={closeMenu} class="font-['Inter'] font-black text-3xl text-white no-underline tracking-[0.2em] transition-all duration-300 hover:text-[#00ffff] hover:[text-shadow:0_0_20px_rgba(0,255,255,0.6)]">POLICIES</a>
		<a href="#media" on:click={closeMenu} class="font-['Inter'] font-black text-3xl text-white no-underline tracking-[0.2em] transition-all duration-300 hover:text-[#00ffff] hover:[text-shadow:0_0_20px_rgba(0,255,255,0.6)]">MEDIA</a>
		<a href="#map" on:click={closeMenu} class="font-['Inter'] font-black text-3xl text-white no-underline tracking-[0.2em] transition-all duration-300 hover:text-[#00ffff] hover:[text-shadow:0_0_20px_rgba(0,255,255,0.6)]">MAP</a>
		<a href="#footer" on:click={closeMenu} class="font-['Inter'] font-black text-3xl text-white no-underline tracking-[0.2em] transition-all duration-300 hover:text-[#00ffff] hover:[text-shadow:0_0_20px_rgba(0,255,255,0.6)]">CONTACT</a>
	</div>
{/if}

<div class="fixed top-8 left-0 w-full z-[1150] px-4 pointer-events-none" bind:this={navContainer}>
	<nav 
		class="max-w-[1200px] mx-auto bg-[rgba(15,15,15,0.8)] backdrop-blur-md border border-[rgba(255,255,255,0.05)] rounded-full px-6 py-3 md:px-8 md:py-4 flex justify-between items-center [box-shadow:0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(0,255,255,0.05)] pointer-events-auto" 
	>
		<a href="#hero" class="font-['Inter'] font-black text-xl text-[#00ffff] [text-shadow:0_0_10px_#00ffff] no-underline">BR</a>
		
		<div class="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2">
			<a href="#about" class="font-['Inter'] font-bold text-[0.75rem] text-white no-underline tracking-[0.15em] transition-all duration-300 opacity-70 hover:opacity-100 hover:text-[#00ffff] hover:[text-shadow:0_0_10px_rgba(0,255,255,0.5)]">ABOUT</a>
			<a href="#policies" class="font-['Inter'] font-bold text-[0.75rem] text-white no-underline tracking-[0.15em] transition-all duration-300 opacity-70 hover:opacity-100 hover:text-[#00ffff] hover:[text-shadow:0_0_10px_rgba(0,255,255,0.5)]">POLICIES</a>
			<a href="#media" class="font-['Inter'] font-bold text-[0.75rem] text-white no-underline tracking-[0.15em] transition-all duration-300 opacity-70 hover:opacity-100 hover:text-[#00ffff] hover:[text-shadow:0_0_10px_rgba(0,255,255,0.5)]">MEDIA</a>
			<a href="#map" class="font-['Inter'] font-bold text-[0.75rem] text-white no-underline tracking-[0.15em] transition-all duration-300 opacity-70 hover:opacity-100 hover:text-[#00ffff] hover:[text-shadow:0_0_10px_rgba(0,255,255,0.5)]">MAP</a>
		</div>

		<div class="hidden md:flex items-center gap-4">
			<a href="#footer" class="font-['Inter'] font-bold text-[0.75rem] text-white no-underline tracking-[0.15em] transition-all duration-300 opacity-70 hover:opacity-100 hover:text-[#00ffff] hover:[text-shadow:0_0_10px_rgba(0,255,255,0.5)]">CONTACT</a>
		</div>

		<button 
			class="md:hidden flex flex-col gap-1.5 p-2 -mr-2 bg-transparent border-0 cursor-pointer relative z-[1200]" 
			on:click={toggleMenu}
			aria-label="Toggle Menu"
		>
			<span class="block w-6 h-0.5 bg-[#00ffff] [box-shadow:0_0_8px_rgba(0,255,255,0.6)] transition-all duration-300 {isMenuOpen ? 'rotate-45 translate-y-2' : ''}"></span>
			<span class="block w-6 h-0.5 bg-[#00ffff] [box-shadow:0_0_8px_rgba(0,255,255,0.6)] transition-all duration-300 {isMenuOpen ? 'opacity-0' : ''}"></span>
			<span class="block w-6 h-0.5 bg-[#00ffff] [box-shadow:0_0_8px_rgba(0,255,255,0.6)] transition-all duration-300 {isMenuOpen ? '-rotate-45 -translate-y-2' : ''}"></span>
		</button>
	</nav>
</div>
