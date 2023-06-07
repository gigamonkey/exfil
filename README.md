Some hacks for semi-conveniently downloading data that you can only access from
within the context of some web page.

The code in `client.js` is meant to be pasted into the Javascript console while
on whatever page you need to be on. That will ensure that when you fetch URLs
related to that page, it will be like you are making those requests from that
page and appropriate cookies and whatnot will be sent.

The code is `server.js` is a trivial Node web server that has one endpoint:
`/save`. The `saveData` function in `client.js` will post a blob of data to this
endpoint which will save it in the uploads directory under the name given.

To setup (one time) run:

```
npm i
```

Then to run the server:

```
node server.js
```

To download Replit zips, you can use the `saveZip` function to save one Repl and
`saveZips` to save a bunch, from an array of Repls.

```
const urls = [
  "https://replit.com/@GigaMonkey/Adventure-Assignment-Game",
  "https://replit.com/@GigaMonkey/IntentionalSuddenLegacysystem"
];

saveZips(urls);
```
