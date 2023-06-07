Some hacks for semi-conveniently downloading data that you can only access from
within the context of some web page.

The code in client.js is meant to be pasted into the Javascript console while on
whatever page you need to be on. That will ensure that when you fetch URLs
related to that page, it will be like you are making those requests from that
page and appropriate cookies and whatnot will be sent.

The code is server.js is a trivial Node web server that has one endpoint: /save.
The saveData function in client.js will post a blob of data to this server which
will save it in the uploads directory under the name given.

To setup (one time) run:

```
npm i
```

Then to run the server:

```
node server.js
```
