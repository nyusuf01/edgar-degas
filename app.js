// getting the data
const artistIdArray = async () => {
  try {
    const url = 'https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=degas'
    const response = await axios.get(url)
  } catch (error) {
    console.error(error)
  }
}
artistIdArray()

// form option tags
function createOptionTags(dataArr) {

const selectTag = document.querySelector('select')
dataArr.forEach((item) => {
  let optionTag = document.createElement('option')
  optionTag.id = item
  optionTag.textContent = item
  selectTag.append(optionTag)
})
}

// Get option tag value
function getFormValue(e) {
e.preventDefault()
const optionValue = document.querySelector('select').value
getArtwork(optionValue)
}

// Create event handler
const form = document.querySelector('form')
form.addEventListener('submit', getFormValue)

// API request for artwork
async function getArtwork(inputValue) {
try {
  const artURL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${inputValue}`
  const artResponse = await axios.get(artURL)
  renderArt(artResponse.data)
} catch (error) {
  console.error(error)
}
}

// Create dynamic tag and append to DOM
function renderArt(art) {
removeRender()
const artTitle = document.createElement('h3')
artTitle.innerText = art.title
document.querySelector(`#artwork-info`).append(artTitle)

const imageForArt = document.createElement('img')
imageForArt.src = art.primaryImageSmall
document.querySelector('#artwork-info').append(imageForArt)

const artDate = document.createElement('h5')
artDate.innerText = 'Date: ' + art.objectDate
document.querySelector('#artwork-info').append(artDate)

const artClassification = document.createElement('h5')
artClassification.innerText = 'Classification: ' + art.objectName
document.querySelector('#artwork-info').append(artClassification)

const artMedium = document.createElement('h5')
artMedium.innerText = 'Medium: ' + art.medium
document.querySelector('#artwork-info').append(artMedium)

const artDimensions = document.createElement('h5')
artDimensions.innerText = 'Dimensions: ' + art.dimensions
document.querySelector('#artwork-info').append(artDimensions)

const artDepartment = document.createElement('h5')
artDepartment.innerText = 'Found in: The ' + art.department + ' department.'
document.querySelector('#artwork-info').append(artDepartment)

}

// Remove previous 
function removeRender() {
const removeDiv = document.querySelector('#artwork-info')
while (removeDiv.lastChild) {
  removeDiv.removeChild(removeDiv.lastChild)
}
}
