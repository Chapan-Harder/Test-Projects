<script lang="ts">
	let numberInput: any = '';
	let total: number = 0;

	// private function
	function addToEquation(value: string) {
		numberInput += value;
	}

	const clear = () => {
		total = 0;
		numberInput = '';
	};

	function calculate() {
		if (numberInput !== '') {
			numberInput = result().toString();
		}
	}

	function replaceAll(string: any, search: any, replace: any) {
		return string.split(search).join(replace);
	}

	function formatString(value: string) {
		return replaceAll(replaceAll(value, '*', 'x'), '/', '÷');
	}

	// computed
	let result = () => {
		if (!isNaN(numberInput.slice(-1))) {
			return eval(numberInput);
		}
		return eval(numberInput.slice(0, -1));
	};

	// reactive values
	$: if (numberInput !== '' && !isNaN(numberInput.slice(-1)) && numberInput != result()) {
		total = result().toString();
	}
</script>

<section class=" flex flex-col justify-center items-center absolute inset-0">
	<section
		class="bg-slate-950/30 grid grid-cols-4 grid-rows-7 gap-4 h-full w-full my-32 rounded-br-[50px] rounded-tl-[50px] border-[1px] border-solid border-slate-500 px-8 py-6"
	>
		<div
			class="bg-zinc-950/70 col-span-4 row-span-2 w-full h-full rounded-xl flex justify-end items-center"
		>
			<h1 class="font-serif font-extrabold text-right text-blue-100 text-8xl">
				{numberInput}
			</h1>
		</div>

		<button
			on:click={() => addToEquation('7')}
			class="bg-blue-900/50 font-serif font-extrabold text-blue-100 text-6xl border-slate-500 border-[1px] transition-colors ease-in hover:bg-blue-900/20 hover:text-slate-300/30 hover:border-slate-500/30 select-none w-full h-full rounded-xl cursor-ponycursorpointer"
			>7</button
		>
		<button
			on:click={() => addToEquation('8')}
			class="bg-blue-900/50 font-serif font-extrabold text-blue-100 text-6xl border-slate-500 border-[1px] transition-colors ease-in hover:bg-blue-900/20 hover:text-slate-300/30 hover:border-slate-500/30 select-none w-full h-full rounded-xl cursor-ponycursorpointer"
			>8</button
		>
		<button
			on:click={() => addToEquation('9')}
			class="bg-blue-900/50 font-serif font-extrabold text-blue-100 text-6xl border-slate-500 border-[1px] transition-colors ease-in hover:bg-blue-900/20 hover:text-slate-300/30 hover:border-slate-500/30 select-none w-full h-full rounded-xl cursor-ponycursorpointer"
			>9</button
		>
		<button
			on:click={() => addToEquation('+')}
			class="bg-blue-900/50 font-serif font-extrabold text-blue-100 text-6xl border-slate-500 border-[1px] transition-colors ease-in hover:bg-blue-900/20 hover:text-slate-300/30 hover:border-slate-500/30 select-none w-full h-full rounded-xl cursor-ponycursorpointer"
			>+</button
		>
		<button
			on:click={() => addToEquation('4')}
			class="bg-blue-900/50 font-serif font-extrabold text-blue-100 text-6xl border-slate-500 border-[1px] transition-colors ease-in hover:bg-blue-900/20 hover:text-slate-300/30 hover:border-slate-500/30 select-none w-full h-full rounded-xl cursor-ponycursorpointer"
			>4</button
		>
		<button
			on:click={() => addToEquation('5')}
			class="bg-blue-900/50 font-serif font-extrabold text-blue-100 text-6xl border-slate-500 border-[1px] transition-colors ease-in hover:bg-blue-900/20 hover:text-slate-300/30 hover:border-slate-500/30 select-none w-full h-full rounded-xl cursor-ponycursorpointer"
			>5</button
		>
		<button
			on:click={() => addToEquation('6')}
			class="bg-blue-900/50 font-serif font-extrabold text-blue-100 text-6xl border-slate-500 border-[1px] transition-colors ease-in hover:bg-blue-900/20 hover:text-slate-300/30 hover:border-slate-500/30 select-none w-full h-full rounded-xl cursor-ponycursorpointer"
			>6</button
		>
		<button
			on:click={() => addToEquation('-')}
			class="bg-blue-900/50 font-serif font-extrabold text-blue-100 text-6xl border-slate-500 border-[1px] transition-colors ease-in hover:bg-blue-900/20 hover:text-slate-300/30 hover:border-slate-500/30 select-none w-full h-full rounded-xl cursor-ponycursorpointer"
			>-</button
		>
		<button
			on:click={() => addToEquation('1')}
			class="bg-blue-900/50 font-serif font-extrabold text-blue-100 text-6xl border-slate-500 border-[1px] transition-colors ease-in hover:bg-blue-900/20 hover:text-slate-300/30 hover:border-slate-500/30 select-none w-full h-full rounded-xl cursor-ponycursorpointer"
			>1</button
		>
		<button
			on:click={() => addToEquation('2')}
			class="bg-blue-900/50 font-serif font-extrabold text-blue-100 text-6xl border-slate-500 border-[1px] transition-colors ease-in hover:bg-blue-900/20 hover:text-slate-300/30 hover:border-slate-500/30 select-none w-full h-full rounded-xl cursor-ponycursorpointer"
			>2</button
		>
		<button
			on:click={() => addToEquation('3')}
			class="bg-blue-900/50 font-serif font-extrabold text-blue-100 text-6xl border-slate-500 border-[1px] transition-colors ease-in hover:bg-blue-900/20 hover:text-slate-300/30 hover:border-slate-500/30 select-none w-full h-full rounded-xl cursor-ponycursorpointer"
			>3</button
		>
		<button
			on:click={() => addToEquation('*')}
			class="bg-blue-900/50 font-serif font-extrabold text-blue-100 text-6xl border-slate-500 border-[1px] transition-colors ease-in hover:bg-blue-900/20 hover:text-slate-300/30 hover:border-slate-500/30 select-none w-full h-full rounded-xl cursor-ponycursorpointer"
			>×</button
		>
		<button
			on:click={() => addToEquation('0')}
			class="bg-blue-900/50 font-serif font-extrabold text-blue-100 text-6xl border-slate-500 border-[1px] transition-colors ease-in hover:bg-blue-900/20 hover:text-slate-300/30 hover:border-slate-500/30 select-none w-full h-full rounded-xl cursor-ponycursorpointer"
			>0</button
		>
		<button
			on:click={() => addToEquation('.')}
			class="bg-blue-900/50 font-serif font-extrabold text-blue-100 text-6xl border-slate-500 border-[1px] transition-colors ease-in hover:bg-blue-900/20 hover:text-slate-300/30 hover:border-slate-500/30 select-none w-full h-full rounded-xl cursor-ponycursorpointer"
			>.</button
		>
		<button
			on:click={clear}
			class="bg-red-900/50 font-serif font-extrabold text-blue-100 text-6xl border-slate-500 border-[1px] transition-colors ease-in hover:bg-red-900/20 hover:text-slate-300/30 hover:border-slate-500/30 select-none w-full h-full rounded-xl capitalize cursor-ponycursorpointer"
			>clear</button
		>
		<button
			on:click={() => addToEquation('/')}
			class="bg-blue-900/50 font-serif font-extrabold text-blue-100 text-6xl border-slate-500 border-[1px] transition-colors ease-in hover:bg-blue-900/20 hover:text-slate-300/30 hover:border-slate-500/30 select-none w-full h-full rounded-xl capitalize cursor-ponycursorpointer"
			>÷</button
		>
		<button
			on:click={() => calculate()}
			class="bg-green-900/50 col-span-4 font-serif font-extrabold text-blue-100 text-6xl border-slate-500 border-[1px] transition-colors ease-in hover:bg-green-900/20 hover:text-slate-300/30 hover:border-slate-500/30 select-none w-full h-full rounded-xl capitalize cursor-ponycursorpointer"
			>=</button
		>
	</section>
</section>
