import React from "react";
import TodosList from "./ConstructorPattern/TodosList";

function DesignPattern() {
  return (
    <>
      <h1>Patterns</h1>
      <div style={{display:'flex',justifyContent:'space-around'}}>
        <TodosList />
        <TodosList />
      </div>
    </>
  );
}
    
export default DesignPattern;
