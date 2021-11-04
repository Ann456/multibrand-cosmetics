
import products from './data/data.js';
console.log(products);

// // <div>
// //     <p class="filters__button">1000 грн</p>
// //     <button class="filters__button filters__button-center" type="button">Добавить в корзину</button>
// // </div> 
// const productsContainerEl = document.querySelector('.js-products');

// const makeProductCard = ({price })=>{
//     const productEl = document.createElement('div');
//         productEl.classList.add('project-border');

//     const priceEl = document.createElement('p');
//         priceEl.classList.add('filters__button');
//         priceEl.textContent = `${price}`;

//     const buttonEl = document.createElement('button');
//         buttonEl.classList.add('filters__button');
//         buttonEl.textContent = "Добавить в корзину";

//     productEl.append(priceEl, buttonEl);
//     return productEl;
// }
// //console.log(makeProductCard(products[1]));
// const elements = products.map(makeProductCard);
// console.log(elements);
// productsContainerEl.append(...elements);


// //     <li class="submenu-link">Состав
// //         <p class="submenu"> ingridients </p>
// //     </li>
// const productsContainerEl2 = document.querySelector('.js-products');

// const makeProductCard2 = ({ingridients })=>{
//     const productEl2 = document.createElement('li');
//         productEl2.classList.add('submenu-link');
//         productEl2.textContent = "Состав";
    
//     const ingridientsEl = document.createElement('p');
//         ingridientsEl.classList.add('submenu');
//         ingridientsEl.textContent = `${ingridients}`;

//     productEl2.append(ingridientsEl);
//     return productEl2;
// }
// //console.log(makeProductCard(products[1]));
// const elements2 = products.map(makeProductCard2);
// console.log(elements2);
// productsContainerEl2.append(...elements2);


// //     <li class="submenu-link">Применение
// //         <p class="submenu"> use </p>
// //     </li>
// const productsContainerEl3 = document.querySelector('.js-products');

// const makeProductCard3 = ({use})=>{
//     const productEl3 = document.createElement('li');
//         productEl3.classList.add('submenu-link');
//         productEl3.textContent = "Применение";
    
//     const useEl = document.createElement('p');
//         useEl.classList.add('submenu');
//         useEl.textContent = `${use}`;

//     productEl3.append(useEl);
//     return productEl3;
// }
// //console.log(makeProductCard(products[1]));
// const elements3 = products.map(makeProductCard3);
// console.log(elements3);
// productsContainerEl3.append(...elements3);

// const productsContainerEl2 = document.querySelector('.js-products');


// const productsContainerEl = document.querySelector('.js-products');

// const elements = products.map(option => {
//     const image = document.querySelector(".project__img");
//     image.src = option.src;
//     return image;
// });
// console.log(elements);
// productsContainerEl.append(...elements);

const productsContainerEl = document.querySelector('.js-products');
const createCard = products.map(product =>
        `<li class = "project__item">
            <img class="project__img" src="${product.url}" alt="${product.name}" width="350px"/>
            <div class="project__border project-border">
                <div>
                    <p class="filters__button">${product.price}</p>
                    <button class="filters__button" type="button">Добавить в корзину</button>
                </div>
                <h2 class="project-border__title">${product.name}</h2>
                <ul class="submenu-box">
                    <li class="submenu-link">Состав
                        <p class="submenu">${product.ingridients}</p>
                    </li>
                    <li class="submenu-link">Применение
                        <p class="submenu">${product.use}</p>
                    </li>
                </ul>
                <p class="project-border__text">${product.description}</p>
            </div>
        </li>`
);
productsContainerEl.insertAdjacentHTML('beforebegin', createCard);