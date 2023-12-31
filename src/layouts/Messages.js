import './Messages.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Projeto from './Projeto';
import FormProject from './FormProject';
import axios from 'axios';
import { BiCube } from 'react-icons/bi'
import { BiEdit } from 'react-icons/bi'
import { BiEraser } from 'react-icons/bi'
import { Link, useParams } from 'react-router-dom';

function Messages({ props }) {

    const id = useParams()
    console.log(id)

    const [data, setData] = useState([])



    useEffect(() => {




        axios.get(`http://localhost:5000/categories/`)
            .then(response => {
                console.log('Api dados', response.data)
                setData(response.data)
            })

    }, [])



    return (

        <>


            <section className='container-messages-list'>
                {data.map((items) => {


                    
                    return <ul key={items.id} className="list-group list-messages-positioning">


                        <li className="list-group-item list-messages-style">
                            <h3 className='titulo-list-messages'>{items.nameProject}</h3> <br></br>

                            <section className='container-texto-lista-messages'>
                                <span className='span-messages-style'>
                                    <span className='titulo-span-messages'><BiCube className='icon-orcamento-style'></BiCube> Orçamento:</span>  R$ {items.orcamento}
                                    <br></br>
                                    <span className='titulo-span-messages'><BiCube className='icon-categorias-style'></BiCube> Categoria:</span>   {items.categories}</span>
                            </section>

                            <section className='container-button-messages'>
                                <Link to={`/editar/${items.id}`}> <button type="button" className="btn button-messages-style">
                                    <BiEdit className='icon-button-messages'></BiEdit> Editar</button></Link>

                                <Link><button type="button" className="btn button-messages-style">
                                    <BiEraser className='icon-button-messages'></BiEraser> Deletar</button></Link>
                            </section>
                        </li>


                    </ul>
                })}
            </section>
        </>
    )
}

export default Messages;