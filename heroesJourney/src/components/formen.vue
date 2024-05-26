<template>
    <v-container fluid>
        <v-data-table 
            :items="formen"
        >
    </v-data-table>
    </v-container>
</template>

<script>
export default {
    name: 'Formen',
    data() {
        return {
            formen: [
                {
                    symbol: "",
                    form: "Phönix",
                    rang: "S",
                    "Bonus bei Meisterung": "Glühende Asche verursacht jetzt 2x KRIT als Schaden",
                    "Boni 1": "WN +3",
                    "Boni 2": "AK +2",
                    "Boni 3": "Feuerangriffe sind um 2 erleichtert",
                    "Informationen und Instinkte/Besonderheiten": "Form des Phönix",
                    "Fortschritt": "25%"
                },
                {
                    symbol: "",
                    form: "Gatomon",
                    rang: "S",
                    "Bonus bei Meisterung": "Verdoppelt die Anzahl der maximalen Stapel von \"Heiliges Licht\"",
                    "Boni 1": "WHN +2",
                    "Boni 2": "HKA +2",
                    "Boni 3": "ATL +2",
                    "Informationen und Instinkte/Besonderheiten": "Form eines Gatomons",
                    "Fortschritt": "10%"
                },
                {
                    symbol: "",
                    form: "Guilmon",
                    rang: "A",
                    "Bonus bei Meisterung": "Motivierende Aura: Verringert den erlittenen Schaden aller Gruppenmitglieder um 5",
                    "Boni 1": "MNK +3",
                    "Boni 2": "SLC +2",
                    "Boni 3": "",
                    "Informationen und Instinkte/Besonderheiten": "Form des Guilmon",
                    "Fortschritt": "1%"
                },
                {
                    symbol: "",
                    form: "Gabumon",
                    rang: "S",
                    "Bonus bei Meisterung": "Verdoppelt den Bonus von: \"Symbol der Verbundenheit\"",
                    "Boni 1": "ESC +2",
                    "Boni 2": "ATL +2",
                    "Boni 3": "",
                    "Informationen und Instinkte/Besonderheiten": "Form eines Gabumons",
                    "Fortschritt": "1%"
                },
                {
                    symbol: "",
                    form: "Agumon",
                    rang: "S",
                    "Bonus bei Meisterung": "Erhöht \"Bollwert des Muts\" um 2",
                    "Boni 1": "LE +50",
                    "Boni 2": "ESC +2",
                    "Boni 3": "WHN +2",
                    "Informationen und Instinkte/Besonderheiten": "Form eines Agumons",
                    "Fortschritt": "1%"
                },
                {
                    symbol: "",
                    form: "Raszageth",
                    rang: "S",
                    "Bonus bei Meisterung": "Blitz, Feuer und Plasmaangriffe haben KRIT um 2 erhöht",
                    "Boni 1": "ES +3",
                    "Boni 2": "WHN +2",
                    "Boni 3": "ARK +2",
                    "Informationen und Instinkte/Besonderheiten": "Form von Raszageth",
                    "Fortschritt": "15%"
                },{
                    symbol: "",
                    form: "Leviathan Kraken",
                    rang: "A",
                    "Bonus bei Meisterung": "Erlaubt es euch, Verbündete in Luftblasen zu hüllen die sich mit euch mitbewegen",
                    "Boni 1": "ESC +2",
                    "Boni 2": "ÜZK +2",
                    "Boni 3": "",
                    "Informationen und Instinkte/Besonderheiten": "Form eines Leviathankrakens",
                    "Fortschritt": "1%"
                }
            ]
        }
    }
}
</script>