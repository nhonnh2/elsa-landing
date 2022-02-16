function getElement(selector) {
  return document.querySelector(selector);
}

const rad = document.register_form.register__radioGroup;
let prev = null;
const priceDom = getElement('.form_price .price');
for (var i = 0; i < rad.length; i++) {
  rad[i].addEventListener('change', function () {
    console.log(22);
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
}
