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
 * @typedef {{getName:function():String}} ItemType
 */

export class Items {
  /**@type {ItemType} */
  static air;
  /**@type {ItemType} */
  static air;
  /**@type {ItemType} */
  static apple;
  /**@type {ItemType} */
  static goldenApple;
  /**@type {ItemType} */
  static enchantedGoldenApple;
  /**@type {ItemType} */
  static mushroomStew;
  /**@type {ItemType} */
  static bread;
  /**@type {ItemType} */
  static porkchop;
  /**@type {ItemType} */
  static cookedPorkchop;
  /**@type {ItemType} */
  static cod;
  /**@type {ItemType} */
  static salmon;
  /**@type {ItemType} */
  static tropicalFish;
  /**@type {ItemType} */
  static pufferfish;
  /**@type {ItemType} */
  static cookedCod;
  /**@type {ItemType} */
  static cookedSalmon;
  /**@type {ItemType} */
  static driedKelp;
  /**@type {ItemType} */
  static cookie;
  /**@type {ItemType} */
  static melonSlice;
  /**@type {ItemType} */
  static beef;
  /**@type {ItemType} */
  static cookedBeef;
  /**@type {ItemType} */
  static chicken;
  /**@type {ItemType} */
  static cookedChicken;
  /**@type {ItemType} */
  static rottenFlesh;
  /**@type {ItemType} */
  static spiderEye;
  /**@type {ItemType} */
  static carrot;
  /**@type {ItemType} */
  static potato;
  /**@type {ItemType} */
  static bakedPotato;
  /**@type {ItemType} */
  static poisonousPotato;
  /**@type {ItemType} */
  static goldenCarrot;
  /**@type {ItemType} */
  static pumpkinPie;
  /**@type {ItemType} */
  static beetroot;
  /**@type {ItemType} */
  static beetrootSoup;
  /**@type {ItemType} */
  static sweetBerries;
  /**@type {ItemType} */
  static rabbit;
  /**@type {ItemType} */
  static cookedRabbit;
  /**@type {ItemType} */
  static rabbitStew;
  /**@type {ItemType} */
  static wheatSeeds;
  /**@type {ItemType} */
  static pumpkinSeeds;
  /**@type {ItemType} */
  static melonSeeds;
  /**@type {ItemType} */
  static netherWart;
  /**@type {ItemType} */
  static beetrootSeeds;
  /**@type {ItemType} */
  static ironShovel;
  /**@type {ItemType} */
  static ironPickaxe;
  /**@type {ItemType} */
  static ironAxe;
  /**@type {ItemType} */
  static flintAndSteel;
  /**@type {ItemType} */
  static bow;
  /**@type {ItemType} */
  static arrow;
  /**@type {ItemType} */
  static coal;
  /**@type {ItemType} */
  static charcoal;
  /**@type {ItemType} */
  static diamond;
  /**@type {ItemType} */
  static ironIngot;
  /**@type {ItemType} */
  static goldIngot;
  /**@type {ItemType} */
  static ironSword;
  /**@type {ItemType} */
  static woodenSword;
  /**@type {ItemType} */
  static woodenShovel;
  /**@type {ItemType} */
  static woodenPickaxe;
  /**@type {ItemType} */
  static woodenAxe;
  /**@type {ItemType} */
  static stoneSword;
  /**@type {ItemType} */
  static stoneShovel;
  /**@type {ItemType} */
  static stonePickaxe;
  /**@type {ItemType} */
  static stoneAxe;
  /**@type {ItemType} */
  static diamondSword;
  /**@type {ItemType} */
  static diamondShovel;
  /**@type {ItemType} */
  static diamondPickaxe;
  /**@type {ItemType} */
  static diamondAxe;
  /**@type {ItemType} */
  static stick;
  /**@type {ItemType} */
  static bowl;
  /**@type {ItemType} */
  static goldenSword;
  /**@type {ItemType} */
  static goldenShovel;
  /**@type {ItemType} */
  static goldenPickaxe;
  /**@type {ItemType} */
  static goldenAxe;
  /**@type {ItemType} */
  static String;
  /**@type {ItemType} */
  static feather;
  /**@type {ItemType} */
  static gunpowder;
  /**@type {ItemType} */
  static woodenHoe;
  /**@type {ItemType} */
  static stoneHoe;
  /**@type {ItemType} */
  static ironHoe;
  /**@type {ItemType} */
  static diamondHoe;
  /**@type {ItemType} */
  static goldenHoe;
  /**@type {ItemType} */
  static wheat;
  /**@type {ItemType} */
  static leatherHelmet;
  /**@type {ItemType} */
  static leatherChestplate;
  /**@type {ItemType} */
  static leatherLeggings;
  /**@type {ItemType} */
  static leatherBoots;
  /**@type {ItemType} */
  static chainmailHelmet;
  /**@type {ItemType} */
  static chainmailChestplate;
  /**@type {ItemType} */
  static chainmailLeggings;
  /**@type {ItemType} */
  static chainmailBoots;
  /**@type {ItemType} */
  static ironHelmet;
  /**@type {ItemType} */
  static ironChestplate;
  /**@type {ItemType} */
  static ironLeggings;
  /**@type {ItemType} */
  static ironBoots;
  /**@type {ItemType} */
  static diamondHelmet;
  /**@type {ItemType} */
  static diamondChestplate;
  /**@type {ItemType} */
  static diamondLeggings;
  /**@type {ItemType} */
  static diamondBoots;
  /**@type {ItemType} */
  static goldenHelmet;
  /**@type {ItemType} */
  static goldenChestplate;
  /**@type {ItemType} */
  static goldenLeggings;
  /**@type {ItemType} */
  static goldenBoots;
  /**@type {ItemType} */
  static shield;
  /**@type {ItemType} */
  static flint;
  /**@type {ItemType} */
  static painting;
  /**@type {ItemType} */
  static oakSign;
  /**@type {ItemType} */
  static woodenDoor;
  /**@type {ItemType} */
  static bucket;
  /**@type {ItemType} */
  static milkBucket;
  /**@type {ItemType} */
  static waterBucket;
  /**@type {ItemType} */
  static lavaBucket;
  /**@type {ItemType} */
  static codBucket;
  /**@type {ItemType} */
  static salmonBucket;
  /**@type {ItemType} */
  static tropicalFishBucket;
  /**@type {ItemType} */
  static pufferfishBucket;
  /**@type {ItemType} */
  static powderSnowBucket;
  /**@type {ItemType} */
  static axolotlBucket;
  /**@type {ItemType} */
  static minecart;
  /**@type {ItemType} */
  static saddle;
  /**@type {ItemType} */
  static ironDoor;
  /**@type {ItemType} */
  static redstone;
  /**@type {ItemType} */
  static snowball;
  /**@type {ItemType} */
  static oakBoat;
  /**@type {ItemType} */
  static birchBoat;
  /**@type {ItemType} */
  static jungleBoat;
  /**@type {ItemType} */
  static spruceBoat;
  /**@type {ItemType} */
  static acaciaBoat;
  /**@type {ItemType} */
  static darkOakBoat;
  /**@type {ItemType} */
  static leather;
  /**@type {ItemType} */
  static kelp;
  /**@type {ItemType} */
  static brick;
  /**@type {ItemType} */
  static clayBall;
  /**@type {ItemType} */
  static sugarCane;
  /**@type {ItemType} */
  static paper;
  /**@type {ItemType} */
  static book;
  /**@type {ItemType} */
  static slimeBall;
  /**@type {ItemType} */
  static chestMinecart;
  /**@type {ItemType} */
  static egg;
  /**@type {ItemType} */
  static compass;
  /**@type {ItemType} */
  static fishingRod;
  /**@type {ItemType} */
  static clock;
  /**@type {ItemType} */
  static glowstoneDust;
  /**@type {ItemType} */
  static blackDye;
  /**@type {ItemType} */
  static redDye;
  /**@type {ItemType} */
  static greenDye;
  /**@type {ItemType} */
  static brownDye;
  /**@type {ItemType} */
  static blueDye;
  /**@type {ItemType} */
  static purpleDye;
  /**@type {ItemType} */
  static cyanDye;
  /**@type {ItemType} */
  static lightGrayDye;
  /**@type {ItemType} */
  static grayDye;
  /**@type {ItemType} */
  static pinkDye;
  /**@type {ItemType} */
  static limeDye;
  /**@type {ItemType} */
  static yellowDye;
  /**@type {ItemType} */
  static lightBlueDye;
  /**@type {ItemType} */
  static magentaDye;
  /**@type {ItemType} */
  static orangeDye;
  /**@type {ItemType} */
  static whiteDye;
  /**@type {ItemType} */
  static boneMeal;
  /**@type {ItemType} */
  static cocoaBeans;
  /**@type {ItemType} */
  static inkSac;
  /**@type {ItemType} */
  static lapisLazuli;
  /**@type {ItemType} */
  static bone;
  /**@type {ItemType} */
  static sugar;
  /**@type {ItemType} */
  static cake;
  /**@type {ItemType} */
  static bed;
  /**@type {ItemType} */
  static repeater;
  /**@type {ItemType} */
  static filledMap;
  /**@type {ItemType} */
  static shears;
  /**@type {ItemType} */
  static enderPearl;
  /**@type {ItemType} */
  static blazeRod;
  /**@type {ItemType} */
  static ghastTear;
  /**@type {ItemType} */
  static goldNugget;
  /**@type {ItemType} */
  static potion;
  /**@type {ItemType} */
  static glassBottle;
  /**@type {ItemType} */
  static fermentedSpiderEye;
  /**@type {ItemType} */
  static blazePowder;
  /**@type {ItemType} */
  static magmaCream;
  /**@type {ItemType} */
  static brewingStand;
  /**@type {ItemType} */
  static cauldron;
  /**@type {ItemType} */
  static enderEye;
  /**@type {ItemType} */
  static glisteringMelonSlice;
  /**@type {ItemType} */
  static chickenSpawnEgg;
  /**@type {ItemType} */
  static cowSpawnEgg;
  /**@type {ItemType} */
  static pigSpawnEgg;
  /**@type {ItemType} */
  static sheepSpawnEgg;
  /**@type {ItemType} */
  static wolfSpawnEgg;
  /**@type {ItemType} */
  static mooshroomSpawnEgg;
  /**@type {ItemType} */
  static creeperSpawnEgg;
  /**@type {ItemType} */
  static endermanSpawnEgg;
  /**@type {ItemType} */
  static silverfishSpawnEgg;
  /**@type {ItemType} */
  static skeletonSpawnEgg;
  /**@type {ItemType} */
  static slimeSpawnEgg;
  /**@type {ItemType} */
  static spiderSpawnEgg;
  /**@type {ItemType} */
  static zombieSpawnEgg;
  /**@type {ItemType} */
  static zombiePigmanSpawnEgg;
  /**@type {ItemType} */
  static villagerSpawnEgg;
  /**@type {ItemType} */
  static squidSpawnEgg;
  /**@type {ItemType} */
  static ocelotSpawnEgg;
  /**@type {ItemType} */
  static witchSpawnEgg;
  /**@type {ItemType} */
  static batSpawnEgg;
  /**@type {ItemType} */
  static ghastSpawnEgg;
  /**@type {ItemType} */
  static magmaCubeSpawnEgg;
  /**@type {ItemType} */
  static blazeSpawnEgg;
  /**@type {ItemType} */
  static caveSpiderSpawnEgg;
  /**@type {ItemType} */
  static horseSpawnEgg;
  /**@type {ItemType} */
  static rabbitSpawnEgg;
  /**@type {ItemType} */
  static endermiteSpawnEgg;
  /**@type {ItemType} */
  static guardianSpawnEgg;
  /**@type {ItemType} */
  static straySpawnEgg;
  /**@type {ItemType} */
  static huskSpawnEgg;
  /**@type {ItemType} */
  static witherSkeletonSpawnEgg;
  /**@type {ItemType} */
  static donkeySpawnEgg;
  /**@type {ItemType} */
  static muleSpawnEgg;
  /**@type {ItemType} */
  static skeletonHorseSpawnEgg;
  /**@type {ItemType} */
  static zombieHorseSpawnEgg;
  /**@type {ItemType} */
  static shulkerSpawnEgg;
  /**@type {ItemType} */
  static npcSpawnEgg;
  /**@type {ItemType} */
  static elderGuardianSpawnEgg;
  /**@type {ItemType} */
  static polarBearSpawnEgg;
  /**@type {ItemType} */
  static llamaSpawnEgg;
  /**@type {ItemType} */
  static vindicatorSpawnEgg;
  /**@type {ItemType} */
  static evokerSpawnEgg;
  /**@type {ItemType} */
  static vexSpawnEgg;
  /**@type {ItemType} */
  static zombieVillagerSpawnEgg;
  /**@type {ItemType} */
  static parrotSpawnEgg;
  /**@type {ItemType} */
  static tropicalFishSpawnEgg;
  /**@type {ItemType} */
  static codSpawnEgg;
  /**@type {ItemType} */
  static pufferfishSpawnEgg;
  /**@type {ItemType} */
  static salmonSpawnEgg;
  /**@type {ItemType} */
  static drownedSpawnEgg;
  /**@type {ItemType} */
  static dolphinSpawnEgg;
  /**@type {ItemType} */
  static turtleSpawnEgg;
  /**@type {ItemType} */
  static phantomSpawnEgg;
  /**@type {ItemType} */
  static agentSpawnEgg;
  /**@type {ItemType} */
  static catSpawnEgg;
  /**@type {ItemType} */
  static pandaSpawnEgg;
  /**@type {ItemType} */
  static foxSpawnEgg;
  /**@type {ItemType} */
  static pillagerSpawnEgg;
  /**@type {ItemType} */
  static wanderingTraderSpawnEgg;
  /**@type {ItemType} */
  static ravagerSpawnEgg;
  /**@type {ItemType} */
  static beeSpawnEgg;
  /**@type {ItemType} */
  static striderSpawnEgg;
  /**@type {ItemType} */
  static hoglinSpawnEgg;
  /**@type {ItemType} */
  static piglinSpawnEgg;
  /**@type {ItemType} */
  static zoglinSpawnEgg;
  /**@type {ItemType} */
  static piglinBruteSpawnEgg;
  /**@type {ItemType} */
  static goatSpawnEgg;
  /**@type {ItemType} */
  static axolotlSpawnEgg;
  /**@type {ItemType} */
  static copperIngot;
  /**@type {ItemType} */
  static copperBlock;
  /**@type {ItemType} */
  static cutCopper;
  /**@type {ItemType} */
  static cutCopperStairs;
  /**@type {ItemType} */
  static cutCopperSlab;
  /**@type {ItemType} */
  static exposedCutCopperSlab;
  /**@type {ItemType} */
  static weatheredCutCopperSlab;
  /**@type {ItemType} */
  static oxidizedCutCopperSlab;
  /**@type {ItemType} */
  static waxedCutCopperSlab;
  /**@type {ItemType} */
  static waxedExposedCutCopperSlab;
  /**@type {ItemType} */
  static waxedWeatheredCutCopperSlab;
  /**@type {ItemType} */
  static glowSquidSpawnEgg;
  /**@type {ItemType} */
  static glowInkSac;
  /**@type {ItemType} */
  static experienceBottle;
  /**@type {ItemType} */
  static fireCharge;
  /**@type {ItemType} */
  static writableBook;
  /**@type {ItemType} */
  static writtenBook;
  /**@type {ItemType} */
  static emerald;
  /**@type {ItemType} */
  static frame;
  /**@type {ItemType} */
  static flowerPot;
  /**@type {ItemType} */
  static emptyMap;
  /**@type {ItemType} */
  static skull;
  /**@type {ItemType} */
  static carrotOnAStick;
  /**@type {ItemType} */
  static netherStar;
  /**@type {ItemType} */
  static fireworkRocket;
  /**@type {ItemType} */
  static fireworkStar;
  /**@type {ItemType} */
  static enchantedBook;
  /**@type {ItemType} */
  static comparator;
  /**@type {ItemType} */
  static netherbrick;
  /**@type {ItemType} */
  static quartz;
  /**@type {ItemType} */
  static tntMinecart;
  /**@type {ItemType} */
  static hopperMinecart;
  /**@type {ItemType} */
  static hopper;
  /**@type {ItemType} */
  static rabbitFoot;
  /**@type {ItemType} */
  static rabbitHide;
  /**@type {ItemType} */
  static leatherHorseArmor;
  /**@type {ItemType} */
  static ironHorseArmor;
  /**@type {ItemType} */
  static goldenHorseArmor;
  /**@type {ItemType} */
  static diamondHorseArmor;
  /**@type {ItemType} */
  static musicDisc13;
  /**@type {ItemType} */
  static musicDiscCat;
  /**@type {ItemType} */
  static musicDiscBlocks;
  /**@type {ItemType} */
  static musicDiscChirp;
  /**@type {ItemType} */
  static musicDiscFar;
  /**@type {ItemType} */
  static musicDiscMall;
  /**@type {ItemType} */
  static musicDiscMellohi;
  /**@type {ItemType} */
  static musicDiscStal;
  /**@type {ItemType} */
  static musicDiscStrad;
  /**@type {ItemType} */
  static musicDiscWard;
  /**@type {ItemType} */
  static musicDisc11;
  /**@type {ItemType} */
  static musicDiscWait;
  /**@type {ItemType} */
  static trident;
  /**@type {ItemType} */
  static lead;
  /**@type {ItemType} */
  static nameTag;
  /**@type {ItemType} */
  static prismarineCrystals;
  /**@type {ItemType} */
  static mutton;
  /**@type {ItemType} */
  static cookedMutton;
  /**@type {ItemType} */
  static armorStand;
  /**@type {ItemType} */
  static spruceDoor;
  /**@type {ItemType} */
  static birchDoor;
  /**@type {ItemType} */
  static jungleDoor;
  /**@type {ItemType} */
  static acaciaDoor;
  /**@type {ItemType} */
  static darkOakDoor;
  /**@type {ItemType} */
  static chorusFruit;
  /**@type {ItemType} */
  static poppedChorusFruit;
  /**@type {ItemType} */
  static dragonBreath;
  /**@type {ItemType} */
  static splashPotion;
  /**@type {ItemType} */
  static lingeringPotion;
  /**@type {ItemType} */
  static commandBlockMinecart;
  /**@type {ItemType} */
  static elytra;
  /**@type {ItemType} */
  static prismarineShard;
  /**@type {ItemType} */
  static shulkerShell;
  /**@type {ItemType} */
  static banner;
  /**@type {ItemType} */
  static totemOfUndying;
  /**@type {ItemType} */
  static ironNugget;
  /**@type {ItemType} */
  static nautilusShell;
  /**@type {ItemType} */
  static heartOfTheSea;
  /**@type {ItemType} */
  static scute;
  /**@type {ItemType} */
  static turtleHelmet;
  /**@type {ItemType} */
  static phantomMembrane;
  /**@type {ItemType} */
  static crossbow;
  /**@type {ItemType} */
  static spruceSign;
  /**@type {ItemType} */
  static birchSign;
  /**@type {ItemType} */
  static jungleSign;
  /**@type {ItemType} */
  static acaciaSign;
  /**@type {ItemType} */
  static darkOakSign;
  /**@type {ItemType} */
  static flowerBannerPattern;
  /**@type {ItemType} */
  static creeperBannerPattern;
  /**@type {ItemType} */
  static skullBannerPattern;
  /**@type {ItemType} */
  static mojangBannerPattern;
  /**@type {ItemType} */
  static fieldMasonedBannerPattern;
  /**@type {ItemType} */
  static bordureIndentedBannerPattern;
  /**@type {ItemType} */
  static piglinBannerPattern;
  /**@type {ItemType} */
  static campfire;
  /**@type {ItemType} */
  static suspiciousStew;
  /**@type {ItemType} */
  static honeycomb;
  /**@type {ItemType} */
  static honeyBottle;
  /**@type {ItemType} */
  static camera;
  /**@type {ItemType} */
  static compound;
  /**@type {ItemType} */
  static iceBomb;
  /**@type {ItemType} */
  static bleach;
  /**@type {ItemType} */
  static rapidFertilizer;
  /**@type {ItemType} */
  static balloon;
  /**@type {ItemType} */
  static medicine;
  /**@type {ItemType} */
  static sparkler;
  /**@type {ItemType} */
  static glowStick;
  /**@type {ItemType} */
  static lodestoneCompass;
  /**@type {ItemType} */
  static netheriteIngot;
  /**@type {ItemType} */
  static netheriteSword;
  /**@type {ItemType} */
  static netheriteShovel;
  /**@type {ItemType} */
  static netheritePickaxe;
  /**@type {ItemType} */
  static netheriteAxe;
  /**@type {ItemType} */
  static netheriteHoe;
  /**@type {ItemType} */
  static netheriteHelmet;
  /**@type {ItemType} */
  static netheriteChestplate;
  /**@type {ItemType} */
  static netheriteLeggings;
  /**@type {ItemType} */
  static netheriteBoots;
  /**@type {ItemType} */
  static netheriteScrap;
  /**@type {ItemType} */
  static crimsonSign;
  /**@type {ItemType} */
  static warpedSign;
  /**@type {ItemType} */
  static crimsonDoor;
  /**@type {ItemType} */
  static warpedDoor;
  /**@type {ItemType} */
  static warpedFungusOnAStick;
  /**@type {ItemType} */
  static chain;
  /**@type {ItemType} */
  static musicDiscPigstep;
  /**@type {ItemType} */
  static netherSprouts;
  /**@type {ItemType} */
  static blackstoneSlab;
  /**@type {ItemType} */
  static polishedBlackstoneBrickSlab;
  /**@type {ItemType} */
  static polishedBlackstoneSlab;
  /**@type {ItemType} */
  static soulCampfire;
  /**@type {ItemType} */
  static goatHorn;
  /**@type {ItemType} */
  static glowFrame;
  /**@type {ItemType} */
  static cobbledDeepslateSlab;
  /**@type {ItemType} */
  static polishedDeepslateSlab;
  /**@type {ItemType} */
  static deepslateTileSlab;
  /**@type {ItemType} */
  static deepslateBrickSlab;
  /**@type {ItemType} */
  static stone;
  /**@type {ItemType} */
  static dirt;
  /**@type {ItemType} */
  static farmland;
  /**@type {ItemType} */
  static sand;
  /**@type {ItemType} */
  static stainedHardenedClay;
  /**@type {ItemType} */
  static wool;
  /**@type {ItemType} */
  static carpet;
  /**@type {ItemType} */
  static log;
  /**@type {ItemType} */
  static fence;
  /**@type {ItemType} */
  static stonebrick;
  /**@type {ItemType} */
  static coralBlock;
  /**@type {ItemType} */
  static doubleStoneSlab;
  /**@type {ItemType} */
  static doubleStoneSlab2;
  /**@type {ItemType} */
  static doubleStoneSlab3;
  /**@type {ItemType} */
  static doubleStoneSlab4;
  /**@type {ItemType} */
  static realDoubleStoneSlab;
  /**@type {ItemType} */
  static realDoubleStoneSlab2;
  /**@type {ItemType} */
  static realDoubleStoneSlab3;
  /**@type {ItemType} */
  static realDoubleStoneSlab4;
  /**@type {ItemType} */
  static coralFan;
  /**@type {ItemType} */
  static coralFanDead;
  /**@type {ItemType} */
  static seaPickle;
  /**@type {ItemType} */
  static sapling;
  /**@type {ItemType} */
  static leaves;
  /**@type {ItemType} */
  static leaves2;
  /**@type {ItemType} */
  static azaleaLeaves;
  /**@type {ItemType} */
  static azaleaLeavesFlowered;
  /**@type {ItemType} */
  static sandstone;
  /**@type {ItemType} */
  static redSandstone;
  /**@type {ItemType} */
  static woodenSlab;
  /**@type {ItemType} */
  static crimsonRoots;
  /**@type {ItemType} */
  static warpedRoots;
  /**@type {ItemType} */
  static yellowFlower;
  /**@type {ItemType} */
  static redFlower;
  /**@type {ItemType} */
  static doublePlant;
  /**@type {ItemType} */
  static waterlily;
  /**@type {ItemType} */
  static sponge;
  /**@type {ItemType} */
  static snowLayer;
  /**@type {ItemType} */
  static planks;
  /**@type {ItemType} */
  static quartzBlock;
  /**@type {ItemType} */
  static purpurBlock;
  /**@type {ItemType} */
  static cobblestoneWall;
  /**@type {ItemType} */
  static coral;
  /**@type {ItemType} */
  static tallgrass;
  /**@type {ItemType} */
  static seagrass;
  /**@type {ItemType} */
  static brownMushroomBlock;
  /**@type {ItemType} */
  static redMushroomBlock;
  /**@type {ItemType} */
  static log2;
  /**@type {ItemType} */
  static endPortalFrame;
  /**@type {ItemType} */
  static anvil;
  /**@type {ItemType} */
  static monsterEgg;
  /**@type {ItemType} */
  static brewingstandblock;
  /**@type {ItemType} */
  static beacon;
  /**@type {ItemType} */
  static conduit;
  /**@type {ItemType} */
  static prismarine;
  /**@type {ItemType} */
  static sealantern;
  /**@type {ItemType} */
  static concrete;
  /**@type {ItemType} */
  static concretePowder;
  /**@type {ItemType} */
  static magma;
  /**@type {ItemType} */
  static stainedGlass;
  /**@type {ItemType} */
  static stainedGlassPane;
  /**@type {ItemType} */
  static undyedShulkerBox;
  /**@type {ItemType} */
  static shulkerBox;
  /**@type {ItemType} */
  static piston;
  /**@type {ItemType} */
  static stickyPiston;
  /**@type {ItemType} */
  static turtleEgg;
  /**@type {ItemType} */
  static bamboo;
  /**@type {ItemType} */
  static scaffolding;
  /**@type {ItemType} */
  static blastFurnace;
  /**@type {ItemType} */
  static smoker;
  /**@type {ItemType} */
  static smithingTable;
  /**@type {ItemType} */
  static barrel;
  /**@type {ItemType} */
  static lantern;
  /**@type {ItemType} */
  static loom;
  /**@type {ItemType} */
  static grindstone;
  /**@type {ItemType} */
  static bell;
  /**@type {ItemType} */
  static cartographyTable;
  /**@type {ItemType} */
  static fletchingTable;
  /**@type {ItemType} */
  static wood;
  /**@type {ItemType} */
  static chemistryTable;
  /**@type {ItemType} */
  static tnt;
  /**@type {ItemType} */
  static hardStainedGlass;
  /**@type {ItemType} */
  static hardStainedGlassPane;
  /**@type {ItemType} */
  static coloredTorchRg;
  /**@type {ItemType} */
  static coloredTorchBp;
  /**@type {ItemType} */
  static lightBlock;
  /**@type {ItemType} */
  static pumpkin;
  /**@type {ItemType} */
  static carvedPumpkin;
  /**@type {ItemType} */
  static litPumpkin;
  /**@type {ItemType} */
  static crimsonSlab;
  /**@type {ItemType} */
  static warpedSlab;
  /**@type {ItemType} */
  static element0;
  /**@type {ItemType} */
  static element1;
  /**@type {ItemType} */
  static element2;
  /**@type {ItemType} */
  static element3;
  /**@type {ItemType} */
  static element4;
  /**@type {ItemType} */
  static element5;
  /**@type {ItemType} */
  static element6;
  /**@type {ItemType} */
  static element7;
  /**@type {ItemType} */
  static element8;
  /**@type {ItemType} */
  static element9;
  /**@type {ItemType} */
  static element10;
  /**@type {ItemType} */
  static element11;
  /**@type {ItemType} */
  static element12;
  /**@type {ItemType} */
  static element13;
  /**@type {ItemType} */
  static element14;
  /**@type {ItemType} */
  static element15;
  /**@type {ItemType} */
  static element16;
  /**@type {ItemType} */
  static element17;
  /**@type {ItemType} */
  static element18;
  /**@type {ItemType} */
  static element19;
  /**@type {ItemType} */
  static element20;
  /**@type {ItemType} */
  static element21;
  /**@type {ItemType} */
  static element22;
  /**@type {ItemType} */
  static element23;
  /**@type {ItemType} */
  static element24;
  /**@type {ItemType} */
  static element25;
  /**@type {ItemType} */
  static element26;
  /**@type {ItemType} */
  static element27;
  /**@type {ItemType} */
  static element28;
  /**@type {ItemType} */
  static element29;
  /**@type {ItemType} */
  static element30;
  /**@type {ItemType} */
  static element31;
  /**@type {ItemType} */
  static element32;
  /**@type {ItemType} */
  static element33;
  /**@type {ItemType} */
  static element34;
  /**@type {ItemType} */
  static element35;
  /**@type {ItemType} */
  static element36;
  /**@type {ItemType} */
  static element37;
  /**@type {ItemType} */
  static element38;
  /**@type {ItemType} */
  static element39;
  /**@type {ItemType} */
  static element40;
  /**@type {ItemType} */
  static element41;
  /**@type {ItemType} */
  static element42;
  /**@type {ItemType} */
  static element43;
  /**@type {ItemType} */
  static element44;
  /**@type {ItemType} */
  static element45;
  /**@type {ItemType} */
  static element46;
  /**@type {ItemType} */
  static element47;
  /**@type {ItemType} */
  static element48;
  /**@type {ItemType} */
  static element49;
  /**@type {ItemType} */
  static element50;
  /**@type {ItemType} */
  static element51;
  /**@type {ItemType} */
  static element52;
  /**@type {ItemType} */
  static element53;
  /**@type {ItemType} */
  static element54;
  /**@type {ItemType} */
  static element55;
  /**@type {ItemType} */
  static element56;
  /**@type {ItemType} */
  static element57;
  /**@type {ItemType} */
  static element58;
  /**@type {ItemType} */
  static element59;
  /**@type {ItemType} */
  static element60;
  /**@type {ItemType} */
  static element61;
  /**@type {ItemType} */
  static element62;
  /**@type {ItemType} */
  static element63;
  /**@type {ItemType} */
  static element64;
  /**@type {ItemType} */
  static element65;
  /**@type {ItemType} */
  static element66;
  /**@type {ItemType} */
  static element67;
  /**@type {ItemType} */
  static element68;
  /**@type {ItemType} */
  static element69;
  /**@type {ItemType} */
  static element70;
  /**@type {ItemType} */
  static element71;
  /**@type {ItemType} */
  static element72;
  /**@type {ItemType} */
  static element73;
  /**@type {ItemType} */
  static element74;
  /**@type {ItemType} */
  static element75;
  /**@type {ItemType} */
  static element76;
  /**@type {ItemType} */
  static element77;
  /**@type {ItemType} */
  static element78;
  /**@type {ItemType} */
  static element79;
  /**@type {ItemType} */
  static element80;
  /**@type {ItemType} */
  static element81;
  /**@type {ItemType} */
  static element82;
  /**@type {ItemType} */
  static element83;
  /**@type {ItemType} */
  static element84;
  /**@type {ItemType} */
  static element85;
  /**@type {ItemType} */
  static element86;
  /**@type {ItemType} */
  static element87;
  /**@type {ItemType} */
  static element88;
  /**@type {ItemType} */
  static element89;
  /**@type {ItemType} */
  static element90;
  /**@type {ItemType} */
  static element91;
  /**@type {ItemType} */
  static element92;
  /**@type {ItemType} */
  static element93;
  /**@type {ItemType} */
  static element94;
  /**@type {ItemType} */
  static element95;
  /**@type {ItemType} */
  static element96;
  /**@type {ItemType} */
  static element97;
  /**@type {ItemType} */
  static element98;
  /**@type {ItemType} */
  static element99;
  /**@type {ItemType} */
  static element100;
  /**@type {ItemType} */
  static element101;
  /**@type {ItemType} */
  static element102;
  /**@type {ItemType} */
  static element103;
  /**@type {ItemType} */
  static element104;
  /**@type {ItemType} */
  static element105;
  /**@type {ItemType} */
  static element106;
  /**@type {ItemType} */
  static element107;
  /**@type {ItemType} */
  static element108;
  /**@type {ItemType} */
  static element109;
  /**@type {ItemType} */
  static element110;
  /**@type {ItemType} */
  static element111;
  /**@type {ItemType} */
  static element112;
  /**@type {ItemType} */
  static element113;
  /**@type {ItemType} */
  static element114;
  /**@type {ItemType} */
  static element115;
  /**@type {ItemType} */
  static element116;
  /**@type {ItemType} */
  static element117;
  /**@type {ItemType} */
  static element118;
  /**@type {ItemType} */
  static composter;
  /**@type {ItemType} */
  static netheriteBlock;
  /**@type {ItemType} */
  static ancientDebris;
  /**@type {ItemType} */
  static respawnAnchor;
  /**@type {ItemType} */
  static cryingObsidian;
  /**@type {ItemType} */
  static boat;
  /**@type {ItemType} */
  static dye;
  /**@type {ItemType} */
  static bannerPattern;
  /**@type {ItemType} */
  static spawnEgg;
  /**@type {ItemType} */
  static endCrystal;
  /**@type {ItemType} */
  static glowBerries;
  /**@type {ItemType} */
  static acaciaButton;
  /**@type {ItemType} */
  static acaciaFenceGate;
  /**@type {ItemType} */
  static acaciaPressurePlate;
  /**@type {ItemType} */
  static acaciaStairs;
  /**@type {ItemType} */
  static acaciaStandingSign;
  /**@type {ItemType} */
  static acaciaTrapdoor;
  /**@type {ItemType} */
  static acaciaWallSign;
  /**@type {ItemType} */
  static activatorRail;
  /**@type {ItemType} */
  static allow;
  /**@type {ItemType} */
  static andesiteStairs;
  /**@type {ItemType} */
  static azalea;
  /**@type {ItemType} */
  static bambooSapling;
  /**@type {ItemType} */
  static barrier;
  /**@type {ItemType} */
  static basalt;
  /**@type {ItemType} */
  static bedrock;
  /**@type {ItemType} */
  static beeNest;
  /**@type {ItemType} */
  static beehive;
  /**@type {ItemType} */
  static bigDripleaf;
  /**@type {ItemType} */
  static birchButton;
  /**@type {ItemType} */
  static birchFenceGate;
  /**@type {ItemType} */
  static birchPressurePlate;
  /**@type {ItemType} */
  static birchStairs;
  /**@type {ItemType} */
  static birchStandingSign;
  /**@type {ItemType} */
  static birchTrapdoor;
  /**@type {ItemType} */
  static birchWallSign;
  /**@type {ItemType} */
  static blackGlazedTerracotta;
  /**@type {ItemType} */
  static blackstone;
  /**@type {ItemType} */
  static blackstoneDoubleSlab;
  /**@type {ItemType} */
  static blackstoneStairs;
  /**@type {ItemType} */
  static blackstoneWall;
  /**@type {ItemType} */
  static blueGlazedTerracotta;
  /**@type {ItemType} */
  static blueIce;
  /**@type {ItemType} */
  static boneBlock;
  /**@type {ItemType} */
  static bookshelf;
  /**@type {ItemType} */
  static borderBlock;
  /**@type {ItemType} */
  static brickBlock;
  /**@type {ItemType} */
  static brickStairs;
  /**@type {ItemType} */
  static brownGlazedTerracotta;
  /**@type {ItemType} */
  static brownMushroom;
  /**@type {ItemType} */
  static bubbleColumn;
  /**@type {ItemType} */
  static cactus;
  /**@type {ItemType} */
  static carrots;
  /**@type {ItemType} */
  static caveVines;
  /**@type {ItemType} */
  static caveVinesBodyWithBerries;
  /**@type {ItemType} */
  static caveVinesHeadWithBerries;
  /**@type {ItemType} */
  static chainCommandBlock;
  /**@type {ItemType} */
  static chemicalHeat;
  /**@type {ItemType} */
  static chest;
  /**@type {ItemType} */
  static chiseledDeepslate;
  /**@type {ItemType} */
  static chiseledNetherBricks;
  /**@type {ItemType} */
  static chiseledPolishedBlackstone;
  /**@type {ItemType} */
  static chorusFlower;
  /**@type {ItemType} */
  static chorusPlant;
  /**@type {ItemType} */
  static clay;
  /**@type {ItemType} */
  static coalBlock;
  /**@type {ItemType} */
  static coalOre;
  /**@type {ItemType} */
  static cobbledDeepslate;
  /**@type {ItemType} */
  static cobbledDeepslateDoubleSlab;
  /**@type {ItemType} */
  static cobbledDeepslateStairs;
  /**@type {ItemType} */
  static cobbledDeepslateWall;
  /**@type {ItemType} */
  static cobblestone;
  /**@type {ItemType} */
  static cocoa;
  /**@type {ItemType} */
  static commandBlock;
  /**@type {ItemType} */
  static copperOre;
  /**@type {ItemType} */
  static coralFanHang;
  /**@type {ItemType} */
  static coralFanHang2;
  /**@type {ItemType} */
  static coralFanHang3;
  /**@type {ItemType} */
  static crackedDeepslateBricks;
  /**@type {ItemType} */
  static crackedDeepslateTiles;
  /**@type {ItemType} */
  static crackedNetherBricks;
  /**@type {ItemType} */
  static crackedPolishedBlackstoneBricks;
  /**@type {ItemType} */
  static craftingTable;
  /**@type {ItemType} */
  static crimsonButton;
  /**@type {ItemType} */
  static crimsonDoubleSlab;
  /**@type {ItemType} */
  static crimsonFence;
  /**@type {ItemType} */
  static crimsonFenceGate;
  /**@type {ItemType} */
  static crimsonFungus;
  /**@type {ItemType} */
  static crimsonHyphae;
  /**@type {ItemType} */
  static crimsonNylium;
  /**@type {ItemType} */
  static crimsonPlanks;
  /**@type {ItemType} */
  static crimsonPressurePlate;
  /**@type {ItemType} */
  static crimsonStairs;
  /**@type {ItemType} */
  static crimsonStandingSign;
  /**@type {ItemType} */
  static crimsonStem;
  /**@type {ItemType} */
  static crimsonTrapdoor;
  /**@type {ItemType} */
  static crimsonWallSign;
  /**@type {ItemType} */
  static cyanGlazedTerracotta;
  /**@type {ItemType} */
  static darkOakButton;
  /**@type {ItemType} */
  static darkOakFenceGate;
  /**@type {ItemType} */
  static darkOakPressurePlate;
  /**@type {ItemType} */
  static darkOakStairs;
  /**@type {ItemType} */
  static darkOakTrapdoor;
  /**@type {ItemType} */
  static darkPrismarineStairs;
  /**@type {ItemType} */
  static darkoakStandingSign;
  /**@type {ItemType} */
  static darkoakWallSign;
  /**@type {ItemType} */
  static daylightDetector;
  /**@type {ItemType} */
  static daylightDetectorInverted;
  /**@type {ItemType} */
  static deadbush;
  /**@type {ItemType} */
  static deepslate;
  /**@type {ItemType} */
  static deepslateBrickDoubleSlab;
  /**@type {ItemType} */
  static deepslateBrickStairs;
  /**@type {ItemType} */
  static deepslateBrickWall;
  /**@type {ItemType} */
  static deepslateBricks;
  /**@type {ItemType} */
  static deepslateCoalOre;
  /**@type {ItemType} */
  static deepslateCopperOre;
  /**@type {ItemType} */
  static deepslateDiamondOre;
  /**@type {ItemType} */
  static deepslateEmeraldOre;
  /**@type {ItemType} */
  static deepslateGoldOre;
  /**@type {ItemType} */
  static deepslateIronOre;
  /**@type {ItemType} */
  static deepslateLapisOre;
  /**@type {ItemType} */
  static deepslateRedstoneOre;
  /**@type {ItemType} */
  static deepslateTileDoubleSlab;
  /**@type {ItemType} */
  static deepslateTileStairs;
  /**@type {ItemType} */
  static deepslateTileWall;
  /**@type {ItemType} */
  static deepslateTiles;
  /**@type {ItemType} */
  static deny;
  /**@type {ItemType} */
  static detectorRail;
  /**@type {ItemType} */
  static diamondBlock;
  /**@type {ItemType} */
  static diamondOre;
  /**@type {ItemType} */
  static dioriteStairs;
  /**@type {ItemType} */
  static dirtWithRoots;
  /**@type {ItemType} */
  static dispenser;
  /**@type {ItemType} */
  static doubleCutCopperSlab;
  /**@type {ItemType} */
  static doubleWoodenSlab;
  /**@type {ItemType} */
  static dragonEgg;
  /**@type {ItemType} */
  static driedKelpBlock;
  /**@type {ItemType} */
  static dripstoneBlock;
  /**@type {ItemType} */
  static dropper;
  /**@type {ItemType} */
  static emeraldBlock;
  /**@type {ItemType} */
  static emeraldOre;
  /**@type {ItemType} */
  static enchantingTable;
  /**@type {ItemType} */
  static endBrickStairs;
  /**@type {ItemType} */
  static endBricks;
  /**@type {ItemType} */
  static endGateway;
  /**@type {ItemType} */
  static endPortal;
  /**@type {ItemType} */
  static endRod;
  /**@type {ItemType} */
  static endStone;
  /**@type {ItemType} */
  static enderChest;
  /**@type {ItemType} */
  static exposedCopper;
  /**@type {ItemType} */
  static exposedCutCopper;
  /**@type {ItemType} */
  static exposedCutCopperStairs;
  /**@type {ItemType} */
  static exposedDoubleCutCopperSlab;
  /**@type {ItemType} */
  static fenceGate;
  /**@type {ItemType} */
  static fire;
  /**@type {ItemType} */
  static floweringAzalea;
  /**@type {ItemType} */
  static flowingLava;
  /**@type {ItemType} */
  static flowingWater;
  /**@type {ItemType} */
  static frostedIce;
  /**@type {ItemType} */
  static furnace;
  /**@type {ItemType} */
  static gildedBlackstone;
  /**@type {ItemType} */
  static glass;
  /**@type {ItemType} */
  static glassPane;
  /**@type {ItemType} */
  static glowLichen;
  /**@type {ItemType} */
  static glowingobsidian;
  /**@type {ItemType} */
  static glowstone;
  /**@type {ItemType} */
  static goldBlock;
  /**@type {ItemType} */
  static goldOre;
  /**@type {ItemType} */
  static goldenRail;
  /**@type {ItemType} */
  static graniteStairs;
  /**@type {ItemType} */
  static grass;
  /**@type {ItemType} */
  static grassPath;
  /**@type {ItemType} */
  static gravel;
  /**@type {ItemType} */
  static grayGlazedTerracotta;
  /**@type {ItemType} */
  static greenGlazedTerracotta;
  /**@type {ItemType} */
  static hangingRoots;
  /**@type {ItemType} */
  static hardGlass;
  /**@type {ItemType} */
  static hardGlassPane;
  /**@type {ItemType} */
  static hardenedClay;
  /**@type {ItemType} */
  static hayBlock;
  /**@type {ItemType} */
  static heavyWeightedPressurePlate;
  /**@type {ItemType} */
  static honeyBlock;
  /**@type {ItemType} */
  static honeycombBlock;
  /**@type {ItemType} */
  static ice;
  /**@type {ItemType} */
  static infoUpdate;
  /**@type {ItemType} */
  static infoUpdate2;
  /**@type {ItemType} */
  static invisiblebedrock;
  /**@type {ItemType} */
  static ironBars;
  /**@type {ItemType} */
  static ironBlock;
  /**@type {ItemType} */
  static ironOre;
  /**@type {ItemType} */
  static ironTrapdoor;
  /**@type {ItemType} */
  static jigsaw;
  /**@type {ItemType} */
  static jukebox;
  /**@type {ItemType} */
  static jungleButton;
  /**@type {ItemType} */
  static jungleFenceGate;
  /**@type {ItemType} */
  static junglePressurePlate;
  /**@type {ItemType} */
  static jungleStairs;
  /**@type {ItemType} */
  static jungleStandingSign;
  /**@type {ItemType} */
  static jungleTrapdoor;
  /**@type {ItemType} */
  static jungleWallSign;
  /**@type {ItemType} */
  static ladder;
  /**@type {ItemType} */
  static lapisBlock;
  /**@type {ItemType} */
  static lapisOre;
  /**@type {ItemType} */
  static lava;
  /**@type {ItemType} */
  static lavaCauldron;
  /**@type {ItemType} */
  static lectern;
  /**@type {ItemType} */
  static lever;
  /**@type {ItemType} */
  static lightBlueGlazedTerracotta;
  /**@type {ItemType} */
  static lightWeightedPressurePlate;
  /**@type {ItemType} */
  static lightningRod;
  /**@type {ItemType} */
  static limeGlazedTerracotta;
  /**@type {ItemType} */
  static litBlastFurnace;
  /**@type {ItemType} */
  static litDeepslateRedstoneOre;
  /**@type {ItemType} */
  static litFurnace;
  /**@type {ItemType} */
  static litRedstoneLamp;
  /**@type {ItemType} */
  static litRedstoneOre;
  /**@type {ItemType} */
  static litSmoker;
  /**@type {ItemType} */
  static lodestone;
  /**@type {ItemType} */
  static magentaGlazedTerracotta;
  /**@type {ItemType} */
  static melonBlock;
  /**@type {ItemType} */
  static melonStem;
  /**@type {ItemType} */
  static mobSpawner;
  /**@type {ItemType} */
  static mossBlock;
  /**@type {ItemType} */
  static mossCarpet;
  /**@type {ItemType} */
  static mossyCobblestone;
  /**@type {ItemType} */
  static mossyCobblestoneStairs;
  /**@type {ItemType} */
  static mossyStoneBrickStairs;
  /**@type {ItemType} */
  static movingblock;
  /**@type {ItemType} */
  static mycelium;
  /**@type {ItemType} */
  static netherBrick;
  /**@type {ItemType} */
  static netherBrickFence;
  /**@type {ItemType} */
  static netherBrickStairs;
  /**@type {ItemType} */
  static netherGoldOre;
  /**@type {ItemType} */
  static netherWartBlock;
  /**@type {ItemType} */
  static netherrack;
  /**@type {ItemType} */
  static netherreactor;
  /**@type {ItemType} */
  static normalStoneStairs;
  /**@type {ItemType} */
  static noteblock;
  /**@type {ItemType} */
  static oakStairs;
  /**@type {ItemType} */
  static observer;
  /**@type {ItemType} */
  static obsidian;
  /**@type {ItemType} */
  static orangeGlazedTerracotta;
  /**@type {ItemType} */
  static oxidizedCopper;
  /**@type {ItemType} */
  static oxidizedCutCopper;
  /**@type {ItemType} */
  static oxidizedCutCopperStairs;
  /**@type {ItemType} */
  static oxidizedDoubleCutCopperSlab;
  /**@type {ItemType} */
  static packedIce;
  /**@type {ItemType} */
  static pinkGlazedTerracotta;
  /**@type {ItemType} */
  static pistonarmcollision;
  /**@type {ItemType} */
  static podzol;
  /**@type {ItemType} */
  static pointedDripstone;
  /**@type {ItemType} */
  static polishedAndesiteStairs;
  /**@type {ItemType} */
  static polishedBasalt;
  /**@type {ItemType} */
  static polishedBlackstone;
  /**@type {ItemType} */
  static polishedBlackstoneBrickDoubleSlab;
  /**@type {ItemType} */
  static polishedBlackstoneBrickStairs;
  /**@type {ItemType} */
  static polishedBlackstoneBrickWall;
  /**@type {ItemType} */
  static polishedBlackstoneBricks;
  /**@type {ItemType} */
  static polishedBlackstoneButton;
  /**@type {ItemType} */
  static polishedBlackstoneDoubleSlab;
  /**@type {ItemType} */
  static polishedBlackstonePressurePlate;
  /**@type {ItemType} */
  static polishedBlackstoneStairs;
  /**@type {ItemType} */
  static polishedBlackstoneWall;
  /**@type {ItemType} */
  static polishedDeepslate;
  /**@type {ItemType} */
  static polishedDeepslateDoubleSlab;
  /**@type {ItemType} */
  static polishedDeepslateStairs;
  /**@type {ItemType} */
  static polishedDeepslateWall;
  /**@type {ItemType} */
  static polishedDioriteStairs;
  /**@type {ItemType} */
  static polishedGraniteStairs;
  /**@type {ItemType} */
  static portal;
  /**@type {ItemType} */
  static potatoes;
  /**@type {ItemType} */
  static powderSnow;
  /**@type {ItemType} */
  static poweredComparator;
  /**@type {ItemType} */
  static poweredRepeater;
  /**@type {ItemType} */
  static prismarineBricksStairs;
  /**@type {ItemType} */
  static prismarineStairs;
  /**@type {ItemType} */
  static pumpkinStem;
  /**@type {ItemType} */
  static purpleGlazedTerracotta;
  /**@type {ItemType} */
  static purpurStairs;
  /**@type {ItemType} */
  static quartzBricks;
  /**@type {ItemType} */
  static quartzOre;
  /**@type {ItemType} */
  static quartzStairs;
  /**@type {ItemType} */
  static rail;
  /**@type {ItemType} */
  static redGlazedTerracotta;
  /**@type {ItemType} */
  static redMushroom;
  /**@type {ItemType} */
  static redNetherBrick;
  /**@type {ItemType} */
  static redNetherBrickStairs;
  /**@type {ItemType} */
  static redSandstoneStairs;
  /**@type {ItemType} */
  static redstoneBlock;
  /**@type {ItemType} */
  static redstoneLamp;
  /**@type {ItemType} */
  static redstoneOre;
  /**@type {ItemType} */
  static redstoneTorch;
  /**@type {ItemType} */
  static redstoneWire;
  /**@type {ItemType} */
  static repeatingCommandBlock;
  /**@type {ItemType} */
  static reserved6;
  /**@type {ItemType} */
  static sandstoneStairs;
  /**@type {ItemType} */
  static sculkSensor;
  /**@type {ItemType} */
  static shroomlight;
  /**@type {ItemType} */
  static silverGlazedTerracotta;
  /**@type {ItemType} */
  static slime;
  /**@type {ItemType} */
  static smallDripleafBlock;
  /**@type {ItemType} */
  static smoothQuartzStairs;
  /**@type {ItemType} */
  static smoothRedSandstoneStairs;
  /**@type {ItemType} */
  static smoothSandstoneStairs;
  /**@type {ItemType} */
  static smoothStone;
  /**@type {ItemType} */
  static snow;
  /**@type {ItemType} */
  static soulFire;
  /**@type {ItemType} */
  static soulLantern;
  /**@type {ItemType} */
  static soulSand;
  /**@type {ItemType} */
  static soulSoil;
  /**@type {ItemType} */
  static soulTorch;
  /**@type {ItemType} */
  static sporeBlossom;
  /**@type {ItemType} */
  static spruceButton;
  /**@type {ItemType} */
  static spruceFenceGate;
  /**@type {ItemType} */
  static sprucePressurePlate;
  /**@type {ItemType} */
  static spruceStairs;
  /**@type {ItemType} */
  static spruceStandingSign;
  /**@type {ItemType} */
  static spruceTrapdoor;
  /**@type {ItemType} */
  static spruceWallSign;
  /**@type {ItemType} */
  static standingBanner;
  /**@type {ItemType} */
  static standingSign;
  /**@type {ItemType} */
  static stickypistonarmcollision;
  /**@type {ItemType} */
  static stoneBrickStairs;
  /**@type {ItemType} */
  static stoneButton;
  /**@type {ItemType} */
  static stonePressurePlate;
  /**@type {ItemType} */
  static stoneStairs;
  /**@type {ItemType} */
  static stonecutter;
  /**@type {ItemType} */
  static stonecutterBlock;
  /**@type {ItemType} */
  static strippedAcaciaLog;
  /**@type {ItemType} */
  static strippedBirchLog;
  /**@type {ItemType} */
  static strippedCrimsonHyphae;
  /**@type {ItemType} */
  static strippedCrimsonStem;
  /**@type {ItemType} */
  static strippedDarkOakLog;
  /**@type {ItemType} */
  static strippedJungleLog;
  /**@type {ItemType} */
  static strippedOakLog;
  /**@type {ItemType} */
  static strippedSpruceLog;
  /**@type {ItemType} */
  static strippedWarpedHyphae;
  /**@type {ItemType} */
  static strippedWarpedStem;
  /**@type {ItemType} */
  static structureBlock;
  /**@type {ItemType} */
  static structureVoid;
  /**@type {ItemType} */
  static sweetBerryBush;
  /**@type {ItemType} */
  static target;
  /**@type {ItemType} */
  static torch;
  /**@type {ItemType} */
  static trapdoor;
  /**@type {ItemType} */
  static trappedChest;
  /**@type {ItemType} */
  static tripwire;
  /**@type {ItemType} */
  static tripwireHook;
  /**@type {ItemType} */
  static twistingVines;
  /**@type {ItemType} */
  static underwaterTorch;
  /**@type {ItemType} */
  static unknown;
  /**@type {ItemType} */
  static unlitRedstoneTorch;
  /**@type {ItemType} */
  static unpoweredComparator;
  /**@type {ItemType} */
  static unpoweredRepeater;
  /**@type {ItemType} */
  static vine;
  /**@type {ItemType} */
  static wallBanner;
  /**@type {ItemType} */
  static wallSign;
  /**@type {ItemType} */
  static warpedButton;
  /**@type {ItemType} */
  static warpedDoubleSlab;
  /**@type {ItemType} */
  static warpedFence;
  /**@type {ItemType} */
  static warpedFenceGate;
  /**@type {ItemType} */
  static warpedFungus;
  /**@type {ItemType} */
  static warpedHyphae;
  /**@type {ItemType} */
  static warpedNylium;
  /**@type {ItemType} */
  static warpedPlanks;
  /**@type {ItemType} */
  static warpedPressurePlate;
  /**@type {ItemType} */
  static warpedStairs;
  /**@type {ItemType} */
  static warpedStandingSign;
  /**@type {ItemType} */
  static warpedStem;
  /**@type {ItemType} */
  static warpedTrapdoor;
  /**@type {ItemType} */
  static warpedWallSign;
  /**@type {ItemType} */
  static warpedWartBlock;
  /**@type {ItemType} */
  static water;
  /**@type {ItemType} */
  static waxedCopper;
  /**@type {ItemType} */
  static waxedCutCopper;
  /**@type {ItemType} */
  static waxedCutCopperStairs;
  /**@type {ItemType} */
  static waxedDoubleCutCopperSlab;
  /**@type {ItemType} */
  static waxedExposedCopper;
  /**@type {ItemType} */
  static waxedExposedCutCopper;
  /**@type {ItemType} */
  static waxedExposedCutCopperStairs;
  /**@type {ItemType} */
  static waxedExposedDoubleCutCopperSlab;
  /**@type {ItemType} */
  static waxedOxidizedCopper;
  /**@type {ItemType} */
  static waxedOxidizedCutCopper;
  /**@type {ItemType} */
  static waxedOxidizedCutCopperSlab;
  /**@type {ItemType} */
  static waxedOxidizedCutCopperStairs;
  /**@type {ItemType} */
  static waxedOxidizedDoubleCutCopperSlab;
  /**@type {ItemType} */
  static waxedWeatheredCopper;
  /**@type {ItemType} */
  static waxedWeatheredCutCopper;
  /**@type {ItemType} */
  static waxedWeatheredCutCopperStairs;
  /**@type {ItemType} */
  static waxedWeatheredDoubleCutCopperSlab;
  /**@type {ItemType} */
  static weatheredCopper;
  /**@type {ItemType} */
  static weatheredCutCopper;
  /**@type {ItemType} */
  static weatheredCutCopperStairs;
  /**@type {ItemType} */
  static weatheredDoubleCutCopperSlab;
  /**@type {ItemType} */
  static web;
  /**@type {ItemType} */
  static weepingVines;
  /**@type {ItemType} */
  static whiteGlazedTerracotta;
  /**@type {ItemType} */
  static witherRose;
  /**@type {ItemType} */
  static woodenButton;
  /**@type {ItemType} */
  static woodenPressurePlate;
  /**@type {ItemType} */
  static yellowGlazedTerracotta;
  /**@type {ItemType} */
  static ["item.acaciaDoor"];
  /**@type {ItemType} */
  static ["item.bed"];
  /**@type {ItemType} */
  static ["item.beetroot"];
  /**@type {ItemType} */
  static ["item.birchDoor"];
  /**@type {ItemType} */
  static ["item.cake"];
  /**@type {ItemType} */
  static ["item.camera"];
  /**@type {ItemType} */
  static ["item.campfire"];
  /**@type {ItemType} */
  static ["item.cauldron"];
  /**@type {ItemType} */
  static ["item.chain"];
  /**@type {ItemType} */
  static ["item.crimsonDoor"];
  /**@type {ItemType} */
  static ["item.darkOakDoor"];
  /**@type {ItemType} */
  static ["item.flowerPot"];
  /**@type {ItemType} */
  static ["item.frame"];
  /**@type {ItemType} */
  static ["item.glowFrame"];
  /**@type {ItemType} */
  static ["item.hopper"];
  /**@type {ItemType} */
  static ["item.ironDoor"];
  /**@type {ItemType} */
  static ["item.jungleDoor"];
  /**@type {ItemType} */
  static ["item.kelp"];
  /**@type {ItemType} */
  static ["item.netherSprouts"];
  /**@type {ItemType} */
  static ["item.netherWart"];
  /**@type {ItemType} */
  static ["item.reeds"];
  /**@type {ItemType} */
  static ["item.skull"];
  /**@type {ItemType} */
  static ["item.soulCampfire"];
  /**@type {ItemType} */
  static ["item.spruceDoor"];
  /**@type {ItemType} */
  static ["item.warpedDoor"];
  /**@type {ItemType} */
  static ["item.wheat"];
  /**@type {ItemType} */
  static ["item.woodenDoor"];

