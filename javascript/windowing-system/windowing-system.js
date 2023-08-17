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

    resize(newSize) {
        this.size.width = resizeValue(newSize.width, this.position.x, this.screenSize.width);
        this.size.height = resizeValue(newSize.height, this.position.y, this.screenSize.height);
    }

    move(newPosition) {
        this.position.x = positionValue(newPosition.x, this.position.x, this.size.width, this.screenSize.width);
        this.position.y = positionValue(newPosition.y, this.position.y, this.size.height, this.screenSize.height);
    }
}

export function changeWindow(programWindow) {
    programWindow.resize(new Size(400, 300));
    programWindow.move(new Position(100, 150));
    return programWindow;
}

function resizeValue(valueToResize, currentPosition, screenSize) {
    if (valueToResize < 1) return 1;
    if (valueToResize >= 1) {
        if (valueToResize > spaceRemainingToResize(screenSize, currentPosition)) {
            return spaceRemainingToResize(screenSize, currentPosition);
        } else {
            return valueToResize;
        }
    }
}

function spaceRemainingToResize(screenSize, currentPosition) {
    return screenSize - currentPosition;
}

function positionValue(valueToMove, currentPosition, programSize, screenSize) {
    if (valueToMove < 0) return 0;
    if (valueToMove >= 0) {
        if (valueToMove > spaceRemainingToMove(screenSize, programSize, currentPosition)) {
            return spaceRemainingToMove(screenSize, programSize, currentPosition);
        } else {
            return valueToMove;
        }
    }
}

function spaceRemainingToMove(screenSize, programSize, currentPosition) {
    return screenSize - programSize - currentPosition;
}
