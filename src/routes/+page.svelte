<script>
	import { onMount } from 'svelte';
	import LeftContainer from './LeftContainer.svelte';
	import RightContainer from './RightContainer.svelte';

    onMount(() => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6Ijc2NDhmZWE4LTcyZDctNGY1OC04YjA1LTMzNGQ1MmRjZTE5ZSIsInVzZXJuYW1lIjoiYWRtaW4iLCJleHAiOjE3MTUxNTYzODF9.JxrNC43xQDDb_AuGYz-_oUIqv-kVQPGzrXMqtWkiVxA')
        localStorage.setItem('baseUrl', 'http://localhost:8080')
    })

</script>

<main class="w-screen h-screen">
	<div class="flex h-full">
		<div class="w-1/5 min-w-40 border-solid border-2 border-sky-500">
			<LeftContainer />
		</div>
		<div class="w-4/5 min-w-96 border-solid border-2 border-red-500">
			<RightContainer />
		</div>
	</div>
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
