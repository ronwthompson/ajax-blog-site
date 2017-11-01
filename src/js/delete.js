function deleteClick(id){
    let data = id.getAttribute('data-iddel')
    axios.delete(`${baseURL}/${data}`)
      .then(result => {
        axios.get(`${baseURL}/`)
        .then(result => {
            container.innerHTML = ''
            loadContent(result)
        })
      })
}