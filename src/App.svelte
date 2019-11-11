<script>
  import Router from 'svelte-spa-router';
  import { onMount } from 'svelte';

  import Layout from 'src/components/blocks/Layout';
  import { routes } from 'src/routes';
  import { redirectStore } from 'src/store';
  import { getFromChromeStore } from 'src/utils/chrome';
  import { CHROME_STORE_KEYS } from 'src/utils/constants';

  onMount(async () => {
    const config = await getFromChromeStore(CHROME_STORE_KEYS.redirectSettings);
    redirectStore.setStore(config);
  });
</script>

<Layout>
  <Router {routes}></Router>
</Layout>
