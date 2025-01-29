import React from "react";
// Conmponente de Presentación -> UI
import Item from "./Item";
import FlexContainer from "./FlexContainer";
function ItemList(props) {
  return (
    <div>
      <h2>{props.titulo}</h2>
      <hr />
      <FlexContainer>
        {props.products.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            text={item.category}
            img={item.image}
          />
        ))}
      </FlexContainer>
    </div>
  );
}

export default ItemList;