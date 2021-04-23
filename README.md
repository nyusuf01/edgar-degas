# edgar-degas


# Project Overview

## Edgar Degas at the MET

One of the largest and finest art museums, The Metropolitan Museum of Art is one of the world’s largest and finest art museums. Divided among 17 curatorial departments, it is home to more than two million works of art spanning 5,000 years of world culture from every part of the globe.

It can be daunting to navigate through its magnificent works, so we decided to turn our focus on one particular French impressionist artist, Edgar Degas. Famous for his pastel drawings and oil paintings, Degas also produced bronze sculptures, prints and drawings. Here, we highlight some of his more important works.

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
- Display image, title, year of work, classification, department to be found in. 
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
| HTML & CSS Structure | H | 2hr | 1 | 1 |
| Pseudocode Javascript | M | 3hrs | 3| 3 |
| Adding clickable buttons & event listeners | H | 3hrs |3 | 3 |
| Add/test axios API call | H | 3hrs | .5 | .5|
| Pulling appropriate data from API | H | 3hrs | 1 | 1|
| JS clear results page before next results show | H | 3hrs | 1 | 1 |
| Incorporating Flexbox | M | 3hr | 2 | 2 |
| Styling CSS | M | 3hrs | 4 | 4 |
| Setting & styling Media Queries in CSS | M | 3hrs | 3 | 3 |
| Styling button | L | 2 hrs | .5 | .5 |
| Setting Background  | L | 2 hrs | .25 | .25 |
| Total | H | 30 hrs | 19.25 | 19.25 |

## Code Snippet
```function removeRender() {
  const removeDiv = document.querySelector('#artwork-info')
  while (removeDiv.lastChild) {
    removeDiv.removeChild(removeDiv.lastChild)
  }
}
```



## Change Log
 
