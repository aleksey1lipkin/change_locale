<script>
  import { WiredToggle } from 'wired-toggle';
  import { strings } from './strings';
  import { createEventDispatcher } from 'svelte';

  export let checked;
  const dispatch = createEventDispatcher();

  const handleChange = event => {
    dispatch('change', {
      checked: event.target.checked,
    });
  };
</script>

<div class="wrapper">
  <wired-toggle checked="{checked}" on:change="{handleChange}" />
  <span class="text">{strings.text}</span>
</div>

<style>
  .wrapper {
    display: flex;
    align-items: center;
  }
  .text {
    margin-left: 8px;
  }
</style>
