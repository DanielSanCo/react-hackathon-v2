import Turma from "./Turma"
import GrupoPi from "./Grupopi"

interface Projeto {
    id: number
    nomeProjeto: string
    logoProjeto: string
    linkProjeto: string
    pitProjeto: string
    grupoPi?: GrupoPi
    turma?: Turma
}

export default Projeto;