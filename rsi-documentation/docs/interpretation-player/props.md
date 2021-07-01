# Proprties

The properties for the **interpretation player**

| Properties                | Description           | Required |     Choices |       Default|
| -------------       |:-------------:|         -------------  |-------------  |-------------  |
| sdkKey            | Your RSI [sdk key](/getting-started/sdk-key) | true | string: sdk_key_XXXX | null |
| positionMenu          | The position of the widget menu when open| false | string: "bottom", "top" | "bottom" |
| isBoxShadow         | Is the box shadow activated on the widget| false | boolean: true|false | true |
| isPlayerControlled         | Works only for `<video>` tag. If the value is `true` we will control your player and mute/unmute your stream for you. If set to `false`, you will have to implement it when receiving our event : `on-language-selected`.   See the [diagram](/interpretation-player/index.html#stream-and-virtual-platform-user-s-event-page.html)| false | boolean: true|false | false |

---------------
# Styling props

You can style the interpretation palyer by using the following props
| Properties                | Description           | Required |     Type |       Default|
| -------------       |:-------------:|         -------------  |-------------  |-------------  |
| displayFlag            | To hide or show the flag in widget options | false | boolean | true |
| fontFamily            |  To set the font family of the entire widget | false | string | `"Helvetica Neue", Arial, sans-serif` |
| textSelectorHeader            | To set the text of the header when no language is selected | false | string | **Select a language** |
| backgroundSelectorHeader            |  To set the background color of the header of the widget | false | string | `#ffffff` |
| fontSizeHeaderSelector            | To set the font size of the header of the widget | false | string | `16px` |
| backgroundHoverHeaderSelector            | Sets the background color of the widget header when mouse hovers over the widget | false | string | `#ffffff` |
| colorHeaderSelector            | Sets the text color of the widget header | false | string | `#2C3D4F` |
| borderRadiusHeaderSelector            | Sets the border radius of the widget header | false | string | `5px` |
| fontSizeOptionSelector            | Sets the font size of the option items | false | string | `16px` |
| colorOptionSelector            |  Sets the text color of the option items, | false | string | `#2C3D4F` |
| backgroundOptionSelector            | Sets the background color or option items | false | string | `#ffffff` |
| backgroundHoverOptionSelector            | To change the background color of options items when hover overing them | false | string | `#F2F2F2` |
| borderRadiusOptionSelector            | To set the border radius of the options container | false | string | `5px` |
| optionsDistanceFromHeader            |  To set the distance between the options container and the widget header | false | string | `45px` |