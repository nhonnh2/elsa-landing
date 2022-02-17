function getElement(selector) {
  return document.querySelector(selector);
}
function getAllElement(selector) {
  return document.querySelectorAll(selector);
}

const rad = document.register_form.register__radioGroup;
let prev = null;
const priceDom = getElement('.form_price .price');
rad.forEach((el) => {
  el.addEventListener('change', function () {
    priceDom.style.color = '#0bbae7';
    if (this !== prev) {
      console.log(this.id);
      prev = this;
      if (this.id == 'oneyear') {
        priceDom.innerHTML = 'Giá: 989.000 VND';
      } else if (this.id == 'lifetime') {
        priceDom.innerHTML = 'Giá: 1.995.000 VND';
      }
    }
  });
});

//validate form
// input dom
const field_usernameDom = getElement('.field_username input');
const field_numberphoneDom = getElement('.field_numberphone input');
const field_emailDom = getElement('.field_email input');
//text error dom
const field_usernameErr = getElement('.field_username .field_err');
const field_numberphoneErr = getElement('.field_numberphone .field_err');
const field_emailErr = getElement('.field_email .field_err');

const contentError = '<i class="fas fa-exclamation-circle icon_error"></i>';

function validateUsername() {
  const value = field_usernameDom.value;
  if (value.trim() == '') {
    field_usernameErr.innerHTML = contentError + 'Thông tin bắt buộc';
  } else {
    field_usernameErr.innerHTML = '';
  }
}

function validateNumberPhone() {
  const value = field_numberphoneDom.value;
  const numberPhoneFormat = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
  if (value.trim() == '') {
    field_numberphoneErr.innerHTML = contentError + 'Thông tin bắt buộc';
  } else if (!value.match(numberPhoneFormat)) {
    field_numberphoneErr.innerHTML =
      contentError + 'Số điện thoại không tồn tại';
  } else {
    field_numberphoneErr.innerHTML = '';
  }
}

function validateEmail() {
  const value = field_emailDom.value;
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (value.trim() == '') {
    field_emailErr.innerHTML = contentError + 'Thông tin bắt buộc';
  } else if (!value.match(emailFormat)) {
    field_emailErr.innerHTML = contentError + 'Email không hợp lệ';
  } else {
    field_emailErr.innerHTML = '';
  }
}

function validateCheckRadio() {
  let check = false;
  rad.forEach((el) => {
    if (el.checked) {
      check = true;
    }
  });
  if (!check) {
    priceDom.style.color = 'rgb(231, 95, 90)';
    priceDom.innerHTML = 'Chưa chọn gói';
  }
}

//validate form
function validateForm() {
  validateUsername();
  validateNumberPhone();
  validateEmail();
  validateCheckRadio();
}
