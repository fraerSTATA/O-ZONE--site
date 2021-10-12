'use strict';
let Daniil;
let counter; 

async function GetCards() {
	let data = await fetch('./db/db.php');
	let meow = await data.json();
	let kekw = document.getElementsByClassName("row no-gutters goods");
	
	
	for (let key in meow){
		if(meow[key]['sale'] === "False")
		{
		kekw[0].insertAdjacentHTML("beforeend",
		
		'<div class="col-12 col-md-6 col-lg-4 col-xl-3">\n' +
		'<div class="card">\n' +
		'<div class="card-img-wrapper"><span class="card-img-top" style="background-image:' + 'url(' + meow[key]['img'] +')"></span></div>\n' +
		'<div class="card-body justify-content-between">\n' +
		'<div class="card-price">' + meow[key]['price'] + '&#8381;</div>\n' +
		'<h5 class="card-title">' + meow[key]['title'] + '</h5>\n' +
		'<button class="btn btn-primary">В корзину</button>\n' +
		'</div>\n' +
		'</div>\n' +
		'</div>\n'
		);
		}
		else{
			kekw[0].insertAdjacentHTML("beforeend",
		
		'<div class="col-12 col-md-6 col-lg-4 col-xl-3">\n' +
		'<div class="card">\n' +
		'<div class="card-sale">&#128293;Hot sales!&#128293;</div>\n' +
		'<div class="card-img-wrapper"><span class="card-img-top" style="background-image:' + 'url(' + meow[key]['img'] +')"></span></div>\n' +
		'<div class="card-body justify-content-between">\n' +
		'<div class="card-price">' + meow[key]['price'] + '&#8381;</div>\n' +
		'<h5 class="card-title">' + meow[key]['title'] + '</h5>\n' +
		'<button class="btn btn-primary">В корзину</button>\n' +
		'</div>\n' +
		'</div>\n' +
		'</div>\n'
		);
		}
	}

	counter = document.querySelector(".counter");
	CardClick();
	CartUpload();
	
	if(localStorage.getItem('cardID') == null)
	{
		localStorage.setItem('cardID',1);
	}
	else{
		if(document.querySelector("#cart-empty").style.display == "none"){
			localStorage.setItem('cardID',1);
			console.log("Корзина чиста");
		}
		else{
			
		}
	}

let datar = await fetch('./db/category.php');

let list = document.getElementsByClassName("catalog-list");
	let jojo = await datar.json();
	for (let key in jojo){
		list[0].insertAdjacentHTML("afterbegin",
		'<li>'+jojo[key]['category']+'</li>'
		);	
	
	}
	let discount = document.querySelector('#discount-checkbox');
	let min = document.querySelector('#min');
	let max = document.querySelector('#max');
	discount.addEventListener('click', filter);
	min.addEventListener('change', filter);
	max.addEventListener('change', filter);

	

	let lol = document.querySelector(".catalog-list");
	let Lis = lol.querySelectorAll("li");
	Lis.forEach((element) =>
	{
		element.addEventListener('click',() => Category(element));
	})
		
		
	
	
	

	
	
}

async function  CardClick(){
	let allItems = document.querySelectorAll(".card");
	console.log(allItems);
	let check = 0;
	allItems.forEach((element) => {
		let addListener = element.querySelector(".btn-primary");
	
		addListener.addEventListener('click',() => Card(element));
	  })
	 
}

async function CartUpload(){
	var kek =  document.querySelector('.cart-wrapper');
	var i = 0;

	
	for(var a in localStorage)
	{
	if(a.includes("card") && a != "cardID")
	{
		i++;
	
		
		var b = JSON.parse(localStorage.getItem(a));
	 let gg = a;
		
		
		kek.insertAdjacentHTML('beforeend',
		'<div class="card" id="' + gg + '" data-category="Игровая приставка">\n'+
        '<div class="card-img-wrapper"><span class="card-img-top" style="background-image:' + 'url(' + b['imge'] +')"></span></div>\n'+
        '<div class="card-body justify-content-between">\n'+
		'<div class="card-price">' +b['price']+ ' ₽</div>\n'+
		'<h5 class="card-title">' +b['title']+ '</h5>\n'+
        ' <button class="btn btn-danger" style="background: rgb(220, 53, 69); border-color: rgb(220, 53, 69);">Удалить из корзины</button>\n'+
        '</div>\n'+
		' </div>'
	  )

	  kek.lastChild.querySelector(".btn").addEventListener("click",() => {
		var bb = document.querySelector('.cart-total').querySelector('span');
		var price = document.getElementById(gg).querySelector('.card-price').textContent.slice(0, -1);
		bb.textContent = parseInt(bb.textContent) -  parseInt(price);	
		  kek.querySelector("#" + gg).remove();
		  localStorage.removeItem(gg);
		  counter.textContent = parseInt(counter.textContent)-1;
		 if(document.querySelector('.cart-total').querySelector('span').textContent == "0")
		 {
			document.getElementById("cart-empty").style.display = "block";
		 }
		 else{
			document.getElementById("cart-empty").style.display  = "none";
		 }
	
	  });

	  var cgh = document.querySelector('.cart-total').querySelector('span');

	cgh.textContent = parseInt(cgh.textContent) +  parseInt(b['price']);

	  counter.textContent = parseInt(counter.textContent)+1;

	}
	}
	if(i == 0)
	{
		document.getElementById("cart-empty").style.display = "block";
	}
	else{
		document.getElementById("cart-empty").style.display  = "none";
	}
	
	
}

