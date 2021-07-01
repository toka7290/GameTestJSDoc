/**
 * @file Minecraft (Bedrock) GameTest Framework Minecraft module JSDoc
 * @author toka7290
 * @since v1.17.20.20
 * @version v1.17.20.20
 * @name Minecraft
 * @memberof MinecraftGameTest
 * @license MIT
 */

class Block {
  constructor() {
    /**
     * @return {Boolean}
     */
    this.canBeWaterlogged = function () {
      return;
    };
    /**
     * @return {BlockType}
     */
    this.getBlockData = function () {
      return;
    };
    /**
     *
     * @param {String} componentName
     * @return {Component}
     */
    this.getComponent = function (componentName) {
      return;
    };
    /**
     * @return {Dimension}
     */
    this.getDimension = function () {
      return;
    };
    /**
     * @return {BlockLocation}
     */
    this.getLocation = function () {
      return;
    };
    /**
     * @return {String[]}
     */
    this.getTags = function () {
      return;
    };
    /**
     * @return {Boolean}
     */
    this.isEmpty = function () {
      return;
    };
    /**
     * @return {Boolean}
     */
    this.isWaterlogged = function () {
      return;
    };
    /**
     * @param {String} tagName
     * @return {Boolean}
     */
    this.hasTag = function (tagName) {
      return;
    };
    /**
     *
     * @param {BlockPermutation} permutation
     */
    this.setPermutation = function (permutation) {
      return;
    };
    /**
     *
     * @param {BlockType} blockType
     */
    this.setType = function (blockType) {
      return;
    };
    /**
     *
     * @param {Boolean} logged
     */
    this.setWaterlogged = function (logged) {
      return;
    };
    /**
     *
     * @returns {Dimension}
     */
    this.getDimension = function () {
      return;
    };
    /**
     * @type {Number}
     */
    this.x = Number();
    /**
     * @type {Number}
     */
    this.y = Number();
    /**
     * @type {Number}
     */
    this.z = Number();
  }
}
/**
 * @constructor
 * @return {BlockLocation}
 */
export class BlockLocation {
  /**
   *
   * @param {Number} x
   * @param {Number} y
   * @param {Number} z
   */
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  /**
   *
   * @param {BlockLocation} other
   * @return {Boolean}
   */
  equals(other) {
    return;
  }
  /**
   *
   * @param {Number} x
   * @param {Number} y
   * @param {Number} z
   * @return {BlockLocation}
   */
  offset(x, y, z) {
    return;
  }
  /**
   * @return {BlockLocation}
   */
  above() {
    return;
  }
}

/**
 * @enum {String}
 */
export const BlockProperties = {
  multiFaceDirectionBits: "multi_face_direction_bits",
  bigDripleafHead: "big_dripleaf_head",
  bigDripleafTilt: "big_dripleaf_tilt",
  growingPlantAge: "growing_plant_age",
  dripstoneThickness: "dripstone_thickness",
  respawnAnchorCharge: "respawn_anchor_charge",
  twistingVinesAge: "twisting_vines_age",
  rotation: "rotation",
  wallConnectionTypeWest: "wall_connection_type_west",
  wallConnectionTypeSouth: "wall_connection_type_south",
  wallConnectionTypeEast: "wall_connection_type_east",
  wallConnectionTypeNorth: "wall_connection_type_north",
  wallPostBit: "wall_post_bit",
  weepingVinesAge: "weeping_vines_age",
  honeyLevel: "honey_level",
  blockLightLevel: "block_light_level",
  pillarAxis: "pillar_axis",
  leverDirection: "lever_direction",
  coralFanDirection: "coral_fan_direction",
  composterFillLevel: "composter_fill_level",
  extinguished: "extinguished",
  structureBlockType: "structure_block_type",
  structureVoidType: "structure_void_type",
  attachment: "attachment",
  coralHangTypeBit: "coral_hang_type_bit",
  strippedBit: "stripped_bit",
  hanging: "hanging",
  cauldronLiquid: "cauldron_liquid",
  coralColor: "coral_color",
  seaGrassType: "sea_grass_type",
  chemistryTableType: "chemistry_table_type",
  doublePlantType: "double_plant_type",
  prismarineBlockType: "prismarine_block_type",
  wallBlockType: "wall_block_type",
  hugeMushroomBits: "huge_mushroom_bits",
  stoneBrickType: "stone_brick_type",
  monsterEggStoneType: "monster_egg_stone_type",
  stoneSlabType4: "stone_slab_type_4",
  stoneSlabType3: "stone_slab_type_3",
  stoneSlabType2: "stone_slab_type_2",
  stoneSlabType: "stone_slab_type",
  flowerType: "flower_type",
  tallGrassType: "tall_grass_type",
  sandStoneType: "sand_stone_type",
  spongeType: "sponge_type",
  newLeafType: "new_leaf_type",
  oldLeafType: "old_leaf_type",
  deprecated: "deprecated",
  chiselType: "chisel_type",
  newLogType: "new_log_type",
  oldLogType: "old_log_type",
  sandType: "sand_type",
  dirtType: "dirt_type",
  stoneType: "stone_type",
  woodType: "wood_type",
  stabilityCheck: "stability_check",
  stability: "stability",
  bambooLeafSize: "bamboo_leaf_size",
  bambooStalkThickness: "bamboo_stalk_thickness",
  color: "color",
  coralDirection: "coral_direction",
  weirdoDirection: "weirdo_direction",
  groundSignDirection: "ground_sign_direction",
  crackedState: "cracked_state",
  turtleEggCount: "turtle_egg_count",
  dragDown: "drag_down",
  torchFacingDirection: "torch_facing_direction",
  saplingType: "sapling_type",
  itemFrameMapBit: "item_frame_map_bit",
  clusterCount: "cluster_count",
  deadBit: "dead_bit",
  colorBit: "color_bit",
  allowUnderwaterBit: "allow_underwater_bit",
  vineDirectionBits: "vine_direction_bits",
  upsideDownBit: "upside_down_bit",
  updateBit: "update_bit",
  triggeredBit: "triggered_bit",
  topSlotBit: "top_slot_bit",
  toggleBit: "toggle_bit",
  suspendedBit: "suspended_bit",
  repeaterDelay: "repeater_delay",
  redstoneSignal: "redstone_signal",
  railDirection: "rail_direction",
  railDataBit: "rail_data_bit",
  poweredBit: "powered_bit",
  persistentBit: "persistent_bit",
  outputLitBit: "output_lit_bit",
  outputSubtractBit: "output_subtract_bit",
  openBit: "open_bit",
  occupiedBit: "occupied_bit",
  kelpAge: "kelp_age",
  noDropBit: "no_drop_bit",
  moisturizedAmount: "moisturized_amount",
  liquidDepth: "liquid_depth",
  inWallBit: "in_wall_bit",
  infiniburnBit: "infiniburn_bit",
  height: "height",
  headPieceBit: "head_piece_bit",
  growth: "growth",
  fillLevel: "fill_level",
  facingDirection: "facing_direction",
  explodeBit: "explode_bit",
  endPortalEyeBit: "end_portal_eye_bit",
  direction: "direction",
  upperBlockBit: "upper_block_bit",
  doorHingeBit: "door_hinge_bit",
  disarmedBit: "disarmed_bit",
  damage: "damage",
  coveredBit: "covered_bit",
  conditionalBit: "conditional_bit",
  buttonPressedBit: "button_pressed_bit",
  brewingStandSlotCBit: "brewing_stand_slot_c_bit",
  brewingStandSlotBBit: "brewing_stand_slot_b_bit",
  brewingStandSlotABit: "brewing_stand_slot_a_bit",
  biteCounter: "bite_counter",
  portalAxis: "portal_axis",
  attachedBit: "attached_bit",
  age: "age",
  ageBit: "age_bit",
};

export class BlockTypes {
  /**
   * @return {BlockType[]}
   */
  getAllBlockTypes = function () {
    return;
  };
  /**
   * @param {String} id
   * @return {BlockType}
   */
  get(id) {
    return;
  }

