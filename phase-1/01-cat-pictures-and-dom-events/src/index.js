// here is the array of data you'll be using
const data = [
  { name: 'Hopeful Cat', image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
  { name: 'Cleocatra', image: 'https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg' },
  { name: 'Stately Cat', image: 'https://www.alleycat.org/wp-content/uploads/2021/02/344x361_FoundACat.jpg' },
  { name: 'Teacup Cat', image: 'https://image.posterlounge.com/img/products/500000/498253/498253_poster_l.jpg' },
  { name: 'Unicatacorn', image: 'https://fatcatart.com/wp-content/gallery/medieval-art/Lady-and-unicorn-cat-sight-w.jpg' },
  { name: 'Darth Catter', image: 'https://preview.redd.it/yi7kjfjxbx941.jpg?auto=webp&s=2fd1a4a0aa41c7ac765a3de340fb942f18fd3a10' },
  { name: 'Bionicat', image: 'https://cdn.shopify.com/s/files/1/0055/1826/2358/products/Elephant_Robotics_Marscat_White_grande.jpg?v=1646031053' },
  { name: 'Catburger', image: 'https://m.media-amazon.com/images/I/61iHacH4O1L._AC_SX425_.jpg' },
  { name: 'Grumpy Cat', image: 'https://cdn.cnn.com/cnnnext/dam/assets/190517103414-01-grumpy-cat-file-restricted.jpg' }
]

// add your code here!


const catButton = document.getElementById("add-random-cat-button"); 

catButton.addEventListener("click", function() {
  const catDiv = document.createElement("div");
  catDiv.className = "cat-image"
  // accessing data index by using math floor, math random
  const num = Math.floor(Math.random() * 9);
  // create image and its attributes
  const catImg = document.createElement("img");
  catImg.src = data[num].image; 
  catImg.alt = data[num].name;
  // create the h2 element which will display cat's Name from data.name
  const h2 = document.createElement("h2");
  h2.textContent = data[num].name;
  // create Remove button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove"
  deleteButton.addEventListener("click", function() {
    catDiv.remove();
  })
  //appending elements into catDiv
  catDiv.append(h2, catImg, deleteButton);
  //appending catDiv into existing
  const catContainer = document.getElementById("images-container");
  catContainer.append(catDiv);

})

//Button to remove all cats 

const removeAllCats = document.getElementById("remove-all-cats");

removeAllCats.addEventListener("click", function(){
  const toDelete = document.querySelectorAll(".cat-image");
  //const deletionArray = Array.from(toDelete);
  toDelete.forEach(meow => {
    meow.remove();
  });


const catForm = document.getElementById("new-kitty");
catForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const catDiv = document.createElement("div");
  catDiv.className = "cat-image"
  console.log(catDiv)
  // create image and its attributes
  const catImg = document.createElement("img");
  const inputName = document.getElementById("kitty-name")
  const inputURL = document.getElementById("new-kitty-URL")
  catImg.src = inputURL.value
  /atImg.alt = inputName.value
  console.log(inputURL, inputName);
  //create the h2 element which will display cat's Name from data.name
  const h2 = document.createElement("h2");
  h2.textContent = inputName.value
  // create Remove button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove"
  deleteButton.addEventListener("click", function() {
    catDiv.remove();
  })
  //appending elements into catDiv
  catDiv.append(h2, catImg, deleteButton);
  //appending catDiv into existing
  const catContainer = document.getElementById("images-container");
  catContainer.append(catDiv);

})
})