# blog

> Blog Project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Vue Resource

``` bash
# install 
npm install vue-resource
```

## JSON-Server

Install json server with `npm install -g json-server`

Create a db.json file with some data
``` bash
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

Start JSON Server `json-server --watch db.json`

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
