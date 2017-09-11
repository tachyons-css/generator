# tachyons.pub api

Returns a token with 15 minute access to a directory in the tachyons-pub styleguide hosting bucket.

```sh
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"typeScale": [5,4,3,2,1,0.5] }' \
     https://tachyons.pub
```
