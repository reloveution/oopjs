'use strict'
console.clear()

class Matrix {
    constructor(width, height) {
        this._matrix = this._makeMatrix(width, height)
        this.showMatrix()
    }

    _makeMatrix(width, height) {
        let matrix = []
        for (let i = 0; i < height; i++) {
            matrix[i] = []
            for(let ii = 0; ii < width; ii++) {
                matrix[i][ii] = []
                matrix[i][ii] = (Math.floor(Math.random() * 10))
            }
        }
        return matrix
    }

    showMatrix() {
        for (let i = 0; i < this._matrix.length; i++){
            console.log(this._matrix[i])
        }
    }

    _getValue(x,y) {
        if ((y > this._matrix.length) || (x > this._matrix[0].length) || ((x * y) <= 0)){
            console.log(`Out of range`)
        } else {
            console.log(this._matrix[y-1][x-1])
            return this._matrix[y-1][x-1]
        }
    }

    _walkArround(startX,startY,width,height) {
            // let str = []
            // let m
            // // let x = 0
            
            // if ((a.length & 1) == 0) {
            //     m = a.length / 2
            // } else {
            //     m = (a.length + 1) / 2
            // }
            
            // for (let x = 0; x < m; x++) {
            
            // for (let i = x; i <= (a[x].length - x - 1); i++) {
            //     str += a[x][i]
            //     console.log(str)
            // }
            
            // for (let i = x + 1; i <= (a.length - x - 1); i++) {
            //     str += a[i][a[i].length - x - 1]
            //     console.log(str)
            // }
            
            // for (let i = a[x].length - x - 2; i >= (0 + x); i--) {
            //     str += a[a.length - x - 1][i]
            //     console.log(str)
            // }
            
            // for (let i = a.length - x - 2; i > (0 + x); i--) {
            //     str += a[i][x]
            //     console.log(str)
            // }
            
            // }
            
            // console.log('---' + str)
        }


    




}

const array = new Matrix(6, 6)

// array._getValue(1, 4)

// array._walkArround(2,2,4,4)