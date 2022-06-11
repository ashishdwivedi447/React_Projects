import axios from "axios";
import React, { useEffect, useState } from "react";

const Github = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [parameters, setParameters] = useState({
    query: "masai",
    page: 1,
    perPage: 5,
  });
  const [text, setText] = useState("");
  useEffect(() => {
    getUsers(parameters);
  }, [parameters]);

  const getUsers = ({ query = "masai", page, perPage }) => {
    console.log(1);
    setLoading(true);
    return axios({
      url: "https://api.github.com/search/users",
      params: {
        q: query,
        page: page,
        per_page: perPage,
      },
    })
      .then((res) => {
        console.log(res.data.items);
        setData(res.data.items);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
      });
  };
  console.log(data)
  return (
    <div>
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="username"
        />
        <button>Search</button>
      </div>
      <div>
        <button disabled={parameters.page=1} onClick={()=>setParameters({...parameters,page:parameters.page-1})}>prev</button>
        <button onClick={()=>setParameters({...parameters,page:parameters.page+1})}>next</button>
      </div>
      <div>{data.map((e)=>{
        return (
            <div key={e.id}>
                <h3>{e.login}</h3>
                <img alt={e.login} src={e.avatar_url} width="50px"/>
            </div>
        )
      })}
      </div>
    </div>
  );
};

export default Github;
