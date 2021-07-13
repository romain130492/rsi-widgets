# How to run

* you can use vscode to open a live server for `index.html`
* make sur the url includes : `localhost`.


## How to add our script on your html page
1- Add this stylesheet in the head tag.
```html
<link rel="stylesheet" href="https://akkadu-assets.s3.amazonaws.com/akkadu-rsi-widget/rsi-vanilla/1.0.14/interpretation-player.min.css" />
```
2- Add this block where you want to display the widget.
```html
  <div id="akkadu-interpretation-player"></div>
```
3- Add the script under the block above or right before the closing body tag.
```html
   <script src="https://akkadu-assets.s3.amazonaws.com/akkadu-rsi-widget/rsi-vanilla/1.0.14/interpretation-player.min.js" ></script>
```

🚨 The block with id of `akkadu-interpretation-player` must be loaded on the page before the script.
Otherwise you will get the error : ` Unable to detect stream container akkadu-interpretation-player on the DOM`

* You can either put the script at the end of your page before the </body>
Or you can add a the listener `load` and add the script once the page is fully loaded : 
```html
<script>
    window.addEventListener('load', function () {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src= 'dist/index.min.js'
      document.head.appendChild(s);
    })
  </script> 
```