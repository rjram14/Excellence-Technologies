// Question 4
// Let’s see we an api url https://my-json-server.typicode.com/typicode/demo/posts
// Wri

import React, { useEffect, useState } from "react";

const APisCall = () => {
  const [Value, setValue] = useState([{}]);

  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://my-json-server.typicode.com/typicode/demo/posts",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setValue(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div
        style={{
          width: "50%",
          border: "1px solid black",
          color: "black",
          justifyContent: "center",
          padding: "100px",
          display: "flex",
        }}
      >
        {Value.map((val, i) => {
          return (
            <div style={{ padding: "20px", border: "1px solid grey" }}>
              <div>{val.id}</div>
              <div>{val.title}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default APisCall;
