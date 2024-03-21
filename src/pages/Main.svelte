<script>
  import { getDatabase, ref, onValue } from "firebase/database";
  import Footer from "../components/Footer.svelte";
  import { onMount } from "svelte";

  $: items = [];

  const db = getDatabase();
  const itemsRef = ref(db, 'items/' );

  onMount(()=>{
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      items = Object.values(data).reverse();
      console.log(items);
    });
  })

  const calcTime = (timestamp) => {
  //한국시간은 세계시간 -9
  const curTime = new Date().getTime() - 9 * 60 * 60 * 1000;
  const time = new Date(curTime - timestamp);
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  if (hour > 0) return `${hour}시간 전`;
  else if (minute > 0) return `${minute}분 전`;
  else if (second >= 0) return `${second}초 전`;
  else return "방금 전";
};

    
</script>

<div class="mediaquery-dim">화면 사이즈를 줄여주세요</div>

<div class="outline">
  <!-- header -->
  <header>
    <div class="info-bar">
      <div class="info-bar__time">20:55</div>
      <div class="info-bar__icons">
        <img src="assets/img/chart.svg" alt="" />
        <img src="assets/img/wifi.svg" alt="" />
        <img src="assets/img/battery.svg" alt="" />
      </div>
    </div>
    <div class="menu-bar">
      <div class="menu-bar__location">
        <span>역삼1동</span>
        <img src="assets/img/arrow-down.svg" alt="" />
      </div>
      <div class="menu-bar__icons">
        <img src="assets/img/search.svg" alt="" />
        <img src="assets/img/menu-icon.svg" alt="" />
        <img src="assets/img/bell.svg" alt="" />
      </div>
    </div>
  </header>

  <!-- main -->
  <main>
    {#each items as item}
    <div class="main-items">
      <div class="items-img">
        <img src={item.imgUrl} alt={item.title}>
      </div> 
  
      <div class="items-info">
        <div class="items-title">{item.title}</div>
     
        <p>
          <span class="items-time">{item.place}</span>
          <span class="items-time">/ {calcTime(item.insertAt)}</span>
        </p>
        <strong class="items-price">{item.price}</strong>
        <p class="items-decs">{item.description}</p>
      </div>    
    </div>
    {/each}
    <a class="btn-write" href="#/write">+ 글쓰기</a>
  </main>

 <Footer  location="/"/>
</div>

