import { getFromChromeStore } from 'src/utils/chrome';
import { CHROME_STORE_KEYS } from 'src/utils/constants';

async function compareHrefWithConfig() {
  const { href } = window.location;
  const redirectConfig = await getFromChromeStore(
    CHROME_STORE_KEYS.redirectSettings,
  );
  const sourceMatchingConfig = Object.values(redirectConfig).find(({ from }) =>
    href.includes(from),
  );
  if (sourceMatchingConfig) {
    const { from, to } = sourceMatchingConfig;
    const newHref = href.replace(from, to);
    window.location.replace(newHref);
  }
}

compareHrefWithConfig();
