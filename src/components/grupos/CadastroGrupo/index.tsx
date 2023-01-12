import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from './style.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import Turma from '../../../models/Turma';
import GrupoPi from '../../../models/Grupopi';
import { busca, buscaId, post, put } from '../../../services/service';


function CadastroGrupo() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [turmas, setTurmas] = useState<Turma[]>([])


    const [turma, setTurma] = useState<Turma>({
            id: 0,
            descricao: '',
            isAtivo: true
    })
    const [grupo, setGrupoPi] = useState<GrupoPi>({
        id: 0,
        numeroGrupo: '',
        maisInfos: '',
        turma: undefined
    })

    useEffect(() => {
        setGrupoPi({
            ...grupo,
            turma: turma
        })
    }, [turma])

    useEffect(() => {
        getTurma()
        if (id !== undefined) {
            findByIdGrupo(id)
        }
    }, [id])

    async function getTurma() {
        await busca("/turmas", setTurmas, {

        })
    }

    async function findByIdGrupo(id: string) {
        await buscaId(`grupos/${id}`, setGrupoPi, {

        })
    }

    function updatedProjeto(e: ChangeEvent<HTMLInputElement>) {

        setGrupoPi({
            ...grupo,
            [e.target.name]: e.target.value,
            turma: turma
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/grupos`, grupo, setGrupoPi, {
            })

            alert('Grupo atualizado com sucesso');
        } else {
            post(`/grupos`, grupo, setGrupoPi, {
            })

            alert('Grupo cadastrado com sucesso');
        }
        back()

    }

    function back() {
        navigate('/')
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} action="" onSubmit={onSubmit}>
                <div className={styles.formInputArea}>
                    <h2>Cadastrar Grupo</h2>
                    <div className={styles.line}></div>
                    <input value={grupo.numeroGrupo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjeto(e)} id="numero" placeholder="número do grupo" name="numeroGrupo" />
                    <input value={grupo.maisInfos} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjeto(e)} id="maisInfos" placeholder="mais informações do grupo" name="maisInfos" />

                    <input
                        onChange={(e) => buscaId(`/turmas/${e.target.value}`, setTurma, {})}
                        name="turma"
                        type="text"
                        placeholder='turma do grupo'
                        list="lista"
                    />
                        <datalist id="lista">
                            {turmas.map((item, index) => (
                                <option value={item.id}>{item.descricao}</option>
                            ))}
                        </datalist>
                
                    </div>
                    <button type="submit" >
                        Cadastrar
                    </button>
            </form>
        </div>
    )
}
export default CadastroGrupo;