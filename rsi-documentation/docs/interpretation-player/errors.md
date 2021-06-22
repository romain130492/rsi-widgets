# Error Messages

When you use our `interpretation-player` the SDK may return error message:


* **Your sdkKey doesn't have an event with the roomName: abcd :**

  The `roomname` added to your audience page doesn't match the `roomName` associated to the events of that `sdkKey`.

  When creating an event with the `interpretation-manager` you should get in response a `roomName`. You then have to use as a query parameter on your audience page that same `roomName`.

  More info [here](/interpretation-player/roomname))

---

* **The origin: www.your-website.com doesn't match the origin accepted by your sdkKey: xx_your_sdk_key**

  Each sdkKey can only **have one origin**. You can create a new sdkKey in your dashboard and associate an origin(website) to it.

  If you are using our widget on localhost, you should not get any origin issues.
  

---


* **sdkKey or roomName is not defined**

  Our `interpretation-player` has `sdkKey` or/and `roomName` being undefined.