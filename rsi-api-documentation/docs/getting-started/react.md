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
   < RsiApiInterpretationManager  apiKey="RSI_API_KEY" />
  </div>
);
```

### Registering the [Interpretation Player](/interpretation-player/index.html)


```jsx
import React from 'react';
import { RsiApiInterpretationPlayer } } from '@akkadu/rsi-api-react'

render(
  <div>
   <RsiApiInterpretationPlayer 
      apiKey="api_key_XXXX" 
      positionMenu="bottom" 
      onLanguageSelected="handleOnLanguageSelected"
      onReady="handleOnReady"
      onConnectionStatusUpdated="handleOnConnectionStatusUpdated" />
  </div>
);

  handleOnLanguageSelected(e){
    console.info('handleLanguageSelected event:',e);
  },
  handleOnReady(e){
    console.info('handleOnReady event:',e);
  },
  handleOnConnectionStatusUpdated(e){
    console.log('handleOnConnectionStatusUpdated event:',e);
  }
```



