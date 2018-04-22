var Screen = document.querySelector('.screen');
var arrUp = [0,50,100,150,200];
var arrUpDown = [0,50,100,50,0];
for(var j=0;j<5;j++){
					Screen.innerHTML += `<div class="square"></div>`;
					var square = document.querySelector('.screen div:nth-child('+(j+1)+')');
					square.innerHTML = j+1;
					square.style.left = 'arrUp[j]';
					square.style.top = 'arrUpDown[j]';
				}
