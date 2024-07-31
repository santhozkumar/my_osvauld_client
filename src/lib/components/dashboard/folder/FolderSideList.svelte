<script>
	import { fetchFolders } from '$lib/apis/folder.api';
	import Add from '$lib/components/basic/icons/Add.svelte';
	import { onMount } from 'svelte';
	import { showAddFolderDrawer } from '../store';
	import AddFolder from './AddFolder.svelte';

	let iconColor = '#6E7681';

	const openModal = () => {
		console.log($showAddFolderDrawer, 'open modal');
		showAddFolderDrawer.set(true);
	};

	const closeModal = () => {
		console.log($showAddFolderDrawer, 'close modal');
		showAddFolderDrawer.set(false);
	};

	onMount(async () => {
		const folderData = await fetchFolders();
		console.log(folderData);
	});
</script>

<div>
	<button
		class="border whitespace-nowrap"
		on:click={openModal}
		on:mouseenter={() => {
			iconColor = '#000';
		}}
		on:mouseleave={() => {
			iconColor = '#6E7681';
		}}
	>
		<span> Create New Folder </span>
		<Add color={iconColor} />
	</button>
	<ul>
		<li>Folder 1</li>
		<li>Folder 2</li>
		<li>Folder 3</li>
		<li>Folder 4</li>
		<li>Folder 5</li>
	</ul>

	{#if $showAddFolderDrawer}
		<button on:click|stopPropagation></button>
		<button
			class="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-[2px]"
			on:click={closeModal}
		>
			<button class="p-6 rounded" on:click|stopPropagation>
				<AddFolder />
			</button>
		</button>
	{/if}
</div>
