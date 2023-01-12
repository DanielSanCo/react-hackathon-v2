import Projeto from '../../models/Projeto';
import styles from './style.module.css';
import React, { ChangeEvent, useEffect, useState } from 'react'
import GrupoPi from '../../models/Grupopi';
import { useNavigate, useParams } from 'react-router-dom';
import { busca, buscaId, post, put } from '../../services/service';

const CadastroProjeto = () => {
    let navigate = useNavigate();
    const [grupos, setGrupos] = useState<GrupoPi[]>([]);
    const [value, setValue] = useState('');
    const { id } = useParams<{ id: string }>();

    const [grupo, setGrupo] = useState<GrupoPi>(
        {
            id: 0,
            numeroGrupo: '',
            maisInfos: '',
            turma: undefined,
            projeto: undefined
        })
    const [projeto, setProjeto] = useState<Projeto>({

        id: 0,
        nomeProjeto: '',
        logoProjeto: '',
        linkProjeto: '',
        pitProjeto: '',
        grupoPi: undefined
    })


    useEffect(() => {
        setProjeto({
            ...projeto,
            grupoPi: grupo
        })
    }, [grupo])

    useEffect(() => {
        getGrupos()
        if (id !== undefined) {
            findByIdProjeto(id)
        }
    }, [id])

    async function getGrupos() {
        await busca("/grupos", setGrupos, {

        })
    }

    async function findByIdProjeto(id: string) {
        await buscaId(`projetos/${id}`, setProjeto, {

        })
    }

    function updatedProjeto(e: ChangeEvent<HTMLInputElement>) {

        setProjeto({
            ...projeto,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/projetos`, projeto, setProjeto, {
            })
            alert('projeto atualizado')
        } else {
            post(`/projetos`, projeto, setProjeto, {

            })

            alert('projetos cadastrada')
        }
        back()

    }

    function back() {
        navigate('/home')
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} action="" onSubmit={onSubmit}>

                <div className={styles.formInputArea}>
                    <h2>Cadastrar Projeto</h2>
                    <div className={styles.line}></div>
                    <p>Nome</p>
                    <input value={projeto.nomeProjeto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjeto(e)} name="nomeProjeto" type="text" placeholder='nome do projeto' />
                    <p>Logo</p>
                    <input value={projeto.logoProjeto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjeto(e)} name="logoProjeto" type="text" placeholder='link logo do projeto' />
                    <p>Link</p>
                    <input value={projeto.linkProjeto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjeto(e)} name="linkProjeto" type="text" placeholder='link do projeto' />
                    <p>Pit</p>
                    <input value={projeto.pitProjeto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjeto(e)} name="pitProjeto" type="text" placeholder='pit do projeto' />
                    <p>Grupo</p>
                    <input
                        value={projeto.grupoPi?.id}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjeto(e)}
                        name="grupoPi"
                        type="text"
                        placeholder='grupo do projeto'
                        list="lista"
                    />
                        <datalist id="lista">
                            {grupos.map((item, index) => (
                                <option value={item.id}>{item.id}</option>
                            ))}
                        </datalist>
                </div>
                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}

export default CadastroProjeto;