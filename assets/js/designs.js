const getDesigns = async (limit) => {
    const designsUrl = `https://api.unsplash.com/photos/random?count=${5}&query=interior%20design&client_id=THCDXGKDRPwr9RACevyS_1FL-Jwh44niiSbq1i6yqSc`;

    let designsWithImages = [];

    try {
        while (designsWithImages.length < limit) {
            const response = await fetch(designsUrl);
            const data = await response.json();
            console.log(data);

            for (const design of data) {
                if (design.id) {
                    designsWithImages.push({
                        title: design.alt_description || "Unknown",
                        location: design.location.name || "Unknown",
                        image_url: design.urls.small,
                    });

                    if (designsWithImages.length === limit) {
                        break;
                    }
                }
            }
        }

        return designsWithImages;
    } catch (error) {
        const errorMessage =
            "Service is currently unavailable due to rate limit. Please try again later.";
        updateErrorMessage(errorMessage);
    }
};

const designs = await getDesigns(4);

if (designs) {
    updateDesigns(designs);
}

function updateDesigns(designs) {
    const grid = document.querySelector(".designs__grid");
    grid.innerHTML = "";

    designs.forEach((design) => {
        const template = `
      <div class="designs__work">
        <img src="${design.image_url}" alt="${design.title}" class="designs__img">
        <p class="designs__work-title">${design.title}</p>
        <p class="designs__author">${design.location}</p>
      </div>
    `;

        grid.innerHTML += template;
    });
}

function updateErrorMessage(errorMessage) {
    const errorContainer = document.querySelector(".designs__error-container");
    errorContainer.textContent = errorMessage;
}
