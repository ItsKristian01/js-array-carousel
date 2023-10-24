// Variable Declaration
const imgList = ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg", "./img/04.jpg",];
console.log(imgList);

const carouselElem = document.querySelector(".items");
console.log(carouselElem);

let imgString = "";

// Program Logic
for (let i = 0; i < imgList.length; i++) {
    const curImg = imgList[i];
    imgString += `
    <div class="item">
       <img class="slide" src="${curImg}" alt="">
    </div>`;
    
    console.log(imgString);
}

carouselElem.innerHTML += imgString;
















