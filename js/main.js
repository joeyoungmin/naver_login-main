const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@' 
};

// 이메일 유효성 검사 함수
function emailReg(text) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(text).toLowerCase());
}

// 비밀번호 유효성 검사 함수
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text));
}

// 상태 변수 관리
let emailValid = false;
let pwValid = false;

// 이메일 유효성 검사 후 상태 변경 함수
function validateEmail(email) {
  emailValid = emailReg(email);
  const emailNode = document.querySelector('.user-email-input');
  const emailErrorNode = document.querySelector('#userEmailError');
  
  if (emailNode) {
    if (emailValid) {
      emailNode.classList.remove('is--invalid');
      emailErrorNode.style.display = 'none';
    } else {
      emailNode.classList.add('is--invalid');
      emailErrorNode.style.display = 'inline';
    }
  }
}

// 비밀번호 유효성 검사 후 상태 변경 함수
function validatePassword(password) {
  pwValid = pwReg(password);
  const pwNode = document.querySelector('.user-password-input');
  const pwErrorNode = document.querySelector('#userPasswordError');
  
  if (pwNode) {
    if (pwValid) {
      pwNode.classList.remove('is--invalid');
      pwErrorNode.style.display = 'none';
    } else {
      pwNode.classList.add('is--invalid');
      pwErrorNode.style.display = 'inline';
    }
  }
}

// 로그인 폼 제출 시 조건 처리
document.querySelector('.login-form').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const emailNode = document.querySelector('.user-email-input');
  const pwNode = document.querySelector('.user-password-input');
  
  const email = emailNode.value;
  const password = pwNode.value;

  validateEmail(email);
  validatePassword(password);

  if (emailValid && pwValid) {
    if (email === user.id && password === user.pw) {
      window.location.href = 'welcome.html';
    } else {
      alert('이메일 또는 비밀번호가 일치하지 않습니다.');
    }
  } else {
    alert('입력값을 확인해 주세요.');
  }
});

// 이메일 입력 값이 변경될 때마다 유효성 검사 수행
document.querySelector('.user-email-input').addEventListener('input', function () {
  validateEmail(this.value);
});

// 비밀번호 입력 값이 변경될 때마다 유효성 검사 수행
document.querySelector('.user-password-input').addEventListener('input', function () {
  validatePassword(this.value);
});