# Error message

When you use our `interpretation-player` the SDK may return error message:


* **Your apiKey doesn't have an event with the roomName: abcd :**

  The `roomname` added to your audience page doesn't match the `roomName` associated to the events of that `apiKey`.

  When creating an event with the `interpretation-manager` you should get in response a `roomName`. You then have to use as a query parameter on your audience page that same `roomName`.

  More info [here](/interpretation-player/roomname))

---

* **The origin: www.your-website.com doesn't match the origin accepted by your apiKey: xx_your_api_key**

  Each apiKey can only **have one origin**. You can create a new apiKey in your dashboard and associate an origin(website) to it.

  If you are using our widget on localhost, you should not get any origin issues.
  

---


* **apiKey or roomName is not defined**

  Our `interpretation-player` has `apiKey` or/and `roomName` being undefined.