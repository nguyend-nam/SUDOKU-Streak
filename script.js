var nr=3;
var n=9;
var table;
var tabletext;
var ans;
var streak = 0;
var easiness = 3; // less is harder
var classstate=[];

generate()
render()

function render(){
	tabletext=document.getElementById("maingame").children;
	for (let i=0;i<n*n;++i){
		if (table[i]!=-1) {
			tabletext[i].value=table[i];
			tabletext[i].readOnly = true;
			tabletext[i].setAttribute("class","orig");
		}
		else {
			tabletext[i].setAttribute("onchange","processInput(this.value)");
			tabletext[i].setAttribute("min",1);
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
	
	let surviveCnt=easiness*n;
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
			if (surviveCnt<=0) continue;
			--surviveCnt;
			table[hid]=tmp;
		}
	}
}

function processInput(x){
	unhighlight();
	if (x>=1&&x<=n) highlighting(x);
	checkans();
}


function unhighlight(){
	for (let i=0;i<n*n;++i){
		tabletext[i].setAttribute("class",(tabletext[i].readOnly)?"orig":"");
	}
}

function highlighting(x){
	for (let i=0;i<n*n;++i){
		if (tabletext[i].value==x){
			tabletext[i].setAttribute("class","highlight");
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
