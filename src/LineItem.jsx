import { FaTrashAlt } from "react-icons/fa"  // after installing react icons from npmjs.com through terminal

function LineItem ({item, handleCheck, handleDelete}) {

    return(

        <li className="item" key={item.id}>

            <input type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheck(item.id)} />

            <label
                    style={(item.checked) ? {textDecoration: "line-through"} : null}

                    onDoubleClick={() => handleCheck(item.id)}

                >{item.item}

            </label>

            <FaTrashAlt 
                        role="button"
                        onClick={() => handleDelete(item.id)} />
        </li>
    );
}

export default LineItem