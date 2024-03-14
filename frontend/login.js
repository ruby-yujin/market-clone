const form = document.querySelector("#login-form");

const handleLoginSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);

  const res = await fetch("/login", {
    method: "post",
    body: formData,
  });

  const data = await res.json();

  console.log("access_token", data);
  if (res.status === 200) {
    console.log("로그인에 성공하였습니다");
    // window.location.pathname = "/";
  }
  if (res.status === 401) {
    alert("아이디 또는 비밀번호가 틀립니다");
  }
};

form.addEventListener("submit", handleLoginSubmit);
