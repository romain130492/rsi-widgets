# 🚀 Quick Implementation

* We made a simple version of our `interpretation-player` that doesn't require you to listen to our events.
* In this version we will control your `video-player` for you.
* We have Quick Implementations for <a href="https://rsi-docs.akkadu.com/getting-started/vue.html#%F0%9F%9A%80-quick-implementation">Vue</a>, <a href="https://rsi-docs.akkadu.com/getting-started/react.html#%F0%9F%9A%80-quick-implementation">React</a> and <a href="https://rsi-docs.akkadu.com/getting-started/vanilla-js.html#%F0%9F%9A%80-quick-implementation">Vanilla Javascript</a>. Below is an example of the `Vanilla Javascript` quick implementation:


```html

  <!-- Component -->
  <div 
     id="akkadu-interpretation-player" 
     data-sdk-key="your_sdk_key" 
     data-is-player-controlled="true"
     data-room-name="ajlx"
   >
    </div> 

    <!-- 🚨 Script must be loaded after the component -->
    <script src="https://akkadu-assets.s3.amazonaws.com/akkadu-rsi-widget/rsi-vanilla/1.0.7/index.min.js" ></script>


```

* You will simply need to add as parameter:
  * Your `data-sdkKey`
  * `data-is-player-controlled` to **true**, [more](/interpretation-player/props.html)
  * Your `data-room-name` 

