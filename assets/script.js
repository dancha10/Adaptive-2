function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
	if(ibg[i].querySelector('img')){
		ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}

ibg();

// Header Burger
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
if (burger) {
	burger.addEventListener('click', (icon) => {
		document.body.classList.toggle('_lock');
		burger.classList.toggle('_active');
		nav.classList.toggle('_active');
	})
}

// Links
const pages = document.querySelectorAll('.header__link[data-goto]');
if (pages.length > 0) {
	pages.forEach(page => {
		page.addEventListener("click", onClickMenu);
	});

	function onClickMenu(element) {
		const page = element.target;
		if (page.dataset.goto && document.querySelector(page.dataset.goto)) {
			const gotoBlock = document.querySelector(page.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
				
				if (burger.classList.contains('_active')) {
					document.body.classList.remove('_lock');
					burger.classList.remove('_active');
					nav.classList.remove('_active');
				}

				window.scrollTo({
					top: gotoBlockValue,
					behavior: 'smooth'
				});
				element.preventDefault();
		}
	}
}
