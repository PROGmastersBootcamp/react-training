Install the `json-server` NPM application globally:

```shell
npm install -g json-server 
```

Create a `db.json` file with some data

```json
{
  "categories": [...],
  "orders": [...],
  "products": [...],
  "users": [...]
}
```

Then run it, in this directory! `./server-data`

```shell
json-server --watch db.json --port 8080
``` 

Now if you go to http://localhost:8080/categories/1, you'll get the category with id = 1

Also when doing requests, it's good to know that:

- If you make POST, PUT, PATCH or DELETE requests, changes will be automatically and safely saved to db.json using
  lowdb.
- Your request body JSON should be object enclosed, just like the GET output. (for example {"name": "Foobar"})
- Id values are not mutable. Any id value in the body of your PUT or PATCH request will be ignored. Only a value set in
  a POST request will be respected, but only if not already taken.
- A POST, PUT or PATCH request should include a Content-Type: application/json header to use the JSON in the request
  body. Otherwise it will return a 2XX status code, but without changes being made to the data.
