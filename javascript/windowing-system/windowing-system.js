// Using the prototype syntax on Size class:
//
// export function Size(width = 80, height = 60) {
//     this.width = width;
//     this.height = height;
// }

// Size.prototype.resize = function(newWidth, newheight) {
//     this.width = newWidth;
//     this.height = newheight;
// }

// Using the class syntax on Size class:
//
export class Size {
    constructor(width = 80, height = 60) {
        this.width = width;
        this.height = height;
    }

    resize(newWidth, newheight) {
        this.width = newWidth;
        this.height = newheight;
    }
}

// Using the prototype syntax on Position class:
//
// export function Position(x = 0, y = 0) {
//     this.x = x;
//     this.y = y;
// }

// Position.prototype.move = function move(newX, newY) {
//     this.x = newX;
//     this.y = newY;
// }

// Using the class syntax on Position class:
//
export class Position {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    move(newX, newY) {
        this.x = newX;
        this.y = newY;
    }
}

export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    resize(size) {
        this.size.width = resizeValue(size.width, this.position.x, this.screenSize.width);
        this.size.height = resizeValue(size.height, this.position.y, this.screenSize.height);
    }

    move(position) {
        this.position.x = positionValue(position.x, this.position.x, this.screenSize.width);
        this.position.y = positionValue(position.y, this.position.y, this.screenSize.height);
    }
}

function resizeValue(valueToResize, currentPosition, screenSize) {
    if (valueToResize < 1) return 1;
    if (valueToResize >= 1) {
        if (valueToResize > spaceLeft(screenSize, currentPosition)) {
            return spaceLeft(screenSize, currentPosition);
        } else {
            return valueToResize;
        }
    }
}

function positionValue(valueToMove, currentPosition, screenSize) {
    if (valueToMove < 0) return 0;
    if (valueToMove >= 0) {
        if (valueToMove > spaceLeft(screenSize, currentPosition)) {
            return spaceLeft(screenSize, currentPosition);
        } else {
            return currentPosition;
        }
    }
}

function spaceLeft(screenSize, currentPosition) {
    return screenSize - currentPosition;
}
