<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <router-link to="/" custom v-slot="{ navigate }">
            <v-list-item @click="navigate">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <div>
      <v-app-bar color="dark accent-4" dense dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>MestSpace</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-app-bar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
