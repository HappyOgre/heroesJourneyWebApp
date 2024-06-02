<template>
    <v-container fluid class="fill-height">
        <v-col class="fill-height">
            <v-row class="fill-height">
                <v-container id="linker-container" fill-height>
                    <v-card id="steckbrief" height="100%">
                        <v-card-title id="bild-container" class="justify-center">
                                <v-img 
                                src="../../assets/arthania.png"
                                :width="180"                
                                class="mx-auto"                
                                />
                        </v-card-title>
                        <v-col>
                            <v-col>
                                <v-card-title>Arthania</v-card-title>
                                <v-card-subtitle>
                                    Fuchsfrauding
                                </v-card-subtitle>
                                <v-card-title>Waldläufer</v-card-title>
                            </v-col>
                        </v-col>
                        <v-col>
                            <v-col>
                                <v-card-title>Erlernte Waffen</v-card-title>
                                <v-card-text>
                                    <v-chip class="mr-1 mb-2 fk" color="#0c7827">Bögen (FK)</v-chip>
                                    <v-chip class="mr-1 mb-2 fk" color="#0c7827">Armbrüste (FK)</v-chip>
                                    <v-chip class="mr-1 mb-2 fk" color="#0c7827">Donnerbüchsen (FK)</v-chip>
                                    <v-chip class="mr-1 mb-2 fk" color="#0c7827">Gleven (FK)</v-chip>
                                    <v-chip class="mr-1 fk" color="#0c7827">Dolche (FK)</v-chip>
                                    <v-chip class="mr-1 at" color="#ab2626">Schwerter (AT)</v-chip>
                                </v-card-text>
                                <span id="level-boni">
                                    <v-card class="boni-card" evelation="18" color="#185416">
                                        <v-card-title class="text-center ">Level 3</v-card-title>
                                        <v-card-text>"Mehrfachschuss" trifft nun 4 Ziele</v-card-text>
                                    </v-card>
                                    <v-spacer></v-spacer>
                                    <v-card class="boni-card" evelation="18" color="#59140a">
                                        <v-card-title class="text-center ">Level 8</v-card-title>
                                        <v-card-text>"Schneller Schuss" verursacht +1 Schaden</v-card-text>
                                    </v-card>
                                    <v-spacer></v-spacer>
                                    <v-card class="boni-card" evelation="18" color="#59140a">
                                        <v-card-title class="text-center ">Level 13</v-card-title>
                                        <v-card-text>Ihr erhaltet nach "Ruhiger Atmung" +2 Bewegungsradius</v-card-text>
                                    </v-card>
                                </span>
                                <v-card-title>Weiteres über Arthania:</v-card-title>
                            </v-col>
                        </v-col>
                    </v-card>
                </v-container>
                <v-container id="rechter-container">
                    <v-card>
                        <v-card-title>Klassenüberblick</v-card-title>
                        <v-expansion-panels multiple>
                            <v-expansion-panel>
                                <v-expansion-panel-title>Passiv</v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <v-data-table 
                                        :items="passiv"
                                    >
                                    </v-data-table>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-title>Buff</v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <v-data-table 
                                        :items="buff"
                                    >
                                    </v-data-table>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-title>Angriff</v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <v-data-table 
                                        :items="angriff"
                                    >
                                    </v-data-table>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card>
                </v-container>
            </v-row>
        </v-col>
    </v-container>
</template>

<script setup>
const passiv = [
                {
                    name: "Geübter Schütze",
                    beschreibung: "Nähe zum Ziel gibt keinen Malus mehr. Wenn der Charakter erhöht steht, oder ein freies Schsusfeld hat ist sein Fernkampf um 1 erleichtert"
                },
                {
                    name: "Markierung des Waldläufers",
                    beschreibung: "Erlaubt euch ein Ziel zu markieren. (Markierung kann einmal pro Runde umgesetzt werden, es kann von euch nur 1 Ziel zeitgleich markiert werden). Markierte Ziele erleiden 3 Schaden mehr durch Fernkampfangriffe. Fernkampfangriffe treffen immer jedes markierte Ziel",
                },
                {
                    name: "Treue Begleiter",
                    beschreibung: "Erlaubt es Euch eine Bestie zu zähmen. Die Bestie attackiert vor Euch und verursacht NK/2 Schaden. || Level 10: Eure Bestie markiert Ihr aktuelles Ziel mit \"Markierung des Waldläufers\". Dadurch können zwei \"Markierung des Waldläufers\" zeitgleich aktiv sein"
                }
            ];

const buff = [
                {
                    name: "Salve",
                    beschreibung: "Erlaubt es euch diese Runde eine Aktion mehr zu wirken",
                    cd: "10 Runden",
                    pb: "",
                },
                {
                    name: "Ruhige Atmung",
                    beschreibung: "Ihr zerrt Eure Bonusaktion auf, dafür trifft der nächste Angriff kritisch. Ihr könnt Euch diese Runde nicht bewegen",
                    cd: "10 Runden",
                    pb: "",
                },
                {
                    name: "Heldenhafte Heilung",
                    beschreibung: "Ihr heilt euch um 30% eurer LE",
                    cd: "10 Runden",
                    pb: "",
                }
            ];
            
const angriff = [
                {
                    name: "Gezielter Schuss",
                    beschreibung: "Ihr wirkt einen gezielten Schuss, erhöht den Schaden von \"Schneller Schuss\" um 2",
                    cd: "",
                    pb: "FK",
                    schaden: "10",
                },
                {
                    name: "Schneller Schuss",
                    beschreibung: "Schneller Schuss, welcher Schaden verursacht",
                    cd: "1 Runde",
                    pb: "FK",
                    schaden: "13",
                },
                {
                    name: "Mehrfachschuss",
                    beschreibung: "Ihr feuert Pfeile bis zu drei Ziele gleichzeitig",
                    cd: "3 Runden",
                    pb: "FK",
                    schaden: "8",
                },
                {
                    name: "Stoßfeuer",
                    beschreibung: "Ihr feuert eine wilde Salve ab, verursacht Schaden an Zielen 2 Felder vor Euch",
                    cd: "5 Runden",
                    pb: "FK",
                    schaden: "11",
                },
                {
                    name: "Volltreffer",
                    beschreibung: "Ihr feuert einen perfekt gezielten Pfeil. Trifft immer kritisch. Erlaubt Euch  \"Salve\" zu wirken, egal ob eine Abklingzeit aktiv ist",
                    cd: "10 Runden",
                    pb: "FK",
                    schaden: "19",
                }
            ]
</script>

<style scoped>

:root {
    --greenChip: #0c7827;
    --redChip: #ab2626;
}

#level-boni {
    display: flex;
}

.boni-card {
    max-width: 175px;
}

.at {
    background-color: var(--redChip);
}

.fk {
    background-color: var(--greenChip);
}

.tester {
    border: 1px solid;
}

#linker-container {
    width: 35%;
}

#rechter-container {
    width: 65%;
}


</style>