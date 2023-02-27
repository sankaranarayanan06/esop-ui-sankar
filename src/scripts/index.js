import "../styles/index.css";

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  const order = new Order();
  order.placeOrder();
});
