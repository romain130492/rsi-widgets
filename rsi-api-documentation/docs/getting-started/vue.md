## Usage with Vue.js

### Installation
```bash
yarn add @akkadu/rsi
```
```bash
npm install @akkadu/rsi
```

### Registering the [Interpretation Manager](/interpretation-manager/index.html)

```vue
<template>
  <IntepretationManager api-key="RSI_API_KEY" />
</template>

<script>

import { InterpretationManager } from '@akkadu/rsi.vue'

export default {
  components:{
    InterpretationManager
  }
}
</script>
```

### Registering the [Interpretation Player](/interpretation-player/index.html)

```vue
<template>
  <TranslationWidget api-key="RSI_API_KEY" @changeLanguage="handleSelectedLanguage" >
</template>

<script lang="js">

import { TranslationWidget } from '@akkadu/rsi.vue'

export default {
  components:{
    TranslationWidget
  }
}
</script>
```


