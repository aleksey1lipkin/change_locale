<script>
  import { onMount } from 'svelte';
  import { WiredLink } from 'wired-link';
  import { strings } from './strings';
  import AppStatus from 'src/components/blocks/AppStatus';
  import { saveInChromeStore, getFromChromeStore } from 'src/utils/chrome';
  import { CHROME_STORE_KEYS } from 'src/utils/constants';

  
  let redirectWithoutNotify;
  onMount(async () => {
    redirectWithoutNotify = await getFromChromeStore(CHROME_STORE_KEYS.redirectWithoutNotify);
  })
    
  const onStatusChange = (event) => {
    saveInChromeStore({
      storageName: strings.settingName,
      storageValue: event.detail.checked,
    });
  }
</script>
    
<h1 class="title">
  {strings.title}
</h1>
<div class="content">
  <AppStatus checked={redirectWithoutNotify} on:change={onStatusChange} />
  <wired-link href='#/settings'>Go to the settings</wired-link>
</div>

<style>
  .title {
    font-size: 18px;
    text-align: center;
    margin-bottom: 8;
  }
  .content {
    display: flex;
    flex-direction: column;
  }
</style>