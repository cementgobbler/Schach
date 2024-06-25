
import { checkPiece } from './App'
import { checkColumn, checkRow } from './positionCheck.tsx'
import { Piece } from './Pieces'
import { checkSquare } from './positionCheck.tsx'

export function moveLegal(piece: Piece, square: string, whiteTurn: boolean = true) {

  const columnNew: number = checkColumn(square)
  const columnOld: number = checkColumn(piece.oldBoardPosition)
  const rowNew: number = checkRow(square)
  const rowOld: number = checkRow(piece.oldBoardPosition)

  console.log(piece, columnNew, rowNew, checkPiece(checkSquare(columnNew, rowNew)))

  if (piece.pieceType == "wP") {
    if (rowOld == 1) {
      if ( //move forward 1 or 2 squares
        columnNew == columnOld
        &&
        checkPiece(square) == undefined
        &&
        checkPiece(checkSquare(columnNew, rowOld + 1)) == undefined
        && (
          rowNew == rowOld + 1
          ||
          rowNew == rowOld + 2)
      ) {
        return true
      } else if ( //capture on first move
        (columnNew == columnOld + 1 || columnNew == columnOld - 1)
      &&
      checkPiece(square) !== undefined
      &&
      piece.pieceType[0] !== checkPiece(checkSquare(columnNew, rowNew))?.pieceType[0]
      &&
      rowNew == rowOld + 1
      ) {
        return true
      }
    } else if ( //move forward 1 square
      columnNew == columnOld
      &&
      checkPiece(square) == undefined
      &&
      rowNew == rowOld + 1
    ) {
      return true
    }
    else if ( //capture
      (columnNew == columnOld + 1 || columnNew == columnOld - 1)
      &&
      checkPiece(square) !== undefined
      &&
      piece.pieceType[0] !== checkPiece(checkSquare(columnNew, rowNew))?.pieceType[0]
      &&
      rowNew == rowOld + 1
    ) {
      return true
    }


    return false

  } else if (piece.pieceType == "bP") {
    if (rowOld == 6) {
      if ( //move forward 1 or 2 squares
        columnNew == columnOld
        &&
        checkPiece(square) == undefined
        &&
        checkPiece(checkSquare(columnNew, rowOld - 1)) == undefined
        && (
          rowNew == rowOld - 1
          ||
          rowNew == rowOld - 2)
      ) {
        return true
      } else if ( //capture on first move
        (columnNew == columnOld + 1 || columnNew == columnOld - 1)
      &&
      checkPiece(square) !== undefined
      &&
      piece.pieceType[0] !== checkPiece(checkSquare(columnNew, rowNew))?.pieceType[0]
      &&
      rowNew == rowOld - 1
      ) {
        return true
      }
    } else if ( //move forward 1 square
      columnNew == columnOld
      &&
      checkPiece(square) == undefined
      &&
      rowNew == rowOld - 1
    ) {
      return true
    }
    else if ( //capture
      (columnNew == columnOld + 1 || columnNew == columnOld - 1)
      &&
      checkPiece(square) !== undefined
      &&
      piece.pieceType[0] !== checkPiece(checkSquare(columnNew, rowNew))?.pieceType[0]
      &&
      rowNew == rowOld - 1
    ) {
      return true
    }


    return false
  
  } else if (piece.pieceType == "wR" || piece.pieceType == "bR") {
    if (
      rowNew == rowOld
      &&
      8 > columnNew && columnNew > -1) {
      let horizontal = []
      let encounter = false
      for (
        let rookColumn = columnOld + 1; 8 > rookColumn && encounter == false; rookColumn++
      ) {
        if (piece.pieceType[0] !== checkPiece(checkSquare(rookColumn, rowOld))?.pieceType[0]) {
          if (checkPiece(checkSquare(rookColumn, rowOld)) !== undefined) {
            encounter = true
          }
          horizontal.push(checkSquare(rookColumn, rowOld))
        } else {
          break
        }
      }

      encounter = false

      for (
        let rookColumn = columnOld - 1; rookColumn > -1 && encounter == false; rookColumn--
      ) {
        if (piece.pieceType[0] !== checkPiece(checkSquare(rookColumn, rowOld))?.pieceType[0]) {
          if (checkPiece(checkSquare(rookColumn, rowOld)) !== undefined) {
            encounter = true
          }
          horizontal.push(checkSquare(rookColumn, rowOld))
        } else {
          break
        }
      }

      return horizontal.includes(square)
    }

    else if (
      columnNew == columnOld
      &&
      8 > rowNew && rowNew > -1) {
      let vertical = []
      let encounter = false
      for (
        let rookRow = rowOld + 1; 8 > rookRow && encounter == false; rookRow++
      ) {
        if (piece.pieceType[0] !== checkPiece(checkSquare(columnOld, rookRow))?.pieceType[0]) {
          if (checkPiece(checkSquare(columnOld, rookRow)) !== undefined) {
            encounter = true
          }
          vertical.push(checkSquare(columnOld, rookRow))
        } else {
          break
        }
      }

      encounter = false

      for (
        let rookRow = rowOld - 1; rookRow > -1 && encounter == false; rookRow--
      ) {
        if (piece.pieceType[0] !== checkPiece(checkSquare(columnOld, rookRow))?.pieceType[0]) {
          if (checkPiece(checkSquare(columnOld, rookRow)) !== undefined) {
            encounter = true
          }
          vertical.push(checkSquare(columnOld, rookRow))
        } else {
          break
        }
      }
      return vertical.includes(square)
    }

    else return false

  } else if (piece.pieceType == "wB" || piece.pieceType == "bB") {

    if (
      rowNew - rowOld == columnNew - columnOld
    ) {
      let bDiag = []
      let encounter = false
      for (
        let bPosH = columnOld + 1; 8 > bPosH && encounter == false; bPosH++
      ) {
        //Bishop moves up and right
        let bPosV = rowOld + (bPosH - columnOld)

        if (piece.pieceType[0] !== checkPiece(checkSquare(bPosH, bPosV))?.pieceType[0]) {
          if (checkPiece(checkSquare(bPosH, bPosV)) !== undefined) {
            encounter = true
          }
          bDiag.push(checkSquare(bPosH, bPosV))
        } else {
          break
        }
      }

      encounter = false

      for (
        let bPosH = columnOld - 1; bPosH > -1 && encounter == false; bPosH--
      ) {
        //Bishop moves down and left
        let bPosV = rowOld + (bPosH - columnOld)

        if (piece.pieceType[0] !== checkPiece(checkSquare(bPosH, bPosV))?.pieceType[0]) {
          if (checkPiece(checkSquare(bPosH, bPosV)) !== undefined) {
            encounter = true
          }
          bDiag.push(checkSquare(bPosH, bPosV))
        } else {
          break
        }
      }

      return bDiag.includes(square)

    } else if (
      rowNew - rowOld == -1 * (columnNew - columnOld)
    ) {
      let bDiag = []
      let encounter = false
      for (
        let bPosH = columnOld - 1; bPosH > -1 && encounter == false; bPosH--
      ) {
        //Bishop moves up and left
        let bPosV = rowOld - (bPosH - columnOld)

        if (piece.pieceType[0] !== checkPiece(checkSquare(bPosH, bPosV))?.pieceType[0]) {
          if (checkPiece(checkSquare(bPosH, bPosV)) !== undefined) {
            encounter = true
          }
          bDiag.push(checkSquare(bPosH, bPosV))
        } else {
          break
        }
      }

      encounter = false

      for (
        let bPosH = columnOld + 1; 8 > bPosH && encounter == false; bPosH++
      ) {
        //Bishop moves down and right
        let bPosV = rowOld - (bPosH - columnOld)

        if (piece.pieceType[0] !== checkPiece(checkSquare(bPosH, bPosV))?.pieceType[0]) {
          if (checkPiece(checkSquare(bPosH, bPosV)) !== undefined) {
            encounter = true
          }
          bDiag.push(checkSquare(bPosH, bPosV))
        } else {
          break
        }
      }

      return bDiag.includes(square)

    }

  } else if (piece.pieceType == "wN" || piece.pieceType == "bN") {


    if ((
      rowNew == rowOld + 2
      ||
      rowNew == rowOld - 2
    ) && (
        columnNew == columnOld + 1
        ||
        columnNew == columnOld - 1
      ) && (
        8 > rowNew && rowNew > -1
      ) && (
        8 > columnNew && columnNew > -1
      )
      && piece.pieceType[0] !== checkPiece(square)?.pieceType[0]
    ) {

      return true

    } else if ((
      rowNew == rowOld + 1
      ||
      rowNew == rowOld - 1
    ) && (
        columnNew == columnOld + 2
        ||
        columnNew == columnOld - 2
      ) && (
        8 > rowNew && rowNew > -1
      ) && (
        8 > columnNew && columnNew > -1
      )
      && piece.pieceType[0] !== checkPiece(square)?.pieceType[0]
    ) {

      return true

    } else {

      return false

    }


    return true

  } else if (piece.pieceType == "wQ" || piece.pieceType == "bQ") {

    //diagonal check start

    if (
      rowNew - rowOld == columnNew - columnOld
    ) {
      let qDiag = []
      let encounter = false
      for (
        let qPosH = columnOld + 1; 8 > qPosH && encounter == false; qPosH++
      ) {
        //Queen moves up and right
        let qPosV = rowOld + (qPosH - columnOld)

        if (piece.pieceType[0] !== checkPiece(checkSquare(qPosH, qPosV))?.pieceType[0]) {
          if (checkPiece(checkSquare(qPosH, qPosV)) !== undefined) {
            encounter = true
          }
          qDiag.push(checkSquare(qPosH, qPosV))
        } else {
          break
        }
      }

      encounter = false

      for (
        let qPosH = columnOld - 1; qPosH > -1 && encounter == false; qPosH--
      ) {
        //Queen moves down and left
        let qPosV = rowOld + (qPosH - columnOld)

        if (piece.pieceType[0] !== checkPiece(checkSquare(qPosH, qPosV))?.pieceType[0]) {
          if (checkPiece(checkSquare(qPosH, qPosV)) !== undefined) {
            encounter = true
          }
          qDiag.push(checkSquare(qPosH, qPosV))
        } else {
          break
        }
      }

      return qDiag.includes(square)

    } else if (
      rowNew - rowOld == -1 * (columnNew - columnOld)
    ) {
      let qDiag = []
      let encounter = false
      for (
        let qPosH = columnOld - 1; qPosH > -1 && encounter == false; qPosH--
      ) {
        //Queen moves up and left
        let qPosV = rowOld - (qPosH - columnOld)

        if (piece.pieceType[0] !== checkPiece(checkSquare(qPosH, qPosV))?.pieceType[0]) {
          if (checkPiece(checkSquare(qPosH, qPosV)) !== undefined) {
            encounter = true
          }
          qDiag.push(checkSquare(qPosH, qPosV))
        } else {
          break
        }
      }

      encounter = false

      for (
        let qPosH = columnOld + 1; 8 > qPosH && encounter == false; qPosH++
      ) {
        //Queen moves down and right
        let qPosV = rowOld - (qPosH - columnOld)

        if (piece.pieceType[0] !== checkPiece(checkSquare(qPosH, qPosV))?.pieceType[0]) {
          if (checkPiece(checkSquare(qPosH, qPosV)) !== undefined) {
            encounter = true
          }
          qDiag.push(checkSquare(qPosH, qPosV))
        } else {
          break
        }
      }

      return qDiag.includes(square)

    }

    //diagonal check end, orthogonal check start

    else if (
      rowNew == rowOld
      &&
      8 > columnNew && columnNew > -1) {
      let horizontal = []
      let encounter = false
      for (
        let qColumn = columnOld + 1; 8 > qColumn && encounter == false; qColumn++
      ) {
        if (piece.pieceType[0] !== checkPiece(checkSquare(qColumn, rowOld))?.pieceType[0]) {
          if (checkPiece(checkSquare(qColumn, rowOld)) !== undefined) {
            encounter = true
          }
          horizontal.push(checkSquare(qColumn, rowOld))
        } else {
          break
        }
      }

      encounter = false

      for (
        let qColumn = columnOld - 1; qColumn > -1 && encounter == false; qColumn--
      ) {
        if (piece.pieceType[0] !== checkPiece(checkSquare(qColumn, rowOld))?.pieceType[0]) {
          if (checkPiece(checkSquare(qColumn, rowOld)) !== undefined) {
            encounter = true
          }
          horizontal.push(checkSquare(qColumn, rowOld))
        } else {
          break
        }
      }

      return horizontal.includes(square)
    }

    else if (
      columnNew == columnOld
      &&
      8 > rowNew && rowNew > -1) {
      let vertical = []
      let encounter = false
      for (
        let qRow = rowOld + 1; 8 > qRow && encounter == false; qRow++
      ) {
        if (piece.pieceType[0] !== checkPiece(checkSquare(columnOld, qRow))?.pieceType[0]) {
          if (checkPiece(checkSquare(columnOld, qRow)) !== undefined) {
            encounter = true
          }
          vertical.push(checkSquare(columnOld, qRow))
        } else {
          break
        }
      }

      encounter = false

      for (
        let qRow = rowOld - 1; qRow > -1 && encounter == false; qRow--
      ) {
        if (piece.pieceType[0] !== checkPiece(checkSquare(columnOld, qRow))?.pieceType[0]) {
          if (checkPiece(checkSquare(columnOld, qRow)) !== undefined) {
            encounter = true
          }
          vertical.push(checkSquare(columnOld, qRow))
        } else {
          break
        }
      }
      return vertical.includes(square)
    }

    else return false

  } else if (piece.pieceType == "wK" || piece.pieceType == "bK") {
    
    //check for captures/obstacles

    if (
      columnNew == columnOld
      && (
      rowNew == rowOld - 1
      ||
      rowNew == rowOld + 1
    )
  ) {
    return true
  } else if (
      rowNew == rowOld
      && (
      columnNew == columnOld - 1
      ||
      columnNew == columnOld + 1
   )
  ) {
    return true
  } else if (
    rowNew == rowOld -1
    && (
    columnNew == columnOld - 1
    ||
    columnNew == columnOld + 1
    ) 
  ) {
    return true
  } else if (
    rowNew == rowOld + 1
    && (
      columnNew == columnOld - 1
      ||
      columnNew == columnOld + 1
    )
  ) {
    return true
  }
    else return false

  } else return false
}