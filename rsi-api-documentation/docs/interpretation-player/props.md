# Props

The props for the **interpretation player**

| Props                | Description           | required |     Choices |       Default|
| -------------       |:-------------:|         -------------  |-------------  |-------------  |
| apiKey            | Your RSI [api key](/getting-started/api-key) | true | string: api_key_XXXX | null |
| positionMenu          | The position of the widget menu when open| false | string: "bottom", "top" | "bottom" |
| isBoxShadow         | Is the box shadow activated on the widget| false | boolean: true|false | true |
| isPlayerControlled         | Works only for `<video>` tag. If the value is `true` we will control your player and mute/unmute your stream for you. If set to `false`, you will have to implement it when receiving our event : `on-language-selected`.   See the [diagram](/interpretation-player/index.html#stream-and-virtual-platform-user-s-event-page.html)| false | boolean: true|false | false |
