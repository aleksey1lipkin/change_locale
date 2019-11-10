<script>
  import Router from 'svelte-spa-router';
  import { onMount } from 'svelte';

  import Layout from 'src/components/blocks/Layout';
  import { routes } from 'src/routes';
  import { redirectStore } from 'src/store';
  import { getFromStore } from 'src/utils/chrome';

  onMount(async () => {
    const config = await getFromStore('redirectSettings');
    redirectStore.setStore(config);
  });
</script>

<Layout>
  <Router {routes}></Router>
</Layout>
