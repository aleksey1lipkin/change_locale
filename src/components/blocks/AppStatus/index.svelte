<script>
  import { WiredCheckbox } from 'wired-checkbox';
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

<wired-checkbox checked="{checked}" on:change="{handleChange}"
  >{strings.text}</wired-checkbox
>
