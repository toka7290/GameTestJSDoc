/**
 * @file Minecraft (Bedrock) GameTest Framework GameTest module JSDoc
 * @author toka7290
 * @since v1.17.20.22
 * @version v1.17.20.22
 * @name GameTest
 * @memberof MinecraftGameTest
 * @license MIT
 */
import * as Minecraft from "./Minecraft";

/**
 *
 * @param {String} category
 * @param {String} indenter
 * @param {function(Helper):void} callback
 * @return {RegistrationBuilder}
 */
export function register(category, indenter, callback) {
  return;
}

/**
 * @return {Object}
 * @readonly
 * @enum {String}
 */
export var Tags = {
  suiteDefault: "suite:default",
  suiteDisabled: "suite:disabled",
  suiteAll: "suite:all",
  suiteDebug: "suite:debug",
};

class RegistrationBuilder {
  constructor() {
    /**
     *  @method
     * @param {('night'|'day')} batchName
     * @return {RegistrationBuilder}
     */
    this.batch = function (batchName) {
      return;
    };
    /**
     *
     * @param {Boolean} isRequired
     * @return {RegistrationBuilder}
     */
    this.required = function (isRequired) {
      return;
    };
    /**
     *
     * @param {Number} attemptCount
     * @return {RegistrationBuilder}
     */
    this.requiredSuccessfulAttempts = function (attemptCount) {
      return;
    };
    /**
     *
     * @param {Number} attemptCount
     * @return {RegistrationBuilder}
     */
    this.maxAttempts = function (attemptCount) {
      return;
    };
    /**
     *
     * @param {Number} tickCount
     * @return {RegistrationBuilder}
     */
    this.maxTicks = function (tickCount) {
      return;
    };
    /**
     *
     * @param {Number} tickCount
     * @return {RegistrationBuilder}
     */
    this.setupTicks = function (tickCount) {
      return;
    };
    /**
     *
     * @param {String} structureName
     * @return {RegistrationBuilder}
     */
    this.structureName = function (structureName) {
      return;
    };
    /**
     *
     * @param {Number} paddingBlocks
     * @return {RegistrationBuilder}
     */
    this.padding = function (paddingBlocks) {
      return;
    };
    /**
     *
     * @param {String} tag
     * @return {RegistrationBuilder}
     */
    this.tag = function (tag) {
      return;
    };
  }
}

