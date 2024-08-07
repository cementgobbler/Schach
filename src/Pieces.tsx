export type Piece = {
    pieceNotation: string
    pieceType: string
    pieceID: string
    oldBoardPosition: string
    newBoardPosition: string
    captured: boolean
    canCastle: boolean
}

const wP_a: Piece = {
    pieceNotation: "",
    pieceType: "wP",
    pieceID: "11",
    oldBoardPosition: "",
    newBoardPosition: "a2",
    captured: false,
    canCastle: false
}

const wP_b: Piece = {
    pieceNotation: "",
    pieceType: "wP",
    pieceID: "12",
    oldBoardPosition: "",
    newBoardPosition: "b2",
    captured: false,
    canCastle: false
}

const wP_c: Piece = {
    pieceNotation: "",
    pieceType: "wP",
    pieceID: "13",
    oldBoardPosition: "",
    newBoardPosition: "c2",
    captured: false,
    canCastle: false
}

const wP_d: Piece = {
    pieceNotation: "",
    pieceType: "wP",
    pieceID: "14",
    oldBoardPosition: "",
    newBoardPosition: "d2",
    captured: false,
    canCastle: false
}

const wP_e: Piece = {
    pieceNotation: "",
    pieceType: "wP",
    pieceID: "15",
    oldBoardPosition: "",
    newBoardPosition: "e2",
    captured: false,
    canCastle: false
}

const wP_f: Piece = {
    pieceNotation: "",
    pieceType: "wP",
    pieceID: "16",
    oldBoardPosition: "",
    newBoardPosition: "f2",
    captured: false,
    canCastle: false
}

const wP_g: Piece = {
    pieceNotation: "",
    pieceType: "wP",
    pieceID: "17",
    oldBoardPosition: "",
    newBoardPosition: "g2",
    captured: false,
    canCastle: false
}

const wP_h: Piece = {
    pieceNotation: "",
    pieceType: "wP",
    pieceID: "18",
    oldBoardPosition: "",
    newBoardPosition: "h2",
    captured: false,
    canCastle: false
}

const wR_B: Piece = {
    pieceNotation: "R",
    pieceType: "wR",
    pieceID: "21",
    oldBoardPosition: "",
    newBoardPosition: "a1",
    captured: false,
    canCastle: true
}

const wN_W: Piece = {
    pieceNotation: "N",
    pieceType: "wN",
    pieceID: "22",
    oldBoardPosition: "",
    newBoardPosition: "b1",
    captured: false,
    canCastle: false
}

const wB_B: Piece = {
    pieceNotation: "B",
    pieceType: "wB",
    pieceID: "23",
    oldBoardPosition: "",
    newBoardPosition: "c1",
    captured: false,
    canCastle: false
}

const wQ: Piece = {
    pieceNotation: "Q",
    pieceType: "wQ",
    pieceID: "24",
    oldBoardPosition: "",
    newBoardPosition: "d1",
    captured: false,
    canCastle: false
}

const wK: Piece = {
    pieceNotation: "K",
    pieceType: "wK",
    pieceID: "25",
    oldBoardPosition: "",
    newBoardPosition: "e1",
    captured: false,
    canCastle: true
}

const wB_W: Piece = {
    pieceNotation: "B",
    pieceType: "wB",
    pieceID: "26",
    oldBoardPosition: "",
    newBoardPosition: "f1",
    captured: false,
    canCastle: false
}

const wN_B: Piece = {
    pieceNotation: "N",
    pieceType: "wN",
    pieceID: "27",
    oldBoardPosition: "",
    newBoardPosition: "g1",
    captured: false,
    canCastle: false
}

const wR_W: Piece = {
    pieceNotation: "R",
    pieceType: "wR",
    pieceID: "28",
    oldBoardPosition: "",
    newBoardPosition: "h1",
    captured: false,
    canCastle: true
}

