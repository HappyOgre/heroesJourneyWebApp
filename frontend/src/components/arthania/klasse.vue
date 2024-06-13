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
                                <v-card-title>{{ name }}</v-card-title>
                                <v-card-subtitle>
                                    {{ race }}
                                </v-card-subtitle>
                                <v-card-title>{{ charClass }}</v-card-title>
                            </v-col>
                        </v-col>
                        <v-col>
                            <v-col>
                                <v-card-title>Erlernte Waffen</v-card-title>
                                <v-card-text>
                                    <v-chip class="mr-1 mb-2 fk" color="#0c7827">{{ weapons[0] }}</v-chip>
                                    <v-chip class="mr-1 mb-2 fk" color="#0c7827">{{ weapons[1] }}</v-chip>
                                    <v-chip class="mr-1 mb-2 fk" color="#0c7827">{{ weapons[2] }}</v-chip>
                                    <v-chip class="mr-1 mb-2 fk" color="#0c7827">{{ weapons[3] }}</v-chip>
                                    <v-chip class="mr-1 fk" color="#0c7827">{{ weapons[4] }}</v-chip>
                                    <v-chip class="mr-1 at" color="#ab2626">{{ weapons[5] }}</v-chip>
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
                            </v-col>
                        </v-col>
                    </v-card>
                </v-container>
                <v-container id="rechter-container">
                    <v-card>
                        <v-card-title>Weiteres über {{ name }}</v-card-title>
                    </v-card>
                </v-container>
            </v-row>
        </v-col>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const name = ref();
const gender = ref();
const race = ref();
const height = ref();
const weight = ref();
const haircolor = ref();
const eyecolor = ref();
const skincolor = ref();
const fur = ref();
const feathers = ref();
const scales = ref();
const dob = ref();
const pob = ref();
const attitude = ref();
const traits = ref();
const languages = ref();
const features = ref();
const title = ref();
const bounty = ref();
const gold = ref();
const charClass = ref();
const weapons = ref([]);
const attBonus = ref([]);
const talentBonus = ref([]);


async function loadData() {
    try {
        const response = await axios.get('http://localhost:3001/api/character/arthania');
        console.log('API Response:', response.data); // Überprüfen der API-Antwort

        const data = response.data.character[0];

        name.value = data.name;
        gender.value = data.geschlecht;
        race.value = data.rasse;
        height.value = data.groesse;
        weight.value = data.gewicht;
        haircolor.value = data.haarfarbe;
        eyecolor.value = data.augenfarbe;
        skincolor.value = data.hautfarbe;
        fur.value = data.fell;
        feathers.value = data.federn;
        scales.value = data.schuppen;
        dob.value = data.geburtstag;
        pob.value = data.geburtsort;
        attitude.value = data.gesinnung;
        traits.value = data.wesenszuege;
        languages.value = data.sprachen;
        features.value = data.merkmale;
        title.value = data.marinetitel;
        bounty.value = data.kopfgeld;
        gold.value = data.gold;
        charClass.value = data.klasse;
        weapons.value = data.waffen.split('\r\n');
        attBonus.value = data.attBonus.split('\r\n');
        talentBonus.value = data.talentBonus.split('\r\n');
        
    } catch (err) {
        console.error('Fehler beim Laden von Arthania:', err.message);
    }
}
loadData();


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