document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    let startX = 0;
    let isDragging = false;

    const slider = document.querySelector('.formula__slider');
    const items = document.querySelectorAll('.formula__item');
    const totalItems = items.length;

    function updateSlider() {
        items.forEach((item, index) => {
            const distance = index - currentIndex;
            let newPosition = distance * 50;

            if (distance > totalItems / 2) {
                newPosition -= totalItems * 50;
            } else if (distance < -totalItems / 2) {
                newPosition += totalItems * 50;
            }

            const scale = index === currentIndex ? 1 : 0.8;

            item.style.transform = `translateX(${newPosition}%) scale(${scale})`;
            item.style.zIndex = index === currentIndex ? 2 : 1;

            const isVisible = Math.abs(distance) <= 1 || (index === 0 && currentIndex === totalItems - 1) || (index === totalItems - 1 && currentIndex === 0);
            item.classList.toggle('hidden', !isVisible);
            item.classList.toggle('active', index === currentIndex);

            item.classList.remove('left-slide', 'right-slide');
            if (distance === 1 || (currentIndex === totalItems - 1 && index === 0)) {
                item.classList.add('right-slide');
            } else if (distance === -1 || (currentIndex === 0 && index === totalItems - 1)) {
                item.classList.add('left-slide');
            }

            //Showing blocks
            const winnerBlock = document.querySelector('.winner')
            const chooseBlock = document.querySelector('.choose')
            const closedBlock = document.querySelector('.closed')

            if(item.dataset.block === 'winner' && item.classList.contains('active')){
                winnerBlock.classList.remove('_hidden')
                chooseBlock.classList.add('_hidden')
                closedBlock.classList.add('_hidden')
            }
            if(item.dataset.block === 'choose' && item.classList.contains('active')){
                chooseBlock.classList.remove('_hidden')
                winnerBlock.classList.add('_hidden')
                closedBlock.classList.add('_hidden')
            }
            if(item.dataset.block === 'closed' && item.classList.contains('active')){
                closedBlock.classList.remove('_hidden')
                winnerBlock.classList.add('_hidden')
                chooseBlock.classList.add('_hidden')
            }

        });
    }

    function moveSlider(offset) {
        currentIndex = (currentIndex + offset + totalItems) % totalItems;
        updateSlider();
    }

    function handleStart(event) {
        isDragging = true;
        startX = event.clientX || event.touches[0].clientX;
    }

    function handleMove(event) {
        if (!isDragging) return;

        const currentX = event.clientX || event.touches[0].clientX;
        const diffX = currentX - startX;

        if (Math.abs(diffX) > 50) {
            moveSlider(diffX > 0 ? -1 : 1);
            isDragging = false;
        }
    }

    function handleEnd() {
        isDragging = false;
    }

    const buttonsLeft = document.querySelectorAll('.formula__control-left')
    const buttonsRight = document.querySelectorAll('.formula__control-right')
    buttonsLeft.forEach(btn  => {
        btn.addEventListener('click', () => {
            moveSlider(-1);
        })
    })
    buttonsRight.forEach(btn  => {
        btn.addEventListener('click', () => {
            moveSlider(1);
        })
    })

    slider.addEventListener('mousedown', handleStart);
    slider.addEventListener('touchstart', handleStart);

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', handleMove);

    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchend', handleEnd);

    updateSlider();
});


