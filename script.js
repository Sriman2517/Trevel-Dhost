const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.controls');
const galleryControls = ['Previous', 'Next'];
const galleryItems = document.querySelectorAll('.item');

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery() {
        this.carouselArray.forEach((el, i) => {
            el.classList.remove('item1', 'item2', 'item3', 'item4', 'item5', 
                            'item6', 'item7', 'item8', 'item9', 'item10');
            el.classList.add(`item${i + 1}`);
        });
    }

    setCurrentState(direction) {
        if (direction.classList.contains('controls-Previous')) {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach(control => {
            const button = document.createElement('button');
            button.className = `controls-${control}`;
            button.setAttribute('aria-label', control);
            galleryControlsContainer.appendChild(button);
        });
    }

    useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
exampleCarousel.setControls();
exampleCarousel.useControls();