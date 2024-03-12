const form = document.getElementById("write-form");

// write form 함수
const handleSubmitForm = async (e) => {
  e.preventDefault();
  const body = new FormData(form);
  //세계시간 기준
  body.append("insertAt", new Date().getTime());
  try {
    const res = await fetch("/items", {
      method: "POST",
      body: body,
    });
    const data = await res.json();
    if (data === "200") window.location.pathname = "/";
    console.log(data);
  } catch (e) {
    console.error("이미지 업로드 실패 ");
  }
};

form.addEventListener("submit", handleSubmitForm);
