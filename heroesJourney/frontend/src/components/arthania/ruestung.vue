<template>
    <v-container id="container" class="fill-height" fluid>
        <v-row class="">
            <v-col id="waffen-spalte">
                <v-divider class="border-opacity-0" :thickness="90"></v-divider>
                <v-container id="mainHand-container">
                    <v-card id="mainHand-card" class="inv-card">
                        <v-container class="justify-center fill-height">
                            <v-avatar>
                                <v-img
                                    src="../../assets/mainHand.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            Main Hand
                        </v-card-title>
                        <v-card-subtitle>
                            Deus vult!
                        </v-card-subtitle>
                        <v-card-text class="text-scroller">
                            Dies ist der Schulterpanzer des Schulterus Maximus! Behandle Ihn mit dem nötigen Respekt wenn er es verlangt, 
                            erhalte +1 AT wenn du dich nicht im Kampf befindest
                        </v-card-text>
                        <v-card-actions>
                            <v-btn>Ausziehne</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-container>
                <v-divider class="border-opacity-0" :thickness="90"></v-divider>
                <v-container id="offHand-container">
                    <v-card id="offHand-card" class="inv-card">
                        <v-container class="justify-center fill-height">
                            <v-avatar>
                                <v-img
                                    src="../../assets/offHand.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            Off Hand
                        </v-card-title>
                        <v-card-subtitle>
                            Deus vult!
                        </v-card-subtitle>
                        <v-card-text class="text-scroller">
                            Dies ist der Schulterpanzer des Schulterus Maximus! Behandle Ihn mit dem nötigen Respekt wenn er es verlangt, 
                            erhalte +1 AT wenn du dich nicht im Kampf befindest
                        </v-card-text>
                        <v-card-actions>
                            <v-btn>Ausziehne</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-container>
            </v-col>
            <v-col id="linke-spalte" class="">
                <v-container id="hals-container">
                    <v-card id="hals-card" class="inv-card">
                        <v-container class="justify-center fill-height">
                            <v-avatar>
                                <v-img
                                    src="../../assets/hals.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            Halserius Maximus
                        </v-card-title>
                        <v-card-subtitle>
                            Deus vult!
                        </v-card-subtitle>
                        <v-card-text class="text-scroller">
                            Dies ist der Choker des Halserius Maximus! Behandle Ihn mit dem nötigen Respekt wenn er es verlangt, 
                            erhalte +1 AT wenn du dich nicht im Kampf befindest
                        </v-card-text>
                        <v-card-actions>
                            <v-btn>Ausziehne</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-container>
                <v-container id="schulter-container">
                    <v-card id="schulter-card" class="inv-card">
                        <v-container class="justify-center fill-height">
                            <v-avatar>
                                <v-img
                                    src="../../assets/schulter.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            Schulterus Maximus
                        </v-card-title>
                        <v-card-subtitle>
                            Deus vult!
                        </v-card-subtitle>
                        <v-card-text class="text-scroller">
                            Dies ist der Schulterpanzer des Schulterus Maximus! Behandle Ihn mit dem nötigen Respekt wenn er es verlangt, 
                            erhalte +1 AT wenn du dich nicht im Kampf befindest
                        </v-card-text>
                        <v-card-actions>
                            <v-btn>Ausziehne</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-container>
                <v-container id="haende-container">
                    <v-card id="haende-card" class="inv-card">
                        <v-container class="justify-center fill-height">
                            <v-avatar>
                                <v-img
                                    src="../../assets/haende.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            Handerus Maximus
                        </v-card-title>
                        <v-card-subtitle>
                            Deus vult!
                        </v-card-subtitle>
                        <v-card-text class="text-scroller">
                            Dies ist der Handschuh des Handerus Maximus! Behandle Ihn mit dem nötigen Respekt wenn er es verlangt, 
                            erhalte +1 AT wenn du dich nicht im Kampf befindest
                        </v-card-text>
                        <v-card-actions>
                            <v-btn>Ausziehne</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-container>
            </v-col>
            <v-col id="mittlere-spalte" class="">
                <v-container id="helm-container">
                    <v-card id="helm-card" class="inv-card">
                        <v-container class="justify-center fill-height">
                            <v-avatar>
                                <v-img
                                    src="../../assets/helm.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            Kopferius Maximus
                        </v-card-title>
                        <v-card-subtitle>
                            LE +20
                        </v-card-subtitle>
                        <v-card-text class="text-scroller">
                                Dies ist der Helm des Kopferius Maximus! Behandle Ihn mit dem nötigen Respekt wenn er es verlangt, 
                                erhalte +1 AT wenn du dich nicht im Kampf befindest dddddddddddddddddddddddddddddddddddddddddd
                        </v-card-text>
                        <v-card-actions>
                            <v-btn>Ausziehne</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-container>
                <v-container id="chest-container">
                    <v-card id="chest-card" class="inv-card">
                        <v-container class="justify-center fill-height">
                            <v-avatar>
                                <v-img
                                    src="../../assets/chest.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            Brusterus Maximus
                        </v-card-title>
                        <v-card-subtitle>
                            Deus vult!
                        </v-card-subtitle>
                        <v-card-text class="text-scroller">
                            Dies ist die Brustrüstung des Brusterus Maximus! Behandle Ihn mit dem nötigen Respekt wenn er es verlangt, 
                            erhalte +1 AT wenn du dich nicht im Kampf befindest 
                        </v-card-text>
                        <v-card-actions>
                            <v-btn>Ausziehne</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-container>
                <v-container id="hose-container">
                    <v-card id="hose-card" class="inv-card">
                        <v-container class="justify-center fill-height">
                            <v-avatar>
                                <v-img
                                    src="../../assets/hose.png"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            Hoserus Maximus
                        </v-card-title>
                        <v-card-subtitle>
                            Deus vult!
                        </v-card-subtitle>
                        <v-card-text class="text-scroller">
                            Dies ist die Hose des Hoserus Maximus! Behandle Sie mit dem nötigen Respekt wenn Sie es verlangt, 
                            erhalte +1 TASCHE wenn du dich nicht im Kampf befindest 
                        </v-card-text>
                        <v-card-actions>
                            <v-btn>Ausziehne</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-container>
            </v-col>
                <v-col id="rechte-spalte" class="">
                    <v-container id="trinketEins-container">
                        <v-card id="trinketEins-card" class="inv-card">
                            <v-container class="justify-center fill-height">
                                <v-avatar>
                                    <v-img
                                        src="../../assets/trinketEins.jpg"
                                    ></v-img>
                                </v-avatar>
                            </v-container>
                            <v-card-title>
                                Trinkerius Maximus
                            </v-card-title>
                            <v-card-subtitle>
                                Deus vult!
                            </v-card-subtitle>
                            <v-card-text class="text-scroller">
                                Dies ist ein Durstlöscher! Behandle Ihn mit dem nötigen Respekt wenn er es verlangt, 
                                erhalte -1 DURST egal wo du dich befindest
                            </v-card-text>
                            <v-card-actions>
                                <v-btn>Ausziehne</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-container>
                    <v-container id="ringEins-container">
                        <v-card id="ringEins-card" class="inv-card">
                            <v-container class="justify-center fill-height">
                                <v-avatar>
                                    <v-img
                                        src="../../assets/ringEins.jpg"
                                    ></v-img>
                                </v-avatar>
                            </v-container>
                            <v-card-title>
                                Trinkerius Maximus
                            </v-card-title>
                            <v-card-subtitle>
                                Deus vult!
                            </v-card-subtitle>
                            <v-card-text class="text-scroller">
                                Dies ist ein Durstlöscher! Behandle Ihn mit dem nötigen Respekt wenn er es verlangt, 
                                erhalte -1 DURST egal wo du dich befindest
                            </v-card-text>
                            <v-card-actions>
                                <v-btn>Ausziehne</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-container>
                </v-col>
                <v-col>
                    <v-container id="trinketZwei-container">
                        <v-card id="trinketZwei-card" class="inv-card">
                            <v-container class="justify-center fill-height">
                                <v-avatar>
                                    <v-img
                                        src="../../assets/trinketZwei.jpg"
                                    ></v-img>
                                </v-avatar>
                            </v-container>
                            <v-card-title>
                                Trinkerius Maximus II
                            </v-card-title>
                            <v-card-subtitle>
                                Deus vult!
                            </v-card-subtitle>
                            <v-card-text class="text-scroller">
                                Dies ist noch ein Durstlöscher! Behandle Ihn mit dem nötigen Respekt wenn er es verlangt, 
                                erhalte -1 DURST egal wo du dich befindest
                            </v-card-text>
                            <v-card-actions>
                                <v-btn>Ausziehne</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-container>
                    <v-container id="ringZwei-container">
                    <v-card id="ringZwei-card" class="inv-card">
                        <v-container class="justify-center fill-height">
                            <v-avatar>
                                <v-img
                                    src="../../assets/ringZwei.jpg"
                                ></v-img>
                            </v-avatar>
                        </v-container>
                        <v-card-title>
                            Trinkerius Maximus II
                        </v-card-title>
                        <v-card-subtitle>
                            Deus vult!
                        </v-card-subtitle>
                        <v-card-text class="text-scroller">
                            Dies ist noch ein Durstlöscher! Behandle Ihn mit dem nötigen Respekt wenn er es verlangt, 
                            erhalte -1 DURST egal wo du dich befindest
                        </v-card-text>
                        <v-card-actions>
                            <v-btn>Ausziehne</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>

</script>

<style scoped>

.text-scroller {
    overflow: scroll;
    max-height: 80px;
    overflow-x: hidden;
}

.inv-card {
    max-width: 300px;
}


/* Testweise für jetzt commented bis positioning gefixt ist
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

#helm-card {
    width: auto;
    height: auto;
    box-shadow: #8F00FF 0 0 10px 3px;
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