        var arr1 = [[0,0],[50,50],[100,100],[150,50],[200,0]];
		var arr2 = [[200,0],[150,50],[100,100],[150,150],[200,200]];
		var arr3 = [[200,200],[150,150],[100,100],[50,150],[0,200]];
		var arr4 = [[0,200],[50,150],[100,100],[50,50],[0,0]];	
		var arr5 = [arr1,arr2,arr3,arr4];
		var btn = document.querySelector('.btn');
		var a = 0;
		var b = true;
		var Screen = document.querySelector('.screen');
		btn.onclick = function (){	
			if(b){
				for(var j=0;j<5;j++){
					Screen.innerHTML += `<div class="square"></div>`
					var square = document.querySelector('.screen div:nth-child('+(j+1)+')');
					square.innerHTML = j+1;
					square.style.left = arr5[a][j][0]+'px';
					square.style.top = arr5[a][j][1]+'px';
				}
				b = false;
				btn.innerHTML = '变换'
			}
			if(a>=4){
				a=0;
			}
			for(var i=0;i<5;i++){
				var square = document.querySelector('.screen div:nth-child('+(i+1)+')');
				square.innerHTML = i+1;
				square.style.left = arr5[a][i][0]+'px';
				square.style.top = arr5[a][i][1]+'px';
			}
			a++;
		}		