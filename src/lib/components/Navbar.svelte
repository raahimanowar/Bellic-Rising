<script lang="ts">
	import { fade } from 'svelte/transition';
	import gsap from 'gsap';

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
				duration: 0.6,
				delay: 0.3,
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
		class="fixed inset-0 z-[1100] flex flex-col items-center justify-center gap-8 bg-[rgba(10,10,10,0.98)] p-8 backdrop-blur-xl md:hidden"
		transition:fade={{ duration: 300 }}
		onclick={closeMenu}
		onkeydown={(e) => e.key === 'Escape' && closeMenu()}
		role="button"
		tabindex="0"
	>
		<a
			href="#about"
			onclick={closeMenu}
			class="font-['Inter'] text-3xl font-black tracking-[0.2em] text-white no-underline transition-all duration-300 hover:text-[#00ffff] hover:[text-shadow:0_0_20px_rgba(0,255,255,0.6)]"
			>ABOUT</a
		>
		<a
			href="#policies"
			onclick={closeMenu}
			class="font-['Inter'] text-3xl font-black tracking-[0.2em] text-white no-underline transition-all duration-300 hover:text-[#00ffff] hover:[text-shadow:0_0_20px_rgba(0,255,255,0.6)]"
			>POLICIES</a
		>
		<a
			href="#media"
			onclick={closeMenu}
			class="font-['Inter'] text-3xl font-black tracking-[0.2em] text-white no-underline transition-all duration-300 hover:text-[#00ffff] hover:[text-shadow:0_0_20px_rgba(0,255,255,0.6)]"
			>MEDIA</a
		>
		<a
			href="#map"
			onclick={closeMenu}
			class="font-['Inter'] text-3xl font-black tracking-[0.2em] text-white no-underline transition-all duration-300 hover:text-[#00ffff] hover:[text-shadow:0_0_20px_rgba(0,255,255,0.6)]"
			>MAP</a
		>
		<a
			href="#footer"
			onclick={closeMenu}
			class="font-['Inter'] text-3xl font-black tracking-[0.2em] text-white no-underline transition-all duration-300 hover:text-[#00ffff] hover:[text-shadow:0_0_20px_rgba(0,255,255,0.6)]"
			>CONTACT</a
		>
	</div>
{/if}

<div class="pointer-events-none fixed top-8 left-0 z-[1150] w-full px-4" bind:this={navContainer}>
	<nav
		class="pointer-events-auto mx-auto flex max-w-[1200px] items-center justify-between rounded-full border border-[rgba(255,255,255,0.05)] bg-[rgba(15,15,15,0.8)] px-6 py-3 [box-shadow:0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(0,255,255,0.05)] backdrop-blur-md md:px-8 md:py-4"
	>
		<a
			href="#hero"
			class="font-['Inter'] text-xl font-black text-[#00ffff] no-underline [text-shadow:0_0_10px_#00ffff]"
			>BR</a
		>

		<div class="absolute left-1/2 hidden -translate-x-1/2 gap-10 md:flex">
			<a
				href="#about"
				class="font-['Inter'] text-[0.75rem] font-bold tracking-[0.15em] text-white no-underline opacity-70 transition-all duration-300 hover:text-[#00ffff] hover:opacity-100 hover:[text-shadow:0_0_10px_rgba(0,255,255,0.5)]"
				>ABOUT</a
			>
			<a
				href="#policies"
				class="font-['Inter'] text-[0.75rem] font-bold tracking-[0.15em] text-white no-underline opacity-70 transition-all duration-300 hover:text-[#00ffff] hover:opacity-100 hover:[text-shadow:0_0_10px_rgba(0,255,255,0.5)]"
				>POLICIES</a
			>
			<a
				href="#media"
				class="font-['Inter'] text-[0.75rem] font-bold tracking-[0.15em] text-white no-underline opacity-70 transition-all duration-300 hover:text-[#00ffff] hover:opacity-100 hover:[text-shadow:0_0_10px_rgba(0,255,255,0.5)]"
				>MEDIA</a
			>
			<a
				href="#map"
				class="font-['Inter'] text-[0.75rem] font-bold tracking-[0.15em] text-white no-underline opacity-70 transition-all duration-300 hover:text-[#00ffff] hover:opacity-100 hover:[text-shadow:0_0_10px_rgba(0,255,255,0.5)]"
				>MAP</a
			>
		</div>

		<div class="hidden items-center gap-4 md:flex">
			<a
				href="#footer"
				class="font-['Inter'] text-[0.75rem] font-bold tracking-[0.15em] text-white no-underline opacity-70 transition-all duration-300 hover:text-[#00ffff] hover:opacity-100 hover:[text-shadow:0_0_10px_rgba(0,255,255,0.5)]"
				>CONTACT</a
			>
		</div>

		<button
			class="relative z-[1200] -mr-2 flex cursor-pointer flex-col gap-1.5 border-0 bg-transparent p-2 md:hidden"
			onclick={toggleMenu}
			aria-label="Toggle Menu"
		>
			<span
				class="block h-0.5 w-6 bg-[#00ffff] [box-shadow:0_0_8px_rgba(0,255,255,0.6)] transition-all duration-300 {isMenuOpen
					? 'translate-y-2 rotate-45'
					: ''}"
			></span>
			<span
				class="block h-0.5 w-6 bg-[#00ffff] [box-shadow:0_0_8px_rgba(0,255,255,0.6)] transition-all duration-300 {isMenuOpen
					? 'opacity-0'
					: ''}"
			></span>
			<span
				class="block h-0.5 w-6 bg-[#00ffff] [box-shadow:0_0_8px_rgba(0,255,255,0.6)] transition-all duration-300 {isMenuOpen
					? '-translate-y-2 -rotate-45'
					: ''}"
			></span>
		</button>
	</nav>
</div>