  // vanilla blocks
  /**
   * @type {BlockType}
   */
  acaciaButton;
  /**
   * @type {BlockType}
   */
  acaciaDoor;
  /**
   * @type {BlockType}
   */
  acaciaFenceGate;
  /**
   * @type {BlockType}
   */
  acaciaPressurePlate;
  /**
   * @type {BlockType}
   */
  acaciaStairs;
  /**
   * @type {BlockType}
   */
  acaciaStandingSign;
  /**
   * @type {BlockType}
   */
  acaciaTrapdoor;
  /**
   * @type {BlockType}
   */
  acaciaWallSign;
  /**
   * @type {BlockType}
   */
  activatorRail;
  /**
   * @type {BlockType}
   */
  air;
  /**
   * @type {BlockType}
   */
  allow;
  /**
   * @type {BlockType}
   */
  amethystBlock;
  /**
   * @type {BlockType}
   */
  amethystCluster;
  /**
   * @type {BlockType}
   */
  ancientDebris;
  /**
   * @type {BlockType}
   */
  andesiteStairs;
  /**
   * @type {BlockType}
   */
  anvil;
  /**
   * @type {BlockType}
   */
  azalea;
  /**
   * @type {BlockType}
   */
  azaleaLeaves;
  /**
   * @type {BlockType}
   */
  azaleaLeavesFlowered;
  /**
   * @type {BlockType}
   */
  bamboo;
  /**
   * @type {BlockType}
   */
  bambooSapling;
  /**
   * @type {BlockType}
   */
  barrel;
  /**
   * @type {BlockType}
   */
  barrier;
  /**
   * @type {BlockType}
   */
  basalt;
  /**
   * @type {BlockType}
   */
  beacon;
  /**
   * @type {BlockType}
   */
  bed;
  /**
   * @type {BlockType}
   */
  bedrock;
  /**
   * @type {BlockType}
   */
  beeNest;
  /**
   * @type {BlockType}
   */
  beehive;
  /**
   * @type {BlockType}
   */
  beetroot;
  /**
   * @type {BlockType}
   */
  bell;
  /**
   * @type {BlockType}
   */
  bigDripleaf;
  /**
   * @type {BlockType}
   */
  birchButton;
  /**
   * @type {BlockType}
   */
  birchDoor;
  /**
   * @type {BlockType}
   */
  birchFenceGate;
  /**
   * @type {BlockType}
   */
  birchPressurePlate;
  /**
   * @type {BlockType}
   */
  birchStairs;
  /**
   * @type {BlockType}
   */
  birchStandingSign;
  /**
   * @type {BlockType}
   */
  birchTrapdoor;
  /**
   * @type {BlockType}
   */
  birchWallSign;
  /**
   * @type {BlockType}
   */
  blackGlazedTerracotta;
  /**
   * @type {BlockType}
   */
  blackstone;
  /**
   * @type {BlockType}
   */
  blackstoneDoubleSlab;
  /**
   * @type {BlockType}
   */
  blackstoneSlab;
  /**
   * @type {BlockType}
   */
  blackstoneStairs;
  /**
   * @type {BlockType}
   */
  blackstoneWall;
  /**
   * @type {BlockType}
   */
  blastFurnace;
  /**
   * @type {BlockType}
   */
  blueGlazedTerracotta;
  /**
   * @type {BlockType}
   */
  blueIce;
  /**
   * @type {BlockType}
   */
  boneBlock;
  /**
   * @type {BlockType}
   */
  bookshelf;
  /**
   * @type {BlockType}
   */
  borderBlock;
  /**
   * @type {BlockType}
   */
  brewingStand;
  /**
   * @type {BlockType}
   */
  brickBlock;
  /**
   * @type {BlockType}
   */
  brickStairs;
  /**
   * @type {BlockType}
   */
  brownGlazedTerracotta;
  /**
   * @type {BlockType}
   */
  brownMushroom;
  /**
   * @type {BlockType}
   */
  brownMushroomBlock;
  /**
   * @type {BlockType}
   */
  bubbleColumn;
  /**
   * @type {BlockType}
   */
  buddingAmethyst;
  /**
   * @type {BlockType}
   */
  cactus;
  /**
   * @type {BlockType}
   */
  cake;
  /**
   * @type {BlockType}
   */
  calcite;
  /**
   * @type {BlockType}
   */
  camera;
  /**
   * @type {BlockType}
   */
  campfire;
  /**
   * @type {BlockType}
   */
  carpet;
  /**
   * @type {BlockType}
   */
  carrots;
  /**
   * @type {BlockType}
   */
  cartographyTable;
  /**
   * @type {BlockType}
   */
  carvedPumpkin;
  /**
   * @type {BlockType}
   */
  cauldron;
  /**
   * @type {BlockType}
   */
  caveVines;
  /**
   * @type {BlockType}
   */
  caveVinesBodyWithBerries;
  /**
   * @type {BlockType}
   */
  caveVinesHeadWithBerries;
  /**
   * @type {BlockType}
   */
  chain;
  /**
   * @type {BlockType}
   */
  chainCommandBlock;
  /**
   * @type {BlockType}
   */
  chemicalHeat;
  /**
   * @type {BlockType}
   */
  chemistryTable;
  /**
   * @type {BlockType}
   */
  chest;
  /**
   * @type {BlockType}
   */
  chiseledDeepslate;
  /**
   * @type {BlockType}
   */
  chiseledNetherBricks;
  /**
   * @type {BlockType}
   */
  chiseledPolishedBlackstone;
  /**
   * @type {BlockType}
   */
  chorusFlower;
  /**
   * @type {BlockType}
   */
  chorusPlant;
  /**
   * @type {BlockType}
   */
  clay;
  /**
   * @type {BlockType}
   */
  coalBlock;
  /**
   * @type {BlockType}
   */
  coalOre;
  /**
   * @type {BlockType}
   */
  cobbledDeepslate;
  /**
   * @type {BlockType}
   */
  cobbledDeepslateDoubleSlab;
  /**
   * @type {BlockType}
   */
  cobbledDeepslateSlab;
  /**
   * @type {BlockType}
   */
  cobbledDeepslateStairs;
  /**
   * @type {BlockType}
   */
  cobbledDeepslateWall;
  /**
   * @type {BlockType}
   */
  cobblestone;
  /**
   * @type {BlockType}
   */
  cobblestoneWall;
  /**
   * @type {BlockType}
   */
  cocoa;
  /**
   * @type {BlockType}
   */
  coloredTorchBp;
  /**
   * @type {BlockType}
   */
  coloredTorchRg;
  /**
   * @type {BlockType}
   */
  commandBlock;
  /**
   * @type {BlockType}
   */
  composter;
  /**
   * @type {BlockType}
   */
  concrete;
  /**
   * @type {BlockType}
   */
  concretepowder;
  /**
   * @type {BlockType}
   */
  conduit;
  /**
   * @type {BlockType}
   */
  copperBlock;
  /**
   * @type {BlockType}
   */
  copperOre;
  /**
   * @type {BlockType}
   */
  coral;
  /**
   * @type {BlockType}
   */
  coralBlock;
  /**
   * @type {BlockType}
   */
  coralFan;
  /**
   * @type {BlockType}
   */
  coralFanDead;
  /**
   * @type {BlockType}
   */
  coralFanHang;
  /**
   * @type {BlockType}
   */
  coralFanHang2;
  /**
   * @type {BlockType}
   */
  coralFanHang3;
  /**
   * @type {BlockType}
   */
  crackedDeepslateBricks;
  /**
   * @type {BlockType}
   */
  crackedDeepslateTiles;
  /**
   * @type {BlockType}
   */
  crackedNetherBricks;
  /**
   * @type {BlockType}
   */
  crackedPolishedBlackstoneBricks;
  /**
   * @type {BlockType}
   */
  craftingTable;
  /**
   * @type {BlockType}
   */
  crimsonButton;
  /**
   * @type {BlockType}
   */
  crimsonDoor;
  /**
   * @type {BlockType}
   */
  crimsonDoubleSlab;
  /**
   * @type {BlockType}
   */
  crimsonFence;
  /**
   * @type {BlockType}
   */
  crimsonFenceGate;
  /**
   * @type {BlockType}
   */
  crimsonFungus;
  /**
   * @type {BlockType}
   */
  crimsonHyphae;
  /**
   * @type {BlockType}
   */
  crimsonNylium;
  /**
   * @type {BlockType}
   */
  crimsonPlanks;
  /**
   * @type {BlockType}
   */
  crimsonPressurePlate;
  /**
   * @type {BlockType}
   */
  crimsonRoots;
  /**
   * @type {BlockType}
   */
  crimsonSlab;
  /**
   * @type {BlockType}
   */
  crimsonStairs;
  /**
   * @type {BlockType}
   */
  crimsonStandingSign;
  /**
   * @type {BlockType}
   */
  crimsonStem;
  /**
   * @type {BlockType}
   */
  crimsonTrapdoor;
  /**
   * @type {BlockType}
   */
  crimsonWallSign;
  /**
   * @type {BlockType}
   */
  cryingObsidian;
  /**
   * @type {BlockType}
   */
  cutCopper;
  /**
   * @type {BlockType}
   */
  cutCopperSlab;
  /**
   * @type {BlockType}
   */
  cutCopperStairs;
  /**
   * @type {BlockType}
   */
  cyanGlazedTerracotta;
  /**
   * @type {BlockType}
   */
  darkOakButton;
  /**
   * @type {BlockType}
   */
  darkOakDoor;
  /**
   * @type {BlockType}
   */
  darkOakFenceGate;
  /**
   * @type {BlockType}
   */
  darkOakPressurePlate;
  /**
   * @type {BlockType}
   */
  darkOakStairs;
  /**
   * @type {BlockType}
   */
  darkOakTrapdoor;
  /**
   * @type {BlockType}
   */
  darkPrismarineStairs;
  /**
   * @type {BlockType}
   */
  darkoakStandingSign;
  /**
   * @type {BlockType}
   */
  darkoakWallSign;
  /**
   * @type {BlockType}
   */
  daylightDetector;
  /**
   * @type {BlockType}
   */
  daylightDetectorInverted;
  /**
   * @type {BlockType}
   */
  deadbush;
  /**
   * @type {BlockType}
   */
  deepslate;
  /**
   * @type {BlockType}
   */
  deepslateBrickDoubleSlab;
  /**
   * @type {BlockType}
   */
  deepslateBrickSlab;
  /**
   * @type {BlockType}
   */
  deepslateBrickStairs;
  /**
   * @type {BlockType}
   */
  deepslateBrickWall;
  /**
   * @type {BlockType}
   */
  deepslateBricks;
  /**
   * @type {BlockType}
   */
  deepslateCoalOre;
  /**
   * @type {BlockType}
   */
  deepslateCopperOre;
  /**
   * @type {BlockType}
   */
  deepslateDiamondOre;
  /**
   * @type {BlockType}
   */
  deepslateEmeraldOre;
  /**
   * @type {BlockType}
   */
  deepslateGoldOre;
  /**
   * @type {BlockType}
   */
  deepslateIronOre;
  /**
   * @type {BlockType}
   */
  deepslateLapisOre;
  /**
   * @type {BlockType}
   */
  deepslateRedstoneOre;
  /**
   * @type {BlockType}
   */
  deepslateTileDoubleSlab;
  /**
   * @type {BlockType}
   */
  deepslateTileSlab;
  /**
   * @type {BlockType}
   */
  deepslateTileStairs;
  /**
   * @type {BlockType}
   */
  deepslateTileWall;
  /**
   * @type {BlockType}
   */
  deepslateTiles;
  /**
   * @type {BlockType}
   */
  deny;
  /**
   * @type {BlockType}
   */
  detectorRail;
  /**
   * @type {BlockType}
   */
  diamondBlock;
  /**
   * @type {BlockType}
   */
  diamondOre;
  /**
   * @type {BlockType}
   */
  dioriteStairs;
  /**
   * @type {BlockType}
   */
  dirt;
  /**
   * @type {BlockType}
   */
  dirtWithRoots;
  /**
   * @type {BlockType}
   */
  dispenser;
  /**
   * @type {BlockType}
   */
  doubleCutCopperSlab;
  /**
   * @type {BlockType}
   */
  doublePlant;
  /**
   * @type {BlockType}
   */
  doubleStoneSlab;
  /**
   * @type {BlockType}
   */
  doubleStoneSlab2;
  /**
   * @type {BlockType}
   */
  doubleStoneSlab3;
  /**
   * @type {BlockType}
   */
  doubleStoneSlab4;
  /**
   * @type {BlockType}
   */
  doubleWoodenSlab;
  /**
   * @type {BlockType}
   */
  dragonEgg;
  /**
   * @type {BlockType}
   */
  driedKelpBlock;
  /**
   * @type {BlockType}
   */
  dripstoneBlock;
  /**
   * @type {BlockType}
   */
  dropper;
  /**
   * @type {BlockType}
   */
  element0;
  /**
   * @type {BlockType}
   */
  element1;
  /**
   * @type {BlockType}
   */
  element10;
  /**
   * @type {BlockType}
   */
  element100;
  /**
   * @type {BlockType}
   */
  element101;
  /**
   * @type {BlockType}
   */
  element102;
  /**
   * @type {BlockType}
   */
  element103;
  /**
   * @type {BlockType}
   */
  element104;
  /**
   * @type {BlockType}
   */
  element105;
  /**
   * @type {BlockType}
   */
  element106;
  /**
   * @type {BlockType}
   */
  element107;
  /**
   * @type {BlockType}
   */
  element108;
  /**
   * @type {BlockType}
   */
  element109;
  /**
   * @type {BlockType}
   */
  element11;
  /**
   * @type {BlockType}
   */
  element110;
  /**
   * @type {BlockType}
   */
  element111;
  /**
   * @type {BlockType}
   */
  element112;
  /**
   * @type {BlockType}
   */
  element113;
  /**
   * @type {BlockType}
   */
  element114;
  /**
   * @type {BlockType}
   */
  element115;
  /**
   * @type {BlockType}
   */
  element116;
  /**
   * @type {BlockType}
   */
  element117;
  /**
   * @type {BlockType}
   */
  element118;
  /**
   * @type {BlockType}
   */
  element12;
  /**
   * @type {BlockType}
   */
  element13;
  /**
   * @type {BlockType}
   */
  element14;
  /**
   * @type {BlockType}
   */
  element15;
  /**
   * @type {BlockType}
   */
  element16;
  /**
   * @type {BlockType}
   */
  element17;
  /**
   * @type {BlockType}
   */
  element18;
  /**
   * @type {BlockType}
   */
  element19;
  /**
   * @type {BlockType}
   */
  element2;
  /**
   * @type {BlockType}
   */
  element20;
  /**
   * @type {BlockType}
   */
  element21;
  /**
   * @type {BlockType}
   */
  element22;
  /**
   * @type {BlockType}
   */
  element23;
  /**
   * @type {BlockType}
   */
  element24;
  /**
   * @type {BlockType}
   */
  element25;
  /**
   * @type {BlockType}
   */
  element26;
  /**
   * @type {BlockType}
   */
  element27;
  /**
   * @type {BlockType}
   */
  element28;
  /**
   * @type {BlockType}
   */
  element29;
  /**
   * @type {BlockType}
   */
  element3;
  /**
   * @type {BlockType}
   */
  element30;
  /**
   * @type {BlockType}
   */
  element31;
  /**
   * @type {BlockType}
   */
  element32;
  /**
   * @type {BlockType}
   */
  element33;
  /**
   * @type {BlockType}
   */
  element34;
  /**
   * @type {BlockType}
   */
  element35;
  /**
   * @type {BlockType}
   */
  element36;
  /**
   * @type {BlockType}
   */
  element37;
  /**
   * @type {BlockType}
   */
  element38;
  /**
   * @type {BlockType}
   */
  element39;
  /**
   * @type {BlockType}
   */
  element4;
  /**
   * @type {BlockType}
   */
  element40;
  /**
   * @type {BlockType}
   */
  element41;
  /**
   * @type {BlockType}
   */
  element42;
  /**
   * @type {BlockType}
   */
  element43;
  /**
   * @type {BlockType}
   */
  element44;
  /**
   * @type {BlockType}
   */
  element45;
  /**
   * @type {BlockType}
   */
  element46;
  /**
   * @type {BlockType}
   */
  element47;
  /**
   * @type {BlockType}
   */
  element48;
  /**
   * @type {BlockType}
   */
  element49;
  /**
   * @type {BlockType}
   */
  element5;
  /**
   * @type {BlockType}
   */
  element50;
  /**
   * @type {BlockType}
   */
  element51;
  /**
   * @type {BlockType}
   */
  element52;
  /**
   * @type {BlockType}
   */
  element53;
  /**
   * @type {BlockType}
   */
  element54;
  /**
   * @type {BlockType}
   */
  element55;
  /**
   * @type {BlockType}
   */
  element56;
  /**
   * @type {BlockType}
   */
  element57;
  /**
   * @type {BlockType}
   */
  element58;
  /**
   * @type {BlockType}
   */
  element59;
  /**
   * @type {BlockType}
   */
  element6;
  /**
   * @type {BlockType}
   */
  element60;
  /**
   * @type {BlockType}
   */
  element61;
  /**
   * @type {BlockType}
   */
  element62;
  /**
   * @type {BlockType}
   */
  element63;
  /**
   * @type {BlockType}
   */
  element64;
  /**
   * @type {BlockType}
   */
  element65;
  /**
   * @type {BlockType}
   */
  element66;
  /**
   * @type {BlockType}
   */
  element67;
  /**
   * @type {BlockType}
   */
  element68;
  /**
   * @type {BlockType}
   */
  element69;
  /**
   * @type {BlockType}
   */
  element7;
  /**
   * @type {BlockType}
   */
  element70;
  /**
   * @type {BlockType}
   */
  element71;
  /**
   * @type {BlockType}
   */
  element72;
  /**
   * @type {BlockType}
   */
  element73;
  /**
   * @type {BlockType}
   */
  element74;
  /**
   * @type {BlockType}
   */
  element75;
  /**
   * @type {BlockType}
   */
  element76;
  /**
   * @type {BlockType}
   */
  element77;
  /**
   * @type {BlockType}
   */
  element78;
  /**
   * @type {BlockType}
   */
  element79;
  /**
   * @type {BlockType}
   */
  element8;
  /**
   * @type {BlockType}
   */
  element80;
  /**
   * @type {BlockType}
   */
  element81;
  /**
   * @type {BlockType}
   */
  element82;
  /**
   * @type {BlockType}
   */
  element83;
  /**
   * @type {BlockType}
   */
  element84;
  /**
   * @type {BlockType}
   */
  element85;
  /**
   * @type {BlockType}
   */
  element86;
  /**
   * @type {BlockType}
   */
  element87;
  /**
   * @type {BlockType}
   */
  element88;
  /**
   * @type {BlockType}
   */
  element89;
  /**
   * @type {BlockType}
   */
  element9;
  /**
   * @type {BlockType}
   */
  element90;
  /**
   * @type {BlockType}
   */
  element91;
  /**
   * @type {BlockType}
   */
  element92;
  /**
   * @type {BlockType}
   */
  element93;
  /**
   * @type {BlockType}
   */
  element94;
  /**
   * @type {BlockType}
   */
  element95;
  /**
   * @type {BlockType}
   */
  element96;
  /**
   * @type {BlockType}
   */
  element97;
  /**
   * @type {BlockType}
   */
  element98;
  /**
   * @type {BlockType}
   */
  element99;
  /**
   * @type {BlockType}
   */
  emeraldBlock;
  /**
   * @type {BlockType}
   */
  emeraldOre;
  /**
   * @type {BlockType}
   */
  enchantingTable;
  /**
   * @type {BlockType}
   */
  endBrickStairs;
  /**
   * @type {BlockType}
   */
  endBricks;
  /**
   * @type {BlockType}
   */
  endGateway;
  /**
   * @type {BlockType}
   */
  endPortal;
  /**
   * @type {BlockType}
   */
  endPortalFrame;
  /**
   * @type {BlockType}
   */
  endRod;
  /**
   * @type {BlockType}
   */
  endStone;
  /**
   * @type {BlockType}
   */
  enderChest;
  /**
   * @type {BlockType}
   */
  exposedCopper;
  /**
   * @type {BlockType}
   */
  exposedCutCopper;
  /**
   * @type {BlockType}
   */
  exposedCutCopperSlab;
  /**
   * @type {BlockType}
   */
  exposedCutCopperStairs;
  /**
   * @type {BlockType}
   */
  exposedDoubleCutCopperSlab;
  /**
   * @type {BlockType}
   */
  farmland;
  /**
   * @type {BlockType}
   */
  fence;
  /**
   * @type {BlockType}
   */
  fenceGate;
  /**
   * @type {BlockType}
   */
  fire;
  /**
   * @type {BlockType}
   */
  fletchingTable;
  /**
   * @type {BlockType}
   */
  flowerPot;
  /**
   * @type {BlockType}
   */
  floweringAzalea;
  /**
   * @type {BlockType}
   */
  flowingLava;
  /**
   * @type {BlockType}
   */
  flowingWater;
  /**
   * @type {BlockType}
   */
  frame;
  /**
   * @type {BlockType}
   */
  frostedIce;
  /**
   * @type {BlockType}
   */
  furnace;
  /**
   * @type {BlockType}
   */
  gildedBlackstone;
  /**
   * @type {BlockType}
   */
  glass;
  /**
   * @type {BlockType}
   */
  glassPane;
  /**
   * @type {BlockType}
   */
  glowFrame;
  /**
   * @type {BlockType}
   */
  glowLichen;
  /**
   * @type {BlockType}
   */
  glowingobsidian;
  /**
   * @type {BlockType}
   */
  glowstone;
  /**
   * @type {BlockType}
   */
  goldBlock;
  /**
   * @type {BlockType}
   */
  goldOre;
  /**
   * @type {BlockType}
   */
  goldenRail;
  /**
   * @type {BlockType}
   */
  graniteStairs;
  /**
   * @type {BlockType}
   */
  grass;
  /**
   * @type {BlockType}
   */
  grassPath;
  /**
   * @type {BlockType}
   */
  gravel;
  /**
   * @type {BlockType}
   */
  grayGlazedTerracotta;
  /**
   * @type {BlockType}
   */
  greenGlazedTerracotta;
  /**
   * @type {BlockType}
   */
  grindstone;
  /**
   * @type {BlockType}
   */
  hangingRoots;
  /**
   * @type {BlockType}
   */
  hardGlass;
  /**
   * @type {BlockType}
   */
  hardGlassPane;
  /**
   * @type {BlockType}
   */
  hardStainedGlass;
  /**
   * @type {BlockType}
   */
  hardStainedGlassPane;
  /**
   * @type {BlockType}
   */
  hardenedClay;
  /**
   * @type {BlockType}
   */
  hayBlock;
  /**
   * @type {BlockType}
   */
  heavyWeightedPressurePlate;
  /**
   * @type {BlockType}
   */
  honeyBlock;
  /**
   * @type {BlockType}
   */
  honeycombBlock;
  /**
   * @type {BlockType}
   */
  hopper;
  /**
   * @type {BlockType}
   */
  ice;
  /**
   * @type {BlockType}
   */
  infestedDeepslate;
  /**
   * @type {BlockType}
   */
  infoUpdate;
  /**
   * @type {BlockType}
   */
  infoUpdate2;
  /**
   * @type {BlockType}
   */
  invisiblebedrock;
  /**
   * @type {BlockType}
   */
  ironBars;
  /**
   * @type {BlockType}
   */
  ironBlock;
  /**
   * @type {BlockType}
   */
  ironDoor;
  /**
   * @type {BlockType}
   */
  ironOre;
  /**
   * @type {BlockType}
   */
  ironTrapdoor;
  /**
   * @type {BlockType}
   */
  jigsaw;
  /**
   * @type {BlockType}
   */
  jukebox;
  /**
   * @type {BlockType}
   */
  jungleButton;
  /**
   * @type {BlockType}
   */
  jungleDoor;
  /**
   * @type {BlockType}
   */
  jungleFenceGate;
  /**
   * @type {BlockType}
   */
  junglePressurePlate;
  /**
   * @type {BlockType}
   */
  jungleStairs;
  /**
   * @type {BlockType}
   */
  jungleStandingSign;
  /**
   * @type {BlockType}
   */
  jungleTrapdoor;
  /**
   * @type {BlockType}
   */
  jungleWallSign;
  /**
   * @type {BlockType}
   */
  kelp;
  /**
   * @type {BlockType}
   */
  ladder;
  /**
   * @type {BlockType}
   */
  lantern;
  /**
   * @type {BlockType}
   */
  lapisBlock;
  /**
   * @type {BlockType}
   */
  lapisOre;
  /**
   * @type {BlockType}
   */
  largeAmethystBud;
  /**
   * @type {BlockType}
   */
  lava;
  /**
   * @type {BlockType}
   */
  lavaCauldron;
  /**
   * @type {BlockType}
   */
  leaves;
  /**
   * @type {BlockType}
   */
  leaves2;
  /**
   * @type {BlockType}
   */
  lectern;
  /**
   * @type {BlockType}
   */
  lever;
  /**
   * @type {BlockType}
   */
  lightBlock;
  /**
   * @type {BlockType}
   */
  lightBlueGlazedTerracotta;
  /**
   * @type {BlockType}
   */
  lightWeightedPressurePlate;
  /**
   * @type {BlockType}
   */
  lightningRod;
  /**
   * @type {BlockType}
   */
  limeGlazedTerracotta;
  /**
   * @type {BlockType}
   */
  litBlastFurnace;
  /**
   * @type {BlockType}
   */
  litDeepslateRedstoneOre;
  /**
   * @type {BlockType}
   */
  litFurnace;
  /**
   * @type {BlockType}
   */
  litPumpkin;
  /**
   * @type {BlockType}
   */
  litRedstoneLamp;
  /**
   * @type {BlockType}
   */
  litRedstoneOre;
  /**
   * @type {BlockType}
   */
  litSmoker;
  /**
   * @type {BlockType}
   */
  lodestone;
  /**
   * @type {BlockType}
   */
  log;
  /**
   * @type {BlockType}
   */
  log2;
  /**
   * @type {BlockType}
   */
  loom;
  /**
   * @type {BlockType}
   */
  magentaGlazedTerracotta;
  /**
   * @type {BlockType}
   */
  magma;
  /**
   * @type {BlockType}
   */
  mediumAmethystBud;
  /**
   * @type {BlockType}
   */
  melonBlock;
  /**
   * @type {BlockType}
   */
  melonStem;
  /**
   * @type {BlockType}
   */
  mobSpawner;
  /**
   * @type {BlockType}
   */
  monsterEgg;
  /**
   * @type {BlockType}
   */
  mossBlock;
  /**
   * @type {BlockType}
   */
  mossCarpet;
  /**
   * @type {BlockType}
   */
  mossyCobblestone;
  /**
   * @type {BlockType}
   */
  mossyCobblestoneStairs;
  /**
   * @type {BlockType}
   */
  mossyStoneBrickStairs;
  /**
   * @type {BlockType}
   */
  movingblock;
  /**
   * @type {BlockType}
   */
  mycelium;
  /**
   * @type {BlockType}
   */
  netherBrick;
  /**
   * @type {BlockType}
   */
  netherBrickFence;
  /**
   * @type {BlockType}
   */
  netherBrickStairs;
  /**
   * @type {BlockType}
   */
  netherGoldOre;
  /**
   * @type {BlockType}
   */
  netherSprouts;
  /**
   * @type {BlockType}
   */
  netherWart;
  /**
   * @type {BlockType}
   */
  netherWartBlock;
  /**
   * @type {BlockType}
   */
  netheriteBlock;
  /**
   * @type {BlockType}
   */
  netherrack;
  /**
   * @type {BlockType}
   */
  netherreactor;
  /**
   * @type {BlockType}
   */
  normalStoneStairs;
  /**
   * @type {BlockType}
   */
  noteblock;
  /**
   * @type {BlockType}
   */
  oakStairs;
  /**
   * @type {BlockType}
   */
  observer;
  /**
   * @type {BlockType}
   */
  obsidian;
  /**
   * @type {BlockType}
   */
  orangeGlazedTerracotta;
  /**
   * @type {BlockType}
   */
  oxidizedCopper;
  /**
   * @type {BlockType}
   */
  oxidizedCutCopper;
  /**
   * @type {BlockType}
   */
  oxidizedCutCopperSlab;
  /**
   * @type {BlockType}
   */
  oxidizedCutCopperStairs;
  /**
   * @type {BlockType}
   */
  oxidizedDoubleCutCopperSlab;
  /**
   * @type {BlockType}
   */
  packedIce;
  /**
   * @type {BlockType}
   */
  pinkGlazedTerracotta;
  /**
   * @type {BlockType}
   */
  piston;
  /**
   * @type {BlockType}
   */
  pistonarmcollision;
  /**
   * @type {BlockType}
   */
  planks;
  /**
   * @type {BlockType}
   */
  podzol;
  /**
   * @type {BlockType}
   */
  pointedDripstone;
  /**
   * @type {BlockType}
   */
  polishedAndesiteStairs;
  /**
   * @type {BlockType}
   */
  polishedBasalt;
  /**
   * @type {BlockType}
   */
  polishedBlackstone;
  /**
   * @type {BlockType}
   */
  polishedBlackstoneBrickDoubleSlab;
  /**
   * @type {BlockType}
   */
  polishedBlackstoneBrickSlab;
  /**
   * @type {BlockType}
   */
  polishedBlackstoneBrickStairs;
  /**
   * @type {BlockType}
   */
  polishedBlackstoneBrickWall;
  /**
   * @type {BlockType}
   */
  polishedBlackstoneBricks;
  /**
   * @type {BlockType}
   */
  polishedBlackstoneButton;
  /**
   * @type {BlockType}
   */
  polishedBlackstoneDoubleSlab;
  /**
   * @type {BlockType}
   */
  polishedBlackstonePressurePlate;
  /**
   * @type {BlockType}
   */
  polishedBlackstoneSlab;
  /**
   * @type {BlockType}
   */
  polishedBlackstoneStairs;
  /**
   * @type {BlockType}
   */
  polishedBlackstoneWall;
  /**
   * @type {BlockType}
   */
  polishedDeepslate;
  /**
   * @type {BlockType}
   */
  polishedDeepslateDoubleSlab;
  /**
   * @type {BlockType}
   */
  polishedDeepslateSlab;
  /**
   * @type {BlockType}
   */
  polishedDeepslateStairs;
  /**
   * @type {BlockType}
   */
  polishedDeepslateWall;
  /**
   * @type {BlockType}
   */
  polishedDioriteStairs;
  /**
   * @type {BlockType}
   */
  polishedGraniteStairs;
  /**
   * @type {BlockType}
   */
  portal;
  /**
   * @type {BlockType}
   */
  potatoes;
  /**
   * @type {BlockType}
   */
  powderSnow;
  /**
   * @type {BlockType}
   */
  poweredComparator;
  /**
   * @type {BlockType}
   */
  poweredRepeater;
  /**
   * @type {BlockType}
   */
  prismarine;
  /**
   * @type {BlockType}
   */
  prismarineBricksStairs;
  /**
   * @type {BlockType}
   */
  prismarineStairs;
  /**
   * @type {BlockType}
   */
  pumpkin;
  /**
   * @type {BlockType}
   */
  pumpkinStem;
  /**
   * @type {BlockType}
   */
  purpleGlazedTerracotta;
  /**
   * @type {BlockType}
   */
  purpurBlock;
  /**
   * @type {BlockType}
   */
  purpurStairs;
  /**
   * @type {BlockType}
   */
  quartzBlock;
  /**
   * @type {BlockType}
   */
  quartzBricks;
  /**
   * @type {BlockType}
   */
  quartzOre;
  /**
   * @type {BlockType}
   */
  quartzStairs;
  /**
   * @type {BlockType}
   */
  rail;
  /**
   * @type {BlockType}
   */
  rawCopperBlock;
  /**
   * @type {BlockType}
   */
  rawGoldBlock;
  /**
   * @type {BlockType}
   */
  rawIronBlock;
  /**
   * @type {BlockType}
   */
  redFlower;
  /**
   * @type {BlockType}
   */
  redGlazedTerracotta;
  /**
   * @type {BlockType}
   */
  redMushroom;
  /**
   * @type {BlockType}
   */
  redMushroomBlock;
  /**
   * @type {BlockType}
   */
  redNetherBrick;
  /**
   * @type {BlockType}
   */
  redNetherBrickStairs;
  /**
   * @type {BlockType}
   */
  redSandstone;
  /**
   * @type {BlockType}
   */
  redSandstoneStairs;
  /**
   * @type {BlockType}
   */
  redstoneBlock;
  /**
   * @type {BlockType}
   */
  redstoneLamp;
  /**
   * @type {BlockType}
   */
  redstoneOre;
  /**
   * @type {BlockType}
   */
  redstoneTorch;
  /**
   * @type {BlockType}
   */
  redstoneWire;
  /**
   * @type {BlockType}
   */
  reeds;
  /**
   * @type {BlockType}
   */
  repeatingCommandBlock;
  /**
   * @type {BlockType}
   */
  reserved6;
  /**
   * @type {BlockType}
   */
  respawnAnchor;
  /**
   * @type {BlockType}
   */
  sand;
  /**
   * @type {BlockType}
   */
  sandstone;
  /**
   * @type {BlockType}
   */
  sandstoneStairs;
  /**
   * @type {BlockType}
   */
  sapling;
  /**
   * @type {BlockType}
   */
  scaffolding;
  /**
   * @type {BlockType}
   */
  sculkSensor;
  /**
   * @type {BlockType}
   */
  seaPickle;
  /**
   * @type {BlockType}
   */
  seagrass;
  /**
   * @type {BlockType}
   */
  sealantern;
  /**
   * @type {BlockType}
   */
  shroomlight;
  /**
   * @type {BlockType}
   */
  shulkerBox;
  /**
   * @type {BlockType}
   */
  silverGlazedTerracotta;
  /**
   * @type {BlockType}
   */
  skull;
  /**
   * @type {BlockType}
   */
  slime;
  /**
   * @type {BlockType}
   */
  smallAmethystBud;
  /**
   * @type {BlockType}
   */
  smallDripleafBlock;
  /**
   * @type {BlockType}
   */
  smithingTable;
  /**
   * @type {BlockType}
   */
  smoker;
  /**
   * @type {BlockType}
   */
  smoothBasalt;
  /**
   * @type {BlockType}
   */
  smoothQuartzStairs;
  /**
   * @type {BlockType}
   */
  smoothRedSandstoneStairs;
  /**
   * @type {BlockType}
   */
  smoothSandstoneStairs;
  /**
   * @type {BlockType}
   */
  smoothStone;
  /**
   * @type {BlockType}
   */
  snow;
  /**
   * @type {BlockType}
   */
  snowLayer;
  /**
   * @type {BlockType}
   */
  soulCampfire;
  /**
   * @type {BlockType}
   */
  soulFire;
  /**
   * @type {BlockType}
   */
  soulLantern;
  /**
   * @type {BlockType}
   */
  soulSand;
  /**
   * @type {BlockType}
   */
  soulSoil;
  /**
   * @type {BlockType}
   */
  soulTorch;
  /**
   * @type {BlockType}
   */
  sponge;
  /**
   * @type {BlockType}
   */
  sporeBlossom;
  /**
   * @type {BlockType}
   */
  spruceButton;
  /**
   * @type {BlockType}
   */
  spruceDoor;
  /**
   * @type {BlockType}
   */
  spruceFenceGate;
  /**
   * @type {BlockType}
   */
  sprucePressurePlate;
  /**
   * @type {BlockType}
   */
  spruceStairs;
  /**
   * @type {BlockType}
   */
  spruceStandingSign;
  /**
   * @type {BlockType}
   */
  spruceTrapdoor;
  /**
   * @type {BlockType}
   */
  spruceWallSign;
  /**
   * @type {BlockType}
   */
  stainedGlass;
  /**
   * @type {BlockType}
   */
  stainedGlassPane;
  /**
   * @type {BlockType}
   */
  stainedHardenedClay;
  /**
   * @type {BlockType}
   */
  standingBanner;
  /**
   * @type {BlockType}
   */
  standingSign;
  /**
   * @type {BlockType}
   */
  stickyPiston;
  /**
   * @type {BlockType}
   */
  stickypistonarmcollision;
  /**
   * @type {BlockType}
   */
  stone;
  /**
   * @type {BlockType}
   */
  stoneBrickStairs;
  /**
   * @type {BlockType}
   */
  stoneButton;
  /**
   * @type {BlockType}
   */
  stonePressurePlate;
  /**
   * @type {BlockType}
   */
  stoneSlab;
  /**
   * @type {BlockType}
   */
  stoneSlab2;
  /**
   * @type {BlockType}
   */
  stoneSlab3;
  /**
   * @type {BlockType}
   */
  stoneSlab4;
  /**
   * @type {BlockType}
   */
  stoneStairs;
  /**
   * @type {BlockType}
   */
  stonebrick;
  /**
   * @type {BlockType}
   */
  stonecutter;
  /**
   * @type {BlockType}
   */
  stonecutterBlock;
  /**
   * @type {BlockType}
   */
  strippedAcaciaLog;
  /**
   * @type {BlockType}
   */
  strippedBirchLog;
  /**
   * @type {BlockType}
   */
  strippedCrimsonHyphae;
  /**
   * @type {BlockType}
   */
  strippedCrimsonStem;
  /**
   * @type {BlockType}
   */
  strippedDarkOakLog;
  /**
   * @type {BlockType}
   */
  strippedJungleLog;
  /**
   * @type {BlockType}
   */
  strippedOakLog;
  /**
   * @type {BlockType}
   */
  strippedSpruceLog;
  /**
   * @type {BlockType}
   */
  strippedWarpedHyphae;
  /**
   * @type {BlockType}
   */
  strippedWarpedStem;
  /**
   * @type {BlockType}
   */
  structureBlock;
  /**
   * @type {BlockType}
   */
  structureVoid;
  /**
   * @type {BlockType}
   */
  sweetBerryBush;
  /**
   * @type {BlockType}
   */
  tallgrass;
  /**
   * @type {BlockType}
   */
  target;
  /**
   * @type {BlockType}
   */
  tintedGlass;
  /**
   * @type {BlockType}
   */
  tnt;
  /**
   * @type {BlockType}
   */
  torch;
  /**
   * @type {BlockType}
   */
  trapdoor;
  /**
   * @type {BlockType}
   */
  trappedChest;
  /**
   * @type {BlockType}
   */
  tripwire;
  /**
   * @type {BlockType}
   */
  tripwireHook;
  /**
   * @type {BlockType}
   */
  tuff;
  /**
   * @type {BlockType}
   */
  turtleEgg;
  /**
   * @type {BlockType}
   */
  twistingVines;
  /**
   * @type {BlockType}
   */
  underwaterTorch;
  /**
   * @type {BlockType}
   */
  undyedShulkerBox;
  /**
   * @type {BlockType}
   */
  unknown;
  /**
   * @type {BlockType}
   */
  unlitRedstoneTorch;
  /**
   * @type {BlockType}
   */
  unpoweredComparator;
  /**
   * @type {BlockType}
   */
  unpoweredRepeater;
  /**
   * @type {BlockType}
   */
  vine;
  /**
   * @type {BlockType}
   */
  wallBanner;
  /**
   * @type {BlockType}
   */
  wallSign;
  /**
   * @type {BlockType}
   */
  warpedButton;
  /**
   * @type {BlockType}
   */
  warpedDoor;
  /**
   * @type {BlockType}
   */
  warpedDoubleSlab;
  /**
   * @type {BlockType}
   */
  warpedFence;
  /**
   * @type {BlockType}
   */
  warpedFenceGate;
  /**
   * @type {BlockType}
   */
  warpedFungus;
  /**
   * @type {BlockType}
   */
  warpedHyphae;
  /**
   * @type {BlockType}
   */
  warpedNylium;
  /**
   * @type {BlockType}
   */
  warpedPlanks;
  /**
   * @type {BlockType}
   */
  warpedPressurePlate;
  /**
   * @type {BlockType}
   */
  warpedRoots;
  /**
   * @type {BlockType}
   */
  warpedSlab;
  /**
   * @type {BlockType}
   */
  warpedStairs;
  /**
   * @type {BlockType}
   */
  warpedStandingSign;
  /**
   * @type {BlockType}
   */
  warpedStem;
  /**
   * @type {BlockType}
   */
  warpedTrapdoor;
  /**
   * @type {BlockType}
   */
  warpedWallSign;
  /**
   * @type {BlockType}
   */
  warpedWartBlock;
  /**
   * @type {BlockType}
   */
  water;
  /**
   * @type {BlockType}
   */
  waterlily;
  /**
   * @type {BlockType}
   */
  waxedCopper;
  /**
   * @type {BlockType}
   */
  waxedCutCopper;
  /**
   * @type {BlockType}
   */
  waxedCutCopperSlab;
  /**
   * @type {BlockType}
   */
  waxedCutCopperStairs;
  /**
   * @type {BlockType}
   */
  waxedDoubleCutCopperSlab;
  /**
   * @type {BlockType}
   */
  waxedExposedCopper;
  /**
   * @type {BlockType}
   */
  waxedExposedCutCopper;
  /**
   * @type {BlockType}
   */
  waxedExposedCutCopperSlab;
  /**
   * @type {BlockType}
   */
  waxedExposedCutCopperStairs;
  /**
   * @type {BlockType}
   */
  waxedExposedDoubleCutCopperSlab;
  /**
   * @type {BlockType}
   */
  waxedOxidizedCopper;
  /**
   * @type {BlockType}
   */
  waxedOxidizedCutCopper;
  /**
   * @type {BlockType}
   */
  waxedOxidizedCutCopperSlab;
  /**
   * @type {BlockType}
   */
  waxedOxidizedCutCopperStairs;
  /**
   * @type {BlockType}
   */
  waxedOxidizedDoubleCutCopperSlab;
  /**
   * @type {BlockType}
   */
  waxedWeatheredCopper;
  /**
   * @type {BlockType}
   */
  waxedWeatheredCutCopper;
  /**
   * @type {BlockType}
   */
  waxedWeatheredCutCopperSlab;
  /**
   * @type {BlockType}
   */
  waxedWeatheredCutCopperStairs;
  /**
   * @type {BlockType}
   */
  waxedWeatheredDoubleCutCopperSlab;
  /**
   * @type {BlockType}
   */
  weatheredCopper;
  /**
   * @type {BlockType}
   */
  weatheredCutCopper;
  /**
   * @type {BlockType}
   */
  weatheredCutCopperSlab;
  /**
   * @type {BlockType}
   */
  weatheredCutCopperStairs;
  /**
   * @type {BlockType}
   */
  weatheredDoubleCutCopperSlab;
  /**
   * @type {BlockType}
   */
  web;
  /**
   * @type {BlockType}
   */
  weepingVines;
  /**
   * @type {BlockType}
   */
  wheat;
  /**
   * @type {BlockType}
   */
  whiteGlazedTerracotta;
  /**
   * @type {BlockType}
   */
  witherRose;
  /**
   * @type {BlockType}
   */
  wood;
  /**
   * @type {BlockType}
   */
  woodenButton;
  /**
   * @type {BlockType}
   */
  woodenDoor;
  /**
   * @type {BlockType}
   */
  woodenPressurePlate;
  /**
   * @type {BlockType}
   */
  woodenSlab;
  /**
   * @type {BlockType}
   */
  wool;
  /**
   * @type {BlockType}
   */
  yellowFlower;
  /**
   * @type {BlockType}
   */
  yellowGlazedTerracotta;
}

