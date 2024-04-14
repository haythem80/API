import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Userlist from "./Components/Userlist";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(list)
  // const getUsers = () =>
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => setList(data))
  //     .then(setLoading(false))
  //     .catch((error) => console.log(error));
  const getUsers=async()=>{
    try {
      const res=await axios.get("https://jsonplaceholder.typicode.com/users")
      setList(res.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <Userlist users={list} loading={loading} />
    </div>
  );
}

export default App;
