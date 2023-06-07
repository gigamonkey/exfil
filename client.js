const server = 'http://localhost:9000';

/*
 * Save a Blob by positing it to our server.
 */
const saveData = (blob, name) => {

  const body = new FormData();
  body.append('file', blob, name);

  fetch(`${server}/save`, { method: 'POST', body })
    .then(resp => {
      if (resp.ok) {
        console.log('Saved.');
      } else {
        console.log('Not Ok.');
      }
    })
    .catch((err) => {
      console.error(`Problem: ${err}`);
    });
};

/*
 * Save a bunch of files from an array of arguments.
 */
const batchSave = (args, fn) => {
  return Promise.all(args.map(fn));
}

/*
 * Save a ZIP of a Repl based on the URL of the Repl.
 */
const saveZip = async (url) => {
  const name = new URL(url).pathname.substring(2).replaceAll('/', '-') + '.zip';
  const blob = await fetch(`${url}.zip`).then(r => r.blob());
  return saveData(blob, name);
};
