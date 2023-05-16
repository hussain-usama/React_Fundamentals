import React, { useContext, useCallback, useState, useEffect } from "react";
import { Ctx } from "../../Provider/Provider";
import TodosChild from "./TodosChild/TodosChild";
import axios from "axios";

const apiPromise = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((doc) => resolve(doc))
      .catch((err) => reject(err));
  });
};

const Todos = () => {
  // const getContext=useContext(Ctx)
  // console.log('PARENT RENDER')
  const [increment, setIncrement] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        let promiseAll = await Promise.all([apiPromise("https://jsonplaceholder.typicode.com/posts"),apiPromise("https://hub.dummyapis.com/delay?seconds=1"),]);
        // console.log(promiseAll, "promiseAll");
        callApiLoop();
        callDependentApi();
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  
  /* call apis with loop */
  const callApiLoop = async () => {
    let arrayUrl = ["https://jsonplaceholder.typicode.com/posts","https://jsonplaceholder.typicode.com/posts/1",];

    /* WITH AND WITHOUT FOR LOOP */

    let responseArray = await Promise.all(arrayUrl.map(async (x) => {
        let response = await axios.get(x);
        return response.data;
      }));
    console.log(responseArray,'responseArray')

    let responseArray1 = [];
    for (const element of arrayUrl) {
      let response = await axios.get(element);
      responseArray1.push(response);
    }
    console.log(responseArray1, "responseArray1");
  };

  /* call apis having dependency from previous api */
  const callDependentApi = async () => {
    let arrayUrl = ["https://jsonplaceholder.typicode.com/posts","https://jsonplaceholder.typicode.com/posts/1"];

  };
  return (
    <div>
      <h1>Parent</h1>
      <p>Increment : {increment}</p>
      <button onClick={() => setIncrement(increment + 1)}>+</button>
      <TodosChild />
    </div>
  );
};
export default Todos;
