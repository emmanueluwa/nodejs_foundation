## javascript

90% of variables used in javascript will be objects, everything else will be primitives

- primitives:

- - numbers, strings, booleans, null, undefinded and symbols

- - foundation of coding, types and data structures

## Single threaded vs Multi threaded

### nodejs comes with asynchronous io

- server side development has similar runtime execution to frontend development, there is a connection

- when running api endpoints, make sure everything is non-blocking, https://en.wikipedia.org/wiki/Non-blocking_algorithm

- - AVOID writing blocking code in POST requests, can enable DDOS

### nodejs makes it very simple to get efficient request life cycles

- eg in python, CPU is proccesing each line in a way that is synchronous, waits till completion of request then takes care of next request, in python we can use multiple CPUs and have multiple threads running concurrently

- nodejs is single threaded(one user on the page), it has a non-blocking nature, the browser executes javascript in the backend so it can keep rendering things, requests are taken in onto a single event loop, it continues to concurrently process requests(and the functions within), the CPU cycles never stop and continue to process smaller tasks, due to it's single threaded event based nature

## Promises, Asynchronous vs Synchronous

- setTimeout(), used to delay the execution, upgraded and runs asynchronously, the ticker in the event loop will run the next request it finds

- to run something sequentially after a delayed execution -> callback(), but this can lead to callback hell if nested callbacks are used, https://en.wiktionary.org/wiki/callback_hell

- this introduces the use of promises to avoid callback hell, new Promise()

- - .then() allows us to wait until the task is executed and then continue

- async await

- - a way for .then() to not be needed
- - run the code synchronously by waiting for a task to finish and then execute.

## Nodejs using the V8 Engine (javascript compiler)

- it uses the same architecture that is used on the frontend in the web

- the v8 engine is browser/runtime independent

- - it can be used in the browser like with chrome, it can also be used in nodejs/deno

- nodejs is a javascript runtime, that was made for the intention of building servers in a single threaded non-blocking fashion

## HTTP

- protocol for how text is transferred over the wire

- - on any website we visit, it communicates using the http protocol, the language for which information is transferred on the web, https://en.wikipedia.org/wiki/HTTP

- it has methods, types of messages that can be sent

- - GET / POST / PUT / DELETE / OPTION

- http has headers
- - important, all the meta information about the request. information about the information being sent
- - e.g:

```
res.setHeader("Content-Type", "text/html");

res.setHeader("Content-Type", "text/plain");
```

- http has a body

## package-lock.json

- a snapshot(of the current state of the project) of all the packages needed and their versions, the needs of each package, the dependencies of each dependency, the node versions needed
- allows the ability to share a project with others

## Express

- makes it easier to write server code

- request life cycle, whenever the client makes a request to the server, it has associated metadata (headers, body, user credentials, cookies etc), the server middleware decides what to do with each of these

### middleware (GENERIC CONCEPT IN SOFTWARE)

- between, the client hitting server and the endpoint

- middleware is an excellent way to control the dataflow, e.g if cookies are sent, set up a function to parse the cookies, cookieParser()

- a way to extract different routines in the code, and register/access them in the endpoint, a popular middleware is auth(), before the endpoint is hit, check the user is logged in.

- - endpoint is the last thing that happens in the request life cycle before the repsonse happens, the route that returns the response
