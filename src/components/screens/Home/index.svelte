<script>
  import { onMount } from 'svelte';
  import { WiredLink } from 'wired-link';
  import { strings } from './strings';
  import AppStatus from 'src/components/blocks/AppStatus';
  import Title from 'src/components/blocks/Title';
  import { saveInChromeStore, getFromChromeStore } from 'src/utils/chrome';
  import { CHROME_STORE_KEYS } from 'src/utils/constants';

  let redirectWithoutNotify;
  onMount(async () => {
    redirectWithoutNotify = await getFromChromeStore(
      CHROME_STORE_KEYS.redirectWithoutNotify,
    );
  });

  const onStatusChange = event => {
    saveInChromeStore({
      storageName: strings.settingName,
      storageValue: event.detail.checked,
    });
  };
</script>

<Title text={strings.title} />
<div class="content">
  <!-- <AppStatus checked={redirectWithoutNotify} on:change={onStatusChange} /> -->
  <wired-link href="#/settings" class='link' elevation='2'>Go to the settings</wired-link>
</div>

<style>
  .content {
    display: flex;
    flex-direction: column;
  }
  .link {
    font-size: 16px;
  }
</style>
