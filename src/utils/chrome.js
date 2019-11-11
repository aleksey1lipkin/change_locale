export const saveInChromeStore = ({ storageName, storageValue }) =>
  new Promise((resolve, reject) => {
    chrome.storage.sync.set({ [storageName]: storageValue }, () => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      return resolve();
    });
  });

export const getFromChromeStore = storageName =>
  new Promise((resolve, reject) => {
    chrome.storage.sync.get(storageName, response => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      return resolve(response[storageName]);
    });
  });
