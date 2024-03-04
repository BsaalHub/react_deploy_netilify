import LineItem from "./LineItem";

function ItemList ({ items, handleCheck, handleDelete }){

    return(
        <ul>
            {items.map((item) => (   // () used, instead of {} while using map. HOW?

                <LineItem
                        key={item.id}
                        item={item}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                />

            ))}
        </ul>
    );
}

export default ItemList