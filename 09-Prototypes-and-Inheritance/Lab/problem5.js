function solve() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() {

        }

        changeUnits(value) {
            this.units = value;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }

        metricConversion(num) {
            if (this.units === 'm') return num /= 10;
            if (this.units === 'mm') return num *= 10;
            return num;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }

        get area() {
            this.radius = this.metricConversion(this._radius);
            return Math.PI * this.radius ** 2;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }

        get area() {
            this.width = this.metricConversion(this._width);
            this.height = this.metricConversion(this._height);
            return this.width * this.height;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {Figure, Circle, Rectangle};
}