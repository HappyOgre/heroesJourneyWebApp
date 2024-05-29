import { ref, computed } from 'vue'

export const baseAt = ref(6);
export const armorAt = ref(0);
export const koennen = ref(1);
export const classBoni = ref(0);
export const abilityBonus = ref(3);
export const level = ref(4);
export let talentPoints = ref(1);

export const calc = computed(() => Math.floor(baseAt.value + armorAt.value));
export const calcKoennen = computed(() => Math.floor(baseAt.value + armorAt.value + koennen.value));
export const calcKlasse = computed(() => Math.floor(baseAt.value + armorAt.value + classBoni.value));
export const calcKlasseKoennen = computed(() => Math.floor(baseAt.value + armorAt.value + classBoni.value + koennen.value));

// Erstellung des Attribut-Arrays mit den jeweiligen Abkürzungen, bei 0 Punkten startend

export const atPoints = [
    {
        name: "staminaPoints",
        points: ref(0)
    },
    {
        name: "agilityPoints",
        points: ref(0)
    },
    {
        name: "wisdomPoints",
        points: ref(0)
    },
    {
        name: "strengthPoints",
        points: ref(0)
    },
    {
        name: "intelligencePoints",
        points: ref(0)
    },
    {
        name: "spiritPoints",
        points: ref(0)
    }
]

/*
export const ats = [
    "staminaPoints", "agilityPoints", "wisdomPoints",
    "strengthPoints", "intelligencePoints", "spiritPoints"
];
export const atPoints = ats.map(point => ({ point, points: ref(0) }));
*/
export function levelUpStamina() {
    return atPoints[0].points.value += 1;
}

atPoints[0].points.value += 0; // stamina
atPoints[1].points.value += 0; // agility
atPoints[2].points.value += 0; // wisdom
atPoints[3].points.value += 0; // strength
atPoints[4].points.value += 0; // intelligence
atPoints[5].points.value += 0; // spirit

export const stamina = computed(() => Math.floor(calc.value + atPoints[0].points.value));
export const agility = computed(() => Math.floor(calc.value + atPoints[1].points.value));
export const wisdom = computed(() => Math.floor(calc.value + atPoints[2].points.value));
export const strength = computed(() => Math.floor(calc.value + atPoints[3].points.value));
export const intelligence = computed(() => Math.floor(calc.value + atPoints[4].points.value));
export const spirit = computed(() => Math.floor(calc.value + atPoints[5].points.value));

/*
export const staminaRettungsrollUncapped = Math.floor(stamina/2);
export const agilityRettungsrollUncapped = Math.floor(agility/2);
export const wisdomRettungsrollUncapped = Math.floor(wisdom/2);
export const strengthRettungsrollUncapped = Math.floor(strength/2);
export const intelligenceRettungsrollUncapped = Math.floor(intelligence/2);
export const spiritRettungsrollUncapped = Math.floor(spirit/2);
*/

export const rettungsrollsUncapped = computed(() => [
    Math.floor(stamina.value / 2),
    Math.floor(agility.value / 2),
    Math.floor(wisdom.value / 2),
    Math.floor(strength.value / 2),
    Math.floor(intelligence.value / 2),
    Math.floor(spirit.value / 2),
]);

export const rettungsrollsCapped = computed(() => rettungsrollsUncapped.value.map(val => Math.min(val, 10)));

export const [
    staminaRettungsroll, wisdomRettungsroll,
    strengthRettungsroll, intelligenceRettungsroll, spiritRettungsroll
] = rettungsrollsCapped.value;

export const agilityRettungsroll = rettungsrollsUncapped.value.length >= 2 ? rettungsrollsUncapped.value[1] : 0;

//          -------------------- TALENTE ----------------------------

// Erstellung des Talent-Arrays mit den jeweiligen Abkürzungen, bei 0 Punkten startend
export const talentNames = [
    "ark", "uns", "wis", "uezg", "mgw", "esc", "mnk", "whn", "akr", "scl",
    "ffk", "taeu", "fwk", "atl", "wnl", "alc", "uelk", "hka", "rlg", "thb",
    "sam", "gwk", "sch", "fln"
];
export const talents = talentNames.map(talent => ({ talent, points: ref(0) }));

export const staminaTalentCalc = computed(() => Math.floor(stamina.value / 2 + armorAt.value));
export const agilityTalentCalc = computed(() => Math.floor(agility.value / 2 + armorAt.value));
export const wisdomTalentCalc = computed(() => Math.floor(wisdom.value / 2 + armorAt.value));
export const strengthTalentCalc = computed(() => Math.floor(strength.value / 2 + armorAt.value));
export const intelligenceTalentCalc = computed(() => Math.floor(intelligence.value / 2 + armorAt.value));
export const spiritTalentCalc = computed(() => Math.floor(spirit.value / 2 + armorAt.value));

talents[0].points.value += 1; //ARK
talents[1].points.value += 0; //UNS
talents[2].points.value += 0; //WIS
talents[3].points.value += 0; //UeZG
talents[4].points.value += 0; //MgW
talents[5].points.value += 4; //ESC
talents[6].points.value += 0; //MNK
talents[7].points.value += 0; //WHN
talents[8].points.value += 0; //AKR
talents[9].points.value += 0; //SCL
talents[10].points.value += 0; //FFK
talents[11].points.value += 0; //TAeU
talents[12].points.value += 0; //FWK
talents[13].points.value += 2; //ATL
talents[14].points.value += 0; //WNL
talents[15].points.value += 0; //ALC
talents[16].points.value += 0; //UeLK
talents[17].points.value += 0; //HKA
talents[18].points.value += 3; //RLG
talents[19].points.value += 0; //THB
talents[20].points.value += 0; //SAM
talents[21].points.value += 0; //GWK
talents[22].points.value += 0; //SCH
talents[23].points.value += 0; //FLN