const bP_a: Piece = {
    pieceNotation: "",
    pieceType: "bP",
    pieceID: "31",
    oldBoardPosition: "",
    newBoardPosition: "a7",
    captured: false,
    canCastle: false
}

const bP_b: Piece = {
    pieceNotation: "",
    pieceType: "bP",
    pieceID: "32",
    oldBoardPosition: "",
    newBoardPosition: "b7",
    captured: false,
    canCastle: false
}

const bP_c: Piece = {
    pieceNotation: "",
    pieceType: "bP",
    pieceID: "33",
    oldBoardPosition: "",
    newBoardPosition: "c7",
    captured: false,
    canCastle: false
}

const bP_d: Piece = {
    pieceNotation: "",
    pieceType: "bP",
    pieceID: "34",
    oldBoardPosition: "",
    newBoardPosition: "d7",
    captured: false,
    canCastle: false
}

const bP_e: Piece = {
    pieceNotation: "",
    pieceType: "bP",
    pieceID: "35",
    oldBoardPosition: "",
    newBoardPosition: "e7",
    captured: false,
    canCastle: false
}

const bP_f: Piece = {
    pieceNotation: "",
    pieceType: "bP",
    pieceID: "36",
    oldBoardPosition: "",
    newBoardPosition: "f7",
    captured: false,
    canCastle: false
}

const bP_g: Piece = {
    pieceNotation: "",
    pieceType: "bP",
    pieceID: "37",
    oldBoardPosition: "",
    newBoardPosition: "g7",
    captured: false,
    canCastle: false
}

const bP_h: Piece = {
    pieceNotation: "",
    pieceType: "bP",
    pieceID: "38",
    oldBoardPosition: "",
    newBoardPosition: "h7",
    captured: false,
    canCastle: false
}

const bR_W: Piece = {
    pieceNotation: "R",
    pieceType: "bR",
    pieceID: "41",
    oldBoardPosition: "",
    newBoardPosition: "a8",
    captured: false,
    canCastle: true
}

const bN_B: Piece = {
    pieceNotation: "N",
    pieceType: "bN",
    pieceID: "42",
    oldBoardPosition: "",
    newBoardPosition: "b8",
    captured: false,
    canCastle: false
}

const bB_W: Piece = {
    pieceNotation: "B",
    pieceType: "bB",
    pieceID: "43",
    oldBoardPosition: "",
    newBoardPosition: "c8",
    captured: false,
    canCastle: false
}

const bQ: Piece = {
    pieceNotation: "Q",
    pieceType: "bQ",
    pieceID: "44",
    oldBoardPosition: "",
    newBoardPosition: "d8",
    captured: false,
    canCastle: false
}

const bK: Piece = {
    pieceNotation: "K",
    pieceType: "bK",
    pieceID: "45",
    oldBoardPosition: "",
    newBoardPosition: "e8",
    captured: false,
    canCastle: true
}

const bB_B: Piece = {
    pieceNotation: "B",
    pieceType: "bB",
    pieceID: "46",
    oldBoardPosition: "",
    newBoardPosition: "f8",
    captured: false,
    canCastle: false
}

const bN_W: Piece = {
    pieceNotation: "N",
    pieceType: "bN",
    pieceID: "47",
    oldBoardPosition: "",
    newBoardPosition: "g8",
    captured: false,
    canCastle: false
}

const bR_B: Piece = {
    pieceNotation: "R",
    pieceType: "bR",
    pieceID: "48",
    oldBoardPosition: "",
    newBoardPosition: "h8",
    captured: false,
    canCastle: true
}

let Pieces: Piece[] =
    [wP_a, wP_b, wP_c, wP_d, wP_e, wP_f, wP_g, wP_h,
        wR_B, wN_W, wB_B, wQ, wK, wB_W, wN_B, wR_W,
        bP_a, bP_b, bP_c, bP_d, bP_e, bP_f, bP_g, bP_h,
        bR_W, bN_B, bB_W, bQ, bK, bB_B, bN_W, bR_B]

export default Pieces