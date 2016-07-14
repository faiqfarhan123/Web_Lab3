function setAttr(id,val){
    var v = 'rotate(' + val + ', 70, 70)';
    document.getElementById(id).setAttribute('transform', v);
};
//if value is less than 10 then appends 0
function setText(id,val){
    if(val < 10){
        val = '0' + val;
    }
    document.getElementById(id).innerHTML = val;
};

function clock(){
    //calculate angle
    var d, h, m, s;
    d = new Date;
    
    h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60) ;
    m = 6 * d.getMinutes();
    s = 6 * d.getSeconds();

    //move hands
    setAttr('hour-hand-isb', h);
    setAttr('minute-hand-isb', m);
    setAttr('second-hand-isb', s);
    setAttr('second-tail-isb', s+180);
    
	setAttr('hour-hand-mum', h+15);
    setAttr('minute-hand-mum', m+180);
    setAttr('second-hand-mum', s);
    setAttr('second-tail-mum', s+180);
	
	setAttr('hour-hand-mos', h-55);
    setAttr('minute-hand-mos', m);
    setAttr('second-hand-mos', s);
    setAttr('second-tail-mos', s+180);
	
    //display time
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
	//if hour is greater than 12 then makes it pm else am
    if(h >= 12){
        setText('suffix-isb', 'PM');
    }else{
        setText('suffix-isb', 'AM');
    }
    if(h != 12){
        h %= 12;
    }
	
	if(h >= 12){
        setText('suffix-mum', 'AM');
    }else{
        setText('suffix-mum', 'PM');
    }
    if(h != 12){
        h %= 12;
    }
	
	if(h >= 12){
        setText('suffix-mos', 'AM');
    }else{
        setText('suffix-mos', 'PM');
    }
    if(h != 12){
        h %= 12;
    }
    setText('second-isb', s);
    setText('minute-isb', m);
    setText('hour-isb', h);
    var v = new Date();
	setText('second-mum', s);
    setText('minute-mum', m+30);
    setText('hour-mum', h);
	
	setText('second-mos', s);
    setText('minute-mos', m);
    setText('hour-mos', h-2);
    //call every second
	
    setTimeout(clock, 1000);
	
};

window.onload=clock;