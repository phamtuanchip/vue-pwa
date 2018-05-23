<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="../../static/img/v.png" alt="Vuetify.js" class="mb-5">
        <blockquote>
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
        <DateTimePicker  :label="label"
         :datetime="datetime"
         @input="updateDatetime" />
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<script>
import DateTimePicker from '@/components/DateTimePicker'
export default {
  components: {DateTimePicker},
  data(){
    return {
      datetime:'2017-06-30 11:05:00',
    label:'Custom Component'
    }
  },
  methods: {
    updateDatetime: function(datetime){
      this.datetime=datetime;
    }
  }
  
}
</script>

