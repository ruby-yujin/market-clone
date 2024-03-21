<script>
  import { getDatabase, push, ref } from "firebase/database";
    import Footer from "../components/Footer.svelte";
    import { getStorage, ref as refImage, uploadBytes,getDownloadURL } from "firebase/storage";
  
  let title;
  let price;
  let description;
  let place;
  let files;
  
  const storage = getStorage();
  const db = getDatabase();
  
  
  function writeUserData(imgUrl) {
    push(ref(db, 'items/'), {
      title,
      price,
      description,
      place,
      insertAt: new Date().getTime,
      imgUrl,
    });
    window.location.hash = '/';
  }
  
  const uploadFile = async () =>{
    const file = files[0];
    const name = file.name;
    const imgRef = refImage(storage,name);
    await uploadBytes(refImage(storage,name),file);
    const url = await getDownloadURL(imgRef);
    return url;
  }
  
  const handleSubmit = async () =>{
    const url = await uploadFile();
    writeUserData(url);
  }
  </script>


<main class="write-main">
    <h1>글쓰기</h1>
    <form id="write-form" on:submit|preventDefault={handleSubmit}>
      <div class="wirte-block">
        <label for="image">이미지</label>
        <input  bind:files={files} type="file" id="image" name="image" />
      </div>
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

<Footer location="write"/>
