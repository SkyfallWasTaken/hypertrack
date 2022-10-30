<script lang="ts">
    import Card from "./Card.svelte";
    import PlusIcon from "svelte-feather-icons/src/icons/PlusIcon.svelte";
</script>

<svelte:head>
    <title>Learn - Hypertrack</title>
</svelte:head>

<div class="flex">
    <h1 class="text-3xl font-bold mb-5">Your decks</h1>
    <button class="btn btn-primary ml-auto gap-1">
        <PlusIcon strokeWidth={2.2} />
        New deck
    </button>
</div>
<Card name="French vocab" cardCount={3} uuid="hey" />
