var nr=2;
var n=4;
var table;
var tabletext;
var ans;
var streak = 0;
var easiness = -1; // less is harder
var board = '';
var nineboard = '<div class="playground" id="maingame"><input id="a1" type="number" max="9" autocomplete="off"><input id="a2" type="number" max="9" autocomplete="off"><input id="a3" type="number" max="9" autocomplete="off"><input id="a4" type="number" max="9" autocomplete="off"><input id="a5" type="number" max="9" autocomplete="off"><input id="a6" type="number" max="9" autocomplete="off"><input id="a7" type="number" max="9" autocomplete="off"><input id="a8" type="number" max="9" autocomplete="off"><input id="a9" type="number" max="9" autocomplete="off">			<input id="b1" type="number" max="9" autocomplete="off"><input id="b2" type="number" max="9" autocomplete="off"><input id="b3" type="number" max="9" autocomplete="off"><input id="b4" type="number" max="9" autocomplete="off"><input id="b5" type="number" max="9" autocomplete="off"><input id="b6" type="number" max="9" autocomplete="off"><input id="b7" type="number" max="9" autocomplete="off"><input id="b8" type="number" max="9" autocomplete="off"><input id="b9" type="number" max="9" autocomplete="off"><input id="c1" type="number" max="9" autocomplete="off"><input id="c2" type="number" max="9" autocomplete="off"><input id="c3" type="number" max="9" autocomplete="off"><input id="c4" type="number" max="9" autocomplete="off"><input id="c5" type="number" max="9" autocomplete="off"><input id="c6" type="number" max="9" autocomplete="off"><input id="c7" type="number" max="9" autocomplete="off"><input id="c8" type="number" max="9" autocomplete="off"><input id="c9" type="number" max="9" autocomplete="off"><input id="d1" type="number" max="9" autocomplete="off"><input id="d2" type="number" max="9" autocomplete="off"><input id="d3" type="number" max="9" autocomplete="off"><input id="d4" type="number" max="9" autocomplete="off"><input id="d5" type="number" max="9" autocomplete="off"><input id="d6" type="number" max="9" autocomplete="off"><input id="d7" type="number" max="9" autocomplete="off"><input id="d8" type="number" max="9" autocomplete="off"><input id="d9" type="number" max="9" autocomplete="off"><input id="e1" type="number" max="9" autocomplete="off"><input id="e2" type="number" max="9" autocomplete="off"><input id="e3" type="number" max="9" autocomplete="off"><input id="e4" type="number" max="9" autocomplete="off"><input id="e5" type="number" max="9" autocomplete="off"><input id="e6" type="number" max="9" autocomplete="off"><input id="e7" type="number" max="9" autocomplete="off"><input id="e8" type="number" max="9" autocomplete="off"><input id="e9" type="number" max="9" autocomplete="off"><input id="f1" type="number" max="9" autocomplete="off"><input id="f2" type="number" max="9" autocomplete="off"><input id="f3" type="number" max="9" autocomplete="off"><input id="f4" type="number" max="9" autocomplete="off"><input id="f5" type="number" max="9" autocomplete="off"><input id="f6" type="number" max="9" autocomplete="off"><input id="f7" type="number" max="9" autocomplete="off"><input id="f8" type="number" max="9" autocomplete="off"><input id="f9" type="number" max="9" autocomplete="off"><input id="g1" type="number" max="9" autocomplete="off"><input id="g2" type="number" max="9" autocomplete="off"><input id="g3" type="number" max="9" autocomplete="off"><input id="g4" type="number" max="9" autocomplete="off"><input id="g5" type="number" max="9" autocomplete="off"><input id="g6" type="number" max="9" autocomplete="off"><input id="g7" type="number" max="9" autocomplete="off"><input id="g8" type="number" max="9" autocomplete="off"><input id="g9" type="number" max="9" autocomplete="off"><input id="h1" type="number" max="9" autocomplete="off"><input id="h2" type="number" max="9" autocomplete="off"><input id="h3" type="number" max="9" autocomplete="off"><input id="h4" type="number" max="9" autocomplete="off"><input id="h5" type="number" max="9" autocomplete="off"><input id="h6" type="number" max="9" autocomplete="off"><input id="h7" type="number" max="9" autocomplete="off"><input id="h8" type="number" max="9" autocomplete="off"><input id="h9" type="number" max="9" autocomplete="off"><input id="i1" type="number" max="9" autocomplete="off"><input id="i2" type="number" max="9" autocomplete="off"><input id="i3" type="number" max="9" autocomplete="off"><input id="i4" type="number" max="9" autocomplete="off"><input id="i5" type="number" max="9" autocomplete="off"><input id="i6" type="number" max="9" autocomplete="off"><input id="i7" type="number" max="9" autocomplete="off"><input id="i8" type="number" max="9" autocomplete="off"><input id="i9" type="number" max="9" autocomplete="off"></div>';
var fourboard = '<div class="playground four" id="maingamefour"><input id="j11" type="number" max="4" autocomplete="off"><input id="j12" type="number" max="4" autocomplete="off"><input id="j13" type="number" max="4" autocomplete="off"><input id="j14" type="number" max="4" autocomplete="off"><input id="k11" type="number" max="4" autocomplete="off"><input id="k12" type="number" max="4" autocomplete="off"><input id="k13" type="number" max="4" autocomplete="off"><input id="k14" type="number" max="4" autocomplete="off"><input id="l11" type="number" max="4" autocomplete="off"><input id="l12" type="number" max="4" autocomplete="off"><input id="l13" type="number" max="4" autocomplete="off"><input id="l14" type="number" max="4" autocomplete="off"><input id="m11" type="number" max="4" autocomplete="off"><input id="m12" type="number" max="4" autocomplete="off"><input id="m13" type="number" max="4" autocomplete="off"><input id="m14" type="number" max="4" autocomplete="off"></div>';

