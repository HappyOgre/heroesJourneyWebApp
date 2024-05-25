<template>
  <vApp>
    <!-- Navigation Drawer -->
    <v-navigation-drawer
      absolute
      expand-on-hover
      rail
      width="200"
    >
      <div class="sidebar-content">
        <v-list-item class="no-ellipsis">
          <v-list-item-content>
            <v-list-item-title>Level</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="no-ellipsis" >
          <v-list-item-content>
            <v-list-item-title>LE</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="no-ellipsis">
          <v-list-item-content>
            <v-list-item-title>DEF</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="no-ellipsis">
          <v-list-item-content>
            <v-list-item-title>Können</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="no-ellipsis">
          <v-list-item-content>
            <v-list-item-title>AT</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="no-ellipsis">
          <v-list-item-content>
            <v-list-item-title>FK</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="no-ellipsis">
          <v-list-item-content>
            <v-list-item-title>ZA</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="no-ellipsis">
          <v-list-item-content>
            <v-list-item-title>GW</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="no-ellipsis">
          <v-list-item-content>
            <v-list-item-title>EM</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="no-ellipsis">
          <v-list-item-content>
            <v-list-item-title>BS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="no-ellipsis">
          <v-list-item-content>
            <v-list-item-title>Krit</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="no-ellipsis">
          <v-list-item-content>
            <v-list-item-title>H</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="no-ellipsis">
          <v-list-item-content>
            <v-list-item-title>Aktionen</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="no-ellipsis">
          <v-list-item-content>
            <v-list-item-title>Buffs</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="no-ellipsis">
          <v-list-item-content>
            <v-list-item-title>Bonusakt</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="no-ellipsis">
          <v-list-item-content>
            <v-list-item-title>Reichweide</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-navigation-drawer>

    <!-- Navbar mit Buttons oben fixiert -->
    <v-app-bar app>
      <v-row class="justify-center">
        <v-col class="btnCol">
            <v-btn variant="tonal" class="mx-1">Stats</v-btn>
        </v-col>  
        <v-col class="btnCol">
          <v-btn variant="tonal" class="mx-1">Rüstung</v-btn>
        </v-col>  
        <v-col class="btnCol">
          <v-btn variant="tonal" class="mx-1">Formen</v-btn>
        </v-col>  
        <v-col class="btnCol">
          <v-btn variant="tonal" class="mx-1">Beschwörungen</v-btn>
        </v-col>  
        <v-col class="btnCol">
          <v-btn variant="tonal" class="mx-1">Moveset</v-btn>
        </v-col>  
        <v-col class="btnCol">
          <v-btn variant="tonal" class="mx-1">Quests</v-btn>
        </v-col>  
        <v-col class="btnCol">
          <v-btn variant="tonal" class="mx-1">Notes</v-btn>
        </v-col>  
        <v-col class="btnCol">
          <v-btn variant="tonal" class="mx-1">Items</v-btn>
        </v-col>  
      </v-row>
      <v-spacer></v-spacer>
        <v-img src="D:\GitHub\gitHubTest\test\heroesJourney\src\assets\Hejo_logo.png"></v-img>
    </v-app-bar>


    <vMain>
      <router-view />
    </vMain>
  </vApp>
</template>

<script>
export default {
  name: 'index',
}
</script>


<style scoped>
.sidebar-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertikal zentriert */
  width: 100%; /* Stellt sicher, dass der Container die volle Breite der Sidebar einnimmt */
}

.no-ellipsis .v-list-item-title {
  white-space: nowrap; /* Kein Umbruch */
  overflow: visible;    /* Überlauf anzeigen */
  text-overflow: clip; /* Text-Abkürzung mit Ellipsis verhindern */
  width: 100%; /* Nimmt die volle Breite des übergeordneten Containers ein */
  box-sizing: border-box; /* Padding und Border in die Breite einbeziehen */
}
</style>
