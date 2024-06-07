<template>
    <v-container fluid>
        <v-expansion-panels multiple>
            <v-expansion-panel id="passive-panel" class="panel-margin">
            <v-expansion-panel-title>Passiv</v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-data-table 
                    :headers="passiveTableHeaders"
                    :items="passive"
                >
                </v-data-table>
            </v-expansion-panel-text>
            </v-expansion-panel>
            <v-divider class="border-opacity-0" :thickness="10"></v-divider>
            <v-expansion-panel id="buffs-panel" class="panel-margin">
            <v-expansion-panel-title>Buffs</v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-data-table 
                    :headers="buffTableHeaders"
                    :items="buffs"
                >
                </v-data-table>
            </v-expansion-panel-text>
            </v-expansion-panel>
            <v-divider class="border-opacity-0" :thickness="10"></v-divider>
            <v-expansion-panel id="angriffe-panel" class="panel-margin">
            <v-expansion-panel-title>Angriffe</v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-data-table 
                    :headers="attackTableHeaders"
                    :items="attacks"
                >
                </v-data-table>
            </v-expansion-panel-text>
            </v-expansion-panel>
            <v-divider class="border-opacity-0" :thickness="10"></v-divider>
            <v-expansion-panel id="formen-panel" class="panel-margin">
                <v-expansion-panel-title>Formen</v-expansion-panel-title>
                <v-expansion-panel-text>
                    <v-select
                        v-model="selectedOption"
                        :items="options"
                    expansion-panelel="Wähle eine Form"
                        @change="onOptionChange"
                    ></v-select>
                </v-expansion-panel-text>
                <v-expansion-panel-text>
                    <v-expansion-panels multiple>
                        <v-expansion-panel v-if="selectedOption === 'Phoenix'">
                            <v-expansion-panel-title>Passiv</v-expansion-panel-title>
                            <v-expansion-panel-text>
                                <v-data-table 
                                :headers="passiveTableHeaders"
                                :items="phoenixPassive"
                                ></v-data-table>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                        <v-expansion-panel v-if="selectedOption === 'Phoenix'">
                            <v-expansion-panel-title>Buffs</v-expansion-panel-title>
                            <v-expansion-panel-text>
                                <v-data-table 
                                :headers="buffTableHeaders"
                                :items="phoenixBuffs"
                                ></v-data-table>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                        <v-expansion-panel v-if="selectedOption === 'Phoenix'">
                            <v-expansion-panel-title>Angriffe</v-expansion-panel-title>
                            <v-expansion-panel-text>
                                <v-data-table 
                                :headers="attackTableHeaders"
                                :items="phoenixAttacks"
                                ></v-data-table>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                        <v-expansion-panel v-if="selectedOption === 'Guilmon'">
                            <v-expansion-panel-title>Passiv</v-expansion-panel-title>
                            <v-expansion-panel-text>
                                <v-data-table 
                                :headers="passiveTableHeaders"
                                :items="guilmonPassive"
                                ></v-data-table>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                        <v-expansion-panel v-if="selectedOption === 'Guilmon'">
                            <v-expansion-panel-title>Buffs</v-expansion-panel-title>
                            <v-expansion-panel-text>
                                <v-data-table 
                                :headers="buffTableHeaders"
                                :items="guilmonBuffs"
                                ></v-data-table>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                        <v-expansion-panel v-if="selectedOption === 'Guilmon'">
                            <v-expansion-panel-title>Angriffe</v-expansion-panel-title>
                            <v-expansion-panel-text>
                                <v-data-table 
                                :headers="attackTableHeaders"
                                :items="guilmonAttacks"
                                ></v-data-table>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                        <v-expansion-panel v-if="selectedOption === 'Agumon'">
                            <v-expansion-panel-title>Passiv</v-expansion-panel-title>
                            <v-expansion-panel-text>
                                <v-data-table 
                                :headers="passiveTableHeaders"
                                :items="agumonPassive"
                                ></v-data-table>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                        <v-expansion-panel v-if="selectedOption === 'Agumon'">
                            <v-expansion-panel-title>Buffs</v-expansion-panel-title>
                            <v-expansion-panel-text>
                                <v-data-table 
                                :headers="buffTableHeaders"
                                :items="agumonBuffs"
                                ></v-data-table>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                        <v-expansion-panel v-if="selectedOption === 'Agumon'">
                            <v-expansion-panel-title>Angriffe</v-expansion-panel-title>
                            <v-expansion-panel-text>
                                <v-data-table 
                                :headers="attackTableHeaders"
                                :items="agumonAttacks"
                                ></v-data-table>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                        <v-expansion-panel v-if="selectedOption === 'Raszageth'">
                            <v-expansion-panel-title>Passiv</v-expansion-panel-title>
                            <v-expansion-panel-text>
                                <v-data-table 
                                :headers="passiveTableHeaders"
                                :items="raszagethPassive"
                                ></v-data-table>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                        <v-expansion-panel v-if="selectedOption === 'Raszageth'">
                            <v-expansion-panel-title>Buffs</v-expansion-panel-title>
                            <v-expansion-panel-text>
                                <v-data-table 
                                :headers="buffTableHeaders"
                                :items="raszagethBuffs"
                                ></v-data-table>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                        <v-expansion-panel v-if="selectedOption === 'Raszageth'">
                            <v-expansion-panel-title>Angriffe</v-expansion-panel-title>
                            <v-expansion-panel-text>
                                <v-data-table 
                                :headers="attackTableHeaders"
                                :items="raszagethAttacks"
                                ></v-data-table>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const passive = ref([]);
