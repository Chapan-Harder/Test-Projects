<script lang="ts">
	import ClockCircle from '../../components/Clock-circle.svelte';
	import ClockNumbers from '../../components/Clock-numbers.svelte';
</script>

<section class="flex flex-col justify-center items-center absolute inset-0">
	<div class="w-[350px] h-[350px]">
		<ClockCircle />
	</div>
	<div class="mt-10">
		<ClockNumbers />
	</div>
</section>
