const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

// const swap = document.getElementById('swap');
const rateEl = document.getElementById('rate');
// Fecth exchange rates and update DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://api.exchangeratesapi.io/latest?symbols=${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_one];
      console.log(rate);
      rateEl.innerText = `1 ${currency_two} = ${rate} ${currency_one}`;
      amountEl_one.value = (amountEl_two.value * rate).toFixed(2);
    });
}

// Add event listener
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
// swap.addEventListener('click', () => {
//   const temp = currencyEl_two.value;
//   currencyEl_two.value = currencyEl_one.value;
//   currencyEl_one.value = temp;
//   calculate();
// });
calculate();
