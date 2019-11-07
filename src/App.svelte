<script>
  import Router from 'svelte-spa-router';
  import Layout from 'src/components/blocks/Layout';
  import { routes } from 'src/routes';
</script>

<Layout>
  <Router {routes}></Router>
</Layout>
