<script lang="ts">
    import BookOpenIcon from "svelte-feather-icons/src/icons/BookOpenIcon.svelte";
    import { goto } from "$app/navigation";

    export let name: string;
    export let uuid: string;
    export let cardCount: number;
</script>

<div class="card w-full md:w-96 bg-base-300 shadow-xl">
    <div class="card-body">
        <h2 class="card-title">{name}</h2>

        <div class="flex gap-3 text-secondary">
            <BookOpenIcon size="18" class="mt-1" />
            {cardCount} cards
        </div>

        <div class="card-actions justify-end mt-3">
            <button
                class="btn btn-primary"
                on:click={() => goto(`/learn/${uuid}`)}>Open set</button
            >
        </div>
    </div>
</div>
