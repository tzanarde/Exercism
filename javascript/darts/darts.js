const points = { 'innerCircle': 10,
                 'middleCircle': 5,
                 'outerCircle': 1,
                 'outside': 0 }

export function score(x, y) {
  let radius = tossRadius(x, y);
  if (radius <= 1) {
    return points.innerCircle;
  } else if (radius <= 5) {
    return points.middleCircle;
  } else if (radius <= 10) {
    return points.outerCircle;
  } else {
    return points.outside;
  }

}

function tossRadius(x, y) {
  return Math.hypot(x, y);
}
