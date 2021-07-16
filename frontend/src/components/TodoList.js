import React, { useState, useEffect } from "react";
import { Card } from "../components/card";
import { Form } from "../components/form";

export const TodoPage = () => {
  const [todo, setTodo] = useState([]);
  const [addTodo, setAddTodo] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setTodo(data));
  }, []);

  const handleFormChange = (inputValue) => {
    setAddTodo(inputValue);
  };

  const handleFormSubmit = () => {
    fetch("/api/todocreate", {
      method: "POST",
      body: JSON.stringify({
        detail: addTodo,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((message) => {
        console.log(message);
        setAddTodo("");
        getUpdate();
      });
  };

  const getUpdate = () => {
    fetch("/api")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setTodo(data));
  };

  return (
    <>
      <Form
        input={addTodo}
        onFormChange={handleFormChange}
        onFormSubmit={handleFormSubmit}
      />
      <Card listOfTodos={todo} />
    </>
  );
};
