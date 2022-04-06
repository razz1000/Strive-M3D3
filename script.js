
        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=behemoth",) 
        .then(response => response.json())
        .then(nature => { 
            console.log(nature.data[0].album.cover_medium)
         
           
              let cards2 = document.getElementById("svg1");
            cards2.remove();
            let div4 = document.getElementById("div4")

            let cards3 = document.createElement("div");
            cards3.innerHTML = `<img src="${nature.data[0].album.cover_medium}" alt="">`
            div4.appendChild(cards3)

            /* 
            cards2.innerHTML = `<svg id="svg1" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="${nature.data[0].album.cover_medium}" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"></svg>`
          */
        
        
        })
         
        .catch(err => console.error(err));


 


    let loadImagesFunction = (event) => {
        console.log(event.target)


         

            for(let i = 0; i < nature.photos.lenght; i++) {

                newSvg = document.createElement("div")
                newSvg.classList("new-div")
                newsvg.innerHTML = `
                <svg
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="${nature.photos[i].src.landscape}"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: Thumbnail"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
                `
                cards2.appendChild(newSvg)

            }

 
            
    }                