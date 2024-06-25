import Pieces, { Piece } from './Pieces'


export function checkRow(Square: String) {
    if (Square.endsWith("1")) {
        return 0
    } else if (Square.endsWith("2")) {
        return 1
    } else if (Square.endsWith("3")) {
        return 2
    } else if (Square.endsWith("4")) {
        return 3
    } else if (Square.endsWith("5")) {
        return 4
    } else if (Square.endsWith("6")) {
        return 5
    } else if (Square.endsWith("7")) {
        return 6
    } else {
        return 7
    }
}




export function checkColumn(Square: String) {
    if (Square.startsWith("a")) {
        return 0
    } else if (Square.startsWith("b")) {
        return 1
    } else if (Square.startsWith("c")) {
        return 2
    } else if (Square.startsWith("d")) {
        return 3
    } else if (Square.startsWith("e")) {
        return 4
    } else if (Square.startsWith("f")) {
        return 5
    } else if (Square.startsWith("g")) {
        return 6
    } else {
        return 7
        }
}

export function checkSquare(Spalte: number, Zeile: number) {
    let squareBoardPositionString = String.fromCharCode(97 + Spalte) + Math.abs(Zeile + 1)

    return squareBoardPositionString
}