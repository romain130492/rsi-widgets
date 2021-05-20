<template>
  <div>
   <InterpretationManager/> 
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
    }
  }
</script>

<style lang="scss" scoped>

</style>