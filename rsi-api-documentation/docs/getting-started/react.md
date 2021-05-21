## Usage with React.js

### Installation
```bash
yarn add @akkadu/rsi
```
```bash
npm install @akkadu/rsi
```

### Registering the [Interpretation Manager](/interpretation-manager/index.html)

```jsx
import React from 'react';
import { RsiApiInterpretationManager } from '@akkadu/rsi-api-react'

render(
  <div>
   < RsiApiInterpretationManager  apiKey="api_key_XXXX" />
  </div>
);
```

### Registering the [Interpretation Player](/interpretation-player/index.html)


```jsx
import React from 'react';
import { RsiApiInterpretationPlayer } from '@akkadu/rsi-api-react'

 export default class ComponentInterpretationPlayer{
  const handleOnReady = (e) => {
    console.info('receive onReady event:',e );
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
          <RsiApiInterpretationPlayer
            apiKey="api_key_XXXX"
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



