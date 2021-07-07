import React from "react";
import {Link} from "react-router-dom"

export const Card = ({ listOfTodos }) => {
  return (
    <>
      {listOfTodos.map(todo => {
          // console.log(todo)
        return (
            
          <ul key={todo.id}>
              

            <li><Link to={`${todo.id}`}>{todo.detail}</Link></li>
          </ul>
        );
      })}
    </>
  );
};
