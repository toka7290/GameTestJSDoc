/**
 * @file Minecraft (Bedrock) GameTest Framework GameTest module JSDoc
 * @author toka7290
 * @since v1.16.230.52
 * @version v1.16.230.52
 * @name GameTest
 * @memberof MinecraftGameTest
 * @license MIT
 */
import { Block, BlockLocation, Entity, ItemStack, Location } from "./Minecraft";

/**
 *
 * @param {string} category
 * @param {string} indenter
 * @param {function(GameTestInterface):void} callback
 * @return {gametest}
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

/** @type {any} */
export const GameTestSequence = undefined;
export function Helper() {}
export function RegistrationBuilder() {}

class gametest {
  constructor() {
    /**
     *  @method
     * @param {Number} time
     * @return {gametest}
     */
    this.batch = function (time) {};
    /**
     *
     * @param {boolean} value
     * @return {gametest}
     */
    this.required = function (value) {};
    /**
     *
     * @param {Number} num
     * @return {gametest}
     */
    this.requiredSuccessfulAttempts = function (num) {};
    /**
     *
     * @param {Number} num
     * @return {gametest}
     */
    this.maxAttempts = function (num) {};
    /**
     *
     * @param {Number} tick
     * @return {gametest}
     */
    this.maxTicks = function (tick) {};
    /**
     *
     * @param {Number} tick
     * @return {gametest}
     */
    this.setupTicks = function (tick) {};
    /**
     *
     * @param {string} structure
     * @return {gametest}
     */
    this.structureName = function (structure) {};
    /**
     *
     * @param {Number} distance
     * @return {gametest}
     */
    this.padding = function (distance) {};
    /**
     *
     * @param {string} tag
     * @return {gametest}
     */
    this.tag = function (tag) {};
  }
}

class GameTestInterface {
  constructor() {
    /**
     * @function
     * @param {Block} blockObj
     * @param {BlockLocation} blockLocation
     */
    this.assertBlockNotPresent = function (blockObj, blockLocation) {};
    /**
     *
     * @param {Block} blockObj
     * @param {BlockLocation} blockLocation
     */
    this.assertBlockPresent = function (blockObj, blockLocation) {};
    /**
     *
     * @param {string} stateName
     * @param {string} state
     * @param {BlockLocation} blockLocation
     */
    this.assertBlockState = function (stateName, state, blockLocation) {};
    /**
     *
     * @param {string} identifier
     * @param {BlockLocation} blockLocation
     */
    this.assertContainerContains = function (identifier, blockLocation) {};
    /**
     *
     * @param {BlockLocation} blockLocation
     */
    this.assertContainerEmpty = function (blockLocation) {};
    /**
     *
     * @param {BlockLocation} position
     * @param {string} entityIdentifier
     * @param {function(Entity):void} callback
     */
    this.assertEntityData = function (position, entityIdentifier, callback) {};
    // test.assertEntityInstancePresent(entity, position); 1.16.230.52
    /**
     *
     * @param {string} identifier
     * @param {string} component
     * @param {BlockLocation} blockLocation
     * @param {boolean} evaluation
     */
    this.assertEntityHasComponent = function (identifier, component, blockLocation, evaluation) {};
    /**
     *
     * @param {string} identifier
     * @param {BlockLocation} blockLocation
     */
    this.assertEntityNotPresent = function (identifier, blockLocation) {};
    /**
     *
     * @param {string} identifier
     */
    this.assertEntityNotPresentInArea = function (identifier) {};
    /**
     *
     * @param {string} identifier
     * @param {BlockLocation} blockLocation
     */
    this.assertEntityPresent = function (identifier, blockLocation) {};
    /**
     *
     * @param {string} entityIdentifier
     */
    this.assertEntityPresentInArea = function (entityIdentifier) {};
    /**
     *
     * @param {string} identifier
     * @param {Number} slot
     * @param {string} armor
     * @param {BlockLocation} blockLocation
     * @param {boolean} evaluation
     */
    this.assertEntityHasArmor = function (identifier, slot, armor, blockLocation, evaluation) {};
    /**
     *
     * @param {ItemStack} itemStack
     * @param {BlockLocation} blockLocation
     * @param {Number} quantity
     */
    this.assertItemEntityNotPresent = function (itemStack, blockLocation, quantity) {};
    /**
     *
     * @param {ItemStack} itemStack
     * @param {BlockLocation} blockLocation
     * @param {Number} quantity
     */
    this.assertItemEntityPresent = function (itemStack, blockLocation, quantity) {};
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
     * @param {string} message
     */
    this.fail = function (message) {};
    /**
     *
     * @param {function():void} callback
     */
    this.failIf = function (callback) {};

    this.killAllEntities = function () {};
    /**
     *
     * @param {BlockLocation} blockLocation
     */
    this.pressButton = function (blockLocation) {};
    /**
     *
     * @param {string} text
     */
    this.print = function (text) {};
    /**
     *
     * @param {BlockLocation} blockLocation
     */
    this.pullLever = function (blockLocation) {};

    /**
     *
     * @param {Number} tick
     * @param {function():void} callback
     */
    this.runAfterDelay = function (tick, callback) {};
    /**
     *
     * @param {Number} tick
     * @param {function():void} callback
     */
    this.runAtTickTime = function (tick, callback) {};
    /**
     * @function
     * @param {Block} blockObj
     * @param {BlockLocation} blockLocation
     */
    this.setBlock = function (blockObj, blockLocation) {};
    // test.setEntityTamed(identifier, blockLocation); 1.16.230.50
    /**
     *
     * @param {string} identifier
     * @param {BlockLocation} blockLocation
     * @return {Entity}
     */
    this.spawn = function (identifier, blockLocation) {};
    /**
     *
     * @param {ItemStack} itemType
     * @param {Location} position
     */
    this.spawnItem = function (itemType, position) {};

    /**
     * @return {sequence}
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
     * @param {Block} blockObj
     * @param {BlockLocation} blockLocation
     */
    this.succeedWhenBlockPresent = function (blockObj, blockLocation) {};
    /**
     *
     * @param {string} identifier
     * @param {string} component
     * @param {BlockLocation} blockLocation
     * @param {boolean} have
     */
    this.succeedWhenEntityHasComponent = function (identifier, component, blockLocation, have) {};
    /**
     *
     * @param {string} identifier
     * @param {BlockLocation} blockLocation
     */
    this.succeedWhenEntityNotPresent = function (identifier, blockLocation) {};
    /**
     *
     * @param {string} identifier
     * @param {BlockLocation} blockLocation
     */
    this.succeedWhenEntityPresent = function (identifier, blockLocation) {};
  }
}

class sequence {
  constructor() {
    /**
     *
     * @param {function():void} callback
     */
    this.thenExecute = function (callback) {};
    /**
     *
     * @param {function():void} callback
     */
    this.thenExecute = function (callback) {};
    /**
     *
     * @param {Number} tick
     * @param {function():void} callback
     */
    this.thenExecuteAfter = function (tick, callback) {};
    /**
     *
     * @param {string} message
     */
    this.thenFail = function (message) {};
    /**
     *
     * @param {Number} tick
     */
    this.thenIdle = function (tick) {};
    this.thenSucceed = function () {};
    /**
     *
     * @param {function():void} callback
     */
    this.thenWait = function (callback) {};
    /**
     *
     * @param {Number} tick
     * @param {function():void} callback
     */
    this.thenWaitWithDelay = function (tick, callback) {};
  }
}
