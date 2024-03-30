import React, { useState } from "react";
import Box from "./components/ui/box/Box";
import BtnIcon from "./components/ui/btn-icon/BtnIcon";
import ListGroup from "./components/ui/list-group/ListGroup";
import Panel from "./components/ui/panel/Panel";
import Counter from "./components/ui/counter/Counter";

function App() {
  const items = [
    {
      text: "Task 1", 
      completed: true
    },
    {
      text: "Task 2",
      completed: true
    },
    {
      text: "Task 3",
      completed: true
    }
  ];

  return (
    <>
      <Box color="green" size={150}>
        <p>hey</p>
      </Box>
      <Box color="red" size={50} />
      <Box></Box>
      <BtnIcon icon="user" text="@username"/>
      <Panel header="Header" title="Title" text="Some text" footer="Footer" mode="danger">
        <p>Lorem holi gilki hasdhaud</p>
      </Panel>
      <ListGroup items={items} />
      <Counter />
    </>
  );
}

export default App;
