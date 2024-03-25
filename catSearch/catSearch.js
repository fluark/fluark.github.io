
 const cats = [
    "Porkchop: Ben: catPics/porkchop.jpg",
    "Foley: Gideon",
    "Chicken: Eva",
    "Chalupa: Andi",
    "Lily: Deni",
    "Dophi: Josiah",
    "Piper: Olga",
    "Fig: Glenn",
    "Ava: Glenn",
    "Ollie: Lucy",
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

