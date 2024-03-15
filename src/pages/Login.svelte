<main class="signup-main">
    <h1>로그인</h1>
    <form id="login-form" action="/login" method="POST">
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
          가입하기
        </button>
      </div>
    </form>
  </main>