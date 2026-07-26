const images = document.querySelectorAll(".gallery-img");

const modal = document.getElementById("lightbox");
const modalImg = document.getElementById("modal-img");
const title = document.getElementById("modal-title");
const description = document.getElementById("modal-descr");
const refs = document.getElementById("modal-refs");
const modalVideo = document.getElementById("modal-video");

const closeBtn = document.getElementById("close-btn");

function closeModal() {
    modal.style.display = "none";
    modalVideo.src = "";

    images.forEach(image => {
        image.style.border = ".75rem solid var(--secondary-color)";
    });
}

images.forEach(image => {

    image.addEventListener("click", () => {

        modal.style.display = "flex";
        image.style.border = ".75rem solid var(--primary-color)";

        // modalImg.src = image.src;
        // modalImg.alt = image.alt;
        modalVideo.src = `https://www.youtube.com/embed/${image.dataset.video}`;
        
        title.textContent = image.dataset.title;
        description.textContent = image.dataset.descr;
        
        // clear old references just in case I guess
        refs.innerHTML = "";
        
        // Get references from data attribute
        const referenceList = JSON.parse(image.dataset.refs);
        
        // Create the bullet list
        const ul = document.createElement("ul");
        
        referenceList.forEach(reference => {
            const li = document.createElement("li");
            const link = document.createElement("a");
            
            if (reference.url) {
                link.textContent = reference.name;
                link.href = reference.url;
                link.target = "_blank";
        
                li.appendChild(link);
            } else {
                li.textContent = reference.name;
            }
            ul.appendChild(li);
        });
        
        refs.appendChild(ul);
    });
    
});

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});