<template>
    <v-container fluid>
        <v-expansion-panels multiple>
            <v-expansion-panel id="passive-panel">
            <v-expansion-panel-title>Passiv</v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-data-table 
                    :items="passive"
                >
                </v-data-table>
            </v-expansion-panel-text>
            </v-expansion-panel>
            <v-divider class="border-opacity-0" :thickness="10"></v-divider>
            <v-expansion-panel id="buffs-panel">
            <v-expansion-panel-title>Buffs</v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-data-table 
                    :items="buffs"
                >
                </v-data-table>
            </v-expansion-panel-text>
            </v-expansion-panel>
            <v-divider class="border-opacity-0" :thickness="10"></v-divider>
            <v-expansion-panel id="angriffe-panel">
            <v-expansion-panel-title>Angriffe</v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-data-table 
                    :items="buffs"
                >
                </v-data-table>
            </v-expansion-panel-text>
            </v-expansion-panel>
            <v-divider class="border-opacity-0" :thickness="10"></v-divider>
            <v-expansion-panel id="formen-panel">
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
                    <v-data-table 
                        v-if="selectedOption === 'Guilmon'"
                        :items="guilmon"
                    >
                    </v-data-table>
                    <v-data-table 
                        v-if="selectedOption === 'Agumon'"
                        :items="agumon"
                    >
                    </v-data-table>
                    <v-data-table 
                        v-if="selectedOption === 'Raszageth'"
                        :items="raszageth"
                    >
                    </v-data-table>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>

