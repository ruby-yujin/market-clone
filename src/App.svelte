<script>
  import Router from 'svelte-spa-router'
  import Main from './pages/Main.svelte'
  import Login from './pages/Login.svelte'
  import Signup from './pages/Signup.svelte'
  import Write from './pages/Write.svelte'
  import NotFound from './pages/Write.svelte'
  import {user$} from './store'

  import "./style/css/reset.css"
  import "./style/css/common.css"
  import "./style/css/index.css"
  import { getAuth,GoogleAuthProvider,signInWithCredential } from 'firebase/auth/cordova';
  import { onMount } from 'svelte';

  let isLoading = true;

  const auth = getAuth();

  const checkLogin = async() => {
    const token = localStorage.getItem("token");
    if(!token) return (isLoading = false);
    const credential = GoogleAuthProvider.credential(null, token);
    const result = await signInWithCredential(auth, credential);

    const user = result.user;
    user$.set(user);
    isLoading = false;
  }
  

  const routes = {
      '/': Main,
      // '/login':Login,
      '/signup':Signup,
      '/write':Write,
      '*': NotFound,
  }

  onMount(()=> checkLogin())
</script>
{#if isLoading}
<div>Loading..</div>
{:else if !$user$}
<Login/>
{:else}
<Router {routes}/>
{/if}

