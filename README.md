graphql-passport-example
========================

## Getting started

- `$ yarn`
- `$ yarn start`
- Go to http://localhost:4000
- Now, try to query for some delicious cakes. You should get an authorization error, since you're not passing any authorization header, yet. To do so, you'll have to inject the header somehow (e.g. using a [Chrome plugin](https://chrome.google.com/webstore/detail/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj)).

### When using the BearerStrategy, the header must look like:

```
Authorization: Bearer 4w3s0m3-t0k3n
```
