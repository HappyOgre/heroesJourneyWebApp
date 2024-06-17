<template>
    <v-container fluid>
            <v-row id="mainContainer">
                <v-container id="linker-container" class="pt-1">
                    <v-card id="steckbrief">
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
                                <v-card-title>Boni</v-card-title>
                                <v-card-text>
                                    <v-chip
                                        v-for="(bonus, index) in bonuses"
                                        :key="index"
                                        class="mr-1 mb-2"
                                    >
                                        {{ bonus }}
                                    </v-chip>
                                </v-card-text>
                                <v-card-title>Erlernte Waffen</v-card-title>
                                <v-card-text>
                                    <v-chip
                                        v-for="(weapon, index) in weapons"
                                        :key="index"
                                        :class="getWeaponClass(weapon)"
                                        class="mr-1 mb-2"
                                    >
                                        {{ weapon }}
                                    </v-chip>
                                </v-card-text>
                                <span id="level-boni">
                                    <v-card evelation="18" :class="[cardColorClass3, 'boni-card']">
                                        <v-card-title class="text-center ">Level 3</v-card-title>
                                        <v-card-text>{{ lvl3 }}</v-card-text>
                                    </v-card>
                                    <v-spacer></v-spacer>
                                    <v-card evelation="18" :class="[cardColorClass8, 'boni-card']">
                                        <v-card-title class="text-center ">Level 8</v-card-title>
                                        <v-card-text>{{ lvl8 }}</v-card-text>
                                    </v-card>
                                    <v-spacer></v-spacer>
                                    <v-card evelation="18" :class="[cardColorClass13, 'boni-card']">
                                        <v-card-title class="text-center ">Level 13</v-card-title>
                                        <v-card-text>{{ lvl13 }}</v-card-text>
                                    </v-card>
                                </span>
                            </v-col>
                        </v-col>
                    </v-card>
                </v-container>
                <v-container id="middle-container" class="pt-1">
                    <v-card>
                        <v-card-title>Weiteres über {{ name }}</v-card-title>
                        <v-list>
                            <v-list-item
                                v-for="(item, index) in charInfo"
                                :key="index"     
                            >
                                <v-list-item-content>
                                    <v-list-item-title>{{ item.key }}</v-list-item-title>
                                    <v-list-item-subtitle>{{ item.value }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card>
                    <v-card class="mt-5">
                        <v-card-title>Geldbörse</v-card-title>
                        <v-card-text>Gold: {{ gold }}</v-card-text>
                    </v-card>
                    <v-card class="mt-5">
                        <v-card-title>XP</v-card-title>
                        <v-card-text>XP Bar to be coming</v-card-text>
                    </v-card>
                </v-container>
                <v-container id="rechter-container" class="pt-1">
                    <v-img height="100%" src="../../assets/arthaniaWanted.png"></v-img>
                </v-container>
            </v-row>
    </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';

const name = ref('');
const gender = ref('');
const race = ref('');
const height = ref('');
const weight = ref('');
const haircolor = ref('');
const eyecolor = ref('');
const skincolor = ref('');
const fur = ref('');
const feathers = ref('');
const scales = ref('');
const dob = ref('');
const pob = ref('');
const attitude = ref('');
const traits = ref('');
const languages = ref('');
const features = ref('');
const title = ref('');
const bounty = ref('');
const gold = ref('');
const charClass = ref('');
const weapons = ref([]);
const attBonus = ref([]);
const talentBonus = ref([]);
const level = ref(0);
const lvl3 = ref('');
const lvl8 = ref('');
const lvl13 = ref('');


function getWeaponClass(weapon) {
    const classMap = {
        'AT': 'at',
        'GW': 'gw',
        'FK': 'fk',
        'EM': 'em',
        'ZAU': 'zau',
        'BS': 'bs',
    };
    return classMap[weapon] || '';
}


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
        lvl3.value = data.lvl3;
        lvl8.value = data.lvl8;
        lvl13.value = data.lvl13;

        const statsResponse = await axios.get('http://localhost:3001/api/stats');
        console.log('Stats API Response:', statsResponse.data);

        const statsData = statsResponse.data.stats[0];

        level.value = statsData.level;
        
    } catch (err) {
        console.error('Fehler beim Laden von Arthania:', err.message);
    }
}
loadData();

const bonuses = computed(() => {
    return [...attBonus.value, ...talentBonus.value].map(bonus => bonus.toUpperCase());
});

const charInfo = computed(() => {
    return [
        { key: 'Geschlecht', value: gender.value },
        { key: 'Größe', value: height.value },
        { key: 'Gewicht', value: weight.value },
        { key: 'Haarfarbe', value: haircolor.value },
        { key: 'Augenfarbe', value: eyecolor.value },
        { key: 'Hautfarbe', value: skincolor.value },
        { key: 'Fell', value: fur.value },
        { key: 'Federn', value: feathers.value },
        { key: 'Schuppen', value: scales.value },
        { key: 'Geburtstag', value: dob.value },
        { key: 'Geburtsort', value: pob.value },
        { key: 'Gesinnung', value: attitude.value },
        { key: 'Wesenszüge', value: traits.value },
        { key: 'Sprachen', value: languages.value },
        { key: 'Merkmale', value: features.value }
    ].filter(item => item.value);
});

const cardColorClass3 = computed(() => {
    if (level.value >= 3) {
        return 'greenCard';
    } else {
        return 'redCard';
    }
});

const cardColorClass8 = computed(() => {
    if (level.value >= 8) {
        return 'greenCard';
    } else {
        return 'redCard';
    }
});

const cardColorClass13 = computed(() => {
    if (level.value >= 13) {
        return 'greenCard';
    } else {
        return 'redCard';
    }
});

</script>

<style scoped>

:root {
    --greenChip: #0c7827;
    --redChip: #ab2626;
    --greyChip: #808080;
    --blueChip: #0000ff;
    --yellowChip: #ffff00;
}

#main-container {
    display: flex;
    height: 100vh;
}

#level-boni {
    display: flex;
}

.redCard {
    background-color: #59140a;
}

.greenCard {
    background-color: #185416;
}

.boni-card {
    max-width: 175px;
}

.at {
    background-color: var(--redChip);
}

.fk {
    background-color: red;
}

.gw {
    background-color: var(--greyChip);
}

.em, .za {
    background-color: var(--blueChip);
}

.bs {
    background-color: var(--yellowChip);
}

.tester {
    border: 1px solid;
}

#linker-container {
    width: 36%;
}

#middle-container {
    width: 32%;
}

#rechter-container {
    width: 32%;
}

</style>