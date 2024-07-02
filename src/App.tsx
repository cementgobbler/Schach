import { useState } from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import Pieces, { Piece } from './Pieces'
import { moveLegal } from './checkMoveLegal'
import { checkMaterial } from './materialCheck'

let GridArray: Square[][] = [
  /*["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"] */
]

type Square = {
  squareBoardPosition: string
  Color: string
  TextColor: string
  CoordinateLetter: string
  CoordinateNumber: string
}

type Highlight = {
  boardPosition: string[]
  Color: string
  Opacity: number
}

var HighlightSelect: Highlight = {
  boardPosition: [],
  Color: "#434343",
  Opacity: 0.5
}

var HighlightLegal: Highlight = {
  boardPosition: [],
  Color: '#9a9a9a',
  Opacity: 0.5
}

var move: number

export function checkPiece(square: string) {
  for (let i = 0; i < Pieces.length; i++) {
    if (
      Pieces[i].newBoardPosition == square
      &&
      Pieces[i].captured == false
    )
      return Pieces[i]
  }

}

export function chessTurn(move: number) {

  let turn = Math.ceil(move / 2)
  console.log("Move:", move, "Turn:", turn)

}



export function whiteToMove() {
  if (move % 2 == 0) {
    return true
    console.log("white to move")
  } else {
    return false
    console.log("black to move")
  }
}

function ColorMap(defaultOrientation: boolean) {
  if (defaultOrientation) {

    for (let Zeile = 0; Zeile < 8; Zeile++) {

      GridArray.push([])

      for (let Spalte = 0; Spalte < 8; Spalte++) {



        //select field 'Spalte' of current array
        //assign properties to field 'Spalte' 

        //Define Colors for Square and Text
        let Color;
        let TextColor;
        if (Zeile % 2 == 0) {
          if (Spalte % 2 == 0) {
            Color = "#ebecd0" //Zelle wird weiß
            TextColor = '#739552' //Text wird schwarz
          }
          else {
            Color = "#739552" //Zelle wird schwarz
            TextColor = '#ebecd0' //Text wird weiß
          }
        } else {
          if (Spalte % 2 == 0) {
            Color = "#739552" //Zelle wird schwarz
            TextColor = '#ebecd0' //Text wird weiß
          } else {
            Color = "#ebecd0" //Zelle wird weiß
            TextColor = '#739552' //Text wird schwarz
          }

        }


        let squareBoardPositionString = String.fromCharCode(97 + Spalte) + Math.abs(Zeile - 8)

        let CoordinateLetter;
        if (squareBoardPositionString.endsWith("1")) {
          CoordinateLetter = String.fromCharCode(97 + Spalte)
        } else {
          CoordinateLetter = ""
        }

        let CoordinateNumber;
        if (squareBoardPositionString.startsWith("a")) {
          CoordinateNumber = String(Math.abs(Zeile - 8))
        } else {
          CoordinateNumber = ""
        }

        const Square: Square = { squareBoardPosition: squareBoardPositionString, Color, TextColor, CoordinateLetter, CoordinateNumber }

        GridArray[Zeile][Spalte] = Square;

      }
    }

  }
}

ColorMap(true)

move = 0

function App() {
  const [_selectedPiece, _selectPiece] = useState<Piece>()

  function legalMoves(piece: Piece) {

    const moveList = []

    for (const square of GridArray.flat()) {
      if (moveLegal(piece, square.squareBoardPosition) == true) {
        moveList.push(square.squareBoardPosition)
      }

    }

    return moveList
  }

  function highlightSquares(square: Square) {

    if (HighlightLegal.boardPosition.includes(square.squareBoardPosition)) {
      return <div className='highlight' style={{ backgroundColor: HighlightLegal.Color, opacity: HighlightLegal.Opacity }}> </div>
    }

    if (HighlightSelect.boardPosition.includes(square.squareBoardPosition)) {
      return <div className='highlight' style={{ backgroundColor: HighlightSelect.Color, opacity: HighlightSelect.Opacity }}> </div>
    }

  }

  function makeTurn(square: Square) {

    HighlightSelect.boardPosition = []
    HighlightLegal.boardPosition = []

    const Piece = checkPiece(square.squareBoardPosition)
    if (_selectedPiece == undefined) {
      if (Piece == undefined) {

        return

      } else if (
        Piece.pieceType.startsWith("w")
        &&
        whiteToMove() == false
      ) {
        return
      } else if (
        Piece.pieceType.startsWith("b")
        &&
        whiteToMove() == true
      ) {
        return
      }

      Piece.oldBoardPosition = Piece.newBoardPosition

      _selectPiece(Piece)

      HighlightSelect.boardPosition = [square.squareBoardPosition]

      HighlightLegal.boardPosition = legalMoves(Piece)

    } else {

      if (moveLegal(_selectedPiece, square.squareBoardPosition)) {

        if (Piece !== undefined) {
          Piece.captured = true
        }

        _selectedPiece.oldBoardPosition = _selectedPiece.newBoardPosition
        _selectedPiece.newBoardPosition = square.squareBoardPosition

        console.log(_selectedPiece.pieceType, _selectedPiece.newBoardPosition)

        if (_selectedPiece.canCastle == true) {
          _selectedPiece.canCastle = false
        }

        _selectPiece(undefined)

        move = move + 1

        chessTurn(move)

      } else {

        _selectPiece(undefined)

      }




    }
  }

/*   function listMaterialWhite() {
    checkMaterial()?.pieceType.startsWith('w')
  }

  function listMaterialBlack() {
    checkMaterial()?.pieceType.startsWith('b')
  } */
  
  return (
    <>
      <div id='boardWrapper'>
        {
          GridArray.map((row, _rowIndex) => (
            row.map((square, _squareIndex) => (
              <>
                <div className='square' onClick={() => makeTurn(square)} style={{ backgroundColor: square.Color }} key={square.squareBoardPosition}>

                  <div className='CoordinateNumber' style={{ color: square.TextColor }}>{square.CoordinateNumber}</div>
                  <div className='CoordinateLetter' style={{ color: square.TextColor }}>{square.CoordinateLetter}</div>

                  {highlightSquares(square)}

                  <div className='piece' style={{ backgroundImage: `url(/Schachfiguren/${checkPiece(square.squareBoardPosition)?.pieceType}.svg)` }}> </div>

                </div>

              </>
            )
            )
          ))
        }
{/*       </div>
      <div id='infoWrapper'> */}
      </div>
    </>
  )
}

export default App