export class BlockType {
  /**
   * @return {String}
   */
  getName = function () {
    return;
  };
  /**
   * @return {Boolean}
   */
  canBeWaterlogged = function () {
    return;
  };
  /**
   * @return {BlockPermutation}
   */
  createDefaultBlockPermutation = function () {
    return;
  };
}

class BlockPermutation {
  /**
   * @return {BlockPermutation}
   */
  clone() {
    return;
  }
  /**
   * @return {BoolBlockProperty[]|IntBlockProperty[]|StringBlockProperty[]}
   */
  getAllProperties() {
    return;
  }
  /**
   * @param {String} block_property
   * @param {any} arg unknown
   * @param {any} arg2 unknown
   * @return {(BoolBlockProperty|IntBlockProperty|StringBlockProperty)}
   */
  getProperty(block_property, arg, arg2) {
    return;
  }
  /**
   * @return {String}
   */
  getTags() {
    return;
  }
  /**
   * @return {BlockType}
   */
  getType() {
    return;
  }
  /**
   * @param {String} tag_name
   * @return {Boolean}
   */
  hasTag(tag_name) {
    return;
  }
}

class BoolBlockProperty {
  /**
   * @type {Boolean}
   */
  value;
  /**
   * @type {Boolean[]}
   */
  validValues;
  /**
   * @type {String}
   */
  name;
}
class IntBlockProperty {
  /**
   * @type {Number}
   */
  value;
  /**
   * @type {Number[]}
   */
  validValues;
  /**
   * @type {String}
   */
  name;
}
class StringBlockProperty {
  /**
   * @type {String}
   */
  value;
  /**
   * @type {String[]}
   */
  validValues;
  /**
   * @type {String}
   */
  name;
}

export class Commands {
  /**
   *
   * @param {String} command
   */
  static run(command) {
    return {
      count: Number(),
      statusCode: Number(),
      statusMessage: String(),
      difficulty: String(),
      playerNames: Array(""),
      blockName: String(),
      fillCount: Number(),
      gameMode: String(),
      player: Array(""),
      name: String(),
      value: Boolean(),
      page: Number(),
      pageCount: Number(),
      targetname: Array(""),
      message: String(),
      recipient: Array(""),
      sound: String(),
      position: { x: 0, y: 0, z: 0 },
      spawnPoint: { x: 0, y: 0, z: 0 },
      victim: Array(""),
      time: Number(),
      itemRemoved: Array(""),
      amplifier: Number(),
      effect: String(),
      itemAmount: Number(),
      itemName: String(),
      playerName: Array(""),
      currentPlayerCount: Number(),
      maxPlayerCount: Number(),
      players: String(),
      destination: { x: 0, y: 0, z: 0 },
      feature: String(),
      itemData: Number(),
      slotId: Number(),
      slotType: String(),
      spawnPos: { x: 0, y: 0, z: 0 },
      victims: Array(""),
      x: Number(),
      z: Number(),
      all_sounds: Boolean(),
      one_sound: Boolean(),
      entityType: String(),
      uID: String(),
      wasSpawned: Boolean(),
      matches: Boolean(),
      compareCount: Number(),
      amount: Number(),
      level: Number(),
    };
  }
}

class Component {
  constructor() {
    // return values
    /**
     * @type {String}
     */
    this.id = undefined;
    /**
     * @type {Number}
     */
    this.maxTurn = undefined;
    /**
     * @type {Number}
     */
    this.value = undefined;
    this.setCurrent = (val) => {
      return;
    };
    this.restToMinValue = () => {
      return;
    };
    this.restToMaxValue = () => {
      return;
    };
    this.restToDefaultValue = () => {
      return;
    };
    /**
     * @type {Number}
     */
    this.current = undefined;
    this.setAirSupply = (val) => {
      return;
    };
    /**
     * @type {Number}
     */
    this.totalSupply = undefined;
    /**
     * @type {Number}
     */
    this.suffocateTime = undefined;
    /**
     * @type {Number}
     */
    this.inhaleTime = undefined;
    /**
     * @type {Boolean}
     */
    this.breathesAir = undefined;
    /**
     * @type {Boolean}
     */
    this.breathesWater = undefined;
    /**
     * @type {Boolean}
     */
    this.breathesLava = undefined;
    /**
     * @type {Boolean}
     */
    this.breathesSolids = undefined;
    /**
     * @type {Boolean}
     */
    this.generatesBubbles = undefined;
    /**
     * @type {String[]}
     */
    this.breatheBlocks = undefined;
    /**
     * @type {String[]}
     */
    this.nonBreatheBlocks = undefined;
    /**
     * @type {Boolean}
     */
    this.isAmphibious = undefined;
    /**
     * @type {Boolean}
     */
    this.avoidSun = undefined;
    /**
     * @type {Boolean}
     */
    this.canPassDoors = undefined;
    /**
     * @type {Boolean}
     */
    this.canOpenDoors = undefined;
    /**
     * @type {Boolean}
     */
    this.canOpenIronDoors = undefined;
    /**
     * @type {Boolean}
     */
    this.canBreakDoors = undefined;
    /**
     * @type {Boolean}
     */
    this.avoidWater = undefined;
    /**
     * @type {Boolean}
     */
    this.avoidDamageBlocks = undefined;
    /**
     * @type {Boolean}
     */
    this.canFloat = undefined;
    /**
     * @type {Boolean}
     */
    this.canSink = undefined;
    /**
     * @type {Boolean}
     */
    this.canPathOverWater = undefined;
    /**
     * @type {Boolean}
     */
    this.canPathOverLava = undefined;
    /**
     * @type {Boolean}
     */
    this.canWalkInLava = undefined;
    /**
     * @type {Boolean}
     */
    this.avoidPortals = undefined;
    /**
     * @type {Boolean}
     */
    this.canWalk = undefined;
    /**
     * @type {Boolean}
     */
    this.canSwim = undefined;
    /**
     * @type {Boolean}
     */
    this.canBreach = undefined;
    /**
     * @type {Boolean}
     */
    this.canJump = undefined;
    /**
     * @type {Boolean}
     */
    this.canPathFromAir = undefined;
    /**
     * 首紐でつなぎます
     * @param {Minecraft.Entity} entity 首紐でつなぐ先のエンティティです。
     */
    this.leash = (entity) => {
      return;
    };
    /**
     * 首紐をとります
     */
    this.unleash = () => {
      return;
    };
    /**
     * @type {Number}
     */
    this.softDistance = undefined;
    /**
     * @type {Number}
     */
    this.maxTurn = undefined;
    this.addRider = (val) => {
      return;
    };
    this.ejectRider = (val) => {
      return;
    };
    this.ejectRiders = () => {
      return;
    };
    /**
     * @type {Number}
     */
    this.seatCount = undefined;
    /**
     * @type {Boolean}
     */
    this.crouchingSkipInteract = undefined;
    this.interactText = "";
    /**
     * @type {String}
     */
    this.familyTypes = undefined;
    /**
     * @type {Number}
     */
    this.controllingSeat = undefined;
    /**
     * @type {Boolean}
     */
    this.pullInEntities = undefined;
    /**
     * @type {Boolean}
     */
    this.riderCanInteract = undefined;
    this.seats = [
      {
        position: new Location(0, 0, 0),
        minRiderCount: 0,
        maxRiderCount: 0,
        lockRiderRotation: 0,
      },
    ];
    /**
     * 手懐けの状態を変更します。
     * @param {Boolean} status 手懐けの状態を設定します。 this.true = 手懐けられた状態 this.false = 手懐けられていない状態
     */
    this.setTamed = (status) => {
      return;
    };
    /**
     * @type {Object}
     */
    this.filters = {};
    /**
     * @type {Boolean}
     */
    this.forceUse = undefined;
    this.items = [
      {
        effects: [],
        healAmount: 0,
        item: "",
      },
    ];

    /**
     * @type {Number}
     */
    this.additionalSlotsPerStrength = undefined;
    /**
     * @type {Boolean}
     */
    this.canBeSiphonedFrom = undefined;
    this.containerType = "";
    /**
     * @type {Number}
     */
    this.inventorySize = undefined;
    /**
     * @type {Boolean}
     */
    this.private = undefined;
    /**
     * @type {Boolean}
     */
    this.restrictToOwner = undefined;
    this.container = {
      /**
       * slotにアイテムを追加
       * @param {Number} slot
       * @param {Minecraft.ItemStack} itemStack
       */
      setItem: (slot, itemStack) => {
        return;
      },
      /**
       * slotのアイテムを取得
       * @param {Number} slot 取得するスロット番号
       * @return {Minecraft.ItemStack}
       */
      getItem: (slot) => {
        return;
      },
      /**
       * 空いているスロットにItemStackを追加
       * @param {Minecraft.ItemStack} itemStack
       */
      addItem: (itemStack) => {
        return;
      },
      /**
       * fromSlotからtoContainerのtoSlotにアイテムを転送
       * @param {Number} fromSlot
       * @param {Number} toSlot
       * @param {Minecraft.Container} toContainer
       */
      transferItem: (fromSlot, toSlot, toContainer) => {
        return;
      },
      /**
       * otherContainerのotherSlotとslotのアイテムを交換します。
       * @param {Number} slot
       * @param {Number} otherSlot
       * @param {Minecraft.Container} otherContainer
       */
      swapItems: (slot, otherSlot, otherContainer) => {
        return;
      },
      size: 0,
      emptySlotsCount: 0,
    };
  }
}

export class Direction {
  static down = 0;
  static up = 1;
  static north = 2;
  static south = 3;
  static west = 4;
  static east = 5;
}

class Dimension {
  /**
   *
   * @param {BlockLocation} location
   * @return {Boolean}
   */
  isEmpty = function (location) {
    return;
  };
  /**
   *
   * @param {BlockLocation} location
   * @return {Entity[]}
   */
  getEntitiesAtBlockLocation = function (location) {
    return;
  };
  /**
   *
   * @param {BlockLocation} position
   * @return {Block}
   */
  getBlock = function (position) {
    return;
  };
  /**
   *
   * @param {String} identifier
   * @param {BlockLocation} blockLocation
   * @return {Entity}
   */
  spawnEntity = function (identifier, blockLocation) {
    return;
  };
  /**
   * @param {Location} location
   * @param {Number} radius
   * @param {ExplosionOptions} explosionOptions
   */
  createExplosion = function (location, radius, explosionOptions) {
    return;
  };
}

class Effect {
  constructor() {
    /**@return {Number} */
    this.amplifier = Number();
    /**@return {Number} */
    this.duration = Number();
    /**@return {String} */
    this.displayName = String();
  }
}

/**
 * @typedef {{getName:function():String}} EffectType
 */

export class Effects {
  /**@type {EffectType} */
  static empty;
  /**@type {EffectType} */
  static speed;
  /**@type {EffectType} */
  static slowness;
  /**@type {EffectType} */
  static haste;
  /**@type {EffectType} */
  static miningFatigue;
  /**@type {EffectType} */
  static strength;
  /**@type {EffectType} */
  static instantHealth;
  /**@type {EffectType} */
  static instantDamage;
  /**@type {EffectType} */
  static jumpBoost;
  /**@type {EffectType} */
  static nausea;
  /**@type {EffectType} */
  static regeneration;
  /**@type {EffectType} */
  static resistance;
  /**@type {EffectType} */
  static fireResistance;
  /**@type {EffectType} */
  static waterBreathing;
  /**@type {EffectType} */
  static invisibility;
  /**@type {EffectType} */
  static blindness;
  /**@type {EffectType} */
  static nightVision;
  /**@type {EffectType} */
  static hunger;
  /**@type {EffectType} */
  static weakness;
  /**@type {EffectType} */
  static poison;
  /**@type {EffectType} */
  static wither;
  /**@type {EffectType} */
  static healthBoost;
  /**@type {EffectType} */
  static absorption;
  /**@type {EffectType} */
  static saturation;
  /**@type {EffectType} */
  static levitation;
  /**@type {EffectType} */
  static fatalPoison;
  /**@type {EffectType} */
  static conduitPower;
  /**@type {EffectType} */
  static slowFalling;
  /**@type {EffectType} */
  static badOmen;
  /**@type {EffectType} */
  static villageHero;
}

export class ExplosionOptions {
  constructor() {
    /**
     * @type {Entity}
     */
    this.source = Entity();
    /**
     * @type {Boolean}
     */
    this.breaksBlocks = Boolean();
    /**
     * @type {Boolean}
     */
    this.causesFire = Boolean();
    /**
     * @type {Boolean}
     */
    this.allowUnderwater = Boolean();
  }
}
export class Entity {
  constructor() {
    /**
     *
     * @param {String} ComponentName
     * @return {Boolean}
     */
    this.hasComponent = (ComponentName) => {
      return;
    };
    /**
     *
     * @param {String} ComponentName
     * @return {Component}
     */
    this.getComponent = (ComponentName) => {
      return;
    };
    /**
     * @return {Component[]}
     */
    this.getComponents = () => {
      return;
    };
    this.kill = () => {
      return;
    };
    /**
     *
     * @param {EffectType} effectType
     * @return {Effect}
     */
    this.getEffect = (effectType) => {
      return;
    };
    /**
     *
     * @param {EffectType} effectType
     * @param {Number} duration
     * @param {Number} amplifier
     */
    this.addEffect = (effectType, duration, amplifier) => {
      return;
    };
    /**
     *
     * @param {String} eventName
     */
    this.triggerEvent = function (eventName) {
      return;
    };
    /**
     * @type {String}
     */
    this.id = String();
    /**
     * @type {Location}
     */
    this.location = new Location();
    /**
     * @type {Location}
     */
    this.velocity = new Location();
    /**
     * @type {String}
     */
    this.nameTag = String();
  }
}

export class Events {
  return;
}

/**
 * @constructor
 * @return {ItemStack}
 */
export class ItemStack {
  /**
   *
   * @param {ItemType} itemName
   * @param {Number} amount
   * @param {Number} data
   */
  constructor(itemName, amount, data) {
    return;
  }
}

/**
 * @constructor
 * @return {Location}
 */
export class Location {
  /**
   *
   * @param {Number} x
   * @param {Number} y
   * @param {Number} z
   */
  constructor(x, y, z) {
    this.x = 0;
    this.x = x;
    this.y = y;
    this.z = z;
  }
  /**
   *
   * @param {Location} location
   * @return {Boolean}
   */
  equals(location) {
    return;
  }
}

class Player {
  /**
   *
   * @param {String} ComponentName
   * @return {Boolean}
   */
  hasComponent = function (ComponentName) {
    return;
  };
  /**
   *
   * @param {String} ComponentName
   * @return {Component}
   */
  getComponent = function (ComponentName) {
    return;
  };
  /**
   * @return {Component[]}
   */
  getComponents = function () {
    return;
  };
  kill = function () {
    return;
  };
  /**
   *
   * @param {EffectType} effectType
   * @return {Effect}
   */
  getEffect = function (effectType) {
    return;
  };
  /**
   *
   * @param {EffectType} effectType
   * @param {Number} duration
   * @param {Number} amplifier
   */
  addEffect = function (effectType, duration, amplifier) {
    return;
  };
  /**
   * @param {String} eventName
   */
  triggerEvent = function (eventName) {
    return;
  };
  /**
   * @type {String}
   */
  id;
  /**
   * @type {Location}
   */
  location;
  /**
   * @type {Location}
   */
  velocity;
  /**
   * @type {String}
   */
  nameTag;
  /**
   * @type {String}
   */
  name;
}

class Tick {}

export class World {
  /**
   *
   * @param {('overworld'|'nether'|'the end')} dimension
   * @return {Dimension}
   */
  static getDimension = (dimension) => {
    return;
  };

  /**
   * @return {Player[]}
   */
  static getPlayers = function () {
    return;
  };
  static events = {
    /**
     * @type {TickEventSignal}
     */
    tick,
    /**
     * @type {ChangeWeatherEventSignal}
     */
    changeWeather,
    /**
     * @type {AddEffectEventSignal}
     */
    addEffect,
    /**
     * @type {BeforeChatEventSignal}
     */
    beforeChat,
    /**
     * @type {ChatEventSignal}
     */
    chat,
    /**
     * @type {EntityEventSignal}
     */
    createEntity,
    /**
     * @type {BeforeExplosionEventSignal}
     */
    beforeExplosion,
    /**
     * @type {ExplosionEventSignal}
     */
    explosion,
    /**
     * @type {ExplodeBlockSignal}
     */
    explodeBlock,
    /**
     * @type {ActivatePistonEventSignal}
     */
    activatePiston,
    /**
     * @type {BeforeActivatePistonEventSignal}
     */
    beforeActivatePiston,
  };
}

class TickEventSignal {
  /**
   *
   * @param {function():void} callback
   * @returns {function}
   */
  subscribe(callback) {
    return;
  }
  /**
   *
   * @param {TickEventSignal} event
   * @returns {function}
   */
  unsubscribe(event) {
    return;
  }
}
class ChangeWeatherEventSignal {
  /**
   *
   * @param {function(WeatherChangedEvent):void} callback
   * @returns {function}
   */
  subscribe(callback) {
    return;
  }
  /**
   *
   * @param {ChangeWeatherEventSignal} event
   * @returns
   */
  unsubscribe(event) {
    return;
  }
}
class WeatherChangedEvent {
  /**
   * @type {String}
   */
  dimension;
  /**
   * @type {Boolean}
   */
  raining;
  /**
   * @type {Boolean}
   */
  lightning;
}

class AddEffectEventSignal {
  /**
   *
   * @param {function(ActorAddEffectEvent):void} callback
   * @returns
   */
  subscribe(callback) {
    return;
  }
  /**
   *
   * @param {AddEffectEventSignal} event
   * @returns {function}
   */
  unsubscribe(event) {
    return;
  }
}
class ActorAddEffectEvent {
  /**
   * @type {Entity}
   */
  entity;
  /**
   * @type {Effect}
   */
  effect;
  /**
   * @type {Number}
   */
  effectStete;
}

class BeforeChatEventSignal {
  /**
   *
   * @param {function(BeforeChatEvent):void} callback
   * @returns {function}
   */
  subscribe(callback) {
    return;
  }
  /**
   *
   * @param {ActorAddEffectEvent} event
   * @returns
   */
  unsubscribe(event) {
    return;
  }
}
class BeforeChatEvent {
  /**
   * @type {String}
   */
  message;
  /**
   * @type {Entity}
   */
  sender;
  /**
   * @type {String[]}
   */
  targets;
  /**
   * @type {Boolean}
   */
  sendToTargets;
  /**
   * @type {Boolean}
   */
  cancel;
}

class ChatEventSignal {
  /**
   *
   * @param {function(ChatEvent):void} callback
   * @returns {function}
   */
  subscribe(callback) {
    return;
  }
  /**
   *
   * @param {ChatEventSignal} event
   * @returns
   */
  unsubscribe(event) {
    return;
  }
}
class ChatEvent {
  message = String();
  sender = new Player();
  targets = new Array(String());
  sendToTargets = Boolean();
  cancel = Boolean();
}

class EntityEventSignal {
  /**
   *
   * @param {function(EntityEvent):void} callback
   * @returns {function}
   */
  subscribe(callback) {
    return;
  }
  /**
   *
   * @param {EntityEventSignal} event
   * @returns
   */
  unsubscribe(event) {
    return;
  }
}
class EntityEvent {
  /**
   * @type {Entity}
   */
  entity;
}

class BeforeExplosionEventSignal {
  /**
   * @param {function(BeforeExplosionEvent):void} callback
   * @returns {function}
   */
  subscribe(callback) {
    return;
  }
  /**
   *
   * @param {BeforeExplosionEventSignal} event
   * @returns
   */
  unsubscribe(event) {
    return;
  }
}
class BeforeExplosionEvent {
  /**
   * @type {BlockLocation[]}
   */
  impactedBlocks;
  /**
   * @type {Dimension}
   *  */
  dimension;
  /**
   * @type {Entity}
   */
  source;
  /**
   * @type {Boolean}
   */
  cancel;
}

class ExplosionEventSignal {
  /**
   *
   * @param {function(ExplosionEvent):void} callback
   * @returns {function}
   */
  subscribe(callback) {
    return;
  }
  /**
   *
   * @param {ExplosionEventSignal} event
   * @returns
   */
  unsubscribe(event) {
    return;
  }
}
class ExplosionEvent {
  /**
   * @type {BlockLocation[]}
   */
  impactedBlocks;
  /**
   * @type {Dimension}
   *  */
  dimension;
  /**
   * @type {Entity}
   */
  source;
}

class ExplodeBlockSignal {
  /**
   * @param {function(ExplodeBlockEvent):void} callback
   * @returns {function}
   */
  subscribe(callback) {
    return;
  }
  /**
   *
   * @param {ExplodeBlockSignal} event
   * @returns
   */
  unsubscribe(event) {
    return;
  }
}
class ExplodeBlockEvent {
  /**
   * @param {Entity}
   */
  source;
  /**
   * @param {Block}
   */
  destroyedBlock;
}

class ActivatePistonEventSignal {
  /**
   *
   * @param {function(ActivatePistonEvent):void} callback
   * @returns {function}
   */
  subscribe(callback) {
    return;
  }
  /**
   *
   * @param {ActivatePistonEventSignal} event
   * @returns
   */
  unsubscribe(event) {
    return;
  }
}
class ActivatePistonEvent {
  piston = new BlockPistonComponent();
  isExpanding = Boolean();
  cancel = Boolean();
}

class BeforeActivatePistonEventSignal {
  /**
   *
   * @param {function(BeforeActivatePistonEvent):void} callback
   * @returns {function}
   */
  subscribe(callback) {
    return;
  }
  /**
   *
   * @param {BeforeActivatePistonEventSignal} event
   * @returns
   */
  unsubscribe(event) {
    return;
  }
}
class BeforeActivatePistonEvent {
  piston = new BlockPistonComponent();
  isExpanding = Boolean();
}

class BlockPistonComponent {
  /**
   * @type {BlockLocation}
   */
  location;
  /**
   * @type {BlockLocation[]}
   */
  attachedBlocks;
  /**
   * @type {Boolean}
   */
  isMoving;
  /**
   * @type {Boolean}
   */
  isExpanded;
  /**
   * @type {Boolean}
   */
  isExpanding;
  /**
   * @type {Boolean}
   */
  isRetracting;
  /**
   * @type {Boolean}
   */
  isRetracted;
}

// "minecraft:color" = class {return};
// "minecraft:health" = class {return};
// "minecraft:leashable" = class {return};
// "minecraft:tamemount" = class {return};

/**
 * @typedef {{getName:function():String}} ItemType
 */