async function CardADD(neow){
	var kek =  document.querySelector('.cart-wrapper');

	counter.textContent = parseInt(counter.textContent)+1;
	
		var b = JSON.parse(localStorage.getItem(neow));
		 let gg = neow;
		
		console.log(b);
		kek.insertAdjacentHTML('beforeend',
		'<div class="card" id="' + gg + '" data-category="Игровая приставка">\n'+
        '<div class="card-img-wrapper"><span class="card-img-top" style="background-image:' + 'url(' + b['imge'] +')"></span></div>\n'+
        '<div class="card-body justify-content-between">\n'+
		'<div class="card-price">' +b['price']+ ' ₽</div>\n'+
		'<h5 class="card-title">' +b['title']+ '</h5>\n'+
        ' <button class="btn btn-danger" style="background: rgb(220, 53, 69); border-color: rgb(220, 53, 69);">Удалить из корзины</button>\n'+
        '</div>\n'+
		' </div>'
	  )
	  document.getElementById("cart-empty").style.display = "none";
	  kek.lastChild.querySelector(".btn").addEventListener("click",() => {
		var a = document.querySelector('.cart-total').querySelector('span');
		var price = document.getElementById(gg).querySelector('.card-price').textContent.slice(0, -1);
		a.textContent = parseInt(a.textContent) -  parseInt(price);				
		kek.querySelector("#" + gg).remove();
		localStorage.removeItem(gg);
		counter.textContent = parseInt(counter.textContent)-1;
		if(document.querySelector('.cart-total').querySelector('span').textContent == "0")
		{
		   document.getElementById("cart-empty").style.display = "block";
		}
		else{
		   document.getElementById("cart-empty").style.display  = "none";
		}
  
	});

	
}

//<_------------------------------------------------------------------------------->
async function Card(lal){
	var a = document.querySelector('.cart-total').querySelector('span');
	var price = lal.querySelector('.card-price').textContent.slice(0, -1);
	a.textContent = parseInt(a.textContent) +  parseInt(price);
	var title = lal.querySelector('.card-title').textContent;
	var img =  lal.querySelector('.card-img-top').style.backgroundImage.slice(5, -2);
	
	var c = {
		'price': price,
		'title': title,
		'imge': img,
	 };
	 var smert = localStorage.getItem('cardID');
	 var kekw = "card" + smert;
	 smert = parseInt(smert) + 1;
	 localStorage.setItem('cardID',smert);
	 localStorage.setItem(kekw, JSON.stringify(c));
	 CardADD(kekw);
	
}

//<_------------------------------------------------------------------------------->





async function Category(lel) {
	let kekw = document.getElementsByClassName("row no-gutters goods");
	kekw[0].innerHTML = '';
var meow = "none";
meow = lel.textContent;
Daniil = meow;
console.log(Daniil);
var a =  await fetch('./db/categoryAs.php',{
	method: 'POST',
	body: JSON.stringify(meow)
});
  
let meo = await a.json();


for (let key in meo){
	if(meo[key]['sale'] === "False")
	{
	kekw[0].insertAdjacentHTML("beforeend",
	
	'<div class="col-12 col-md-6 col-lg-4 col-xl-3">\n' +
	'<div class="card">\n' +
	'<div class="card-img-wrapper"><span class="card-img-top" style="background-image:' + 'url(' + meo[key]['img'] +')"></span></div>\n' +
	'<div class="card-body justify-content-between">\n' +
	'<div class="card-price">' + meo[key]['price'] + '&#8381;</div>\n' +
	'<h5 class="card-title">' + meo[key]['title'] + '</h5>\n' +
	'<button class="btn btn-primary">В корзину</button>\n' +
	'</div>\n' +
	'</div>\n' +
	'</div>\n'
	);
	}
	else{
		kekw[0].insertAdjacentHTML("beforeend",
	
	'<div class="col-12 col-md-6 col-lg-4 col-xl-3">\n' +
	'<div class="card">\n' +
	'<div class="card-sale">&#128293;Hot sales!&#128293;</div>\n' +
	'<div class="card-img-wrapper"><span class="card-img-top" style="background-image:' + 'url(' + meo[key]['img'] +')"></span></div>\n' +
	'<div class="card-body justify-content-between">\n' +
	'<div class="card-price">' + meo[key]['price'] + '&#8381;</div>\n' +
	'<h5 class="card-title">' + meo[key]['title'] + '</h5>\n' +
	'<button class="btn btn-primary">В корзину</button>\n' +
	'</div>\n' +
	'</div>\n' +
	'</div>\n'
	);
	}
}
CardClick();
filter();

}
async function DisplayYes(){
	let kekw = await document.getElementsByClassName("catalog");
	
	if(kekw[0].style.display=== 'none')
	{
		kekw[0].style.display = 'block';
	}
	else{
		kekw[0].style.display = 'none';
	}
	
}

