  <!-- footer -->
<script> 
    export let location;

    const moveToHome = () =>{
        window.location.hash = "/";
    }
</script>
  
  <footer>
    <button class="footer-bar" on:click={moveToHome}>
    {#if location === '/'} 
      <img src="assets/img/home_on.svg" alt="" />
    {:else}
      <img src="assets/img/home.svg" alt="" />
    {/if}
      <p>홈</p>
    </button>
    <div class="footer-bar">
      <img src="assets/img/book.svg" alt="" />
      <p>동네생활</p>
    </div>
    <div class="footer-bar">
      <img src="assets/img/map.svg" alt="" />
      <p>내 근처</p>
    </div>
    <div class="footer-bar">
      <img src="assets/img/chat.svg" alt="" />
      <p>채팅</p>
    </div>
    <div class="footer-bar">
      <img src="assets/img/person.svg" alt="" />
      <p>나의 당근</p>
    </div>
  </footer>
