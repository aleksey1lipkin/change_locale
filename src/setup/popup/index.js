import App from 'src/App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'Svelte'
  }
});

export default app;
