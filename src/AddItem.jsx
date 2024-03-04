import {FaPlus} from "react-icons/fa";
import { useRef } from "react";

function AddItem ({ newItem, setNewItem, handleSubmit }) {

    const inputRef = useRef();  // for focusing back to input after clicking add button.

    return(
        <form className="addForm" onSubmit={handleSubmit}>

            <label htmlFor="addItem">  {/* // in jsx we use htmlFor instead of for */}
                Add Item </label>
            
            <input 
                    autoFocus
                    ref={inputRef}  // for focusing back to input after clicking add button.
                    id="addItem"
                    type="text"
                    placeholder="Add Item"
                    required 
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}/>

            <button type="submit"
                    aria-label="Add Item"   /*  this use - instead of camelcase. */
                    onClick={() => inputRef.current.focus()}  /* for focusing back to input after clicking add button. */
            > 
                         
                <FaPlus/>
            </button>

        </form>
    );
}
export default AddItem