async function axiosData() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await axios.get(url);

    console.log(response);

    const data = response.data;
    console.log(data);

    const resultadosDiv = document.getElementById("Axios");
    data.forEach(post => {
      const p = document.createElement("p");
      p.textContent = `ID: ${post.id}, Titulo: ${post.title}`
      resultadosDiv.appendChild(p);
    })
  } catch (error) {
    console.error("Error al obtener datos:", error)
  }
}

document.addEventListener("DOMContentLoaded", axiosData)
