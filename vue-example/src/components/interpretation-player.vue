<template>
  <div class="wrapper">    
    Interpretation Player Page: 
    <RsiApiInterpreterPlayer apiKey="api_key_test"/>
  </div>
</template>

<script>
/* import { RsiApiInterpreterPlayer } from '/Users/romain/Desktop/Projects/Akkadu/rsi-api-widget/rsi-api-widget/modules/rsi-api-vue' */
 import { RsiApiInterpreterPlayer } from '@akkadu/rsi-api-vue' 

export default {
  name: 'App',
  components: {
    RsiApiInterpreterPlayer 
  }
}
</script>

<style>
.wrapper{
  margin-top: 3rem;
}

</style>



