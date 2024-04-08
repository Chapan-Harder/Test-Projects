<script lang="ts">
	import Input from '../../components/Input.svelte';

	let inputOne: string = '';
	let inputTwo: string = '';
</script>

<div class="flex flex-col justify-center items-center px-10 absolute inset-0">
	<h1 class="font-serif font-bold italic text-blue-100 capitalize text-5xl mb-20 select-none">
		write two names
	</h1>
	<Input bind:value={inputOne} />
	<Input bind:value={inputTwo} />

	{#if inputOne && inputTwo}
		<p class="font-serif font-normal text-blue-100 capitalize text-5xl select-none">
			{inputOne}
			<span class="font-serif font-normal animate-loop-animation capitalize text-5xl select-none"
				>and</span
			>
			{inputTwo}
		</p>
	{:else}
		<p class="font-serif font-normal animate-loop-animation capitalize text-5xl select-none">
			empty
		</p>
	{/if}
</div>
