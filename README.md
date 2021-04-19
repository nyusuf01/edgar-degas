# edgar-degas


# Project Overview

## Edgar Degas at the MET

A focus on Edgar Degas at the MET.

## Project Description

Creating a virtual gallery that highlights a number of artworks by Edgar Degas from the vast collection presented at the MET.

## API and Data Sample
Artwork title : "Edouard Manet, seated, Holding his hat"
```{
    "objectID": 333813,
    "isHighlight": true,
    "accessionNumber": "19.51.7",
    "accessionYear": "1919",
    "isPublicDomain": true,
    "primaryImage": "https://images.metmuseum.org/CRDImages/dp/original/DP805813.jpg",
    "primaryImageSmall": "https://images.metmuseum.org/CRDImages/dp/web-large/DP805813.jpg",
    "additionalImages": [
        "https://images.metmuseum.org/CRDImages/dp/original/dp19.51.7.R.jpg",
        "https://images.metmuseum.org/CRDImages/dp/original/DT640.jpg",
        "https://images.metmuseum.org/CRDImages/dp/original/19.51.7.jpg"
    ],
```
## Wireframes

<img width="1025" alt="wireframe" src="https://user-images.githubusercontent.com/80069382/115244810-4d0a9100-a0f2-11eb-8898-aa6423c44afa.png">

 

#### MVP 

- Allows users to select art piece from drop down menu
- Display image, title, Bio ( year of birth until year of death ) 
- Delete previously rendered content upon new search


#### PostMVP  
- Create a tab or slideshow gallery for the enlisted artwork.
- Create image module when user clicks on image
- Randomly choose "art of the week"

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|April 19| Prompt / Wireframes / Priority Matrix / Timeframes 
|April 20| HTML / Pseudocode / Add axios API call
|April 21| Pulling appropriate date from API / second testing
|April 22| JS clear results / CSS
|April 23| Presentation


## Priority Matrix

<img width="605" alt="matrix" src="https://user-images.githubusercontent.com/80069382/115229023-7f12f780-a0e0-11eb-8cdc-ed040a2f61cf.png">


## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML & CSS Structure | H | 2hr | .5hrs |  |
| Pseudocode Javascript | M | 3hrs | 1hr |  |
| Adding clickable buttons & event listeners | H | 3hrs | 1hr |  |
| Add/test axios API call | H | 3hrs | 1hr |  |
| Pulling appropriate data from API | H | 3hrs | 2hrs | |
| JS clear results page before next results show | H | 3hrs | .5hrs |  |
| Incorporating Flexbox | M | 3hr | 3hrs |  |
| Styling CSS | M | 3hrs | 4hrs |  |
| Setting & styling Media Queries in CSS | M | 3hrs | 6hrs |  |
| Styling buttons | L | 2 hrs | 2hrs |  |
| Setting Background  | L | 2 hrs | 1hr |  |
| Total | H | 30 hrs | 22hrs |  |

## Code Snippet
```
const getEdgarDegas = async () => {
  try {
    const response = await axios.get(url) 
    const select = document.querySelector('#artwork')
```





## Change Log
 
