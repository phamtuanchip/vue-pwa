<template >
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">{{ title }}</div>
    </v-ons-toolbar>

    <v-ons-tabbar swipeable position="auto"
      :tabs="tabs"
      :visible="true"
      :index.sync="activeIndex"
    >
    </v-ons-tabbar>
  </v-ons-page>
</template>

<template id="home">
  <v-ons-page>
    <p style="text-align: center">
      Welcome home.<br><br>{{ myProp }}
    </p>
  </v-ons-page>
</template>

<template id="news">
  <v-ons-page>
    <p style="text-align: center">
      Some news here.
    </p>
  </v-ons-page>
</template>

<template id="settings">
  <v-ons-page>
    <p style="text-align: center">
      Change the settings.
    </p>
  </v-ons-page>
</template>

 <script>
 const homePage = {
  template: '#home',
  props: ['myProp']
};

const newsPage = {
  template: '#news'
};

const settingsPage = {
  template: '#settings'
};

 export default {

  
  data() {
    return {
      activeIndex: 0,
      tabs: [
        {
          icon: this.md() ? null : 'ion-home',
          label: 'Home',
          page: homePage,
          props: {
            myProp: 'This is a page prop!'
          },
          key: "homePage"
        },
        {
          icon: this.md() ? null : 'ion-ios-bell',
          label: 'News',
          page: newsPage,
          badge: 7,
          key: "newsPage"
        },
        {
          icon: this.md() ? null : 'ion-ios-settings',
          label: 'Settings',
          page: settingsPage,
          key: "settingsPage"
        }
      ]
    };
  },
  methods: {
    md() {
      return this.$ons.platform.isAndroid();
    }
  },
  computed: {
    title() {
      return this.tabs[this.activeIndex].label;
    }
  }
 
 }
 </script>
 