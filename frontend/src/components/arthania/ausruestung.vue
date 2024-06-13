<template>
    <v-container id="container" class="fill-height" fluid>
        <v-row class="">
            <v-col id="waffen-spalte">
                <v-divider class="border-opacity-0" :thickness="90"></v-divider>
                <v-container id="mainHand-container">
                    <v-card id="mainHand-card" :class="['inv-card', mainHand.rarity ? `${mainHand.rarity}-item` : '']">
                        <v-container class="d-flex d-flex justify-center" v-if="mainHand.name">
                            <v-avatar>
                                <v-img
                                    src="../../assets/mainHand.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            {{ mainHand.name ? mainHand.name : 'Main Hand-Slot' }}
                        </v-card-title>
                        <div class="item-stats-text">
                            <v-card-subtitle v-if="mainHand.bonus1">
                                {{ mainHand.bonus1 }} +{{ mainHand.value1 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="mainHand.bonus2">
                                {{ mainHand.bonus2 }} +{{ mainHand.value2 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="mainHand.h > 0">
                                Hast +{{ mainHand.h }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="mainHand.crit > 0">
                                Krit +{{ mainHand.crit }}
                            </v-card-subtitle>
                        </div>
                        <v-card-text class="text-scroller" v-if="mainHand.description">
                            {{ mainHand.description }}
                        </v-card-text>
                    </v-card>
                </v-container>
                <v-divider class="border-opacity-0" :thickness="90"></v-divider>
                <v-container id="offHand-container">
                    <v-card id="offHand-card" :class="['inv-card', offHand.rarity ? `${offHand.rarity}-item` : '']">
                        <v-container class="d-flex justify-center" v-if="offHand.name">
                            <v-avatar>
                                <v-img
                                    src="../../assets/offHand.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            {{ offHand.name ? offHand.name : 'Off Hand-Slot' }}
                        </v-card-title>
                        <div class="item-stats-text">
                            <v-card-subtitle v-if="offHand.bonus1">
                                {{ offHand.bonus1 }} +{{ offHand.value1 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="offHand.bonus2">
                                {{ offHand.bonus2 }} +{{ offHand.value2 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="offHand.h > 0">
                                Hast +{{ offHand.h }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="offHand.crit > 0">
                                Krit +{{ offHand.crit }}
                            </v-card-subtitle>
                        </div>
                        <v-card-text class="text-scroller" v-if="offHand.description">
                            {{ offHand.description }}
                        </v-card-text>
                    </v-card>
                </v-container>
            </v-col>
            <v-col id="linke-spalte" class="">
                <v-container id="neck-container">
                    <v-card id="neck-card" :class="['inv-card', neck.rarity ? `${neck.rarity}-item` : '']">
                        <v-container class="d-flex justify-center" v-if="neck.name">
                            <v-avatar>
                                <v-img
                                    src="../../assets/neck.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            {{ neck.name ? neck.name : 'Hals-Slot' }}
                        </v-card-title>
                        <div class="item-stats-text">
                            <v-card-subtitle v-if="neck.bonus1">
                                {{ neck.bonus1 }} +{{ neck.value1 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="neck.bonus2">
                                {{ neck.bonus2 }} +{{ neck.value2 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="neck.h > 0">
                                Hast +{{ neck.h }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="neck.crit > 0">
                                Krit +{{ neck.crit }}
                            </v-card-subtitle>
                        </div>
                        <v-card-text class="text-scroller" v-if="neck.description">
                            {{ neck.description }}
                        </v-card-text>
                    </v-card>
                </v-container>
                <v-container id="shoulder-container">
                    <v-card id="shoulder-card" :class="['inv-card', shoulder.rarity ? `${shoulder.rarity}-item` : '']">
                        <v-container class="d-flex justify-center" v-if="shoulder.name">
                            <v-avatar>
                                <v-img
                                    src="../../assets/shoulder.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            {{ shoulder.name ? shoulder.name : 'Schulter-Slot' }}
                        </v-card-title>
                        <div class="item-stats-text">
                            <v-card-subtitle v-if="shoulder.bonus1">
                                {{ shoulder.bonus1 }} +{{ shoulder.value1 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="shoulder.bonus2">
                                {{ shoulder.bonus2 }} +{{ shoulder.value2 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="shoulder.h > 0">
                                Hast +{{ shoulder.h }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="shoulder.crit > 0">
                                Krit +{{ shoulder.crit }}
                            </v-card-subtitle>
                        </div>
                        <v-card-text class="text-scroller" v-if="shoulder.description">
                            {{ shoulder.description }}
                        </v-card-text>
                    </v-card>
                </v-container>
                <v-container id="hands-container">
                    <v-card id="hands-card" :class="['inv-card', hands.rarity ? `${hands.rarity}-item` : '']">
                        <v-container class="d-flex justify-center" v-if="hands.name">
                            <v-avatar>
                                <v-img
                                    src="../../assets/hands.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            {{ hands.name ? hands.name : 'Hände-Slot' }}
                        </v-card-title>
                        <div class="item-stats-text">
                            <v-card-subtitle v-if="hands.bonus1">
                                {{ hands.bonus1 }} +{{ hands.value1 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="hands.bonus2">
                                {{ hands.bonus2 }} +{{ hands.value2 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="hands.h > 0">
                                Hast +{{ hands.h }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="hands.crit > 0">
                                Krit +{{ hands.crit }}
                            </v-card-subtitle>
                        </div>
                        <v-card-text class="text-scroller" v-if="hands.description">
                            {{ hands.description }}
                        </v-card-text>
                    </v-card>
                </v-container>
            </v-col>
            <v-col id="mittlere-spalte" class="">
                <v-container id="helmet-container">
                    <v-card id="helmet-card" :class="['inv-card', helmet.rarity ? `${helmet.rarity}-item` : '']">
                        <v-container class="d-flex justify-center" v-if="helmet.name">
                            <v-avatar>
                                <v-img
                                    src="../../assets/helmet.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            {{ helmet.name ? helmet.name : 'Helm-Slot' }}
                        </v-card-title>
                        <div class="item-stats-text">
                            <v-card-subtitle v-if="helmet.bonus1">
                                {{ helmet.bonus1 }} +{{ helmet.value1 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="helmet.bonus2">
                                {{ helmet.bonus2 }} +{{ helmet.value2 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="helmet.h > 0">
                                Hast +{{ helmet.h }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="helmet.crit > 0">
                                Krit +{{ helmet.crit }}
                            </v-card-subtitle>
                        </div>
                        <v-card-text class="text-scroller" v-if="helmet.description">
                            {{ helmet.description }}
                        </v-card-text>
                    </v-card>
                </v-container>
                <v-container id="chest-container">
                    <v-card id="chest-card" :class="['inv-card', chest.rarity ? `${chest.rarity}-item` : '']">
                        <v-container class="d-flex justify-center" v-if="chest.name">
                            <v-avatar>
                                <v-img
                                    src="../../assets/chest.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            {{ chest.name ? chest.name : 'Brust-Slot' }}
                        </v-card-title>
                        <div class="item-stats-text">
                            <v-card-subtitle v-if="chest.bonus1">
                                {{ chest.bonus1 }} +{{ chest.value1 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="chest.bonus2">
                                {{ chest.bonus2 }} +{{ chest.value2 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="chest.h > 0">
                                Hast +{{ chest.h }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="chest.crit > 0">
                                Krit +{{ chest.crit }}
                            </v-card-subtitle>
                        </div>
                        <v-card-text class="text-scroller" v-if="chest.description">
                            {{ chest.description }}
                        </v-card-text>
                    </v-card>
                </v-container>
                <v-container id="legs-container">
                    <v-card id="legs-card" :class="['inv-card', legs.rarity ? `${legs.rarity}-item` : '']">
                        <v-container class="d-flex justify-center" v-if="legs.name">
                            <v-avatar>
                                <v-img
                                    src="../../assets/legs.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            {{ legs.name ? legs.name : 'Beine-Slot' }}
                        </v-card-title>
                        <div class="item-stats-text">
                            <v-card-subtitle v-if="legs.bonus1">
                                {{ legs.bonus1 }} +{{ legs.value1 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="legs.bonus2">
                                {{ legs.bonus2 }} +{{ legs.value2 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="legs.h > 0">
                                Hast +{{ legs.h }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="legs.crit > 0">
                                Krit +{{ legs.crit }}
                            </v-card-subtitle>
                        </div>
                        <v-card-text class="text-scroller" v-if="legs.description">
                            {{ legs.description }}
                        </v-card-text>
                    </v-card>
                </v-container>
            </v-col>
            <v-col id="rechte-spalte" class="">
                <v-container id="trinket1-container">
                    <v-card id="trinket1-card" :class="['inv-card', trinket1.rarity ? `${trinket1.rarity}-item` : '']">
                        <v-container class="d-flex justify-center" v-if="trinket1.name">
                            <v-avatar>
                                <v-img
                                    src="../../assets/trinket1.jpg"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                        {{ trinket1.name ? trinket1.name : 'Trinket 1-Slot' }}
                        </v-card-title>
                        <div class="item-stats-text">
                            <v-card-subtitle v-if="trinket1.bonus1">
                                {{ trinket1.bonus1 }} +{{ trinket1.value1 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="trinket1.bonus2">
                                {{ trinket1.bonus2 }} +{{ trinket1.value2 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="trinket1.h > 0">
                                Hast +{{ trinket1.h }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="trinket1.crit > 0">
                                Krit +{{ trinket1.crit }}
                            </v-card-subtitle>
                        </div>
                        <v-card-text class="text-scroller" v-if="trinket1.description">
                            {{ trinket1.description }}
                        </v-card-text>
                    </v-card>
                </v-container>
                <v-container id="ring1-container">
                    <v-card id="ring1-card" :class="['inv-card', ring1.rarity ? `${ring1.rarity}-item` : '']">
                        <v-container class="d-flex justify-center" v-if="ring1.name">
                            <v-avatar>
                                <v-img
                                    src="../../assets/ring1.jpg"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                        {{ ring1.name ? ring1.name : 'Ring 1-Slot' }}
                        </v-card-title>
                        <div class="item-stats-text">
                            <v-card-subtitle v-if="ring1.bonus1">
                                {{ ring1.bonus1 }} +{{ ring1.value1 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="ring1.bonus2">
                                {{ ring1.bonus2 }} +{{ ring1.value2 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="ring1.h > 0">
                                Hast +{{ ring1.h }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="ring1.crit > 0">
                                Krit +{{ ring1.crit }}
                            </v-card-subtitle>
                        </div>
                        <v-card-text class="text-scroller" v-if="ring1.description">
                            {{ ring1.description }}
                        </v-card-text>
                    </v-card>
                </v-container>
            </v-col>
            <v-col>
                <v-container id="trinket2-container">
                    <v-card id="trinket2-card" :class="['inv-card', trinket2.rarity ? `${trinket2.rarity}-item` : '']">
                        <v-container class="d-flex justify-center" v-if="trinket2.name">
                            <v-avatar>
                                <v-img
                                    src="../../assets/trinket2.jpg"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                        {{ trinket2.name ? trinket2.name : 'Trinket 2-Slot' }}
                        </v-card-title>
                        <div class="item-stats-text">
                            <v-card-subtitle v-if="trinket2.bonus1">
                                {{ trinket2.bonus1 }} +{{ trinket2.value1 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="trinket2.bonus2">
                                {{ trinket2.bonus2 }} +{{ trinket2.value2 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="trinket2.h > 0">
                                Hast +{{ trinket2.h }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="trinket2.crit > 0">
                                Krit +{{ trinket2.crit }}
                            </v-card-subtitle>
                        </div>
                        <v-card-text class="text-scroller" v-if="trinket2.description">
                            {{ trinket2.description }}
                        </v-card-text>
                    </v-card>
                </v-container>
                <v-container id="ring2-container">
                <v-card id="ring2-card" :class="['inv-card', ring2.rarity ? `${ring2.rarity}-item` : '']">
                    <v-container class="d-flex justify-center" v-if="ring2.name">
                        <v-avatar>
                            <v-img
                                src="../../assets/ring2.jpg"
                            ></v-img>
                        </v-avatar>
                    </v-container>
                    <v-card-title>
                        {{ ring2.name ? ring2.name : 'Ring 2-Slot' }}
                    </v-card-title>
                    <div class="item-stats-text">
                        <v-card-subtitle v-if="ring2.bonus1">
                            {{ ring2.bonus1 }} +{{ ring2.value1 }}
                        </v-card-subtitle>
                        <v-card-subtitle v-if="ring2.bonus2">
                            {{ ring2.bonus2 }} +{{ ring2.value2 }}
                        </v-card-subtitle>
                        <v-card-subtitle v-if="ring2.h > 0">
                            Hast +{{ ring2.h }}
                        </v-card-subtitle>
                        <v-card-subtitle v-if="ring2.crit > 0">
                            Krit +{{ ring2.crit }}
                        </v-card-subtitle>
                    </div>
                    <v-card-text class="text-scroller" v-if="ring2.description">
                        {{ ring2.description }}
                    </v-card-text>
                </v-card>
            </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const helmet = ref([]);
const shoulder = ref([]);
const chest = ref([]);
const hands = ref([]);
const legs = ref([]);
const neck = ref([]);
const ring1 = ref([]);
const ring2 = ref([]);
const trinket1 = ref([]);
const trinket2 = ref([]);
const mainHand = ref([]);
const offHand = ref([]);



async function loadData() {
    try {
        const response = await axios.get('http://localhost:3001/api/items');
        console.log('API Response:', response.data); // Überprüfen der API-Antwort

        const data = response.data.items;

        /*
        ring2.value = data[8];
        trinket2.value = data[8];
        neck.value = data[8];
        */
       shoulder.value = data[0];
       chest.value = data[1];
       hands.value = data[2];
       legs.value = data[3];
       ring1.value = data[4];
       trinket1.value = data[5];
       mainHand.value = data[6];
       offHand.value = data[7];
       helmet.value = data[8];

    } catch (err) {
        console.error('Fehler beim Laden der Items:', err.message);
    }
}
loadData();

</script>

<style scoped>
/*
#helm-container, #shoulder-container, #hands-container, #neck-container, #trinket1-container,
#ring1-container, #trinket2-container, #ring2-container, #mainHand-container, #offHand-container {
    position: absolute;
}

#shoulder-container {
    top: 412px;
}

#hands-container {
    top: 745px;
}
*/

#container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.text-scroller {
    width: 100%;
    height: 100%;
    overflow: auto;
}

.inv-card {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
    padding-top: initial;
    box-sizing: border-box;
}

.item-stats-text {
    display: flex;
}

.legendary-item{
    box-shadow: orange 0 0 10px 3px;
}

.epic-item {
    box-shadow: #8F00FF 0 0 10px 3px;
}

.rare-item {
    box-shadow: blue 0 0 10px 3px;
}

.uncommon-item {
    box-shadow: green 0 0 10px 3px;
}

.common-item {
    box-shadow: white 0 0 10px 3px;
}


/* Testweise für jetzt commented bis positioning gefixt ist
.tester {
    border: 1px solid;
}
#helm-card {
        width: auto;
        height: auto;
        
    }

#helm-container {
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    width: auto;
    height: auto;
    max-width: 300px;
}



#chest-container {
    position: absolute;
    top: 220px;
    left: 0;
    right: 0;
    width: auto;
    height: auto;
    max-width: 300px;
}

#chest-card {
    width: auto;
    height: auto;
}

#schulter-container {
    position: absolute;
    top: 440px;
    left: 400px;
    width: auto;
    height: auto;
    max-width: 300px;
}

#schulter-card {
    width: auto;
    height: auto;
}

#haende-container {
    position: absolute;
    top: 440px;
    right: 400px;
    width: auto;
    height: auto;
    max-width: 300px;
}

#haende-card {
    width: auto;
    height: auto;
}

#hals-container {
    position: absolute;
    top: 100px;
    left: 400px;
    width: auto;
    height: auto;
    max-width: 300px;
}

#hals-card {
    width: auto;
    height: auto;
}

#trinketEins-container {
    position: absolute;
    top: 100px;
    right: 500px;
    width: auto;
    height: auto;
    max-width: 300px;
}

#trinketEins-card {
    width: auto;
    height: auto;
}

#trinketZwei-container {
    position: absolute;
    top: 100px;
    right: 200px;
    width: auto;
    height: auto;
    max-width: 300px;
}

#trinketZwei-card {
    width: auto;
    height: auto;
}

#trinketEins-container {
    position: absolute;
    top: 100px;
    right: 500px;
    width: auto;
    height: auto;
    max-width: 300px;
}

#trinketEins-card {
    width: auto;
    height: auto;
}

#trinketZwei-container {
    position: absolute;
    top: 100px;
    right: 200px;
    width: auto;
    height: auto;
    max-width: 300px;
}

#trinketZwei-card {
    width: auto;
    height: auto;
}
*/
</style>