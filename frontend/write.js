const form = document.getElementById("write-form");

// write form 함수
const handleSubmitForm = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("/items", {
      method: "POST",
      body: new FormData(form),
    });
    const data = await res.json();
    if (data === "200") window.location.pathname = "/";
    console.log(data);
  } catch (e) {
    console.error("이미지 업로드 실패 ");
  }
};

form.addEventListener("submit", handleSubmitForm);
