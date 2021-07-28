import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Delete } from "../components/deletePage";
import { Form } from "../components/form";
import { useHistory } from "react-router-dom";

export const Detail = () => {
  const history = useHistory();
  const [todo, setTodo] = useState([]);
  const [updateTodo, setUpdateTodo] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => setTodo(data));
  }, [id]);

  const handleFormChange = (inputValue) => {
    setUpdateTodo(inputValue);
  };

  const handleFormSubmit = () => {
    fetch(`/api/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        detail: updateTodo,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((message) => {
        history.push("/");

      })
  
  };

  return (
    <div>
      <Form
        input={updateTodo}
        onFormChange={handleFormChange}
        onFormSubmit={handleFormSubmit}
      />
       <br/>
      {todo.map((data) => (
        <div key="id">Detail: {data.detail}</div>
      ))}
      <br />
      <Delete id={id} /><p>Fill the above to update</p>
      &nbsp;&nbsp;
      <Link to="/">Go Back to Todo List</Link>
    </div>
  );
};
