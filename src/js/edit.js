function editClick(id){
    let data = id.getAttribute('data-iddel')
    let editing = document.getElementById(data)
    const prevDate = editing.getElementsByTagName('h2')[0].innerHTML
    const prevContent = editing.getElementsByTagName('p')[0].innerHTML
    editing.innerHTML += `
        <input type='text' id='date' placeholder="${prevDate}">
        <input type='text' id='content' placeholder="${prevContent}">
        <button data-iddel="${data}" id='submitEdits' onClick="finishEdit(this)">Submit Edited Post</button>
    `
}

function finishEdit(id){
    let data = id.getAttribute('data-iddel')
    let completedEdits = document.getElementById(data)
    const newDate = completedEdits.getElementsByTagName('input')[0].value
    const newContent = completedEdits.getElementsByTagName('input')[1].value
    axios.put(`${baseURL}/${data}`, { date: newDate, content: newContent })
      .then(result => {
        completedEdits.innerHTML = `
            <h2>${result.data.data.date}</h2>
            <p>${result.data.data.content}</p>
            <button class='delete' data-iddel="${data}" onClick="deleteClick(this)">Delete</button>
            <button class='edit' data-iddel="${data}" onClick="editClick(this)">Edit</button>
        `
      })
}