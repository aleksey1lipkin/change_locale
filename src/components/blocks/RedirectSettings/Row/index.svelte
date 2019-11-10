<script>
  import { onDestroy } from 'svelte';
  import { WiredInput } from 'wired-input';
  import { WiredIconButton } from 'wired-icon-button';
  import { redirectStore } from 'src/store';
  
  export let id;
  let redirectConfig;
  
  const unsubscribe = redirectStore.subscribe(store => {
    redirectConfig = store[id];
  });
  onDestroy(unsubscribe);
  
  const onFromInputChange = event => {
    const value = event.target.value;
    redirectStore.updateConfig(id, value, 'from');
  };
  const onToInputChange = event => {
    const value = event.target.value;
    redirectStore.updateConfig(id, value, 'to');
  };
  const onDeleteRow = () => {
    redirectStore.deleteConfig(id);
  }
</script>
  
<div class="wrapper">
  <wired-input
    on:input={onFromInputChange}
    class='input'
    placeholder='from'
    value={redirectConfig.from}
  />
  <wired-input
    on:change={onToInputChange}
    class='input'
    placeholder='to'
    value={redirectConfig.to}
  />
  <wired-icon-button on:click={onDeleteRow} class="button">x</wired-icon-button>
</div>
    
<style>
  .wrapper {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
  }
  .button {
    color: red;
  }
  .input {
    width: 100px;
  }
</style>