  // Namespace
  /**@type {ItemType} */
  static ["minecraft:air"];
  /**@type {ItemType} */
  static ["minecraft:apple"];
  /**@type {ItemType} */
  static ["minecraft:golden_apple"];
  /**@type {ItemType} */
  static ["minecraft:enchanted_golden_apple"];
  /**@type {ItemType} */
  static ["minecraft:mushroom_stew"];
  /**@type {ItemType} */
  static ["minecraft:bread"];
  /**@type {ItemType} */
  static ["minecraft:porkchop"];
  /**@type {ItemType} */
  static ["minecraft:cooked_porkchop"];
  /**@type {ItemType} */
  static ["minecraft:cod"];
  /**@type {ItemType} */
  static ["minecraft:salmon"];
  /**@type {ItemType} */
  static ["minecraft:tropical_fish"];
  /**@type {ItemType} */
  static ["minecraft:pufferfish"];
  /**@type {ItemType} */
  static ["minecraft:cooked_cod"];
  /**@type {ItemType} */
  static ["minecraft:cooked_salmon"];
  /**@type {ItemType} */
  static ["minecraft:dried_kelp"];
  /**@type {ItemType} */
  static ["minecraft:cookie"];
  /**@type {ItemType} */
  static ["minecraft:melon_slice"];
  /**@type {ItemType} */
  static ["minecraft:beef"];
  /**@type {ItemType} */
  static ["minecraft:cooked_beef"];
  /**@type {ItemType} */
  static ["minecraft:chicken"];
  /**@type {ItemType} */
  static ["minecraft:cooked_chicken"];
  /**@type {ItemType} */
  static ["minecraft:rotten_flesh"];
  /**@type {ItemType} */
  static ["minecraft:spider_eye"];
  /**@type {ItemType} */
  static ["minecraft:carrot"];
  /**@type {ItemType} */
  static ["minecraft:potato"];
  /**@type {ItemType} */
  static ["minecraft:baked_potato"];
  /**@type {ItemType} */
  static ["minecraft:poisonous_potato"];
  /**@type {ItemType} */
  static ["minecraft:golden_carrot"];
  /**@type {ItemType} */
  static ["minecraft:pumpkin_pie"];
  /**@type {ItemType} */
  static ["minecraft:beetroot"];
  /**@type {ItemType} */
  static ["minecraft:beetroot_soup"];
  /**@type {ItemType} */
  static ["minecraft:sweet_berries"];
  /**@type {ItemType} */
  static ["minecraft:rabbit"];
  /**@type {ItemType} */
  static ["minecraft:cooked_rabbit"];
  /**@type {ItemType} */
  static ["minecraft:rabbit_stew"];
  /**@type {ItemType} */
  static ["minecraft:wheat_seeds"];
  /**@type {ItemType} */
  static ["minecraft:pumpkin_seeds"];
  /**@type {ItemType} */
  static ["minecraft:melon_seeds"];
  /**@type {ItemType} */
  static ["minecraft:nether_wart"];
  /**@type {ItemType} */
  static ["minecraft:beetroot_seeds"];
  /**@type {ItemType} */
  static ["minecraft:iron_shovel"];
  /**@type {ItemType} */
  static ["minecraft:iron_pickaxe"];
  /**@type {ItemType} */
  static ["minecraft:iron_axe"];
  /**@type {ItemType} */
  static ["minecraft:flint_and_steel"];
  /**@type {ItemType} */
  static ["minecraft:bow"];
  /**@type {ItemType} */
  static ["minecraft:arrow"];
  /**@type {ItemType} */
  static ["minecraft:coal"];
  /**@type {ItemType} */
  static ["minecraft:charcoal"];
  /**@type {ItemType} */
  static ["minecraft:diamond"];
  /**@type {ItemType} */
  static ["minecraft:iron_ingot"];
  /**@type {ItemType} */
  static ["minecraft:gold_ingot"];
  /**@type {ItemType} */
  static ["minecraft:iron_sword"];
  /**@type {ItemType} */
  static ["minecraft:wooden_sword"];
  /**@type {ItemType} */
  static ["minecraft:wooden_shovel"];
  /**@type {ItemType} */
  static ["minecraft:wooden_pickaxe"];
  /**@type {ItemType} */
  static ["minecraft:wooden_axe"];
  /**@type {ItemType} */
  static ["minecraft:stone_sword"];
  /**@type {ItemType} */
  static ["minecraft:stone_shovel"];
  /**@type {ItemType} */
  static ["minecraft:stone_pickaxe"];
  /**@type {ItemType} */
  static ["minecraft:stone_axe"];
  /**@type {ItemType} */
  static ["minecraft:diamond_sword"];
  /**@type {ItemType} */
  static ["minecraft:diamond_shovel"];
  /**@type {ItemType} */
  static ["minecraft:diamond_pickaxe"];
  /**@type {ItemType} */
  static ["minecraft:diamond_axe"];
  /**@type {ItemType} */
  static ["minecraft:stick"];
  /**@type {ItemType} */
  static ["minecraft:bowl"];
  /**@type {ItemType} */
  static ["minecraft:golden_sword"];
  /**@type {ItemType} */
  static ["minecraft:golden_shovel"];
  /**@type {ItemType} */
  static ["minecraft:golden_pickaxe"];
  /**@type {ItemType} */
  static ["minecraft:golden_axe"];
  /**@type {ItemType} */
  static ["minecraft:String"];
  /**@type {ItemType} */
  static ["minecraft:feather"];
  /**@type {ItemType} */
  static ["minecraft:gunpowder"];
  /**@type {ItemType} */
  static ["minecraft:wooden_hoe"];
  /**@type {ItemType} */
  static ["minecraft:stone_hoe"];
  /**@type {ItemType} */
  static ["minecraft:iron_hoe"];
  /**@type {ItemType} */
  static ["minecraft:diamond_hoe"];
  /**@type {ItemType} */
  static ["minecraft:golden_hoe"];
  /**@type {ItemType} */
  static ["minecraft:wheat"];
  /**@type {ItemType} */
  static ["minecraft:leather_helmet"];
  /**@type {ItemType} */
  static ["minecraft:leather_chestplate"];
  /**@type {ItemType} */
  static ["minecraft:leather_leggings"];
  /**@type {ItemType} */
  static ["minecraft:leather_boots"];
  /**@type {ItemType} */
  static ["minecraft:chainmail_helmet"];
  /**@type {ItemType} */
  static ["minecraft:chainmail_chestplate"];
  /**@type {ItemType} */
  static ["minecraft:chainmail_leggings"];
  /**@type {ItemType} */
  static ["minecraft:chainmail_boots"];
  /**@type {ItemType} */
  static ["minecraft:iron_helmet"];
  /**@type {ItemType} */
  static ["minecraft:iron_chestplate"];
  /**@type {ItemType} */
  static ["minecraft:iron_leggings"];
  /**@type {ItemType} */
  static ["minecraft:iron_boots"];
  /**@type {ItemType} */
  static ["minecraft:diamond_helmet"];
  /**@type {ItemType} */
  static ["minecraft:diamond_chestplate"];
  /**@type {ItemType} */
  static ["minecraft:diamond_leggings"];
  /**@type {ItemType} */
  static ["minecraft:diamond_boots"];
  /**@type {ItemType} */
  static ["minecraft:golden_helmet"];
  /**@type {ItemType} */
  static ["minecraft:golden_chestplate"];
  /**@type {ItemType} */
  static ["minecraft:golden_leggings"];
  /**@type {ItemType} */
  static ["minecraft:golden_boots"];
  /**@type {ItemType} */
  static ["minecraft:shield"];
  /**@type {ItemType} */
  static ["minecraft:flint"];
  /**@type {ItemType} */
  static ["minecraft:painting"];
  /**@type {ItemType} */
  static ["minecraft:oak_sign"];
  /**@type {ItemType} */
  static ["minecraft:wooden_door"];
  /**@type {ItemType} */
  static ["minecraft:bucket"];
  /**@type {ItemType} */
  static ["minecraft:milk_bucket"];
  /**@type {ItemType} */
  static ["minecraft:water_bucket"];
  /**@type {ItemType} */
  static ["minecraft:lava_bucket"];
  /**@type {ItemType} */
  static ["minecraft:cod_bucket"];
  /**@type {ItemType} */
  static ["minecraft:salmon_bucket"];
  /**@type {ItemType} */
  static ["minecraft:tropical_fish_bucket"];
  /**@type {ItemType} */
  static ["minecraft:pufferfish_bucket"];
  /**@type {ItemType} */
  static ["minecraft:powder_snow_bucket"];
  /**@type {ItemType} */
  static ["minecraft:axolotl_bucket"];
  /**@type {ItemType} */
  static ["minecraft:minecart"];
  /**@type {ItemType} */
  static ["minecraft:saddle"];
  /**@type {ItemType} */
  static ["minecraft:iron_door"];
  /**@type {ItemType} */
  static ["minecraft:redstone"];
  /**@type {ItemType} */
  static ["minecraft:snowball"];
  /**@type {ItemType} */
  static ["minecraft:oak_boat"];
  /**@type {ItemType} */
  static ["minecraft:birch_boat"];
  /**@type {ItemType} */
  static ["minecraft:jungle_boat"];
  /**@type {ItemType} */
  static ["minecraft:spruce_boat"];
  /**@type {ItemType} */
  static ["minecraft:acacia_boat"];
  /**@type {ItemType} */
  static ["minecraft:dark_oak_boat"];
  /**@type {ItemType} */
  static ["minecraft:leather"];
  /**@type {ItemType} */
  static ["minecraft:kelp"];
  /**@type {ItemType} */
  static ["minecraft:brick"];
  /**@type {ItemType} */
  static ["minecraft:clay_ball"];
  /**@type {ItemType} */
  static ["minecraft:sugar_cane"];
  /**@type {ItemType} */
  static ["minecraft:paper"];
  /**@type {ItemType} */
  static ["minecraft:book"];
  /**@type {ItemType} */
  static ["minecraft:slime_ball"];
  /**@type {ItemType} */
  static ["minecraft:chest_minecart"];
  /**@type {ItemType} */
  static ["minecraft:egg"];
  /**@type {ItemType} */
  static ["minecraft:compass"];
  /**@type {ItemType} */
  static ["minecraft:fishing_rod"];
  /**@type {ItemType} */
  static ["minecraft:clock"];
  /**@type {ItemType} */
  static ["minecraft:glowstone_dust"];
  /**@type {ItemType} */
  static ["minecraft:black_dye"];
  /**@type {ItemType} */
  static ["minecraft:red_dye"];
  /**@type {ItemType} */
  static ["minecraft:green_dye"];
  /**@type {ItemType} */
  static ["minecraft:brown_dye"];
  /**@type {ItemType} */
  static ["minecraft:blue_dye"];
  /**@type {ItemType} */
  static ["minecraft:purple_dye"];
  /**@type {ItemType} */
  static ["minecraft:cyan_dye"];
  /**@type {ItemType} */
  static ["minecraft:light_gray_dye"];
  /**@type {ItemType} */
  static ["minecraft:gray_dye"];
  /**@type {ItemType} */
  static ["minecraft:pink_dye"];
  /**@type {ItemType} */
  static ["minecraft:lime_dye"];
  /**@type {ItemType} */
  static ["minecraft:yellow_dye"];
  /**@type {ItemType} */
  static ["minecraft:light_blue_dye"];
  /**@type {ItemType} */
  static ["minecraft:magenta_dye"];
  /**@type {ItemType} */
  static ["minecraft:orange_dye"];
  /**@type {ItemType} */
  static ["minecraft:white_dye"];
  /**@type {ItemType} */
  static ["minecraft:bone_meal"];
  /**@type {ItemType} */
  static ["minecraft:cocoa_beans"];
  /**@type {ItemType} */
  static ["minecraft:ink_sac"];
  /**@type {ItemType} */
  static ["minecraft:lapis_lazuli"];
  /**@type {ItemType} */
  static ["minecraft:bone"];
  /**@type {ItemType} */
  static ["minecraft:sugar"];
  /**@type {ItemType} */
  static ["minecraft:cake"];
  /**@type {ItemType} */
  static ["minecraft:bed"];
  /**@type {ItemType} */
  static ["minecraft:repeater"];
  /**@type {ItemType} */
  static ["minecraft:filled_map"];
  /**@type {ItemType} */
  static ["minecraft:shears"];
  /**@type {ItemType} */
  static ["minecraft:ender_pearl"];
  /**@type {ItemType} */
  static ["minecraft:blaze_rod"];
  /**@type {ItemType} */
  static ["minecraft:ghast_tear"];
  /**@type {ItemType} */
  static ["minecraft:gold_nugget"];
  /**@type {ItemType} */
  static ["minecraft:potion"];
  /**@type {ItemType} */
  static ["minecraft:glass_bottle"];
  /**@type {ItemType} */
  static ["minecraft:fermented_spider_eye"];
  /**@type {ItemType} */
  static ["minecraft:blaze_powder"];
  /**@type {ItemType} */
  static ["minecraft:magma_cream"];
  /**@type {ItemType} */
  static ["minecraft:brewing_stand"];
  /**@type {ItemType} */
  static ["minecraft:cauldron"];
  /**@type {ItemType} */
  static ["minecraft:ender_eye"];
  /**@type {ItemType} */
  static ["minecraft:glistering_melon_slice"];
  /**@type {ItemType} */
  static ["minecraft:chicken_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:cow_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:pig_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:sheep_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:wolf_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:mooshroom_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:creeper_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:enderman_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:silverfish_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:skeleton_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:slime_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:spider_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:zombie_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:zombie_pigman_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:villager_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:squid_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:ocelot_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:witch_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:bat_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:ghast_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:magma_cube_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:blaze_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:cave_spider_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:horse_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:rabbit_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:endermite_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:guardian_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:stray_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:husk_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:wither_skeleton_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:donkey_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:mule_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:skeleton_horse_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:zombie_horse_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:shulker_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:npc_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:elder_guardian_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:polar_bear_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:llama_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:vindicator_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:evoker_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:vex_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:zombie_villager_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:parrot_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:tropical_fish_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:cod_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:pufferfish_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:salmon_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:drowned_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:dolphin_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:turtle_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:phantom_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:agent_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:cat_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:panda_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:fox_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:pillager_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:wandering_trader_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:ravager_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:bee_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:strider_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:hoglin_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:piglin_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:zoglin_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:piglin_brute_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:goat_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:axolotl_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:copper_ingot"];
  /**@type {ItemType} */
  static ["minecraft:copper_block"];
  /**@type {ItemType} */
  static ["minecraft:cut_copper"];
  /**@type {ItemType} */
  static ["minecraft:cut_copper_stairs"];
  /**@type {ItemType} */
  static ["minecraft:cut_copper_slab"];
  /**@type {ItemType} */
  static ["minecraft:exposed_cut_copper_slab"];
  /**@type {ItemType} */
  static ["minecraft:weathered_cut_copper_slab"];
  /**@type {ItemType} */
  static ["minecraft:oxidized_cut_copper_slab"];
  /**@type {ItemType} */
  static ["minecraft:waxed_cut_copper_slab"];
  /**@type {ItemType} */
  static ["minecraft:waxed_exposed_cut_copper_slab"];
  /**@type {ItemType} */
  static ["minecraft:waxed_weathered_cut_copper_slab"];
  /**@type {ItemType} */
  static ["minecraft:glow_squid_spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:glow_ink_sac"];
  /**@type {ItemType} */
  static ["minecraft:experience_bottle"];
  /**@type {ItemType} */
  static ["minecraft:fire_charge"];
  /**@type {ItemType} */
  static ["minecraft:writable_book"];
  /**@type {ItemType} */
  static ["minecraft:written_book"];
  /**@type {ItemType} */
  static ["minecraft:emerald"];
  /**@type {ItemType} */
  static ["minecraft:frame"];
  /**@type {ItemType} */
  static ["minecraft:flower_pot"];
  /**@type {ItemType} */
  static ["minecraft:empty_map"];
  /**@type {ItemType} */
  static ["minecraft:skull"];
  /**@type {ItemType} */
  static ["minecraft:carrot_on_a_stick"];
  /**@type {ItemType} */
  static ["minecraft:nether_star"];
  /**@type {ItemType} */
  static ["minecraft:firework_rocket"];
  /**@type {ItemType} */
  static ["minecraft:firework_star"];
  /**@type {ItemType} */
  static ["minecraft:enchanted_book"];
  /**@type {ItemType} */
  static ["minecraft:comparator"];
  /**@type {ItemType} */
  static ["minecraft:netherbrick"];
  /**@type {ItemType} */
  static ["minecraft:quartz"];
  /**@type {ItemType} */
  static ["minecraft:tnt_minecart"];
  /**@type {ItemType} */
  static ["minecraft:hopper_minecart"];
  /**@type {ItemType} */
  static ["minecraft:hopper"];
  /**@type {ItemType} */
  static ["minecraft:rabbit_foot"];
  /**@type {ItemType} */
  static ["minecraft:rabbit_hide"];
  /**@type {ItemType} */
  static ["minecraft:leather_horse_armor"];
  /**@type {ItemType} */
  static ["minecraft:iron_horse_armor"];
  /**@type {ItemType} */
  static ["minecraft:golden_horse_armor"];
  /**@type {ItemType} */
  static ["minecraft:diamond_horse_armor"];
  /**@type {ItemType} */
  static ["minecraft:music_disc_13"];
  /**@type {ItemType} */
  static ["minecraft:music_disc_cat"];
  /**@type {ItemType} */
  static ["minecraft:music_disc_blocks"];
  /**@type {ItemType} */
  static ["minecraft:music_disc_chirp"];
  /**@type {ItemType} */
  static ["minecraft:music_disc_far"];
  /**@type {ItemType} */
  static ["minecraft:music_disc_mall"];
  /**@type {ItemType} */
  static ["minecraft:music_disc_mellohi"];
  /**@type {ItemType} */
  static ["minecraft:music_disc_stal"];
  /**@type {ItemType} */
  static ["minecraft:music_disc_strad"];
  /**@type {ItemType} */
  static ["minecraft:music_disc_ward"];
  /**@type {ItemType} */
  static ["minecraft:music_disc_11"];
  /**@type {ItemType} */
  static ["minecraft:music_disc_wait"];
  /**@type {ItemType} */
  static ["minecraft:trident"];
  /**@type {ItemType} */
  static ["minecraft:lead"];
  /**@type {ItemType} */
  static ["minecraft:name_tag"];
  /**@type {ItemType} */
  static ["minecraft:prismarine_crystals"];
  /**@type {ItemType} */
  static ["minecraft:mutton"];
  /**@type {ItemType} */
  static ["minecraft:cooked_mutton"];
  /**@type {ItemType} */
  static ["minecraft:armor_stand"];
  /**@type {ItemType} */
  static ["minecraft:spruce_door"];
  /**@type {ItemType} */
  static ["minecraft:birch_door"];
  /**@type {ItemType} */
  static ["minecraft:jungle_door"];
  /**@type {ItemType} */
  static ["minecraft:acacia_door"];
  /**@type {ItemType} */
  static ["minecraft:dark_oak_door"];
  /**@type {ItemType} */
  static ["minecraft:chorus_fruit"];
  /**@type {ItemType} */
  static ["minecraft:popped_chorus_fruit"];
  /**@type {ItemType} */
  static ["minecraft:dragon_breath"];
  /**@type {ItemType} */
  static ["minecraft:splash_potion"];
  /**@type {ItemType} */
  static ["minecraft:lingering_potion"];
  /**@type {ItemType} */
  static ["minecraft:command_block_minecart"];
  /**@type {ItemType} */
  static ["minecraft:elytra"];
  /**@type {ItemType} */
  static ["minecraft:prismarine_shard"];
  /**@type {ItemType} */
  static ["minecraft:shulker_shell"];
  /**@type {ItemType} */
  static ["minecraft:banner"];
  /**@type {ItemType} */
  static ["minecraft:totem_of_undying"];
  /**@type {ItemType} */
  static ["minecraft:iron_nugget"];
  /**@type {ItemType} */
  static ["minecraft:nautilus_shell"];
  /**@type {ItemType} */
  static ["minecraft:heart_of_the_sea"];
  /**@type {ItemType} */
  static ["minecraft:scute"];
  /**@type {ItemType} */
  static ["minecraft:turtle_helmet"];
  /**@type {ItemType} */
  static ["minecraft:phantom_membrane"];
  /**@type {ItemType} */
  static ["minecraft:crossbow"];
  /**@type {ItemType} */
  static ["minecraft:spruce_sign"];
  /**@type {ItemType} */
  static ["minecraft:birch_sign"];
  /**@type {ItemType} */
  static ["minecraft:jungle_sign"];
  /**@type {ItemType} */
  static ["minecraft:acacia_sign"];
  /**@type {ItemType} */
  static ["minecraft:dark_oak_sign"];
  /**@type {ItemType} */
  static ["minecraft:flower_banner_pattern"];
  /**@type {ItemType} */
  static ["minecraft:creeper_banner_pattern"];
  /**@type {ItemType} */
  static ["minecraft:skull_banner_pattern"];
  /**@type {ItemType} */
  static ["minecraft:mojang_banner_pattern"];
  /**@type {ItemType} */
  static ["minecraft:field_masoned_banner_pattern"];
  /**@type {ItemType} */
  static ["minecraft:bordure_indented_banner_pattern"];
  /**@type {ItemType} */
  static ["minecraft:piglin_banner_pattern"];
  /**@type {ItemType} */
  static ["minecraft:campfire"];
  /**@type {ItemType} */
  static ["minecraft:suspicious_stew"];
  /**@type {ItemType} */
  static ["minecraft:honeycomb"];
  /**@type {ItemType} */
  static ["minecraft:honey_bottle"];
  /**@type {ItemType} */
  static ["minecraft:camera"];
  /**@type {ItemType} */
  static ["minecraft:compound"];
  /**@type {ItemType} */
  static ["minecraft:ice_bomb"];
  /**@type {ItemType} */
  static ["minecraft:bleach"];
  /**@type {ItemType} */
  static ["minecraft:rapid_fertilizer"];
  /**@type {ItemType} */
  static ["minecraft:balloon"];
  /**@type {ItemType} */
  static ["minecraft:medicine"];
  /**@type {ItemType} */
  static ["minecraft:sparkler"];
  /**@type {ItemType} */
  static ["minecraft:glow_stick"];
  /**@type {ItemType} */
  static ["minecraft:lodestone_compass"];
  /**@type {ItemType} */
  static ["minecraft:netherite_ingot"];
  /**@type {ItemType} */
  static ["minecraft:netherite_sword"];
  /**@type {ItemType} */
  static ["minecraft:netherite_shovel"];
  /**@type {ItemType} */
  static ["minecraft:netherite_pickaxe"];
  /**@type {ItemType} */
  static ["minecraft:netherite_axe"];
  /**@type {ItemType} */
  static ["minecraft:netherite_hoe"];
  /**@type {ItemType} */
  static ["minecraft:netherite_helmet"];
  /**@type {ItemType} */
  static ["minecraft:netherite_chestplate"];
  /**@type {ItemType} */
  static ["minecraft:netherite_leggings"];
  /**@type {ItemType} */
  static ["minecraft:netherite_boots"];
  /**@type {ItemType} */
  static ["minecraft:netherite_scrap"];
  /**@type {ItemType} */
  static ["minecraft:crimson_sign"];
  /**@type {ItemType} */
  static ["minecraft:warped_sign"];
  /**@type {ItemType} */
  static ["minecraft:crimson_door"];
  /**@type {ItemType} */
  static ["minecraft:warped_door"];
  /**@type {ItemType} */
  static ["minecraft:warped_fungus_on_a_stick"];
  /**@type {ItemType} */
  static ["minecraft:chain"];
  /**@type {ItemType} */
  static ["minecraft:music_disc_pigstep"];
  /**@type {ItemType} */
  static ["minecraft:nether_sprouts"];
  /**@type {ItemType} */
  static ["minecraft:blackstone_slab"];
  /**@type {ItemType} */
  static ["minecraft:polished_blackstone_brick_slab"];
  /**@type {ItemType} */
  static ["minecraft:polished_blackstone_slab"];
  /**@type {ItemType} */
  static ["minecraft:soul_campfire"];
  /**@type {ItemType} */
  static ["minecraft:goat_horn"];
  /**@type {ItemType} */
  static ["minecraft:glow_frame"];
  /**@type {ItemType} */
  static ["minecraft:cobbled_deepslate_slab"];
  /**@type {ItemType} */
  static ["minecraft:polished_deepslate_slab"];
  /**@type {ItemType} */
  static ["minecraft:deepslate_tile_slab"];
  /**@type {ItemType} */
  static ["minecraft:deepslate_brick_slab"];
  /**@type {ItemType} */
  static ["minecraft:stone"];
  /**@type {ItemType} */
  static ["minecraft:dirt"];
  /**@type {ItemType} */
  static ["minecraft:farmland"];
  /**@type {ItemType} */
  static ["minecraft:sand"];
  /**@type {ItemType} */
  static ["minecraft:stained_hardened_clay"];
  /**@type {ItemType} */
  static ["minecraft:wool"];
  /**@type {ItemType} */
  static ["minecraft:carpet"];
  /**@type {ItemType} */
  static ["minecraft:log"];
  /**@type {ItemType} */
  static ["minecraft:fence"];
  /**@type {ItemType} */
  static ["minecraft:stonebrick"];
  /**@type {ItemType} */
  static ["minecraft:coral_block"];
  /**@type {ItemType} */
  static ["minecraft:double_stone_slab"];
  /**@type {ItemType} */
  static ["minecraft:double_stone_slab2"];
  /**@type {ItemType} */
  static ["minecraft:double_stone_slab3"];
  /**@type {ItemType} */
  static ["minecraft:double_stone_slab4"];
  /**@type {ItemType} */
  static ["minecraft:real_double_stone_slab"];
  /**@type {ItemType} */
  static ["minecraft:real_double_stone_slab2"];
  /**@type {ItemType} */
  static ["minecraft:real_double_stone_slab3"];
  /**@type {ItemType} */
  static ["minecraft:real_double_stone_slab4"];
  /**@type {ItemType} */
  static ["minecraft:coral_fan"];
  /**@type {ItemType} */
  static ["minecraft:coral_fan_dead"];
  /**@type {ItemType} */
  static ["minecraft:sea_pickle"];
  /**@type {ItemType} */
  static ["minecraft:sapling"];
  /**@type {ItemType} */
  static ["minecraft:leaves"];
  /**@type {ItemType} */
  static ["minecraft:leaves2"];
  /**@type {ItemType} */
  static ["minecraft:azalea_leaves"];
  /**@type {ItemType} */
  static ["minecraft:azalea_leaves_flowered"];
  /**@type {ItemType} */
  static ["minecraft:sandstone"];
  /**@type {ItemType} */
  static ["minecraft:red_sandstone"];
  /**@type {ItemType} */
  static ["minecraft:wooden_slab"];
  /**@type {ItemType} */
  static ["minecraft:crimson_roots"];
  /**@type {ItemType} */
  static ["minecraft:warped_roots"];
  /**@type {ItemType} */
  static ["minecraft:yellow_flower"];
  /**@type {ItemType} */
  static ["minecraft:red_flower"];
  /**@type {ItemType} */
  static ["minecraft:double_plant"];
  /**@type {ItemType} */
  static ["minecraft:waterlily"];
  /**@type {ItemType} */
  static ["minecraft:sponge"];
  /**@type {ItemType} */
  static ["minecraft:snow_layer"];
  /**@type {ItemType} */
  static ["minecraft:planks"];
  /**@type {ItemType} */
  static ["minecraft:quartz_block"];
  /**@type {ItemType} */
  static ["minecraft:purpur_block"];
  /**@type {ItemType} */
  static ["minecraft:cobblestone_wall"];
  /**@type {ItemType} */
  static ["minecraft:coral"];
  /**@type {ItemType} */
  static ["minecraft:tallgrass"];
  /**@type {ItemType} */
  static ["minecraft:seagrass"];
  /**@type {ItemType} */
  static ["minecraft:brown_mushroom_block"];
  /**@type {ItemType} */
  static ["minecraft:red_mushroom_block"];
  /**@type {ItemType} */
  static ["minecraft:log2"];
  /**@type {ItemType} */
  static ["minecraft:end_portal_frame"];
  /**@type {ItemType} */
  static ["minecraft:anvil"];
  /**@type {ItemType} */
  static ["minecraft:monster_egg"];
  /**@type {ItemType} */
  static ["minecraft:brewingstandblock"];
  /**@type {ItemType} */
  static ["minecraft:beacon"];
  /**@type {ItemType} */
  static ["minecraft:conduit"];
  /**@type {ItemType} */
  static ["minecraft:prismarine"];
  /**@type {ItemType} */
  static ["minecraft:sealantern"];
  /**@type {ItemType} */
  static ["minecraft:concrete"];
  /**@type {ItemType} */
  static ["minecraft:concrete_powder"];
  /**@type {ItemType} */
  static ["minecraft:magma"];
  /**@type {ItemType} */
  static ["minecraft:stained_glass"];
  /**@type {ItemType} */
  static ["minecraft:stained_glass_pane"];
  /**@type {ItemType} */
  static ["minecraft:undyed_shulker_box"];
  /**@type {ItemType} */
  static ["minecraft:shulker_box"];
  /**@type {ItemType} */
  static ["minecraft:piston"];
  /**@type {ItemType} */
  static ["minecraft:sticky_piston"];
  /**@type {ItemType} */
  static ["minecraft:turtle_egg"];
  /**@type {ItemType} */
  static ["minecraft:bamboo"];
  /**@type {ItemType} */
  static ["minecraft:scaffolding"];
  /**@type {ItemType} */
  static ["minecraft:blast_furnace"];
  /**@type {ItemType} */
  static ["minecraft:smoker"];
  /**@type {ItemType} */
  static ["minecraft:smithing_table"];
  /**@type {ItemType} */
  static ["minecraft:barrel"];
  /**@type {ItemType} */
  static ["minecraft:lantern"];
  /**@type {ItemType} */
  static ["minecraft:loom"];
  /**@type {ItemType} */
  static ["minecraft:grindstone"];
  /**@type {ItemType} */
  static ["minecraft:bell"];
  /**@type {ItemType} */
  static ["minecraft:cartography_table"];
  /**@type {ItemType} */
  static ["minecraft:fletching_table"];
  /**@type {ItemType} */
  static ["minecraft:wood"];
  /**@type {ItemType} */
  static ["minecraft:chemistry_table"];
  /**@type {ItemType} */
  static ["minecraft:tnt"];
  /**@type {ItemType} */
  static ["minecraft:hard_stained_glass"];
  /**@type {ItemType} */
  static ["minecraft:hard_stained_glass_pane"];
  /**@type {ItemType} */
  static ["minecraft:colored_torch_rg"];
  /**@type {ItemType} */
  static ["minecraft:colored_torch_bp"];
  /**@type {ItemType} */
  static ["minecraft:light_block"];
  /**@type {ItemType} */
  static ["minecraft:pumpkin"];
  /**@type {ItemType} */
  static ["minecraft:carved_pumpkin"];
  /**@type {ItemType} */
  static ["minecraft:lit_pumpkin"];
  /**@type {ItemType} */
  static ["minecraft:crimson_slab"];
  /**@type {ItemType} */
  static ["minecraft:warped_slab"];
  /**@type {ItemType} */
  static ["minecraft:element_0"];
  /**@type {ItemType} */
  static ["minecraft:element_1"];
  /**@type {ItemType} */
  static ["minecraft:element_2"];
  /**@type {ItemType} */
  static ["minecraft:element_3"];
  /**@type {ItemType} */
  static ["minecraft:element_4"];
  /**@type {ItemType} */
  static ["minecraft:element_5"];
  /**@type {ItemType} */
  static ["minecraft:element_6"];
  /**@type {ItemType} */
  static ["minecraft:element_7"];
  /**@type {ItemType} */
  static ["minecraft:element_8"];
  /**@type {ItemType} */
  static ["minecraft:element_9"];
  /**@type {ItemType} */
  static ["minecraft:element_10"];
  /**@type {ItemType} */
  static ["minecraft:element_11"];
  /**@type {ItemType} */
  static ["minecraft:element_12"];
  /**@type {ItemType} */
  static ["minecraft:element_13"];
  /**@type {ItemType} */
  static ["minecraft:element_14"];
  /**@type {ItemType} */
  static ["minecraft:element_15"];
  /**@type {ItemType} */
  static ["minecraft:element_16"];
  /**@type {ItemType} */
  static ["minecraft:element_17"];
  /**@type {ItemType} */
  static ["minecraft:element_18"];
  /**@type {ItemType} */
  static ["minecraft:element_19"];
  /**@type {ItemType} */
  static ["minecraft:element_20"];
  /**@type {ItemType} */
  static ["minecraft:element_21"];
  /**@type {ItemType} */
  static ["minecraft:element_22"];
  /**@type {ItemType} */
  static ["minecraft:element_23"];
  /**@type {ItemType} */
  static ["minecraft:element_24"];
  /**@type {ItemType} */
  static ["minecraft:element_25"];
  /**@type {ItemType} */
  static ["minecraft:element_26"];
  /**@type {ItemType} */
  static ["minecraft:element_27"];
  /**@type {ItemType} */
  static ["minecraft:element_28"];
  /**@type {ItemType} */
  static ["minecraft:element_29"];
  /**@type {ItemType} */
  static ["minecraft:element_30"];
  /**@type {ItemType} */
  static ["minecraft:element_31"];
  /**@type {ItemType} */
  static ["minecraft:element_32"];
  /**@type {ItemType} */
  static ["minecraft:element_33"];
  /**@type {ItemType} */
  static ["minecraft:element_34"];
  /**@type {ItemType} */
  static ["minecraft:element_35"];
  /**@type {ItemType} */
  static ["minecraft:element_36"];
  /**@type {ItemType} */
  static ["minecraft:element_37"];
  /**@type {ItemType} */
  static ["minecraft:element_38"];
  /**@type {ItemType} */
  static ["minecraft:element_39"];
  /**@type {ItemType} */
  static ["minecraft:element_40"];
  /**@type {ItemType} */
  static ["minecraft:element_41"];
  /**@type {ItemType} */
  static ["minecraft:element_42"];
  /**@type {ItemType} */
  static ["minecraft:element_43"];
  /**@type {ItemType} */
  static ["minecraft:element_44"];
  /**@type {ItemType} */
  static ["minecraft:element_45"];
  /**@type {ItemType} */
  static ["minecraft:element_46"];
  /**@type {ItemType} */
  static ["minecraft:element_47"];
  /**@type {ItemType} */
  static ["minecraft:element_48"];
  /**@type {ItemType} */
  static ["minecraft:element_49"];
  /**@type {ItemType} */
  static ["minecraft:element_50"];
  /**@type {ItemType} */
  static ["minecraft:element_51"];
  /**@type {ItemType} */
  static ["minecraft:element_52"];
  /**@type {ItemType} */
  static ["minecraft:element_53"];
  /**@type {ItemType} */
  static ["minecraft:element_54"];
  /**@type {ItemType} */
  static ["minecraft:element_55"];
  /**@type {ItemType} */
  static ["minecraft:element_56"];
  /**@type {ItemType} */
  static ["minecraft:element_57"];
  /**@type {ItemType} */
  static ["minecraft:element_58"];
  /**@type {ItemType} */
  static ["minecraft:element_59"];
  /**@type {ItemType} */
  static ["minecraft:element_60"];
  /**@type {ItemType} */
  static ["minecraft:element_61"];
  /**@type {ItemType} */
  static ["minecraft:element_62"];
  /**@type {ItemType} */
  static ["minecraft:element_63"];
  /**@type {ItemType} */
  static ["minecraft:element_64"];
  /**@type {ItemType} */
  static ["minecraft:element_65"];
  /**@type {ItemType} */
  static ["minecraft:element_66"];
  /**@type {ItemType} */
  static ["minecraft:element_67"];
  /**@type {ItemType} */
  static ["minecraft:element_68"];
  /**@type {ItemType} */
  static ["minecraft:element_69"];
  /**@type {ItemType} */
  static ["minecraft:element_70"];
  /**@type {ItemType} */
  static ["minecraft:element_71"];
  /**@type {ItemType} */
  static ["minecraft:element_72"];
  /**@type {ItemType} */
  static ["minecraft:element_73"];
  /**@type {ItemType} */
  static ["minecraft:element_74"];
  /**@type {ItemType} */
  static ["minecraft:element_75"];
  /**@type {ItemType} */
  static ["minecraft:element_76"];
  /**@type {ItemType} */
  static ["minecraft:element_77"];
  /**@type {ItemType} */
  static ["minecraft:element_78"];
  /**@type {ItemType} */
  static ["minecraft:element_79"];
  /**@type {ItemType} */
  static ["minecraft:element_80"];
  /**@type {ItemType} */
  static ["minecraft:element_81"];
  /**@type {ItemType} */
  static ["minecraft:element_82"];
  /**@type {ItemType} */
  static ["minecraft:element_83"];
  /**@type {ItemType} */
  static ["minecraft:element_84"];
  /**@type {ItemType} */
  static ["minecraft:element_85"];
  /**@type {ItemType} */
  static ["minecraft:element_86"];
  /**@type {ItemType} */
  static ["minecraft:element_87"];
  /**@type {ItemType} */
  static ["minecraft:element_88"];
  /**@type {ItemType} */
  static ["minecraft:element_89"];
  /**@type {ItemType} */
  static ["minecraft:element_90"];
  /**@type {ItemType} */
  static ["minecraft:element_91"];
  /**@type {ItemType} */
  static ["minecraft:element_92"];
  /**@type {ItemType} */
  static ["minecraft:element_93"];
  /**@type {ItemType} */
  static ["minecraft:element_94"];
  /**@type {ItemType} */
  static ["minecraft:element_95"];
  /**@type {ItemType} */
  static ["minecraft:element_96"];
  /**@type {ItemType} */
  static ["minecraft:element_97"];
  /**@type {ItemType} */
  static ["minecraft:element_98"];
  /**@type {ItemType} */
  static ["minecraft:element_99"];
  /**@type {ItemType} */
  static ["minecraft:element_100"];
  /**@type {ItemType} */
  static ["minecraft:element_101"];
  /**@type {ItemType} */
  static ["minecraft:element_102"];
  /**@type {ItemType} */
  static ["minecraft:element_103"];
  /**@type {ItemType} */
  static ["minecraft:element_104"];
  /**@type {ItemType} */
  static ["minecraft:element_105"];
  /**@type {ItemType} */
  static ["minecraft:element_106"];
  /**@type {ItemType} */
  static ["minecraft:element_107"];
  /**@type {ItemType} */
  static ["minecraft:element_108"];
  /**@type {ItemType} */
  static ["minecraft:element_109"];
  /**@type {ItemType} */
  static ["minecraft:element_110"];
  /**@type {ItemType} */
  static ["minecraft:element_111"];
  /**@type {ItemType} */
  static ["minecraft:element_112"];
  /**@type {ItemType} */
  static ["minecraft:element_113"];
  /**@type {ItemType} */
  static ["minecraft:element_114"];
  /**@type {ItemType} */
  static ["minecraft:element_115"];
  /**@type {ItemType} */
  static ["minecraft:element_116"];
  /**@type {ItemType} */
  static ["minecraft:element_117"];
  /**@type {ItemType} */
  static ["minecraft:element_118"];
  /**@type {ItemType} */
  static ["minecraft:composter"];
  /**@type {ItemType} */
  static ["minecraft:netherite_block"];
  /**@type {ItemType} */
  static ["minecraft:ancient_debris"];
  /**@type {ItemType} */
  static ["minecraft:respawn_anchor"];
  /**@type {ItemType} */
  static ["minecraft:crying_obsidian"];
  /**@type {ItemType} */
  static ["minecraft:boat"];
  /**@type {ItemType} */
  static ["minecraft:dye"];
  /**@type {ItemType} */
  static ["minecraft:banner_pattern"];
  /**@type {ItemType} */
  static ["minecraft:spawn_egg"];
  /**@type {ItemType} */
  static ["minecraft:end_crystal"];
  /**@type {ItemType} */
  static ["minecraft:glow_berries"];
  /**@type {ItemType} */
  static ["minecraft:acacia_button"];
  /**@type {ItemType} */
  static ["minecraft:item.acacia_door"];
  /**@type {ItemType} */
  static ["minecraft:acacia_fence_gate"];
  /**@type {ItemType} */
  static ["minecraft:acacia_pressure_plate"];
  /**@type {ItemType} */
  static ["minecraft:acacia_stairs"];
  /**@type {ItemType} */
  static ["minecraft:acacia_standing_sign"];
  /**@type {ItemType} */
  static ["minecraft:acacia_trapdoor"];
  /**@type {ItemType} */
  static ["minecraft:acacia_wall_sign"];
  /**@type {ItemType} */
  static ["minecraft:activator_rail"];
  /**@type {ItemType} */
  static ["minecraft:allow"];
  /**@type {ItemType} */
  static ["minecraft:andesite_stairs"];
  /**@type {ItemType} */
  static ["minecraft:azalea"];
  /**@type {ItemType} */
  static ["minecraft:bamboo_sapling"];
  /**@type {ItemType} */
  static ["minecraft:barrier"];
  /**@type {ItemType} */
  static ["minecraft:basalt"];
  /**@type {ItemType} */
  static ["minecraft:item.bed"];
  /**@type {ItemType} */
  static ["minecraft:bedrock"];
  /**@type {ItemType} */
  static ["minecraft:bee_nest"];
  /**@type {ItemType} */
  static ["minecraft:beehive"];
  /**@type {ItemType} */
  static ["minecraft:item.beetroot"];
  /**@type {ItemType} */
  static ["minecraft:big_dripleaf"];
  /**@type {ItemType} */
  static ["minecraft:birch_button"];
  /**@type {ItemType} */
  static ["minecraft:item.birch_door"];
  /**@type {ItemType} */
  static ["minecraft:birch_fence_gate"];
  /**@type {ItemType} */
  static ["minecraft:birch_pressure_plate"];
  /**@type {ItemType} */
  static ["minecraft:birch_stairs"];
  /**@type {ItemType} */
  static ["minecraft:birch_standing_sign"];
  /**@type {ItemType} */
  static ["minecraft:birch_trapdoor"];
  /**@type {ItemType} */
  static ["minecraft:birch_wall_sign"];
  /**@type {ItemType} */
  static ["minecraft:black_glazed_terracotta"];
  /**@type {ItemType} */
  static ["minecraft:blackstone"];
  /**@type {ItemType} */
  static ["minecraft:blackstone_double_slab"];
  /**@type {ItemType} */
  static ["minecraft:blackstone_stairs"];
  /**@type {ItemType} */
  static ["minecraft:blackstone_wall"];
  /**@type {ItemType} */
  static ["minecraft:blue_glazed_terracotta"];
  /**@type {ItemType} */
  static ["minecraft:blue_ice"];
  /**@type {ItemType} */
  static ["minecraft:bone_block"];
  /**@type {ItemType} */
  static ["minecraft:bookshelf"];
  /**@type {ItemType} */
  static ["minecraft:border_block"];
  /**@type {ItemType} */
  static ["minecraft:brick_block"];
  /**@type {ItemType} */
  static ["minecraft:brick_stairs"];
  /**@type {ItemType} */
  static ["minecraft:brown_glazed_terracotta"];
  /**@type {ItemType} */
  static ["minecraft:brown_mushroom"];
  /**@type {ItemType} */
  static ["minecraft:bubble_column"];
  /**@type {ItemType} */
  static ["minecraft:cactus"];
  /**@type {ItemType} */
  static ["minecraft:item.cake"];
  /**@type {ItemType} */
  static ["minecraft:item.camera"];
  /**@type {ItemType} */
  static ["minecraft:item.campfire"];
  /**@type {ItemType} */
  static ["minecraft:carrots"];
  /**@type {ItemType} */
  static ["minecraft:item.cauldron"];
  /**@type {ItemType} */
  static ["minecraft:cave_vines"];
  /**@type {ItemType} */
  static ["minecraft:cave_vines_body_with_berries"];
  /**@type {ItemType} */
  static ["minecraft:cave_vines_head_with_berries"];
  /**@type {ItemType} */
  static ["minecraft:item.chain"];
  /**@type {ItemType} */
  static ["minecraft:chain_command_block"];
  /**@type {ItemType} */
  static ["minecraft:chemical_heat"];
  /**@type {ItemType} */
  static ["minecraft:chest"];
  /**@type {ItemType} */
  static ["minecraft:chiseled_deepslate"];
  /**@type {ItemType} */
  static ["minecraft:chiseled_nether_bricks"];
  /**@type {ItemType} */
  static ["minecraft:chiseled_polished_blackstone"];
  /**@type {ItemType} */
  static ["minecraft:chorus_flower"];
  /**@type {ItemType} */
  static ["minecraft:chorus_plant"];
  /**@type {ItemType} */
  static ["minecraft:clay"];
  /**@type {ItemType} */
  static ["minecraft:coal_block"];
  /**@type {ItemType} */
  static ["minecraft:coal_ore"];
  /**@type {ItemType} */
  static ["minecraft:cobbled_deepslate"];
  /**@type {ItemType} */
  static ["minecraft:cobbled_deepslate_double_slab"];
  /**@type {ItemType} */
  static ["minecraft:cobbled_deepslate_stairs"];
  /**@type {ItemType} */
  static ["minecraft:cobbled_deepslate_wall"];
  /**@type {ItemType} */
  static ["minecraft:cobblestone"];
  /**@type {ItemType} */
  static ["minecraft:cocoa"];
  /**@type {ItemType} */
  static ["minecraft:command_block"];
  /**@type {ItemType} */
  static ["minecraft:copper_ore"];
  /**@type {ItemType} */
  static ["minecraft:coral_fan_hang"];
  /**@type {ItemType} */
  static ["minecraft:coral_fan_hang2"];
  /**@type {ItemType} */
  static ["minecraft:coral_fan_hang3"];
  /**@type {ItemType} */
  static ["minecraft:cracked_deepslate_bricks"];
  /**@type {ItemType} */
  static ["minecraft:cracked_deepslate_tiles"];
  /**@type {ItemType} */
  static ["minecraft:cracked_nether_bricks"];
  /**@type {ItemType} */
  static ["minecraft:cracked_polished_blackstone_bricks"];
  /**@type {ItemType} */
  static ["minecraft:crafting_table"];
  /**@type {ItemType} */
  static ["minecraft:crimson_button"];
  /**@type {ItemType} */
  static ["minecraft:item.crimson_door"];
  /**@type {ItemType} */
  static ["minecraft:crimson_double_slab"];
  /**@type {ItemType} */
  static ["minecraft:crimson_fence"];
  /**@type {ItemType} */
  static ["minecraft:crimson_fence_gate"];
  /**@type {ItemType} */
  static ["minecraft:crimson_fungus"];
  /**@type {ItemType} */
  static ["minecraft:crimson_hyphae"];
  /**@type {ItemType} */
  static ["minecraft:crimson_nylium"];
  /**@type {ItemType} */
  static ["minecraft:crimson_planks"];
  /**@type {ItemType} */
  static ["minecraft:crimson_pressure_plate"];
  /**@type {ItemType} */
  static ["minecraft:crimson_stairs"];
  /**@type {ItemType} */
  static ["minecraft:crimson_standing_sign"];
  /**@type {ItemType} */
  static ["minecraft:crimson_stem"];
  /**@type {ItemType} */
  static ["minecraft:crimson_trapdoor"];
  /**@type {ItemType} */
  static ["minecraft:crimson_wall_sign"];
  /**@type {ItemType} */
  static ["minecraft:cyan_glazed_terracotta"];
  /**@type {ItemType} */
  static ["minecraft:dark_oak_button"];
  /**@type {ItemType} */
  static ["minecraft:item.dark_oak_door"];
  /**@type {ItemType} */
  static ["minecraft:dark_oak_fence_gate"];
  /**@type {ItemType} */
  static ["minecraft:dark_oak_pressure_plate"];
  /**@type {ItemType} */
  static ["minecraft:dark_oak_stairs"];
  /**@type {ItemType} */
  static ["minecraft:dark_oak_trapdoor"];
  /**@type {ItemType} */
  static ["minecraft:dark_prismarine_stairs"];
  /**@type {ItemType} */
  static ["minecraft:darkoak_standing_sign"];
  /**@type {ItemType} */
  static ["minecraft:darkoak_wall_sign"];
  /**@type {ItemType} */
  static ["minecraft:daylight_detector"];
  /**@type {ItemType} */
  static ["minecraft:daylight_detector_inverted"];
  /**@type {ItemType} */
  static ["minecraft:deadbush"];
  /**@type {ItemType} */
  static ["minecraft:deepslate"];
  /**@type {ItemType} */
  static ["minecraft:deepslate_brick_double_slab"];
  /**@type {ItemType} */
  static ["minecraft:deepslate_brick_stairs"];
  /**@type {ItemType} */
  static ["minecraft:deepslate_brick_wall"];
  /**@type {ItemType} */
  static ["minecraft:deepslate_bricks"];
  /**@type {ItemType} */
  static ["minecraft:deepslate_coal_ore"];
  /**@type {ItemType} */
  static ["minecraft:deepslate_copper_ore"];
  /**@type {ItemType} */
  static ["minecraft:deepslate_diamond_ore"];
  /**@type {ItemType} */
  static ["minecraft:deepslate_emerald_ore"];
  /**@type {ItemType} */
  static ["minecraft:deepslate_gold_ore"];
  /**@type {ItemType} */
  static ["minecraft:deepslate_iron_ore"];
  /**@type {ItemType} */
  static ["minecraft:deepslate_lapis_ore"];
  /**@type {ItemType} */
  static ["minecraft:deepslate_redstone_ore"];
  /**@type {ItemType} */
  static ["minecraft:deepslate_tile_double_slab"];
  /**@type {ItemType} */
  static ["minecraft:deepslate_tile_stairs"];
  /**@type {ItemType} */
  static ["minecraft:deepslate_tile_wall"];
  /**@type {ItemType} */
  static ["minecraft:deepslate_tiles"];
  /**@type {ItemType} */
  static ["minecraft:deny"];
  /**@type {ItemType} */
  static ["minecraft:detector_rail"];
  /**@type {ItemType} */
  static ["minecraft:diamond_block"];
  /**@type {ItemType} */
  static ["minecraft:diamond_ore"];
  /**@type {ItemType} */
  static ["minecraft:diorite_stairs"];
  /**@type {ItemType} */
  static ["minecraft:dirt_with_roots"];
  /**@type {ItemType} */
  static ["minecraft:dispenser"];
  /**@type {ItemType} */
  static ["minecraft:double_cut_copper_slab"];
  /**@type {ItemType} */
  static ["minecraft:double_wooden_slab"];
  /**@type {ItemType} */
  static ["minecraft:dragon_egg"];
  /**@type {ItemType} */
  static ["minecraft:dried_kelp_block"];
  /**@type {ItemType} */
  static ["minecraft:dripstone_block"];
  /**@type {ItemType} */
  static ["minecraft:dropper"];
  /**@type {ItemType} */
  static ["minecraft:emerald_block"];
  /**@type {ItemType} */
  static ["minecraft:emerald_ore"];
  /**@type {ItemType} */
  static ["minecraft:enchanting_table"];
  /**@type {ItemType} */
  static ["minecraft:end_brick_stairs"];
  /**@type {ItemType} */
  static ["minecraft:end_bricks"];
  /**@type {ItemType} */
  static ["minecraft:end_gateway"];
  /**@type {ItemType} */
  static ["minecraft:end_portal"];
  /**@type {ItemType} */
  static ["minecraft:end_rod"];
  /**@type {ItemType} */
  static ["minecraft:end_stone"];
  /**@type {ItemType} */
  static ["minecraft:ender_chest"];
  /**@type {ItemType} */
  static ["minecraft:exposed_copper"];
  /**@type {ItemType} */
  static ["minecraft:exposed_cut_copper"];
  /**@type {ItemType} */
  static ["minecraft:exposed_cut_copper_stairs"];
  /**@type {ItemType} */
  static ["minecraft:exposed_double_cut_copper_slab"];
  /**@type {ItemType} */
  static ["minecraft:fence_gate"];
  /**@type {ItemType} */
  static ["minecraft:fire"];
  /**@type {ItemType} */
  static ["minecraft:item.flower_pot"];
  /**@type {ItemType} */
  static ["minecraft:flowering_azalea"];
  /**@type {ItemType} */
  static ["minecraft:flowing_lava"];
  /**@type {ItemType} */
  static ["minecraft:flowing_water"];
  /**@type {ItemType} */
  static ["minecraft:item.frame"];
  /**@type {ItemType} */
  static ["minecraft:frosted_ice"];
  /**@type {ItemType} */
  static ["minecraft:furnace"];
  /**@type {ItemType} */
  static ["minecraft:gilded_blackstone"];
  /**@type {ItemType} */
  static ["minecraft:glass"];
  /**@type {ItemType} */
  static ["minecraft:glass_pane"];
  /**@type {ItemType} */
  static ["minecraft:item.glow_frame"];
  /**@type {ItemType} */
  static ["minecraft:glow_lichen"];
  /**@type {ItemType} */
  static ["minecraft:glowingobsidian"];
  /**@type {ItemType} */
  static ["minecraft:glowstone"];
  /**@type {ItemType} */
  static ["minecraft:gold_block"];
  /**@type {ItemType} */
  static ["minecraft:gold_ore"];
  /**@type {ItemType} */
  static ["minecraft:golden_rail"];
  /**@type {ItemType} */
  static ["minecraft:granite_stairs"];
  /**@type {ItemType} */
  static ["minecraft:grass"];
  /**@type {ItemType} */
  static ["minecraft:grass_path"];
  /**@type {ItemType} */
  static ["minecraft:gravel"];
  /**@type {ItemType} */
  static ["minecraft:gray_glazed_terracotta"];
  /**@type {ItemType} */
  static ["minecraft:green_glazed_terracotta"];
  /**@type {ItemType} */
  static ["minecraft:hanging_roots"];
  /**@type {ItemType} */
  static ["minecraft:hard_glass"];
  /**@type {ItemType} */
  static ["minecraft:hard_glass_pane"];
  /**@type {ItemType} */
  static ["minecraft:hardened_clay"];
  /**@type {ItemType} */
  static ["minecraft:hay_block"];
  /**@type {ItemType} */
  static ["minecraft:heavy_weighted_pressure_plate"];
  /**@type {ItemType} */
  static ["minecraft:honey_block"];
  /**@type {ItemType} */
  static ["minecraft:honeycomb_block"];
  /**@type {ItemType} */
  static ["minecraft:item.hopper"];
  /**@type {ItemType} */
  static ["minecraft:ice"];
  /**@type {ItemType} */
  static ["minecraft:info_update"];
  /**@type {ItemType} */
  static ["minecraft:info_update2"];
  /**@type {ItemType} */
  static ["minecraft:invisiblebedrock"];
  /**@type {ItemType} */
  static ["minecraft:iron_bars"];
  /**@type {ItemType} */
  static ["minecraft:iron_block"];
  /**@type {ItemType} */
  static ["minecraft:item.iron_door"];
  /**@type {ItemType} */
  static ["minecraft:iron_ore"];
  /**@type {ItemType} */
  static ["minecraft:iron_trapdoor"];
  /**@type {ItemType} */
  static ["minecraft:jigsaw"];
  /**@type {ItemType} */
  static ["minecraft:jukebox"];
  /**@type {ItemType} */
  static ["minecraft:jungle_button"];
  /**@type {ItemType} */
  static ["minecraft:item.jungle_door"];
  /**@type {ItemType} */
  static ["minecraft:jungle_fence_gate"];
  /**@type {ItemType} */
  static ["minecraft:jungle_pressure_plate"];
  /**@type {ItemType} */
  static ["minecraft:jungle_stairs"];
  /**@type {ItemType} */
  static ["minecraft:jungle_standing_sign"];
  /**@type {ItemType} */
  static ["minecraft:jungle_trapdoor"];
  /**@type {ItemType} */
  static ["minecraft:jungle_wall_sign"];
  /**@type {ItemType} */
  static ["minecraft:item.kelp"];
  /**@type {ItemType} */
  static ["minecraft:ladder"];
  /**@type {ItemType} */
  static ["minecraft:lapis_block"];
  /**@type {ItemType} */
  static ["minecraft:lapis_ore"];
  /**@type {ItemType} */
  static ["minecraft:lava"];
  /**@type {ItemType} */
  static ["minecraft:lava_cauldron"];
  /**@type {ItemType} */
  static ["minecraft:lectern"];
  /**@type {ItemType} */
  static ["minecraft:lever"];
  /**@type {ItemType} */
  static ["minecraft:light_blue_glazed_terracotta"];
  /**@type {ItemType} */
  static ["minecraft:light_weighted_pressure_plate"];
  /**@type {ItemType} */
  static ["minecraft:lightning_rod"];
  /**@type {ItemType} */
  static ["minecraft:lime_glazed_terracotta"];
  /**@type {ItemType} */
  static ["minecraft:lit_blast_furnace"];
  /**@type {ItemType} */
  static ["minecraft:lit_deepslate_redstone_ore"];
  /**@type {ItemType} */
  static ["minecraft:lit_furnace"];
  /**@type {ItemType} */
  static ["minecraft:lit_redstone_lamp"];
  /**@type {ItemType} */
  static ["minecraft:lit_redstone_ore"];
  /**@type {ItemType} */
  static ["minecraft:lit_smoker"];
  /**@type {ItemType} */
  static ["minecraft:lodestone"];
  /**@type {ItemType} */
  static ["minecraft:magenta_glazed_terracotta"];
  /**@type {ItemType} */
  static ["minecraft:melon_block"];
  /**@type {ItemType} */
  static ["minecraft:melon_stem"];
  /**@type {ItemType} */
  static ["minecraft:mob_spawner"];
  /**@type {ItemType} */
  static ["minecraft:moss_block"];
  /**@type {ItemType} */
  static ["minecraft:moss_carpet"];
  /**@type {ItemType} */
  static ["minecraft:mossy_cobblestone"];
  /**@type {ItemType} */
  static ["minecraft:mossy_cobblestone_stairs"];
  /**@type {ItemType} */
  static ["minecraft:mossy_stone_brick_stairs"];
  /**@type {ItemType} */
  static ["minecraft:movingblock"];
  /**@type {ItemType} */
  static ["minecraft:mycelium"];
  /**@type {ItemType} */
  static ["minecraft:nether_brick"];
  /**@type {ItemType} */
  static ["minecraft:nether_brick_fence"];
  /**@type {ItemType} */
  static ["minecraft:nether_brick_stairs"];
  /**@type {ItemType} */
  static ["minecraft:nether_gold_ore"];
  /**@type {ItemType} */
  static ["minecraft:item.nether_sprouts"];
  /**@type {ItemType} */
  static ["minecraft:item.nether_wart"];
  /**@type {ItemType} */
  static ["minecraft:nether_wart_block"];
  /**@type {ItemType} */
  static ["minecraft:netherrack"];
  /**@type {ItemType} */
  static ["minecraft:netherreactor"];
  /**@type {ItemType} */
  static ["minecraft:normal_stone_stairs"];
  /**@type {ItemType} */
  static ["minecraft:noteblock"];
  /**@type {ItemType} */
  static ["minecraft:oak_stairs"];
  /**@type {ItemType} */
  static ["minecraft:observer"];
  /**@type {ItemType} */
  static ["minecraft:obsidian"];
  /**@type {ItemType} */
  static ["minecraft:orange_glazed_terracotta"];
  /**@type {ItemType} */
  static ["minecraft:oxidized_copper"];
  /**@type {ItemType} */
  static ["minecraft:oxidized_cut_copper"];
  /**@type {ItemType} */
  static ["minecraft:oxidized_cut_copper_stairs"];
  /**@type {ItemType} */
  static ["minecraft:oxidized_double_cut_copper_slab"];
  /**@type {ItemType} */
  static ["minecraft:packed_ice"];
  /**@type {ItemType} */
  static ["minecraft:pink_glazed_terracotta"];
  /**@type {ItemType} */
  static ["minecraft:pistonarmcollision"];
  /**@type {ItemType} */
  static ["minecraft:podzol"];
  /**@type {ItemType} */
  static ["minecraft:pointed_dripstone"];
  /**@type {ItemType} */
  static ["minecraft:polished_andesite_stairs"];
  /**@type {ItemType} */
  static ["minecraft:polished_basalt"];
  /**@type {ItemType} */
  static ["minecraft:polished_blackstone"];
  /**@type {ItemType} */
  static ["minecraft:polished_blackstone_brick_double_slab"];
  /**@type {ItemType} */
  static ["minecraft:polished_blackstone_brick_stairs"];
  /**@type {ItemType} */
  static ["minecraft:polished_blackstone_brick_wall"];
  /**@type {ItemType} */
  static ["minecraft:polished_blackstone_bricks"];
  /**@type {ItemType} */
  static ["minecraft:polished_blackstone_button"];
  /**@type {ItemType} */
  static ["minecraft:polished_blackstone_double_slab"];
  /**@type {ItemType} */
  static ["minecraft:polished_blackstone_pressure_plate"];
  /**@type {ItemType} */
  static ["minecraft:polished_blackstone_stairs"];
  /**@type {ItemType} */
  static ["minecraft:polished_blackstone_wall"];
  /**@type {ItemType} */
  static ["minecraft:polished_deepslate"];
  /**@type {ItemType} */
  static ["minecraft:polished_deepslate_double_slab"];
  /**@type {ItemType} */
  static ["minecraft:polished_deepslate_stairs"];
  /**@type {ItemType} */
  static ["minecraft:polished_deepslate_wall"];
  /**@type {ItemType} */
  static ["minecraft:polished_diorite_stairs"];
  /**@type {ItemType} */
  static ["minecraft:polished_granite_stairs"];
  /**@type {ItemType} */
  static ["minecraft:portal"];
  /**@type {ItemType} */
  static ["minecraft:potatoes"];
  /**@type {ItemType} */
  static ["minecraft:powder_snow"];
  /**@type {ItemType} */
  static ["minecraft:powered_comparator"];
  /**@type {ItemType} */
  static ["minecraft:powered_repeater"];
  /**@type {ItemType} */
  static ["minecraft:prismarine_bricks_stairs"];
  /**@type {ItemType} */
  static ["minecraft:prismarine_stairs"];
  /**@type {ItemType} */
  static ["minecraft:pumpkin_stem"];
  /**@type {ItemType} */
  static ["minecraft:purple_glazed_terracotta"];
  /**@type {ItemType} */
  static ["minecraft:purpur_stairs"];
  /**@type {ItemType} */
  static ["minecraft:quartz_bricks"];
  /**@type {ItemType} */
  static ["minecraft:quartz_ore"];
  /**@type {ItemType} */
  static ["minecraft:quartz_stairs"];
  /**@type {ItemType} */
  static ["minecraft:rail"];
  /**@type {ItemType} */
  static ["minecraft:red_glazed_terracotta"];
  /**@type {ItemType} */
  static ["minecraft:red_mushroom"];
  /**@type {ItemType} */
  static ["minecraft:red_nether_brick"];
  /**@type {ItemType} */
  static ["minecraft:red_nether_brick_stairs"];
  /**@type {ItemType} */
  static ["minecraft:red_sandstone_stairs"];
  /**@type {ItemType} */
  static ["minecraft:redstone_block"];
  /**@type {ItemType} */
  static ["minecraft:redstone_lamp"];
  /**@type {ItemType} */
  static ["minecraft:redstone_ore"];
  /**@type {ItemType} */
  static ["minecraft:redstone_torch"];
  /**@type {ItemType} */
  static ["minecraft:redstone_wire"];
  /**@type {ItemType} */
  static ["minecraft:item.reeds"];
  /**@type {ItemType} */
  static ["minecraft:repeating_command_block"];
  /**@type {ItemType} */
  static ["minecraft:reserved6"];
  /**@type {ItemType} */
  static ["minecraft:sandstone_stairs"];
  /**@type {ItemType} */
  static ["minecraft:sculk_sensor"];
  /**@type {ItemType} */
  static ["minecraft:shroomlight"];
  /**@type {ItemType} */
  static ["minecraft:silver_glazed_terracotta"];
  /**@type {ItemType} */
  static ["minecraft:item.skull"];
  /**@type {ItemType} */
  static ["minecraft:slime"];
  /**@type {ItemType} */
  static ["minecraft:small_dripleaf_block"];
  /**@type {ItemType} */
  static ["minecraft:smooth_quartz_stairs"];
  /**@type {ItemType} */
  static ["minecraft:smooth_red_sandstone_stairs"];
  /**@type {ItemType} */
  static ["minecraft:smooth_sandstone_stairs"];
  /**@type {ItemType} */
  static ["minecraft:smooth_stone"];
  /**@type {ItemType} */
  static ["minecraft:snow"];
  /**@type {ItemType} */
  static ["minecraft:item.soul_campfire"];
  /**@type {ItemType} */
  static ["minecraft:soul_fire"];
  /**@type {ItemType} */
  static ["minecraft:soul_lantern"];
  /**@type {ItemType} */
  static ["minecraft:soul_sand"];
  /**@type {ItemType} */
  static ["minecraft:soul_soil"];
  /**@type {ItemType} */
  static ["minecraft:soul_torch"];
  /**@type {ItemType} */
  static ["minecraft:spore_blossom"];
  /**@type {ItemType} */
  static ["minecraft:spruce_button"];
  /**@type {ItemType} */
  static ["minecraft:item.spruce_door"];
  /**@type {ItemType} */
  static ["minecraft:spruce_fence_gate"];
  /**@type {ItemType} */
  static ["minecraft:spruce_pressure_plate"];
  /**@type {ItemType} */
  static ["minecraft:spruce_stairs"];
  /**@type {ItemType} */
  static ["minecraft:spruce_standing_sign"];
  /**@type {ItemType} */
  static ["minecraft:spruce_trapdoor"];
  /**@type {ItemType} */
  static ["minecraft:spruce_wall_sign"];
  /**@type {ItemType} */
  static ["minecraft:standing_banner"];
  /**@type {ItemType} */
  static ["minecraft:standing_sign"];
  /**@type {ItemType} */
  static ["minecraft:stickypistonarmcollision"];
  /**@type {ItemType} */
  static ["minecraft:stone_brick_stairs"];
  /**@type {ItemType} */
  static ["minecraft:stone_button"];
  /**@type {ItemType} */
  static ["minecraft:stone_pressure_plate"];
  /**@type {ItemType} */
  static ["minecraft:stone_stairs"];
  /**@type {ItemType} */
  static ["minecraft:stonecutter"];
  /**@type {ItemType} */
  static ["minecraft:stonecutter_block"];
  /**@type {ItemType} */
  static ["minecraft:stripped_acacia_log"];
  /**@type {ItemType} */
  static ["minecraft:stripped_birch_log"];
  /**@type {ItemType} */
  static ["minecraft:stripped_crimson_hyphae"];
  /**@type {ItemType} */
  static ["minecraft:stripped_crimson_stem"];
  /**@type {ItemType} */
  static ["minecraft:stripped_dark_oak_log"];
  /**@type {ItemType} */
  static ["minecraft:stripped_jungle_log"];
  /**@type {ItemType} */
  static ["minecraft:stripped_oak_log"];
  /**@type {ItemType} */
  static ["minecraft:stripped_spruce_log"];
  /**@type {ItemType} */
  static ["minecraft:stripped_warped_hyphae"];
  /**@type {ItemType} */
  static ["minecraft:stripped_warped_stem"];
  /**@type {ItemType} */
  static ["minecraft:structure_block"];
  /**@type {ItemType} */
  static ["minecraft:structure_void"];
  /**@type {ItemType} */
  static ["minecraft:sweet_berry_bush"];
  /**@type {ItemType} */
  static ["minecraft:target"];
  /**@type {ItemType} */
  static ["minecraft:torch"];
  /**@type {ItemType} */
  static ["minecraft:trapdoor"];
  /**@type {ItemType} */
  static ["minecraft:trapped_chest"];
  /**@type {ItemType} */
  static ["minecraft:tripwire"];
  /**@type {ItemType} */
  static ["minecraft:tripwire_hook"];
  /**@type {ItemType} */
  static ["minecraft:twisting_vines"];
  /**@type {ItemType} */
  static ["minecraft:underwater_torch"];
  /**@type {ItemType} */
  static ["minecraft:unknown"];
  /**@type {ItemType} */
  static ["minecraft:unlit_redstone_torch"];
  /**@type {ItemType} */
  static ["minecraft:unpowered_comparator"];
  /**@type {ItemType} */
  static ["minecraft:unpowered_repeater"];
  /**@type {ItemType} */
  static ["minecraft:vine"];
  /**@type {ItemType} */
  static ["minecraft:wall_banner"];
  /**@type {ItemType} */
  static ["minecraft:wall_sign"];
  /**@type {ItemType} */
  static ["minecraft:warped_button"];
  /**@type {ItemType} */
  static ["minecraft:item.warped_door"];
  /**@type {ItemType} */
  static ["minecraft:warped_double_slab"];
  /**@type {ItemType} */
  static ["minecraft:warped_fence"];
  /**@type {ItemType} */
  static ["minecraft:warped_fence_gate"];
  /**@type {ItemType} */
  static ["minecraft:warped_fungus"];
  /**@type {ItemType} */
  static ["minecraft:warped_hyphae"];
  /**@type {ItemType} */
  static ["minecraft:warped_nylium"];
  /**@type {ItemType} */
  static ["minecraft:warped_planks"];
  /**@type {ItemType} */
  static ["minecraft:warped_pressure_plate"];
  /**@type {ItemType} */
  static ["minecraft:warped_stairs"];
  /**@type {ItemType} */
  static ["minecraft:warped_standing_sign"];
  /**@type {ItemType} */
  static ["minecraft:warped_stem"];
  /**@type {ItemType} */
  static ["minecraft:warped_trapdoor"];
  /**@type {ItemType} */
  static ["minecraft:warped_wall_sign"];
  /**@type {ItemType} */
  static ["minecraft:warped_wart_block"];
  /**@type {ItemType} */
  static ["minecraft:water"];
  /**@type {ItemType} */
  static ["minecraft:waxed_copper"];
  /**@type {ItemType} */
  static ["minecraft:waxed_cut_copper"];
  /**@type {ItemType} */
  static ["minecraft:waxed_cut_copper_stairs"];
  /**@type {ItemType} */
  static ["minecraft:waxed_double_cut_copper_slab"];
  /**@type {ItemType} */
  static ["minecraft:waxed_exposed_copper"];
  /**@type {ItemType} */
  static ["minecraft:waxed_exposed_cut_copper"];
  /**@type {ItemType} */
  static ["minecraft:waxed_exposed_cut_copper_stairs"];
  /**@type {ItemType} */
  static ["minecraft:waxed_exposed_double_cut_copper_slab"];
  /**@type {ItemType} */
  static ["minecraft:waxed_oxidized_copper"];
  /**@type {ItemType} */
  static ["minecraft:waxed_oxidized_cut_copper"];
  /**@type {ItemType} */
  static ["minecraft:waxed_oxidized_cut_copper_slab"];
  /**@type {ItemType} */
  static ["minecraft:waxed_oxidized_cut_copper_stairs"];
  /**@type {ItemType} */
  static ["minecraft:waxed_oxidized_double_cut_copper_slab"];
  /**@type {ItemType} */
  static ["minecraft:waxed_weathered_copper"];
  /**@type {ItemType} */
  static ["minecraft:waxed_weathered_cut_copper"];
  /**@type {ItemType} */
  static ["minecraft:waxed_weathered_cut_copper_stairs"];
  /**@type {ItemType} */
  static ["minecraft:waxed_weathered_double_cut_copper_slab"];
  /**@type {ItemType} */
  static ["minecraft:weathered_copper"];
  /**@type {ItemType} */
  static ["minecraft:weathered_cut_copper"];
  /**@type {ItemType} */
  static ["minecraft:weathered_cut_copper_stairs"];
  /**@type {ItemType} */
  static ["minecraft:weathered_double_cut_copper_slab"];
  /**@type {ItemType} */
  static ["minecraft:web"];
  /**@type {ItemType} */
  static ["minecraft:weeping_vines"];
  /**@type {ItemType} */
  static ["minecraft:item.wheat"];
  /**@type {ItemType} */
  static ["minecraft:white_glazed_terracotta"];
  /**@type {ItemType} */
  static ["minecraft:wither_rose"];
  /**@type {ItemType} */
  static ["minecraft:wooden_button"];
  /**@type {ItemType} */
  static ["minecraft:item.wooden_door"];
  /**@type {ItemType} */
  static ["minecraft:wooden_pressure_plate"];
  /**@type {ItemType} */
  static ["minecraft:yellow_glazed_terracotta"];
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
     * @type {WeatherChangedEventSignal}
     */
    changeWeather,
    /**
     * @type {AddEffectEventSignal}
     */
    addEffect,
    /**
     * @type {ChatEventSignal}
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
    beforeExplosion,
    explosion,
    explodeBlock,
    activatePiston,
    beforeActivatePiston,
  };
}

class TickEventSignal {
  subscribe() {
    return;
  }
  unsubscribe() {
    return;
  }
}
class WeatherChangedEventSignal {
  subscribe() {
    return;
  }
  unsubscribe() {
    return;
  }
}
class AddEffectEventSignal {
  subscribe() {
    return;
  }
  unsubscribe() {
    return;
  }
}
class ChatEventSignal {
  subscribe() {
    return;
  }
  unsubscribe() {
    return;
  }
}
class EntityEventSignal {
  subscribe() {
    return;
  }
  unsubscribe() {
    return;
  }
}

class BlockPiston {
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