export class Items {
  /**
   * @type {ItemType}
   */
  air;
  /**
   * @type {ItemType}
   */
  apple;
  /**
   * @type {ItemType}
   */
  goldenApple;
  /**
   * @type {ItemType}
   */
  enchantedGoldenApple;
  /**
   * @type {ItemType}
   */
  mushroomStew;
  /**
   * @type {ItemType}
   */
  bread;
  /**
   * @type {ItemType}
   */
  porkchop;
  /**
   * @type {ItemType}
   */
  cookedPorkchop;
  /**
   * @type {ItemType}
   */
  cod;
  /**
   * @type {ItemType}
   */
  salmon;
  /**
   * @type {ItemType}
   */
  tropicalFish;
  /**
   * @type {ItemType}
   */
  pufferfish;
  /**
   * @type {ItemType}
   */
  cookedCod;
  /**
   * @type {ItemType}
   */
  cookedSalmon;
  /**
   * @type {ItemType}
   */
  driedKelp;
  /**
   * @type {ItemType}
   */
  cookie;
  /**
   * @type {ItemType}
   */
  melonSlice;
  /**
   * @type {ItemType}
   */
  beef;
  /**
   * @type {ItemType}
   */
  cookedBeef;
  /**
   * @type {ItemType}
   */
  chicken;
  /**
   * @type {ItemType}
   */
  cookedChicken;
  /**
   * @type {ItemType}
   */
  rottenFlesh;
  /**
   * @type {ItemType}
   */
  spiderEye;
  /**
   * @type {ItemType}
   */
  carrot;
  /**
   * @type {ItemType}
   */
  potato;
  /**
   * @type {ItemType}
   */
  bakedPotato;
  /**
   * @type {ItemType}
   */
  poisonousPotato;
  /**
   * @type {ItemType}
   */
  goldenCarrot;
  /**
   * @type {ItemType}
   */
  pumpkinPie;
  /**
   * @type {ItemType}
   */
  beetroot;
  /**
   * @type {ItemType}
   */
  beetrootSoup;
  /**
   * @type {ItemType}
   */
  sweetBerries;
  /**
   * @type {ItemType}
   */
  rabbit;
  /**
   * @type {ItemType}
   */
  cookedRabbit;
  /**
   * @type {ItemType}
   */
  rabbitStew;
  /**
   * @type {ItemType}
   */
  wheatSeeds;
  /**
   * @type {ItemType}
   */
  pumpkinSeeds;
  /**
   * @type {ItemType}
   */
  melonSeeds;
  /**
   * @type {ItemType}
   */
  netherWart;
  /**
   * @type {ItemType}
   */
  beetrootSeeds;
  /**
   * @type {ItemType}
   */
  ironShovel;
  /**
   * @type {ItemType}
   */
  ironPickaxe;
  /**
   * @type {ItemType}
   */
  ironAxe;
  /**
   * @type {ItemType}
   */
  flintAndSteel;
  /**
   * @type {ItemType}
   */
  bow;
  /**
   * @type {ItemType}
   */
  arrow;
  /**
   * @type {ItemType}
   */
  coal;
  /**
   * @type {ItemType}
   */
  charcoal;
  /**
   * @type {ItemType}
   */
  diamond;
  /**
   * @type {ItemType}
   */
  ironIngot;
  /**
   * @type {ItemType}
   */
  goldIngot;
  /**
   * @type {ItemType}
   */
  ironSword;
  /**
   * @type {ItemType}
   */
  woodenSword;
  /**
   * @type {ItemType}
   */
  woodenShovel;
  /**
   * @type {ItemType}
   */
  woodenPickaxe;
  /**
   * @type {ItemType}
   */
  woodenAxe;
  /**
   * @type {ItemType}
   */
  stoneSword;
  /**
   * @type {ItemType}
   */
  stoneShovel;
  /**
   * @type {ItemType}
   */
  stonePickaxe;
  /**
   * @type {ItemType}
   */
  stoneAxe;
  /**
   * @type {ItemType}
   */
  diamondSword;
  /**
   * @type {ItemType}
   */
  diamondShovel;
  /**
   * @type {ItemType}
   */
  diamondPickaxe;
  /**
   * @type {ItemType}
   */
  diamondAxe;
  /**
   * @type {ItemType}
   */
  stick;
  /**
   * @type {ItemType}
   */
  bowl;
  /**
   * @type {ItemType}
   */
  goldenSword;
  /**
   * @type {ItemType}
   */
  goldenShovel;
  /**
   * @type {ItemType}
   */
  goldenPickaxe;
  /**
   * @type {ItemType}
   */
  goldenAxe;
  /**
   * @type {ItemType}
   */
  string;
  /**
   * @type {ItemType}
   */
  feather;
  /**
   * @type {ItemType}
   */
  gunpowder;
  /**
   * @type {ItemType}
   */
  woodenHoe;
  /**
   * @type {ItemType}
   */
  stoneHoe;
  /**
   * @type {ItemType}
   */
  ironHoe;
  /**
   * @type {ItemType}
   */
  diamondHoe;
  /**
   * @type {ItemType}
   */
  goldenHoe;
  /**
   * @type {ItemType}
   */
  wheat;
  /**
   * @type {ItemType}
   */
  leatherHelmet;
  /**
   * @type {ItemType}
   */
  leatherChestplate;
  /**
   * @type {ItemType}
   */
  leatherLeggings;
  /**
   * @type {ItemType}
   */
  leatherBoots;
  /**
   * @type {ItemType}
   */
  chainmailHelmet;
  /**
   * @type {ItemType}
   */
  chainmailChestplate;
  /**
   * @type {ItemType}
   */
  chainmailLeggings;
  /**
   * @type {ItemType}
   */
  chainmailBoots;
  /**
   * @type {ItemType}
   */
  ironHelmet;
  /**
   * @type {ItemType}
   */
  ironChestplate;
  /**
   * @type {ItemType}
   */
  ironLeggings;
  /**
   * @type {ItemType}
   */
  ironBoots;
  /**
   * @type {ItemType}
   */
  diamondHelmet;
  /**
   * @type {ItemType}
   */
  diamondChestplate;
  /**
   * @type {ItemType}
   */
  diamondLeggings;
  /**
   * @type {ItemType}
   */
  diamondBoots;
  /**
   * @type {ItemType}
   */
  goldenHelmet;
  /**
   * @type {ItemType}
   */
  goldenChestplate;
  /**
   * @type {ItemType}
   */
  goldenLeggings;
  /**
   * @type {ItemType}
   */
  goldenBoots;
  /**
   * @type {ItemType}
   */
  shield;
  /**
   * @type {ItemType}
   */
  flint;
  /**
   * @type {ItemType}
   */
  painting;
  /**
   * @type {ItemType}
   */
  oakSign;
  /**
   * @type {ItemType}
   */
  woodenDoor;
  /**
   * @type {ItemType}
   */
  bucket;
  /**
   * @type {ItemType}
   */
  milkBucket;
  /**
   * @type {ItemType}
   */
  waterBucket;
  /**
   * @type {ItemType}
   */
  lavaBucket;
  /**
   * @type {ItemType}
   */
  codBucket;
  /**
   * @type {ItemType}
   */
  salmonBucket;
  /**
   * @type {ItemType}
   */
  tropicalFishBucket;
  /**
   * @type {ItemType}
   */
  pufferfishBucket;
  /**
   * @type {ItemType}
   */
  powderSnowBucket;
  /**
   * @type {ItemType}
   */
  axolotlBucket;
  /**
   * @type {ItemType}
   */
  minecart;
  /**
   * @type {ItemType}
   */
  saddle;
  /**
   * @type {ItemType}
   */
  ironDoor;
  /**
   * @type {ItemType}
   */
  redstone;
  /**
   * @type {ItemType}
   */
  snowball;
  /**
   * @type {ItemType}
   */
  oakBoat;
  /**
   * @type {ItemType}
   */
  birchBoat;
  /**
   * @type {ItemType}
   */
  jungleBoat;
  /**
   * @type {ItemType}
   */
  spruceBoat;
  /**
   * @type {ItemType}
   */
  acaciaBoat;
  /**
   * @type {ItemType}
   */
  darkOakBoat;
  /**
   * @type {ItemType}
   */
  leather;
  /**
   * @type {ItemType}
   */
  kelp;
  /**
   * @type {ItemType}
   */
  brick;
  /**
   * @type {ItemType}
   */
  clayBall;
  /**
   * @type {ItemType}
   */
  sugarCane;
  /**
   * @type {ItemType}
   */
  paper;
  /**
   * @type {ItemType}
   */
  book;
  /**
   * @type {ItemType}
   */
  slimeBall;
  /**
   * @type {ItemType}
   */
  chestMinecart;
  /**
   * @type {ItemType}
   */
  egg;
  /**
   * @type {ItemType}
   */
  compass;
  /**
   * @type {ItemType}
   */
  fishingRod;
  /**
   * @type {ItemType}
   */
  clock;
  /**
   * @type {ItemType}
   */
  glowstoneDust;
  /**
   * @type {ItemType}
   */
  blackDye;
  /**
   * @type {ItemType}
   */
  redDye;
  /**
   * @type {ItemType}
   */
  greenDye;
  /**
   * @type {ItemType}
   */
  brownDye;
  /**
   * @type {ItemType}
   */
  blueDye;
  /**
   * @type {ItemType}
   */
  purpleDye;
  /**
   * @type {ItemType}
   */
  cyanDye;
  /**
   * @type {ItemType}
   */
  lightGrayDye;
  /**
   * @type {ItemType}
   */
  grayDye;
  /**
   * @type {ItemType}
   */
  pinkDye;
  /**
   * @type {ItemType}
   */
  limeDye;
  /**
   * @type {ItemType}
   */
  yellowDye;
  /**
   * @type {ItemType}
   */
  lightBlueDye;
  /**
   * @type {ItemType}
   */
  magentaDye;
  /**
   * @type {ItemType}
   */
  orangeDye;
  /**
   * @type {ItemType}
   */
  whiteDye;
  /**
   * @type {ItemType}
   */
  boneMeal;
  /**
   * @type {ItemType}
   */
  cocoaBeans;
  /**
   * @type {ItemType}
   */
  inkSac;
  /**
   * @type {ItemType}
   */
  lapisLazuli;
  /**
   * @type {ItemType}
   */
  bone;
  /**
   * @type {ItemType}
   */
  sugar;
  /**
   * @type {ItemType}
   */
  cake;
  /**
   * @type {ItemType}
   */
  bed;
  /**
   * @type {ItemType}
   */
  repeater;
  /**
   * @type {ItemType}
   */
  filledMap;
  /**
   * @type {ItemType}
   */
  shears;
  /**
   * @type {ItemType}
   */
  enderPearl;
  /**
   * @type {ItemType}
   */
  blazeRod;
  /**
   * @type {ItemType}
   */
  ghastTear;
  /**
   * @type {ItemType}
   */
  goldNugget;
  /**
   * @type {ItemType}
   */
  potion;
  /**
   * @type {ItemType}
   */
  glassBottle;
  /**
   * @type {ItemType}
   */
  fermentedSpiderEye;
  /**
   * @type {ItemType}
   */
  blazePowder;
  /**
   * @type {ItemType}
   */
  magmaCream;
  /**
   * @type {ItemType}
   */
  brewingStand;
  /**
   * @type {ItemType}
   */
  cauldron;
  /**
   * @type {ItemType}
   */
  enderEye;
  /**
   * @type {ItemType}
   */
  glisteringMelonSlice;
  /**
   * @type {ItemType}
   */
  chickenSpawnEgg;
  /**
   * @type {ItemType}
   */
  cowSpawnEgg;
  /**
   * @type {ItemType}
   */
  pigSpawnEgg;
  /**
   * @type {ItemType}
   */
  sheepSpawnEgg;
  /**
   * @type {ItemType}
   */
  wolfSpawnEgg;
  /**
   * @type {ItemType}
   */
  mooshroomSpawnEgg;
  /**
   * @type {ItemType}
   */
  creeperSpawnEgg;
  /**
   * @type {ItemType}
   */
  endermanSpawnEgg;
  /**
   * @type {ItemType}
   */
  silverfishSpawnEgg;
  /**
   * @type {ItemType}
   */
  skeletonSpawnEgg;
  /**
   * @type {ItemType}
   */
  slimeSpawnEgg;
  /**
   * @type {ItemType}
   */
  spiderSpawnEgg;
  /**
   * @type {ItemType}
   */
  zombieSpawnEgg;
  /**
   * @type {ItemType}
   */
  zombiePigmanSpawnEgg;
  /**
   * @type {ItemType}
   */
  villagerSpawnEgg;
  /**
   * @type {ItemType}
   */
  squidSpawnEgg;
  /**
   * @type {ItemType}
   */
  ocelotSpawnEgg;
  /**
   * @type {ItemType}
   */
  witchSpawnEgg;
  /**
   * @type {ItemType}
   */
  batSpawnEgg;
  /**
   * @type {ItemType}
   */
  ghastSpawnEgg;
  /**
   * @type {ItemType}
   */
  magmaCubeSpawnEgg;
  /**
   * @type {ItemType}
   */
  blazeSpawnEgg;
  /**
   * @type {ItemType}
   */
  caveSpiderSpawnEgg;
  /**
   * @type {ItemType}
   */
  horseSpawnEgg;
  /**
   * @type {ItemType}
   */
  rabbitSpawnEgg;
  /**
   * @type {ItemType}
   */
  endermiteSpawnEgg;
  /**
   * @type {ItemType}
   */
  guardianSpawnEgg;
  /**
   * @type {ItemType}
   */
  straySpawnEgg;
  /**
   * @type {ItemType}
   */
  huskSpawnEgg;
  /**
   * @type {ItemType}
   */
  witherSkeletonSpawnEgg;
  /**
   * @type {ItemType}
   */
  donkeySpawnEgg;
  /**
   * @type {ItemType}
   */
  muleSpawnEgg;
  /**
   * @type {ItemType}
   */
  skeletonHorseSpawnEgg;
  /**
   * @type {ItemType}
   */
  zombieHorseSpawnEgg;
  /**
   * @type {ItemType}
   */
  shulkerSpawnEgg;
  /**
   * @type {ItemType}
   */
  npcSpawnEgg;
  /**
   * @type {ItemType}
   */
  elderGuardianSpawnEgg;
  /**
   * @type {ItemType}
   */
  polarBearSpawnEgg;
  /**
   * @type {ItemType}
   */
  llamaSpawnEgg;
  /**
   * @type {ItemType}
   */
  vindicatorSpawnEgg;
  /**
   * @type {ItemType}
   */
  evokerSpawnEgg;
  /**
   * @type {ItemType}
   */
  vexSpawnEgg;
  /**
   * @type {ItemType}
   */
  zombieVillagerSpawnEgg;
  /**
   * @type {ItemType}
   */
  parrotSpawnEgg;
  /**
   * @type {ItemType}
   */
  tropicalFishSpawnEgg;
  /**
   * @type {ItemType}
   */
  codSpawnEgg;
  /**
   * @type {ItemType}
   */
  pufferfishSpawnEgg;
  /**
   * @type {ItemType}
   */
  salmonSpawnEgg;
  /**
   * @type {ItemType}
   */
  drownedSpawnEgg;
  /**
   * @type {ItemType}
   */
  dolphinSpawnEgg;
  /**
   * @type {ItemType}
   */
  turtleSpawnEgg;
  /**
   * @type {ItemType}
   */
  phantomSpawnEgg;
  /**
   * @type {ItemType}
   */
  agentSpawnEgg;
  /**
   * @type {ItemType}
   */
  catSpawnEgg;
  /**
   * @type {ItemType}
   */
  pandaSpawnEgg;
  /**
   * @type {ItemType}
   */
  foxSpawnEgg;
  /**
   * @type {ItemType}
   */
  pillagerSpawnEgg;
  /**
   * @type {ItemType}
   */
  wanderingTraderSpawnEgg;
  /**
   * @type {ItemType}
   */
  ravagerSpawnEgg;
  /**
   * @type {ItemType}
   */
  beeSpawnEgg;
  /**
   * @type {ItemType}
   */
  striderSpawnEgg;
  /**
   * @type {ItemType}
   */
  hoglinSpawnEgg;
  /**
   * @type {ItemType}
   */
  piglinSpawnEgg;
  /**
   * @type {ItemType}
   */
  zoglinSpawnEgg;
  /**
   * @type {ItemType}
   */
  piglinBruteSpawnEgg;
  /**
   * @type {ItemType}
   */
  axolotlSpawnEgg;
  /**
   * @type {ItemType}
   */
  goatSpawnEgg;
  /**
   * @type {ItemType}
   */
  glowSquidSpawnEgg;
  /**
   * @type {ItemType}
   */
  glowInkSac;
  /**
   * @type {ItemType}
   */
  copperIngot;
  /**
   * @type {ItemType}
   */
  copperBlock;
  /**
   * @type {ItemType}
   */
  cutCopper;
  /**
   * @type {ItemType}
   */
  cutCopperStairs;
  /**
   * @type {ItemType}
   */
  cutCopperSlab;
  /**
   * @type {ItemType}
   */
  exposedCutCopperSlab;
  /**
   * @type {ItemType}
   */
  weatheredCutCopperSlab;
  /**
   * @type {ItemType}
   */
  oxidizedCutCopperSlab;
  /**
   * @type {ItemType}
   */
  waxedCutCopperSlab;
  /**
   * @type {ItemType}
   */
  waxedExposedCutCopperSlab;
  /**
   * @type {ItemType}
   */
  waxedWeatheredCutCopperSlab;
  /**
   * @type {ItemType}
   */
  waxedOxidizedCutCopperSlab;
  /**
   * @type {ItemType}
   */
  rawIron;
  /**
   * @type {ItemType}
   */
  rawGold;
  /**
   * @type {ItemType}
   */
  rawCopper;
  /**
   * @type {ItemType}
   */
  experienceBottle;
  /**
   * @type {ItemType}
   */
  fireCharge;
  /**
   * @type {ItemType}
   */
  writableBook;
  /**
   * @type {ItemType}
   */
  writtenBook;
  /**
   * @type {ItemType}
   */
  emerald;
  /**
   * @type {ItemType}
   */
  frame;
  /**
   * @type {ItemType}
   */
  flowerPot;
  /**
   * @type {ItemType}
   */
  emptyMap;
  /**
   * @type {ItemType}
   */
  skull;
  /**
   * @type {ItemType}
   */
  carrotOnAStick;
  /**
   * @type {ItemType}
   */
  netherStar;
  /**
   * @type {ItemType}
   */
  fireworkRocket;
  /**
   * @type {ItemType}
   */
  fireworkStar;
  /**
   * @type {ItemType}
   */
  enchantedBook;
  /**
   * @type {ItemType}
   */
  comparator;
  /**
   * @type {ItemType}
   */
  netherbrick;
  /**
   * @type {ItemType}
   */
  quartz;
  /**
   * @type {ItemType}
   */
  tntMinecart;
  /**
   * @type {ItemType}
   */
  hopperMinecart;
  /**
   * @type {ItemType}
   */
  hopper;
  /**
   * @type {ItemType}
   */
  rabbitFoot;
  /**
   * @type {ItemType}
   */
  rabbitHide;
  /**
   * @type {ItemType}
   */
  leatherHorseArmor;
  /**
   * @type {ItemType}
   */
  ironHorseArmor;
  /**
   * @type {ItemType}
   */
  goldenHorseArmor;
  /**
   * @type {ItemType}
   */
  diamondHorseArmor;
  /**
   * @type {ItemType}
   */
  musicDisc13;
  /**
   * @type {ItemType}
   */
  musicDiscCat;
  /**
   * @type {ItemType}
   */
  musicDiscBlocks;
  /**
   * @type {ItemType}
   */
  musicDiscChirp;
  /**
   * @type {ItemType}
   */
  musicDiscFar;
  /**
   * @type {ItemType}
   */
  musicDiscMall;
  /**
   * @type {ItemType}
   */
  musicDiscMellohi;
  /**
   * @type {ItemType}
   */
  musicDiscStal;
  /**
   * @type {ItemType}
   */
  musicDiscStrad;
  /**
   * @type {ItemType}
   */
  musicDiscWard;
  /**
   * @type {ItemType}
   */
  musicDisc11;
  /**
   * @type {ItemType}
   */
  musicDiscWait;
  /**
   * @type {ItemType}
   */
  trident;
  /**
   * @type {ItemType}
   */
  lead;
  /**
   * @type {ItemType}
   */
  nameTag;
  /**
   * @type {ItemType}
   */
  prismarineCrystals;
  /**
   * @type {ItemType}
   */
  mutton;
  /**
   * @type {ItemType}
   */
  cookedMutton;
  /**
   * @type {ItemType}
   */
  armorStand;
  /**
   * @type {ItemType}
   */
  spruceDoor;
  /**
   * @type {ItemType}
   */
  birchDoor;
  /**
   * @type {ItemType}
   */
  jungleDoor;
  /**
   * @type {ItemType}
   */
  acaciaDoor;
  /**
   * @type {ItemType}
   */
  darkOakDoor;
  /**
   * @type {ItemType}
   */
  chorusFruit;
  /**
   * @type {ItemType}
   */
  poppedChorusFruit;
  /**
   * @type {ItemType}
   */
  dragonBreath;
  /**
   * @type {ItemType}
   */
  splashPotion;
  /**
   * @type {ItemType}
   */
  lingeringPotion;
  /**
   * @type {ItemType}
   */
  commandBlockMinecart;
  /**
   * @type {ItemType}
   */
  elytra;
  /**
   * @type {ItemType}
   */
  prismarineShard;
  /**
   * @type {ItemType}
   */
  shulkerShell;
  /**
   * @type {ItemType}
   */
  banner;
  /**
   * @type {ItemType}
   */
  totemOfUndying;
  /**
   * @type {ItemType}
   */
  ironNugget;
  /**
   * @type {ItemType}
   */
  nautilusShell;
  /**
   * @type {ItemType}
   */
  heartOfTheSea;
  /**
   * @type {ItemType}
   */
  scute;
  /**
   * @type {ItemType}
   */
  turtleHelmet;
  /**
   * @type {ItemType}
   */
  phantomMembrane;
  /**
   * @type {ItemType}
   */
  crossbow;
  /**
   * @type {ItemType}
   */
  spruceSign;
  /**
   * @type {ItemType}
   */
  birchSign;
  /**
   * @type {ItemType}
   */
  jungleSign;
  /**
   * @type {ItemType}
   */
  acaciaSign;
  /**
   * @type {ItemType}
   */
  darkOakSign;
  /**
   * @type {ItemType}
   */
  flowerBannerPattern;
  /**
   * @type {ItemType}
   */
  creeperBannerPattern;
  /**
   * @type {ItemType}
   */
  skullBannerPattern;
  /**
   * @type {ItemType}
   */
  mojangBannerPattern;
  /**
   * @type {ItemType}
   */
  fieldMasonedBannerPattern;
  /**
   * @type {ItemType}
   */
  bordureIndentedBannerPattern;
  /**
   * @type {ItemType}
   */
  piglinBannerPattern;
  /**
   * @type {ItemType}
   */
  campfire;
  /**
   * @type {ItemType}
   */
  suspiciousStew;
  /**
   * @type {ItemType}
   */
  honeycomb;
  /**
   * @type {ItemType}
   */
  honeyBottle;
  /**
   * @type {ItemType}
   */
  camera;
  /**
   * @type {ItemType}
   */
  compound;
  /**
   * @type {ItemType}
   */
  iceBomb;
  /**
   * @type {ItemType}
   */
  bleach;
  /**
   * @type {ItemType}
   */
  rapidFertilizer;
  /**
   * @type {ItemType}
   */
  balloon;
  /**
   * @type {ItemType}
   */
  medicine;
  /**
   * @type {ItemType}
   */
  sparkler;
  /**
   * @type {ItemType}
   */
  glowStick;
  /**
   * @type {ItemType}
   */
  lodestoneCompass;
  /**
   * @type {ItemType}
   */
  netheriteIngot;
  /**
   * @type {ItemType}
   */
  netheriteSword;
  /**
   * @type {ItemType}
   */
  netheriteShovel;
  /**
   * @type {ItemType}
   */
  netheritePickaxe;
  /**
   * @type {ItemType}
   */
  netheriteAxe;
  /**
   * @type {ItemType}
   */
  netheriteHoe;
  /**
   * @type {ItemType}
   */
  netheriteHelmet;
  /**
   * @type {ItemType}
   */
  netheriteChestplate;
  /**
   * @type {ItemType}
   */
  netheriteLeggings;
  /**
   * @type {ItemType}
   */
  netheriteBoots;
  /**
   * @type {ItemType}
   */
  netheriteScrap;
  /**
   * @type {ItemType}
   */
  crimsonSign;
  /**
   * @type {ItemType}
   */
  warpedSign;
  /**
   * @type {ItemType}
   */
  crimsonDoor;
  /**
   * @type {ItemType}
   */
  warpedDoor;
  /**
   * @type {ItemType}
   */
  warpedFungusOnAStick;
  /**
   * @type {ItemType}
   */
  chain;
  /**
   * @type {ItemType}
   */
  musicDiscPigstep;
  /**
   * @type {ItemType}
   */
  netherSprouts;
  /**
   * @type {ItemType}
   */
  blackstoneSlab;
  /**
   * @type {ItemType}
   */
  polishedBlackstoneBrickSlab;
  /**
   * @type {ItemType}
   */
  polishedBlackstoneSlab;
  /**
   * @type {ItemType}
   */
  soulCampfire;
  /**
   * @type {ItemType}
   */
  glowFrame;
  /**
   * @type {ItemType}
   */
  goatHorn;
  /**
   * @type {ItemType}
   */
  cobbledDeepslateSlab;
  /**
   * @type {ItemType}
   */
  polishedDeepslateSlab;
  /**
   * @type {ItemType}
   */
  deepslateTileSlab;
  /**
   * @type {ItemType}
   */
  deepslateBrickSlab;
  /**
   * @type {ItemType}
   */
  amethystShard;
  /**
   * @type {ItemType}
   */
  spyglass;
  /**
   * @type {ItemType}
   */
  stone;
  /**
   * @type {ItemType}
   */
  dirt;
  /**
   * @type {ItemType}
   */
  farmland;
  /**
   * @type {ItemType}
   */
  sand;
  /**
   * @type {ItemType}
   */
  stainedHardenedClay;
  /**
   * @type {ItemType}
   */
  wool;
  /**
   * @type {ItemType}
   */
  carpet;
  /**
   * @type {ItemType}
   */
  log;
  /**
   * @type {ItemType}
   */
  fence;
  /**
   * @type {ItemType}
   */
  stonebrick;
  /**
   * @type {ItemType}
   */
  coralBlock;
  /**
   * @type {ItemType}
   */
  doubleStoneSlab;
  /**
   * @type {ItemType}
   */
  doubleStoneSlab2;
  /**
   * @type {ItemType}
   */
  doubleStoneSlab3;
  /**
   * @type {ItemType}
   */
  doubleStoneSlab4;
  /**
   * @type {ItemType}
   */
  realDoubleStoneSlab;
  /**
   * @type {ItemType}
   */
  realDoubleStoneSlab2;
  /**
   * @type {ItemType}
   */
  realDoubleStoneSlab3;
  /**
   * @type {ItemType}
   */
  realDoubleStoneSlab4;
  /**
   * @type {ItemType}
   */
  coralFan;
  /**
   * @type {ItemType}
   */
  coralFanDead;
  /**
   * @type {ItemType}
   */
  seaPickle;
  /**
   * @type {ItemType}
   */
  sapling;
  /**
   * @type {ItemType}
   */
  leaves;
  /**
   * @type {ItemType}
   */
  leaves2;
  /**
   * @type {ItemType}
   */
  azaleaLeaves;
  /**
   * @type {ItemType}
   */
  azaleaLeavesFlowered;
  /**
   * @type {ItemType}
   */
  sandstone;
  /**
   * @type {ItemType}
   */
  redSandstone;
  /**
   * @type {ItemType}
   */
  woodenSlab;
  /**
   * @type {ItemType}
   */
  crimsonRoots;
  /**
   * @type {ItemType}
   */
  warpedRoots;
  /**
   * @type {ItemType}
   */
  yellowFlower;
  /**
   * @type {ItemType}
   */
  redFlower;
  /**
   * @type {ItemType}
   */
  doublePlant;
  /**
   * @type {ItemType}
   */
  waterlily;
  /**
   * @type {ItemType}
   */
  sponge;
  /**
   * @type {ItemType}
   */
  snowLayer;
  /**
   * @type {ItemType}
   */
  planks;
  /**
   * @type {ItemType}
   */
  quartzBlock;
  /**
   * @type {ItemType}
   */
  purpurBlock;
  /**
   * @type {ItemType}
   */
  cobblestoneWall;
  /**
   * @type {ItemType}
   */
  coral;
  /**
   * @type {ItemType}
   */
  tallgrass;
  /**
   * @type {ItemType}
   */
  seagrass;
  /**
   * @type {ItemType}
   */
  brownMushroomBlock;
  /**
   * @type {ItemType}
   */
  redMushroomBlock;
  /**
   * @type {ItemType}
   */
  log2;
  /**
   * @type {ItemType}
   */
  endPortalFrame;
  /**
   * @type {ItemType}
   */
  anvil;
  /**
   * @type {ItemType}
   */
  monsterEgg;
  /**
   * @type {ItemType}
   */
  brewingstandblock;
  /**
   * @type {ItemType}
   */
  beacon;
  /**
   * @type {ItemType}
   */
  conduit;
  /**
   * @type {ItemType}
   */
  prismarine;
  /**
   * @type {ItemType}
   */
  sealantern;
  /**
   * @type {ItemType}
   */
  concrete;
  /**
   * @type {ItemType}
   */
  concretePowder;
  /**
   * @type {ItemType}
   */
  magma;
  /**
   * @type {ItemType}
   */
  stainedGlass;
  /**
   * @type {ItemType}
   */
  stainedGlassPane;
  /**
   * @type {ItemType}
   */
  undyedShulkerBox;
  /**
   * @type {ItemType}
   */
  shulkerBox;
  /**
   * @type {ItemType}
   */
  piston;
  /**
   * @type {ItemType}
   */
  stickyPiston;
  /**
   * @type {ItemType}
   */
  turtleEgg;
  /**
   * @type {ItemType}
   */
  bamboo;
  /**
   * @type {ItemType}
   */
  scaffolding;
  /**
   * @type {ItemType}
   */
  blastFurnace;
  /**
   * @type {ItemType}
   */
  smoker;
  /**
   * @type {ItemType}
   */
  smithingTable;
  /**
   * @type {ItemType}
   */
  barrel;
  /**
   * @type {ItemType}
   */
  lantern;
  /**
   * @type {ItemType}
   */
  loom;
  /**
   * @type {ItemType}
   */
  grindstone;
  /**
   * @type {ItemType}
   */
  bell;
  /**
   * @type {ItemType}
   */
  cartographyTable;
  /**
   * @type {ItemType}
   */
  fletchingTable;
  /**
   * @type {ItemType}
   */
  wood;
  /**
   * @type {ItemType}
   */
  chemistryTable;
  /**
   * @type {ItemType}
   */
  tnt;
  /**
   * @type {ItemType}
   */
  hardStainedGlass;
  /**
   * @type {ItemType}
   */
  hardStainedGlassPane;
  /**
   * @type {ItemType}
   */
  coloredTorchRg;
  /**
   * @type {ItemType}
   */
  coloredTorchBp;
  /**
   * @type {ItemType}
   */
  lightBlock;
  /**
   * @type {ItemType}
   */
  pumpkin;
  /**
   * @type {ItemType}
   */
  carvedPumpkin;
  /**
   * @type {ItemType}
   */
  litPumpkin;
  /**
   * @type {ItemType}
   */
  crimsonSlab;
  /**
   * @type {ItemType}
   */
  warpedSlab;
  /**
   * @type {ItemType}
   */
  candle;
  /**
   * @type {ItemType}
   */
  whiteCandle;
  /**
   * @type {ItemType}
   */
  orangeCandle;
  /**
   * @type {ItemType}
   */
  magentaCandle;
  /**
   * @type {ItemType}
   */
  lightBlueCandle;
  /**
   * @type {ItemType}
   */
  yellowCandle;
  /**
   * @type {ItemType}
   */
  limeCandle;
  /**
   * @type {ItemType}
   */
  pinkCandle;
  /**
   * @type {ItemType}
   */
  grayCandle;
  /**
   * @type {ItemType}
   */
  lightGrayCandle;
  /**
   * @type {ItemType}
   */
  cyanCandle;
  /**
   * @type {ItemType}
   */
  purpleCandle;
  /**
   * @type {ItemType}
   */
  blueCandle;
  /**
   * @type {ItemType}
   */
  brownCandle;
  /**
   * @type {ItemType}
   */
  greenCandle;
  /**
   * @type {ItemType}
   */
  redCandle;
  /**
   * @type {ItemType}
   */
  blackCandle;
  /**
   * @type {ItemType}
   */
  element0;
  /**
   * @type {ItemType}
   */
  element1;
  /**
   * @type {ItemType}
   */
  element2;
  /**
   * @type {ItemType}
   */
  element3;
  /**
   * @type {ItemType}
   */
  element4;
  /**
   * @type {ItemType}
   */
  element5;
  /**
   * @type {ItemType}
   */
  element6;
  /**
   * @type {ItemType}
   */
  element7;
  /**
   * @type {ItemType}
   */
  element8;
  /**
   * @type {ItemType}
   */
  element9;
  /**
   * @type {ItemType}
   */
  element10;
  /**
   * @type {ItemType}
   */
  element11;
  /**
   * @type {ItemType}
   */
  element12;
  /**
   * @type {ItemType}
   */
  element13;
  /**
   * @type {ItemType}
   */
  element14;
  /**
   * @type {ItemType}
   */
  element15;
  /**
   * @type {ItemType}
   */
  element16;
  /**
   * @type {ItemType}
   */
  element17;
  /**
   * @type {ItemType}
   */
  element18;
  /**
   * @type {ItemType}
   */
  element19;
  /**
   * @type {ItemType}
   */
  element20;
  /**
   * @type {ItemType}
   */
  element21;
  /**
   * @type {ItemType}
   */
  element22;
  /**
   * @type {ItemType}
   */
  element23;
  /**
   * @type {ItemType}
   */
  element24;
  /**
   * @type {ItemType}
   */
  element25;
  /**
   * @type {ItemType}
   */
  element26;
  /**
   * @type {ItemType}
   */
  element27;
  /**
   * @type {ItemType}
   */
  element28;
  /**
   * @type {ItemType}
   */
  element29;
  /**
   * @type {ItemType}
   */
  element30;
  /**
   * @type {ItemType}
   */
  element31;
  /**
   * @type {ItemType}
   */
  element32;
  /**
   * @type {ItemType}
   */
  element33;
  /**
   * @type {ItemType}
   */
  element34;
  /**
   * @type {ItemType}
   */
  element35;
  /**
   * @type {ItemType}
   */
  element36;
  /**
   * @type {ItemType}
   */
  element37;
  /**
   * @type {ItemType}
   */
  element38;
  /**
   * @type {ItemType}
   */
  element39;
  /**
   * @type {ItemType}
   */
  element40;
  /**
   * @type {ItemType}
   */
  element41;
  /**
   * @type {ItemType}
   */
  element42;
  /**
   * @type {ItemType}
   */
  element43;
  /**
   * @type {ItemType}
   */
  element44;
  /**
   * @type {ItemType}
   */
  element45;
  /**
   * @type {ItemType}
   */
  element46;
  /**
   * @type {ItemType}
   */
  element47;
  /**
   * @type {ItemType}
   */
  element48;
  /**
   * @type {ItemType}
   */
  element49;
  /**
   * @type {ItemType}
   */
  element50;
  /**
   * @type {ItemType}
   */
  element51;
  /**
   * @type {ItemType}
   */
  element52;
  /**
   * @type {ItemType}
   */
  element53;
  /**
   * @type {ItemType}
   */
  element54;
  /**
   * @type {ItemType}
   */
  element55;
  /**
   * @type {ItemType}
   */
  element56;
  /**
   * @type {ItemType}
   */
  element57;
  /**
   * @type {ItemType}
   */
  element58;
  /**
   * @type {ItemType}
   */
  element59;
  /**
   * @type {ItemType}
   */
  element60;
  /**
   * @type {ItemType}
   */
  element61;
  /**
   * @type {ItemType}
   */
  element62;
  /**
   * @type {ItemType}
   */
  element63;
  /**
   * @type {ItemType}
   */
  element64;
  /**
   * @type {ItemType}
   */
  element65;
  /**
   * @type {ItemType}
   */
  element66;
  /**
   * @type {ItemType}
   */
  element67;
  /**
   * @type {ItemType}
   */
  element68;
  /**
   * @type {ItemType}
   */
  element69;
  /**
   * @type {ItemType}
   */
  element70;
  /**
   * @type {ItemType}
   */
  element71;
  /**
   * @type {ItemType}
   */
  element72;
  /**
   * @type {ItemType}
   */
  element73;
  /**
   * @type {ItemType}
   */
  element74;
  /**
   * @type {ItemType}
   */
  element75;
  /**
   * @type {ItemType}
   */
  element76;
  /**
   * @type {ItemType}
   */
  element77;
  /**
   * @type {ItemType}
   */
  element78;
  /**
   * @type {ItemType}
   */
  element79;
  /**
   * @type {ItemType}
   */
  element80;
  /**
   * @type {ItemType}
   */
  element81;
  /**
   * @type {ItemType}
   */
  element82;
  /**
   * @type {ItemType}
   */
  element83;
  /**
   * @type {ItemType}
   */
  element84;
  /**
   * @type {ItemType}
   */
  element85;
  /**
   * @type {ItemType}
   */
  element86;
  /**
   * @type {ItemType}
   */
  element87;
  /**
   * @type {ItemType}
   */
  element88;
  /**
   * @type {ItemType}
   */
  element89;
  /**
   * @type {ItemType}
   */
  element90;
  /**
   * @type {ItemType}
   */
  element91;
  /**
   * @type {ItemType}
   */
  element92;
  /**
   * @type {ItemType}
   */
  element93;
  /**
   * @type {ItemType}
   */
  element94;
  /**
   * @type {ItemType}
   */
  element95;
  /**
   * @type {ItemType}
   */
  element96;
  /**
   * @type {ItemType}
   */
  element97;
  /**
   * @type {ItemType}
   */
  element98;
  /**
   * @type {ItemType}
   */
  element99;
  /**
   * @type {ItemType}
   */
  element100;
  /**
   * @type {ItemType}
   */
  element101;
  /**
   * @type {ItemType}
   */
  element102;
  /**
   * @type {ItemType}
   */
  element103;
  /**
   * @type {ItemType}
   */
  element104;
  /**
   * @type {ItemType}
   */
  element105;
  /**
   * @type {ItemType}
   */
  element106;
  /**
   * @type {ItemType}
   */
  element107;
  /**
   * @type {ItemType}
   */
  element108;
  /**
   * @type {ItemType}
   */
  element109;
  /**
   * @type {ItemType}
   */
  element110;
  /**
   * @type {ItemType}
   */
  element111;
  /**
   * @type {ItemType}
   */
  element112;
  /**
   * @type {ItemType}
   */
  element113;
  /**
   * @type {ItemType}
   */
  element114;
  /**
   * @type {ItemType}
   */
  element115;
  /**
   * @type {ItemType}
   */
  element116;
  /**
   * @type {ItemType}
   */
  element117;
  /**
   * @type {ItemType}
   */
  element118;
  /**
   * @type {ItemType}
   */
  composter;
  /**
   * @type {ItemType}
   */
  netheriteBlock;
  /**
   * @type {ItemType}
   */
  ancientDebris;
  /**
   * @type {ItemType}
   */
  respawnAnchor;
  /**
   * @type {ItemType}
   */
  cryingObsidian;
  /**
   * @type {ItemType}
   */
  boat;
  /**
   * @type {ItemType}
   */
  dye;
  /**
   * @type {ItemType}
   */
  bannerPattern;
  /**
   * @type {ItemType}
   */
  spawnEgg;
  /**
   * @type {ItemType}
   */
  endCrystal;
  /**
   * @type {ItemType}
   */
  glowBerries;
  /**
   * @type {ItemType}
   */
  acaciaButton;
  /**
   * @type {ItemType}
   */
  acaciaFenceGate;
  /**
   * @type {ItemType}
   */
  acaciaPressurePlate;
  /**
   * @type {ItemType}
   */
  acaciaStairs;
  /**
   * @type {ItemType}
   */
  acaciaStandingSign;
  /**
   * @type {ItemType}
   */
  acaciaTrapdoor;
  /**
   * @type {ItemType}
   */
  acaciaWallSign;
  /**
   * @type {ItemType}
   */
  activatorRail;
  /**
   * @type {ItemType}
   */
  allow;
  /**
   * @type {ItemType}
   */
  amethystBlock;
  /**
   * @type {ItemType}
   */
  amethystCluster;
  /**
   * @type {ItemType}
   */
  andesiteStairs;
  /**
   * @type {ItemType}
   */
  azalea;
  /**
   * @type {ItemType}
   */
  bambooSapling;
  /**
   * @type {ItemType}
   */
  barrier;
  /**
   * @type {ItemType}
   */
  basalt;
  /**
   * @type {ItemType}
   */
  bedrock;
  /**
   * @type {ItemType}
   */
  beeNest;
  /**
   * @type {ItemType}
   */
  beehive;
  /**
   * @type {ItemType}
   */
  bigDripleaf;
  /**
   * @type {ItemType}
   */
  birchButton;
  /**
   * @type {ItemType}
   */
  birchFenceGate;
  /**
   * @type {ItemType}
   */
  birchPressurePlate;
  /**
   * @type {ItemType}
   */
  birchStairs;
  /**
   * @type {ItemType}
   */
  birchStandingSign;
  /**
   * @type {ItemType}
   */
  birchTrapdoor;
  /**
   * @type {ItemType}
   */
  birchWallSign;
  /**
   * @type {ItemType}
   */
  blackCandleCake;
  /**
   * @type {ItemType}
   */
  blackGlazedTerracotta;
  /**
   * @type {ItemType}
   */
  blackstone;
  /**
   * @type {ItemType}
   */
  blackstoneDoubleSlab;
  /**
   * @type {ItemType}
   */
  blackstoneStairs;
  /**
   * @type {ItemType}
   */
  blackstoneWall;
  /**
   * @type {ItemType}
   */
  blueCandleCake;
  /**
   * @type {ItemType}
   */
  blueGlazedTerracotta;
  /**
   * @type {ItemType}
   */
  blueIce;
  /**
   * @type {ItemType}
   */
  boneBlock;
  /**
   * @type {ItemType}
   */
  bookshelf;
  /**
   * @type {ItemType}
   */
  borderBlock;
  /**
   * @type {ItemType}
   */
  brickBlock;
  /**
   * @type {ItemType}
   */
  brickStairs;
  /**
   * @type {ItemType}
   */
  brownCandleCake;
  /**
   * @type {ItemType}
   */
  brownGlazedTerracotta;
  /**
   * @type {ItemType}
   */
  brownMushroom;
  /**
   * @type {ItemType}
   */
  bubbleColumn;
  /**
   * @type {ItemType}
   */
  buddingAmethyst;
  /**
   * @type {ItemType}
   */
  cactus;
  /**
   * @type {ItemType}
   */
  calcite;
  /**
   * @type {ItemType}
   */
  candleCake;
  /**
   * @type {ItemType}
   */
  carrots;
  /**
   * @type {ItemType}
   */
  caveVines;
  /**
   * @type {ItemType}
   */
  caveVinesBodyWithBerries;
  /**
   * @type {ItemType}
   */
  caveVinesHeadWithBerries;
  /**
   * @type {ItemType}
   */
  chainCommandBlock;
  /**
   * @type {ItemType}
   */
  chemicalHeat;
  /**
   * @type {ItemType}
   */
  chest;
  /**
   * @type {ItemType}
   */
  chiseledDeepslate;
  /**
   * @type {ItemType}
   */
  chiseledNetherBricks;
  /**
   * @type {ItemType}
   */
  chiseledPolishedBlackstone;
  /**
   * @type {ItemType}
   */
  chorusFlower;
  /**
   * @type {ItemType}
   */
  chorusPlant;
  /**
   * @type {ItemType}
   */
  clay;
  /**
   * @type {ItemType}
   */
  coalBlock;
  /**
   * @type {ItemType}
   */
  coalOre;
  /**
   * @type {ItemType}
   */
  cobbledDeepslate;
  /**
   * @type {ItemType}
   */
  cobbledDeepslateDoubleSlab;
  /**
   * @type {ItemType}
   */
  cobbledDeepslateStairs;
  /**
   * @type {ItemType}
   */
  cobbledDeepslateWall;
  /**
   * @type {ItemType}
   */
  cobblestone;
  /**
   * @type {ItemType}
   */
  cocoa;
  /**
   * @type {ItemType}
   */
  commandBlock;
  /**
   * @type {ItemType}
   */
  copperOre;
  /**
   * @type {ItemType}
   */
  coralFanHang;
  /**
   * @type {ItemType}
   */
  coralFanHang2;
  /**
   * @type {ItemType}
   */
  coralFanHang3;
  /**
   * @type {ItemType}
   */
  crackedDeepslateBricks;
  /**
   * @type {ItemType}
   */
  crackedDeepslateTiles;
  /**
   * @type {ItemType}
   */
  crackedNetherBricks;
  /**
   * @type {ItemType}
   */
  crackedPolishedBlackstoneBricks;
  /**
   * @type {ItemType}
   */
  craftingTable;
  /**
   * @type {ItemType}
   */
  crimsonButton;
  /**
   * @type {ItemType}
   */
  crimsonDoubleSlab;
  /**
   * @type {ItemType}
   */
  crimsonFence;
  /**
   * @type {ItemType}
   */
  crimsonFenceGate;
  /**
   * @type {ItemType}
   */
  crimsonFungus;
  /**
   * @type {ItemType}
   */
  crimsonHyphae;
  /**
   * @type {ItemType}
   */
  crimsonNylium;
  /**
   * @type {ItemType}
   */
  crimsonPlanks;
  /**
   * @type {ItemType}
   */
  crimsonPressurePlate;
  /**
   * @type {ItemType}
   */
  crimsonStairs;
  /**
   * @type {ItemType}
   */
  crimsonStandingSign;
  /**
   * @type {ItemType}
   */
  crimsonStem;
  /**
   * @type {ItemType}
   */
  crimsonTrapdoor;
  /**
   * @type {ItemType}
   */
  crimsonWallSign;
  /**
   * @type {ItemType}
   */
  cyanCandleCake;
  /**
   * @type {ItemType}
   */
  cyanGlazedTerracotta;
  /**
   * @type {ItemType}
   */
  darkOakButton;
  /**
   * @type {ItemType}
   */
  darkOakFenceGate;
  /**
   * @type {ItemType}
   */
  darkOakPressurePlate;
  /**
   * @type {ItemType}
   */
  darkOakStairs;
  /**
   * @type {ItemType}
   */
  darkOakTrapdoor;
  /**
   * @type {ItemType}
   */
  darkPrismarineStairs;
  /**
   * @type {ItemType}
   */
  darkoakStandingSign;
  /**
   * @type {ItemType}
   */
  darkoakWallSign;
  /**
   * @type {ItemType}
   */
  daylightDetector;
  /**
   * @type {ItemType}
   */
  daylightDetectorInverted;
  /**
   * @type {ItemType}
   */
  deadbush;
  /**
   * @type {ItemType}
   */
  deepslate;
  /**
   * @type {ItemType}
   */
  deepslateBrickDoubleSlab;
  /**
   * @type {ItemType}
   */
  deepslateBrickStairs;
  /**
   * @type {ItemType}
   */
  deepslateBrickWall;
  /**
   * @type {ItemType}
   */
  deepslateBricks;
  /**
   * @type {ItemType}
   */
  deepslateCoalOre;
  /**
   * @type {ItemType}
   */
  deepslateCopperOre;
  /**
   * @type {ItemType}
   */
  deepslateDiamondOre;
  /**
   * @type {ItemType}
   */
  deepslateEmeraldOre;
  /**
   * @type {ItemType}
   */
  deepslateGoldOre;
  /**
   * @type {ItemType}
   */
  deepslateIronOre;
  /**
   * @type {ItemType}
   */
  deepslateLapisOre;
  /**
   * @type {ItemType}
   */
  deepslateRedstoneOre;
  /**
   * @type {ItemType}
   */
  deepslateTileDoubleSlab;
  /**
   * @type {ItemType}
   */
  deepslateTileStairs;
  /**
   * @type {ItemType}
   */
  deepslateTileWall;
  /**
   * @type {ItemType}
   */
  deepslateTiles;
  /**
   * @type {ItemType}
   */
  deny;
  /**
   * @type {ItemType}
   */
  detectorRail;
  /**
   * @type {ItemType}
   */
  diamondBlock;
  /**
   * @type {ItemType}
   */
  diamondOre;
  /**
   * @type {ItemType}
   */
  dioriteStairs;
  /**
   * @type {ItemType}
   */
  dirtWithRoots;
  /**
   * @type {ItemType}
   */
  dispenser;
  /**
   * @type {ItemType}
   */
  doubleCutCopperSlab;
  /**
   * @type {ItemType}
   */
  doubleWoodenSlab;
  /**
   * @type {ItemType}
   */
  dragonEgg;
  /**
   * @type {ItemType}
   */
  driedKelpBlock;
  /**
   * @type {ItemType}
   */
  dripstoneBlock;
  /**
   * @type {ItemType}
   */
  dropper;
  /**
   * @type {ItemType}
   */
  emeraldBlock;
  /**
   * @type {ItemType}
   */
  emeraldOre;
  /**
   * @type {ItemType}
   */
  enchantingTable;
  /**
   * @type {ItemType}
   */
  endBrickStairs;
  /**
   * @type {ItemType}
   */
  endBricks;
  /**
   * @type {ItemType}
   */
  endGateway;
  /**
   * @type {ItemType}
   */
  endPortal;
  /**
   * @type {ItemType}
   */
  endRod;
  /**
   * @type {ItemType}
   */
  endStone;
  /**
   * @type {ItemType}
   */
  enderChest;
  /**
   * @type {ItemType}
   */
  exposedCopper;
  /**
   * @type {ItemType}
   */
  exposedCutCopper;
  /**
   * @type {ItemType}
   */
  exposedCutCopperStairs;
  /**
   * @type {ItemType}
   */
  exposedDoubleCutCopperSlab;
  /**
   * @type {ItemType}
   */
  fenceGate;
  /**
   * @type {ItemType}
   */
  fire;
  /**
   * @type {ItemType}
   */
  floweringAzalea;
  /**
   * @type {ItemType}
   */
  flowingLava;
  /**
   * @type {ItemType}
   */
  flowingWater;
  /**
   * @type {ItemType}
   */
  frostedIce;
  /**
   * @type {ItemType}
   */
  furnace;
  /**
   * @type {ItemType}
   */
  gildedBlackstone;
  /**
   * @type {ItemType}
   */
  glass;
  /**
   * @type {ItemType}
   */
  glassPane;
  /**
   * @type {ItemType}
   */
  glowLichen;
  /**
   * @type {ItemType}
   */
  glowingobsidian;
  /**
   * @type {ItemType}
   */
  glowstone;
  /**
   * @type {ItemType}
   */
  goldBlock;
  /**
   * @type {ItemType}
   */
  goldOre;
  /**
   * @type {ItemType}
   */
  goldenRail;
  /**
   * @type {ItemType}
   */
  graniteStairs;
  /**
   * @type {ItemType}
   */
  grass;
  /**
   * @type {ItemType}
   */
  grassPath;
  /**
   * @type {ItemType}
   */
  gravel;
  /**
   * @type {ItemType}
   */
  grayCandleCake;
  /**
   * @type {ItemType}
   */
  grayGlazedTerracotta;
  /**
   * @type {ItemType}
   */
  greenCandleCake;
  /**
   * @type {ItemType}
   */
  greenGlazedTerracotta;
  /**
   * @type {ItemType}
   */
  hangingRoots;
  /**
   * @type {ItemType}
   */
  hardGlass;
  /**
   * @type {ItemType}
   */
  hardGlassPane;
  /**
   * @type {ItemType}
   */
  hardenedClay;
  /**
   * @type {ItemType}
   */
  hayBlock;
  /**
   * @type {ItemType}
   */
  heavyWeightedPressurePlate;
  /**
   * @type {ItemType}
   */
  honeyBlock;
  /**
   * @type {ItemType}
   */
  honeycombBlock;
  /**
   * @type {ItemType}
   */
  ice;
  /**
   * @type {ItemType}
   */
  infestedDeepslate;
  /**
   * @type {ItemType}
   */
  infoUpdate;
  /**
   * @type {ItemType}
   */
  infoUpdate2;
  /**
   * @type {ItemType}
   */
  invisiblebedrock;
  /**
   * @type {ItemType}
   */
  ironBars;
  /**
   * @type {ItemType}
   */
  ironBlock;
  /**
   * @type {ItemType}
   */
  ironOre;
  /**
   * @type {ItemType}
   */
  ironTrapdoor;
  /**
   * @type {ItemType}
   */
  jigsaw;
  /**
   * @type {ItemType}
   */
  jukebox;
  /**
   * @type {ItemType}
   */
  jungleButton;
  /**
   * @type {ItemType}
   */
  jungleFenceGate;
  /**
   * @type {ItemType}
   */
  junglePressurePlate;
  /**
   * @type {ItemType}
   */
  jungleStairs;
  /**
   * @type {ItemType}
   */
  jungleStandingSign;
  /**
   * @type {ItemType}
   */
  jungleTrapdoor;
  /**
   * @type {ItemType}
   */
  jungleWallSign;
  /**
   * @type {ItemType}
   */
  ladder;
  /**
   * @type {ItemType}
   */
  lapisBlock;
  /**
   * @type {ItemType}
   */
  lapisOre;
  /**
   * @type {ItemType}
   */
  largeAmethystBud;
  /**
   * @type {ItemType}
   */
  lava;
  /**
   * @type {ItemType}
   */
  lavaCauldron;
  /**
   * @type {ItemType}
   */
  lectern;
  /**
   * @type {ItemType}
   */
  lever;
  /**
   * @type {ItemType}
   */
  lightBlueCandleCake;
  /**
   * @type {ItemType}
   */
  lightBlueGlazedTerracotta;
  /**
   * @type {ItemType}
   */
  lightGrayCandleCake;
  /**
   * @type {ItemType}
   */
  lightWeightedPressurePlate;
  /**
   * @type {ItemType}
   */
  lightningRod;
  /**
   * @type {ItemType}
   */
  limeCandleCake;
  /**
   * @type {ItemType}
   */
  limeGlazedTerracotta;
  /**
   * @type {ItemType}
   */
  litBlastFurnace;
  /**
   * @type {ItemType}
   */
  litDeepslateRedstoneOre;
  /**
   * @type {ItemType}
   */
  litFurnace;
  /**
   * @type {ItemType}
   */
  litRedstoneLamp;
  /**
   * @type {ItemType}
   */
  litRedstoneOre;
  /**
   * @type {ItemType}
   */
  litSmoker;
  /**
   * @type {ItemType}
   */
  lodestone;
  /**
   * @type {ItemType}
   */
  magentaCandleCake;
  /**
   * @type {ItemType}
   */
  magentaGlazedTerracotta;
  /**
   * @type {ItemType}
   */
  mediumAmethystBud;
  /**
   * @type {ItemType}
   */
  melonBlock;
  /**
   * @type {ItemType}
   */
  melonStem;
  /**
   * @type {ItemType}
   */
  mobSpawner;
  /**
   * @type {ItemType}
   */
  mossBlock;
  /**
   * @type {ItemType}
   */
  mossCarpet;
  /**
   * @type {ItemType}
   */
  mossyCobblestone;
  /**
   * @type {ItemType}
   */
  mossyCobblestoneStairs;
  /**
   * @type {ItemType}
   */
  mossyStoneBrickStairs;
  /**
   * @type {ItemType}
   */
  movingblock;
  /**
   * @type {ItemType}
   */
  mycelium;
  /**
   * @type {ItemType}
   */
  netherBrick;
  /**
   * @type {ItemType}
   */
  netherBrickFence;
  /**
   * @type {ItemType}
   */
  netherBrickStairs;
  /**
   * @type {ItemType}
   */
  netherGoldOre;
  /**
   * @type {ItemType}
   */
  netherWartBlock;
  /**
   * @type {ItemType}
   */
  netherrack;
  /**
   * @type {ItemType}
   */
  netherreactor;
  /**
   * @type {ItemType}
   */
  normalStoneStairs;
  /**
   * @type {ItemType}
   */
  noteblock;
  /**
   * @type {ItemType}
   */
  oakStairs;
  /**
   * @type {ItemType}
   */
  observer;
  /**
   * @type {ItemType}
   */
  obsidian;
  /**
   * @type {ItemType}
   */
  orangeCandleCake;
  /**
   * @type {ItemType}
   */
  orangeGlazedTerracotta;
  /**
   * @type {ItemType}
   */
  oxidizedCopper;
  /**
   * @type {ItemType}
   */
  oxidizedCutCopper;
  /**
   * @type {ItemType}
   */
  oxidizedCutCopperStairs;
  /**
   * @type {ItemType}
   */
  oxidizedDoubleCutCopperSlab;
  /**
   * @type {ItemType}
   */
  packedIce;
  /**
   * @type {ItemType}
   */
  pinkCandleCake;
  /**
   * @type {ItemType}
   */
  pinkGlazedTerracotta;
  /**
   * @type {ItemType}
   */
  pistonarmcollision;
  /**
   * @type {ItemType}
   */
  podzol;
  /**
   * @type {ItemType}
   */
  pointedDripstone;
  /**
   * @type {ItemType}
   */
  polishedAndesiteStairs;
  /**
   * @type {ItemType}
   */
  polishedBasalt;
  /**
   * @type {ItemType}
   */
  polishedBlackstone;
  /**
   * @type {ItemType}
   */
  polishedBlackstoneBrickDoubleSlab;
  /**
   * @type {ItemType}
   */
  polishedBlackstoneBrickStairs;
  /**
   * @type {ItemType}
   */
  polishedBlackstoneBrickWall;
  /**
   * @type {ItemType}
   */
  polishedBlackstoneBricks;
  /**
   * @type {ItemType}
   */
  polishedBlackstoneButton;
  /**
   * @type {ItemType}
   */
  polishedBlackstoneDoubleSlab;
  /**
   * @type {ItemType}
   */
  polishedBlackstonePressurePlate;
  /**
   * @type {ItemType}
   */
  polishedBlackstoneStairs;
  /**
   * @type {ItemType}
   */
  polishedBlackstoneWall;
  /**
   * @type {ItemType}
   */
  polishedDeepslate;
  /**
   * @type {ItemType}
   */
  polishedDeepslateDoubleSlab;
  /**
   * @type {ItemType}
   */
  polishedDeepslateStairs;
  /**
   * @type {ItemType}
   */
  polishedDeepslateWall;
  /**
   * @type {ItemType}
   */
  polishedDioriteStairs;
  /**
   * @type {ItemType}
   */
  polishedGraniteStairs;
  /**
   * @type {ItemType}
   */
  portal;
  /**
   * @type {ItemType}
   */
  potatoes;
  /**
   * @type {ItemType}
   */
  powderSnow;
  /**
   * @type {ItemType}
   */
  poweredComparator;
  /**
   * @type {ItemType}
   */
  poweredRepeater;
  /**
   * @type {ItemType}
   */
  prismarineBricksStairs;
  /**
   * @type {ItemType}
   */
  prismarineStairs;
  /**
   * @type {ItemType}
   */
  pumpkinStem;
  /**
   * @type {ItemType}
   */
  purpleCandleCake;
  /**
   * @type {ItemType}
   */
  purpleGlazedTerracotta;
  /**
   * @type {ItemType}
   */
  purpurStairs;
  /**
   * @type {ItemType}
   */
  quartzBricks;
  /**
   * @type {ItemType}
   */
  quartzOre;
  /**
   * @type {ItemType}
   */
  quartzStairs;
  /**
   * @type {ItemType}
   */
  rail;
  /**
   * @type {ItemType}
   */
  rawCopperBlock;
  /**
   * @type {ItemType}
   */
  rawGoldBlock;
  /**
   * @type {ItemType}
   */
  rawIronBlock;
  /**
   * @type {ItemType}
   */
  redCandleCake;
  /**
   * @type {ItemType}
   */
  redGlazedTerracotta;
  /**
   * @type {ItemType}
   */
  redMushroom;
  /**
   * @type {ItemType}
   */
  redNetherBrick;
  /**
   * @type {ItemType}
   */
  redNetherBrickStairs;
  /**
   * @type {ItemType}
   */
  redSandstoneStairs;
  /**
   * @type {ItemType}
   */
  redstoneBlock;
  /**
   * @type {ItemType}
   */
  redstoneLamp;
  /**
   * @type {ItemType}
   */
  redstoneOre;
  /**
   * @type {ItemType}
   */
  redstoneTorch;
  /**
   * @type {ItemType}
   */
  redstoneWire;
  /**
   * @type {ItemType}
   */
  repeatingCommandBlock;
  /**
   * @type {ItemType}
   */
  reserved6;
  /**
   * @type {ItemType}
   */
  sandstoneStairs;
  /**
   * @type {ItemType}
   */
  sculkSensor;
  /**
   * @type {ItemType}
   */
  shroomlight;
  /**
   * @type {ItemType}
   */
  silverGlazedTerracotta;
  /**
   * @type {ItemType}
   */
  slime;
  /**
   * @type {ItemType}
   */
  smallAmethystBud;
  /**
   * @type {ItemType}
   */
  smallDripleafBlock;
  /**
   * @type {ItemType}
   */
  smoothBasalt;
  /**
   * @type {ItemType}
   */
  smoothQuartzStairs;
  /**
   * @type {ItemType}
   */
  smoothRedSandstoneStairs;
  /**
   * @type {ItemType}
   */
  smoothSandstoneStairs;
  /**
   * @type {ItemType}
   */
  smoothStone;
  /**
   * @type {ItemType}
   */
  snow;
  /**
   * @type {ItemType}
   */
  soulFire;
  /**
   * @type {ItemType}
   */
  soulLantern;
  /**
   * @type {ItemType}
   */
  soulSand;
  /**
   * @type {ItemType}
   */
  soulSoil;
  /**
   * @type {ItemType}
   */
  soulTorch;
  /**
   * @type {ItemType}
   */
  sporeBlossom;
  /**
   * @type {ItemType}
   */
  spruceButton;
  /**
   * @type {ItemType}
   */
  spruceFenceGate;
  /**
   * @type {ItemType}
   */
  sprucePressurePlate;
  /**
   * @type {ItemType}
   */
  spruceStairs;
  /**
   * @type {ItemType}
   */
  spruceStandingSign;
  /**
   * @type {ItemType}
   */
  spruceTrapdoor;
  /**
   * @type {ItemType}
   */
  spruceWallSign;
  /**
   * @type {ItemType}
   */
  standingBanner;
  /**
   * @type {ItemType}
   */
  standingSign;
  /**
   * @type {ItemType}
   */
  stickypistonarmcollision;
  /**
   * @type {ItemType}
   */
  stoneBrickStairs;
  /**
   * @type {ItemType}
   */
  stoneButton;
  /**
   * @type {ItemType}
   */
  stonePressurePlate;
  /**
   * @type {ItemType}
   */
  stoneStairs;
  /**
   * @type {ItemType}
   */
  stonecutter;
  /**
   * @type {ItemType}
   */
  stonecutterBlock;
  /**
   * @type {ItemType}
   */
  strippedAcaciaLog;
  /**
   * @type {ItemType}
   */
  strippedBirchLog;
  /**
   * @type {ItemType}
   */
  strippedCrimsonHyphae;
  /**
   * @type {ItemType}
   */
  strippedCrimsonStem;
  /**
   * @type {ItemType}
   */
  strippedDarkOakLog;
  /**
   * @type {ItemType}
   */
  strippedJungleLog;
  /**
   * @type {ItemType}
   */
  strippedOakLog;
  /**
   * @type {ItemType}
   */
  strippedSpruceLog;
  /**
   * @type {ItemType}
   */
  strippedWarpedHyphae;
  /**
   * @type {ItemType}
   */
  strippedWarpedStem;
  /**
   * @type {ItemType}
   */
  structureBlock;
  /**
   * @type {ItemType}
   */
  structureVoid;
  /**
   * @type {ItemType}
   */
  sweetBerryBush;
  /**
   * @type {ItemType}
   */
  target;
  /**
   * @type {ItemType}
   */
  tintedGlass;
  /**
   * @type {ItemType}
   */
  torch;
  /**
   * @type {ItemType}
   */
  trapdoor;
  /**
   * @type {ItemType}
   */
  trappedChest;
  /**
   * @type {ItemType}
   */
  tripwire;
  /**
   * @type {ItemType}
   */
  tripwireHook;
  /**
   * @type {ItemType}
   */
  tuff;
  /**
   * @type {ItemType}
   */
  twistingVines;
  /**
   * @type {ItemType}
   */
  underwaterTorch;
  /**
   * @type {ItemType}
   */
  unknown;
  /**
   * @type {ItemType}
   */
  unlitRedstoneTorch;
  /**
   * @type {ItemType}
   */
  unpoweredComparator;
  /**
   * @type {ItemType}
   */
  unpoweredRepeater;
  /**
   * @type {ItemType}
   */
  vine;
  /**
   * @type {ItemType}
   */
  wallBanner;
  /**
   * @type {ItemType}
   */
  wallSign;
  /**
   * @type {ItemType}
   */
  warpedButton;
  /**
   * @type {ItemType}
   */
  warpedDoubleSlab;
  /**
   * @type {ItemType}
   */
  warpedFence;
  /**
   * @type {ItemType}
   */
  warpedFenceGate;
  /**
   * @type {ItemType}
   */
  warpedFungus;
  /**
   * @type {ItemType}
   */
  warpedHyphae;
  /**
   * @type {ItemType}
   */
  warpedNylium;
  /**
   * @type {ItemType}
   */
  warpedPlanks;
  /**
   * @type {ItemType}
   */
  warpedPressurePlate;
  /**
   * @type {ItemType}
   */
  warpedStairs;
  /**
   * @type {ItemType}
   */
  warpedStandingSign;
  /**
   * @type {ItemType}
   */
  warpedStem;
  /**
   * @type {ItemType}
   */
  warpedTrapdoor;
  /**
   * @type {ItemType}
   */
  warpedWallSign;
  /**
   * @type {ItemType}
   */
  warpedWartBlock;
  /**
   * @type {ItemType}
   */
  water;
  /**
   * @type {ItemType}
   */
  waxedCopper;
  /**
   * @type {ItemType}
   */
  waxedCutCopper;
  /**
   * @type {ItemType}
   */
  waxedCutCopperStairs;
  /**
   * @type {ItemType}
   */
  waxedDoubleCutCopperSlab;
  /**
   * @type {ItemType}
   */
  waxedExposedCopper;
  /**
   * @type {ItemType}
   */
  waxedExposedCutCopper;
  /**
   * @type {ItemType}
   */
  waxedExposedCutCopperStairs;
  /**
   * @type {ItemType}
   */
  waxedExposedDoubleCutCopperSlab;
  /**
   * @type {ItemType}
   */
  waxedOxidizedCopper;
  /**
   * @type {ItemType}
   */
  waxedOxidizedCutCopper;
  /**
   * @type {ItemType}
   */
  waxedOxidizedCutCopperStairs;
  /**
   * @type {ItemType}
   */
  waxedOxidizedDoubleCutCopperSlab;
  /**
   * @type {ItemType}
   */
  waxedWeatheredCopper;
  /**
   * @type {ItemType}
   */
  waxedWeatheredCutCopper;
  /**
   * @type {ItemType}
   */
  waxedWeatheredCutCopperStairs;
  /**
   * @type {ItemType}
   */
  waxedWeatheredDoubleCutCopperSlab;
  /**
   * @type {ItemType}
   */
  weatheredCopper;
  /**
   * @type {ItemType}
   */
  weatheredCutCopper;
  /**
   * @type {ItemType}
   */
  weatheredCutCopperStairs;
  /**
   * @type {ItemType}
   */
  weatheredDoubleCutCopperSlab;
  /**
   * @type {ItemType}
   */
  web;
  /**
   * @type {ItemType}
   */
  weepingVines;
  /**
   * @type {ItemType}
   */
  whiteCandleCake;
  /**
   * @type {ItemType}
   */
  whiteGlazedTerracotta;
  /**
   * @type {ItemType}
   */
  witherRose;
  /**
   * @type {ItemType}
   */
  woodenButton;
  /**
   * @type {ItemType}
   */
  woodenPressurePlate;
  /**
   * @type {ItemType}
   */
  yellowCandleCake;
  /**
   * @type {ItemType}
   */
  yellowGlazedTerracotta;
  /**
   * @type {ItemType}
   */
  ["item.acaciaDoor"];
  /**
   * @type {ItemType}
   */
  ["item.bed"];
  /**
   * @type {ItemType}
   */
  ["item.beetroot"];
  /**
   * @type {ItemType}
   */
  ["item.birchDoor"];
  /**
   * @type {ItemType}
   */
  ["item.cake"];
  /**
   * @type {ItemType}
   */
  ["item.camera"];
  /**
   * @type {ItemType}
   */
  ["item.campfire"];
  /**
   * @type {ItemType}
   */
  ["item.cauldron"];
  /**
   * @type {ItemType}
   */
  ["item.chain"];
  /**
   * @type {ItemType}
   */
  ["item.crimsonDoor"];
  /**
   * @type {ItemType}
   */
  ["item.darkOakDoor"];
  /**
   * @type {ItemType}
   */
  ["item.flowerPot"];
  /**
   * @type {ItemType}
   */
  ["item.frame"];
  /**
   * @type {ItemType}
   */
  ["item.glowFrame"];
  /**
   * @type {ItemType}
   */
  ["item.hopper"];
  /**
   * @type {ItemType}
   */
  ["item.ironDoor"];
  /**
   * @type {ItemType}
   */
  ["item.jungleDoor"];
  /**
   * @type {ItemType}
   */
  ["item.kelp"];
  /**
   * @type {ItemType}
   */
  ["item.netherSprouts"];
  /**
   * @type {ItemType}
   */
  ["item.netherWart"];
  /**
   * @type {ItemType}
   */
  ["item.reeds"];
  /**
   * @type {ItemType}
   */
  ["item.skull"];
  /**
   * @type {ItemType}
   */
  ["item.soulCampfire"];
  /**
   * @type {ItemType}
   */
  ["item.spruceDoor"];
  /**
   * @type {ItemType}
   */
  ["item.warpedDoor"];
  /**
   * @type {ItemType}
   */
  ["item.wheat"];
  /**
   * @type {ItemType}
   */
  ["item.woodenDoor"];

