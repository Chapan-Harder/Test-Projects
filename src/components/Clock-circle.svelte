<script lang="ts">
	import { onMount } from 'svelte';

	let time = new Date();

	// these automatically update when `time`
	// changes, because of the `$:` prefix
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

<svg viewBox="-50 -50 100 100" class="w-full h-full">
	<circle class="stroke-slate-950 fill-sky-300" r="48" />
	<!-- markers -->
	{#each [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] as minute}
		<circle class="major" r="45" transform="rotate({30 * minute})" />
	{/each}

	<!-- hour hand -->
	<line class="stroke-black" y1="2" y2="-20" transform="rotate({30 * hours + minutes / 2})" />

	<!-- minute hand -->
	<line class="stroke-gray-600" y1="4" y2="-30" transform="rotate({6 * minutes + seconds / 10})" />

	<!-- second hand -->
	<g transform="rotate({6 * seconds})">
		<line class="stroke-pink-600" y1="10" y2="-38" />
		<line class="second-counterweight stroke-2 stroke-pink-600" y1="10" y2="2" />
	</g>
</svg>

<style>
	.major {
		stroke: #333;
		stroke-width: 0.5;
		stroke: #00aeff;
		fill: none;
	}
</style>
