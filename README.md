# Multizone Next Hub

## code structure : 
### 1. Hub
* A  simple Next JS application working as a navigator among all the other next apps.
* Listens on port 3000.
### 2. Blog 
* A simple Next JS application representing the blog application.
* Listens on port 4000.
* .env file : 
```typescript
 BASE_PATH = /blog
 ```
* Config : 
 ```typescript
 module.exports = {
  basePath: process.env.BASE_PATH,
};
 ```
### 3. Proxy
* Works as a http proxy to manage requests base on `/blog` basePath.
* Listens on port 5000.
## Usage :
1. navigate to `/hub` and run `npm i` and then `npm run dev` 
2. do the same in `/blog`
3. navigate to `/proxy` and run `node proxy.js`
4. go to `localhost:5000` for see the initial page(hub)
### 4.work structure
![alt test](https://github.com/ailrezashafaee/multiZoneNext/blob/main/proxyFlow.drawio.png "structure image")
