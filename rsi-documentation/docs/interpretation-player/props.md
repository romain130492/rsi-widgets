# Proprties

The properties for the **interpretation player**

| Properties                | Description           | Required |     Choices |       Default|
| -------------       |:-------------:|         -------------  |-------------  |-------------  |
| sdkKey            | Your RSI [sdk key](/getting-started/sdk-key) | true | string: sdk_key_XXXX | null |
| positionMenu          | The position of the widget menu when open| false | string: "bottom", "top" | "bottom" |
| isBoxShadow         | Is the box shadow activated on the widget| false | boolean: true|false | true |
| isPlayerControlled         | Works only for `<video>` tag. If the value is `true` we will control your player and mute/unmute your stream for you. If set to `false`, you will have to implement it when receiving our event : `on-language-selected`.   See the [diagram](/interpretation-player/index.html#stream-and-virtual-platform-user-s-event-page.html)| false | boolean: true|false | false |

---------------
# Additional props
To further customize the interpretation player you can use the following props.
| Properties                | Description           | Required |     Type |       Default|
| -------------       |:-------------:|         -------------  |-------------  |-------------  |
| displayFlag            | To hide or show the flag in widget options | false | boolean | true |
| placeholderText            | To set the text of the header when no language is selected | false | string | **Select a language** |
| widgetWrapperClass            |  To set a custom class for RSI widget wrapper, it also wraps the refresh button. | false | string | none |
| dropdownWrapperClass            | To set a custom class for the dropdown wrapper excluding the refresh button. | false | string | none |
| headerClass            | To set a custom class for the widget header. | false | string | none |
| optionsWrapperClass            | To set a custom class for option items wrapper. | false | string | none |
| optionItemClass            | To set a custom class for option item. | false | string | none |
| selectedOptionClass            | To set a custom class for selected option. | false | string | none |
| refreshButtonClass            |  To set a custom class for refresh button, refresh button appears when the stream is stuck. | false | string | none |

> For VanillaJS version all the props should be prefixed with `data-*` and instead of camelcase kebab-case should be used e.g. `data-display-flag`
