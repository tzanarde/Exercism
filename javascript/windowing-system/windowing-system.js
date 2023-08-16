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

