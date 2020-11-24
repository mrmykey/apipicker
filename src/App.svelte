<script>
	import Search from './components/Search.svelte';
	import NavBar from './components/NavBar.svelte';
	import Title from './components/Title.svelte';
	import ItemCard from './components/ItemCard.svelte';
	import Pagination from './components/Pagination.svelte';
    import {apis} from './data.js';
    import {categories} from './categories.js'

    const itemsPerPage = 51;
    let filteredApis = apis.sort(() => Math.random() - 0.5);
    let pageCnt = Math.ceil(apis.length / itemsPerPage);
    let currentPage = 1;

    let filter = (event) => {
        filteredApis = apis;

        let c = event.detail.categories;
        if (c.length > 0) {
            filteredApis = filteredApis.filter(x => c.includes(x.category));
        }

        let q = event.detail.q.toLowerCase();
        if (q !== "") {
            filteredApis = filteredApis.filter(x => x.title.toLowerCase().indexOf(q) !== -1 || x.description.toLowerCase().indexOf(q) !== -1);
        }

        pageCnt = Math.ceil(filteredApis.length / itemsPerPage);
        currentPage = 1;
    };

    let getCurrentPage = (event) => currentPage = event.detail;
</script>

<NavBar/>
<Title/>
<div class="container px-5 mx-auto xl:px-32">
    <Search categories={categories} on:filterParamsChanged={filter}/>
	<div class="mt-8 mb-16 grid md:grid-cols-3 gap-5 lg:gap-10">
		{#each filteredApis.slice((currentPage - 1) * itemsPerPage, itemsPerPage * currentPage) as api}
            <ItemCard api={api}/>
		{/each}
    </div>
    <Pagination totalPages={pageCnt} currentPage={currentPage} on:currentPageChanged={getCurrentPage}/>
</div>
