<script>
    import { createEventDispatcher } from 'svelte';

    export let currentPage;
    export let totalPages;
    $: pages = Array.from({length: totalPages >= 9 ? 9: totalPages}, (_, i) => i + 1);


	const dispatch = createEventDispatcher();

    let onCurrentPageChanged = () => {
        dispatch('currentPageChanged', currentPage);
    };

    let nextPage = () => {
        if (currentPage < totalPages) {
            currentPage++;
            setPages();
        }
    };

    let previousPage = () => {
        if (currentPage > 1) {
            currentPage--;
            setPages();
        }
    };

    let selectPage = (page) => {
        currentPage = page;
        setPages();
    };

    let setPages = () => {
        let first, last;
        let stride = 4;
        if (totalPages > 9) {
            first = currentPage - stride < 1 ? 1 : currentPage - 4;
            last = currentPage + stride > totalPages ? totalPages : currentPage + stride;
            if (stride - currentPage + 1 > 0)
                last += stride - currentPage + 1;
            if (stride + currentPage > totalPages)
                first -= currentPage + stride - totalPages;
        }
        else {
            first = 1;
            last = totalPages;
        }

        pages = Array(last - first + 1).fill(0).map((_, i) => first + i);
            
        onCurrentPageChanged();
        window.scrollTo(0, 0);
    };
</script>

{#if totalPages > 1}
<div class="flex justify-center m-5 mx-auto leading-none">
    <button class="px-3 m-1 focus:outline-none" on:click={previousPage}>
		<svg width="6" height="14" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M6 8.825L2.2915 5L6 1.175L4.8583 0L0 5L4.8583 10L6 8.825Z"/>
		</svg>
	</button>

    {#each pages as i}
        <button on:click={() => selectPage(i)} class="text-primary px-1 m-1 rounded-full focus:outline-none hover:text-badge-blue {i == currentPage ? 'bg-badge-blue text-badge-blue' : ''}">{i}</button>
    {/each}

    <button class="px-3 m-1 focus:outline-none" on:click={nextPage}>
		<svg width="6" height="14" viewBox="0 0 6 8" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 8.825L3.7085 5L0 1.175L1.1417 0L6 5L1.1417 10L0 8.825Z"/>
		</svg>
	</button>
</div>
{/if}

<style>
    button:hover svg path {
        fill: var(--badge-text-blue);
    }
</style>
