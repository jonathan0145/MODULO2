import { useState } from 'react';
import '../App.css';


export default function  Estados1(props){

    const [input, setInput]= useState("default") // por parametro se le pasa el valor

    function changeInput(){
        setInput("ya no soy default")
    }

    return (
        <div className="componente-image">
            <h1>esto es un estado hijo</h1>
            <h1>{props.props}</h1>
            <h6>{input}</h6>
            <button onClick={changeInput}>change input</button>
        </div>
    )
}

/*
    State
    useState es para el estado

    ciclo de vida
    useEffect es para el ciclo de vida
    se llaman hooks
*/

/* simular idea al modo del state de class component
    const [state, setState] = useState({
        aqui va todo lo del stado
    })
*/

/*
    componentmount = useEffect(()=>{ se monta o modifica

    },[]) en el array se pone el que quierop que me escuche

    componenUpdate = useEffect(()=>{

    })

    componentWillUnmount = useEffect(())=>{
            return
        }
    )
*/