
import { checkPiece } from './App'
import { checkColumn, checkRow } from './positionCheck.tsx'
import Pieces, { Piece } from './Pieces'
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


    /* 
        if ( row of ArrayField(square) == row of ArrayField(piece.oldBoardPosition) - k
      AND
        column of ArrayField(square) == column of ArrayField(piece.oldBoardPosition) - k
      AND
        9 > row of ArrayField(square) > 0
      AND
        9 > column of ArrayField(square) > 0 ) {
      
        ((write legal squares into list +k(x<0) ))
        ((check for occupying pieces in path +k(x<0) ))
        ((for all squares between occupying pieces/board border return true))
        ((for the occupying pieces of opposite color return true))
          
        }
        else if ( row of ArrayField(square) == row of ArrayField(piece.oldBoardPosition) + k
      AND
        column of ArrayField(square) == column of ArrayField(piece.oldBoardPosition) + k
      AND
        9 > row of ArrayField(square) > 0
      AND
        9 > column of ArrayField(square) > 0 ) {
  
        ((write legal squares into list +k(x>0) ))
        ((check for occupying pieces in path +k(x>0) ))
        ((for all squares between occupying pieces/board border return true))
        ((for the occupying pieces of opposite color return true))
  
        } 
        else if ( row of ArrayField(square) == row of ArrayField(piece.oldBoardPosition) + k
      AND
        column of ArrayField(square) == column of ArrayField(piece.oldBoardPosition) - k
      AND
        9 > row of ArrayField(square) > 0
      AND
        9 > column of ArrayField(square) > 0 ) {
  
        ((write legal squares into list -k(x<0) ))
        ((check for occupying pieces in path -k(x<0) ))
        ((for all squares between occupying pieces/board border return true))
        ((for the occupying pieces of opposite color return true))
  
        } 
        else if ( row of ArrayField(square) == row of ArrayField(piece.oldBoardPosition) - k
      AND
        column of ArrayField(square) == column of ArrayField(piece.oldBoardPosition) + k
      AND
        9 > row of ArrayField(square) > 0
      AND
        9 > column of ArrayField(square) > 0 ) {
  
        ((write legal squares into list -k(x>0) ))
        ((check for occupying pieces in path -k(x>0) ))
        ((for all squares between occupying pieces/board border return true))
        ((for the occupying pieces of opposite color return true))
  
        }
      */



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

    /*       if (
            row of ArrayField(square) == row of ArrayField(piece.oldBoardPosition)
        AND
          column of ArrayField(square) > 0
        AND
          column of ArrayField(square) < 9 ) {
      
          ((write legal squares into list horizontal))
          ((check for occupying pieces in path left-right))
          ((for all squares between occupying pieces/board border return true))
          ((for the occupying pieces return true))
          }
          else if (
            column of ArrayField(square) == column of ArrayField(piece.oldBoardPosition)
        AND
          row of ArrayField(square) > 0
        AND
          row of ArrayField(square) < 9 ) {
    
          ((write legal squares into list vertical))
          ((check for occupying pieces in path forward-backward))
          ((for all squares between occupying pieces/board border return true))
          ((for the occupying pieces of opposite color return true))
          
          } 
          else if ( 
            row of ArrayField(square) == row of ArrayField(piece.oldBoardPosition) - k
          AND
            column of ArrayField(square) == column of ArrayField(piece.oldBoardPosition) - k
          AND
            9 > row of ArrayField(square) > 0
          AND
            9 > column of ArrayField(square) > 0 ) {
          
            ((write legal squares into list +k(x<0) ))
            ((check for occupying pieces in path +k(x<0) ))
            ((for all squares between occupying pieces/board border return true))
            ((for the occupying pieces of opposite color return true))
              
            }
            else if ( 
              row of ArrayField(square) == row of ArrayField(piece.oldBoardPosition) + k
            AND
              column of ArrayField(square) == column of ArrayField(piece.oldBoardPosition) + k
            AND
              9 > row of ArrayField(square) > 0
            AND
              9 > column of ArrayField(square) > 0 ) {
    
              ((write legal squares into list +k(x>0) ))
              ((check for occupying pieces in path +k(x>0) ))
              ((for all squares between occupying pieces/board border return true))
              ((for the occupying pieces of opposite color return true))
    
              } 
              else if ( row of ArrayField(square) == row of ArrayField(piece.oldBoardPosition) + k
            AND
              column of ArrayField(square) == column of ArrayField(piece.oldBoardPosition) - k
            AND
              9 > row of ArrayField(square) > 0
            AND
              9 > column of ArrayField(square) > 0 ) {
    
              ((write legal squares into list -k(x<0) ))
              ((check for occupying pieces in path -k(x<0) ))
              ((for all squares between occupying pieces/board border return true))
              ((for the occupying pieces of opposite color return true))
    
              } 
              else if ( row of ArrayField(square) == row of ArrayField(piece.oldBoardPosition) - k
            AND
              column of ArrayField(square) == column of ArrayField(piece.oldBoardPosition) + k
            AND
              9 > row of ArrayField(square) > 0
            AND
              9 > column of ArrayField(square) > 0 ) {
    
              ((write legal squares into list -k(x>0) ))
              ((check for occupying pieces in path -k(x>0) ))
              ((for all squares between occupying pieces/board border return true))
              ((for the occupying pieces of opposite color return true))
    
              } 
          
          */

    return true

  } else if (piece.pieceType == "wK" || piece.pieceType == "bK") {
    /* 
  
    if (
        row of ArrayField(square) == row of ArrayField(piece.oldBoardPosition)
    AND (
      column of ArrayField(square) == column of ArrayField(piece.oldBoardPosition) - 1
    OR
      column of ArrayField(square) == column of ArrayField(piece.oldBoardPosition) + 1
    ) AND
      9 > column of ArrayField(square) > 0 ) {
  
      } else if (
        column of ArrayField(square) == column of ArrayField(piece.oldBoardPosition)
    AND (
      row of ArrayField(square) == row of ArrayField(piece.oldBoardPosition) - 1
    OR
      row of ArrayField(square) ==  of ArrayField(piece.oldBoardPosition) + 1
    ) AND
      9 > row of ArrayField(square) > 0 ) {
  
      } else if ( 
        row of ArrayField(square) == row of ArrayField(piece.oldBoardPosition) - 1
      AND
        column of ArrayField(square) == column of ArrayField(piece.oldBoardPosition) - 1
      AND
        9 > row of ArrayField(square) > 0
      AND
        9 > column of ArrayField(square) > 0 ) {
      
        ((write legal squares into list +k(x<0) ))
        ((check for occupying pieces in path +k(x<0) ))
        ((for all squares between occupying pieces/board border return true))
        ((for the occupying pieces of opposite color return true))
          
        }
        else if ( 
          row of ArrayField(square) == row of ArrayField(piece.oldBoardPosition) + 1
        AND
          column of ArrayField(square) == column of ArrayField(piece.oldBoardPosition) + 1
        AND
          9 > row of ArrayField(square) > 0
        AND
          9 > column of ArrayField(square) > 0 ) {
  
          ((write legal squares into list +k(x>0) ))
          ((check for occupying pieces in path +k(x>0) ))
          ((for all squares between occupying pieces/board border return true))
          ((for the occupying pieces of opposite color return true))
  
          } 
          else if ( row of ArrayField(square) == row of ArrayField(piece.oldBoardPosition) + 1
        AND
          column of ArrayField(square) == column of ArrayField(piece.oldBoardPosition) - 1
        AND
          9 > row of ArrayField(square) > 0
        AND
          9 > column of ArrayField(square) > 0 ) {
  
          ((write legal squares into list -k(x<0) ))
          ((check for occupying pieces in path -k(x<0) ))
          ((for all squares between occupying pieces/board border return true))
          ((for the occupying pieces of opposite color return true))
  
          } 
          else if ( row of ArrayField(square) == row of ArrayField(piece.oldBoardPosition) - 1
        AND
          column of ArrayField(square) == column of ArrayField(piece.oldBoardPosition) + 1
        AND
          9 > row of ArrayField(square) > 0
        AND
          9 > column of ArrayField(square) > 0 ) {
  
          ((write legal squares into list -k(x>0) ))
          ((check for occupying pieces in path -k(x>0) ))
          ((for all squares between occupying pieces/board border return true))
          ((for the occupying pieces of opposite color return true))
  
          }
       
  
    */

    return true

  } else return false
}