const buffs = ref([]);
const attacks = ref([]);
const phoenixPassive = ref([]);
const phoenixBuffs = ref([]);
const phoenixAttacks = ref([]);

const guilmonPassive = ref([]);
const guilmonBuffs = ref([]);
const guilmonAttacks = ref([]);
const agumonPassive = ref([]);
const agumonBuffs = ref([]);
const agumonAttacks = ref([]);
const raszagethPassive = ref([]);
const raszagethBuffs = ref([]);
const raszagethAttacks = ref([]);

const selectedOption = ref('');
const options = ['', 'Phoenix', 'Guilmon', 'Agumon', 'Raszageth']

const passiveTableHeaders = [
    { title: 'Name', value: 'AT_Name' },
    { title: 'Beschreibung', value: 'AT_Beschreibung' },
    { title: 'Schaden', value: 'Damage' },
];

const buffTableHeaders = [
    { title: 'Name', value: 'AT_Name' },
    { title: 'Beschreibung', value: 'AT_Beschreibung' },
    { title: 'CD', value: 'CD' },
    { title: 'Schaden', value: 'Damage' },
];

const attackTableHeaders = [
    { title: 'Name', value: 'AT_Name' },
    { title: 'Beschreibung', value: 'AT_Beschreibung' },
    { title: 'CD', value: 'CD' },
    { title: 'Probe', value: 'BS_PB' },
    { title: 'Schaden', value: 'Damage' },
];


async function loadData() {
    try {
        const response = await axios.get('http://localhost:3001/api/arthaniaMoveset');
        console.log('API Response:', response.data); // Überprüfen der API-Antwort

        const data = response.data.arthania;
        
        passive.value = data.filter(item => item.AT_Art === "P" && item.Form === "Klasse_1");
        buffs.value = data.filter(item => item.AT_Art === "B" && item.Form === "Klasse_1");
        attacks.value = data.filter(item => item.AT_Art === "S" && item.Form === "Klasse_1");
        phoenixPassive.value = data.filter(item => item.AT_Art === "P" && item.Form === "Phoenix");
        phoenixBuffs.value = data.filter(item => item.AT_Art === "B" && item.Form === "Phoenix");
        phoenixAttacks.value = data.filter(item => item.AT_Art === "S" && item.Form === "Phoenix");
        guilmonPassive.value = data.filter(item => item.AT_Art === "P" && item.Form === "Guilmon");
        guilmonBuffs.value = data.filter(item => item.AT_Art === "B" && item.Form === "Guilmon");
        guilmonAttacks.value = data.filter(item => item.AT_Art === "S" && item.Form === "Guilmon");
        agumonPassive.value = data.filter(item => item.AT_Art === "P" && item.Form === "Agumon");
        agumonBuffs.value = data.filter(item => item.AT_Art === "B" && item.Form === "Agumon");
        agumonAttacks.value = data.filter(item => item.AT_Art === "S" && item.Form === "Agumon");
        raszagethPassive.value = data.filter(item => item.AT_Art === "P" && item.Form === "Raszageth");
        raszagethBuffs.value = data.filter(item => item.AT_Art === "B" && item.Form === "Raszageth");
        raszagethAttacks.value = data.filter(item => item.AT_Art === "S" && item.Form === "Raszageth");
    } catch (err) {
        console.error('Fehler beim Laden der Stats:', err.message);
    }
}

loadData();

</script>

<style>

.panel-margin {
    margin-left: 16px;
}

</style>