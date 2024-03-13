const form = document.querySelector("#signup-form");

const inputPassword = document.getElementById("password");
const inputPassword2 = document.getElementById("password2");

const checkPassword = () => {
  const formData = new FormData(form);
  const password1 = formData.get("password");
  const password2 = formData.get("password2");

  if (password1 === password2) {
    return true;
  } else {
    alert("비밀번호가 일치하지 않습니다!");
    inputPassword.value = "";
    inputPassword2.value = "";
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  //form data 가져오기
  const formData = new FormData(form);

  // formData는 이렇게 생겼어
  //{id:'asddd',password:'12222'} 여기서 password를 sha로 감싸줘
  const sha256Password = sha256(formData.get("password"));

  formData.set("password", sha256Password);

  if (checkPassword()) {
    const res = await fetch("/signup", {
      method: "post",
      body: formData,
    });
    const data = await res.json();
    if (data === "200") {
      alert("가입이 완료 되었습니다!");
      window.location.pathname = "login.html";
    }
  } else {
  }
};

form.addEventListener("submit", handleSubmit);
