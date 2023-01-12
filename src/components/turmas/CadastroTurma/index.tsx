import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from './style.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import Turma from '../../../models/Turma';
import GrupoPi from '../../../models/Grupopi';
import { busca, buscaId, post, put } from '../../../services/service';


function CadastroTurma() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [turma, setTurma] = useState<Turma>({
        id: 0,
        descricao: '',
        isAtivo: true
    })

    useEffect(() => {
        if (id !== undefined) {
            findByIdTurma(id)
        }
    }, [id])

    async function findByIdTurma(id: string) {
        await buscaId(`turmas/${id}`, setTurma, {

        })
    }

    function updatedTurma(e: ChangeEvent<HTMLInputElement>) {

        setTurma({
            ...turma,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/turmas`, turma, setTurma, {
            })

            alert('Turma atualizada com sucesso');
        } else {
            post(`/turmas`, turma, setTurma, {
            })

            alert('Turma cadastrada com sucesso');
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
                    <h2>Cadastrar Turma</h2>
                    <div className={styles.line}></div>
                    <input value={turma.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTurma(e)} id="descricao" placeholder="numero da turma" name="descricao" />
                    {/*<input value={turma.isAtivo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTurma(e)} id="isAtivo" placeholder="turma Ativa? (true ou false)" name="isAtivo" />*/}

                </div>
                <button type="submit" >
                    Cadastrar
                </button>
            </form>
        </div>
    )
}
export default CadastroTurma;