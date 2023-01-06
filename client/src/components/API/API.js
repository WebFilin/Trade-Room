import server from "../../constants/server";

async function API(query, error) {
  const response = await fetch(server.URL + query);

  if (response.ok) {
    return await response.json();
  } else {
    alert(`${error} ` + response.status);
  }
}

export default API;
