<script>
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { user$ } from "../store";

  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  const loginWithGoogle = async() => {
    try {
      
      const result = await signInWithPopup(auth,provider)
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
      user$.set(user);
      localStorage.setItem("token",token)
    } catch (error) {
      console.error(error)
    }
  }
 
</script>

<main class="signup-main">
    <h1>로그인</h1>
    <!-- <div>{$user$}</div> -->
    <div>
      <button class="btn-google-login" on:click={loginWithGoogle}>
        <img src="/public/assets/img/google.svg" alt="">
        Google로 시작하기
      </button>
    </div>
    <!-- <form id="login-form" action="/login" method="POST">
      <div class="signup-block">
        <label for="id">아이디</label>
        <input type="text" id="id" name="id" required />
      </div>
      <div class="signup-block">
        <label for="password">비번</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div class="signup-block">
        <button id="btn-signup-submit" class="btn-default" type="submit">
          로그인
        </button>
      </div>
    </form> -->
  </main>