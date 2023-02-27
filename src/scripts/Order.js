class Order {
  constructor() {
    this.httpClient = new HttpService(window.fetch.bind(window));
  }

  placeOrder() {
    let config = {
      method: "POST",
      body: JSON.stringify({
        quantity: document.getElementById("quantity").value,
        type: document.getElementById("order-type").value,
        price: document.getElementById("price").value,
        esopType: document.getElementById("esop-type").value,
      }),
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    this.httpClient
      .fetchData(
        `http://localhost:8080/user/${this.getUserName()}/order`,
        config
      )
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          document.getElementById("response").innerHTML =
            "Order Placed Successfully";
          return;
        } else {
          var errors = "";
          for (let elements = 0; elements < data.error.length; elements++) {
            errors = errors + "<br />" + data.error[elements];
          }
          document.getElementById("response").innerHTML = errors;
        }
      });
  }

  getUserName() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get("username");
    return username;
  }
}
