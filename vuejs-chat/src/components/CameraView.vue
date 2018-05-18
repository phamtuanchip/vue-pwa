<template>
    <div class="mdl-grid camera-modal">
       <div class="mdl-cell mdl-cell--2-col">
        <div v-show="isActive" class="mdl-spinner is-active"></div>
       </div>
         <div class="mdl-cell mdl-cell--6-col">
        <video ref="video" class="camera-stream"/>
         </div>
         <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="username" v-model="title" type="text" class="mdl-textfield__input"/>
          <label for="username" class="mdl-textfield__label">Describe me</label>
        </div>
         <span v-if="!isActive" @click="capture" class="take-picture-button take-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
              <i class="material-icons">camera</i>
            </span>
         </div>
         
       
        <div class="camera-modal-container">
           <!--
            <span v-if="!isActive" @click="capture" class="take-picture-button take-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
              <i class="material-icons">camera</i>
            </span>
            -->
        </div>
        
    </div>
</template>

<script>
import { storage } from '../services/firebase'
import postCat from '../mixins/postCat'
export default {
  mixins: [postCat],
  data() {
    return {
      mediaStream: null,
      title: '',
      isActive: false
    };
  },

  mounted() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(mediaStream => {
        this.mediaStream = mediaStream;
        this.$refs.video.srcObject = mediaStream;
        this.$refs.video.play();
      })
      .catch(error => console.error("getUserMedia() error:", error));
  },
  methods: {
    capture() {
      const mediaStreamTrack = this.mediaStream.getVideoTracks()[0];
      const imageCapture = new window.ImageCapture(mediaStreamTrack);
      this.$refs.video.pause()
      this.isActive = true
      return imageCapture.takePhoto().then(blob => {
        let imageName = `images/picture-${new Date().getTime()}`;
         storage.ref().child(imageName).put(blob).then(res => {
           res.ref.getDownloadURL().then(downloadURL => {
            this.postCat(downloadURL, this.title)
            this.isActive = false
            this.$router.push('/')
           })
             
            
            
            
        })
        

      });
    }
  },
  destroyed () {
    const tracks = this.mediaStream.getTracks()
    tracks.map(track => track.stop())
  }
};
</script>

<style scoped>
.camera-modal-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  align-items: center;
  margin-bottom: 24px;
}
.take-picture-button {
  display: flex;
}
.camera-modal {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: white;
  z-index: 10;
}
.camera-stream {
  width: 100%;
  max-height: 100%;
}
</style>