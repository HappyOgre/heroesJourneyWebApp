import { ref, computed } from 'vue'
import axios from 'axios';
import bonuses from './klasse.vue';
import { helmet, shoulder, chest, hands, legs,
         neck, ring1, ring2, trinket1, trinket2,
         mainHand, offHand
 } from './ausruestung.vue'

export const baseAt = ref(0);
export const armorAt = ref(0);
export const koennen = ref(0);
export const classBoni = ref(0);
export const abilityBonus = ref(0);
export const level = ref(0);
export const talentPoints = ref(0);
export const attributePoints = ref(0);
export const baseArk = ref(0);
export const actions = ref(0);
export const buffs = ref(0);
export const bonusAction = ref(0);
export const moveRange = ref(0);
const className = ref('');
const attBonus = ref([]);
const talentBonus = ref([]);
const items = ref([]);
export const bonusLE = ref(0);
export const bonusDEF = ref(0);
export const bonusKoennen = ref(0);
export const bonusCrit = ref(0);
export const bonusHaste = ref(0);


export const atPoints = [
    {name: "staminaPoints", points: ref(0)},
    {name: "agilityPoints", points: ref(0)},
    {name: "wisdomPoints", points: ref(0)},
    {name: "strengthPoints", points: ref(0)},
    {name: "intelligencePoints", points: ref(0)},
    {name: "spiritPoints", points: ref(0)}
]

async function loadData() {
    try {
        const response = await axios.get('http://localhost:3001/api/stats');
        console.log('API Response:', response.data); // Überprüfen der API-Antwort

        const data = response.data.stats[0];

        actions.value = data.aktionen; // actionen
        buffs.value = data.buffs; // buffs
        bonusAction.value = data.bonusaktion; // bonusactions
        moveRange.value = data.reichweite; // move range
        atPoints[0].points.value = data.stamina; // stamina
        atPoints[1].points.value = data.agility; // agility
        atPoints[2].points.value = data.wisdom; // wisdom
        atPoints[3].points.value = data.strength; // strength
        atPoints[4].points.value = data.intelligence; // intelligence
        atPoints[5].points.value = data.spirit; // spirit
        baseAt.value = data.baseAt; // baseAt
        koennen.value = data.koennen; // koennen
        level.value = data.level; // level 
        talentPoints.value = data.talentPoints; // talent punkte
        attributePoints.value = data.attributePoints; // attribut punkte
        talents[0].points.value = data.ark; // ark
        talents[1].points.value = data.uns; // uns
        talents[2].points.value = data.wis; // wis
        talents[3].points.value = data.uezg; // uezg
        talents[4].points.value = data.mgw; // mgw
        talents[5].points.value = data.esc; // esc
        talents[6].points.value = data.mnk; // mnk 
        talents[7].points.value = data.whn; // whn
        talents[8].points.value = data.akr; // akr 
        talents[9].points.value = data.scl; // scl
        talents[10].points.value = data.ffk; // ffk
        talents[11].points.value = data.taeu; // taue
        talents[12].points.value = data.fwk; // fwk
        talents[13].points.value = data.atl; // atl
        talents[14].points.value = data.wnl; // wnl
        talents[15].points.value = data.alc; // alc
        talents[16].points.value = data.uelk; // uelk
        talents[17].points.value = data.hka; // hka
        talents[18].points.value = data.rlg; // rlg
        talents[19].points.value = data.thb; // thb
        talents[20].points.value = data.sam; // sam
        talents[21].points.value = data.gwk; // gwk
        talents[22].points.value = data.sch; // sch
        talents[23].points.value = data.fln; // fln

        const charResponse = await axios.get('http://localhost:3001/api/character/arthania');
        console.log('API Response:', charResponse.data);

        const charData = charResponse.data.character[0];

        attBonus.value = charData.attBonus.split('\r\n');
        talentBonus.value = charData.talentBonus.split('\r\n');

        const itemResponse = await axios.get('http://localhost:3001/api/items');
        items.value = itemResponse.data.items;

        processItemBonuses();

    } catch (err) {
        console.error('Fehler beim Laden der Stats:', err.message);
    }
}

loadData();

function processItemBonuses() {
    items.value.forEach(item => {
        applyItemBonus(item.bonus1, item.value1);
        applyItemBonus(item.bonus2, item.value2);
        applyItemHasteAndCrit(item);
    });
}

