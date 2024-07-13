console.log('%c HI', 'color: firebrick')

//challenge 1
document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const imgContainer = document.getElementById("dog-image-container");
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imgUrl => {
          const img = document.createElement("img");
          img.src = imgUrl;
          imgContainer.appendChild(img);
        });
      })
      .catch(error => console.error(error));

    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedList = document.getElementById("dog-breeds");

    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(breedUrl => {
          const li = document.createElement("li");
          li.innerHTML = breedUrl;
          breedList.appendChild(li);
        });
      })
      .catch(error => console.error(error));

    breedList.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
          e.target.style.color = "blue";
        }
    });

    const filterSelect = document.getElementById("breed-dropdown");

    filterSelect.addEventListener("change", function() {
    const selectedLetter = filterSelect.value;
    const lists = breedList.getElementsByTagName("li");

    for (let i = 0; i < lists.length; i++) {
      const breed = lists[i].textContent;
      if (selectedLetter === "all" || breed.startsWith(selectedLetter)) {
        lists[i].style.display = "list-item";
      } else {
        lists[i].style.display = "none";
      }
    }
  });
});