class Helper {
  constructor() {
    /**
     *
     * @param {String} blockStateName
     * @param {String} stateValue
     * @param {Minecraft.BlockLocation} position
     * @return {any}
     */
    this.assertBlockState = function (blockStateName, stateValue, position) {
      return;
    };
    /**
     * @function
     * @param {Minecraft.BlockType} block
     * @param {Minecraft.BlockLocation} position
     * @return {any}
     */
    this.assertBlockTypeNotPresent = function (block, position) {
      return;
    };
    /**
     *
     * @param {Minecraft.BlockType} block
     * @param {Minecraft.BlockLocation} position
     * @return {any}
     */
    this.assertBlockTypePresent = function (block, position) {
      return;
    };
    /**
     *
     * @param {Minecraft.Entity} mob
     * @param {Minecraft.BlockLocation} location
     * @param {Boolean} canReach
     */
    this.assertCanReachLocation = function (mob, location, canReach) {
      return;
    };
    /**
     *
     * @param {Boolean} arg
     * @param {String} errorMessage
     */
    this.assert = function (arg, errorMessage) {
      return;
    };
    /**
     *
     * @param {ItemStack} itemName
     * @param {Minecraft.BlockLocation} position
     * @return {any}
     */
    this.assertContainerContains = function (itemName, position) {
      return;
    };
    /**
     *
     * @param {Minecraft.BlockLocation} position
     */
    this.assertContainerEmpty = function (position) {
      return;
    };
    /**
     *
     * @param {Minecraft.BlockLocation} position
     * @param {String} entityIdentifier
     * @param {function(Entity):void} callback
     */
    this.assertEntityData = function (position, entityIdentifier, callback) {
      return;
    };
    /**
     *
     * @param {String} entityIdentifier
     * @param {Number} slot
     * @param {String} armor
     * @param {Minecraft.BlockLocation} position
     * @param {Boolean} evaluation
     */
    this.assertEntityHasArmor = function (entityIdentifier, slot, armor, position, evaluation) {
      return;
    };
    /**
     *
     * @param {String} entityIdentifier
     * @param {String} componentIdentifier
     * @param {Minecraft.BlockLocation} position
     * @param {Boolean} hasComponent
     */
    this.assertEntityHasComponent = function (
      entityIdentifier,
      componentIdentifier,
      position,
      hasComponent
    ) {
      return;
    };
    /**
     *
     * @param {Minecraft.Entity} entity
     * @param {Minecraft.BlockLocation} position
     */
    this.assertEntityInstancePresent = function (entity, position) {
      return;
    };
    /**
     *
     * @param {String} entityIdentifier
     * @param {Minecraft.BlockLocation} position
     */
    this.assertEntityNotPresent = function (entityIdentifier, position) {
      return;
    };
    /**
     *
     * @param {String} entityIdentifier
     */
    this.assertEntityNotPresentInArea = function (entityIdentifier) {
      return;
    };
    /**
     *
     * @param {String} entityIdentifier
     * @param {Location} position
     */
    this.assertEntityNotTouching = function (entityIdentifier, position) {
      return;
    };
    /**
     *
     * @param {String} entityIdentifier
     * @param {Minecraft.BlockLocation} position
     */
    this.assertEntityPresent = function (entityIdentifier, position) {
      return;
    };
    /**
     *
     * @param {String} entityIdentifier
     */
    this.assertEntityPresentInArea = function (entityIdentifier) {
      return;
    };
    /**
     *
     * @param {String} entityIdentifier
     * @param {Location} position
     */
    this.assertEntityTouching = function (entityIdentifier, position) {
      return;
    };
    /**
     *
     * @param {Minecraft.BlockLocation} position
     * @param {Boolean} isWaterlogged
     */
    this.assertIsWaterlogged = function (position, isWaterlogged) {
      return;
    };
    /**
     *
     * @param {ItemType} itemType
     * @param {Minecraft.BlockLocation} position
     * @param {Number} searchDistance
     * @param {Number} count
     */
    this.assertItemEntityCountIs = function (itemType, position, searchDistance, count) {
      return;
    };
    /**
     *
     * @param {ItemType} itemType
     * @param {Minecraft.BlockLocation} position
     * @param {Number} searchDistance
     */
    this.assertItemEntityNotPresent = function (itemType, position, searchDistance) {
      return;
    };
    /**
     *
     * @param {ItemType} item
     * @param {Minecraft.BlockLocation} position
     * @param {Number} searchDistance
     */
    this.assertItemEntityPresent = function (item, position, searchDistance) {
      return;
    };
    /**
     *
     * @param {Minecraft.BlockLocation} position
     * @param {Number} power
     */
    this.assertRedstonePower = function (position, power) {
      return;
    };

    /**
     *
     * @param {String} errorMessage
     */
    this.fail = function (errorMessage) {
      return;
    };
    /**
     *
     * @param {function():void} callback
     */
    this.failIf = function (callback) {
      return;
    };

    /**
     *
     * @param {Minecraft.BlockLocation} blockLocation
     * @return {Minecraft.Block}
     */
    this.getBlock = function (blockLocation) {
      return;
    };
    /**
     *
     * @param {Minecraft.BlockLocation} location
     * @return {Minecraft.Direction}
     */
    this.getFenceConnectivity = function (location) {
      return;
    };
    /**
     *
     * @return {Minecraft.Direction}
     */
    this.getTestDirection = function () {
      return;
    };
    this.killAllEntities = function () {
      return;
    };
    /**
     *
     * @param {Minecraft.BlockLocation} position
     */
    this.pressButton = function (position) {
      return;
    };
    /**
     *
     * @param {String} text
     */
    this.print = function (text) {
      return;
    };
    /**
     *
     * @param {Minecraft.BlockLocation} position
     */
    this.pullLever = function (position) {
      return;
    };
    /**
     *
     * @param {Minecraft.BlockLocation} position
     * @param {Number} duration
     */
    this.pulseRedstone = function (position, duration) {
      return;
    };

    /**
     *
     * @param {Minecraft.BlockLocation} worldLocation
     * @return {Minecraft.BlockLocation}
     */
    this.relativeBlockLocation = function (worldLocation) {
      return;
    };
    /**
     *
     * @param {Minecraft.Location} worldLocation
     * @return {Minecraft.Location}
     */
    this.relativeLocation = function (worldLocation) {
      return;
    };
    /**
     *
     * @param {Minecraft.Direction} direction
     * @return {Minecraft.Direction}
     */
    this.rotateDirection = function (direction) {
      return;
    };

    /**
     *
     * @param {Number} delayTicks
     * @param {function():void} callback
     */
    this.runAfterDelay = function (delayTicks, callback) {
      return;
    };
    /**
     *
     * @param {Number} tick
     * @param {function():void} callback
     */
    this.runAtTickTime = function (tick, callback) {
      return;
    };
    /**
     *
     * @param {Minecraft.BlockPermutation} permutation
     * @param {Minecraft.BlockLocation} position
     */
    this.setBlockPermutation = function (permutation, position) {
      return;
    };
    /**
     * @function
     * @param {Minecraft.BlockType} block
     * @param {Minecraft.BlockLocation} position
     */
    this.setBlockType = function (block, position) {
      return;
    };
    /**
     *
     * @param {Minecraft.Entity} projectile
     * @param {Number} tick
     */
    this.setTntFuse = function (projectile, tick) {
      return;
    };
    // test.setEntityTamed(identifier, position); 1.16.230.50
    /**
     *
     * @param {String} entityIdentifier
     * @param {Minecraft.BlockLocation} position
     * @return {Minecraft.Entity}
     */
    this.spawn = function (entityIdentifier, position) {
      return;
    };
    /**
     *
     * @param {String} identifier
     * @param {Minecraft.Location} location
     * @return {Minecraft.Entity}
     */
    this.spawnAtLocation = function (identifier, location) {
      return;
    };
    /**
     *
     * @param {ItemStack} itemType
     * @param {Location} position
     */
    this.spawnItem = function (itemType, position) {
      return;
    };
    /**
     * @param {String} entityIdentifier
     * @param {Minecraft.BlockLocation} position
     * @return {Minecraft.Entity}
     */
    this.spawnWithoutBehaviors = function (entityIdentifier, position) {
      return;
    };
    /**
     *
     * @param {String} entityIdentifier
     * @param {Location} position
     * @returns
     */
    this.spawnWithoutBehaviorsAtLocation = function (entityIdentifier, position) {
      return;
    };
    /**
     *
     * @param {Minecraft.BlockLocation} position
     * @param {Number} face
     * @param {Number} toward_direction
     */
    this.spreadFromFaceTowardDirection = function (position, face, toward_direction) {
      return;
    };

    /**
     * @return {GameTestSequence}
     */
    this.startSequence = function () {
      return;
    };

    this.succeed = function () {
      return;
    };
    /**
     *
     * @param {function():void} callback
     */
    this.succeedIf = function (callback) {
      return;
    };
    /**
     *
     * @param {Number} tick
     */
    this.succeedOnTick = function (tick) {
      return;
    };
    /**
     *
     * @param {Number} tick
     * @param {function():void} callback
     */
    this.succeedOnTickWhen = function (tick, callback) {
      return;
    };
    /**
     *
     * @param {function():void} callback
     */
    this.succeedWhen = function (callback) {
      return;
    };
    /**
     *
     * @param {Minecraft.BlockType} block
     * @param {Minecraft.BlockLocation} position
     */
    this.succeedWhenBlockTypePresent = function (block, position) {
      return;
    };
    /**
     *
     * @param {String} entityIdentifier
     * @param {String} componentIdentifier
     * @param {Minecraft.BlockLocation} position
     * @param {Boolean} hasComponent
     */
    this.succeedWhenEntityHasComponent = function (
      entityIdentifier,
      componentIdentifier,
      position,
      hasComponent
    ) {
      return;
    };
    /**
     *
     * @param {String} entityIdentifier
     * @param {Minecraft.BlockLocation} position
     */
    this.succeedWhenEntityNotPresent = function (entityIdentifier, position) {
      return;
    };
    /**
     *
     * @param {String} entityIdentifier
     * @param {Minecraft.BlockLocation} position
     */
    this.succeedWhenEntityPresent = function (entityIdentifier, position) {
      return;
    };

    /**
     *
     * @param {Minecraft.Entity} target
     * @param {Minecraft.BlockLocation} blockLocation
     * @param {Number} speed
     */
    this.walkTo = function (target, blockLocation, speed) {
      return;
    };
    /**
     *
     * @param {Minecraft.Entity} target
     * @param {Minecraft.Location} location
     * @param {Number} speed
     */
    this.walkToLocation = function (target, location, speed) {
      return;
    };
    /**
     *
     * @param {Minecraft.BlockLocation} relativeLocation
     * @return {Minecraft.BlockLocation}
     */
    this.worldBlockLocation = function (relativeLocation) {
      return;
    };
    /**
     *
     * @param {Minecraft.Location} relativeLocation
     * @return {Minecraft.Location}
     */
    this.worldLocation = function (relativeLocation) {
      return;
    };
  }
}

