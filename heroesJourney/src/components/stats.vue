<template>
    <v-container id="main-container" class="container fill-width" fluid>
        <v-container id="linker-container">
            <v-container id="attribute-und-talente-container">
                <v-container>
                <v-row justify="center">
                    <v-card id="attributeUndTalenteTile">
                        <v-card-title>
                            Attribute und Talente
                        </v-card-title>
                    </v-card>
                </v-row>
                <v-row>
                    <v-col>
                        <v-card id="ausdauerTile" variant="text">    
                            <v-card>
                                <v-card-title>
                                    Ausdauer
                                </v-card-title>
                                <v-card-text>
                                    13
                                </v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card>
                                <v-card-title>
                                    Rettungsroll
                                </v-card-title>
                                <v-card-text>
                                    6
                                </v-card-text>
                            </v-card>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card id="staerkeTile" variant="text">
                            <v-card>
                                <v-card-title>
                                    Stärke
                                </v-card-title>
                                <v-card-text>
                                    6
                                </v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card>
                                <v-card-title>
                                    Rettungsroll
                                </v-card-title>
                                <v-card-text>
                                    3
                                </v-card-text>
                            </v-card>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card id="beweglichkeitTile" variant="text">
                            <v-card>
                                <v-card-title>
                                    Beweglichkeit
                                </v-card-title>
                                <v-card-text>
                                    15
                                </v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card>
                                <v-card-title>
                                    Rettungsroll
                                </v-card-title>
                                <v-card-text>
                                    7
                                </v-card-text>
                            </v-card>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card id="intelligenzTile" variant="text">
                            <v-card>
                                <v-card-title>
                                    Intelligenz
                                </v-card-title>
                                <v-card-text>
                                    11
                                </v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card>
                                <v-card-title>
                                    Rettungsroll
                                </v-card-title>
                                <v-card-text>
                                    5
                                </v-card-text>
                            </v-card>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card id="weisheitTile" variant="text">
                            <v-card>
                                <v-card-title>
                                    Weisheit
                                </v-card-title>
                                <v-card-text>
                                    7
                                </v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card>
                                <v-card-title>
                                    Rettungsroll
                                </v-card-title>
                                <v-card-text>
                                7
                                </v-card-text>
                            </v-card>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card id="geistTile" variant="text">
                            <v-card>
                                <v-card-title>
                                    Geist
                                </v-card-title>
                                <v-card-text>
                                    10
                                </v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card>
                                <v-card-title>
                                    Rettungsroll
                                </v-card-title>
                                <v-card-text>
                                    5
                                </v-card-text>
                            </v-card>
                        </v-card>
                    </v-col>
                </v-row>
                </v-container>
            </v-container>
            <v-container id="talente-container" class="tester">
                <v-row justify="center" no-gutters>
                    <v-card id="talenteTile">
                        <v-card-title>Talente</v-card-title>
                    </v-card>
                </v-row>
                <v-row class="">
                    <v-col class="">
                        <v-container id="linke-spalte-talente-container">
                            <v-card class="blaues-tile">
                                <v-card-title>Arkanum (ARK)</v-card-title>
                                <v-card-text>8</v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="blaues-tile">
                                <v-card-title>Untersuchung (UNS)</v-card-title>
                                <v-card-text>5</v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="blaues-tile">
                                <v-card-title>Wissen (WIS)</v-card-title>
                                <v-card-text>7</v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="blaues-tile">
                                <v-card-title>Überzeugung(ÜZG)</v-card-title>
                                <v-card-text>5</v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="blaues-tile">
                                <v-card-title>Magisches Werken (MgW)</v-card-title>
                                <v-card-text>5</v-card-text> 
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="rotes-tile">
                                <v-card-title>Einschüchtern (ESC)</v-card-title>
                                <v-card-text>3</v-card-text> 
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="gelbes-tile">
                                <v-card-title>Menschenkenntnis (MNK)</v-card-title>
                                <v-card-text>6</v-card-text> 
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="gelbes-tile">
                                <v-card-title>Wahrnehmung (WHN)</v-card-title>
                                <v-card-text>11</v-card-text> 
                            </v-card>
                        </v-container>
                    </v-col>
                    <v-col class="">
                        <v-container id="mitte-spalte-talente-container">
                            <v-card class="gruenes-tile">
                                <v-card-title>Akrobatik (AKR)</v-card-title>
                                <v-card-text>11</v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="gruenes-tile">
                                <v-card-title>Schleichen (SCL)</v-card-title>
                                <v-card-text>9</v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="gruenes-tile">
                                <v-card-title>Fingerfertigkeit (FFK)</v-card-title>
                                <v-card-text>7</v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="gruenes-tile">
                                <v-card-title>Täuschung (TÄU)</v-card-title>
                                <v-card-text>7</v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="gruenes-tile">
                                <v-card-title>Feinwerken (FWK)</v-card-title>
                                <v-card-text>7</v-card-text> 
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="rotes-tile">
                                <v-card-title>Athletik (ATL)</v-card-title>
                                <v-card-text>7</v-card-text> 
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="gelbes-tile">
                                <v-card-title>Wildnisleben (WNL)</v-card-title>
                                <v-card-text>5</v-card-text> 
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="gelbes-tile">
                                <v-card-title>Alchemie (ALC)</v-card-title>
                                <v-card-text>5</v-card-text> 
                            </v-card>
                        </v-container>
                    </v-col>
                    <v-col class="">
                        <v-container id="rechte-spalte-talente-container">
                            <v-card class="graues-tile">
                                <v-card-title>Überlebenskunst (ÜLK)</v-card-title>
                                <v-card-text>8</v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="graues-tile">
                                <v-card-title>Heilkunde/Anatomie (HKA)</v-card-title>
                                <v-card-text>9</v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="graues-tile">
                                <v-card-title>Religion (RLG)</v-card-title>
                                <v-card-text>7</v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="graues-tile">
                                <v-card-title>Tier Handhabung (THB)</v-card-title>
                                <v-card-text>8</v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="graues-tile">
                                <v-card-title>Sammeln (SAM)</v-card-title>
                                <v-card-text>7</v-card-text> 
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="rotes-tile">
                                <v-card-title>Grobwerken (GWK)</v-card-title>
                                <v-card-text>3</v-card-text> 
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="gelbes-tile">
                                <v-card-title>Schauspiel (SCH)</v-card-title>
                                <v-card-text>7</v-card-text> 
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="gelbes-tile">
                                <v-card-title>Feilschen (FLN)</v-card-title>
                                <v-card-text>5</v-card-text> 
                            </v-card>
                        </v-container>
                    </v-col>
                </v-row> 
            </v-container>
    </v-container>
        <v-container id="rechter-container">
            <v-container id="grundstatistik-container">
                <v-container>
                    <v-row justify="center">
                            <v-card id="grundstatistikTile">
                                <v-card-title>Grundstatistik</v-card-title>
                            </v-card>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-card id="leTile">
                                <v-card-title>LE</v-card-title>
                                <v-card-text>105</v-card-text>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card id="defTile">
                                <v-card-title>DEF</v-card-title>
                                <v-card-text>1</v-card-text>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card id="koennenTile">
                                <v-card-title>Können</v-card-title>
                                <v-card-text>1</v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-container>
            <v-container id="faehigkeits-kampfwerte-container">
                <v-row>
                    <v-col>
                        <v-container id="faehigkeits-container">
                            <v-row justify="center">
                                <v-card id="grundstatistikTile">
                                    <v-card-title>Fähigkeitsbasen</v-card-title>
                                </v-card>
                            </v-row>
                                <v-row>
                                    <v-col>
                                        <v-card id="atTile">
                                            <v-card-title>
                                                AT
                                            </v-card-title>
                                            <v-card-text>
                                                6
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                    <v-col>
                                        <v-card id="gwTile">
                                            <v-card-title>
                                                GW
                                            </v-card-title>
                                            <v-card-text>
                                                13
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-card id="fkTile">
                                            <v-card-title>
                                                FK
                                            </v-card-title>
                                            <v-card-text>
                                                16
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                    <v-col>
                                        <v-card id="emTile">
                                            <v-card-title>
                                                EM
                                            </v-card-title>
                                            <v-card-text>
                                                8
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-card id="zaTile">
                                            <v-card-title>
                                                ZA
                                            </v-card-title>
                                            <v-card-text>
                                                8
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                    <v-col>
                                        <v-card id="bsTile">
                                            <v-card-title>
                                                BS
                                            </v-card-title>
                                            <v-card-text>
                                                8
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-row>
                        </v-container>
                    </v-col>
                    <v-col>
                        <v-container id="kampfwerte-container">
                            <v-row justify="center">
                                <v-card id="kampfwerteTile">
                                    <v-card-title>Kampfwerte</v-card-title>
                                </v-card>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-card id="kritTile">
                                        <v-card-title>
                                            KRIT
                                        </v-card-title>
                                        <v-card-text>
                                            4
                                        </v-card-text>
                                    </v-card>
                                    <v-divider :thickness="135" class="border-opacity-0"></v-divider>
                                    <v-card id="hTile">
                                        <v-card-title>
                                            H
                                        </v-card-title>
                                        <v-card-text>
                                            15
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
            <v-container id="rassenvorteile-container">
                <v-row justify="center">
                    <v-card><v-card-title>Rassenvorteile</v-card-title></v-card>
                </v-row>
                <v-container>
                    <v-row justify="center">
                        <v-container>
                        <v-card id="rassenvorteil-eins">
                            <v-card-title>Segen des Phönix</v-card-title>
                            <v-card-text>Einmal pro Spieltag, wenn ihr einen kritischen Treffer erleidet regeneriert Ihr 50% LE</v-card-text>
                        </v-card>
                        </v-container>
                        <v-container>
                        <v-card id="rassenvorteil-zwei">
                            <v-card-title>Feurige Aura</v-card-title>
                            <v-card-text>Feuerangriffe die Ihr erleidet heilen euch um 10% eures Schadens</v-card-text>
                        </v-card>
                        </v-container>
                        <v-container>
                        <v-card id="rassenvorteil-drei">
                            <v-card-title>Magische Erscheinung</v-card-title>
                            <v-card-text>Würfe auf Schleichen und Täuschung sind um 1 leichter wenn die Sonne auf euch scheint</v-card-text>
                        </v-card>
                        </v-container>
                    </v-row>
                </v-container>
            </v-container>
            <v-container id="vorteile-container">
                <v-row justify="center">
                    <v-card><v-card-title>Vorteile</v-card-title></v-card>
                </v-row>
                <v-container>
                    <v-row justify="center">
                        <v-container>
                        <v-card id="vorteil-eins">
                            <v-card-title>Adaptive Essenz</v-card-title>
                            <v-card-text>Erlaubt es eine weitere Essenz zu augmentieren</v-card-text>
                        </v-card>
                        </v-container>
                        <v-container>
                        <v-card id="vorteil-zwei">
                            <v-card-title>Meisterhaftes Können</v-card-title>
                            <v-card-text>Erlaubt es euch 2 Fähigkeiten zu wählen in denen ihr Halbkönnen hinzufügen könnt</v-card-text>
                        </v-card>
                        </v-container>
                        <v-container>
                        <v-card id="vorteil-drei">
                            <v-card-title>Aktionsausbruch</v-card-title>
                            <v-card-text>Erlaubt es eine Bonusaktion in eine Aktion umzuwandeln. Muss danach eine Rast einlegen um diesen Vorteil 
                                wieder zu erhalten.
                            </v-card-text>
                        </v-card>
                        </v-container>
                    </v-row>
                </v-container>
            </v-container>
        </v-container>
    </v-container>
</template>

<script>
    export default {
        name: 'Stats',
    }
</script>

<style>
.tester {
    border: 1px solid;
}

.container {
    display: flex;
}

.blaues-tile, .gruenes-tile, .graues-tile,
.rotes-tile, .gelbes-tile {
    max-width: 280px;
    margin-right: 0px;
    margin-left: 0px;
}

</style>