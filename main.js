document.addEventListener("DOMContentLoaded", () => {
    const updateIndicatorsForGrid = (grid, indicators) => {
        const images = Array.from(grid.children);
        const numImages = images.length;

        const updateIndicators = () => {
            const scrollLeft = grid.scrollLeft;
            const viewportWidth = grid.clientWidth;
            
            let currentIndex = Math.round(scrollLeft / viewportWidth);

            // Limitar o índice ao número de imagens
            if (currentIndex >= numImages) {
                currentIndex = numImages - 1;
            }

            indicators.forEach((indicator, index) => {
                if (index === currentIndex) {
                    indicator.classList.add("active");
                } else {
                    indicator.classList.remove("active");
                }
            });
        };

        grid.addEventListener("scroll", updateIndicators);

        // Inicializa os indicadores
        updateIndicators();
    };

    // Seleciona os grids e os indicadores correspondentes
    const studioGrid = document.querySelector(".section-studio__grid");
    const studioIndicators = document.querySelectorAll(".section-studio__indicator");

    const portfolioGrid = document.querySelector(".section-portfolio__grid");
    const portfolioIndicators = document.querySelectorAll(".section-portfolio__indicator");

    // Atualiza os indicadores para cada grid
    updateIndicatorsForGrid(studioGrid, studioIndicators);
    updateIndicatorsForGrid(portfolioGrid, portfolioIndicators);
});
