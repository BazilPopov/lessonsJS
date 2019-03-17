class option {
	constructor( height = 400, width = 200, bg = 'red', fontSize = 30, textAlign = 'right'){
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	divcreat() {
		var div = document.createElement('div');
		document.body.appendChild(div);
		div.textContent = 'HELLO!!!';
		div.style.height = this.height + 'px';
		div.style.width = this.width + 'px';
		div.style.fontSize = this.fontSize + 'px';
		div.style.backgroundColor = this.bg;
		div.style.textAlign = this.textAlign;
	}

}

var cl = new option(100,100,'green',10,'center'),
	dv = new option();


	cl.divcreat();
	dv.divcreat();