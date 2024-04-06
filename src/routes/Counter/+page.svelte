<script lang="ts">
	let Count: number = 0;
</script>

<section class="flex flex-col justify-center items-center absolute inset-0">
	<h1 class="text-blue-100 font-serif text-3xl capitalize select-none">
		welcome to the <span class="font-extrabold text-cyan-200">"test project"</span>
	</h1>

	<h1 class="text-blue-100 font-serif text-2xl capitalize mt-8 select-none">the counter</h1>

	<!-- Print Section -->
	<h1
		class="flex justify-center items-center text-blue-100 font-serif font-extrabold text-[200px] select-none"
	>
		{Count}
	</h1>

	<!-- Buttons Section -->
	<section class="flex justify-center mt-16">
		<button
			on:click={() => Count++}
			class="bg-blue-900/50 px-4 py-2 font-serif text-xl font-normal text-slate-300 capitalize mr-8 rounded-md border-slate-500 border-[1px] transition-colors ease-in hover:bg-blue-900/20 hover:text-slate-300/30 hover:border-slate-500/30 select-none cursor-ponycursorpointer"
			>+ plus +</button
		>

		<button
			on:click={() => (Count = 0)}
			class="bg-blue-900/50 px-4 py-2 font-serif text-xl font-normal text-slate-300 capitalize mr-8 rounded-md border-slate-500 border-[1px] transition-colors ease-in hover:bg-blue-900/20 hover:text-slate-300/30 hover:border-slate-500/30 select-none cursor-ponycursorpointer"
			>reset</button
		>

		<button
			on:click={() => Count--}
			class="bg-blue-900/50 px-4 py-2 font-serif text-xl font-normal text-slate-300 capitalize mr-8 rounded-md border-slate-500 border-[1px] transition-colors ease-in hover:bg-blue-900/20 hover:text-slate-300/30 hover:border-slate-500/30 select-none cursor-ponycursorpointer"
			>- minus -</button
		>
	</section>
</section>
