
 const cats = [
    "Porkchop: Ben: catPics/porkchop.jpg",
    "Foley: Gideon: catPics/foley.jpg",
    "Chicken: Eva: catPics/chicken.jpg",
    "Chalupa: Andi: catPics/chalupa.jpg",
    "Lily: Deni: catPics/lily.jpg",
    "Dophi: Josiah: catPics/dophi.jpg",
    "Piper: Olga: catPics/piper.jpg",
    "Fig: Glenn: catPics/fig.jpg",
    "Ava: Glenn: catPics/ava.jpg",
    "Ollie: Lucy: catPics/ollie.jpg",
]; 


const para = document.querySelector("#catInfo");
const input = document.querySelector("input");
const btn = document.querySelector("button");


btn.addEventListener("click", handleSearch);
 document.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        handleSearch();
    }
 });

function handleSearch(){
    const searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();
    para.textContent = "";

    
    for (const cat of cats){
        const splitCat = cat.split(":");
        if (splitCat[0].toLowerCase() === searchName){
            para.textContent = `${splitCat[0]}'s owner is
            ${splitCat[1]}.`;

            if (splitCat[2]){
                const imageElement = document.createElement("img");
                imageElement.src = splitCat[2];
                imageElement.width = 200; 
                imageContainer.innerHTML = "";
                imageContainer.appendChild(imageElement);
                console.log("Image appended:", splitCat[2]);
            }

            return;
        }
    }
        para.textContent = "Cat not found";
    }

