/**
 * @file Minecraft (Bedrock) GameTest Framework GameTest module JSDoc
 * @author toka7290
 * @since v1.17.0.54
 * @version v1.17.0.54
 * @name GameTest
 * @memberof MinecraftGameTest
 * @license MIT
 */
import * as Minecraft from "./Minecraft";

/**
 *
 * @param {string} category
 * @param {string} indenter
 * @param {function(Helper):void} callback
 * @return {RegistrationBuilder}
 */
export function register(category, indenter, callback) {}

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
    this.batch = function (batchName) {};
    /**
     *
     * @param {boolean} isRequired
     * @return {RegistrationBuilder}
     */
    this.required = function (isRequired) {};
    /**
     *
     * @param {Number} attemptCount
     * @return {RegistrationBuilder}
     */
    this.requiredSuccessfulAttempts = function (attemptCount) {};
    /**
     *
     * @param {Number} attemptCount
     * @return {RegistrationBuilder}
     */
    this.maxAttempts = function (attemptCount) {};
    /**
     *
     * @param {Number} tickCount
     * @return {RegistrationBuilder}
     */
    this.maxTicks = function (tickCount) {};
    /**
     *
     * @param {Number} tickCount
     * @return {RegistrationBuilder}
     */
    this.setupTicks = function (tickCount) {};
    /**
     *
     * @param {string} structureName
     * @return {RegistrationBuilder}
     */
    this.structureName = function (structureName) {};
    /**
     *
     * @param {Number} paddingBlocks
     * @return {RegistrationBuilder}
     */
    this.padding = function (paddingBlocks) {};
    /**
     *
     * @param {string} tag
     * @return {RegistrationBuilder}
     */
    this.tag = function (tag) {};
  }
}

