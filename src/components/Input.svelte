<script lang="ts">
	export let value: string;

	const handleInput = (event: any) => {
		const newValue = event.target.value;
		// Emit an 'input' event with the new value
		const inputEvent = new CustomEvent('input', { detail: newValue });
		dispatchEvent(inputEvent);
	};
</script>

<input
	type="text"
	bind:value
	on:input={handleInput}
	class="bg-slate-950 rounded-lg w-full px-4 py-2 border-pink-700 font-serif font-normal text-blue-100 text-2xl shadow-blue-950 shadow-lg mb-12"
/>
