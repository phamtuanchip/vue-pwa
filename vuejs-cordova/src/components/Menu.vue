<template>
     <v-list>
        <v-list-tile 
          value="true"
          v-for="(item, i) in items"
          :key="i"
          exact
        >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <router-link :to="item.link">
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </router-link>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
</template>
<script>
export default {
    props: ['items'],
    data(){
        return {
           
        }
    },
    created(){
    }

}
</script>