class GameTestSequence {
  constructor() {
    /**
     *
     * @param {function():undefined} callback
     * @return {GameTestSequence}
     */
    this.thenExecute = function (callback) {
      return;
    };
    /**
     *
     * @param {Number} delayTicks
     * @param {function():undefined} callback
     * @return {GameTestSequence}
     */
    this.thenExecuteAfter = function (delayTicks, callback) {
      return;
    };
    /**
     *
     * @param {Number} delayTicks
     * @param {function():undefined} callback
     */
    this.thenExecuteFor = function (delayTicks, callback) {
      return;
    };
    /**
     *
     * @param {String} errorMessage
     * @return {void}
     */
    this.thenFail = function (errorMessage) {
      return;
    };
    /**
     *
     * @param {Number} delayTicks
     * @return {GameTestSequence}
     */
    this.thenIdle = function (delayTicks) {
      return;
    };
    this.thenSucceed = function () {
      return;
    };
    /**
     *
     * @param {function():undefined} callback
     * @return {GameTestSequence}
     */
    this.thenWait = function (callback) {
      return;
    };
    /**
     *
     * @param {Number} delayTicks
     * @param {function():undefined} callback
     * @return {GameTestSequence}
     */
    this.thenWaitWithDelay = function (delayTicks, callback) {
      return;
    };
  }
}

class ScriptGameTestConnectivity {}
