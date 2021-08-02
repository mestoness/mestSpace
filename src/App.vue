<template>
  <v-app>
    <Header />
    <div style=" background-color:#272727">
      <v-container fluid>
        <v-row justify="center" align="center" style="height:70vh">
          <v-col lg="12"
            ><div class="text-h3 text-center white--text">
              MestSpace
            </div>
            <div justify="center" class="mt-10" align="center">
              <a href="#views" v-smooth-scroll style="text-decoration:none">
                <v-btn color="secondary" elevation="8" large>
                  Start Reading
                </v-btn>
              </a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-main> <router-view></router-view> </v-main>
    <v-footer padless class="mt-12">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>MestOness</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header: Header,
  },
};
</script>
<style>
::-webkit-scrollbar-track {
  background-color: #272727;
}
*::-webkit-scrollbar {
  width: 7px;
  background-color: #272727;
}
*::-webkit-scrollbar-thumb {
  background-color: #424242;
}
*::-webkit-scrollbar-corner {
  background-color: #272727;
}
</style>
