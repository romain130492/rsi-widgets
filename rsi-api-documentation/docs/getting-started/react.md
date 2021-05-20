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
import { InterpretationManager } from '@akkadu/rsi.react'

render(
  <div>
   <IntepretationManager api-key="RSI_API_KEY" />
  </div>
);
```

### Registering the [Interpretation Player](/interpretation-player/index.html)


```jsx
import React from 'react';
import { TranslationWidget } from '@akkadu/rsi.react'

render(
  <div>
   <TranslationWidget api-key="RSI_API_KEY" onChangeLanguage="handleSelectedLanguage" />
  </div>
);

handleSelectedLanguage() {

}
```



