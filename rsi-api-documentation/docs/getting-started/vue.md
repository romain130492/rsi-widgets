## Using Vue.js

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
  <RsiApiIntepretationManager apiKey="RSI_API_KEY" />
</template>

<script>

import { RsiApiInterpretationManager } from '@akkadu/rsi-api-vue'

export default {
  components:{
    RsiApiInterpretationManager
  }
}
</script>
```

### Registering the [Interpretation Player](/interpretation-player/index.html)

```vue
<template>
  <RsiApiInterpretationPlayer
    apiKey="api_key_XXXX" 
    positionMenu="bottom" 
    v-on:onLanguageSelected="handleOnLanguageSelected"
    v-on:onReady="handleOnReady"
    v-on:onConnectionStatusUpdated="handleOnConnectionStatusUpdated"  >
</template>

<script lang="js">

import { RsiApiInterpretationPlayer } from '@akkadu/rsi-api-vue'

export default {
  components:{
    RsiApiInterpretationPlayer
  },
  methods: {
    handleOnLanguageSelected(e){
      console.info('handleLanguageSelected event:',e);
    },
    handleOnReady(e){
      console.info('handleOnReady event:',e);
    },
    handleOnConnectionStatusUpdated(e){
      console.info('handleOnConnectionStatusUpdated event:',e);
    }
},
}
</script>
```

* You will also have to add a roomname query parameter on your audience pages. [More](/interpretation-player/roomname.md)


* You can use our `vue-example` respository [here](https://github.com/Akkadu/rsi-api-widgets/tree/main/vue-example).
  * In this package you will find the implementation of the `interpretation manager` and `interpretation player`. 


