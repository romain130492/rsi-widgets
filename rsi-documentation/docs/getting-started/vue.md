## Using Vue.js

### Installation
```bash
yarn add @akkadu/rsi-vue
```
```bash
npm install @akkadu/rsi-vue
```

### Registering the [Interpretation Manager](/interpretation-manager/index.html)

```vue
<template>
  <RsiIntepretationManager sdkKey="RSI_SDK_KEY" />
</template>

<script>

import { RsiInterpretationManager } from '@akkadu/rsi-vue'

export default {
  components:{
    RsiInterpretationManager
  }
}
</script>
```

### Registering the [Interpretation Player](/interpretation-player/index.html)

```vue
<template>
  <RsiInterpretationPlayer
    sdkKey="sdk_key_XXXX"
    v-on:onLanguageSelected="handleOnLanguageSelected"
    v-on:onReady="handleOnReady"
    v-on:onConnectionStatusUpdated="handleOnConnectionStatusUpdated">
</template>

<script lang="js">

import { RsiInterpretationPlayer } from '@akkadu/rsi-vue'

export default {
  components:{
    RsiInterpretationPlayer
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


* You can use our `vue-example` **repository** [here](https://github.com/Akkadu/rsi-widgets/tree/main/packages/rsi-vue-example)
  * In this package you will find the implementation of the `interpretation manager` and `interpretation player`. 
* 🌈 Check out our [Vue online demo](https://rsi-akkadu-vue-demo.netlify.app/)




### 🚀 Quick Implementation

* We made a simple version of our `interpretation-player` that doesn't require you to listen to our events.
* In this version we will control your `video-player` for you.

```vue
<template>
  <RsiInterpretationPlayer
    sdkKey="sdk_key_XXXX" 
    isPlayerControlled="true"
    roomname="ajlx" >
</template>

<script lang="js">

import { RsiInterpretationPlayer } from '@akkadu/rsi-vue'

export default {
  components:{
    RsiInterpretationPlayer
  },
}
</script>
```

* You will simply need to add as parameter:
  * Your `sdkKey`
  * `isPlayerControlled` to **true**, [more](/interpretation-player/props.html)
  * Your `roomName` 

