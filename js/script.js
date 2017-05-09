/*ADAPTIV HEIGHT HOME SECTION*/
function wbh_adaptive_section(){
	let section = document.getElementById('home');
	let elemWidth = section.clientWidth;
	let elemHeight = elemWidth / 2;

	section.style.height = elemHeight + 'px';
}
function wbh_mobilebtn(){
	let menu = document.getElementById('headermenu');

	if (menu.classList.contains('mobileshow')){
		menu.classList.remove('mobileshow');
	}else{
		menu.classList.add('mobileshow');
	}
}
wbh_adaptive_section();

window.onresize = wbh_adaptive_section;

let btn = document.getElementById('mobilemenu');
btn.onclick = wbh_mobilebtn;


