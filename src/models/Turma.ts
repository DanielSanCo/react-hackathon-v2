import GrupoPi from "./Grupopi"

interface Turma {
    id: number
    descricao: string
    isAtivo: boolean
    grupoPi?: GrupoPi
}

export default Turma;