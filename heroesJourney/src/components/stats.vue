<template>
    <v-container id="main-container" class="container fill-width" fluid>
        <v-container id="linker-container">
            <v-container id="attribute-und-talente-container">

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
                            <v-card color="var(--orangeTile)">
                                <v-card-title>
                                    Ausdauer
                                </v-card-title>
                                <v-card-text>
                                    13
                                </v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card color="var(--orangeTile)">
                                <v-card-title>
                                    Rettungsroll
                                </v-card-title>
                                <v-card-text>
                                    6
                                </v-card-text>
                            </v-card>
                        </v-card>
                        <v-divider class="border-opacity-0" :thickness="10"></v-divider>
                        <v-card id="staerkeTile" variant="text">
                            <v-card color="var(--redTile)">
                                <v-card-title>
                                    Stärke
                                </v-card-title>
                                <v-card-text>
                                    6
                                </v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card color="var(--redTile)">
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
                            <v-card color="var(--greenTile)">
                                <v-card-title>
                                    Beweglichkeit
                                </v-card-title>
                                <v-card-text>
                                    15
                                </v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card color="var(--greenTile)">
                                <v-card-title>
                                    Rettungsroll
                                </v-card-title>
                                <v-card-text>
                                    7
                                </v-card-text>
                            </v-card>
                        </v-card>
                        <v-divider class="border-opacity-0" :thickness="10"></v-divider>
                        <v-card id="intelligenzTile" variant="text">
                            <v-card color="var(--blueTile)">
                                <v-card-title>
                                    Intelligenz
                                </v-card-title>
                                <v-card-text>
                                    11
                                </v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card color="var(--blueTile)">
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
                            <v-card color="var(--greyTile)">
                                <v-card-title>
                                    Weisheit
                                </v-card-title>
                                <v-card-text>
                                    7
                                </v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card color="var(--greyTile)">
                                <v-card-title>
                                    Rettungsroll
                                </v-card-title>
                                <v-card-text>
                                7
                                </v-card-text>
                            </v-card>
                        </v-card>
                        <v-divider class="border-opacity-0" :thickness="10"></v-divider>
                        <v-card id="geistTile" variant="text">
                            <v-card color="var(--yellowTile)">
                                <v-card-title>
                                    Geist
                                </v-card-title>
                                <v-card-text>
                                    10
                                </v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card color="var(--yellowTile)">
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
            <v-container id="talente-container">
                <v-row justify="center" no-gutters>
                    <v-card id="talenteTile">
                        <v-card-title>Talente</v-card-title>
                    </v-card>
                </v-row>
                <v-row class="">
                    <v-col class="" id="linke-spalte-talente">
                        <v-card class="blaues-tile" color="var(--blueTile)">
                            <v-card-title>Arkanum</v-card-title>
                            <v-card-subtitle>ARK</v-card-subtitle>
                            <v-card-text>8</v-card-text>
                        </v-card>
                        <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                        <v-card class="blaues-tile" color="var(--blueTile)">
                            <v-card-title>Untersuchung</v-card-title>
                            <v-card-subtitle>UNS</v-card-subtitle>
                            <v-card-text>5</v-card-text>
                        </v-card>
                        <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                        <v-card class="blaues-tile" color="var(--blueTile)">
                            <v-card-title>Wissen</v-card-title>
                            <v-card-subtitle>WIS</v-card-subtitle>
                            <v-card-text>7</v-card-text>
                        </v-card>
                        <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                        <v-card class="blaues-tile" color="var(--blueTile)">
                            <v-card-title>Überzeugung</v-card-title>
                            <v-card-subtitle>ÜZG</v-card-subtitle>
                            <v-card-text>5</v-card-text>
                        </v-card>
                        <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                        <v-card class="blaues-tile" color="var(--blueTile)">
                            <v-card-title>Magisches Werken</v-card-title>
                            <v-card-subtitle>MgW</v-card-subtitle>
                            <v-card-text>5</v-card-text> 
                        </v-card>
                        <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                        <v-card class="rotes-tile" color="var(--redTile)">
                            <v-card-title>Einschüchtern</v-card-title>
                            <v-card-subtitle>ESC</v-card-subtitle>
                            <v-card-text>3</v-card-text> 
                        </v-card>
                        <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                        <v-card class="gelbes-tile" color="var(--yellowTile)">
                            <v-card-title>Menschenkenntnis</v-card-title>
                            <v-card-subtitle>MNK</v-card-subtitle>
                            <v-card-text>6</v-card-text> 
                        </v-card>
                        <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                        <v-card class="gelbes-tile" color="var(--yellowTile)">
                            <v-card-title>Wahrnehmung</v-card-title>
                            <v-card-subtitle>WHN</v-card-subtitle>
                            <v-card-text>11</v-card-text> 
                        </v-card>
                    </v-col>
                    <v-col class="" id="mittlere-spalte-talente">
                            <v-card class="gruenes-tile" color="var(--greenTile)">
                                <v-card-title>Akrobatik</v-card-title>
                                <v-card-subtitle>AKR</v-card-subtitle>
                                <v-card-text>11</v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="gruenes-tile" color="var(--greenTile)">
                                <v-card-title>Schleichen</v-card-title>
                                <v-card-subtitle>SCL</v-card-subtitle>
                                <v-card-text>9</v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="gruenes-tile" color="var(--greenTile)">
                                <v-card-title>Fingerfertigkeit</v-card-title>
                                <v-card-subtitle>FFK</v-card-subtitle>
                                <v-card-text>7</v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="gruenes-tile" color="var(--greenTile)">
                                <v-card-title>Täuschung</v-card-title>
                                <v-card-subtitle>TÄU</v-card-subtitle>
                                <v-card-text>7</v-card-text>
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="gruenes-tile" color="var(--greenTile)">
                                <v-card-title>Feinwerken</v-card-title>
                                <v-card-subtitle>FWK</v-card-subtitle>
                                <v-card-text>7</v-card-text> 
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="rotes-tile" color="var(--redTile)">
                                <v-card-title>Athletik</v-card-title>
                                <v-card-subtitle>ATL</v-card-subtitle>
                                <v-card-text>7</v-card-text> 
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="gelbes-tile" color="var(--yellowTile)">
                                <v-card-title>Wildnisleben</v-card-title>
                            <v-card-subtitle>WNL</v-card-subtitle>
                                <v-card-text>5</v-card-text> 
                            </v-card>
                            <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                            <v-card class="gelbes-tile" color="var(--yellowTile)">
                                <v-card-title>Alchemie</v-card-title>
                            <v-card-subtitle>ALC</v-card-subtitle>
                                <v-card-text>5</v-card-text> 
                            </v-card>
                        
                    </v-col>
                    <v-col class="" id="rechte-spalte-talente">
                        <v-card class="graues-tile" color="var(--greyTile)">
                            <v-card-title>Überlebenskunst</v-card-title>
                            <v-card-subtitle>ÜLK</v-card-subtitle>
                            <v-card-text>8</v-card-text>
                        </v-card>
                        <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                        <v-card class="graues-tile" color="var(--greyTile)">
                            <v-card-title>Heilkunde/Anatomie</v-card-title>
                            <v-card-subtitle>KHA</v-card-subtitle>
                            <v-card-text>9</v-card-text>
                        </v-card>
                        <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                        <v-card class="graues-tile" color="var(--greyTile)">
                            <v-card-title>Religion</v-card-title>
                            <v-card-subtitle>RLG</v-card-subtitle>
                            <v-card-text>7</v-card-text>
                        </v-card>
                        <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                        <v-card class="graues-tile" color="var(--greyTile)">
                            <v-card-title>Tier Handhabung</v-card-title>
                            <v-card-subtitle>THB</v-card-subtitle>
                            <v-card-text>8</v-card-text>
                        </v-card>
                        <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                        <v-card class="graues-tile" color="var(--greyTile)">
                            <v-card-title>Sammeln</v-card-title>
                            <v-card-subtitle>SAM</v-card-subtitle>
                            <v-card-text>7</v-card-text> 
                        </v-card>
                        <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                        <v-card class="rotes-tile" color="var(--redTile)">
                            <v-card-title>Grobwerken</v-card-title>
                            <v-card-subtitle>GWK</v-card-subtitle>
                            <v-card-text>3</v-card-text> 
                        </v-card>
                        <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                        <v-card class="gelbes-tile" color="var(--yellowTile)">
                            <v-card-title>Schauspiel</v-card-title>
                            <v-card-subtitle>SCH</v-card-subtitle>
                            <v-card-text>7</v-card-text> 
                        </v-card>
                        <v-divider :thickness="10" class="border-opacity-0"></v-divider>
                        <v-card class="gelbes-tile" color="var(--yellowTile)">
                            <v-card-title>Feilschen</v-card-title>
                            <v-card-subtitle>FLN</v-card-subtitle>
                            <v-card-text>5</v-card-text> 
                        </v-card>
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
                            <v-card id="leTile" color="var(--orangeTile)">
                                <v-card-title>LE</v-card-title>
                                <v-card-text>105</v-card-text>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card id="defTile" color="var(--redTile)">
                                <v-card-title>DEF</v-card-title>
                                <v-card-text>1</v-card-text>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card id="koennenTile" color="#5a7b9c">
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
                                        <v-card id="atTile" color="var(--redTile)">
                                            <v-card-title>
                                                AT
                                            </v-card-title>
                                            <v-card-text>
                                                6
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                    <v-col>
                                        <v-card id="gwTile" color="var(--greyTile)">
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
                                        <v-card id="fkTile" color="var(--greenTile)">
                                            <v-card-title>
                                                FK
                                            </v-card-title>
                                            <v-card-text>
                                                16
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                    <v-col>
                                        <v-card id="emTile" color="var(--blueTile)">
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
                                        <v-card id="zaTile" color="var(--blueTile)">
                                            <v-card-title>
                                                ZA
                                            </v-card-title>
                                            <v-card-text>
                                                8
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                    <v-col>
                                        <v-card id="bsTile" color="var(--yellowTile)">
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
                                    <v-card id="kritTile" color="var(--greyTile)">
                                        <v-card-title>
                                            KRIT
                                        </v-card-title>
                                        <v-card-text>
                                            4
                                        </v-card-text>
                                    </v-card>
                                    <v-divider :thickness="135" class="border-opacity-0"></v-divider>
                                    <v-card id="hTile" color="var(--greyTile)">
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

<style >

:root {
    --orangeTile: #914420;
    --redTile: #ab2626;
    --greenTile: #0c7827;
    --blueTile: #0c4278;
    --greyTile: #515752;
    --yellowTile: #a1a326;
}

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

#faehigkeits-kampfwerte-container, #kampfwerte-container, #grundstatistik-container {
    text-align: center;
}

</style>