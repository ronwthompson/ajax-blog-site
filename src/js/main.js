const baseURL = 'http://localhost:3000'
const container = document.querySelector('#get-all-container')

document.addEventListener("DOMContentLoaded", () => {
  axios.get(`${baseURL}/`)
    .then(result => {
        loadContent(result)
    })
})

function loadContent(content){
    for (let i = content.data.data.length-1; i >= 0; i--){
        let date = JSON.stringify(content.data.data[i].date)
        let contentToInsert = JSON.stringify(content.data.data[i].content)
        container.innerHTML += `
            <div id="${content.data.data[i].id}" class="post">
            <h2>${date}</h2>
            <p>${contentToInsert}</p>
            <button class='delete' data-iddel="${content.data.data[i].id}" onClick="deleteClick(this)">Delete</button>
            <button class='edit' data-iddel="${content.data.data[i].id}" onClick="editClick(this)">Edit</button>
            </div>
          `
    }
}