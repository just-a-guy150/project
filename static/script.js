document.querySelector("#add").addEventListener("click", () => {
    document.querySelector(".modal").style.display = "flex";
    document.querySelector("#add").style.display = "none";
});

document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".modal").style.display = "none";
    document.querySelector("#add").style.display = "block";
});

document.querySelector(".add-ad-form").addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("/add", {
        method: "POST",
        body: new FormData(e.target)
    }).then(() => {
        location.reload();
    });
});

// let wrapper = document.querySelector(".wrapper");

// fetch("/ads", {
//     method: "post"

// }).then(async (response) => {
//     let ads = await response.json();
//     wrapper.innerHTML = "";
//     ads.forEach((ad) => {
//         wrapper.innerHTML += `
//             <div class="ad">
//                 <h2>${ad.title}</h2>
//                 <p>${ad.description}</p>
//             </div>
//         `;
//     });
// }) 