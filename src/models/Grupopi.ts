import Turma from "./Turma";
import Projeto from "./Projeto";

interface GrupoPi {
    id: number
    numeroGrupo: string
    maisInfos: string
    turma?: Turma
    projeto?: Projeto
}

export default GrupoPi;