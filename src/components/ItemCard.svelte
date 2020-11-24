<script>
    export let api;
</script>

<a href="{api.url}" target="_blank" class="relative flex flex-col justify-between h-full min-w-full p-10 overflow-x-hidden border border-primary rounded-xl bg-primary hover:border-teal-700 hover:shadow transition duration-300 ease-in-out">
    <div>
        <h1 class="pb-5 text-3xl text-center underline text-primary overflow-wrap">{api.title}</h1>
        <div class="pb-8 text-xl text-justify text-primary">{api.description}</div>
    </div>
    <div class="pb-3">
        {#if api.authType !== null}
        <span class="px-3 py-1 text-xs font-semibold tracking-wider rounded-lg bg-badge-green text-badge-green">{api.authType}</span>
        {/if}
        <span class="px-3 py-1 text-xs font-semibold tracking-wider rounded-lg bg-badge-orange text-badge-orange">{api.encrypted ? 'https' : 'http'}</span>
    </div>
    <span class="absolute bottom-0 right-0 px-4 py-1 text-xs font-semibold tracking-wider rounded-tl-xl rounded-br-xl bg-badge-blue text-badge-blue">{api.category}</span>
</a>
