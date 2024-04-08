<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let time: Date = new Date();

	$: hours = time.getHours();
	$: minutes = time.getMinutes();
	$: seconds = time.getSeconds();

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<section class="w-full h-full">
	<!-- Clock Numbers -->
	<h class="font-serif font-bold text-8xl text-blue-100 flex">
		<div class="w-[60px] h-[90px] relative">
			{#key Math.floor(hours / 10)}
				<p in:fly={{ y: '-100%' }} out:fly={{ y: '100%' }} class="absolute">
					{Math.floor(hours / 10)}
				</p>
			{/key}
		</div>
		<div class="w-[60px] h-[90px] relative mr-6">
			{#key hours % 10}
				<p in:fly={{ y: '-100%' }} out:fly={{ y: '100%' }} class="absolute">
					{hours % 10}
				</p>
			{/key}
		</div>
		:
		<div class="w-[60px] h-[90px] relative ml-6">
			{#key Math.floor(minutes / 10)}
				<p in:fly={{ y: '100%' }} out:fly={{ y: '-100%' }} class="absolute">
					{Math.floor(minutes / 10)}
				</p>
			{/key}
		</div>
		<div class="w-[60px] h-[90px] relative mr-6">
			{#key minutes % 10}
				<p in:fly={{ y: '100%' }} out:fly={{ y: '-100%' }} class="absolute">
					{minutes % 10}
				</p>
			{/key}
		</div>
		:
		<div class="w-[60px] h-[90px] relative ml-6">
			{#key Math.floor(seconds / 10)}
				<p in:fly={{ y: '-100%' }} out:fly={{ y: '100%' }} class="absolute">
					{Math.floor(seconds / 10)}
				</p>
			{/key}
		</div>
		<div class="w-[60px] h-[90px] relative">
			{#key seconds % 10}
				<p in:fly={{ y: '-100%' }} out:fly={{ y: '100%' }} class="absolute">
					{seconds % 10}
				</p>
			{/key}
		</div>
	</h>
</section>
