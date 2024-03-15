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

const renderData = (data) => {
  const main = document.querySelector("main");

  data.reverse().forEach(async (obj) => {
    //list block
    const mainItems = document.createElement("div");
    mainItems.className = "main-items";

    //list 안에 img 블럭
    const itemsImg = document.createElement("div");
    itemsImg.className = "items-img";

    const imgView = document.createElement("img");
    const res = await fetch(`/image/${obj.id}`);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    imgView.src = url;

    // list 안에 텍스트 블럭
    const itemsInfoDiv = document.createElement("div");
    itemsInfoDiv.className = "items-info";

    const itemsTitleP = document.createElement("p");
    itemsTitleP.className = "items-title";
    itemsTitleP.innerText = obj.title;

    const itemsTimeSpan = document.createElement("span");
    itemsTimeSpan.className = "items-time";
    itemsTimeSpan.innerText = obj.place + " / " + calcTime(obj.insertAt);

    const itemsPriceStrong = document.createElement("strong");
    itemsPriceStrong.className = "items-price";
    itemsPriceStrong.innerText = obj.price;

    const div = document.createElement("div");

    main.appendChild(div);

    itemsImg.appendChild(imgView);

    itemsInfoDiv.appendChild(itemsTitleP);
    itemsInfoDiv.appendChild(itemsTimeSpan);
    itemsInfoDiv.appendChild(itemsPriceStrong);

    mainItems.appendChild(itemsImg);
    mainItems.appendChild(itemsInfoDiv);

    main.appendChild(mainItems);
  });
};

const fetchList = async () => {
  const access_token = window.localStorage.getItem("token");
  const res = await fetch("/items", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  if (res.status === 401) {
    alert("로그인이 필요합니다");
    windows.location.pathname = "/login.html";
    return;
  }
  const data = await res.json();
  renderData(data);
};

fetchList();
