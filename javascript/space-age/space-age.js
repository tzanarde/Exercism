const yearDurations = { earth: 1,
                        mercury: 0.2408467,
                        venus: 0.61519726,
                        mars: 1.8808158,
                        jupiter: 11.862615,
                        saturn: 29.447498,
                        uranus: 84.016846,
                        neptune: 164.79132, }

const secondsInAYear = 31557600;

export function age(planet, ageInSeconds) {
  return Math.round((secondsToYear(ageInSeconds) / yearDuration(planet)) * 100) / 100;
};

function secondsToYear(seconds) {
  return seconds / secondsInAYear;
}

function yearDuration(planet) {
  return yearDurations[planet];
}
