<template>
  <v-app>
    <v-navigation-drawer 
        app 
        temporary
        v-model="drawer"
        >
          <v-list>
            <v-list-tile
              v-for="link in links"
              :key="link.title"
              :to="link.url"
            >
              <v-list-tile-action>
                 <v-icon medium>{{ link.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="link.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-if="isUserLoggedIn"
              @click="onLogOut"
            >
              <v-list-tile-action>
                 <v-icon medium>exit_to_app</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="'Logout'"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
      <v-toolbar app dark color="primary">
       <v-toolbar>
        <v-toolbar-side-icon
          @click="drawer = !drawer"
          class="hidden-md-and-up"
        ></v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link to="/" tag="span" class="pointer">Vue ad</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
            v-for="link in links"
            :key="link.title"
            :to="link.url"
            flat
          >
            <v-icon left>{{ link.icon }}</v-icon>
            {{ link.title }}
            </v-btn>
            <v-btn
            @click="onLogOut"
            v-if="isUserLoggedIn"
            flat
          >
            <v-icon left>exit_to_app</v-icon>
            Logout
            </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <template v-if="error">
      <v-snackbar
        :timeout="5000"
        :multi-line="true"
        color="error"
        @input="closeError"
        :value="true"
      >
        {{error}}
        <v-btn flat dark @click.native="closeError">Close</v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLoggedIn (state) {
      return this.$store.getters.isUserLoggedIn
    },
    links () {
      if (this.isUserLoggedIn) {
        return [
          {title: 'Orders', icon: 'bookmark_border', url: '/orders'},
          {title: 'New ad', icon: 'eject', url: '/new'},
          {title: 'My ads', icon: 'list', url: '/list'}
        ]
      }
      return [
        {title: 'Login', icon: 'account_circle', url: '/login'},
        {title: 'Registration', icon: 'supervisor_account', url: '/registration'}
      ]
    }
  },
  methods: {
    closeError () {
      return this.$store.dispatch('clearError')
    },
    onLogOut () {
      this.$store.dispatch('logOutUser')
      this.$router.push('/')
    }
  }
}
</script>

<style scope>
  .pointer {
    cursor: pointer;
  }
</style>

