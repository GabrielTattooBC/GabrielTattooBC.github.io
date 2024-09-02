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
    validateContainer4Checkboxes();
});

function validateContainer4Checkboxes() {
    var container4Checkboxes = document.querySelectorAll('.section-contact__container-4 .section-contact__checkbox-container-input');

    function updateRequiredAttributes() {
        if (isAnyCheckboxChecked()) {
            container4Checkboxes.forEach(function (checkbox) {
                checkbox.removeAttribute('required');
            });
        } else {
            container4Checkboxes.forEach(function (checkbox) {
                checkbox.setAttribute('required', 'required');
            });
        }
    }

    function isAnyCheckboxChecked() {
        return Array.from(container4Checkboxes).some(function (checkbox) {
            return checkbox.checked;
        });
    }

    updateRequiredAttributes();

    container4Checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', updateRequiredAttributes);
    });

    const nameInput = document.getElementById('form-name');
    const numberInput = document.getElementById('form-number');
    const emailSubject = document.getElementById('form-email-subject');

    function AdjustEmailSubject()
    {
        emailSubject.value = nameInput.value + " - " +  numberInput.value;
    }

    numberInput.addEventListener('input', function () {
        AdjustEmailSubject();
    });

    nameInput.addEventListener('input', function () {
        AdjustEmailSubject();
    });

}


