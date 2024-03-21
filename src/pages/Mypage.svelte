<script>
      import Footer from "../components/Footer.svelte";
  import { user$ } from "../store";

      const logout = () => {
        user$.set(null);
        localStorage.removeItem("token");
      }
</script>

<main  class="signup-main">
    <h1>마이페이지</h1>
    <div class="main-items">
      
        <button on:click={logout} class="btn-main">로그아웃</button>
    </div>
</main>



<Footer  location="/mypage"/>