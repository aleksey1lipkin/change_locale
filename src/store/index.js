import { writable } from 'svelte/store';
import { createUniqueId } from 'src/utils/common';
import { createDefaultRedirectConfig } from './config';

const createRedirectStore = (initialStore = {}) => {
  const { subscribe, update, set } = writable(initialStore);

  return {
    subscribe,
    setStore: newStore => set(newStore),
    addNewConfig: () =>
      update(store => ({
        ...store,
        [createUniqueId()]: createDefaultRedirectConfig(),
      })),
    updateConfig: (id, value, direction) =>
      update(store => {
        const oldConfig = store[id];
        const newConfig = {
          ...oldConfig,
          ...{
            [direction]: value,
          },
        };
        return {
          ...store,
          ...{ [id]: newConfig },
        };
      }),
    deleteConfig: configId =>
      update(store => {
        delete store[configId];
        return store;
      }),
  };
};

export const redirectStore = createRedirectStore();
