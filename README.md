# Vue JS 

Course to help learn Vue JS

## Set up
[Vue JS](https://vuejs.org/)

Create a Vue App by following the steps with this command:
```sh
npm create vue@latest
```

Then install dependencies and run your app:
```sh
cd <your-project-name>
npm install
npm run dev
```
cd

## Validation

Validation for Form libraries: 
[Vee Validate](https://vee-validate.logaretm.com/v4/) + 
[Yup](https://github.com/jquense/yup)


## Transitions

Vue uses style classes for transitions
    - .v-enter-from  
    - .v-enter-active  
    - .v-enter-to  
    - .v-leave-from  
    - .v-leave-active  
    - .v-leave-to  


## Server calls - Axios

Using [Axios](https://axios-http.com/) for routing 

```sh
npm install axios
```

Using [JSON-Server](https://github.com/typicode/json-server/tree/v0) for mock server make sure to use version 0 

```sh
npm install -g json-server@0.17.4
```

To run this make sure to cd to requests and then run in a new terminal:
```sh
json-server --watch db.json --port 3004
```

In order to pull random images we used [Bearded Men](https://placebeard.it/300/300) 

Loading Icons we used [Loading.IO](https://loading.io/css)

For Toasts [Vue Toast Notification](https://www.npmjs.com/package/vue-toast-notification)
After install you need to add in the plugin in the main.js
```js
import ToastPlugin from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';
```


## Composable 
A vue function without the template just a .js file

## VUe Router - Routes
At the create app make sure to instal vue router in the selection or install 
```sh
npm install vue-router@4
```

In your  \src\router\index.js 
you can import your components and route to them 
```js
import { createRouter, createWebHistory } from 'vue-router';

import Articles from "@/components/articles/index.vue";
import Contact from "@/components/contact/index.vue";
import Home from '@/components/home.vue';
import Article from '@/components/articles/article.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {path: '/', component: Home},
        { path: '/articles', component: Articles},
        { path: '/articles/:articleID/:name/:age', component: Article},
        { path: '/contact', component: Contact}
    ],
    linkActiveClass:'active'
});


export default router;
```

In your Vue Components you need to use use the router hook 
```js
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
```
Then you can use Router-link for links and router for buttons

```html
  <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
  <button class="btn btn-primary btn-lg" type="button" @click="router.push('/articles')">Read more</button>
```

### Params and Props
to use params you need to set them up in your bath using semicolons in your router path and then call them using useRoute
```js
import { useRoute } from 'vue-router';

const route = useRoute(); 

console.log(route.params)

```
Another way to get prams is to use the props 
First you need to set in your router props = true
```js
        { path: '/articles/:articleID', component: Article, props:true},
```
Then you can call it like this in your script: 
```js
    const props = defineProps(['articleID']);
    console.log(props.articleID)
```
You can also add in an function which takes the route 
```js
const propsBack = (route) => {

    // access everything in the route

    return {
        crazy: route.path + 'some other route'
    }
}
 
 { path: '/articles/:articleID', component: Article, props:propsBack},
 ```

 #### Fixing same component routing
If you are linking to the same Component but a different param ID you can use vue watch to re fetch the data when the param is changed

```js
    import {watch } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute(); 
    
    watch(
      () => route.params.articleID,
      async newId => {
        loadArticleData(newId); 
      }
    )
```

You can also use a vue route hook:

```js
    import { onBeforeRouteUpdate } from 'vue-router';
    onBeforeRouteUpdate(async(to, from) => {
      // to us the route
      loadArticleData(to.params.articleID); 
    })
```

### 404 
If you have a not found / 404 page you can add it to your routes with this path:
```js
 {path: '/:notFound(.*)', component:NotFound}
 ```

### Redirect
Add redirect to your route
```js
{ path: '/contact', component: Contact, redirect:'/'},
```

### Nested Routes
You can add nested routes to your router like this:

```js
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {path: '/', component: Home},
        { path: '/articles', component: Articles, children:[
            { path: ':articleID', component: Article, props:propsBack},
        ]},
        { path: '/contact', component: Contact},
        {path: '/:notFound(.*)', component:NotFound}
    ],
    linkActiveClass:'active'
});
```

The children of the articles route will only show in the Articles component template like this:
```html
 <router-view />
```

### Named Route
you can add a name to a route and then link it

```js
        { path: '/contact', component: Contact, name:'contact'},
```
```html
  <router-link :to="{name:'contact'}" class="nav-link">Contact</router-link>
```

if you have a lot of routes the name can be useful 

### Named Views 
In your routes you can specify a name for a vue like so:
```html
    <div class="container">
      <router-view />
      <router-view name="notify" />
    </div>
 ```
the view without the name is the default you can set your routes to show the named views on specific paths like so: 
```js
        { path: '/contact', components: {
            default: Contact,
            notify: Notify
        }, name:'contact'},
```

### Global Checks routing

#### Before
You can use before to handle checks before routing to pages:
```js
router.beforeEach((to)=> {
    console.log('Before each');

    const isAuth = true; 
    
    if(to.path !== '/'){
        if(to.path !== '/login' && !isAuth) return '/login';
        if(to.path === '/login' && isAuth) return '/';
    }
    
    return true;
 
});
```

#### After
works just the same but called after: 
```js

router.afterEach(()=>{
    console.log('after')
})
```

### Per Route before and after checks
#### Before
```js
        { path: '/articles', component: Articles,
            beforeEnter: () => {
                console.log("BEFORE Entering Articles")
            }
        },
```
You can also add multiple function checks based on the routes:
```js
        { path: '/articles', component: Articles,
            beforeEnter: [checkAuth, isAdmin]
        },
```

### When leaving a page 
WHen leaving a page you can use the vue router hook: 
```js
    import { onBeforeRouteLeave } from 'vue-router';
 
    onBeforeRouteLeave((to, from)=> {
      const answer = window.confirm(' Do you really want out?');

        // return true or false
      if(!answer) return false
    })

```

 