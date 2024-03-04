// we are drilling from App -> Content -> ItemList -> LineItem.(parent-child). We are making ItemList and LineItem components, it makes our code organized, reusable.

import ItemList from "./ItemList"

const Content = ({ items, handleCheck, handleDelete}) => {

  
  return (

    <main>

      {items.length ? ( 

          <ItemList
                  items={items}
                  handleCheck={handleCheck}
                  handleDelete={handleDelete}
          />

      ) : (<p style={{color: "tomato", fontWeight: "bold"}}>Your list is Empty.</p>) }
             {/*  we need extra {} while changing styles directly through inline. One to say it's expression, another to Style. */}

    </main>
  )
}

export default Content