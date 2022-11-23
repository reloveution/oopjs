'use strict'
console.clear()

class Matrix {
    constructor(matrix) {
        this._matrix = matrix
        this._resetToDefaults()
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
            return this._matrix[y+this._subMatrixShiftY][x+this._subMatrixShiftX]
        }
    }



    walkArround() {
        // this._setSubMatrix(shiftX,shiftY,width,height)
        let str = []
        let m
        // let x = 0
        
        if ((this._matrix.length & 1) == 0) {
            m = this._matrix.length / 2
        } else {
            m = (this._matrix.length + 1) / 2
        }
        // должна быть проверка на чётность/нечетность
        // и у ширины и у высоты матрицы!!
        
        for (let x = 0; x < m; x++) {
        
            for (let i = x; i <= (this._matrix[x].length - x - 1); i++) {
                str += this._getValue(i,x)
                // console.log(str)
            }
            
            for (let i = x + 1; i <= (this._matrix.length - x - 1); i++) {
                str += this._matrix[i][this._matrix[i].length - x - 1]
                // console.log(str)
            }
            
            for (let i = this._matrix[x].length - x - 2; i >= (0 + x); i--) {
                str += this._matrix[this._matrix[x].length - x - 2][i]
                // console.log(str)
            }
            
            for (let i = this._matrix[x].length - x - 2; i > (0 + x); i--) {
                str += this._getValue(x,i)
                // console.log(this._getValue(x,i))
            }
        
        }
        
        console.log('---' + str)
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

    clockwiseRotationOfTheMatrix() {
        // let newMatrix = []
        // let yy
        // let xx = this._matrix[0].length
        // for (let y = 0; y < this._matrix.length; y++, xx--) {
        //     yy = 0
        //     newMatrix[y] = []
        //     for(let x = 0; x < this._matrix[0].length; x++, yy++) {
        //         newMatrix[yy][xx] = this._getValue(y,x)
        //     }
        // }
        // this._matrix = newMatrix
        // this.showMatrix()
    }


    candyFlipMatrix() {
        let newMatrix = []
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
array2.walkArround()














// const array3 = array2.cutSubMatrix(1,1,2,3)
// console.log('----------')
// array3.candyFlipMatrix()
// console.log('----------')
// array3.clockwiseRotationOfTheMatrix()
// console.log(typeof(array3._matrix))


