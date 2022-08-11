document.querySelector('#btn-search-icon').addEventListener('click', () => {
    const xhr = new XMLHttpRequest()
    const value = document.querySelector('#search-input').value

    console.log(value)

    let url = "https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09"
    
    xhr.open('GET', url)

    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)
            for(let i=0; i < response.length; i++) {
                if(response[i].albumId == value){
                    let output = ``
                    for(let j=0; j < 50; j++){
                        console.log(j)
                        output += `
                            <div style="width: 23%; margin: 1%;">
                                <img style="width: 100%;" src=${response[j].url} />
                                <h4>${response[j].title}</h4>
                            </div>
                        `
                    }
                    document.querySelector('#videos').innerHTML = output
                    break
                }
            }
        }
    }

    xhr.send()
})