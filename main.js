const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', togglemobileMenu);
menuCarritoIcon.addEventListener('click', togglecarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() {

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
   }

    desktopMenu.classList.toggle('inactive');
}


function togglemobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

function togglecarritoAside() {
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 

   if(!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
   }

   const isProductDetailClosed = productDetailContainer.classList.contains('inactive'); 

   if(!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
   }

   shoppingCartContainer.classList.toggle('inactive');
}
function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive')
}
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')

}

const productList = [];

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/819805/pexels-photo-819805.jpeg?cs=srgb&dl=pexels-nikita-khandelwal-819805.jpg&fm=jpg',
});

productList.push({
    name: 'super bike',
    price: 120,
    image: "https://images.pexels.com/photos/819805/pexels-photo-819805.jpeg?cs=srgb&dl=pexels-nikita-khandelwal-819805.jpg&fm=jpg",
});
productList.push({
    name: 'Super moto',
    price: 120,
    image: "https://images.pexels.com/photos/819805/pexels-photo-819805.jpeg?cs=srgb&dl=pexels-nikita-khandelwal-819805.jpg&fm=jpg",
});

           /*  <div class="product-card">
                <img src="https://images.pexels.com/photos/819805/pexels-photo-819805.jpeg?cs=srgb&     dl=pexels-nikita-khandelwal-819805.jpg&fm=jpg" alt="">
                    <div class="product-info">
                        <div>
                            <p>$120,00</p>
                            <p>Bike</p>
                        </div> 
                        <figure>
                            <img src="/icons/bt_add_to_cart.svg" alt="">
                        </figure>               
                    </div>
                
            </div>  */

for ( product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);


    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

        
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    
    
    cardsContainer.appendChild(productCard);
}

function renderProducts(arr) {
    for ( product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        productInfoDiv = document.createElement('div');
    
        productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', '/icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
    
        productCard.appendChild(productInfo);
        productCard.appendChild(img);
    
        cardsContainer.appendChild(productCard);
    }
}