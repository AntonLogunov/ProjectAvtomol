let btnPass = document.querySelectorAll('.password-eye');
let imgeye= document.querySelector('.password-eye-img');
let modal = document.getElementById('Modal');
let btnopen = document.querySelector('.menu__link__orange');
let btnopenprofile = document.querySelector('.edit_user_profile_icon');
let btnclose = document.querySelectorAll('.close');
let authorization = document.querySelector('.authorization');
let createAccount = document.querySelector('.createAccount');
let Alert = document.querySelector('.alert');
let profile = document.querySelector('.modal-profile');
let restore = document.getElementById('restoreaccess');
let restoreAccount = document.querySelector('.restore');
let create = document.getElementById('createanaccount');
let btnRestore = document.getElementById('btnrestore');
let input = document.querySelectorAll('.modal-input');
let tel = document.querySelectorAll('.modal-tel');

var maskOptions = {
  mask: '+{7}(000)000-00-00'
};

if(tel!=null){
tel.forEach(function(t){
	var mask = IMask(t, maskOptions);
})}

if(btnPass!=null){
btnPass.forEach(function (btn){
	btn.onclick=function(){
		btn.classList.toggle('active');
		let eye = btn.firstChild;
		let target = this.getAttribute('data-target'),
		inputPass=document.querySelector(target);
		if(btn.classList.contains('active')){
			inputPass.setAttribute('type','text');
			
			eye.src="src/img/openeye.svg";
		}else{
			inputPass.setAttribute('type','password');

			eye.src="src/img/closedeye.svg";
		}
	}
})}

if(btnopen!=null){
btnopen.onclick = function() {
	modal.style.display = "block";
	authorization.style.display = "block";
	createAccount.style.display = "none";
	restoreAccount.style.display = "none";
	Alert.style.display = "none";
	input.forEach(function(inp){
		inp.value = '';
	})
	eye.forEach(function(e){
		e.src="src/img/openeye.svg";
	})
}}

if(btnopenprofile!=null){
btnopenprofile.onclick=function(){
	modal.style.display = "block";
	profile.style.display = "block";
}}

if(restore!=null){
restore.onclick = function() {
	authorization.style.display = "none";
	createAccount.style.display = "none";
	restoreAccount.style.display = "block";
}}

if(create!=null){
create.onclick = function() {
	authorization.style.display = "none";
	createAccount.style.display = "block";
}}

if(btnRestore!=null){
btnRestore.onclick = function() {
		authorization.style.display = "none";
		createAccount.style.display = "none";
		restoreAccount.style.display = "none";
		Alert.style.display = "block";
}}

if(btnclose!=null){
btnclose.forEach(function(btn){
	btn.onclick=function(){
	modal.style.display = "none";
	}
})}

window.onclick = function(event) {
	if (event.target == modal) {
	  modal.style.display = "none";
	}
  }