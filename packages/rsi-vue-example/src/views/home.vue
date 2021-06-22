<template>
  <div>
<!--   <InterpretationManager/>  -->
<h2>You Audience Page </h2>
  <InterpretationPlayer/>
  </div>
</template>

<script>
import InterpretationPlayer from '@/components/interpretation-player.vue'
import InterpretationManager from '@/components/interpretation-manager.vue' 
  export default {
    components:{
      InterpretationPlayer,
      InterpretationManager 
    },
    mounted() {
      // We redirect to an URL with a rsi-roomname parameter (test-purposes)
       const params = new URLSearchParams(window.location.search)
       const roomname = params.get('rsi-roomname');
       var url = window.location.href
       var arr = url.split("/");
       var currentUrl = arr[0] + "//" + arr[2]
       if(!roomname){
          window.location.href = `${currentUrl}/?rsi-roomname=aljx`
       }
    },
  }
</script>

<style lang="scss" scoped>

</style>