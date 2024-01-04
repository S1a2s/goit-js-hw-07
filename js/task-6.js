
 function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, '0')}`;
        }

        const controls = document.getElementById('controls');
        const input = controls.querySelector('input');
        const destroyButton = controls.querySelector('[data-destroy]');
        const createButton = controls.querySelector('[data-create]');
        const boxesContainer = document.getElementById('boxes');

        destroyButton.addEventListener('click', destroyAndCreateBoxes);
        createButton.addEventListener('click', destroyAndCreateBoxes);

        function destroyAndCreateBoxes() {
            boxesContainer.innerHTML = '';
            if (event.target === destroyButton) {
                return;
            }

            const amount = Number(input.value);

            if (amount < 1 || amount > 100 || isNaN(amount)) {
                alert('Please enter a number between 1 and 100.');
                return;
            }

            const boxes = [];

            for (let i = 0; i < amount; i++) {
                const box = document.createElement('div');
                box.classList.add('box');
                box.style.width = `${30 + i * 10}px`;
                box.style.height = `${30 + i * 10}px`;
                box.style.backgroundColor = getRandomHexColor();
                boxes.push(box);
            }

            boxesContainer.append(...boxes);
            input.value = '';
        }