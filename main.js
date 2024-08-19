document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".section-studio__grid");
    const indicators = document.querySelectorAll(".indicator");
    const images = Array.from(grid.children);
    const numImages = images.length;

    // Clone images for infinite scroll effect
    images.forEach(image => {
        const cloneBefore = image.cloneNode(true);
        const cloneAfter = image.cloneNode(true);
        grid.insertBefore(cloneBefore, grid.firstChild);
        grid.appendChild(cloneAfter);
    });

    const totalImages = grid.children.length;
    const scrollAmount = grid.clientWidth;

    let currentIndex = numImages;

    grid.scrollLeft = currentIndex * scrollAmount;

    const updateIndicators = () => {
        indicators.forEach((indicator, index) => {
            if (index === currentIndex % numImages) {
                indicator.classList.add("active");
            } else {
                indicator.classList.remove("active");
            }
        });
    };

    const scrollHandler = () => {
        if (grid.scrollLeft >= (totalImages - numImages) * scrollAmount) {
            grid.scrollLeft = currentIndex * scrollAmount;
        } else if (grid.scrollLeft <= 0) {
            grid.scrollLeft = (totalImages - 2 * numImages) * scrollAmount;
        }

        currentIndex = Math.round(grid.scrollLeft / scrollAmount) % numImages;
        updateIndicators();
    };

    grid.addEventListener("scroll", scrollHandler);

    updateIndicators();
});