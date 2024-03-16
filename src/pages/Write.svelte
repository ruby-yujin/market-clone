<script>
import { getDatabase, ref, push } from "firebase/database";

let title
let price
let description
let place

function writeUserData() {
  console.log('호출');
  const db = getDatabase();
  push(ref(db, 'items/'+ title), {
    title,
    price,
    description,
    place, 
  });

}

</script>
<main class="write-main">
    <h1>글쓰기</h1>
    <form id="write-form" on:submit|preventDefault={writeUserData}>
      <!-- <div class="wirte-block">
        <label for="image">이미지</label>
        <input type="file" id="image" name="image" />
      </div> -->
      <div class="wirte-block">
        <label for="title">제목</label>
        <input type="text" id="title" name="title" bind:value={title}/>
      </div>
      <div class="wirte-block">
        <label for="price">가격</label>
        <input type="number" id="price" name="price" bind:value={price}/>
      </div>
      <div class="wirte-block">
        <label for="description">설명</label>
        <input type="text" id="description" name="description"  bind:value={description} />
      </div>
      <div class="wirte-block">
        <label for="place">장소</label>
        <input type="text" id="place" name="place" bind:value={place} />
      </div>
      <div class="wirte-block">
        <button type="submit" id="btn-submit" class="btn-default" >
          제출
        </button>
      </div>
    </form>
  </main>