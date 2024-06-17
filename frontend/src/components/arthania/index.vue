<template>
  <vApp id="app-container">
    <!-- Navigation Drawer -->
    <v-navigation-drawer
      expand-on-hover
      rail
      app
      v-model="mainSidebarDrawer"
      class="nav-drawer"
      style="height:100vh;"
    >
      <div class="side-bar-content">
        <v-list>
          <v-list-item class="no-ellipsis">
            <v-list-item-content>
              <v-list-item-title>Level</v-list-item-title>
              <p>{{ level }}</p>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="no-ellipsis" >
            <v-list-item-content>
              <v-list-item-title>LE</v-list-item-title>
              <p>{{ le }}</p>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="no-ellipsis">
            <v-list-item-content>
              <v-list-item-title>DEF</v-list-item-title>
              <p>{{ def }}</p>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="no-ellipsis">
            <v-list-item-content>
              <v-list-item-title>Können</v-list-item-title>
              <p>{{ koennen }}</p>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="no-ellipsis">
            <v-list-item-content>
              <v-list-item-title>AT</v-list-item-title>
              <p>{{ at }}</p>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="no-ellipsis">
            <v-list-item-content>
              <v-list-item-title>FK</v-list-item-title>
              <p>{{ fk }}</p>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="no-ellipsis">
            <v-list-item-content>
              <v-list-item-title>ZA</v-list-item-title>
              <p>{{ za }}</p>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="no-ellipsis">
            <v-list-item-content>
              <v-list-item-title>GW</v-list-item-title>
              <p>{{ gw }}</p>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="no-ellipsis">
            <v-list-item-content>
              <v-list-item-title>EM</v-list-item-title>
              <p>{{ em }}</p>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="no-ellipsis">
            <v-list-item-content>
              <v-list-item-title>BS</v-list-item-title>
              <p>{{ bs }}</p>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="no-ellipsis">
            <v-list-item-content>
              <v-list-item-title>Krit</v-list-item-title>
              <p>{{ crit }}</p>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="no-ellipsis">
            <v-list-item-content>
              <v-list-item-title>H</v-list-item-title>
              <p>{{ haste }}</p>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="no-ellipsis">
            <v-list-item-content>
              <v-list-item-title>Aktionen</v-list-item-title>
              <p>{{ actions }}</p>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="no-ellipsis">
            <v-list-item-content>
              <v-list-item-title>Buffs</v-list-item-title>
              <p>{{ buffs }}</p>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="no-ellipsis">
            <v-list-item-content>
              <v-list-item-title>Bonusakt</v-list-item-title>
              <p>{{ bonusAction }}</p>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="no-ellipsis">
            <v-list-item-content>
              <v-list-item-title>Reichweide</v-list-item-title>
              <p>{{ moveRange }}</p>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>

    <!-- Navbar mit Buttons oben fixiert -->
    <v-app-bar app fixed v-model="topBar">
      <v-row class="justify-center margin">
        <v-col class="btnCol">
            <RouterLink class="unlink" to="/stats"><v-btn variant="tonal" class="mx-1">Stats</v-btn></RouterLink>
        </v-col>  
        <v-col class="btnCol">
          <RouterLink class="unlink" to="/ausruestung"><v-btn variant="tonal" class="mx-1">Ausrüstung</v-btn></RouterLink>
        </v-col>  
        <v-col class="btnCol">
          <RouterLink class="unlink" to="/formen"><v-btn variant="tonal" class="mx-1">Formen</v-btn></RouterLink>
        </v-col>  
<!-- TODO - Seite bauen
        <v-col class="btnCol">
          <v-btn variant="tonal" class="mx-1">Beschwörungen</v-btn>
        </v-col>  
-->
        <v-col class="btnCol">
          <RouterLink class="unlink" to="/moveset"><v-btn variant="tonal" class="mx-1">Moveset</v-btn></RouterLink>
        </v-col>  
<!-- TODO - Seiten bauen
        <v-col class="btnCol">
          <v-btn variant="tonal" class="mx-1">Quests</v-btn>
        </v-col>  
        <v-col class="btnCol">
          <v-btn variant="tonal" class="mx-1">Notes</v-btn>
        </v-col>  
      -->
        <v-col class="btnCol">
          <RouterLink class="unlink" to="/inventar"><v-btn variant="tonal" class="mx-1">Inventar</v-btn></RouterLink>
        </v-col>
        <v-col class="btnCol">
          <RouterLink class="unlink" to="/char"><v-btn variant="tonal" class="mx-1">Charakter</v-btn></RouterLink>
        </v-col> 
      </v-row>
      <v-spacer></v-spacer>
        <v-img src="./Hejo_logo.png"></v-img>
    </v-app-bar>


    <div class="content-container">
      <router-view />
    </div>
  </vApp>
</template>

<script setup>

import { ref } from 'vue'
import { level, le, def, koennen, at, fk, za, gw, em, bs, crit, haste, actions, buffs, bonusAction, moveRange } from './calcs'

const mainSidebarDrawer = ref(true)
const topBar = ref(true)

</script>


<style scoped>

.margin {
  margin-left: 16px;
}

body {
  overflow: hidden; /* Body-Scrolling deaktivieren */
  margin: 0;
}

#app-container {
  height: 100vh;
}

.v-application--wrap {
  height: 100vh;
  overflow-y: hidden;
}

.content-container {
  overflow-y: auto;
  height: calc(100vh - 64px);
  margin-top: 64px;
  margin-left: 40px;
}

.side-bar-content {
  position: absolute;
}

.overflow {
  overflow: hidden;
}

.nav-drawer {
  overflow: hidden;
}

.no-ellipsis .v-list-item-title {
  white-space: nowrap; /* Kein Umbruch */
  overflow: visible;    /* Überlauf anzeigen */
  text-overflow: clip; /* Text-Abkürzung mit Ellipsis verhindern */
  width: 100%; /* Nimmt die volle Breite des übergeordneten Containers ein */
  box-sizing: border-box; /* Padding und Border in die Breite einbeziehen */
}

.unlink {
  text-decoration: none;
  color: inherit;
}

</style>
