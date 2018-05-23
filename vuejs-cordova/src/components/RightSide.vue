<template>
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
</template>
<script>
export default {
    props: ['items'],
    data(){
        return {
         right: true     
        }
    },
    created(){
    },
    method(){

    },
    watch:{      
      right:function(newVal){
        console.log(this.$parent.$parent)
        this.$parent.$parent.$emit("switch", newVal)
      }
    }


}
</script>
