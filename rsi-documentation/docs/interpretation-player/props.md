# Properties

The properties for the **interpretation player**

| Properties                | Description           | Required |     Choices |       Default|
| -------------       |:-------------:|         -------------  |-------------  |-------------  |
| sdkKey            | Your RSI [sdk key](/getting-started/sdk-key) | true | string: sdk_key_XXXX | null |
| positionMenu          | The position of the widget menu when open| false | string: "bottom", "top" | "bottom" |
| isBoxShadow         | Is the box shadow activated on the widget| false | boolean: true|false | true |
| isPlayerControlled         | Works only for `<video>` tag. If the value is `true` we will control your player and mute/unmute your stream for you. If set to `false`, you will have to implement it when receiving our event : `on-language-selected`.   See the [diagram](/interpretation-player/index.html#stream-and-virtual-platform-user-s-event-page.html)| false | boolean: true|false | false |
| roomName         | You can either add your roomName as a query parameter or as a propertie [more](roomname)| false | string: "abcd" | "abcd" | null |
