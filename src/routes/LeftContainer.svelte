<script>
	import Logo from "$lib/components/basic/icons/logo.svelte";
	import FolderSideList from "$lib/components/dashboard/folder/FolderSideList.svelte";

</script>

<div class="flex">
    <Logo />
</div>


<div class="flex">
    <button class="border-solid rounded-lg border-red-500 pl-5">
        <span>Folders</span>
    </button>

    <button class="border-solid rounded-lg border-red-500 p-8">
        <span>Group</span>
    </button>
</div>

<div>
    <FolderSideList/>
</div>
