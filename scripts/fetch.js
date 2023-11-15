async function fetchData() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
 
    try{
        const response = await fetch(url)
        console.log("Respuesta sin transformar a JSON: " + response)
        const data = await response.json()
 
        const  resultadosDiv = document.getElementById("resultsFetch")
        data.forEach(post => {
            const p = document.createElement("p")
            p.textContent = `ID: ${post.id}, Titulo: ${post.title}`
            resultadosDiv.appendChild(p)
 
        })
    }catch(error){
        console.error("Error al obtener datos:", error)
    }
}
document.addEventListener("DOMContentLoaded", fetchData)