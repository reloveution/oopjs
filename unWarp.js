'use strict'
console.clear()

class Matrix {
    constructor(matrix) {
        this._resetToDefaults()
        this._matrix = matrix
        this.showMatrix()
    }

    static generateRandomMatrix(width, height) {
        let matrix = []
        for (let i = 0; i < height; i++) {
            matrix[i] = []
            for(let ii = 0; ii < width; ii++) {
                matrix[i][ii] = []
                matrix[i][ii] = (Math.floor(Math.random() * 10))
            }
        }
        return new Matrix(matrix)
    }

    showMatrix() {
        for (let i = 0; i < this._matrix.length; i++){
            console.log(this._matrix[i])
        }
    }

    _getValue(x,y) {
        if ((y > this._matrix.length - 1) || (x > this._matrix[0].length - 1) || ((x * y) < 0)){
            console.log(`Out of range`)
        } else {
            // console.log(this._matrix[y+this.shiftY][x+this.shiftX])
            return this._matrix[y+this._subMatrixShiftY][x+this._subMatrixShiftX]
        }
    }



    _walkArround(startX,startY,width,height) {

    }

    _setSubMatrix(shiftX,shiftY,width,height) {
        this._subMatrixShiftX = shiftX
        this._subMatrixShiftY = shiftY
        this._subMatrixWidth = width
        this._subMatrixHeight = height
    }

    _resetToDefaults() {
        this._subMatrixShiftX = 0
        this._subMatrixShiftY = 0
        this._subMatrixWidth = this._matrix[0].length
        this._subMatrixHeight = this._matrix.length
    }

    cutSubMatrix(shiftX,shiftY,width,height) {
        this._setSubMatrix(shiftX,shiftY,width,height)
        let subMatrix = []
        for (let y = 0; y < this._subMatrixHeight; y++) {
            subMatrix[y] = []
            for (let x = 0; x < this._subMatrixWidth; x++) {
                subMatrix[y][x] = this._getValue(x,y)
            }
        }
        this._resetToDefaults()
        return new Matrix(subMatrix)

    }

    // rotate90degMatrix() {
    //     let newMatrix = []
    //     let y = this._matrix.length - 1
    //     this._resetToDefaults()
    //     for (let x = 0; x < this._matrix[0].length; x++) {
    //         newMatrix[y] = []
    //         for (y = this._matrix.length - 1; y >= 0; y--) {
    //             newMatrix[x][y] = this._getValue(y,x)
    //         }
    //     }
    //     this._matrix = newMatrix
    //     this.showMatrix()
    // }


    candyFlipMatrix() {
        let newMatrix = []
        this._setup2defPropertyForSubMatrix()
        for (let x = 0; x < this._matrix[0].length; x++) {
            newMatrix[x] = []
            for (let y = 0; y < this._matrix.length; y++) {
                newMatrix[x][y] = this._getValue(x,y)
            }
        }
        this._matrix = newMatrix
        this.showMatrix()
    }

}
  
const array1 = Matrix.generateRandomMatrix(6,6)
console.log('----------')
const array2 = array1.cutSubMatrix(1,1,4,4)
console.log('----------')
const array3 = array2.cutSubMatrix(1,1,2,3)
console.log('----------')
array3.candyFlipMatrix()

// array3.rotate90degMatrix()


