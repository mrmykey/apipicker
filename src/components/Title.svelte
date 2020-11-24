<script>
    import { onMount } from 'svelte';

    const baseUrl = 'https://github.com/mrmykey/apipicker';
    let repository = {forks_count: 0, stargazers_count: 0};
    let openLink = link => window.open(baseUrl + link);

    onMount(async () => {
        let response = await fetch('https://api.github.com/repositories/315692852');
        repository = await response.json();
	});
</script>

<div class="max-w-xl mx-auto my-4 text-center">
	<h1 class="text-4xl font-bold text-primary">api picker<span class="pl-2 mb-5 text-3xl"> 🛰️</span></h1>
	<h2 class="text-xl text-primary">find api for your next project</h2>
</div>

<!-- GITHUB BUTTONS -->
<div class="flex justify-center mb-8">
	<div class="inline-flex items-center mr-1 font-sans text-sm">
        <button on:click={() => openLink('/')}
			class="flex items-center px-3 py-1 font-medium border rounded-l-lg rounded-r-none border-gh-btn bg-gh-btn-left hover:bg-gh-btn-hover focus:outline-none">
			<svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
				<path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/>
			</svg>
			<p class="pl-1 text-primary">Star</p>
		</button>
        <a href="{`${baseUrl}/stargazers`}" target="_blank" class="px-3 py-1 font-semibold bg-white border border-l-0 rounded-l-none rounded-r-lg text-primary border-gh-btn hover:text-indigo-600 bg-secondary">{repository.stargazers_count}</a>
	</div>

	<div class="inline-flex items-center ml-1 font-sans text-sm">
        <button on:click={() => openLink('/fork')}
			class="flex items-center px-3 py-1 font-medium border rounded-l-lg rounded-r-none border-gh-btn bg-gh-btn-left hover:bg-gh-btn-hover focus:outline-none">
			<svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
			</svg>
			<p class="pl-1 text-primary">Fork</p>
		</button>
        <a href="{`${baseUrl}/members`}" target="_blank" class="px-3 py-1 font-semibold bg-white border border-l-0 rounded-l-none rounded-r-lg text-primary border-gh-btn hover:text-indigo-600 bg-secondary">{repository.forks_count}</a>
	</div>
</div>
