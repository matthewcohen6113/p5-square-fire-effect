let frame = 0;
let scale = 30;

function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(0);
}

function draw() {
  blendMode(BLEND);
  background(0);
  blendMode(ADD);
  frame++;
  for(let x = 0; x < width; x += width/scale) {
    for(let y = 0; y < height; y += height/scale) {
      let noiseVal = noise(x/200, (y + 3 * frame)/200, frame/70)
      let size = map(noiseVal, 0, 1, -width/(scale/2), width/(scale/2)) * max(map(y, 0, height, -2, 5), 0) * max(map(abs(x - width/2), 0, width/2, 2, -.5), 0);
      fill(220, noiseVal * map(y, 0, height, 0, 1) * 200, noiseVal * map(y, 0, height, 0, 1) * 50, noiseVal * map(y, 0, height, 0, 2) * 255)
      square(x, y, size,)
    }
  }
}