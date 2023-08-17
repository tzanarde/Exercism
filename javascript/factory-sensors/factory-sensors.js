// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) throw new Error();
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
  if (temperature == null) throw new ArgumentError();
  if (temperature > 500) throw new OverheatingError(temperature);
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
  try {
    actions.check();
  } catch(error) {
    if (deadSensorSituation(error)) actions.alertDeadSensor();
    if (overheatingSituation(error)) actions.alertOverheating();
    if (shutdownSituation(error)) actions.shutdown();
    if (unknownSituation(error)) throw error;
  }

}

function deadSensorSituation(error) {
  return error instanceof ArgumentError;
}

function overheatingSituation(error) {
  return error instanceof OverheatingError && error.temperature < 600;
}

function shutdownSituation(error) {
  return error instanceof OverheatingError && error.temperature > 600;
}

function unknownSituation(error) {
  return !(error instanceof ArgumentError) && !(error instanceof OverheatingError);
}