export const ark = computed(() => Math.floor(intelligenceTalentCalc.value + talents[0].points.value));
export const uns = computed(() => Math.floor(intelligenceTalentCalc.value + talents[1].points.value));
export const wis = computed(() => Math.floor(intelligenceTalentCalc.value + talents[2].points.value));
export const uezg = computed(() => Math.floor(intelligenceTalentCalc.value + talents[3].points.value));
export const mgw = computed(() => Math.floor(intelligenceTalentCalc.value + talents[4].points.value));
export const esc = computed(() => Math.floor(strengthTalentCalc.value + talents[5].points.value));
export const mnk = computed(() => Math.floor(spiritTalentCalc.value + talents[6].points.value));
export const whn = computed(() => Math.floor(spiritTalentCalc.value + talents[7].points.value));
export const akr = computed(() => Math.floor(agilityTalentCalc.value + talents[8].points.value));
export const scl = computed(() => Math.floor(agilityTalentCalc.value + talents[9].points.value));
export const ffk = computed(() => Math.floor(agilityTalentCalc.value + talents[10].points.value));
export const taeu = computed(() => Math.floor(agilityTalentCalc.value + talents[11].points.value));
export const fwk = computed(() => Math.floor(agilityTalentCalc.value + talents[12].points.value));
export const atl = computed(() => Math.floor(strengthTalentCalc.value + talents[13].points.value));
export const wnl = computed(() => Math.floor(spiritTalentCalc.value + talents[14].points.value));
export const alc = computed(() => Math.floor(spiritTalentCalc.value + talents[15].points.value));
export const uelk = computed(() => Math.floor(wisdomTalentCalc.value + talents[16].points.value));
export const hka = computed(() => Math.floor(wisdomTalentCalc.value + talents[17].points.value));
export const rlg = computed(() => Math.floor(wisdomTalentCalc.value + talents[18].points.value));
export const thb = computed(() => Math.floor(wisdomTalentCalc.value + talents[19].points.value));
export const sam = computed(() => Math.floor(wisdomTalentCalc.value + talents[20].points.value));
export const gwk= computed(() => Math.floor(strengthTalentCalc.value + talents[21].points.value));
export const sch = computed(() => Math.floor(spiritTalentCalc.value + talents[22].points.value));
export const fln = computed(() => Math.floor(spiritTalentCalc.value + talents[23].points.value));


export const abilityNames = [
    "at", "gw", "fk", "em", "za", "bs"
];
export const abilities = abilityNames.map(ability => ({ability, points: ref(0)}));

export const strengthAbilityCalc = computed(() => strength.value / 2 + abilityBonus.value + armorAt.value);
export const agilityAbilityCalc = computed(() => agility.value / 2 + abilityBonus.value + armorAt.value);
export const intelligenceAbilityCalc = computed(() => intelligence.value / 2 + abilityBonus.value + armorAt.value);
export const wisdomAbilityCalc = computed(() => wisdom.value / 2 + abilityBonus.value + armorAt.value);
export const spiritAbilityCalc = computed(() => spirit.value / 2 + abilityBonus.value + armorAt.value);

abilities[0].points.value += 0; // AT
abilities[1].points.value += 0; // GW
abilities[2].points.value += 0; // FK
abilities[3].points.value += 0; // EM
abilities[4].points.value += 0; // ZA
abilities[5].points.value += 0; // BS

export const at = computed(() => Math.floor(strengthAbilityCalc.value + abilities[0].points.value));
export const gw = computed(() => Math.floor(wisdomAbilityCalc.value + abilities[1].points.value));
export const fk = computed(() => Math.floor(agilityAbilityCalc.value + abilities[2].points.value));
export const em = computed(() => Math.floor(intelligenceAbilityCalc.value + abilities[3].points.value));
export const za = computed(() => Math.floor(intelligenceAbilityCalc.value + abilities[4].points.value));
export const bs = computed(() => Math.floor(spiritAbilityCalc.value + abilities[5].points.value));

export const haste = computed(() => Math.floor(agility.value + level.value / 6 - 1 + armorAt.value));
export const crit = computed(() => Math.floor(level.value / 8 + armorAt.value + 1));
export const le = computed(() => Math.floor(level.value * 5 + stamina.value * 5 + armorAt.value));

export const defBase = computed(() => Math.max(strength.value, agility.value));
function defensiveCalculated(defBase) {
    let defense = 0;
    if (defBase >= 26) {
        defense = 3;
    } else if (defBase >= 16) {
        defense = 2;
    } else if (defBase >= 6) {
        defense = 1;
    };
    return defense;
};

export const def = computed(() => defensiveCalculated(defBase.value));

export default {
stamina, agility, wisdom, strength, intelligence, spirit, koennen, level,
staminaRettungsroll, agilityRettungsroll, wisdomRettungsroll, strengthRettungsroll,
intelligenceRettungsroll, spiritRettungsroll, ark, uns, wis, uezg, mgw, esc, mnk, whn,
akr, scl, ffk, taeu, fwk, atl, wnl, alc, uelk, hka, rlg, thb, sam, gwk, sch, fln, at,
gw, fk, em, za, bs, le, crit, haste, def, talentPoints };

