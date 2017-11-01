const baseURL = 'https://gentle-island-80741.herokuapp.com'

document.querySelector('#submitContent').addEventListener("click", () => {
  const container = document.querySelector('#status-container')
  const dateInput = document.querySelector('#date').value
  const contentInput = document.querySelector('#content').value

  axios.post(`${baseURL}/`, { date: dateInput, content: contentInput })
    .then(result => {
        container.innerHTML = `
            <p>Post successfully created!</p>
          `
    })
})