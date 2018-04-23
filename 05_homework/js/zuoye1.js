var navLi = document.querySelectorAll('.btn')
var List = document.querySelectorAll('.list')
var ListI = document.querySelectorAll('.btn i')
var len = navLi.length;
var Listli = document.querySelectorAll('.listli')
var len2 = Listli.length;
var num ;
var num2 = 0;
var num3 = 0;
for(var i=0;i<len;i++){
	navLi[i].x = i;	
	navLi[i].onclick = function (){
		num = this.x;		
		if(num2 != this.x){
			List[num2].classList.remove('list2');
			ListI[num2].classList.remove('i2');
			navLi[num2].classList.remove('btn2');
		}					
		List[num].classList.toggle('list2');
		ListI[num].classList.toggle('i2');
		this.classList.toggle('btn2');
		num2 = this.x;				
	}	
}
for(var i=0;i<len2;i++){
	Listli[i].x = i;
	Listli[i].onclick = function (){
		console.log(1);
		for(var i=0;i<len2;i++){
			if(num != this.x){
				Listli[i].classList.remove('listli2');
				Listli[i].classList.add('listli');
			}					
		}
		this.classList.add('listli2');
		this.classList.remove('listli');
		num = this.x;
	}
}
