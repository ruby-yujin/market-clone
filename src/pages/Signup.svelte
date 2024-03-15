<main class="signup-main">
    <h1>회원가입</h1>
    <form id="signup-form" action="/signup" method="POST">
      <div class="signup-block">
        <label for="id">아이디</label>
        <input type="text" id="id" name="id" required />
      </div>
      <div class="signup-block">
        <label for="password">비번</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div class="signup-block">
        <label for="password2">비번 확인</label>
        <input type="password" id="password2" name="password2" required />
      </div>
      <div class="signup-block">
        <label for="name">이름</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div class="signup-block">
        <label for="email">이메일</label>
        <input type="text" id="email" name="email" required />
      </div>
      <div class="signup-block">
        <button id="btn-signup-submit" class="btn-default" type="submit">
          가입하기
        </button>
      </div>
    </form>
  </main>