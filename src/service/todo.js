import axios from "axios";

async function findAll() {
  const {data, status} = await axios.get("http://localhost:3000/todos");
  return {
    status, data
  };
}

export { findAll };
