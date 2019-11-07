<style>
  .title {
    font-size: 18px;
    text-align: center;
    margin-bottom: 8;
  }
</style>

<script>
  import { onMount, beforeUpdate } from 'svelte';
  import { strings } from './strings';
  import AppStatus from 'src/components/blocks/AppStatus';
  import { saveInStore, getFromStore } from 'src/store';

  let redirectWithoutNotify;
  onMount(async () => {
    redirectWithoutNotify = await getFromStore(strings.settingName);
  })

  const onStatusChange = (event) => {
    saveInStore({
      storageName: strings.settingName,
      storageValue: event.detail.checked,
    });
  }
</script>

<h1 class="title">
  {strings.title}
</h1>
<AppStatus checked={redirectWithoutNotify} on:change={onStatusChange} />
