import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";

const ListUser = () => {
  const [list, setList] = useState([]);
  const [pageVal, setpageVal] = useState([]);
  useEffect(() => {
    var config = {
      method: "get",
      url: "https://reqres.in/api/users?page=2",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setList(response.data.data);
        setpageVal(response.data);
        console.log("list", list.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div
      style={{
        background: "rgba(255, 0, 0, 0.2)",
        width: "60% ",
        height: "90%",
        border: "1px solid black",
        marginLeft: 300,
        marginRight: 100,

        padding: 20,
        display: "flex",
      }}
    >
      <div
        style={{
          padding: "10px",
          textAlign: "initial",
          border: "1px solid black",
          width: " 20%",
        }}
      >
        <div style={{ padding: "40px" }}>Page : {pageVal.page}</div>
        <div style={{ padding: "40px" }}>Per Page : {pageVal.per_page}</div>
        <div style={{ padding: "40px" }}>Total : {pageVal.total}</div>
        <div style={{ padding: "40px" }}>
          Total Page : {pageVal.total_pages}
        </div>
      </div>
      <div
        style={{
          width: "80%",
          color: "black",
          width: " 50%",
          textAlign: "initial",
          marginLeft: "8%",
        }}
      >
        {list.map((val, i) => {
          return (
            <div
              style={{
                padding: "20px",
                border: "1px solid grey",
                display: "flex",
              }}
            >
              <div>
                <div>
                  Name : {val.first_name} <span>{val.last_name}</span>
                </div>

                <div>Eamil Id : {val.email}</div>
              </div>
              <div className="flex-grow-1" />
              <div style={{ justifyContent: "right", marginLeft: "30%" }}>
                <Avatar alt="Remy Sharp" src={val.avatar} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ListUser;