class Helper {
  constructor() {
    /**
     * @function
     * @param {Minecraft.Block} block
     * @param {Minecraft.BlockLocation} position
     * @return {any}
     */
    this.assertBlockNotPresent = function (block, position) {};
    /**
     *
     * @param {Minecraft.Block} block
     * @param {Minecraft.BlockLocation} position
     * @return {any}
     */
    this.assertBlockPresent = function (block, position) {};
    /**
     *
     * @param {string} blockStateName
     * @param {string} stateValue
     * @param {Minecraft.BlockLocation} position
     * @return {any}
     */
    this.assertBlockState = function (blockStateName, stateValue, position) {};
    /**
     *
     * @param {ItemStack} itemName
     * @param {Minecraft.BlockLocation} position
     * @return {any}
     */
    this.assertContainerContains = function (itemName, position) {};
    /**
     *
     * @param {Minecraft.BlockLocation} position
     */
    this.assertContainerEmpty = function (position) {};
    /**
     *
     * @param {BlockLocation} position
     * @param {string} entityIdentifier
     * @param {function(Entity):void} callback
     */
    this.assertEntityData = function (position, entityIdentifier, callback) {};
    /**
     *
     * @param {Minecraft.Entity} entity
     * @param {BlockLocation} position
     */
    this.assertEntityInstancePresent = function (entity, position) {};
    /**
     *
     * @param {string} entityIdentifier
     * @param {string} componentIdentifier
     * @param {Minecraft.BlockLocation} position
     * @param {boolean} hasComponent
     */
    this.assertEntityHasComponent = function (
      entityIdentifier,
      componentIdentifier,
      position,
      hasComponent
    ) {};
    /**
     *
     * @param {string} entityIdentifier
     * @param {Minecraft.BlockLocation} position
     */
    this.assertEntityNotPresent = function (entityIdentifier, position) {};
    /**
     *
     * @param {string} entityIdentifier
     */
    this.assertEntityNotPresentInArea = function (entityIdentifier) {};
    /**
     *
     * @param {string} entityIdentifier
     * @param {Minecraft.BlockLocation} position
     */
    this.assertEntityPresent = function (entityIdentifier, position) {};
    /**
     *
     * @param {string} entityIdentifier
     */
    this.assertEntityPresentInArea = function (entityIdentifier) {};
    /**
     *
     * @param {string} entityIdentifier
     * @param {Number} slot
     * @param {string} armor
     * @param {Minecraft.BlockLocation} position
     * @param {boolean} evaluation
     */
    this.assertEntityHasArmor = function (entityIdentifier, slot, armor, position, evaluation) {};
    /**
     *
     * @param {string} entityIdentifier
     * @param {Location} position
     */
    this.assertEntityTouching = function (entityIdentifier, position) {};
    /**
     *
     * @param {string} entityIdentifier
     * @param {Location} position
     */
    this.assertEntityNotTouching = function (entityIdentifier, position) {};
    /**
     *
     * @param {ItemType} itemType
     * @param {BlockLocation} position
     * @param {number} searchDistance
     * @param {number} count
     */
    this.assertItemEntityCountIs = function (itemType, position, searchDistance, count) {};
    /**
     *
     * @param {ItemType} itemType
     * @param {Minecraft.BlockLocation} position
     * @param {Number} searchDistance
     */
    this.assertItemEntityNotPresent = function (itemType, position, searchDistance) {};
    /**
     *
     * @param {ItemType} item
     * @param {Minecraft.BlockLocation} position
     * @param {Number} searchDistance
     */
    this.assertItemEntityPresent = function (item, position, searchDistance) {};
    /**
     *
     * @param {BlockLocation} position
     * @param {boolean} isWaterlogged
     */
    this.assertIsWaterlogged = function (position, isWaterlogged) {};
    /**
     *
     * @param {BlockLocation} position
     * @param {Number} power
     */
    this.assertRedstonePower = function (position, power) {};

    /**
     *
     * @param {string} errorMessage
     */
    this.fail = function (errorMessage) {};
    /**
     *
     * @param {function():void} callback
     */
    this.failIf = function (callback) {};

    this.killAllEntities = function () {};
    /**
     *
     * @param {Minecraft.BlockLocation} position
     */
    this.pressButton = function (position) {};
    /**
     *
     * @param {string} text
     */
    this.print = function (text) {};
    /**
     *
     * @param {Minecraft.BlockLocation} position
     */
    this.pullLever = function (position) {};
    /**
     *
     * @param {BlockLocation} position
     * @param {number} duration
     */
    this.pulseRedstone = function (position, duration) {};

    /**
     *
     * @param {Number} delayTicks
     * @param {function():void} callback
     */
    this.runAfterDelay = function (delayTicks, callback) {};
    /**
     *
     * @param {Number} tick
     * @param {function():void} callback
     */
    this.runAtTickTime = function (tick, callback) {};
    /**
     * @function
     * @param {Minecraft.Block} block
     * @param {Minecraft.BlockLocation} position
     */
    this.setBlock = function (block, position) {};
    // test.setEntityTamed(identifier, position); 1.16.230.50
    /**
     *
     * @param {string} entityIdentifier
     * @param {Minecraft.BlockLocation} position
     * @return {Minecraft.Entity}
     */
    this.spawn = function (entityIdentifier, position) {};
    /**
     *
     * @param {ItemStack} itemType
     * @param {Location} position
     */
    this.spawnItem = function (itemType, position) {};

    /**
     * @return {GameTestSequence}
     */
    this.startSequence = function () {};

    this.succeed = function () {};
    /**
     *
     * @param {function():void} callback
     */
    this.succeedIf = function (callback) {};
    /**
     *
     * @param {Number} tick
     */
    this.succeedOnTick = function (tick) {};
    /**
     *
     * @param {Number} tick
     * @param {function():void} callback
     */
    this.succeedOnTickWhen = function (tick, callback) {};
    /**
     *
     * @param {function():void} callback
     */
    this.succeedWhen = function (callback) {};
    /**
     *
     * @param {Minecraft.Block} block
     * @param {Minecraft.BlockLocation} position
     */
    this.succeedWhenBlockPresent = function (block, position) {};
    /**
     *
     * @param {string} entityIdentifier
     * @param {string} componentIdentifier
     * @param {Minecraft.BlockLocation} position
     * @param {boolean} hasComponent
     */
    this.succeedWhenEntityHasComponent = function (
      entityIdentifier,
      componentIdentifier,
      position,
      hasComponent
    ) {};
    /**
     *
     * @param {string} entityIdentifier
     * @param {Minecraft.BlockLocation} position
     */
    this.succeedWhenEntityNotPresent = function (entityIdentifier, position) {};
    /**
     *
     * @param {string} entityIdentifier
     * @param {Minecraft.BlockLocation} position
     */
    this.succeedWhenEntityPresent = function (entityIdentifier, position) {};
  }
}

class GameTestSequence {
  constructor() {
    /**
     *
     * @param {function():undefined} callback
     * @return {GameTestSequence}
     */
    this.thenExecute = function (callback) {};
    /**
     *
     * @param {Number} delayTicks
     * @param {function():undefined} callback
     * @return {GameTestSequence}
     */
    this.thenExecuteAfter = function (delayTicks, callback) {};
    /**
     *
     * @param {string} errorMessage
     * @return {void}
     */
    this.thenFail = function (errorMessage) {};
    /**
     *
     * @param {Number} delayTicks
     * @return {GameTestSequence}
     */
    this.thenIdle = function (delayTicks) {};
    this.thenSucceed = function () {};
    /**
     *
     * @param {function():undefined} callback
     * @return {GameTestSequence}
     */
    this.thenWait = function (callback) {};
    /**
     *
     * @param {Number} delayTicks
     * @param {function():undefined} callback
     * @return {GameTestSequence}
     */
    this.thenWaitWithDelay = function (delayTicks, callback) {};
  }
}
