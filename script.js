    /* This is the load images function. Everything is inside it  */
    let loadImagesFunction = (event) => {
        console.log(event.target)

        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=behemoth",) 
        .then(response => response.json())
        .then(nature => { 
            console.log(nature.data[0].album.cover_medium)
  
            /* I start by removing the whole row */
            let row1 = document.getElementById("row1")
            row1.remove();

            /* Then I put in the new cards */
            let container1 = document.getElementById("container1");
            let row2 = document.createElement("div") 
            row2.classList.add("row")
            container1.appendChild(row2)
            for (let i = 0; i < nature.data.length; i++) {   
                let newCol = document.createElement("div")
                newCol.classList.add("col-sm-3") 
                newCol.innerHTML = `
                <img src="${nature.data[i].album.cover_big}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <p class="card-text">
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </p>
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small class="text-muted">9 mins</small>
                    </div>
                  </div>             
                `
                row2.appendChild(newCol)
            }


        })
        .catch(err => console.error(err));
            }

    /* This is the function for button 2 */
    let loadImagesFunction2 = (event) => {
        console.log(event.target)

        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica",) 
        .then(response => response.json())
        .then(nature => { 
            console.log(nature.data[0].album.cover_medium)
  
            /* I start by removing the whole row */
            let row3 = document.querySelector(".row")
            row3.remove();

            /* Then I put in the new cards */
            let container1 = document.getElementById("container1");
            let row2 = document.createElement("div") 
            row2.classList.add("row")
            container1.appendChild(row2)
            for (let i = 0; i < nature.data.length; i++) {   
                let newCol = document.createElement("div")
                newCol.classList.add("col-sm-3") 
                newCol.innerHTML = `
                <img src="${nature.data[i].album.cover_big}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <p class="card-text">
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </p>
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small class="text-muted">9 mins</small>
                    </div>
                  </div>             
                `
                row2.appendChild(newCol)
            }


        })
        .catch(err => console.error(err));
    }

 
            
               