<script>
export default {
    name: 'Moveset',
    data() {
        return {
            selectedOption: '',
            passive: [
                /* blanko-passive
                {
                    icon: "",
                    name: "",
                    effekt: "",
                },
                */
                {
                    icon: "",
                    name: "Primae der Flamme",
                    effekt: "Nach 2 Kritischen Treffern erhält der Gegner eine Erschöpfungsstufe. Werden 3 Erschöpfungsstufen erreicht, so wird der Gegner für eine Runde betäubt und erhält 10 Bonusschaden bei jedem Angriff. Danach wird seine Erschöpfungsstufe 0.",
                },
                {
                    icon: "",
                    name: "Flammende Aura",
                    effekt: "Ihr strahlt eine flammende Aura aus die Eure Gruppenmitglieder motiviert. Ihre Angriffe verursachen 3 Schaden mehr. Angriffe die Euch treffen verursachen 10% Ihres Schadens als Schaden am Gegner.",
                },
                {
                    icon: "",
                    name: "Glühende Asche",
                    effekt: "Feuerangriffe von Euch und Euren Verbündeten hinterlassen auf Ihrem Ziel \"Glühende Asche\". Glühende Asche verlangsamt das Ziel um 2 H, außerdem erleiden Sie bei jedem eurer kritischen Treffer euren KRIT Wert als Schaden.",
                },
                {
                    icon: "",
                    name: "Phönixfedern",
                    effekt: "Erlaubt es Euch eure Angriffe in Eure Federn zu leiten und in Eurer humanoiden Form zu verschießen solange diese eine Kurutai ist.",
                },
                {
                    icon: "",
                    name: "Dominant",
                    effekt: "Erlaubt es Euch \"Loderflamme\", \"Phönixschub\", \"Phönixfeuer\", \"Glutwelle\" und \"Scharlachrote Schwingen\" in jeder Form zu verwenden.",
                },
                {
                    icon: "",
                    name: "Flammende Auferstehung",
                    effekt: "Solltet Ihr unter 10% LE fallen, regeneriert Ihr sofort 50% LE und löst Offenbarung spontant aus.",
                },
                {
                    icon: "",
                    name: "Aufgestiegener Phönix: Sonnentanz",
                    effekt: "Eure Kritischen Treffer beschwören aus euch heraus den \"Phönixgott\" Alar. Alar lässt euch \"Flammengeysir\" spontan verwenden. Es können 3 Alar gleichzeitig aktiv sein.",
                }
            ],
            buffs: [
                /* blanko-passive
                {
                    icon: "",
                    name: "",
                    effekt: "",
                },
                */
                {
                    icon: "",
                    name: "Primae der Flamme",
                    effekt: "Nach 2 Kritischen Treffern erhält der Gegner eine Erschöpfungsstufe. Werden 3 Erschöpfungsstufen erreicht, so wird der Gegner für eine Runde betäubt und erhält 10 Bonusschaden bei jedem Angriff. Danach wird seine Erschöpfungsstufe 0.",
                },
                {
                    icon: "",
                    name: "Flammende Aura",
                    effekt: "Ihr strahlt eine flammende Aura aus die Eure Gruppenmitglieder motiviert. Ihre Angriffe verursachen 3 Schaden mehr. Angriffe die Euch treffen verursachen 10% Ihres Schadens als Schaden am Gegner.",
                },
                {
                    icon: "",
                    name: "Glühende Asche",
                    effekt: "Feuerangriffe von Euch und Euren Verbündeten hinterlassen auf Ihrem Ziel \"Glühende Asche\". Glühende Asche verlangsamt das Ziel um 2 H, außerdem erleiden Sie bei jedem eurer kritischen Treffer euren KRIT Wert als Schaden.",
                },
                {
                    icon: "",
                    name: "Phönixfedern",
                    effekt: "Erlaubt es Euch eure Angriffe in Eure Federn zu leiten und in Eurer humanoiden Form zu verschießen solange diese eine Kurutai ist.",
                },
                {
                    icon: "",
                    name: "Dominant",
                    effekt: "Erlaubt es Euch \"Loderflamme\", \"Phönixschub\", \"Phönixfeuer\", \"Glutwelle\" und \"Scharlachrote Schwingen\" in jeder Form zu verwenden.",
                },
                {
                    icon: "",
                    name: "Flammende Auferstehung",
                    effekt: "Solltet Ihr unter 10% LE fallen, regeneriert Ihr sofort 50% LE und löst Offenbarung spontant aus.",
                },
                {
                    icon: "",
                    name: "Aufgestiegener Phönix: Sonnentanz",
                    effekt: "Eure Kritischen Treffer beschwören aus euch heraus den \"Phönixgott\" Alar. Alar lässt euch \"Flammengeysir\" spontan verwenden. Es können 3 Alar gleichzeitig aktiv sein.",
                }
            ],
            guilmon: [
                /* blanko-passive
                {
                    icon: "",
                    name: "",
                    effekt: "",
                },
                */
                {
                    icon: "",
                    name: "Primae der Flamme",
                    effekt: "Nach 2 Kritischen Treffern erhält der Gegner eine Erschöpfungsstufe. Werden 3 Erschöpfungsstufen erreicht, so wird der Gegner für eine Runde betäubt und erhält 10 Bonusschaden bei jedem Angriff. Danach wird seine Erschöpfungsstufe 0.",
                },
                {
                    icon: "",
                    name: "Flammende Aura",
                    effekt: "Ihr strahlt eine flammende Aura aus die Eure Gruppenmitglieder motiviert. Ihre Angriffe verursachen 3 Schaden mehr. Angriffe die Euch treffen verursachen 10% Ihres Schadens als Schaden am Gegner.",
                },
                {
                    icon: "",
                    name: "Glühende Asche",
                    effekt: "Feuerangriffe von Euch und Euren Verbündeten hinterlassen auf Ihrem Ziel \"Glühende Asche\". Glühende Asche verlangsamt das Ziel um 2 H, außerdem erleiden Sie bei jedem eurer kritischen Treffer euren KRIT Wert als Schaden.",
                },
                {
                    icon: "",
                    name: "Phönixfedern",
                    effekt: "Erlaubt es Euch eure Angriffe in Eure Federn zu leiten und in Eurer humanoiden Form zu verschießen solange diese eine Kurutai ist.",
                },
                {
                    icon: "",
                    name: "Dominant",
                    effekt: "Erlaubt es Euch \"Loderflamme\", \"Phönixschub\", \"Phönixfeuer\", \"Glutwelle\" und \"Scharlachrote Schwingen\" in jeder Form zu verwenden.",
                },
                {
                    icon: "",
                    name: "Flammende Auferstehung",
                    effekt: "Solltet Ihr unter 10% LE fallen, regeneriert Ihr sofort 50% LE und löst Offenbarung spontant aus.",
                },
                {
                    icon: "",
                    name: "Aufgestiegener Phönix: Sonnentanz",
                    effekt: "Eure Kritischen Treffer beschwören aus euch heraus den \"Phönixgott\" Alar. Alar lässt euch \"Flammengeysir\" spontan verwenden. Es können 3 Alar gleichzeitig aktiv sein.",
                }
            ],
            agumon: [
                /* blanko-passive
                {
                    icon: "",
                    name: "",
                    effekt: "",
                },
                */
                {
                    icon: "",
                    name: "Primae der Flamme",
                    effekt: "Nach 2 Kritischen Treffern erhält der Gegner eine Erschöpfungsstufe. Werden 3 Erschöpfungsstufen erreicht, so wird der Gegner für eine Runde betäubt und erhält 10 Bonusschaden bei jedem Angriff. Danach wird seine Erschöpfungsstufe 0.",
                },
                {
                    icon: "",
                    name: "Flammende Aura",
                    effekt: "Ihr strahlt eine flammende Aura aus die Eure Gruppenmitglieder motiviert. Ihre Angriffe verursachen 3 Schaden mehr. Angriffe die Euch treffen verursachen 10% Ihres Schadens als Schaden am Gegner.",
                },
                {
                    icon: "",
                    name: "Glühende Asche",
                    effekt: "Feuerangriffe von Euch und Euren Verbündeten hinterlassen auf Ihrem Ziel \"Glühende Asche\". Glühende Asche verlangsamt das Ziel um 2 H, außerdem erleiden Sie bei jedem eurer kritischen Treffer euren KRIT Wert als Schaden.",
                },
                {
                    icon: "",
                    name: "Phönixfedern",
                    effekt: "Erlaubt es Euch eure Angriffe in Eure Federn zu leiten und in Eurer humanoiden Form zu verschießen solange diese eine Kurutai ist.",
                },
                {
                    icon: "",
                    name: "Dominant",
                    effekt: "Erlaubt es Euch \"Loderflamme\", \"Phönixschub\", \"Phönixfeuer\", \"Glutwelle\" und \"Scharlachrote Schwingen\" in jeder Form zu verwenden.",
                },
                {
                    icon: "",
                    name: "Flammende Auferstehung",
                    effekt: "Solltet Ihr unter 10% LE fallen, regeneriert Ihr sofort 50% LE und löst Offenbarung spontant aus.",
                },
                {
                    icon: "",
                    name: "Aufgestiegener Phönix: Sonnentanz",
                    effekt: "Eure Kritischen Treffer beschwören aus euch heraus den \"Phönixgott\" Alar. Alar lässt euch \"Flammengeysir\" spontan verwenden. Es können 3 Alar gleichzeitig aktiv sein.",
                }
            ],
            raszageth: [
                /* blanko-passive
                {
                    icon: "",
                    name: "",
                    effekt: "",
                },
                */
                {
                    icon: "",
                    name: "Tester",
                    effekt: "ayyyyyyyyyyyyyy lmao",
                },
                {
                    icon: "",
                    name: "Flammende Aura",
                    effekt: "Ihr strahlt eine flammende Aura aus die Eure Gruppenmitglieder motiviert. Ihre Angriffe verursachen 3 Schaden mehr. Angriffe die Euch treffen verursachen 10% Ihres Schadens als Schaden am Gegner.",
                },
                {
                    icon: "",
                    name: "Glühende Asche",
                    effekt: "Feuerangriffe von Euch und Euren Verbündeten hinterlassen auf Ihrem Ziel \"Glühende Asche\". Glühende Asche verlangsamt das Ziel um 2 H, außerdem erleiden Sie bei jedem eurer kritischen Treffer euren KRIT Wert als Schaden.",
                },
                {
                    icon: "",
                    name: "Phönixfedern",
                    effekt: "Erlaubt es Euch eure Angriffe in Eure Federn zu leiten und in Eurer humanoiden Form zu verschießen solange diese eine Kurutai ist.",
                },
                {
                    icon: "",
                    name: "Dominant",
                    effekt: "Erlaubt es Euch \"Loderflamme\", \"Phönixschub\", \"Phönixfeuer\", \"Glutwelle\" und \"Scharlachrote Schwingen\" in jeder Form zu verwenden.",
                },
                {
                    icon: "",
                    name: "Flammende Auferstehung",
                    effekt: "Solltet Ihr unter 10% LE fallen, regeneriert Ihr sofort 50% LE und löst Offenbarung spontant aus.",
                },
                {
                    icon: "",
                    name: "Aufgestiegener Phönix: Sonnentanz",
                    effekt: "Eure Kritischen Treffer beschwören aus euch heraus den \"Phönixgott\" Alar. Alar lässt euch \"Flammengeysir\" spontan verwenden. Es können 3 Alar gleichzeitig aktiv sein.",
                }
            ],
            options: ['','Guilmon', 'Agumon', 'Raszageth']
        }
    }
}
</script>