  // Namespace
  /**
   * @type {ItemType}
   */
  ["minecraft:air"];
  /**
   * @type {ItemType}
   */
  ["minecraft:apple"];
  /**
   * @type {ItemType}
   */
  ["minecraft:golden_apple"];
  /**
   * @type {ItemType}
   */
  ["minecraft:enchanted_golden_apple"];
  /**
   * @type {ItemType}
   */
  ["minecraft:mushroom_stew"];
  /**
   * @type {ItemType}
   */
  ["minecraft:bread"];
  /**
   * @type {ItemType}
   */
  ["minecraft:porkchop"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cooked_porkchop"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cod"];
  /**
   * @type {ItemType}
   */
  ["minecraft:salmon"];
  /**
   * @type {ItemType}
   */
  ["minecraft:tropical_fish"];
  /**
   * @type {ItemType}
   */
  ["minecraft:pufferfish"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cooked_cod"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cooked_salmon"];
  /**
   * @type {ItemType}
   */
  ["minecraft:dried_kelp"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cookie"];
  /**
   * @type {ItemType}
   */
  ["minecraft:melon_slice"];
  /**
   * @type {ItemType}
   */
  ["minecraft:beef"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cooked_beef"];
  /**
   * @type {ItemType}
   */
  ["minecraft:chicken"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cooked_chicken"];
  /**
   * @type {ItemType}
   */
  ["minecraft:rotten_flesh"];
  /**
   * @type {ItemType}
   */
  ["minecraft:spider_eye"];
  /**
   * @type {ItemType}
   */
  ["minecraft:carrot"];
  /**
   * @type {ItemType}
   */
  ["minecraft:potato"];
  /**
   * @type {ItemType}
   */
  ["minecraft:baked_potato"];
  /**
   * @type {ItemType}
   */
  ["minecraft:poisonous_potato"];
  /**
   * @type {ItemType}
   */
  ["minecraft:golden_carrot"];
  /**
   * @type {ItemType}
   */
  ["minecraft:pumpkin_pie"];
  /**
   * @type {ItemType}
   */
  ["minecraft:beetroot"];
  /**
   * @type {ItemType}
   */
  ["minecraft:beetroot_soup"];
  /**
   * @type {ItemType}
   */
  ["minecraft:sweet_berries"];
  /**
   * @type {ItemType}
   */
  ["minecraft:rabbit"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cooked_rabbit"];
  /**
   * @type {ItemType}
   */
  ["minecraft:rabbit_stew"];
  /**
   * @type {ItemType}
   */
  ["minecraft:wheat_seeds"];
  /**
   * @type {ItemType}
   */
  ["minecraft:pumpkin_seeds"];
  /**
   * @type {ItemType}
   */
  ["minecraft:melon_seeds"];
  /**
   * @type {ItemType}
   */
  ["minecraft:nether_wart"];
  /**
   * @type {ItemType}
   */
  ["minecraft:beetroot_seeds"];
  /**
   * @type {ItemType}
   */
  ["minecraft:iron_shovel"];
  /**
   * @type {ItemType}
   */
  ["minecraft:iron_pickaxe"];
  /**
   * @type {ItemType}
   */
  ["minecraft:iron_axe"];
  /**
   * @type {ItemType}
   */
  ["minecraft:flint_and_steel"];
  /**
   * @type {ItemType}
   */
  ["minecraft:bow"];
  /**
   * @type {ItemType}
   */
  ["minecraft:arrow"];
  /**
   * @type {ItemType}
   */
  ["minecraft:coal"];
  /**
   * @type {ItemType}
   */
  ["minecraft:charcoal"];
  /**
   * @type {ItemType}
   */
  ["minecraft:diamond"];
  /**
   * @type {ItemType}
   */
  ["minecraft:iron_ingot"];
  /**
   * @type {ItemType}
   */
  ["minecraft:gold_ingot"];
  /**
   * @type {ItemType}
   */
  ["minecraft:iron_sword"];
  /**
   * @type {ItemType}
   */
  ["minecraft:wooden_sword"];
  /**
   * @type {ItemType}
   */
  ["minecraft:wooden_shovel"];
  /**
   * @type {ItemType}
   */
  ["minecraft:wooden_pickaxe"];
  /**
   * @type {ItemType}
   */
  ["minecraft:wooden_axe"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stone_sword"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stone_shovel"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stone_pickaxe"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stone_axe"];
  /**
   * @type {ItemType}
   */
  ["minecraft:diamond_sword"];
  /**
   * @type {ItemType}
   */
  ["minecraft:diamond_shovel"];
  /**
   * @type {ItemType}
   */
  ["minecraft:diamond_pickaxe"];
  /**
   * @type {ItemType}
   */
  ["minecraft:diamond_axe"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stick"];
  /**
   * @type {ItemType}
   */
  ["minecraft:bowl"];
  /**
   * @type {ItemType}
   */
  ["minecraft:golden_sword"];
  /**
   * @type {ItemType}
   */
  ["minecraft:golden_shovel"];
  /**
   * @type {ItemType}
   */
  ["minecraft:golden_pickaxe"];
  /**
   * @type {ItemType}
   */
  ["minecraft:golden_axe"];
  /**
   * @type {ItemType}
   */
  ["minecraft:string"];
  /**
   * @type {ItemType}
   */
  ["minecraft:feather"];
  /**
   * @type {ItemType}
   */
  ["minecraft:gunpowder"];
  /**
   * @type {ItemType}
   */
  ["minecraft:wooden_hoe"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stone_hoe"];
  /**
   * @type {ItemType}
   */
  ["minecraft:iron_hoe"];
  /**
   * @type {ItemType}
   */
  ["minecraft:diamond_hoe"];
  /**
   * @type {ItemType}
   */
  ["minecraft:golden_hoe"];
  /**
   * @type {ItemType}
   */
  ["minecraft:wheat"];
  /**
   * @type {ItemType}
   */
  ["minecraft:leather_helmet"];
  /**
   * @type {ItemType}
   */
  ["minecraft:leather_chestplate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:leather_leggings"];
  /**
   * @type {ItemType}
   */
  ["minecraft:leather_boots"];
  /**
   * @type {ItemType}
   */
  ["minecraft:chainmail_helmet"];
  /**
   * @type {ItemType}
   */
  ["minecraft:chainmail_chestplate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:chainmail_leggings"];
  /**
   * @type {ItemType}
   */
  ["minecraft:chainmail_boots"];
  /**
   * @type {ItemType}
   */
  ["minecraft:iron_helmet"];
  /**
   * @type {ItemType}
   */
  ["minecraft:iron_chestplate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:iron_leggings"];
  /**
   * @type {ItemType}
   */
  ["minecraft:iron_boots"];
  /**
   * @type {ItemType}
   */
  ["minecraft:diamond_helmet"];
  /**
   * @type {ItemType}
   */
  ["minecraft:diamond_chestplate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:diamond_leggings"];
  /**
   * @type {ItemType}
   */
  ["minecraft:diamond_boots"];
  /**
   * @type {ItemType}
   */
  ["minecraft:golden_helmet"];
  /**
   * @type {ItemType}
   */
  ["minecraft:golden_chestplate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:golden_leggings"];
  /**
   * @type {ItemType}
   */
  ["minecraft:golden_boots"];
  /**
   * @type {ItemType}
   */
  ["minecraft:shield"];
  /**
   * @type {ItemType}
   */
  ["minecraft:flint"];
  /**
   * @type {ItemType}
   */
  ["minecraft:painting"];
  /**
   * @type {ItemType}
   */
  ["minecraft:oak_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:wooden_door"];
  /**
   * @type {ItemType}
   */
  ["minecraft:bucket"];
  /**
   * @type {ItemType}
   */
  ["minecraft:milk_bucket"];
  /**
   * @type {ItemType}
   */
  ["minecraft:water_bucket"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lava_bucket"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cod_bucket"];
  /**
   * @type {ItemType}
   */
  ["minecraft:salmon_bucket"];
  /**
   * @type {ItemType}
   */
  ["minecraft:tropical_fish_bucket"];
  /**
   * @type {ItemType}
   */
  ["minecraft:pufferfish_bucket"];
  /**
   * @type {ItemType}
   */
  ["minecraft:powder_snow_bucket"];
  /**
   * @type {ItemType}
   */
  ["minecraft:axolotl_bucket"];
  /**
   * @type {ItemType}
   */
  ["minecraft:minecart"];
  /**
   * @type {ItemType}
   */
  ["minecraft:saddle"];
  /**
   * @type {ItemType}
   */
  ["minecraft:iron_door"];
  /**
   * @type {ItemType}
   */
  ["minecraft:redstone"];
  /**
   * @type {ItemType}
   */
  ["minecraft:snowball"];
  /**
   * @type {ItemType}
   */
  ["minecraft:oak_boat"];
  /**
   * @type {ItemType}
   */
  ["minecraft:birch_boat"];
  /**
   * @type {ItemType}
   */
  ["minecraft:jungle_boat"];
  /**
   * @type {ItemType}
   */
  ["minecraft:spruce_boat"];
  /**
   * @type {ItemType}
   */
  ["minecraft:acacia_boat"];
  /**
   * @type {ItemType}
   */
  ["minecraft:dark_oak_boat"];
  /**
   * @type {ItemType}
   */
  ["minecraft:leather"];
  /**
   * @type {ItemType}
   */
  ["minecraft:kelp"];
  /**
   * @type {ItemType}
   */
  ["minecraft:brick"];
  /**
   * @type {ItemType}
   */
  ["minecraft:clay_ball"];
  /**
   * @type {ItemType}
   */
  ["minecraft:sugar_cane"];
  /**
   * @type {ItemType}
   */
  ["minecraft:paper"];
  /**
   * @type {ItemType}
   */
  ["minecraft:book"];
  /**
   * @type {ItemType}
   */
  ["minecraft:slime_ball"];
  /**
   * @type {ItemType}
   */
  ["minecraft:chest_minecart"];
  /**
   * @type {ItemType}
   */
  ["minecraft:egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:compass"];
  /**
   * @type {ItemType}
   */
  ["minecraft:fishing_rod"];
  /**
   * @type {ItemType}
   */
  ["minecraft:clock"];
  /**
   * @type {ItemType}
   */
  ["minecraft:glowstone_dust"];
  /**
   * @type {ItemType}
   */
  ["minecraft:black_dye"];
  /**
   * @type {ItemType}
   */
  ["minecraft:red_dye"];
  /**
   * @type {ItemType}
   */
  ["minecraft:green_dye"];
  /**
   * @type {ItemType}
   */
  ["minecraft:brown_dye"];
  /**
   * @type {ItemType}
   */
  ["minecraft:blue_dye"];
  /**
   * @type {ItemType}
   */
  ["minecraft:purple_dye"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cyan_dye"];
  /**
   * @type {ItemType}
   */
  ["minecraft:light_gray_dye"];
  /**
   * @type {ItemType}
   */
  ["minecraft:gray_dye"];
  /**
   * @type {ItemType}
   */
  ["minecraft:pink_dye"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lime_dye"];
  /**
   * @type {ItemType}
   */
  ["minecraft:yellow_dye"];
  /**
   * @type {ItemType}
   */
  ["minecraft:light_blue_dye"];
  /**
   * @type {ItemType}
   */
  ["minecraft:magenta_dye"];
  /**
   * @type {ItemType}
   */
  ["minecraft:orange_dye"];
  /**
   * @type {ItemType}
   */
  ["minecraft:white_dye"];
  /**
   * @type {ItemType}
   */
  ["minecraft:bone_meal"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cocoa_beans"];
  /**
   * @type {ItemType}
   */
  ["minecraft:ink_sac"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lapis_lazuli"];
  /**
   * @type {ItemType}
   */
  ["minecraft:bone"];
  /**
   * @type {ItemType}
   */
  ["minecraft:sugar"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cake"];
  /**
   * @type {ItemType}
   */
  ["minecraft:bed"];
  /**
   * @type {ItemType}
   */
  ["minecraft:repeater"];
  /**
   * @type {ItemType}
   */
  ["minecraft:filled_map"];
  /**
   * @type {ItemType}
   */
  ["minecraft:shears"];
  /**
   * @type {ItemType}
   */
  ["minecraft:ender_pearl"];
  /**
   * @type {ItemType}
   */
  ["minecraft:blaze_rod"];
  /**
   * @type {ItemType}
   */
  ["minecraft:ghast_tear"];
  /**
   * @type {ItemType}
   */
  ["minecraft:gold_nugget"];
  /**
   * @type {ItemType}
   */
  ["minecraft:potion"];
  /**
   * @type {ItemType}
   */
  ["minecraft:glass_bottle"];
  /**
   * @type {ItemType}
   */
  ["minecraft:fermented_spider_eye"];
  /**
   * @type {ItemType}
   */
  ["minecraft:blaze_powder"];
  /**
   * @type {ItemType}
   */
  ["minecraft:magma_cream"];
  /**
   * @type {ItemType}
   */
  ["minecraft:brewing_stand"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cauldron"];
  /**
   * @type {ItemType}
   */
  ["minecraft:ender_eye"];
  /**
   * @type {ItemType}
   */
  ["minecraft:glistering_melon_slice"];
  /**
   * @type {ItemType}
   */
  ["minecraft:chicken_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cow_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:pig_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:sheep_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:wolf_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:mooshroom_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:creeper_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:enderman_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:silverfish_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:skeleton_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:slime_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:spider_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:zombie_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:zombie_pigman_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:villager_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:squid_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:ocelot_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:witch_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:bat_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:ghast_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:magma_cube_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:blaze_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cave_spider_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:horse_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:rabbit_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:endermite_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:guardian_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stray_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:husk_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:wither_skeleton_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:donkey_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:mule_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:skeleton_horse_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:zombie_horse_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:shulker_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:npc_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:elder_guardian_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:polar_bear_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:llama_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:vindicator_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:evoker_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:vex_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:zombie_villager_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:parrot_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:tropical_fish_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cod_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:pufferfish_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:salmon_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:drowned_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:dolphin_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:turtle_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:phantom_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:agent_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cat_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:panda_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:fox_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:pillager_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:wandering_trader_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:ravager_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:bee_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:strider_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:hoglin_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:piglin_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:zoglin_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:piglin_brute_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:axolotl_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:goat_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:glow_squid_spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:glow_ink_sac"];
  /**
   * @type {ItemType}
   */
  ["minecraft:copper_ingot"];
  /**
   * @type {ItemType}
   */
  ["minecraft:copper_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cut_copper"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cut_copper_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cut_copper_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:exposed_cut_copper_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:weathered_cut_copper_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:oxidized_cut_copper_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:waxed_cut_copper_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:waxed_exposed_cut_copper_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:waxed_weathered_cut_copper_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:waxed_oxidized_cut_copper_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:raw_iron"];
  /**
   * @type {ItemType}
   */
  ["minecraft:raw_gold"];
  /**
   * @type {ItemType}
   */
  ["minecraft:raw_copper"];
  /**
   * @type {ItemType}
   */
  ["minecraft:experience_bottle"];
  /**
   * @type {ItemType}
   */
  ["minecraft:fire_charge"];
  /**
   * @type {ItemType}
   */
  ["minecraft:writable_book"];
  /**
   * @type {ItemType}
   */
  ["minecraft:written_book"];
  /**
   * @type {ItemType}
   */
  ["minecraft:emerald"];
  /**
   * @type {ItemType}
   */
  ["minecraft:frame"];
  /**
   * @type {ItemType}
   */
  ["minecraft:flower_pot"];
  /**
   * @type {ItemType}
   */
  ["minecraft:empty_map"];
  /**
   * @type {ItemType}
   */
  ["minecraft:skull"];
  /**
   * @type {ItemType}
   */
  ["minecraft:carrot_on_a_stick"];
  /**
   * @type {ItemType}
   */
  ["minecraft:nether_star"];
  /**
   * @type {ItemType}
   */
  ["minecraft:firework_rocket"];
  /**
   * @type {ItemType}
   */
  ["minecraft:firework_star"];
  /**
   * @type {ItemType}
   */
  ["minecraft:enchanted_book"];
  /**
   * @type {ItemType}
   */
  ["minecraft:comparator"];
  /**
   * @type {ItemType}
   */
  ["minecraft:netherbrick"];
  /**
   * @type {ItemType}
   */
  ["minecraft:quartz"];
  /**
   * @type {ItemType}
   */
  ["minecraft:tnt_minecart"];
  /**
   * @type {ItemType}
   */
  ["minecraft:hopper_minecart"];
  /**
   * @type {ItemType}
   */
  ["minecraft:hopper"];
  /**
   * @type {ItemType}
   */
  ["minecraft:rabbit_foot"];
  /**
   * @type {ItemType}
   */
  ["minecraft:rabbit_hide"];
  /**
   * @type {ItemType}
   */
  ["minecraft:leather_horse_armor"];
  /**
   * @type {ItemType}
   */
  ["minecraft:iron_horse_armor"];
  /**
   * @type {ItemType}
   */
  ["minecraft:golden_horse_armor"];
  /**
   * @type {ItemType}
   */
  ["minecraft:diamond_horse_armor"];
  /**
   * @type {ItemType}
   */
  ["minecraft:music_disc_13"];
  /**
   * @type {ItemType}
   */
  ["minecraft:music_disc_cat"];
  /**
   * @type {ItemType}
   */
  ["minecraft:music_disc_blocks"];
  /**
   * @type {ItemType}
   */
  ["minecraft:music_disc_chirp"];
  /**
   * @type {ItemType}
   */
  ["minecraft:music_disc_far"];
  /**
   * @type {ItemType}
   */
  ["minecraft:music_disc_mall"];
  /**
   * @type {ItemType}
   */
  ["minecraft:music_disc_mellohi"];
  /**
   * @type {ItemType}
   */
  ["minecraft:music_disc_stal"];
  /**
   * @type {ItemType}
   */
  ["minecraft:music_disc_strad"];
  /**
   * @type {ItemType}
   */
  ["minecraft:music_disc_ward"];
  /**
   * @type {ItemType}
   */
  ["minecraft:music_disc_11"];
  /**
   * @type {ItemType}
   */
  ["minecraft:music_disc_wait"];
  /**
   * @type {ItemType}
   */
  ["minecraft:trident"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lead"];
  /**
   * @type {ItemType}
   */
  ["minecraft:name_tag"];
  /**
   * @type {ItemType}
   */
  ["minecraft:prismarine_crystals"];
  /**
   * @type {ItemType}
   */
  ["minecraft:mutton"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cooked_mutton"];
  /**
   * @type {ItemType}
   */
  ["minecraft:armor_stand"];
  /**
   * @type {ItemType}
   */
  ["minecraft:spruce_door"];
  /**
   * @type {ItemType}
   */
  ["minecraft:birch_door"];
  /**
   * @type {ItemType}
   */
  ["minecraft:jungle_door"];
  /**
   * @type {ItemType}
   */
  ["minecraft:acacia_door"];
  /**
   * @type {ItemType}
   */
  ["minecraft:dark_oak_door"];
  /**
   * @type {ItemType}
   */
  ["minecraft:chorus_fruit"];
  /**
   * @type {ItemType}
   */
  ["minecraft:popped_chorus_fruit"];
  /**
   * @type {ItemType}
   */
  ["minecraft:dragon_breath"];
  /**
   * @type {ItemType}
   */
  ["minecraft:splash_potion"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lingering_potion"];
  /**
   * @type {ItemType}
   */
  ["minecraft:command_block_minecart"];
  /**
   * @type {ItemType}
   */
  ["minecraft:elytra"];
  /**
   * @type {ItemType}
   */
  ["minecraft:prismarine_shard"];
  /**
   * @type {ItemType}
   */
  ["minecraft:shulker_shell"];
  /**
   * @type {ItemType}
   */
  ["minecraft:banner"];
  /**
   * @type {ItemType}
   */
  ["minecraft:totem_of_undying"];
  /**
   * @type {ItemType}
   */
  ["minecraft:iron_nugget"];
  /**
   * @type {ItemType}
   */
  ["minecraft:nautilus_shell"];
  /**
   * @type {ItemType}
   */
  ["minecraft:heart_of_the_sea"];
  /**
   * @type {ItemType}
   */
  ["minecraft:scute"];
  /**
   * @type {ItemType}
   */
  ["minecraft:turtle_helmet"];
  /**
   * @type {ItemType}
   */
  ["minecraft:phantom_membrane"];
  /**
   * @type {ItemType}
   */
  ["minecraft:crossbow"];
  /**
   * @type {ItemType}
   */
  ["minecraft:spruce_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:birch_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:jungle_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:acacia_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:dark_oak_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:flower_banner_pattern"];
  /**
   * @type {ItemType}
   */
  ["minecraft:creeper_banner_pattern"];
  /**
   * @type {ItemType}
   */
  ["minecraft:skull_banner_pattern"];
  /**
   * @type {ItemType}
   */
  ["minecraft:mojang_banner_pattern"];
  /**
   * @type {ItemType}
   */
  ["minecraft:field_masoned_banner_pattern"];
  /**
   * @type {ItemType}
   */
  ["minecraft:bordure_indented_banner_pattern"];
  /**
   * @type {ItemType}
   */
  ["minecraft:piglin_banner_pattern"];
  /**
   * @type {ItemType}
   */
  ["minecraft:campfire"];
  /**
   * @type {ItemType}
   */
  ["minecraft:suspicious_stew"];
  /**
   * @type {ItemType}
   */
  ["minecraft:honeycomb"];
  /**
   * @type {ItemType}
   */
  ["minecraft:honey_bottle"];
  /**
   * @type {ItemType}
   */
  ["minecraft:camera"];
  /**
   * @type {ItemType}
   */
  ["minecraft:compound"];
  /**
   * @type {ItemType}
   */
  ["minecraft:ice_bomb"];
  /**
   * @type {ItemType}
   */
  ["minecraft:bleach"];
  /**
   * @type {ItemType}
   */
  ["minecraft:rapid_fertilizer"];
  /**
   * @type {ItemType}
   */
  ["minecraft:balloon"];
  /**
   * @type {ItemType}
   */
  ["minecraft:medicine"];
  /**
   * @type {ItemType}
   */
  ["minecraft:sparkler"];
  /**
   * @type {ItemType}
   */
  ["minecraft:glow_stick"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lodestone_compass"];
  /**
   * @type {ItemType}
   */
  ["minecraft:netherite_ingot"];
  /**
   * @type {ItemType}
   */
  ["minecraft:netherite_sword"];
  /**
   * @type {ItemType}
   */
  ["minecraft:netherite_shovel"];
  /**
   * @type {ItemType}
   */
  ["minecraft:netherite_pickaxe"];
  /**
   * @type {ItemType}
   */
  ["minecraft:netherite_axe"];
  /**
   * @type {ItemType}
   */
  ["minecraft:netherite_hoe"];
  /**
   * @type {ItemType}
   */
  ["minecraft:netherite_helmet"];
  /**
   * @type {ItemType}
   */
  ["minecraft:netherite_chestplate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:netherite_leggings"];
  /**
   * @type {ItemType}
   */
  ["minecraft:netherite_boots"];
  /**
   * @type {ItemType}
   */
  ["minecraft:netherite_scrap"];
  /**
   * @type {ItemType}
   */
  ["minecraft:crimson_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:warped_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:crimson_door"];
  /**
   * @type {ItemType}
   */
  ["minecraft:warped_door"];
  /**
   * @type {ItemType}
   */
  ["minecraft:warped_fungus_on_a_stick"];
  /**
   * @type {ItemType}
   */
  ["minecraft:chain"];
  /**
   * @type {ItemType}
   */
  ["minecraft:music_disc_pigstep"];
  /**
   * @type {ItemType}
   */
  ["minecraft:nether_sprouts"];
  /**
   * @type {ItemType}
   */
  ["minecraft:blackstone_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:polished_blackstone_brick_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:polished_blackstone_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:soul_campfire"];
  /**
   * @type {ItemType}
   */
  ["minecraft:glow_frame"];
  /**
   * @type {ItemType}
   */
  ["minecraft:goat_horn"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cobbled_deepslate_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:polished_deepslate_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:deepslate_tile_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:deepslate_brick_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:amethyst_shard"];
  /**
   * @type {ItemType}
   */
  ["minecraft:spyglass"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stone"];
  /**
   * @type {ItemType}
   */
  ["minecraft:dirt"];
  /**
   * @type {ItemType}
   */
  ["minecraft:farmland"];
  /**
   * @type {ItemType}
   */
  ["minecraft:sand"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stained_hardened_clay"];
  /**
   * @type {ItemType}
   */
  ["minecraft:wool"];
  /**
   * @type {ItemType}
   */
  ["minecraft:carpet"];
  /**
   * @type {ItemType}
   */
  ["minecraft:log"];
  /**
   * @type {ItemType}
   */
  ["minecraft:fence"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stonebrick"];
  /**
   * @type {ItemType}
   */
  ["minecraft:coral_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:double_stone_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:double_stone_slab2"];
  /**
   * @type {ItemType}
   */
  ["minecraft:double_stone_slab3"];
  /**
   * @type {ItemType}
   */
  ["minecraft:double_stone_slab4"];
  /**
   * @type {ItemType}
   */
  ["minecraft:real_double_stone_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:real_double_stone_slab2"];
  /**
   * @type {ItemType}
   */
  ["minecraft:real_double_stone_slab3"];
  /**
   * @type {ItemType}
   */
  ["minecraft:real_double_stone_slab4"];
  /**
   * @type {ItemType}
   */
  ["minecraft:coral_fan"];
  /**
   * @type {ItemType}
   */
  ["minecraft:coral_fan_dead"];
  /**
   * @type {ItemType}
   */
  ["minecraft:sea_pickle"];
  /**
   * @type {ItemType}
   */
  ["minecraft:sapling"];
  /**
   * @type {ItemType}
   */
  ["minecraft:leaves"];
  /**
   * @type {ItemType}
   */
  ["minecraft:leaves2"];
  /**
   * @type {ItemType}
   */
  ["minecraft:azalea_leaves"];
  /**
   * @type {ItemType}
   */
  ["minecraft:azalea_leaves_flowered"];
  /**
   * @type {ItemType}
   */
  ["minecraft:sandstone"];
  /**
   * @type {ItemType}
   */
  ["minecraft:red_sandstone"];
  /**
   * @type {ItemType}
   */
  ["minecraft:wooden_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:crimson_roots"];
  /**
   * @type {ItemType}
   */
  ["minecraft:warped_roots"];
  /**
   * @type {ItemType}
   */
  ["minecraft:yellow_flower"];
  /**
   * @type {ItemType}
   */
  ["minecraft:red_flower"];
  /**
   * @type {ItemType}
   */
  ["minecraft:double_plant"];
  /**
   * @type {ItemType}
   */
  ["minecraft:waterlily"];
  /**
   * @type {ItemType}
   */
  ["minecraft:sponge"];
  /**
   * @type {ItemType}
   */
  ["minecraft:snow_layer"];
  /**
   * @type {ItemType}
   */
  ["minecraft:planks"];
  /**
   * @type {ItemType}
   */
  ["minecraft:quartz_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:purpur_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cobblestone_wall"];
  /**
   * @type {ItemType}
   */
  ["minecraft:coral"];
  /**
   * @type {ItemType}
   */
  ["minecraft:tallgrass"];
  /**
   * @type {ItemType}
   */
  ["minecraft:seagrass"];
  /**
   * @type {ItemType}
   */
  ["minecraft:brown_mushroom_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:red_mushroom_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:log2"];
  /**
   * @type {ItemType}
   */
  ["minecraft:end_portal_frame"];
  /**
   * @type {ItemType}
   */
  ["minecraft:anvil"];
  /**
   * @type {ItemType}
   */
  ["minecraft:monster_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:brewingstandblock"];
  /**
   * @type {ItemType}
   */
  ["minecraft:beacon"];
  /**
   * @type {ItemType}
   */
  ["minecraft:conduit"];
  /**
   * @type {ItemType}
   */
  ["minecraft:prismarine"];
  /**
   * @type {ItemType}
   */
  ["minecraft:sealantern"];
  /**
   * @type {ItemType}
   */
  ["minecraft:concrete"];
  /**
   * @type {ItemType}
   */
  ["minecraft:concrete_powder"];
  /**
   * @type {ItemType}
   */
  ["minecraft:magma"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stained_glass"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stained_glass_pane"];
  /**
   * @type {ItemType}
   */
  ["minecraft:undyed_shulker_box"];
  /**
   * @type {ItemType}
   */
  ["minecraft:shulker_box"];
  /**
   * @type {ItemType}
   */
  ["minecraft:piston"];
  /**
   * @type {ItemType}
   */
  ["minecraft:sticky_piston"];
  /**
   * @type {ItemType}
   */
  ["minecraft:turtle_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:bamboo"];
  /**
   * @type {ItemType}
   */
  ["minecraft:scaffolding"];
  /**
   * @type {ItemType}
   */
  ["minecraft:blast_furnace"];
  /**
   * @type {ItemType}
   */
  ["minecraft:smoker"];
  /**
   * @type {ItemType}
   */
  ["minecraft:smithing_table"];
  /**
   * @type {ItemType}
   */
  ["minecraft:barrel"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lantern"];
  /**
   * @type {ItemType}
   */
  ["minecraft:loom"];
  /**
   * @type {ItemType}
   */
  ["minecraft:grindstone"];
  /**
   * @type {ItemType}
   */
  ["minecraft:bell"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cartography_table"];
  /**
   * @type {ItemType}
   */
  ["minecraft:fletching_table"];
  /**
   * @type {ItemType}
   */
  ["minecraft:wood"];
  /**
   * @type {ItemType}
   */
  ["minecraft:chemistry_table"];
  /**
   * @type {ItemType}
   */
  ["minecraft:tnt"];
  /**
   * @type {ItemType}
   */
  ["minecraft:hard_stained_glass"];
  /**
   * @type {ItemType}
   */
  ["minecraft:hard_stained_glass_pane"];
  /**
   * @type {ItemType}
   */
  ["minecraft:colored_torch_rg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:colored_torch_bp"];
  /**
   * @type {ItemType}
   */
  ["minecraft:light_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:pumpkin"];
  /**
   * @type {ItemType}
   */
  ["minecraft:carved_pumpkin"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lit_pumpkin"];
  /**
   * @type {ItemType}
   */
  ["minecraft:crimson_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:warped_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:candle"];
  /**
   * @type {ItemType}
   */
  ["minecraft:white_candle"];
  /**
   * @type {ItemType}
   */
  ["minecraft:orange_candle"];
  /**
   * @type {ItemType}
   */
  ["minecraft:magenta_candle"];
  /**
   * @type {ItemType}
   */
  ["minecraft:light_blue_candle"];
  /**
   * @type {ItemType}
   */
  ["minecraft:yellow_candle"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lime_candle"];
  /**
   * @type {ItemType}
   */
  ["minecraft:pink_candle"];
  /**
   * @type {ItemType}
   */
  ["minecraft:gray_candle"];
  /**
   * @type {ItemType}
   */
  ["minecraft:light_gray_candle"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cyan_candle"];
  /**
   * @type {ItemType}
   */
  ["minecraft:purple_candle"];
  /**
   * @type {ItemType}
   */
  ["minecraft:blue_candle"];
  /**
   * @type {ItemType}
   */
  ["minecraft:brown_candle"];
  /**
   * @type {ItemType}
   */
  ["minecraft:green_candle"];
  /**
   * @type {ItemType}
   */
  ["minecraft:red_candle"];
  /**
   * @type {ItemType}
   */
  ["minecraft:black_candle"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_0"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_1"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_2"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_3"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_4"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_5"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_6"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_7"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_8"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_9"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_10"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_11"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_12"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_13"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_14"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_15"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_16"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_17"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_18"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_19"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_20"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_21"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_22"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_23"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_24"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_25"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_26"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_27"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_28"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_29"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_30"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_31"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_32"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_33"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_34"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_35"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_36"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_37"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_38"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_39"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_40"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_41"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_42"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_43"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_44"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_45"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_46"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_47"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_48"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_49"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_50"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_51"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_52"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_53"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_54"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_55"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_56"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_57"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_58"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_59"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_60"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_61"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_62"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_63"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_64"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_65"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_66"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_67"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_68"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_69"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_70"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_71"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_72"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_73"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_74"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_75"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_76"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_77"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_78"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_79"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_80"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_81"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_82"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_83"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_84"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_85"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_86"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_87"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_88"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_89"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_90"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_91"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_92"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_93"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_94"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_95"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_96"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_97"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_98"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_99"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_100"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_101"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_102"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_103"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_104"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_105"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_106"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_107"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_108"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_109"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_110"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_111"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_112"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_113"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_114"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_115"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_116"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_117"];
  /**
   * @type {ItemType}
   */
  ["minecraft:element_118"];
  /**
   * @type {ItemType}
   */
  ["minecraft:composter"];
  /**
   * @type {ItemType}
   */
  ["minecraft:netherite_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:ancient_debris"];
  /**
   * @type {ItemType}
   */
  ["minecraft:respawn_anchor"];
  /**
   * @type {ItemType}
   */
  ["minecraft:crying_obsidian"];
  /**
   * @type {ItemType}
   */
  ["minecraft:boat"];
  /**
   * @type {ItemType}
   */
  ["minecraft:dye"];
  /**
   * @type {ItemType}
   */
  ["minecraft:banner_pattern"];
  /**
   * @type {ItemType}
   */
  ["minecraft:spawn_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:end_crystal"];
  /**
   * @type {ItemType}
   */
  ["minecraft:glow_berries"];
  /**
   * @type {ItemType}
   */
  ["minecraft:acacia_button"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.acacia_door"];
  /**
   * @type {ItemType}
   */
  ["minecraft:acacia_fence_gate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:acacia_pressure_plate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:acacia_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:acacia_standing_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:acacia_trapdoor"];
  /**
   * @type {ItemType}
   */
  ["minecraft:acacia_wall_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:activator_rail"];
  /**
   * @type {ItemType}
   */
  ["minecraft:allow"];
  /**
   * @type {ItemType}
   */
  ["minecraft:amethyst_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:amethyst_cluster"];
  /**
   * @type {ItemType}
   */
  ["minecraft:andesite_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:azalea"];
  /**
   * @type {ItemType}
   */
  ["minecraft:bamboo_sapling"];
  /**
   * @type {ItemType}
   */
  ["minecraft:barrier"];
  /**
   * @type {ItemType}
   */
  ["minecraft:basalt"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.bed"];
  /**
   * @type {ItemType}
   */
  ["minecraft:bedrock"];
  /**
   * @type {ItemType}
   */
  ["minecraft:bee_nest"];
  /**
   * @type {ItemType}
   */
  ["minecraft:beehive"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.beetroot"];
  /**
   * @type {ItemType}
   */
  ["minecraft:big_dripleaf"];
  /**
   * @type {ItemType}
   */
  ["minecraft:birch_button"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.birch_door"];
  /**
   * @type {ItemType}
   */
  ["minecraft:birch_fence_gate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:birch_pressure_plate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:birch_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:birch_standing_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:birch_trapdoor"];
  /**
   * @type {ItemType}
   */
  ["minecraft:birch_wall_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:black_candle_cake"];
  /**
   * @type {ItemType}
   */
  ["minecraft:black_glazed_terracotta"];
  /**
   * @type {ItemType}
   */
  ["minecraft:blackstone"];
  /**
   * @type {ItemType}
   */
  ["minecraft:blackstone_double_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:blackstone_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:blackstone_wall"];
  /**
   * @type {ItemType}
   */
  ["minecraft:blue_candle_cake"];
  /**
   * @type {ItemType}
   */
  ["minecraft:blue_glazed_terracotta"];
  /**
   * @type {ItemType}
   */
  ["minecraft:blue_ice"];
  /**
   * @type {ItemType}
   */
  ["minecraft:bone_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:bookshelf"];
  /**
   * @type {ItemType}
   */
  ["minecraft:border_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:brick_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:brick_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:brown_candle_cake"];
  /**
   * @type {ItemType}
   */
  ["minecraft:brown_glazed_terracotta"];
  /**
   * @type {ItemType}
   */
  ["minecraft:brown_mushroom"];
  /**
   * @type {ItemType}
   */
  ["minecraft:bubble_column"];
  /**
   * @type {ItemType}
   */
  ["minecraft:budding_amethyst"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cactus"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.cake"];
  /**
   * @type {ItemType}
   */
  ["minecraft:calcite"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.camera"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.campfire"];
  /**
   * @type {ItemType}
   */
  ["minecraft:candle_cake"];
  /**
   * @type {ItemType}
   */
  ["minecraft:carrots"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.cauldron"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cave_vines"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cave_vines_body_with_berries"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cave_vines_head_with_berries"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.chain"];
  /**
   * @type {ItemType}
   */
  ["minecraft:chain_command_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:chemical_heat"];
  /**
   * @type {ItemType}
   */
  ["minecraft:chest"];
  /**
   * @type {ItemType}
   */
  ["minecraft:chiseled_deepslate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:chiseled_nether_bricks"];
  /**
   * @type {ItemType}
   */
  ["minecraft:chiseled_polished_blackstone"];
  /**
   * @type {ItemType}
   */
  ["minecraft:chorus_flower"];
  /**
   * @type {ItemType}
   */
  ["minecraft:chorus_plant"];
  /**
   * @type {ItemType}
   */
  ["minecraft:clay"];
  /**
   * @type {ItemType}
   */
  ["minecraft:coal_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:coal_ore"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cobbled_deepslate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cobbled_deepslate_double_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cobbled_deepslate_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cobbled_deepslate_wall"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cobblestone"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cocoa"];
  /**
   * @type {ItemType}
   */
  ["minecraft:command_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:copper_ore"];
  /**
   * @type {ItemType}
   */
  ["minecraft:coral_fan_hang"];
  /**
   * @type {ItemType}
   */
  ["minecraft:coral_fan_hang2"];
  /**
   * @type {ItemType}
   */
  ["minecraft:coral_fan_hang3"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cracked_deepslate_bricks"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cracked_deepslate_tiles"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cracked_nether_bricks"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cracked_polished_blackstone_bricks"];
  /**
   * @type {ItemType}
   */
  ["minecraft:crafting_table"];
  /**
   * @type {ItemType}
   */
  ["minecraft:crimson_button"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.crimson_door"];
  /**
   * @type {ItemType}
   */
  ["minecraft:crimson_double_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:crimson_fence"];
  /**
   * @type {ItemType}
   */
  ["minecraft:crimson_fence_gate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:crimson_fungus"];
  /**
   * @type {ItemType}
   */
  ["minecraft:crimson_hyphae"];
  /**
   * @type {ItemType}
   */
  ["minecraft:crimson_nylium"];
  /**
   * @type {ItemType}
   */
  ["minecraft:crimson_planks"];
  /**
   * @type {ItemType}
   */
  ["minecraft:crimson_pressure_plate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:crimson_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:crimson_standing_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:crimson_stem"];
  /**
   * @type {ItemType}
   */
  ["minecraft:crimson_trapdoor"];
  /**
   * @type {ItemType}
   */
  ["minecraft:crimson_wall_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cyan_candle_cake"];
  /**
   * @type {ItemType}
   */
  ["minecraft:cyan_glazed_terracotta"];
  /**
   * @type {ItemType}
   */
  ["minecraft:dark_oak_button"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.dark_oak_door"];
  /**
   * @type {ItemType}
   */
  ["minecraft:dark_oak_fence_gate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:dark_oak_pressure_plate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:dark_oak_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:dark_oak_trapdoor"];
  /**
   * @type {ItemType}
   */
  ["minecraft:dark_prismarine_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:darkoak_standing_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:darkoak_wall_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:daylight_detector"];
  /**
   * @type {ItemType}
   */
  ["minecraft:daylight_detector_inverted"];
  /**
   * @type {ItemType}
   */
  ["minecraft:deadbush"];
  /**
   * @type {ItemType}
   */
  ["minecraft:deepslate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:deepslate_brick_double_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:deepslate_brick_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:deepslate_brick_wall"];
  /**
   * @type {ItemType}
   */
  ["minecraft:deepslate_bricks"];
  /**
   * @type {ItemType}
   */
  ["minecraft:deepslate_coal_ore"];
  /**
   * @type {ItemType}
   */
  ["minecraft:deepslate_copper_ore"];
  /**
   * @type {ItemType}
   */
  ["minecraft:deepslate_diamond_ore"];
  /**
   * @type {ItemType}
   */
  ["minecraft:deepslate_emerald_ore"];
  /**
   * @type {ItemType}
   */
  ["minecraft:deepslate_gold_ore"];
  /**
   * @type {ItemType}
   */
  ["minecraft:deepslate_iron_ore"];
  /**
   * @type {ItemType}
   */
  ["minecraft:deepslate_lapis_ore"];
  /**
   * @type {ItemType}
   */
  ["minecraft:deepslate_redstone_ore"];
  /**
   * @type {ItemType}
   */
  ["minecraft:deepslate_tile_double_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:deepslate_tile_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:deepslate_tile_wall"];
  /**
   * @type {ItemType}
   */
  ["minecraft:deepslate_tiles"];
  /**
   * @type {ItemType}
   */
  ["minecraft:deny"];
  /**
   * @type {ItemType}
   */
  ["minecraft:detector_rail"];
  /**
   * @type {ItemType}
   */
  ["minecraft:diamond_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:diamond_ore"];
  /**
   * @type {ItemType}
   */
  ["minecraft:diorite_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:dirt_with_roots"];
  /**
   * @type {ItemType}
   */
  ["minecraft:dispenser"];
  /**
   * @type {ItemType}
   */
  ["minecraft:double_cut_copper_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:double_wooden_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:dragon_egg"];
  /**
   * @type {ItemType}
   */
  ["minecraft:dried_kelp_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:dripstone_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:dropper"];
  /**
   * @type {ItemType}
   */
  ["minecraft:emerald_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:emerald_ore"];
  /**
   * @type {ItemType}
   */
  ["minecraft:enchanting_table"];
  /**
   * @type {ItemType}
   */
  ["minecraft:end_brick_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:end_bricks"];
  /**
   * @type {ItemType}
   */
  ["minecraft:end_gateway"];
  /**
   * @type {ItemType}
   */
  ["minecraft:end_portal"];
  /**
   * @type {ItemType}
   */
  ["minecraft:end_rod"];
  /**
   * @type {ItemType}
   */
  ["minecraft:end_stone"];
  /**
   * @type {ItemType}
   */
  ["minecraft:ender_chest"];
  /**
   * @type {ItemType}
   */
  ["minecraft:exposed_copper"];
  /**
   * @type {ItemType}
   */
  ["minecraft:exposed_cut_copper"];
  /**
   * @type {ItemType}
   */
  ["minecraft:exposed_cut_copper_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:exposed_double_cut_copper_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:fence_gate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:fire"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.flower_pot"];
  /**
   * @type {ItemType}
   */
  ["minecraft:flowering_azalea"];
  /**
   * @type {ItemType}
   */
  ["minecraft:flowing_lava"];
  /**
   * @type {ItemType}
   */
  ["minecraft:flowing_water"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.frame"];
  /**
   * @type {ItemType}
   */
  ["minecraft:frosted_ice"];
  /**
   * @type {ItemType}
   */
  ["minecraft:furnace"];
  /**
   * @type {ItemType}
   */
  ["minecraft:gilded_blackstone"];
  /**
   * @type {ItemType}
   */
  ["minecraft:glass"];
  /**
   * @type {ItemType}
   */
  ["minecraft:glass_pane"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.glow_frame"];
  /**
   * @type {ItemType}
   */
  ["minecraft:glow_lichen"];
  /**
   * @type {ItemType}
   */
  ["minecraft:glowingobsidian"];
  /**
   * @type {ItemType}
   */
  ["minecraft:glowstone"];
  /**
   * @type {ItemType}
   */
  ["minecraft:gold_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:gold_ore"];
  /**
   * @type {ItemType}
   */
  ["minecraft:golden_rail"];
  /**
   * @type {ItemType}
   */
  ["minecraft:granite_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:grass"];
  /**
   * @type {ItemType}
   */
  ["minecraft:grass_path"];
  /**
   * @type {ItemType}
   */
  ["minecraft:gravel"];
  /**
   * @type {ItemType}
   */
  ["minecraft:gray_candle_cake"];
  /**
   * @type {ItemType}
   */
  ["minecraft:gray_glazed_terracotta"];
  /**
   * @type {ItemType}
   */
  ["minecraft:green_candle_cake"];
  /**
   * @type {ItemType}
   */
  ["minecraft:green_glazed_terracotta"];
  /**
   * @type {ItemType}
   */
  ["minecraft:hanging_roots"];
  /**
   * @type {ItemType}
   */
  ["minecraft:hard_glass"];
  /**
   * @type {ItemType}
   */
  ["minecraft:hard_glass_pane"];
  /**
   * @type {ItemType}
   */
  ["minecraft:hardened_clay"];
  /**
   * @type {ItemType}
   */
  ["minecraft:hay_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:heavy_weighted_pressure_plate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:honey_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:honeycomb_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.hopper"];
  /**
   * @type {ItemType}
   */
  ["minecraft:ice"];
  /**
   * @type {ItemType}
   */
  ["minecraft:infested_deepslate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:info_update"];
  /**
   * @type {ItemType}
   */
  ["minecraft:info_update2"];
  /**
   * @type {ItemType}
   */
  ["minecraft:invisiblebedrock"];
  /**
   * @type {ItemType}
   */
  ["minecraft:iron_bars"];
  /**
   * @type {ItemType}
   */
  ["minecraft:iron_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.iron_door"];
  /**
   * @type {ItemType}
   */
  ["minecraft:iron_ore"];
  /**
   * @type {ItemType}
   */
  ["minecraft:iron_trapdoor"];
  /**
   * @type {ItemType}
   */
  ["minecraft:jigsaw"];
  /**
   * @type {ItemType}
   */
  ["minecraft:jukebox"];
  /**
   * @type {ItemType}
   */
  ["minecraft:jungle_button"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.jungle_door"];
  /**
   * @type {ItemType}
   */
  ["minecraft:jungle_fence_gate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:jungle_pressure_plate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:jungle_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:jungle_standing_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:jungle_trapdoor"];
  /**
   * @type {ItemType}
   */
  ["minecraft:jungle_wall_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.kelp"];
  /**
   * @type {ItemType}
   */
  ["minecraft:ladder"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lapis_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lapis_ore"];
  /**
   * @type {ItemType}
   */
  ["minecraft:large_amethyst_bud"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lava"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lava_cauldron"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lectern"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lever"];
  /**
   * @type {ItemType}
   */
  ["minecraft:light_blue_candle_cake"];
  /**
   * @type {ItemType}
   */
  ["minecraft:light_blue_glazed_terracotta"];
  /**
   * @type {ItemType}
   */
  ["minecraft:light_gray_candle_cake"];
  /**
   * @type {ItemType}
   */
  ["minecraft:light_weighted_pressure_plate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lightning_rod"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lime_candle_cake"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lime_glazed_terracotta"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lit_blast_furnace"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lit_deepslate_redstone_ore"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lit_furnace"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lit_redstone_lamp"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lit_redstone_ore"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lit_smoker"];
  /**
   * @type {ItemType}
   */
  ["minecraft:lodestone"];
  /**
   * @type {ItemType}
   */
  ["minecraft:magenta_candle_cake"];
  /**
   * @type {ItemType}
   */
  ["minecraft:magenta_glazed_terracotta"];
  /**
   * @type {ItemType}
   */
  ["minecraft:medium_amethyst_bud"];
  /**
   * @type {ItemType}
   */
  ["minecraft:melon_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:melon_stem"];
  /**
   * @type {ItemType}
   */
  ["minecraft:mob_spawner"];
  /**
   * @type {ItemType}
   */
  ["minecraft:moss_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:moss_carpet"];
  /**
   * @type {ItemType}
   */
  ["minecraft:mossy_cobblestone"];
  /**
   * @type {ItemType}
   */
  ["minecraft:mossy_cobblestone_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:mossy_stone_brick_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:movingblock"];
  /**
   * @type {ItemType}
   */
  ["minecraft:mycelium"];
  /**
   * @type {ItemType}
   */
  ["minecraft:nether_brick"];
  /**
   * @type {ItemType}
   */
  ["minecraft:nether_brick_fence"];
  /**
   * @type {ItemType}
   */
  ["minecraft:nether_brick_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:nether_gold_ore"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.nether_sprouts"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.nether_wart"];
  /**
   * @type {ItemType}
   */
  ["minecraft:nether_wart_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:netherrack"];
  /**
   * @type {ItemType}
   */
  ["minecraft:netherreactor"];
  /**
   * @type {ItemType}
   */
  ["minecraft:normal_stone_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:noteblock"];
  /**
   * @type {ItemType}
   */
  ["minecraft:oak_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:observer"];
  /**
   * @type {ItemType}
   */
  ["minecraft:obsidian"];
  /**
   * @type {ItemType}
   */
  ["minecraft:orange_candle_cake"];
  /**
   * @type {ItemType}
   */
  ["minecraft:orange_glazed_terracotta"];
  /**
   * @type {ItemType}
   */
  ["minecraft:oxidized_copper"];
  /**
   * @type {ItemType}
   */
  ["minecraft:oxidized_cut_copper"];
  /**
   * @type {ItemType}
   */
  ["minecraft:oxidized_cut_copper_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:oxidized_double_cut_copper_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:packed_ice"];
  /**
   * @type {ItemType}
   */
  ["minecraft:pink_candle_cake"];
  /**
   * @type {ItemType}
   */
  ["minecraft:pink_glazed_terracotta"];
  /**
   * @type {ItemType}
   */
  ["minecraft:pistonarmcollision"];
  /**
   * @type {ItemType}
   */
  ["minecraft:podzol"];
  /**
   * @type {ItemType}
   */
  ["minecraft:pointed_dripstone"];
  /**
   * @type {ItemType}
   */
  ["minecraft:polished_andesite_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:polished_basalt"];
  /**
   * @type {ItemType}
   */
  ["minecraft:polished_blackstone"];
  /**
   * @type {ItemType}
   */
  ["minecraft:polished_blackstone_brick_double_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:polished_blackstone_brick_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:polished_blackstone_brick_wall"];
  /**
   * @type {ItemType}
   */
  ["minecraft:polished_blackstone_bricks"];
  /**
   * @type {ItemType}
   */
  ["minecraft:polished_blackstone_button"];
  /**
   * @type {ItemType}
   */
  ["minecraft:polished_blackstone_double_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:polished_blackstone_pressure_plate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:polished_blackstone_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:polished_blackstone_wall"];
  /**
   * @type {ItemType}
   */
  ["minecraft:polished_deepslate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:polished_deepslate_double_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:polished_deepslate_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:polished_deepslate_wall"];
  /**
   * @type {ItemType}
   */
  ["minecraft:polished_diorite_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:polished_granite_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:portal"];
  /**
   * @type {ItemType}
   */
  ["minecraft:potatoes"];
  /**
   * @type {ItemType}
   */
  ["minecraft:powder_snow"];
  /**
   * @type {ItemType}
   */
  ["minecraft:powered_comparator"];
  /**
   * @type {ItemType}
   */
  ["minecraft:powered_repeater"];
  /**
   * @type {ItemType}
   */
  ["minecraft:prismarine_bricks_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:prismarine_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:pumpkin_stem"];
  /**
   * @type {ItemType}
   */
  ["minecraft:purple_candle_cake"];
  /**
   * @type {ItemType}
   */
  ["minecraft:purple_glazed_terracotta"];
  /**
   * @type {ItemType}
   */
  ["minecraft:purpur_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:quartz_bricks"];
  /**
   * @type {ItemType}
   */
  ["minecraft:quartz_ore"];
  /**
   * @type {ItemType}
   */
  ["minecraft:quartz_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:rail"];
  /**
   * @type {ItemType}
   */
  ["minecraft:raw_copper_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:raw_gold_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:raw_iron_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:red_candle_cake"];
  /**
   * @type {ItemType}
   */
  ["minecraft:red_glazed_terracotta"];
  /**
   * @type {ItemType}
   */
  ["minecraft:red_mushroom"];
  /**
   * @type {ItemType}
   */
  ["minecraft:red_nether_brick"];
  /**
   * @type {ItemType}
   */
  ["minecraft:red_nether_brick_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:red_sandstone_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:redstone_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:redstone_lamp"];
  /**
   * @type {ItemType}
   */
  ["minecraft:redstone_ore"];
  /**
   * @type {ItemType}
   */
  ["minecraft:redstone_torch"];
  /**
   * @type {ItemType}
   */
  ["minecraft:redstone_wire"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.reeds"];
  /**
   * @type {ItemType}
   */
  ["minecraft:repeating_command_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:reserved6"];
  /**
   * @type {ItemType}
   */
  ["minecraft:sandstone_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:sculk_sensor"];
  /**
   * @type {ItemType}
   */
  ["minecraft:shroomlight"];
  /**
   * @type {ItemType}
   */
  ["minecraft:silver_glazed_terracotta"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.skull"];
  /**
   * @type {ItemType}
   */
  ["minecraft:slime"];
  /**
   * @type {ItemType}
   */
  ["minecraft:small_amethyst_bud"];
  /**
   * @type {ItemType}
   */
  ["minecraft:small_dripleaf_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:smooth_basalt"];
  /**
   * @type {ItemType}
   */
  ["minecraft:smooth_quartz_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:smooth_red_sandstone_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:smooth_sandstone_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:smooth_stone"];
  /**
   * @type {ItemType}
   */
  ["minecraft:snow"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.soul_campfire"];
  /**
   * @type {ItemType}
   */
  ["minecraft:soul_fire"];
  /**
   * @type {ItemType}
   */
  ["minecraft:soul_lantern"];
  /**
   * @type {ItemType}
   */
  ["minecraft:soul_sand"];
  /**
   * @type {ItemType}
   */
  ["minecraft:soul_soil"];
  /**
   * @type {ItemType}
   */
  ["minecraft:soul_torch"];
  /**
   * @type {ItemType}
   */
  ["minecraft:spore_blossom"];
  /**
   * @type {ItemType}
   */
  ["minecraft:spruce_button"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.spruce_door"];
  /**
   * @type {ItemType}
   */
  ["minecraft:spruce_fence_gate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:spruce_pressure_plate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:spruce_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:spruce_standing_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:spruce_trapdoor"];
  /**
   * @type {ItemType}
   */
  ["minecraft:spruce_wall_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:standing_banner"];
  /**
   * @type {ItemType}
   */
  ["minecraft:standing_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stickypistonarmcollision"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stone_brick_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stone_button"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stone_pressure_plate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stone_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stonecutter"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stonecutter_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stripped_acacia_log"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stripped_birch_log"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stripped_crimson_hyphae"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stripped_crimson_stem"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stripped_dark_oak_log"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stripped_jungle_log"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stripped_oak_log"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stripped_spruce_log"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stripped_warped_hyphae"];
  /**
   * @type {ItemType}
   */
  ["minecraft:stripped_warped_stem"];
  /**
   * @type {ItemType}
   */
  ["minecraft:structure_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:structure_void"];
  /**
   * @type {ItemType}
   */
  ["minecraft:sweet_berry_bush"];
  /**
   * @type {ItemType}
   */
  ["minecraft:target"];
  /**
   * @type {ItemType}
   */
  ["minecraft:tinted_glass"];
  /**
   * @type {ItemType}
   */
  ["minecraft:torch"];
  /**
   * @type {ItemType}
   */
  ["minecraft:trapdoor"];
  /**
   * @type {ItemType}
   */
  ["minecraft:trapped_chest"];
  /**
   * @type {ItemType}
   */
  ["minecraft:tripwire"];
  /**
   * @type {ItemType}
   */
  ["minecraft:tripwire_hook"];
  /**
   * @type {ItemType}
   */
  ["minecraft:tuff"];
  /**
   * @type {ItemType}
   */
  ["minecraft:twisting_vines"];
  /**
   * @type {ItemType}
   */
  ["minecraft:underwater_torch"];
  /**
   * @type {ItemType}
   */
  ["minecraft:unknown"];
  /**
   * @type {ItemType}
   */
  ["minecraft:unlit_redstone_torch"];
  /**
   * @type {ItemType}
   */
  ["minecraft:unpowered_comparator"];
  /**
   * @type {ItemType}
   */
  ["minecraft:unpowered_repeater"];
  /**
   * @type {ItemType}
   */
  ["minecraft:vine"];
  /**
   * @type {ItemType}
   */
  ["minecraft:wall_banner"];
  /**
   * @type {ItemType}
   */
  ["minecraft:wall_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:warped_button"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.warped_door"];
  /**
   * @type {ItemType}
   */
  ["minecraft:warped_double_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:warped_fence"];
  /**
   * @type {ItemType}
   */
  ["minecraft:warped_fence_gate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:warped_fungus"];
  /**
   * @type {ItemType}
   */
  ["minecraft:warped_hyphae"];
  /**
   * @type {ItemType}
   */
  ["minecraft:warped_nylium"];
  /**
   * @type {ItemType}
   */
  ["minecraft:warped_planks"];
  /**
   * @type {ItemType}
   */
  ["minecraft:warped_pressure_plate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:warped_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:warped_standing_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:warped_stem"];
  /**
   * @type {ItemType}
   */
  ["minecraft:warped_trapdoor"];
  /**
   * @type {ItemType}
   */
  ["minecraft:warped_wall_sign"];
  /**
   * @type {ItemType}
   */
  ["minecraft:warped_wart_block"];
  /**
   * @type {ItemType}
   */
  ["minecraft:water"];
  /**
   * @type {ItemType}
   */
  ["minecraft:waxed_copper"];
  /**
   * @type {ItemType}
   */
  ["minecraft:waxed_cut_copper"];
  /**
   * @type {ItemType}
   */
  ["minecraft:waxed_cut_copper_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:waxed_double_cut_copper_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:waxed_exposed_copper"];
  /**
   * @type {ItemType}
   */
  ["minecraft:waxed_exposed_cut_copper"];
  /**
   * @type {ItemType}
   */
  ["minecraft:waxed_exposed_cut_copper_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:waxed_exposed_double_cut_copper_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:waxed_oxidized_copper"];
  /**
   * @type {ItemType}
   */
  ["minecraft:waxed_oxidized_cut_copper"];
  /**
   * @type {ItemType}
   */
  ["minecraft:waxed_oxidized_cut_copper_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:waxed_oxidized_double_cut_copper_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:waxed_weathered_copper"];
  /**
   * @type {ItemType}
   */
  ["minecraft:waxed_weathered_cut_copper"];
  /**
   * @type {ItemType}
   */
  ["minecraft:waxed_weathered_cut_copper_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:waxed_weathered_double_cut_copper_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:weathered_copper"];
  /**
   * @type {ItemType}
   */
  ["minecraft:weathered_cut_copper"];
  /**
   * @type {ItemType}
   */
  ["minecraft:weathered_cut_copper_stairs"];
  /**
   * @type {ItemType}
   */
  ["minecraft:weathered_double_cut_copper_slab"];
  /**
   * @type {ItemType}
   */
  ["minecraft:web"];
  /**
   * @type {ItemType}
   */
  ["minecraft:weeping_vines"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.wheat"];
  /**
   * @type {ItemType}
   */
  ["minecraft:white_candle_cake"];
  /**
   * @type {ItemType}
   */
  ["minecraft:white_glazed_terracotta"];
  /**
   * @type {ItemType}
   */
  ["minecraft:wither_rose"];
  /**
   * @type {ItemType}
   */
  ["minecraft:wooden_button"];
  /**
   * @type {ItemType}
   */
  ["minecraft:item.wooden_door"];
  /**
   * @type {ItemType}
   */
  ["minecraft:wooden_pressure_plate"];
  /**
   * @type {ItemType}
   */
  ["minecraft:yellow_candle_cake"];
  /**
   * @type {ItemType}
   */
  ["minecraft:yellow_glazed_terracotta"];

  // Addon added blocks and items example
  /**
   * @type {ItemType}
   */
  ["toka7290:testitem"];
  /**
   * @type {ItemType}
   */
  ["toka7290:testtool"];
  /**
   * @type {ItemType}
   */
  ["toka7290:test_armor_boots"];
  /**
   * @type {ItemType}
   */
  ["toka7290:test_armor_chestplate"];
  /**
   * @type {ItemType}
   */
  ["toka7290:test_armor_helmet"];
  /**
   * @type {ItemType}
   */
  ["toka7290:test_armor_leggings"];
  /**
   * @type {ItemType}
   */
  ["toka7290:test_block_placer"];
  /**
   * @type {ItemType}
   */
  ["toka7290:test_food"];
  /**
   * @type {ItemType}
   */
  ["toka7290:test_item"];
  /**
   * @type {ItemType}
   */
  ["toka7290:test_tool"];
  /**
   * @type {ItemType}
   */
  ["toka7290:testblock"];
  /**
   * @type {ItemType}
   */
  ["toka7290:testfacing"];
  /**
   * @type {ItemType}
   */
  ["toka7290:testhalf"];
  /**
   * @type {ItemType}
   */
  ["toka7290:testlog"];
  /**
   * @type {ItemType}
   */
  ["toka7290:testnewblock"];
  /**
   * @type {ItemType}
   */
  ["toka7290:testore"];
  /**
   * @type {ItemType}
   */
  ["toka7290:testmob_spawn_egg"];
}
