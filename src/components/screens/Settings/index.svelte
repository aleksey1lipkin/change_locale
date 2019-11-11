<script>
  import { WiredButton } from 'wired-button';
  import { WiredDivider } from 'wired-divider';
  import { onDestroy } from 'svelte';
  import { get } from 'svelte/store';
  import RedirectRow from 'src/components/blocks/RedirectRow';
  import SettingsDescription from 'src/components/blocks/SettingsDescription';
  import Title from 'src/components/blocks/Title';
  import { redirectStore } from 'src/store';
  import { saveInChromeStore } from 'src/utils/chrome';
  import { CHROME_STORE_KEYS } from 'src/utils/constants';
  import { strings } from './strings.js';

  let redirectStoreIds;

	const unsubscribe = redirectStore.subscribe(store => {
		redirectStoreIds = Object.keys(store || {});
	});
	onDestroy(unsubscribe);

  const onAddButtonClick = () => redirectStore.addNewConfig();
  const onSaveButtonClick = () => {
    saveInChromeStore({
      storageName: CHROME_STORE_KEYS.redirectSettings,
      storageValue: get(redirectStore)
    });
  }
</script>

<div class='content'>
  <Title text={strings.title} />
  <SettingsDescription />
  <wired-divider class='divider' />
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
  .divider {
    margin-bottom: 4px;
  }
</style>