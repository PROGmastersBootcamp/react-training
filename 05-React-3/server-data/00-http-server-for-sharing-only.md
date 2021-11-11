Install the `http-server` NPM application globally:

```shell
npm install -g http-server 
```

Then run it, in this directory! `./server-data`

```shell
http-server --cors=false
```

After this, you may use the following URL-s, to fetch data:

Category list - http://localhost:8080/categories.json  
Product list - http://localhost:8080/products.json  
User list - http://localhost:8080/users.json  
Order list - http://localhost:8080/orders.json  
