# Cluster

Node.js is basically a single threaded application. to make it multithreaded, use use `Cluster`.
To use it, first we need to install it using:

```
npm install cluster
```

Then we import `OS` module to count the number of cores of CPUs and use them all.
The great thing is all the processes will share same port.

Check `server.js` to get to know how to use cluster and `app.js` for using express.
