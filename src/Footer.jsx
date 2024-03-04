function Footer ({length}) {


    return(
        <footer>

            <p>{length === 0 ? "Empty List." : <p>{length} List {length === 1 ? "item" : "items"}</p>}
            </p>
            
            
        </footer>
    );
}

export default Footer