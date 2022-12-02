import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("making an update to the database boss.");

  const theDb = await openDB('jate', 1);

  const trans = theDb.transaction('jate', 'readwrite');

  const store =  trans.objectStore('jate');

  const request = store.add({ stuffToBeAdded });

  const result = await request;
  console.log("Things occured, and stuff got stored in the Db...", result)
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('Were getting some data from the base. Be right back.');

  const theBase = await openDB('jate', 1);

  const trans = theBase.transaction('jate', 'readonly');

  const store =  trans.objectStore('jate');

  const request = store.add({ stuffToBeAdded });

  const result = await request;
  console.log("We're back from our journey. Here is the data", result)
}

initdb();