function four(){
	document.getElementById('subcontainer').innerHTML = fourboard;
	nr = 2; n = 4;
	easiness = -1;
	tabletext=document.getElementById('maingamefour').children;
		
	generate()
	render()

}

function nine(){
	document.getElementById('subcontainer').innerHTML = nineboard;
	nr = 3; n = 9;
	easiness = 10;
	tabletext=document.getElementById('maingame').children;

	generate()
	render()

}

function render(){
	for (let i=0;i<n*n;++i){
		if (table[i]!=-1) {
			tabletext[i].value=table[i];
			tabletext[i].readOnly = true;
			tabletext[i].setAttribute("class","orig");
		}
		else {
			tabletext[i].setAttribute("onchange","checkans()");
			tabletext[i].setAttribute("min",1);
		}
		tabletext[i].setAttribute("onclick","highlight(this.value)");
		tabletext[i].setAttribute("oninput","highlight(this.value)");
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
	table=[];
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
	
	remain=[];	// remain cells
	for (let i=0;i<n*n;++i) remain.push(i);
	
	let surviveL=[];
	while (remain.length>0){
		let ridx=randi(remain.length);
		let hid=remain[ridx];
		
		// remove hid from remain
		remain[ridx]=remain[remain.length-1];
		remain.pop();

		let tmp=table[hid]
		table[hid]=-1;
		if (solverecu()!=1) table[hid]=tmp;
		else {
			if (surviveL.length>easiness) continue;
			surviveL.push([hid,tmp]);
		}
	}
	// console.log(surviveL);
	while (surviveL.length>0){
		let p=surviveL.pop();
		table[p[0]]=p[1];
	}
}

function unhighlight(){
	for (let i=0;i<n*n;++i){
		tabletext[i].setAttribute("class",(tabletext[i].readOnly)?"orig":"");
	}
}

function highlight(x){
	unhighlight();
	if (x>=1&&x<=n) {
		for (let i=0;i<n*n;++i){
			if (tabletext[i].value==x){
				tabletext[i].setAttribute("class","highlight");
			}
		}
	}
}

function checkans(){
	for (let i=0;i<n*n;++i){
		if (tabletext[i].value!=ans[i]) return;
	}
	// alert("Congrats! Solve another problem to increase your streak!");
	document.getElementById('message').style.top = '57px';
	streak += 1;
	document.getElementById('streak').innerHTML = 'Streak: <span class="weight-600" id="numb">' + streak + '</span>';
	document.getElementById('next').disabled = false;
	document.getElementById('next').style.opacity = '1';
}

function nextquest(){
	for(let i = 0; i < n*n; ++i){
		tabletext[i].value = '';
		tabletext[i].readOnly = false;
		tabletext[i].setAttribute("class","");
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
