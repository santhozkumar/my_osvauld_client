<script>
	import { createFolder, fetchFolders } from '$lib/apis/folder.api';
	import ClosePanel from '$lib/components/basic/icons/closePanel.svelte';
	import { onMount } from 'svelte';
	import { showAddFolderDrawer } from '../store';

	const addFolderFunc = async () => {
		const payload = { name: name, description: description };
		await createFolder(payload);

        const folderData = await fetchFolders()
		console.log('folderResponse', folderData);
		showAddFolderDrawer.set(false);
	};
	onMount(() => {
		console.log('adding folder modal');
	});
	ClosePanel;

	const autofocus = (node) => {
		node.focus();
	};

	let name = '';
	let description = '';

	const handleClose = () => {
		showAddFolderDrawer.set(false);
	};
</script>

<form class="flex flex-col p-6 border-black" on:submit|preventDefault={addFolderFunc}>
	<div>
		<span> Create Folder </span>
		<button on:click={handleClose}>
			<ClosePanel />
		</button>
	</div>
	<label for="name">Name</label>
	<input class="form-input h-10" id="name" use:autofocus bind:value={name} required type="text" />

	<label for="desc">Description</label>
	<input class="form-textarea h-20 w-[95%]" id="desc" type="textarea" bind:value={description} />
	<div>
		<button type="button" on:click={handleClose}> Close </button>
		<button type="submit" disabled={!name}>Add Folder</button>
	</div>
</form>
