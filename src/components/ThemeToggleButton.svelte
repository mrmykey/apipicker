<script>
    import { onMount } from 'svelte';
    import { scale } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';

    // Switch color theme
    let dark = false;
    let ready = false;

    onMount(() => {
        const savedTheme = localStorage.getItem('dark');
        dark = savedTheme === null ? localStorage.setItem('dark', false) : savedTheme == 'true';
        if (dark) window.document.body.classList.add('dark');
        ready = true;
	});

    let switchTheme = () => { 
        dark = !dark;
        localStorage.setItem('dark', dark);

        transition();
        window.document.body.classList.toggle('dark');
    };

    let transition = () => {
        document.documentElement.classList.add('fade');
        window.setTimeout(() => {
            document.documentElement.classList.remove('fade')
        }, 800);
    };
</script>

<div on:click={switchTheme} class="flex items-center justify-center text-2xl cursor-pointer theme-switch-container">
    {#if ready}
        {#if dark}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
                transition:scale="{{duration: 800, delay: 0, opacity: 0, size: 1, easing: elasticOut}}">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 4V8.69L23.31 12L20 15.31V20H15.31L12 23.31L8.69 20H4V15.31L0.689999 12L4 8.69V4H8.69L12 0.690002L15.31 4H20ZM18 18V14.48L20.48 12L18 9.52V6H14.48L12 3.52L9.52 6H6V9.52L3.52 12L6 14.48V18H9.52L12 20.48L14.48 18H18ZM12 6.5C8.97 6.5 6.5 8.97 6.5 12C6.5 15.03 8.97 17.5 12 17.5C15.03 17.5 17.5 15.03 17.5 12C17.5 8.97 15.03 6.5 12 6.5ZM8.5 12C8.5 13.93 10.07 15.5 12 15.5C13.93 15.5 15.5 13.93 15.5 12C15.5 10.07 13.93 8.5 12 8.5C10.07 8.5 8.5 10.07 8.5 12Z"/>
            </svg>
        {:else}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                transition:scale="{{duration: 800, delay: 0, opacity: 0, size: 1, easing: elasticOut}}">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 8.69V4H15.31L12 0.690002L8.69 4H4V8.69L0.690002 12L4 15.31V20H8.69L12 23.31L15.31 20H20V15.31L23.31 12L20 8.69ZM18 14.48V18H14.48L12 20.48L9.52 18H6V14.48L3.52 12L6 9.52V6H9.52L12 3.52L14.48 6H18V9.52L20.48 12L18 14.48ZM10.21 7.46C10.84 7.17 11.55 7 12.29 7C15.05 7 17.29 9.24 17.29 12C17.29 14.76 15.05 17 12.29 17C11.55 17 10.84 16.83 10.21 16.54C11.93 15.75 13.13 14.01 13.13 12C13.13 9.99 11.93 8.25 10.21 7.46Z"/>
            </svg>
        {/if}
    {/if}
</div>

<style>
    .theme-switch-container {
        width: 24px;
        height: 24px;
    }
    svg { position: absolute; }
</style>
