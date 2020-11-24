<script>
    import { createEventDispatcher } from 'svelte';

    export let categories = [];
    let showCategories = false;
    let rotateStyle;
    let categoriesToggleStyle = 'collpased';
    let selectedCategories = [];
    let searchTerm = "";

    let toggleCategories = () => {
        rotateStyle = showCategories ? "-rotate-180" : "rotate-0";
        categoriesToggleStyle = showCategories ? 'expanded' : 'collpased';
    };

	const dispatch = createEventDispatcher();

    let onFilterParamsChanged = () => {
        dispatch('filterParamsChanged', {
            q: searchTerm,
            categories: selectedCategories,
        });
    };
</script>

<!-- SEARCH BOX -->
<div class="relative max-w-xl mx-auto">
    <input type="text" tabindex="1" placeholder="Search..." bind:value={searchTerm} on:input={onFilterParamsChanged} class="w-full h-10 px-5 pr-10 placeholder-gray-500 rounded-lg shadow-lg text-primary bg-primary focus:outline-none">
    <label class="absolute top-0 right-0 p-2 mt-2 mr-4 rounded-full focus:outline-none hover:bg-secondary transition ease-out duration-300 transform {rotateStyle}">
        <input type="checkbox" class="hidden" bind:checked={showCategories} on:change={toggleCategories}>
        <svg width="12" height="12" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.41 7.705L6 3.12499L10.59 7.70499L12 6.29499L6 0.294995L-1.23266e-07 6.295L1.41 7.705Z" fill="#a0aec0"/>
        </svg>
	</label>
</div>

<!-- CATEGORIES -->
<div class="m-5 mx-auto overflow-y-auto transition-all duration-500 ease-in-out {categoriesToggleStyle}">
    <div class="py-3">
        {#each categories as category}
        <input id={category} type="checkbox" class="hidden" bind:group={selectedCategories} value={category} on:change={onFilterParamsChanged}>
        <label for="{category}" class="inline-block px-3 m-1 text-center border border-transparent shadow-lg text-primary ripple bg-primary rounded-xl hover:border-teal-700 hover:shadow transition duration-300 ease-in-out">
            {category}
        </label>
        {/each}
    </div>
</div>

<style>
    input[type="checkbox"]:checked + label {
        background: var(--badge-bg-blue);
        color: var(--badge-text-blue);
    }
</style>
