'use strict';

// filter checkboxes

function toggleCheckbox() {
  const filterCheckboxed = document.querySelectorAll('.filter-check_checkbox');

  filterCheckboxed.forEach((el) => {
    el.addEventListener('change', function () {
      if (this.checked) {
        this.nextElementSibling.classList.add('checked');
      } else {
        this.nextElementSibling.classList.remove('checked');
      }
    });
  });
}


// filters & search

function actionPage() {
  const cards = document.querySelectorAll('.goods .card'),
    discountCheckbox = document.querySelector('#discount-checkbox'),
    goods = document.querySelector('.goods'),
    minPrice = document.querySelector('#min'),
    maxPrice = document.querySelector('#max'),
    searchInput = document.querySelector('.search-wrapper_input'),
    searchBtn = document.querySelector('.search-btn');

  minPrice.addEventListener('change', filter);
  maxPrice.addEventListener('change', filter);
  discountCheckbox.addEventListener('click', filter);
  searchBtn.addEventListener('click', filter);
  const watchEnter = [minPrice, maxPrice, searchInput];
  watchEnter.forEach((el) => {
    el.addEventListener('keyup', (e) => {
      if (e.which === 13 || e.keyCode === 13) {
        filter();
      }
    });
  });

  function filter() {
    const searchText = new RegExp(searchInput.value.trim(), 'i');

    cards.forEach((el) => {
      const cardPrice = el.querySelector('.card-price');
      const price = parseFloat(cardPrice.textContent);
      const discount = el.querySelector('.card-sale');
      const title = el.querySelector('.card-title');

      if (
        (minPrice.value && price < minPrice.value) ||
        (maxPrice.value && price > maxPrice.value) ||
        (discountCheckbox.checked && !discount) ||
        !searchText.test(title.textContent)
      ) {
        el.parentNode.remove();
      } else {
        goods.appendChild(el.parentNode);
      }
    });
  }
}


// cart

function toggleCart() {
  const btnOpenCart = document.querySelector('#cart'),
    modalCart = document.querySelector('.cart'),
    btnCloseCart = document.querySelector('.cart-close');

  btnOpenCart.addEventListener('click', () => {
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });

  btnCloseCart.addEventListener('click', () => {
    modalCart.style.display = '';
    document.body.style.overflow = '';
  });
}


// work with card

function updateCart() {
  const cards = document.querySelectorAll('.goods .card'),
    cartWrapper = document.querySelector('.cart-wrapper'),
    cartEmpty = document.querySelector('#cart-empty'),
    countGoods = document.querySelector('.counter'),
    cardPrice = document.querySelectorAll('.card-price'),
    cardTotal = document.querySelector('.cart-total span');

  cards.forEach((card) => {
    const btnAddToCart = card.querySelector('.btn-primary');
    btnAddToCart.addEventListener('click', () => {
      const cardClone = card.cloneNode(true);
      cartWrapper.appendChild(cardClone);
      updateData();

      const btnRemoveCart = cardClone.querySelector('.btn');
      btnRemoveCart.classList.remove('btn-primary');
      btnRemoveCart.classList.add('btn-danger');
      btnRemoveCart.style.cssText = 'background: #dc3545; border-color: #dc3545';
      btnRemoveCart.textContent = 'Удалить из корзины';
      btnRemoveCart.addEventListener('click', function () {
        this.closest('.card').remove();
        updateData();
      });
    });
  });

  function updateData() {
    const cardsCart = cartWrapper.querySelectorAll('.card'),
      cardPrice = cartWrapper.querySelectorAll('.card-price');
    let sum = 0;

    countGoods.textContent = cardsCart.length;

    cardPrice.forEach((el) => {
      let price = parseFloat(el.textContent);
      sum += price;
    });
    cardTotal.textContent = sum;

    if (cardsCart.length !== 0) {
      cartEmpty.remove();
    } else {
      cartWrapper.appendChild(cartEmpty);
    }
  }
}


// data

function getdata() {
  const goodsWrapper = document.querySelector('.goods');

  return fetch('./db/db.json')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Данные не были получены, ошибка: ${response.status}`);
      }
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.warn(err);
      goodsWrapper.innerHTML = '<div class="col-12 text-danger" style="font-size: 30px">Упс! Что-то пошло не так</div>';
    });
}


// add cards to page

function renderCards(data) {
  const goodsWrapper = document.querySelector('.goods');
  data.goods.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'col-12 col-md-6 col-lg-4 col-xl-3';
    card.innerHTML = `
      <div class="card" data-category="${item.category}">
        ${item.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
        <div class="card-img-wrapper">
          <span class="card-img-top"
            style="background-image: url('${item.img}')"></span>
        </div>
        <div class="card-body justify-content-between">
          <div class="card-price${item.sale ? ' text-danger': ''}">${item.price} ₽</div>
          <h5 class="card-title">${item.title}</h5>
          <button class="btn btn-primary">В корзину</button>
        </div>
      </div>
    `;
    goodsWrapper.appendChild(card);
  });
}


// render catalog

function renderCatalog() {
  const cards = document.querySelectorAll('.goods .card'),
    catalogWrapper = document.querySelector('.catalog'),
    catalogList = document.querySelector('.catalog-list'),
    catalogBtn = document.querySelector('.catalog-button'),
    categories = new Set();
  
  cards.forEach((el) => {
    categories.add(el.dataset.category)
  });
  
  categories.forEach((el) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = el;
    catalogList.appendChild(listItem);
  });

  catalogBtn.addEventListener('click', (e) => {
    if (catalogWrapper.style.display) {
      catalogWrapper.style.display = '';
    } else {
      catalogWrapper.style.display = 'block';
    }
    if (e.target.tagName === 'LI') {
      cards.forEach((el) => {
        if (el.dataset.category !== e.target.textContent) {
          el.parentNode.style.display = 'none';
        } else {
          el.parentNode.style.display = '';
        }
      });
    }
  });
}


getdata().then((data)=> {
  renderCards(data);
  toggleCheckbox();
  toggleCart();
  updateCart();
  actionPage();
  renderCatalog();
});