function applyItemBonus(bonus, value) {
    switch (bonus) {
        case 'AUS':
            atPoints[0].points.value += value;
            break;
        case 'BW':
            atPoints[1].points.value += value;
            break;
        case 'WE':
            atPoints[2].points.value += value;
            break;
        case 'ST':
            atPoints[3].points.value += value;
            break;
        case 'IN':
            atPoints[4].points.value += value;
            break;
        case 'GEI':
            atPoints[5].points.value += value;
            break;
        case 'ARK':
            talents[0].points.value += value;
            break;
        case 'UNS':
            talents[1].points.value += value;
            break;
        case 'WIS':
            talents[2].points.value += value;
            break;
        case 'UEZG':
            talents[3].points.value += value;
            break;
        case 'MGW':
            talents[4].points.value += value;
            break;
        case 'ESC':
            talents[5].points.value += value;
            break;
        case 'MNK':
            talents[6].points.value += value;
            break;
        case 'WHN':
            talents[7].points.value += value;
            break;
        case 'AKR':
            talents[8].points.value += value;
            break;
        case 'SCL':
            talents[9].points.value += value;
            break;
        case 'FFK':
            talents[10].points.value += value;
            break;
        case 'TAUE':
            talents[11].points.value += value;
            break;
        case 'FWK':
            talents[12].points.value += value;
            break;
        case 'ATL':
            talents[13].points.value += value;
            break;
        case 'WNL':
            talents[14].points.value += value;
            break;
        case 'ALC':
            talents[15].points.value += value;
            break;
        case 'UELK':
            talents[16].points.value += value;
            break;
        case 'HKA':
            talents[17].points.value += value;
            break;
        case 'RLG':
            talents[18].points.value += value;
            break;
        case 'THB':
            talents[19].points.value += value;
            break;
        case 'SAM':
            talents[20].points.value += value;
            break;
        case 'GWK':
            talents[21].points.value += value;
            break;
        case 'SCH':
            talents[22].points.value += value;
            break;
        case 'FLN':
            talents[23].points.value += value;
            break;
        case 'LE':
            bonusLE.value += value;
            break;
        case 'DEF':
            bonusDEF.value += value;
            break;
        case 'Koennen':
            bonusKoennen.value += value;
            break;
        case 'AT':
            abilities[0].points.value += value;
            break;
        case 'GW':
            abilities[1].points.value += value;
            break;
        case 'FK':
            abilities[2].points.value += value;
            break;
        case 'EM':
            abilities[3].points.value += value;
            break;
        case 'ZA':
            abilities[4].points.value += value;
            break;
        case 'BS':
            abilities[5].points.value += value;
            break;

    }
}

function applyItemHasteAndCrit(item) {
    if (item.haste && item.haste !== 0 && item.haste !== "") {
        bonusHaste.value += item.haste;
    }
    if (item.crit && item.crit !== 0 && item.crit !== "") {
        bonusCrit.value += item.crit
    }
}

export const calc = computed(() => Math.floor(baseAt.value + armorAt.value));
export const calcKoennen = computed(() => Math.floor(baseAt.value + armorAt.value + koennen.value));
export const calcKlasse = computed(() => Math.floor(baseAt.value + armorAt.value + classBoni.value));
export const calcKlasseKoennen = computed(() => Math.floor(baseAt.value + armorAt.value + classBoni.value + koennen.value));


const attributeMap = {
    stamina: 0,
    agility: 1,
    wisdom: 2,
    strength: 3,
    intelligence: 4,
    spirit: 5
};
const levelUpAttribute = async (attribute: string) => {
    const attributeIndex = attributeMap[attribute];
    atPoints[attributeIndex].points.value += 1;
    attributePoints.value -= 1;

    const requestBody: { [key: string]: number } = {
        newAttributePoints: attributePoints.value
    };

    requestBody[`new${attribute.charAt(0).toUpperCase() + attribute.slice(1)}`] = atPoints[attributeIndex].points.value;

    try {
        await axios.post(`http://localhost:3001/api/update${attribute.charAt(0).toUpperCase() + attribute.slice(1)}`, requestBody);
        console.log(`${attribute} und AP aktualisiert: `, atPoints[attributeIndex].points.value);
    } catch (error) {
        console.error(`Aktualisieren von ${attribute} fehlgeschlagen: `, error);
    }
};

export async function levelUpStamina() {
    await levelUpAttribute('stamina');
}
export async function levelUpAgility() {
    await levelUpAttribute('agility');
}
export async function levelUpWisdom() {
    await levelUpAttribute('wisdom');
}
export async function levelUpStrength() {
    await levelUpAttribute('strength');
}
export async function levelUpIntelligence() {
    await levelUpAttribute('intelligence');
}
export async function levelUpSpirit() {
    await levelUpAttribute('spirit');
}

