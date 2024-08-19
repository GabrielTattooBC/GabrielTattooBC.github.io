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

    // Function to disable smooth scroll temporarily
    const disableSmoothScroll = () => {
        grid.style.scrollBehavior = "auto";
    };

    // Function to enable smooth scroll back
    const enableSmoothScroll = () => {
        grid.style.scrollBehavior = "smooth";
    };

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
        const maxScrollLeft = (totalImages - numImages) * scrollAmount;

        if (grid.scrollLeft >= maxScrollLeft) {
            disableSmoothScroll();
            grid.scrollLeft = currentIndex * scrollAmount;
            enableSmoothScroll();
        } else if (grid.scrollLeft <= 0) {
            disableSmoothScroll();
            grid.scrollLeft = (totalImages - 2 * numImages) * scrollAmount;
            enableSmoothScroll();
        }

        currentIndex = Math.round(grid.scrollLeft / scrollAmount) % numImages;
        updateIndicators();
    };

    grid.scrollLeft = currentIndex * scrollAmount;

    grid.addEventListener("scroll", scrollHandler);

    updateIndicators();
});