<script>
  import { onDestroy } from 'svelte';
  import { get } from 'svelte/store';
  import RedirectRow from 'src/components/blocks/RedirectSettings/Row';
  import { redirectStore } from 'src/store';
  import { WiredButton } from "wired-button";

  let redirectStoreIds;

	const unsubscribe = redirectStore.subscribe(store => {
		redirectStoreIds = Object.keys(store);
	});
	onDestroy(unsubscribe);

  const onAddButtonClick = () => redirectStore.addNewConfig();
  const onSaveButtonClick = () => {
    console.log('saving', get(redirectStore))
  }
</script>

<div class='content'>
  {#each redirectStoreIds as id (id)}
	  <RedirectRow id={id} />
  {/each}
</div>
<div class="buttons">
  <wired-button elevation='3' on:click={onAddButtonClick}>Add row</wired-button>
  <wired-button elevation='3' on:click={onSaveButtonClick}>Save</wired-button>
</div>

<style>
  .content {
    margin-bottom: 8px;
  }
  .buttons {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
</style>