<script lang="ts">
	import { blur } from 'svelte/transition';
	import '../app.css';
	import Navebar from '../components/Navebar.svelte';

	export let data;
</script>

<Navebar />

<main class="fixed inset-0 bg-gradient-to-tr from-slate-950 to-sky-950">
	{#key data.url}
		<div
			in:blur={{ duration: 500, delay: 150, amount: 15 }}
			out:blur={{ duration: 500, amount: 15 }}
			class="absolute inset-0 overflow-hidden mx-56"
		>
			<slot />
		</div>
	{/key}
</main>
