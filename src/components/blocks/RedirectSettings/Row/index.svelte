<script>
  import { onDestroy, beforeUpdate } from 'svelte';
  import { WiredIconButton } from 'wired-icon-button';
  import { redirectStore } from 'src/store';

  export let id;
  let redirectFromValue = '';
  let redirectToValue = '';

  const unsubscribe = redirectStore.subscribe(store => {
    if (!store[id]) {
      return;
    }
    const { from, to } = store[id];
    redirectFromValue = from;
    redirectToValue = to;
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
  };
</script>

<div class="wrapper">
  <input
    on:input="{onFromInputChange}"
    class="input"
    placeholder="from"
    bind:value="{redirectFromValue}"
  />
  <input
    on:change="{onToInputChange}"
    class="input"
    placeholder="to"
    bind:value="{redirectToValue}"
  />
  <wired-icon-button on:click="{onDeleteRow}" class="button"
    >x</wired-icon-button
  >
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
