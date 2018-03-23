

<template>
  <v-app>
    <v-toolbar dark class="blue darken-1" >
      <v-toolbar-side-icon @click.native.stop="sidenav = !sidenav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title> PFEs </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">

        <v-btn flat v-for="item in menuItems" :key="item.title" router :to="item.link" >
          <v-icon left>{{ item.icon }}</v-icon> {{ item.title }}
        </v-btn>

      </v-toolbar-items>
      
    </v-toolbar>
    <v-navigation-drawer temporary v-model="sidenav" fixed app >
      <v-list dense>

        <v-list-tile @click="" v-for="item in menuItems" :key="item.title" router :to="item.link" >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>       
    </v-navigation-drawer>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sidenav: false,
      menuItems: [
        {icon: 'home', title: 'Sujets', link: '/'},
        {icon: 'person', title: 'Encadrants', link: '/profile'},
        {icon: 'supervisor_account', title: 'Resultat', link: '/users'},
        {icon: 'face', title: 'Suivi de sujet', link: '/login'}
      ]
    }
  }
}
</script>