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
        console.log(`Saved ${name}`);
      } else {
        console.error(`Problem saving ${name}.`);
      }
    })
    .catch((err) => {
      console.error(`Problem saving ${name}: ${err}`);
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
  return await saveData(blob, name);
};


/*
 * Save a bunch of Repls given an array of the Repls' URLs.
 */
const saveZips = async (urls) => {
  await batchSave(urls, saveZip);
  console.log(`Saved ${urls.length} zips.`);
};
