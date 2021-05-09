/**
 * @file Minecraft (Bedrock) GameTest Framework Minecraft module JSDoc
 * @author toka7290
 * @since v1.17.0.54
 * @version v1.17.0.54
 * @name Minecraft
 * @memberof MinecraftGameTest
 * @license MIT
 */

export class Block {
  constructor() {
    /**
     *
     * @param {BlockState} state
     * @return {any}
     */
    this.setState = function (state) {};
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
   * @return {boolean}
   */
  equals(other) {}
  /**
   *
   * @param {Number} x
   * @param {Number} y
   * @param {Number} z
   * @return {BlockLocation}
   */
  offset(x, y, z) {}
  /**
   * @return {BlockLocation}
   */
  above() {}
}

class BlockState {
  constructor() {}
}

export class BlockStates {
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static multiFaceDirectionBits = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static bigDripleafHead = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static bigDripleafTilt = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static growingPlantAge = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static dripstoneThickness = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static respawnAnchorCharge = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static twistingVinesAge = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static rotation = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static wallConnectionTypeWest = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static wallConnectionTypeSouth = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static wallConnectionTypeEast = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static wallConnectionTypeNorth = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static wallPostBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static weepingVinesAge = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static honeyLevel = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static blockLightLevel = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static pillarAxis = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static leverDirection = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static coralFanDirection = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static composterFillLevel = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static extinguished = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static structureBlockType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static structureVoidType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static attachment = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static coralHangTypeBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static strippedBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static hanging = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static cauldronLiquid = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static coralColor = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static seaGrassType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static chemistryTableType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static doublePlantType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static prismarineBlockType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static wallBlockType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static hugeMushroomBits = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static stoneBrickType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static monsterEggStoneType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static stoneSlabType4 = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static stoneSlabType3 = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static stoneSlabType2 = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static stoneSlabType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static flowerType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static tallGrassType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static sandStoneType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static spongeType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static newLeafType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static oldLeafType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static deprecated = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static chiselType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static newLogType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static oldLogType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static sandType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static dirtType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static stoneType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static woodType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static stabilityCheck = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static stability = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static bambooLeafSize = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static bambooStalkThickness = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static color = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static coralDirection = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static weirdoDirection = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static groundSignDirection = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static crackedState = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static turtleEggCount = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static dragDown = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static torchFacingDirection = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static saplingType = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static itemFrameMapBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static clusterCount = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static deadBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static colorBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static allowUnderwaterBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static vineDirectionBits = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static upsideDownBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static updateBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static triggeredBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static topSlotBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static toggleBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static suspendedBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static repeaterDelay = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static redstoneSignal = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static railDirection = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static railDataBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static poweredBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static persistentBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static outputLitBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static outputSubtractBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static openBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static occupiedBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static kelpAge = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static noDropBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static moisturizedAmount = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static liquidDepth = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static inWallBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static infiniburnBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static height = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static headPieceBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static growth = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static fillLevel = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static facingDirection = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static explodeBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static endPortalEyeBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static direction = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static upperBlockBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static doorHingeBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static disarmedBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static damage = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static coveredBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static conditionalBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static buttonPressedBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static brewingStandSlotCBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static brewingStandSlotBBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static brewingStandSlotABit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static biteCounter = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static portalAxis = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static attachedBit = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static age = function (val) {};
  /**
   *
   * @param {string|Number|boolean} val
   * @return {BlockState}
   */
  static ageBit = function (val) {};
}

export class Blocks {
  /**
   *
   * @param {string} identifier
   * @return {Block}
   */
  static get = function (identifier) {};
  /** @return {Block} */
  static air = function () {};
  /** @return {Block} */
  static acaciaButton = function () {};
  /** @return {Block} */
  static acaciaDoor = function () {};
  /** @return {Block} */
  static acaciaFenceGate = function () {};
  /** @return {Block} */
  static acaciaPressurePlate = function () {};
  /** @return {Block} */
  static acaciaStairs = function () {};
  /** @return {Block} */
  static acaciaStandingSign = function () {};
  /** @return {Block} */
  static acaciaTrapdoor = function () {};
  /** @return {Block} */
  static acaciaWallSign = function () {};
  /** @return {Block} */
  static activatorRail = function () {};
  /** @return {Block} */
  static air = function () {};
  /** @return {Block} */
  static allow = function () {};
  /** @return {Block} */
  static ancientDebris = function () {};
  /** @return {Block} */
  static andesiteStairs = function () {};
  /** @return {Block} */
  static anvil = function () {};
  /** @return {Block} */
  static azalea = function () {};
  /** @return {Block} */
  static azaleaLeaves = function () {};
  /** @return {Block} */
  static azaleaLeavesFlowered = function () {};
  /** @return {Block} */
  static bamboo = function () {};
  /** @return {Block} */
  static bambooSapling = function () {};
  /** @return {Block} */
  static barrel = function () {};
  /** @return {Block} */
  static barrier = function () {};
  /** @return {Block} */
  static basalt = function () {};
  /** @return {Block} */
  static beacon = function () {};
  /** @return {Block} */
  static bed = function () {};
  /** @return {Block} */
  static bedrock = function () {};
  /** @return {Block} */
  static beeNest = function () {};
  /** @return {Block} */
  static beehive = function () {};
  /** @return {Block} */
  static beetroot = function () {};
  /** @return {Block} */
  static bell = function () {};
  /** @return {Block} */
  static bigDripleaf = function () {};
  /** @return {Block} */
  static birchButton = function () {};
  /** @return {Block} */
  static birchDoor = function () {};
  /** @return {Block} */
  static birchFenceGate = function () {};
  /** @return {Block} */
  static birchPressurePlate = function () {};
  /** @return {Block} */
  static birchStairs = function () {};
  /** @return {Block} */
  static birchStandingSign = function () {};
  /** @return {Block} */
  static birchTrapdoor = function () {};
  /** @return {Block} */
  static birchWallSign = function () {};
  /** @return {Block} */
  static blackGlazedTerracotta = function () {};
  /** @return {Block} */
  static blackstone = function () {};
  /** @return {Block} */
  static blackstoneDoubleSlab = function () {};
  /** @return {Block} */
  static blackstoneSlab = function () {};
  /** @return {Block} */
  static blackstoneStairs = function () {};
  /** @return {Block} */
  static blackstoneWall = function () {};
  /** @return {Block} */
  static blastFurnace = function () {};
  /** @return {Block} */
  static blueGlazedTerracotta = function () {};
  /** @return {Block} */
  static blueIce = function () {};
  /** @return {Block} */
  static boneBlock = function () {};
  /** @return {Block} */
  static bookshelf = function () {};
  /** @return {Block} */
  static borderBlock = function () {};
  /** @return {Block} */
  static brewingStand = function () {};
  /** @return {Block} */
  static brickBlock = function () {};
  /** @return {Block} */
  static brickStairs = function () {};
  /** @return {Block} */
  static brownGlazedTerracotta = function () {};
  /** @return {Block} */
  static brownMushroom = function () {};
  /** @return {Block} */
  static brownMushroomBlock = function () {};
  /** @return {Block} */
  static bubbleColumn = function () {};
  /** @return {Block} */
  static cactus = function () {};
  /** @return {Block} */
  static cake = function () {};
  /** @return {Block} */
  static camera = function () {};
  /** @return {Block} */
  static campfire = function () {};
  /** @return {Block} */
  static carpet = function () {};
  /** @return {Block} */
  static carrots = function () {};
  /** @return {Block} */
  static cartographyTable = function () {};
  /** @return {Block} */
  static carvedPumpkin = function () {};
  /** @return {Block} */
  static cauldron = function () {};
  /** @return {Block} */
  static caveVines = function () {};
  /** @return {Block} */
  static caveVinesBodyWithBerries = function () {};
  /** @return {Block} */
  static caveVinesHeadWithBerries = function () {};
  /** @return {Block} */
  static chain = function () {};
  /** @return {Block} */
  static chainCommandBlock = function () {};
  /** @return {Block} */
  static chemicalHeat = function () {};
  /** @return {Block} */
  static chemistryTable = function () {};
  /** @return {Block} */
  static chest = function () {};
  /** @return {Block} */
  static chiseledNetherBricks = function () {};
  /** @return {Block} */
  static chiseledPolishedBlackstone = function () {};
  /** @return {Block} */
  static chorusFlower = function () {};
  /** @return {Block} */
  static chorusPlant = function () {};
  /** @return {Block} */
  static clay = function () {};
  /** @return {Block} */
  static coalBlock = function () {};
  /** @return {Block} */
  static coalOre = function () {};
  /** @return {Block} */
  static cobblestone = function () {};
  /** @return {Block} */
  static cobblestoneWall = function () {};
  /** @return {Block} */
  static cocoa = function () {};
  /** @return {Block} */
  static coloredTorchBp = function () {};
  /** @return {Block} */
  static coloredTorchRg = function () {};
  /** @return {Block} */
  static commandBlock = function () {};
  /** @return {Block} */
  static composter = function () {};
  /** @return {Block} */
  static concrete = function () {};
  /** @return {Block} */
  static concretepowder = function () {};
  /** @return {Block} */
  static conduit = function () {};
  /** @return {Block} */
  static copperBlock = function () {};
  /** @return {Block} */
  static copperOre = function () {};
  /** @return {Block} */
  static coral = function () {};
  /** @return {Block} */
  static coralBlock = function () {};
  /** @return {Block} */
  static coralFan = function () {};
  /** @return {Block} */
  static coralFanDead = function () {};
  /** @return {Block} */
  static coralFanHang = function () {};
  /** @return {Block} */
  static coralFanHang2 = function () {};
  /** @return {Block} */
  static coralFanHang3 = function () {};
  /** @return {Block} */
  static crackedNetherBricks = function () {};
  /** @return {Block} */
  static crackedPolishedBlackstoneBricks = function () {};
  /** @return {Block} */
  static craftingTable = function () {};
  /** @return {Block} */
  static crimsonButton = function () {};
  /** @return {Block} */
  static crimsonDoor = function () {};
  /** @return {Block} */
  static crimsonDoubleSlab = function () {};
  /** @return {Block} */
  static crimsonFence = function () {};
  /** @return {Block} */
  static crimsonFenceGate = function () {};
  /** @return {Block} */
  static crimsonFungus = function () {};
  /** @return {Block} */
  static crimsonHyphae = function () {};
  /** @return {Block} */
  static crimsonNylium = function () {};
  /** @return {Block} */
  static crimsonPlanks = function () {};
  /** @return {Block} */
  static crimsonPressurePlate = function () {};
  /** @return {Block} */
  static crimsonRoots = function () {};
  /** @return {Block} */
  static crimsonSlab = function () {};
  /** @return {Block} */
  static crimsonStairs = function () {};
  /** @return {Block} */
  static crimsonStandingSign = function () {};
  /** @return {Block} */
  static crimsonStem = function () {};
  /** @return {Block} */
  static crimsonTrapdoor = function () {};
  /** @return {Block} */
  static crimsonWallSign = function () {};
  /** @return {Block} */
  static cryingObsidian = function () {};
  /** @return {Block} */
  static cutCopper = function () {};
  /** @return {Block} */
  static cutCopperSlab = function () {};
  /** @return {Block} */
  static cutCopperStairs = function () {};
  /** @return {Block} */
  static cyanGlazedTerracotta = function () {};
  /** @return {Block} */
  static darkOakButton = function () {};
  /** @return {Block} */
  static darkOakDoor = function () {};
  /** @return {Block} */
  static darkOakFenceGate = function () {};
  /** @return {Block} */
  static darkOakPressurePlate = function () {};
  /** @return {Block} */
  static darkOakStairs = function () {};
  /** @return {Block} */
  static darkOakTrapdoor = function () {};
  /** @return {Block} */
  static darkPrismarineStairs = function () {};
  /** @return {Block} */
  static darkoakStandingSign = function () {};
  /** @return {Block} */
  static darkoakWallSign = function () {};
  /** @return {Block} */
  static daylightDetector = function () {};
  /** @return {Block} */
  static daylightDetectorInverted = function () {};
  /** @return {Block} */
  static deadbush = function () {};
  /** @return {Block} */
  static deny = function () {};
  /** @return {Block} */
  static detectorRail = function () {};
  /** @return {Block} */
  static diamondBlock = function () {};
  /** @return {Block} */
  static diamondOre = function () {};
  /** @return {Block} */
  static dioriteStairs = function () {};
  /** @return {Block} */
  static dirt = function () {};
  /** @return {Block} */
  static dirtWithRoots = function () {};
  /** @return {Block} */
  static dispenser = function () {};
  /** @return {Block} */
  static doubleCutCopperSlab = function () {};
  /** @return {Block} */
  static doublePlant = function () {};
  /** @return {Block} */
  static doubleStoneSlab = function () {};
  /** @return {Block} */
  static doubleStoneSlab2 = function () {};
  /** @return {Block} */
  static doubleStoneSlab3 = function () {};
  /** @return {Block} */
  static doubleStoneSlab4 = function () {};
  /** @return {Block} */
  static doubleWoodenSlab = function () {};
  /** @return {Block} */
  static dragonEgg = function () {};
  /** @return {Block} */
  static driedKelpBlock = function () {};
  /** @return {Block} */
  static dripstoneBlock = function () {};
  /** @return {Block} */
  static dropper = function () {};
  /** @return {Block} */
  static element0 = function () {};
  /** @return {Block} */
  static element1 = function () {};
  /** @return {Block} */
  static element10 = function () {};
  /** @return {Block} */
  static element100 = function () {};
  /** @return {Block} */
  static element101 = function () {};
  /** @return {Block} */
  static element102 = function () {};
  /** @return {Block} */
  static element103 = function () {};
  /** @return {Block} */
  static element104 = function () {};
  /** @return {Block} */
  static element105 = function () {};
  /** @return {Block} */
  static element106 = function () {};
  /** @return {Block} */
  static element107 = function () {};
  /** @return {Block} */
  static element108 = function () {};
  /** @return {Block} */
  static element109 = function () {};
  /** @return {Block} */
  static element11 = function () {};
  /** @return {Block} */
  static element110 = function () {};
  /** @return {Block} */
  static element111 = function () {};
  /** @return {Block} */
  static element112 = function () {};
  /** @return {Block} */
  static element113 = function () {};
  /** @return {Block} */
  static element114 = function () {};
  /** @return {Block} */
  static element115 = function () {};
  /** @return {Block} */
  static element116 = function () {};
  /** @return {Block} */
  static element117 = function () {};
  /** @return {Block} */
  static element118 = function () {};
  /** @return {Block} */
  static element12 = function () {};
  /** @return {Block} */
  static element13 = function () {};
  /** @return {Block} */
  static element14 = function () {};
  /** @return {Block} */
  static element15 = function () {};
  /** @return {Block} */
  static element16 = function () {};
  /** @return {Block} */
  static element17 = function () {};
  /** @return {Block} */
  static element18 = function () {};
  /** @return {Block} */
  static element19 = function () {};
  /** @return {Block} */
  static element2 = function () {};
  /** @return {Block} */
  static element20 = function () {};
  /** @return {Block} */
  static element21 = function () {};
  /** @return {Block} */
  static element22 = function () {};
  /** @return {Block} */
  static element23 = function () {};
  /** @return {Block} */
  static element24 = function () {};
  /** @return {Block} */
  static element25 = function () {};
  /** @return {Block} */
  static element26 = function () {};
  /** @return {Block} */
  static element27 = function () {};
  /** @return {Block} */
  static element28 = function () {};
  /** @return {Block} */
  static element29 = function () {};
  /** @return {Block} */
  static element3 = function () {};
  /** @return {Block} */
  static element30 = function () {};
  /** @return {Block} */
  static element31 = function () {};
  /** @return {Block} */
  static element32 = function () {};
  /** @return {Block} */
  static element33 = function () {};
  /** @return {Block} */
  static element34 = function () {};
  /** @return {Block} */
  static element35 = function () {};
  /** @return {Block} */
  static element36 = function () {};
  /** @return {Block} */
  static element37 = function () {};
  /** @return {Block} */
  static element38 = function () {};
  /** @return {Block} */
  static element39 = function () {};
  /** @return {Block} */
  static element4 = function () {};
  /** @return {Block} */
  static element40 = function () {};
  /** @return {Block} */
  static element41 = function () {};
  /** @return {Block} */
  static element42 = function () {};
  /** @return {Block} */
  static element43 = function () {};
  /** @return {Block} */
  static element44 = function () {};
  /** @return {Block} */
  static element45 = function () {};
  /** @return {Block} */
  static element46 = function () {};
  /** @return {Block} */
  static element47 = function () {};
  /** @return {Block} */
  static element48 = function () {};
  /** @return {Block} */
  static element49 = function () {};
  /** @return {Block} */
  static element5 = function () {};
  /** @return {Block} */
  static element50 = function () {};
  /** @return {Block} */
  static element51 = function () {};
  /** @return {Block} */
  static element52 = function () {};
  /** @return {Block} */
  static element53 = function () {};
  /** @return {Block} */
  static element54 = function () {};
  /** @return {Block} */
  static element55 = function () {};
  /** @return {Block} */
  static element56 = function () {};
  /** @return {Block} */
  static element57 = function () {};
  /** @return {Block} */
  static element58 = function () {};
  /** @return {Block} */
  static element59 = function () {};
  /** @return {Block} */
  static element6 = function () {};
  /** @return {Block} */
  static element60 = function () {};
  /** @return {Block} */
  static element61 = function () {};
  /** @return {Block} */
  static element62 = function () {};
  /** @return {Block} */
  static element63 = function () {};
  /** @return {Block} */
  static element64 = function () {};
  /** @return {Block} */
  static element65 = function () {};
  /** @return {Block} */
  static element66 = function () {};
  /** @return {Block} */
  static element67 = function () {};
  /** @return {Block} */
  static element68 = function () {};
  /** @return {Block} */
  static element69 = function () {};
  /** @return {Block} */
  static element7 = function () {};
  /** @return {Block} */
  static element70 = function () {};
  /** @return {Block} */
  static element71 = function () {};
  /** @return {Block} */
  static element72 = function () {};
  /** @return {Block} */
  static element73 = function () {};
  /** @return {Block} */
  static element74 = function () {};
  /** @return {Block} */
  static element75 = function () {};
  /** @return {Block} */
  static element76 = function () {};
  /** @return {Block} */
  static element77 = function () {};
  /** @return {Block} */
  static element78 = function () {};
  /** @return {Block} */
  static element79 = function () {};
  /** @return {Block} */
  static element8 = function () {};
  /** @return {Block} */
  static element80 = function () {};
  /** @return {Block} */
  static element81 = function () {};
  /** @return {Block} */
  static element82 = function () {};
  /** @return {Block} */
  static element83 = function () {};
  /** @return {Block} */
  static element84 = function () {};
  /** @return {Block} */
  static element85 = function () {};
  /** @return {Block} */
  static element86 = function () {};
  /** @return {Block} */
  static element87 = function () {};
  /** @return {Block} */
  static element88 = function () {};
  /** @return {Block} */
  static element89 = function () {};
  /** @return {Block} */
  static element9 = function () {};
  /** @return {Block} */
  static element90 = function () {};
  /** @return {Block} */
  static element91 = function () {};
  /** @return {Block} */
  static element92 = function () {};
  /** @return {Block} */
  static element93 = function () {};
  /** @return {Block} */
  static element94 = function () {};
  /** @return {Block} */
  static element95 = function () {};
  /** @return {Block} */
  static element96 = function () {};
  /** @return {Block} */
  static element97 = function () {};
  /** @return {Block} */
  static element98 = function () {};
  /** @return {Block} */
  static element99 = function () {};
  /** @return {Block} */
  static emeraldBlock = function () {};
  /** @return {Block} */
  static emeraldOre = function () {};
  /** @return {Block} */
  static enchantingTable = function () {};
  /** @return {Block} */
  static endBrickStairs = function () {};
  /** @return {Block} */
  static endBricks = function () {};
  /** @return {Block} */
  static endGateway = function () {};
  /** @return {Block} */
  static endPortal = function () {};
  /** @return {Block} */
  static endPortalFrame = function () {};
  /** @return {Block} */
  static endRod = function () {};
  /** @return {Block} */
  static endStone = function () {};
  /** @return {Block} */
  static enderChest = function () {};
  /** @return {Block} */
  static exposedCopper = function () {};
  /** @return {Block} */
  static exposedCutCopper = function () {};
  /** @return {Block} */
  static exposedCutCopperSlab = function () {};
  /** @return {Block} */
  static exposedCutCopperStairs = function () {};
  /** @return {Block} */
  static exposedDoubleCutCopperSlab = function () {};
  /** @return {Block} */
  static farmland = function () {};
  /** @return {Block} */
  static fence = function () {};
  /** @return {Block} */
  static fenceGate = function () {};
  /** @return {Block} */
  static fire = function () {};
  /** @return {Block} */
  static fletchingTable = function () {};
  /** @return {Block} */
  static flowerPot = function () {};
  /** @return {Block} */
  static floweringAzalea = function () {};
  /** @return {Block} */
  static flowingLava = function () {};
  /** @return {Block} */
  static flowingWater = function () {};
  /** @return {Block} */
  static frame = function () {};
  /** @return {Block} */
  static frostedIce = function () {};
  /** @return {Block} */
  static furnace = function () {};
  /** @return {Block} */
  static gildedBlackstone = function () {};
  /** @return {Block} */
  static glass = function () {};
  /** @return {Block} */
  static glassPane = function () {};
  /** @return {Block} */
  static glowFrame = function () {};
  /** @return {Block} */
  static glowLichen = function () {};
  /** @return {Block} */
  static glowingobsidian = function () {};
  /** @return {Block} */
  static glowstone = function () {};
  /** @return {Block} */
  static goldBlock = function () {};
  /** @return {Block} */
  static goldOre = function () {};
  /** @return {Block} */
  static goldenRail = function () {};
  /** @return {Block} */
  static graniteStairs = function () {};
  /** @return {Block} */
  static grass = function () {};
  /** @return {Block} */
  static grassPath = function () {};
  /** @return {Block} */
  static gravel = function () {};
  /** @return {Block} */
  static grayGlazedTerracotta = function () {};
  /** @return {Block} */
  static greenGlazedTerracotta = function () {};
  /** @return {Block} */
  static grindstone = function () {};
  /** @return {Block} */
  static hangingRoots = function () {};
  /** @return {Block} */
  static hardGlass = function () {};
  /** @return {Block} */
  static hardGlassPane = function () {};
  /** @return {Block} */
  static hardStainedGlass = function () {};
  /** @return {Block} */
  static hardStainedGlassPane = function () {};
  /** @return {Block} */
  static hardenedClay = function () {};
  /** @return {Block} */
  static hayBlock = function () {};
  /** @return {Block} */
  static heavyWeightedPressurePlate = function () {};
  /** @return {Block} */
  static honeyBlock = function () {};
  /** @return {Block} */
  static honeycombBlock = function () {};
  /** @return {Block} */
  static hopper = function () {};
  /** @return {Block} */
  static ice = function () {};
  /** @return {Block} */
  static infoUpdate = function () {};
  /** @return {Block} */
  static infoUpdate2 = function () {};
  /** @return {Block} */
  static invisiblebedrock = function () {};
  /** @return {Block} */
  static ironBars = function () {};
  /** @return {Block} */
  static ironBlock = function () {};
  /** @return {Block} */
  static ironDoor = function () {};
  /** @return {Block} */
  static ironOre = function () {};
  /** @return {Block} */
  static ironTrapdoor = function () {};
  /** @return {Block} */
  static jigsaw = function () {};
  /** @return {Block} */
  static jukebox = function () {};
  /** @return {Block} */
  static jungleButton = function () {};
  /** @return {Block} */
  static jungleDoor = function () {};
  /** @return {Block} */
  static jungleFenceGate = function () {};
  /** @return {Block} */
  static junglePressurePlate = function () {};
  /** @return {Block} */
  static jungleStairs = function () {};
  /** @return {Block} */
  static jungleStandingSign = function () {};
  /** @return {Block} */
  static jungleTrapdoor = function () {};
  /** @return {Block} */
  static jungleWallSign = function () {};
  /** @return {Block} */
  static kelp = function () {};
  /** @return {Block} */
  static ladder = function () {};
  /** @return {Block} */
  static lantern = function () {};
  /** @return {Block} */
  static lapisBlock = function () {};
  /** @return {Block} */
  static lapisOre = function () {};
  /** @return {Block} */
  static lava = function () {};
  /** @return {Block} */
  static lavaCauldron = function () {};
  /** @return {Block} */
  static leaves = function () {};
  /** @return {Block} */
  static leaves2 = function () {};
  /** @return {Block} */
  static lectern = function () {};
  /** @return {Block} */
  static lever = function () {};
  /** @return {Block} */
  static lightBlock = function () {};
  /** @return {Block} */
  static lightBlueGlazedTerracotta = function () {};
  /** @return {Block} */
  static lightWeightedPressurePlate = function () {};
  /** @return {Block} */
  static lightningRod = function () {};
  /** @return {Block} */
  static limeGlazedTerracotta = function () {};
  /** @return {Block} */
  static litBlastFurnace = function () {};
  /** @return {Block} */
  static litFurnace = function () {};
  /** @return {Block} */
  static litPumpkin = function () {};
  /** @return {Block} */
  static litRedstoneLamp = function () {};
  /** @return {Block} */
  static litRedstoneOre = function () {};
  /** @return {Block} */
  static litSmoker = function () {};
  /** @return {Block} */
  static lodestone = function () {};
  /** @return {Block} */
  static log = function () {};
  /** @return {Block} */
  static log2 = function () {};
  /** @return {Block} */
  static loom = function () {};
  /** @return {Block} */
  static magentaGlazedTerracotta = function () {};
  /** @return {Block} */
  static magma = function () {};
  /** @return {Block} */
  static melonBlock = function () {};
  /** @return {Block} */
  static melonStem = function () {};
  /** @return {Block} */
  static mobSpawner = function () {};
  /** @return {Block} */
  static monsterEgg = function () {};
  /** @return {Block} */
  static mossBlock = function () {};
  /** @return {Block} */
  static mossCarpet = function () {};
  /** @return {Block} */
  static mossyCobblestone = function () {};
  /** @return {Block} */
  static mossyCobblestoneStairs = function () {};
  /** @return {Block} */
  static mossyStoneBrickStairs = function () {};
  /** @return {Block} */
  static movingblock = function () {};
  /** @return {Block} */
  static mycelium = function () {};
  /** @return {Block} */
  static netherBrick = function () {};
  /** @return {Block} */
  static netherBrickFence = function () {};
  /** @return {Block} */
  static netherBrickStairs = function () {};
  /** @return {Block} */
  static netherGoldOre = function () {};
  /** @return {Block} */
  static netherSprouts = function () {};
  /** @return {Block} */
  static netherWart = function () {};
  /** @return {Block} */
  static netherWartBlock = function () {};
  /** @return {Block} */
  static netheriteBlock = function () {};
  /** @return {Block} */
  static netherrack = function () {};
  /** @return {Block} */
  static netherreactor = function () {};
  /** @return {Block} */
  static normalStoneStairs = function () {};
  /** @return {Block} */
  static noteblock = function () {};
  /** @return {Block} */
  static oakStairs = function () {};
  /** @return {Block} */
  static observer = function () {};
  /** @return {Block} */
  static obsidian = function () {};
  /** @return {Block} */
  static orangeGlazedTerracotta = function () {};
  /** @return {Block} */
  static oxidizedCopper = function () {};
  /** @return {Block} */
  static oxidizedCutCopper = function () {};
  /** @return {Block} */
  static oxidizedCutCopperSlab = function () {};
  /** @return {Block} */
  static oxidizedCutCopperStairs = function () {};
  /** @return {Block} */
  static oxidizedDoubleCutCopperSlab = function () {};
  /** @return {Block} */
  static packedIce = function () {};
  /** @return {Block} */
  static pinkGlazedTerracotta = function () {};
  /** @return {Block} */
  static piston = function () {};
  /** @return {Block} */
  static pistonarmcollision = function () {};
  /** @return {Block} */
  static planks = function () {};
  /** @return {Block} */
  static podzol = function () {};
  /** @return {Block} */
  static pointedDripstone = function () {};
  /** @return {Block} */
  static polishedAndesiteStairs = function () {};
  /** @return {Block} */
  static polishedBasalt = function () {};
  /** @return {Block} */
  static polishedBlackstone = function () {};
  /** @return {Block} */
  static polishedBlackstoneBrickDoubleSlab = function () {};
  /** @return {Block} */
  static polishedBlackstoneBrickSlab = function () {};
  /** @return {Block} */
  static polishedBlackstoneBrickStairs = function () {};
  /** @return {Block} */
  static polishedBlackstoneBrickWall = function () {};
  /** @return {Block} */
  static polishedBlackstoneBricks = function () {};
  /** @return {Block} */
  static polishedBlackstoneButton = function () {};
  /** @return {Block} */
  static polishedBlackstoneDoubleSlab = function () {};
  /** @return {Block} */
  static polishedBlackstonePressurePlate = function () {};
  /** @return {Block} */
  static polishedBlackstoneSlab = function () {};
  /** @return {Block} */
  static polishedBlackstoneStairs = function () {};
  /** @return {Block} */
  static polishedBlackstoneWall = function () {};
  /** @return {Block} */
  static polishedDioriteStairs = function () {};
  /** @return {Block} */
  static polishedGraniteStairs = function () {};
  /** @return {Block} */
  static portal = function () {};
  /** @return {Block} */
  static potatoes = function () {};
  /** @return {Block} */
  static powderSnow = function () {};
  /** @return {Block} */
  static poweredComparator = function () {};
  /** @return {Block} */
  static poweredRepeater = function () {};
  /** @return {Block} */
  static prismarine = function () {};
  /** @return {Block} */
  static prismarineBricksStairs = function () {};
  /** @return {Block} */
  static prismarineStairs = function () {};
  /** @return {Block} */
  static pumpkin = function () {};
  /** @return {Block} */
  static pumpkinStem = function () {};
  /** @return {Block} */
  static purpleGlazedTerracotta = function () {};
  /** @return {Block} */
  static purpurBlock = function () {};
  /** @return {Block} */
  static purpurStairs = function () {};
  /** @return {Block} */
  static quartzBlock = function () {};
  /** @return {Block} */
  static quartzBricks = function () {};
  /** @return {Block} */
  static quartzOre = function () {};
  /** @return {Block} */
  static quartzStairs = function () {};
  /** @return {Block} */
  static rail = function () {};
  /** @return {Block} */
  static redFlower = function () {};
  /** @return {Block} */
  static redGlazedTerracotta = function () {};
  /** @return {Block} */
  static redMushroom = function () {};
  /** @return {Block} */
  static redMushroomBlock = function () {};
  /** @return {Block} */
  static redNetherBrick = function () {};
  /** @return {Block} */
  static redNetherBrickStairs = function () {};
  /** @return {Block} */
  static redSandstone = function () {};
  /** @return {Block} */
  static redSandstoneStairs = function () {};
  /** @return {Block} */
  static redstoneBlock = function () {};
  /** @return {Block} */
  static redstoneLamp = function () {};
  /** @return {Block} */
  static redstoneOre = function () {};
  /** @return {Block} */
  static redstoneTorch = function () {};
  /** @return {Block} */
  static redstoneWire = function () {};
  /** @return {Block} */
  static reeds = function () {};
  /** @return {Block} */
  static repeatingCommandBlock = function () {};
  /** @return {Block} */
  static reserved6 = function () {};
  /** @return {Block} */
  static respawnAnchor = function () {};
  /** @return {Block} */
  static sand = function () {};
  /** @return {Block} */
  static sandstone = function () {};
  /** @return {Block} */
  static sandstoneStairs = function () {};
  /** @return {Block} */
  static sapling = function () {};
  /** @return {Block} */
  static scaffolding = function () {};
  /** @return {Block} */
  static sculkSensor = function () {};
  /** @return {Block} */
  static seaPickle = function () {};
  /** @return {Block} */
  static seagrass = function () {};
  /** @return {Block} */
  static sealantern = function () {};
  /** @return {Block} */
  static shroomlight = function () {};
  /** @return {Block} */
  static shulkerBox = function () {};
  /** @return {Block} */
  static silverGlazedTerracotta = function () {};
  /** @return {Block} */
  static skull = function () {};
  /** @return {Block} */
  static slime = function () {};
  /** @return {Block} */
  static smallDripleafBlock = function () {};
  /** @return {Block} */
  static smithingTable = function () {};
  /** @return {Block} */
  static smoker = function () {};
  /** @return {Block} */
  static smoothQuartzStairs = function () {};
  /** @return {Block} */
  static smoothRedSandstoneStairs = function () {};
  /** @return {Block} */
  static smoothSandstoneStairs = function () {};
  /** @return {Block} */
  static smoothStone = function () {};
  /** @return {Block} */
  static snow = function () {};
  /** @return {Block} */
  static snowLayer = function () {};
  /** @return {Block} */
  static soulCampfire = function () {};
  /** @return {Block} */
  static soulFire = function () {};
  /** @return {Block} */
  static soulLantern = function () {};
  /** @return {Block} */
  static soulSand = function () {};
  /** @return {Block} */
  static soulSoil = function () {};
  /** @return {Block} */
  static soulTorch = function () {};
  /** @return {Block} */
  static sponge = function () {};
  /** @return {Block} */
  static sporeBlossom = function () {};
  /** @return {Block} */
  static spruceButton = function () {};
  /** @return {Block} */
  static spruceDoor = function () {};
  /** @return {Block} */
  static spruceFenceGate = function () {};
  /** @return {Block} */
  static sprucePressurePlate = function () {};
  /** @return {Block} */
  static spruceStairs = function () {};
  /** @return {Block} */
  static spruceStandingSign = function () {};
  /** @return {Block} */
  static spruceTrapdoor = function () {};
  /** @return {Block} */
  static spruceWallSign = function () {};
  /** @return {Block} */
  static stainedGlass = function () {};
  /** @return {Block} */
  static stainedGlassPane = function () {};
  /** @return {Block} */
  static stainedHardenedClay = function () {};
  /** @return {Block} */
  static standingBanner = function () {};
  /** @return {Block} */
  static standingSign = function () {};
  /** @return {Block} */
  static stickyPiston = function () {};
  /** @return {Block} */
  static stickypistonarmcollision = function () {};
  /** @return {Block} */
  static stone = function () {};
  /** @return {Block} */
  static stoneBrickStairs = function () {};
  /** @return {Block} */
  static stoneButton = function () {};
  /** @return {Block} */
  static stonePressurePlate = function () {};
  /** @return {Block} */
  static stoneSlab = function () {};
  /** @return {Block} */
  static stoneSlab2 = function () {};
  /** @return {Block} */
  static stoneSlab3 = function () {};
  /** @return {Block} */
  static stoneSlab4 = function () {};
  /** @return {Block} */
  static stoneStairs = function () {};
  /** @return {Block} */
  static stonebrick = function () {};
  /** @return {Block} */
  static stonecutter = function () {};
  /** @return {Block} */
  static stonecutterBlock = function () {};
  /** @return {Block} */
  static strippedAcaciaLog = function () {};
  /** @return {Block} */
  static strippedBirchLog = function () {};
  /** @return {Block} */
  static strippedCrimsonHyphae = function () {};
  /** @return {Block} */
  static strippedCrimsonStem = function () {};
  /** @return {Block} */
  static strippedDarkOakLog = function () {};
  /** @return {Block} */
  static strippedJungleLog = function () {};
  /** @return {Block} */
  static strippedOakLog = function () {};
  /** @return {Block} */
  static strippedSpruceLog = function () {};
  /** @return {Block} */
  static strippedWarpedHyphae = function () {};
  /** @return {Block} */
  static strippedWarpedStem = function () {};
  /** @return {Block} */
  static structureBlock = function () {};
  /** @return {Block} */
  static structureVoid = function () {};
  /** @return {Block} */
  static sweetBerryBush = function () {};
  /** @return {Block} */
  static tallgrass = function () {};
  /** @return {Block} */
  static target = function () {};
  /** @return {Block} */
  static tnt = function () {};
  /** @return {Block} */
  static torch = function () {};
  /** @return {Block} */
  static trapdoor = function () {};
  /** @return {Block} */
  static trappedChest = function () {};
  /** @return {Block} */
  static tripwire = function () {};
  /** @return {Block} */
  static tripwireHook = function () {};
  /** @return {Block} */
  static turtleEgg = function () {};
  /** @return {Block} */
  static twistingVines = function () {};
  /** @return {Block} */
  static underwaterTorch = function () {};
  /** @return {Block} */
  static undyedShulkerBox = function () {};
  /** @return {Block} */
  static unknown = function () {};
  /** @return {Block} */
  static unlitRedstoneTorch = function () {};
  /** @return {Block} */
  static unpoweredComparator = function () {};
  /** @return {Block} */
  static unpoweredRepeater = function () {};
  /** @return {Block} */
  static vine = function () {};
  /** @return {Block} */
  static wallBanner = function () {};
  /** @return {Block} */
  static wallSign = function () {};
  /** @return {Block} */
  static warpedButton = function () {};
  /** @return {Block} */
  static warpedDoor = function () {};
  /** @return {Block} */
  static warpedDoubleSlab = function () {};
  /** @return {Block} */
  static warpedFence = function () {};
  /** @return {Block} */
  static warpedFenceGate = function () {};
  /** @return {Block} */
  static warpedFungus = function () {};
  /** @return {Block} */
  static warpedHyphae = function () {};
  /** @return {Block} */
  static warpedNylium = function () {};
  /** @return {Block} */
  static warpedPlanks = function () {};
  /** @return {Block} */
  static warpedPressurePlate = function () {};
  /** @return {Block} */
  static warpedRoots = function () {};
  /** @return {Block} */
  static warpedSlab = function () {};
  /** @return {Block} */
  static warpedStairs = function () {};
  /** @return {Block} */
  static warpedStandingSign = function () {};
  /** @return {Block} */
  static warpedStem = function () {};
  /** @return {Block} */
  static warpedTrapdoor = function () {};
  /** @return {Block} */
  static warpedWallSign = function () {};
  /** @return {Block} */
  static warpedWartBlock = function () {};
  /** @return {Block} */
  static water = function () {};
  /** @return {Block} */
  static waterlily = function () {};
  /** @return {Block} */
  static waxedCopper = function () {};
  /** @return {Block} */
  static waxedCutCopper = function () {};
  /** @return {Block} */
  static waxedCutCopperSlab = function () {};
  /** @return {Block} */
  static waxedCutCopperStairs = function () {};
  /** @return {Block} */
  static waxedDoubleCutCopperSlab = function () {};
  /** @return {Block} */
  static waxedExposedCopper = function () {};
  /** @return {Block} */
  static waxedExposedCutCopper = function () {};
  /** @return {Block} */
  static waxedExposedCutCopperSlab = function () {};
  /** @return {Block} */
  static waxedExposedCutCopperStairs = function () {};
  /** @return {Block} */
  static waxedExposedDoubleCutCopperSlab = function () {};
  /** @return {Block} */
  static waxedWeatheredCopper = function () {};
  /** @return {Block} */
  static waxedWeatheredCutCopper = function () {};
  /** @return {Block} */
  static waxedWeatheredCutCopperSlab = function () {};
  /** @return {Block} */
  static waxedWeatheredCutCopperStairs = function () {};
  /** @return {Block} */
  static waxedWeatheredDoubleCutCopperSlab = function () {};
  /** @return {Block} */
  static weatheredCopper = function () {};
  /** @return {Block} */
  static weatheredCutCopper = function () {};
  /** @return {Block} */
  static weatheredCutCopperSlab = function () {};
  /** @return {Block} */
  static weatheredCutCopperStairs = function () {};
  /** @return {Block} */
  static weatheredDoubleCutCopperSlab = function () {};
  /** @return {Block} */
  static web = function () {};
  /** @return {Block} */
  static weepingVines = function () {};
  /** @return {Block} */
  static wheat = function () {};
  /** @return {Block} */
  static whiteGlazedTerracotta = function () {};
  /** @return {Block} */
  static witherRose = function () {};
  /** @return {Block} */
  static wood = function () {};
  /** @return {Block} */
  static woodenButton = function () {};
  /** @return {Block} */
  static woodenDoor = function () {};
  /** @return {Block} */
  static woodenPressurePlate = function () {};
  /** @return {Block} */
  static woodenSlab = function () {};
  /** @return {Block} */
  static wool = function () {};
  /** @return {Block} */
  static yellowFlower = function () {};
  /** @return {Block} */
  static yellowGlazedTerracotta = function () {};
}

export class Commands {
  /**
   *
   * @param {string} command
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
      position: { x = 0, y = 0, z = 0 },
      spawnPoint: { x = 0, y = 0, z = 0 },
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
      destination: { x = 0, y = 0, z = 0 },
      feature: String(),
      itemData: Number(),
      slotId: Number(),
      slotType: String(),
      spawnPos: { x = 0, y = 0, z = 0 },
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
     * @type {string}
     */
    this.id = undefined;
    /**
     * @type {number}
     */
    this.maxTurn = undefined;
    /**
     * @type {number}
     */
    this.value = undefined;
    this.setCurrent = (val) => {};
    this.restToMinValue = () => {};
    this.restToMaxValue = () => {};
    this.restToDefaultValue = () => {};
    /**
     * @type {number}
     */
    this.current = undefined;
    this.setAirSupply = (val) => {};
    /**
     * @type {number}
     */
    this.totalSupply = undefined;
    /**
     * @type {number}
     */
    this.suffocateTime = undefined;
    /**
     * @type {number}
     */
    this.inhaleTime = undefined;
    /**
     * @type {boolean}
     */
    this.breathesAir = undefined;
    /**
     * @type {boolean}
     */
    this.breathesWater = undefined;
    /**
     * @type {boolean}
     */
    this.breathesLava = undefined;
    /**
     * @type {boolean}
     */
    this.breathesSolids = undefined;
    /**
     * @type {boolean}
     */
    this.generatesBubbles = undefined;
    /**
     * @type {Array<string>}
     */
    this.breatheBlocks = undefined;
    /**
     * @type {Array<string>}
     */
    this.nonBreatheBlocks = undefined;
    /**
     * @type {boolean}
     */
    this.isAmphibious = undefined;
    /**
     * @type {boolean}
     */
    this.avoidSun = undefined;
    /**
     * @type {boolean}
     */
    this.canPassDoors = undefined;
    /**
     * @type {boolean}
     */
    this.canOpenDoors = undefined;
    /**
     * @type {boolean}
     */
    this.canOpenIronDoors = undefined;
    /**
     * @type {boolean}
     */
    this.canBreakDoors = undefined;
    /**
     * @type {boolean}
     */
    this.avoidWater = undefined;
    /**
     * @type {boolean}
     */
    this.avoidDamageBlocks = undefined;
    /**
     * @type {boolean}
     */
    this.canFloat = undefined;
    /**
     * @type {boolean}
     */
    this.canSink = undefined;
    /**
     * @type {boolean}
     */
    this.canPathOverWater = undefined;
    /**
     * @type {boolean}
     */
    this.canPathOverLava = undefined;
    /**
     * @type {boolean}
     */
    this.canWalkInLava = undefined;
    /**
     * @type {boolean}
     */
    this.avoidPortals = undefined;
    /**
     * @type {boolean}
     */
    this.canWalk = undefined;
    /**
     * @type {boolean}
     */
    this.canSwim = undefined;
    /**
     * @type {boolean}
     */
    this.canBreach = undefined;
    /**
     * @type {boolean}
     */
    this.canJump = undefined;
    /**
     * @type {boolean}
     */
    this.canPathFromAir = undefined;
    /**
     * 首紐でつなぎます
     * @param {Minecraft.Entity} entity 首紐でつなぐ先のエンティティです。
     */
    this.leash = (entity) => {};
    /**
     * 首紐をとります
     */
    this.unleash = () => {};
    /**
     * @type {number}
     */
    this.softDistance = undefined;
    /**
     * @type {number}
     */
    this.maxTurn = undefined;
    this.addRider = (val) => {};
    this.ejectRider = (val) => {};
    this.ejectRiders = () => {};
    /**
     * @type {number}
     */
    this.seatCount = undefined;
    /**
     * @type {boolean}
     */
    this.crouchingSkipInteract = undefined;
    this.interactText = "";
    /**
     * @type {Array<string>}
     */
    this.familyTypes = undefined;
    /**
     * @type {number}
     */
    this.controllingSeat = undefined;
    /**
     * @type {boolean}
     */
    this.pullInEntities = undefined;
    /**
     * @type {boolean}
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
     * @param {boolean} status 手懐けの状態を設定します。 this.true = 手懐けられた状態 this.false = 手懐けられていない状態
     */
    this.setTamed = (status) => {};
    this.filters = {};
    /**
     * @type {boolean}
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
     * @type {number}
     */
    this.additionalSlotsPerStrength = undefined;
    /**
     * @type {boolean}
     */
    this.canBeSiphonedFrom = undefined;
    this.containerType = "";
    /**
     * @type {number}
     */
    this.inventorySize = undefined;
    /**
     * @type {boolean}
     */
    this.private = undefined;
    /**
     * @type {boolean}
     */
    this.restrictToOwner = undefined;
    this.container = {
      /**
       * slotにアイテムを追加
       * @param {number} slot
       * @param {Minecraft.ItemStack} itemStack
       */
      setItem: (slot, itemStack) => {},
      /**
       * slotのアイテムを取得
       * @param {number} slot 取得するスロット番号
       * @return {Minecraft.ItemStack}
       */
      getItem: (slot) => {},
      /**
       * 空いているスロットにItemStackを追加
       * @param {Minecraft.ItemStack} itemStack
       */
      addItem: (itemStack) => {},
      /**
       * fromSlotからtoContainerのtoSlotにアイテムを転送
       * @param {number} fromSlot
       * @param {number} toSlot
       * @param {Minecraft.Container} toContainer
       */
      transferItem: (fromSlot, toSlot, toContainer) => {},
      /**
       * otherContainerのotherSlotとslotのアイテムを交換します。
       * @param {number} slot
       * @param {number} otherSlot
       * @param {Minecraft.Container} otherContainer
       */
      swapItems: (slot, otherSlot, otherContainer) => {},
      size: 0,
      emptySlotsCount: 0,
    }
  }
}