async function CartClose(){
	let kekw = await document.querySelector(".cart");
	
	
		kekw.style.display = 'none';

	
}

async function DisplayCart(){
	
	let kekw = await document.querySelector(".cart");
	if(kekw.style.display === 'none')
	{
		kekw.style.display = 'block';
	}
	else
	{
		kekw.style.display = 'none';
	}
	
}


async function SearchCard() {
	//let data = await fetch('./db/search.php');
//	let meow = await data.json();
	let kekw = document.getElementsByClassName("col-12 col-md-6 col-lg-4 col-xl-3");
//	kekw[0].innerHTML = '';
	let kek = document.getElementsByClassName("search-wrapper_input");
	
	// Поиск с условиями
	if(kek[0].value == "")
	{
		for (let key in kekw){
			kekw[key].style.display = "block";
		}

	}
	else{
	///////////////////////
	for (let key in kekw){
		
		var lel = kekw[key].querySelector(".card-title").textContent;
	//let lel = meow[key]['title'];
		if(lel.includes(kek[0].value))
		{
			kekw[key].style.display = "flex";
	}
	else{
		kekw[key].style.display = "none";
	}
					}
	}
	filter();
}



async function CheckDown()
{
	let kekw =  await document.getElementsByClassName("filter-check_checkmark");
	
	if(kekw[0].classList == "filter-check_checkmark")
	{
	
		
		kekw[0].classList = "filter-check_checkmark checked";
	}
	else{
		
		
		kekw[0].classList = "filter-check_checkmark";
	}
	
}


  
	function filter() {
		let discount = document.querySelector('#discount-checkbox');
		var min = document.getElementById('min').value;
		
		var max = document.getElementById('max').value;
		if(discount.checked)
		{
			let items = document.querySelectorAll(".col-xl-3");
			
			items.forEach((element,key) =>{
			
		var item = items[key].querySelectorAll(".card-sale");
		var price = items[key].querySelector(".card-price");
		
		var lel = price.textContent;
		var meow = lel.slice(0, -1);
		if(item.length == 0){
			items[key].style.display = "none";
		}
		else{
			
			
			
		if(min != "" && max == "")
		{
		
			if(  parseInt(meow) > parseInt(min))
			{
				items[key].style.display = "block";
				
			}
			else{
				items[key].style.display = "none";
			}
		}
		else if(min == "" && max != "")
		{
			if( parseInt(meow) < parseInt(max))
			{
				items[key].style.display = "block";
			}
			else{
				items[key].style.display = "none";
			}

		}

		else if(min == "" && max =="")	{
			items[key].style.display = "block";
			
		}

		else{
			if(parseInt(meow) > parseInt(min) && parseInt(meow) < parseInt(max))
				{
				items[key].style.display = "block";
			}
			else{
				items[key].style.display = "none";
			}
		}		
		
		
		}
	});
		//чекед
		}
		else
		{
			let items = document.querySelectorAll(".col-xl-3");
			
			items.forEach((element,key) =>{
		
		var price = items[key].querySelector(".card-price");
		
		var lel = price.textContent;
		var meow = lel.slice(0, -1);
				
		if(min != "" && max == "")
		{
		
			if(  parseInt(meow) > parseInt(min))
			{
				items[key].style.display = "block";
				
			}
			else{
				items[key].style.display = "none";
			}
		}
		else if(min == "" && max != "")
		{
			if( parseInt(meow) < parseInt(max))
			{
				items[key].style.display = "block";
			}
			else{
				items[key].style.display = "none";
			}

		}

		else if(min == "" && max =="")	{
			items[key].style.display = "block";
			
		}

		else{
			if(parseInt(meow) > parseInt(min) && parseInt(meow) < parseInt(max))
				{
				items[key].style.display = "block";
			}
			else{
				items[key].style.display = "none";
			}
		}		
		
		
		
		
		});
		
	}
			
	}
  

 