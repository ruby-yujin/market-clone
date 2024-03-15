<script>
  import Router from 'svelte-spa-router'
  
  import Main from './pages/Main.svelte'
  import Login from './pages/Login.svelte'
  import Signup from './pages/Signup.svelte'
  import Write from './pages/Write.svelte'
  import NotFound from './pages/Write.svelte'

  import "./style/css/reset.css"
  import "./style/css/common.css"
  import "./style/css/index.css"
  
const routes = {
    '/': Main,
    '/login':Login,
    '/signup':Signup,
    '/write':Write,
    '*': NotFound,
}
</script>

<Router {routes}/>

<main>
</main>
