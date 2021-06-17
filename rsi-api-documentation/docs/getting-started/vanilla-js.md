## Using Vanilla Javascript

### Registering the [Interpretation Manager](/interpretation-manager/index.html)

🚀 Widget coming soon !


### Registering the [Interpretation Player](/interpretation-player/index.html)

```html

  <!-- Component -->
  <div 
     id="akkadu-interpretation-player" 
     data-api-key="your_api_key" 
     data-position-menu="bottom" 
     data-is-box-shadow="true"
     data-is-player-controlled="true"
   >
    </div> 
    <script>
      const component = document.querySelector('#akkadu-interpretation-player')
      component.addEventListener('onReady', function (e) { 
        console.info('received onReady event:', e?.detail?.isReady);
      });
      component.addEventListener('onLanguageSelected', function (e) { 
        console.info('received onLanguageSelected event:', e?.detail?.languageSelected);
      });
      component.addEventListener('onConnectionStatusUpdated', function (e) { 
        console.info('received onConnectionStatusUpdated event:', e?.detail?.connection);
      });
    </script>

    <!-- Script must be loaded after the component -->

    <script src="https://akkadu-assets.s3.amazonaws.com/akkadu-rsi-api-widget/rsi-api-vanilla/1.0.0/index.min.js" ></script>


```

* You will also have to add a **roomname query parameter** on your audience pages. [More](/interpretation-player/roomname.md)

* Make sure the script is **loaded after the component**.

<details>
  <summary>More</summary>

  * You can either put the script at the end of your page before the `body tag`

  Or you can add a the listener `load` and add the script once the page is fully loaded : 

  ```html
  <script>
      window.addEventListener('load', function () {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src= 'https://akkadu-assets.s3.amazonaws.com/akkadu-rsi-api-widget/rsi-api-vanilla/1.0.0/index.min.js'
        document.head.appendChild(s);
      })
    </script> 
  ```
</details>


* You can also use our **vanilla-example repository** [here](https://github.com/Akkadu/rsi-api-widgets/tree/main/packages/rsi-api-vanilla-example).


* Get the latest versions of the script [here](/vanilla-js/versions.html)

