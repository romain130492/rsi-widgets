## Using React.js

### Installation
```bash
yarn add @akkadu/rsi-react
```
```bash
npm install @akkadu/rsi-react
```

### Registering the [Interpretation Manager](/interpretation-manager/index.html)

```jsx
import React from 'react';
import { RsiInterpretationManager } from '@akkadu/rsi-react'

render(
  <div>
   < RsiInterpretationManager  sdkKey="sdk_key_XXXX"/>
  </div>
);
```

### Registering the [Interpretation Player](/interpretation-player/index.html)


```jsx
import React from 'react';
import { RsiInterpretationPlayer } from '@akkadu/rsi-react'

 export default class ComponentInterpretationPlayer{
  const handleOnReady = (e) => {
    console.info('receive onReady event: ',e );
  }
  const handleOnLanguageSelected = (e) => {
    console.info('receive onLanguageSelected event:',e );
  }
  const handleOnConnectionStatusUpdated = (e) => {
    console.info('receive onConnectionStatusUpdated event:',e );
  } 
  render(){ 
    return(  
      <div>
          <RsiInterpretationPlayer
            sdkKey="sdk_key_XXXX"
            onReady = {handleOnReady}
            onLanguageSelected = {handleOnLanguageSelected}
            onConnectionStatusUpdated = {handleOnConnectionStatusUpdated}
            isBoxShadow={false}
            positionMenu="bottom" 
          />
      </div>
    }
  );
 }

```

* You will also have to add a roomname query parameter on your audience pages. [More](/interpretation-player/roomname.md)

* You can also use our **react-example repository** [here](https://github.com/Akkadu/rsi-widgets/tree/main/packages/rsi-react-example).

* 🌈 Check out our [React online demo](https://rsi-akkadu-react-demo.netlify.app/)



### 🚀 Quick Implementation 

* We made a simple version of our `interpretation-player` that doesn't require you to listen to our events.
* In this version we will control your `video-player` for you.

```jsx
import React from 'react';
import { RsiInterpretationPlayer } from '@akkadu/rsi-react'

 export default class ComponentInterpretationPlayer{
  render(){ 
    return(  
      <div>
          <RsiInterpretationPlayer
            sdkKey="sdk_key_XXXX"
            isPlayerControlled="true"
            roomname="ajlx"
          />
      </div>
    }
  );
 }
```

* You will simply need to add as parameter:
  * Your `sdkKey`
  * `isPlayerControlled` to **true**, [more](/interpretation-player/props.html)
  * Your `roomName` 

