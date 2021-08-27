import react, { useState } from "react";


const TodoList = () => {
    const [Tarea, SetTarea] = useState("");
    const [Lista, SetLista] = useState([]);


    const handleChange = (evento) => {
        SetTarea(evento.target.value)
        
    }

    const addTarea = (evento) => {
        evento.preventDefault();
        const tempLista= Lista;
        tempLista.push(Tarea)
        SetLista([...tempLista])
        console.log(Lista)
    }

    const remove = (index) => {
        const tempRemove = Lista;
        tempRemove.splice(index,1)
        SetLista([...tempRemove])
    }

    return (

        <div className="constainer">
            <form className="row g-3" onSubmit={addTarea}>


                <div>
                    <h1>"TODO LIST!"</h1>
                </div>

                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"></span>
                    <input type="text" className="form-control" placeholder="Ingrese la tarea" aria-label="Username" aria-describedby="addon-wrapping" onChange={handleChange} value={Tarea} />
                </div>

                <div>
                    <button type="submit" className="btn btn-primary"   >Add</button>
                </div>

                <ul className="list-group">
                {Lista.map((lis,index) => <li key={index}>{lis} <span onClick={() => remove(index)}> X </span> </li>)}
                
                </ul>
            </form>
            
        </div>

    )
}



export default TodoList;











