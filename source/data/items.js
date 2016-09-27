import Item from './item';

const items = [
  {
    "id": "blink"
  },
  {
    "id": "blades_of_attack"
  },
  {
    "id": "broadsword"
  },
  {
    "id": "chainmail"
  },
  {
    "id": "claymore"
  },
  {
    "id": "helm_of_iron_will"
  },
  {
    "id": "javelin"
  },
  {
    "id": "mithril_hammer"
  },
  {
    "id": "platemail"
  },
  {
    "id": "quarterstaff"
  },
  {
    "id": "quelling_blade"
  },
  {
    "id": "ring_of_protection"
  },
  {
    "id": "stout_shield"
  },
  {
    "id": "gauntlets"
  },
  {
    "id": "slippers"
  },
  {
    "id": "mantle"
  },
  {
    "id": "branches"
  },
  {
    "id": "belt_of_strength"
  },
  {
    "id": "boots_of_elves"
  },
  {
    "id": "robe"
  },
  {
    "id": "circlet"
  },
  {
    "id": "ogre_axe"
  },
  {
    "id": "blade_of_alacrity"
  },
  {
    "id": "staff_of_wizardry"
  },
  {
    "id": "ultimate_orb"
  },
  {
    "id": "gloves"
  },
  {
    "id": "lifesteal"
  },
  {
    "id": "ring_of_regen"
  },
  {
    "id": "sobi_mask"
  },
  {
    "id": "boots"
  },
  {
    "id": "gem"
  },
  {
    "id": "cloak"
  },
  {
    "id": "talisman_of_evasion"
  },
  {
    "id": "cheese"
  },
  {
    "id": "magic_stick"
  },
  {
    "id": "recipe"
  },
  {
    "id": "magic_wand"
  },
  {
    "id": "ghost"
  },
  {
    "id": "clarity"
  },
  {
    "id": "flask"
  },
  {
    "id": "dust"
  },
  {
    "id": "bottle"
  },
  {
    "id": "ward_observer"
  },
  {
    "id": "ward_sentry"
  },
  {
    "id": "tango"
  },
  {
    "id": "courier"
  },
  {
    "id": "tpscroll"
  },
  {
    "id": "travel_boots"
  },
  {
    "id": "phase_boots"
  },
  {
    "id": "demon_edge"
  },
  {
    "id": "eagle"
  },
  {
    "id": "reaver"
  },
  {
    "id": "relic"
  },
  {
    "id": "hyperstone"
  },
  {
    "id": "ring_of_health"
  },
  {
    "id": "void_stone"
  },
  {
    "id": "mystic_staff"
  },
  {
    "id": "energy_booster"
  },
  {
    "id": "point_booster"
  },
  {
    "id": "vitality_booster"
  },
  {
    "id": "power_treads"
  },
  {
    "id": "hand_of_midas"
  },
  {
    "id": "oblivion_staff"
  },
  {
    "id": "pers"
  },
  {
    "id": "poor_mans_shield"
  },
  {
    "id": "bracer"
  },
  {
    "id": "wraith_band"
  },
  {
    "id": "null_talisman"
  },
  {
    "id": "mekansm"
  },
  {
    "id": "vladmir"
  },
  {
    "id": "flying_courier"
  },
  {
    "id": "buckler"
  },
  {
    "id": "ring_of_basilius"
  },
  {
    "id": "pipe"
  },
  {
    "id": "urn_of_shadows"
  },
  {
    "id": "headdress"
  },
  {
    "id": "sheepstick"
  },
  {
    "id": "orchid"
  },
  {
    "id": "cyclone"
  },
  {
    "id": "force_staff"
  },
  {
    "id": "dagon"
  },
  {
    "id": "dagon_2"
  },
  {
    "id": "dagon_3"
  },
  {
    "id": "dagon_4"
  },
  {
    "id": "dagon_5"
  },
  {
    "id": "necronomicon"
  },
  {
    "id": "necronomicon_2"
  },
  {
    "id": "necronomicon_3"
  },
  {
    "id": "ultimate_scepter"
  },
  {
    "id": "refresher"
  },
  {
    "id": "assault"
  },
  {
    "id": "heart"
  },
  {
    "id": "black_king_bar"
  },
  {
    "id": "aegis"
  },
  {
    "id": "shivas_guard"
  },
  {
    "id": "bloodstone"
  },
  {
    "id": "sphere"
  },
  {
    "id": "vanguard"
  },
  {
    "id": "blade_mail"
  },
  {
    "id": "soul_booster"
  },
  {
    "id": "hood_of_defiance"
  },
  {
    "id": "rapier"
  },
  {
    "id": "monkey_king_bar"
  },
  {
    "id": "radiance"
  },
  {
    "id": "butterfly"
  },
  {
    "id": "greater_crit"
  },
  {
    "id": "basher"
  },
  {
    "id": "bfury"
  },
  {
    "id": "manta"
  },
  {
    "id": "lesser_crit"
  },
  {
    "id": "armlet"
  },
  {
    "id": "invis_sword"
  },
  {
    "id": "sange_and_yasha"
  },
  {
    "id": "satanic"
  },
  {
    "id": "mjollnir"
  },
  {
    "id": "skadi"
  },
  {
    "id": "sange"
  },
  {
    "id": "helm_of_the_dominator"
  },
  {
    "id": "maelstrom"
  },
  {
    "id": "desolator"
  },
  {
    "id": "yasha"
  },
  {
    "id": "mask_of_madness"
  },
  {
    "id": "diffusal_blade"
  },
  {
    "id": "diffusal_blade_2"
  },
  {
    "id": "ethereal_blade"
  },
  {
    "id": "soul_ring"
  },
  {
    "id": "arcane_boots"
  },
  {
    "id": "orb_of_venom"
  },
  {
    "id": "ancient_janggo"
  },
  {
    "id": "medallion_of_courage"
  },
  {
    "id": "smoke_of_deceit"
  },
  {
    "id": "veil_of_discord"
  },
  {
    "id": "rod_of_atos"
  },
  {
    "id": "abyssal_blade"
  },
  {
    "id": "heavens_halberd"
  },
  {
    "id": "ring_of_aquila"
  },
  {
    "id": "tranquil_boots"
  },
  {
    "id": "shadow_amulet"
  },
  {
    "id": "enchanted_mango"
  },
  {
    "id": "ward_dispenser"
  },
  {
    "id": "travel_boots_2"
  },
  {
    "id": "lotus_orb"
  },
  {
    "id": "solar_crest"
  },
  {
    "id": "guardian_greaves"
  },
  {
    "id": "octarine_core"
  },
  {
    "id": "moon_shard"
  },
  {
    "id": "silver_edge"
  },
  {
    "id": "glimmer_cape"
  },
  {
    "id": "tango_single"
  },
  {
    "id": "crimson_guard"
  },
  {
    "id": "iron_talon"
  },
  {
    "id": "aether_lens"
  },
  {
    "id": "dragon_lance"
  },
  {
    "id": "faerie_fire"
  },
  {
    "id": "wind_lace"
  },
  {
    "id": "bloodthorn"
  },
  {
    "id": "echo_sabre"
  },
  {
    "id": "tome_of_knowledge"
  },
  {
    "id": "hurricane_pike"
  },
  {
    "id": "blight_stone"
  },
  {
    "id": "infused_raindrop"
  }
];

module.exports = items.map((item) => { return new Item(item); });