export class Dimension {}

export class Effect {
  constructor() {
    /**@return {Number} */
    this.getAmplifier = () => {};
    /**@return {Number} */
    this.getDuration = () => {};
  }
}

/**
 * @typedef {{getName:function():string}} EffectType
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

export class Entity {
  constructor() {
    /**
     *
     * @param {string} ComponentName
     * @return {boolean}
     */
    this.hasComponent = (ComponentName) => {};
    /**
     *
     * @param {string} ComponentName
     * @return {Component}
     */
    this.getComponent = (ComponentName) => {};
    /**
     * @return {Array<Component>}
     */
    this.getComponents = () => {};
    /**
     * @return {string}
     */
    this.getName = () => {};
    this.kill = () => {};
    /**
     *
     * @param {EffectType} effectType
     * @return {Effect}
     */
    this.getEffect = (effectType) => {};
    /**
     *
     * @param {EffectType} effectType
     * @param {Number} duration
     * @param {Number} amplifier
     */
    this.addEffect = (effectType, duration, amplifier) => {};
  }
}

export class Events {}

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
  constructor(itemName, amount, data) {}
}

/**
 * @typedef {{getName:function():string}} ItemType
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
  static string;
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
  static ["minecraft:string"];
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
   * @return {boolean}
   */
  equals(location) {}
}

class Tick {}

export class World {
  /**
   *
   * @param {Dimension} dimension
   */
  static getDimension = (dimension) => {};
  /**
   *
   * @param {string} eventName
   * @param {function(Entity):void} callback
   */
  static addEventListener = (eventName, callback) => {};
}

// "minecraft:color" = class {};
// "minecraft:health" = class {};
// "minecraft:leashable" = class {};
// "minecraft:tamemount" = class {};