export const stamina = computed(() => Math.floor(calc.value + atPoints[0].points.value));
export const agility = computed(() => Math.floor(calc.value + atPoints[1].points.value));
export const wisdom = computed(() => Math.floor(calc.value + atPoints[2].points.value));
export const strength = computed(() => Math.floor(calc.value + atPoints[3].points.value));
export const intelligence = computed(() => Math.floor(calc.value + atPoints[4].points.value));
export const spirit = computed(() => Math.floor(calc.value + atPoints[5].points.value));

export const rettungsrollsUncapped = computed(() => [
    Math.floor(stamina.value / 2),
    Math.floor(agility.value / 2),
    Math.floor(wisdom.value / 2),
    Math.floor(strength.value / 2),
    Math.floor(intelligence.value / 2),
    Math.floor(spirit.value / 2),
]);

export const rettungsrollsCapped = computed(() => rettungsrollsUncapped.value.map(val => Math.min(val, 10)));

export const staminaRettungsroll = computed(() => rettungsrollsCapped.value[0]);
export const agilityRettungsroll = computed(() => rettungsrollsCapped.value[1]);
export const wisdomRettungsroll = computed(() => rettungsrollsCapped.value[2]);
export const strengthRettungsroll = computed(() => rettungsrollsCapped.value[3]);
export const intelligenceRettungsroll = computed(() => rettungsrollsCapped.value[4]);
export const spiritRettungsroll = computed(() => rettungsrollsCapped.value[5]);

//          -------------------- TALENTE ----------------------------

// Erstellung des Talent-Arrays mit den jeweiligen Abkürzungen, bei ref(0) Punkten startend
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

const talentMap = talentNames.reduce((map, talent, index) => {
    map[talent] = index;
    return map;
}, {});
const levelUpTalent = async (talent: string) => {

    const talentIndex = talentMap[talent];
    talents[talentIndex].points.value += 1;
    talentPoints.value -= 1;

    const requestBody: { [key: string]: number} = {
        newTalentPoints: talentPoints.value
    };

    requestBody[`new${talent.charAt(0).toUpperCase() + talent.slice(1)}`] = talents[talentIndex].points.value;

    try {
        await axios.post(`http://localhost:3001/api/update${talent.charAt(0).toUpperCase() + talent.slice(1)}`, requestBody);
        console.log(`${talent} und TP aktualisiert: `, talentPoints[talentIndex].points.value);
    } catch (error) {
        console.error(`Aktualisieren von ${talent} fehlgeschlagen: `, error);
    }
};


export async function levelUpArk() {
    await levelUpTalent('ark');
}
export async function levelUpUns() {
    await levelUpTalent('uns');
}
export async function levelUpWis() {
    await levelUpTalent('wis');
}
export async function levelUpUezg() {
    await levelUpTalent('uezg');
}
export async function levelUpMgw() {
    await levelUpTalent('mgw');
}
export async function levelUpEsc() {
    await levelUpTalent('esc');
}
export async function levelUpMnk() {
    await levelUpTalent('mnk');
}
export async function levelUpWhn() {
    await levelUpTalent('whn');
}
export async function levelUpAkr() {
    await levelUpTalent('akr');
}
export async function levelUpScl() {
    await levelUpTalent('scl');
}
export async function levelUpFfk() {
    await levelUpTalent('ffk');
}
export async function levelUpTaue() {
    await levelUpTalent('taue');
}
export async function levelUpFwk() {
    await levelUpTalent('fwk');
}
export async function levelUpAtl() {
    await levelUpTalent('atl');
}
export async function levelUpWnl() {
    await levelUpTalent('wnl');
}
export async function levelUpAlc() {
    await levelUpTalent('alc');
}
export async function levelUpUelk() {
    await levelUpTalent('uelk');
}
export async function levelUpHka() {
    await levelUpTalent('hka');
}
export async function levelUpRlg() {
    await levelUpTalent('rlg');
}
export async function levelUpThb() {
    await levelUpTalent('thb');
}
export async function levelUpSam() {
    await levelUpTalent('sam');
}
export async function levelUpGwk() {
    await levelUpTalent('gwk');
}
export async function levelUpSch() {
    await levelUpTalent('sch');
}
export async function levelUpFln() {
    await levelUpTalent('fln');
}

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

export const haste = computed(() => Math.floor(agility.value + level.value / 6 - 1 + armorAt.value + bonusHaste.value));
export const crit = computed(() => Math.floor(level.value / 8 + armorAt.value + 1 + bonusCrit.value));
export const le = computed(() => Math.floor(level.value * 5 + stamina.value * 5 + armorAt.value + bonusLE.value));

export const defBase = computed((): number => Math.max(strength.value, agility.value));
function defensiveCalculated(defBase: number) {
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

