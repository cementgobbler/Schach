export type Piece = {
    pieceType: string
    pieceID: string
    oldBoardPosition: string
    newBoardPosition: string
}

const wP_a: Piece = {
    pieceType: "wP",
    pieceID: "11",
    oldBoardPosition: "",
    newBoardPosition: "a2"
}

const wP_b: Piece = {
    pieceType: "wP",
    pieceID: "12",
    oldBoardPosition: "",
    newBoardPosition: "b2"
}

const wP_c: Piece = {
    pieceType: "wP",
    pieceID: "13",
    oldBoardPosition: "",
    newBoardPosition: "c2"
}

const wP_d: Piece = {
    pieceType: "wP",
    pieceID: "14",
    oldBoardPosition: "",
    newBoardPosition: "d2"
}

const wP_e: Piece = {
    pieceType: "wP",
    pieceID: "15",
    oldBoardPosition: "",
    newBoardPosition: "e2"
}

const wP_f: Piece = {
    pieceType: "wP",
    pieceID: "16",
    oldBoardPosition: "",
    newBoardPosition: "f2"
}

const wP_g: Piece = {
    pieceType: "wP",
    pieceID: "17",
    oldBoardPosition: "",
    newBoardPosition: "g2"
}

const wP_h: Piece = {
    pieceType: "wP",
    pieceID: "18",
    oldBoardPosition: "",
    newBoardPosition: "h2"
}

const wR_B: Piece = {
    pieceType: "wR",
    pieceID: "21",
    oldBoardPosition: "",
    newBoardPosition: "a1"
}

const wN_W: Piece = {
    pieceType: "wN",
    pieceID: "22",
    oldBoardPosition: "",
    newBoardPosition: "b1"
}

const wB_B: Piece = {
    pieceType: "wB",
    pieceID: "23",
    oldBoardPosition: "",
    newBoardPosition: "c1"
}

const wQ: Piece = {
    pieceType: "wQ",
    pieceID: "24",
    oldBoardPosition: "",
    newBoardPosition: "d1"
}

const wK: Piece = {
    pieceType: "wK",
    pieceID: "25",
    oldBoardPosition: "",
    newBoardPosition: "e1"
}

const wB_W: Piece = {
    pieceType: "wB",
    pieceID: "26",
    oldBoardPosition: "",
    newBoardPosition: "f1"
}

const wN_B: Piece = {
    pieceType: "wN",
    pieceID: "27",
    oldBoardPosition: "",
    newBoardPosition: "g1"
}

const wR_W: Piece = {
    pieceType: "wR",
    pieceID: "28",
    oldBoardPosition: "",
    newBoardPosition: "h1"
}

const bP_a: Piece = {
    pieceType: "bP",
    pieceID: "31",
    oldBoardPosition: "",
    newBoardPosition: "a7"
}

const bP_b: Piece = {
    pieceType: "bP",
    pieceID: "32",
    oldBoardPosition: "",
    newBoardPosition: "b7"
}

const bP_c: Piece = {
    pieceType: "bP",
    pieceID: "33",
    oldBoardPosition: "",
    newBoardPosition: "c7"
}

const bP_d: Piece = {
    pieceType: "bP",
    pieceID: "34",
    oldBoardPosition: "",
    newBoardPosition: "d7"
}

const bP_e: Piece = {
    pieceType: "bP",
    pieceID: "35",
    oldBoardPosition: "",
    newBoardPosition: "e7"
}

const bP_f: Piece = {
    pieceType: "bP",
    pieceID: "36",
    oldBoardPosition: "",
    newBoardPosition: "f7"
}

const bP_g: Piece = {
    pieceType: "bP",
    pieceID: "37",
    oldBoardPosition: "",
    newBoardPosition: "g7"
}

const bP_h: Piece = {
    pieceType: "bP",
    pieceID: "38",
    oldBoardPosition: "",
    newBoardPosition: "h7"
}

const bR_W: Piece = {
    pieceType: "bR",
    pieceID: "41",
    oldBoardPosition: "",
    newBoardPosition: "a8"
}

const bN_B: Piece = {
    pieceType: "bN",
    pieceID: "42",
    oldBoardPosition: "",
    newBoardPosition: "b8"
}

const bB_W: Piece = {
    pieceType: "bB",
    pieceID: "43",
    oldBoardPosition: "",
    newBoardPosition: "c8"
}

const bQ: Piece = {
    pieceType: "bQ",
    pieceID: "44",
    oldBoardPosition: "",
    newBoardPosition: "d8"
}

const bK: Piece = {
    pieceType: "bK",
    pieceID: "45",
    oldBoardPosition: "",
    newBoardPosition: "e8"
}

const bB_B: Piece = {
    pieceType: "bB",
    pieceID: "46",
    oldBoardPosition: "",
    newBoardPosition: "f8"
}

const bN_W: Piece = {
    pieceType: "bN",
    pieceID: "47",
    oldBoardPosition: "",
    newBoardPosition: "g8"
}

const bR_B: Piece = {
    pieceType: "bR",
    pieceID: "48",
    oldBoardPosition: "",
    newBoardPosition: "h8"
}

let Pieces: Piece[] =
    [wP_a, wP_b, wP_c, wP_d, wP_e, wP_f, wP_g, wP_h,
        wR_B, wN_W, wB_B, wQ, wK, wB_W, wN_B, wR_W,
        bP_a, bP_b, bP_c, bP_d, bP_e, bP_f, bP_g, bP_h,
        bR_W, bN_B, bB_W, bQ, bK, bB_B, bN_W, bR_B]

export default Pieces