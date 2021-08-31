var table=[];
var dif=2;
var nr=2;
var n=4;
var ans;
var tabletext;
var streak = 0;

generate()
render()

function render(){
	tabletext=document.getElementById("maingame").children;
	console.log("test")
	console.log(tabletext);
	for (let i=0;i<n*n;++i){
		if (table[i]!=-1) {
			tabletext[i].value=table[i];
			tabletext[i].readOnly = true;
			tabletext[i].setAttribute("class","orig");
		}
		else {
			tabletext[i].setAttribute("onchange","checkans()");
		}
	}
	document.getElementById('next').disabled = true;
	document.getElementById('next').style.opacity = '0.5';
	document.getElementById('message').style.top = '-57px';
}

function check(r,c){
	for (let r1=0;r1<n;++r1){
		if (r1==r) continue;
		if (table[r1*n+c]==table[r*n+c]) return false;
	}
	for (let c1=0;c1<n;++c1){
		if (c1==c) continue;
		if (table[r*n+c1]==table[r*n+c]) return false;
	}
	// smal sq
	let r2=r-r%nr;
	let c2=c-c%nr;
	for (let dr=0;dr<nr;++dr){
		for (let dc=0;dc<nr;++dc){
			let rn=r2+dr;
			let cn=c2+dc;
			if (r==rn && c==cn) continue;
			let idx=rn*n+cn;
			if (table[idx]==-1) continue;
			if (table[idx]==table[r*n+c]) return false;
		}
	}
	return true;
}


function solverecu(){
	let ix=-1;
	for (let i=0;i<n*n;++i){
		if (table[i]==-1) {
			ix=i;
			break;
		}
	}
	if (ix==-1) return 1;

	let r=Math.floor(ix/n);
	let c=ix%n;
	let re=0;

	for (let i=1;i<=n;++i){
		table[r*n+c]=i;
		if (!check(r,c)) continue;
		re+=solverecu();
		if (re>1) break;
	}
	table[ix]=-1;
	return re;
}
	
function generate(){
	table=[]
	for (let i=0;i<n*n;++i){
		table.push(-1);
	}
	for (let i=0;i<n*n;++i){
		while (true){
			table[i]=randi(n)+1;
			if (!check(Math.floor(i/n),i%n)) continue;
			if (solverecu()) break;
		}
	}
	
	ans=[];
	table.forEach((i)=>{ans.push(i)});
	
	let cnting=0;
	while (true){
		let hid=randi(n*n);
		if (table[hid]==-1) continue;
		let tmp=table[hid];
		table[hid]=-1;
		if (solverecu()==1) continue;
		table[hid]=tmp;
		cnting+=1;
		if (cnting>dif) break;
	}
}

function checkans(){
	for (let i=0;i<n*n;++i){
		if (tabletext[i].value!=ans[i]) return;
	}
	// alert("Congrats! Solve another problem to increase your streak!");
	document.getElementById('message').style.top = '57px';
	streak += 1;
	document.getElementById('streak').innerHTML = 'Streak: ' + streak;
	document.getElementById('next').disabled = false;
	document.getElementById('next').style.opacity = '1';
}

function nextquest(){
	for(let p = 0; p < 4; p++){
		var c; var r;
		if(p == 0) r = 'a';
		else if(p == 1) r = 'b';
		else if(p == 2) r = 'c';
		else r = 'd';
		for(let q = 0; q < 4; q++){
			if(q == 0) c = '1';
			else if(q == 1) c = '2';
			else if(q == 2) c = '3';
			else c = '4';
			var id = r+c;
			document.getElementById(id).value = '';
			document.getElementById(id).readOnly = false;
			document.getElementById(id).setAttribute("class","");
		}
	}
	generate()
	render()
}

// helper functions
function randi(n){
	return Math.floor(Math.random()*n);
}

var lastScrollTop;
navbar = document.getElementById('header');
window.addEventListener('scroll',function(){
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		if(scrollTop > lastScrollTop){
		navbar.style.opacity='0.7';
		}
		else{
		navbar.style.opacity='1';
		}
	lastScrollTop = scrollTop; //New Position Stored
});

function closeNoti(){
	document.getElementById('welcome').style.display = 'none';
}