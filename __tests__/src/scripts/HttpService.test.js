import HttpService from "../../../src/scripts/HttpService";

test("should reject http service", async () => {
  const httpClientMock = jest.fn(() =>
    Promise.reject("Could not make a POST request")
  );
  const httpService = new HttpService(httpClientMock);

  let config = {
    method: "POST",
    body: JSON.stringify({
      quantity: 10,
      type: "SELL",
      price: 10,
      esopType: "NON_PERFORMANCE",
    }),
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  await expect(
    httpService.fetchData("http://localhost:8081/user/sankar/order", config)
  ).rejects.toMatch("Could not make a POST request");
});

test("should accept http service", async () => {
  const httpClientMock = jest.fn(() =>
    Promise.resolve("Post request made successfully")
  );
  const httpService = new HttpService(httpClientMock);

  let config = {
    method: "POST",
    body: JSON.stringify({
      quantity: 10,
      type: "SELL",
      price: 10,
      esopType: "NON_PERFORMANCE",
    }),
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  await expect(
    httpService.fetchData("http://localhost:8081/user/sankar/order", config)
  ).resolves.toMatch("Post request made successfully");
});
