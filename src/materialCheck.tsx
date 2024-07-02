import Pieces from './Pieces'

export function checkMaterial() {
 for (let i = 0; i < Pieces.length; i++) {
    if (
        Pieces[i].captured == true
    ) {
        return Pieces[i]
    }
 }
}