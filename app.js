const artArray = [438817, 436121, 436173, 359362,
  196439, 333813, 438821, 436964,
  436944, 437835, 435962, 435882,
  435868, 437153, 437654, 438815,
  339751]


  

    // Add HTML connect all files
    // Completed

    //dropdown menu
    const getOptions = async (value) => {

    
      try {
        console.log(artArray)
        // for (let i = 0; i < artArray.length; i++) {
      
        artArray.forEach(async (art) => {
          let response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${art}?=&=`)
          console.log(response)
          setOptions(response.data)
          renderArt(response.data)
        }) 
        
 
          // let artList = Object.keys(response.data.title)
          // setOptions(artList)
          // return artList
        // }
      }
      
      catch (error) {
        console.error(error)
      }
    }
  

  getOptions()
  

  // Create the form option tags
function setOptions(list) {
    console.log(list)
    const selectTag = document.querySelector('#select-artwork')
  if (list === undefined) {
      return null
    } else {
      
    
      const optionTag = document.createElement('option')
      optionTag.textContent = list.title
      optionTag.value = list.title
      selectTag.append(optionTag)
    
    // return list
  }
}

function renderArt(art) {
  const artTitle = document.createElement('h3')
  artTitle.innerText = art.title
  document.querySelector(`#artwork-info`).append(artTitle)

  const imageForArt = document.createElement('img')
  imageForArt.src = art.primaryImageSmall
  document.querySelector('#artwork-info').append(imageForArt)

  const artClassification = document.createElement('h4')
  artClassification.innerText = 'Classification: ' + art.objectName
  document.querySelector('#artwork-info').append(artClassification)

  const artDepartment = document.createElement('h4')
  artDepartment.innerText = 'Found in: The ' + art.department + ' department.'
  document.querySelector('#artwork-info').append(artDepartment)

}

  // Get option tag value

  function getValue(e) {
    e.preventDefault()
    const optionValue = document.querySelector('#select-artwork').value
    getOptions(optionValue)
    // getArtImage(optionValue)
    // return optionValue
  }

  // Form Eventhandler
  const form = document.querySelector('#select-artwork')
  form.addEventListener("submit", getValue)

  // API request for art image
  // getArtImage https://collectionapi.metmuseum.org/public/collection/v1/objects/${artArray[i]}?=&=&primaryImage
    
  // async function getArtImage(artValue) {
  
  //   try {
    
  
  //     const imageResponse = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artArray[i]}?=&=&primaryImage`)
  //     const imageURL = imageResponse.data.primaryImage
  //     appendImage(imageURL)
  //     return imageURL
  //   }
  
  //   catch (error) {
  //     console.error(error)
  //   }
  // }



  // Create dynamic image tag and append to DOM
   
  // function appendImage(imageSrc) {
  //   removeImage()
  //   const imageDiv = document.querySelector('#art-image')
  //   const img = document.createElement('img')
  //   img.src = imageSrc
  //   imageDiv.append(img)
  // }




  // Remove previous art image
 
  // function removeImage() {
  //   const removeImageDiv = document.querySelector('#art-image')
  //   while (removeImageDiv.lastChild) {
  //     removeImageDiv.removeChild(removeImageDiv.lastChild)
  //   }
  // }

