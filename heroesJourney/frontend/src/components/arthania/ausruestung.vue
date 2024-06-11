<template>
    <v-container id="container" class="fill-height" fluid>
        <v-row class="">
            <v-col id="waffen-spalte">
                <v-divider class="border-opacity-0" :thickness="90"></v-divider>
                <v-container id="mainHand-container">
                    <v-card id="mainHand-card" :class="['inv-card', mainHand.rarity ? `${mainHand.rarity}-item` : '']"  v-if="mainHand.name != null">
                        <v-container class="d-flex d-flex justify-center">
                            <v-avatar>
                                <v-img
                                    src="../../assets/mainHand.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            {{ mainHand.name }}
                        </v-card-title>
                        <div class="item-stats-text">
                            <v-card-subtitle v-if="mainHand.bonus1 != null">
                                {{ mainHand.bonus1 }} +{{ mainHand.value1 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="mainHand.bonus2 != null">
                                {{ mainHand.bonus2 }} +{{ mainHand.value2 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="mainHand.h > 0">
                                Hast +{{ mainHand.h }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="mainHand.crit > 0">
                                Krit +{{ mainHand.crit }}
                            </v-card-subtitle>
                        </div>
                        <v-card-text class="text-scroller" v-if="mainHand.description != null">
                            {{ mainHand.description }}
                        </v-card-text>
                    </v-card>
                </v-container>
                <v-divider class="border-opacity-0" :thickness="90"></v-divider>
                <v-container id="offHand-container">
                    <v-card id="offHand-card" :class="['inv-card', offHand.rarity ? `${offHand.rarity}-item` : '']" v-if="offHand.name != null">
                        <v-container class="d-flex justify-center">
                            <v-avatar>
                                <v-img
                                    src="../../assets/offHand.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            {{ offHand.name }}
                        </v-card-title>
                        <div class="item-stats-text">
                            <v-card-subtitle v-if="offHand.bonus1 != null">
                                {{ offHand.bonus1 }} +{{ offHand.value1 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="offHand.bonus2 != null">
                                {{ offHand.bonus2 }} +{{ offHand.value2 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="offHand.h > 0">
                                Hast +{{ offHand.h }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="offHand.crit > 0">
                                Krit +{{ offHand.crit }}
                            </v-card-subtitle>
                        </div>
                        <v-card-text class="text-scroller" v-if="offHand.description != null">
                            {{ offHand.description }}
                        </v-card-text>
                    </v-card>
                </v-container>
            </v-col>
            <v-col id="linke-spalte" class="">
                <v-container id="hals-container">
                    <v-card id="hals-card" :class="['inv-card', neck.rarity ? `${neck.rarity}-item` : '']" v-if="neck.name != null">
                        <v-container class="d-flex justify-center">
                            <v-avatar>
                                <v-img
                                    src="../../assets/hals.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            {{ neck.name }}
                        </v-card-title>
                        <div class="item-stats-text">
                            <v-card-subtitle v-if="neck.bonus1 != null">
                                {{ neck.bonus1 }} +{{ neck.value1 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="neck.bonus2 != null">
                                {{ neck.bonus2 }} +{{ neck.value2 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="neck.h > 0">
                                Hast +{{ neck.h }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="neck.crit > 0">
                                Krit +{{ neck.crit }}
                            </v-card-subtitle>
                        </div>
                        <v-card-text class="text-scroller" v-if="neck.description != null">
                            {{ neck.description }}
                        </v-card-text>
                    </v-card>
                </v-container>
                <v-container id="schulter-container">
                    <v-card id="schulter-card" :class="['inv-card', shoulder.rarity ? `${shoulder.rarity}-item` : '']" v-if="shoulder.name != null">
                        <v-container class="d-flex justify-center">
                            <v-avatar>
                                <v-img
                                    src="../../assets/schulter.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            {{ shoulder.name }}
                        </v-card-title>
                        <div class="item-stats-text">
                            <v-card-subtitle v-if="shoulder.bonus1 != null">
                                {{ shoulder.bonus1 }} +{{ shoulder.value1 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="shoulder.bonus2 != null">
                                {{ shoulder.bonus2 }} +{{ shoulder.value2 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="shoulder.h > 0">
                                Hast +{{ shoulder.h }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="shoulder.crit > 0">
                                Krit +{{ shoulder.crit }}
                            </v-card-subtitle>
                        </div>
                        <v-card-text class="text-scroller" v-if="shoulder.description != null">
                            {{ shoulder.description }}
                        </v-card-text>
                    </v-card>
                </v-container>
                <v-container id="haende-container">
                    <v-card id="haende-card" :class="['inv-card', hands.rarity ? `${hands.rarity}-item` : '']" v-if="hands.name != null">
                        <v-container class="d-flex justify-center">
                            <v-avatar>
                                <v-img
                                    src="../../assets/haende.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            {{ hands.name }}
                        </v-card-title>
                        <div class="item-stats-text">
                            <v-card-subtitle v-if="hands.bonus1 != null">
                                {{ hands.bonus1 }} +{{ hands.value1 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="hands.bonus2 != null">
                                {{ hands.bonus2 }} +{{ hands.value2 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="hands.h > 0">
                                Hast +{{ hands.h }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="hands.crit > 0">
                                Krit +{{ hands.crit }}
                            </v-card-subtitle>
                        </div>
                        <v-card-text class="text-scroller" v-if="hands.description != null">
                            {{ hands.description }}
                        </v-card-text>
                    </v-card>
                </v-container>
            </v-col>
            <v-col id="mittlere-spalte" class="">
                <v-container id="helm-container">
                    <v-card id="helm-card" :class="['inv-card', helmet.rarity ? `${helmet.rarity}-item` : '']" v-if="helmet.name != null">
                        <v-container class="d-flex justify-center">
                            <v-avatar>
                                <v-img
                                    src="../../assets/helm.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            {{ helmet.name }}
                        </v-card-title>
                        <div class="item-stats-text">
                            <v-card-subtitle v-if="helmet.bonus1 != null">
                                {{ helmet.bonus1 }} +{{ helmet.value1 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="helmet.bonus2 != null">
                                {{ helmet.bonus2 }} +{{ helmet.value2 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="helmet.h > 0">
                                Hast +{{ helmet.h }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="helmet.crit > 0">
                                Krit +{{ helmet.crit }}
                            </v-card-subtitle>
                        </div>
                        <v-card-text class="text-scroller" v-if="helmet.description != null">
                            {{ helmet.description }}
                        </v-card-text>
                    </v-card>
                </v-container>
                <v-container id="chest-container">
                    <v-card id="chest-card" :class="['inv-card', chest.rarity ? `${chest.rarity}-item` : '']" v-if="chest.name != null">
                        <v-container class="d-flex justify-center">
                            <v-avatar>
                                <v-img
                                    src="../../assets/chest.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            {{ chest.name }}
                        </v-card-title>
                        <div class="item-stats-text">
                            <v-card-subtitle v-if="chest.bonus1 != null">
                                {{ chest.bonus1 }} +{{ chest.value1 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="chest.bonus2 != null">
                                {{ chest.bonus2 }} +{{ chest.value2 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="chest.h > 0">
                                Hast +{{ chest.h }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="chest.crit > 0">
                                Krit +{{ chest.crit }}
                            </v-card-subtitle>
                        </div>
                        <v-card-text class="text-scroller" v-if="chest.description != null">
                            {{ chest.description }}
                        </v-card-text>
                    </v-card>
                </v-container>
                <v-container id="hose-container">
                    <v-card id="hose-card" :class="['inv-card', legs.rarity ? `${legs.rarity}-item` : '']" v-if="legs.name != null">
                        <v-container class="d-flex justify-center">
                            <v-avatar>
                                <v-img
                                    src="../../assets/hose.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            {{ legs.name }}
                        </v-card-title>
                        <div class="item-stats-text">
                            <v-card-subtitle v-if="legs.bonus1 != null">
                                {{ legs.bonus1 }} +{{ legs.value1 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="legs.bonus2 != null">
                                {{ legs.bonus2 }} +{{ legs.value2 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="legs.h > 0">
                                Hast +{{ legs.h }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="legs.crit > 0">
                                Krit +{{ legs.crit }}
                            </v-card-subtitle>
                        </div>
                        <v-card-text class="text-scroller" v-if="legs.description != null">
                            {{ legs.description }}
                        </v-card-text>
                    </v-card>
                </v-container>
            </v-col>
                <v-col id="rechte-spalte" class="">
                    <v-container id="trinketEins-container">
                        <v-card id="trinketEins-card" :class="['inv-card', trinket1.rarity ? `${trinket1.rarity}-item` : '']" v-if="trinket1.name != null">
                            <v-container class="d-flex justify-center">
                                <v-avatar>
                                    <v-img
                                        src="../../assets/trinketEins.jpg"
                                    ></v-img>
                                </v-avatar>
                            </v-container>
                            <v-card-title>
                            {{ trinket1.name }}
                            </v-card-title>
                            <div class="item-stats-text">
                                <v-card-subtitle v-if="trinket1.bonus1 != null">
                                    {{ trinket1.bonus1 }} +{{ trinket1.value1 }}
                                </v-card-subtitle>
                                <v-card-subtitle v-if="trinket1.bonus2 != null">
                                    {{ trinket1.bonus2 }} +{{ trinket1.value2 }}
                                </v-card-subtitle>
                                <v-card-subtitle v-if="trinket1.h > 0">
                                    Hast +{{ trinket1.h }}
                                </v-card-subtitle>
                                <v-card-subtitle v-if="trinket1.crit > 0">
                                    Krit +{{ trinket1.crit }}
                                </v-card-subtitle>
                            </div>
                            <v-card-text class="text-scroller" v-if="trinket1.description != null">
                                {{ trinket1.description }}
                            </v-card-text>
                        </v-card>
                    </v-container>
                    <v-container id="ringEins-container">
                        <v-card id="ringEins-card" :class="['inv-card', ring1.rarity ? `${ring1.rarity}-item` : '']" v-if="ring1.name != null">
                            <v-container class="d-flex justify-center">
                                <v-avatar>
                                    <v-img
                                        src="../../assets/ringEins.jpg"
                                    ></v-img>
                                </v-avatar>
                            </v-container>
                            <v-card-title>
                            {{ ring1.name }}
                            </v-card-title>
                            <div class="item-stats-text">
                                <v-card-subtitle v-if="ring1.bonus1 != null">
                                    {{ ring1.bonus1 }} +{{ ring1.value1 }}
                                </v-card-subtitle>
                                <v-card-subtitle v-if="ring1.bonus2 != null">
                                    {{ ring1.bonus2 }} +{{ ring1.value2 }}
                                </v-card-subtitle>
                                <v-card-subtitle v-if="ring1.h > 0">
                                    Hast +{{ ring1.h }}
                                </v-card-subtitle>
                                <v-card-subtitle v-if="ring1.crit > 0">
                                    Krit +{{ ring1.crit }}
                                </v-card-subtitle>
                            </div>
                            <v-card-text class="text-scroller" v-if="ring1.description != null">
                                {{ ring1.description }}
                            </v-card-text>
                        </v-card>
                    </v-container>
                </v-col>
                <v-col>
                    <v-container id="trinketZwei-container">
                        <v-card id="trinketZwei-card" :class="['inv-card', trinket2.rarity ? `${trinket2.rarity}-item` : '']" v-if="trinket2.name != null">
                            <v-container class="d-flex justify-center">
                                <v-avatar>
                                    <v-img
                                        src="../../assets/trinketZwei.jpg"
                                    ></v-img>
                                </v-avatar>
                            </v-container>
                            <v-card-title>
                            {{ trinket2.name }}
                            </v-card-title>
                            <div class="item-stats-text">
                                <v-card-subtitle v-if="trinket2.bonus1 != null">
                                    {{ trinket2.bonus1 }} +{{ trinket2.value1 }}
                                </v-card-subtitle>
                                <v-card-subtitle v-if="trinket2.bonus2 != null">
                                    {{ trinket2.bonus2 }} +{{ trinket2.value2 }}
                                </v-card-subtitle>
                                <v-card-subtitle v-if="trinket2.h > 0">
                                    Hast +{{ trinket2.h }}
                                </v-card-subtitle>
                                <v-card-subtitle v-if="trinket2.crit > 0">
                                    Krit +{{ trinket2.crit }}
                                </v-card-subtitle>
                            </div>
                            <v-card-text class="text-scroller" v-if="trinket2.description != null">
                                {{ trinket2.description }}
                            </v-card-text>
                        </v-card>
                    </v-container>
                    <v-container id="ringZwei-container">
                    <v-card id="ringZwei-card" :class="['inv-card', ring2.rarity ? `${ring2.rarity}-item` : '']" v-if="ring2.name != null">
                        <v-container class="d-flex justify-center">
                            <v-avatar>
                                <v-img
                                    src="../../assets/ringZwei.jpg"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            {{ ring2.name }}
                        </v-card-title>
                        <div class="item-stats-text">
                            <v-card-subtitle v-if="ring2.bonus1 != null">
                                {{ ring2.bonus1 }} +{{ ring2.value1 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="ring2.bonus1 != null">
                                {{ ring2.bonus2 }} +{{ ring2.value2 }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="ring2.h > 0">
                                Hast +{{ ring2.h }}
                            </v-card-subtitle>
                            <v-card-subtitle v-if="ring2.crit > 0">
                                Krit +{{ ring2.crit }}
                            </v-card-subtitle>
                        </div>
                        <v-card-text class="text-scroller" v-if="ring2.description != null">
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

        shoulder.value = data[0];
        chest.value = data[1];
        hands.value = data[2];
        legs.value = data[3];
        ring1.value = data[4];
        trinket1.value = data[5];
        mainHand.value = data[6];
        offHand.value = data[7];

    } catch (err) {
        console.error('Fehler beim Laden der Stats:', err.message);
    }
}
loadData();

</script>

<style scoped>

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


/* Testweise für jetzt commented bis positioning gefixt ist
    #helm-card {
        width: auto;
        height: auto;
        
    }
.tester {
    border: 1px solid;
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