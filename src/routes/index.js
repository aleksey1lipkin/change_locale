import Home from 'src/components/screens/Home';
import Settings from 'src/components/screens/Settings';
import NotFound from 'src/components/screens/NotFound';

export const routes = {
  '/': Home,
  '/settings': Settings,
  '*': NotFound,
};
