class MyElement extends egret.TextField {
    public row :number;
    public col :number;
	/**
	 * 文字提示
	 */
	public constructor(row:number,col:number,x:number, y:number, value:string) {
		super();
		this.x = x;
		this.y = y;
		this.textColor = 0xffffff;
		this.size = 72;
		this.fontFamily = "KaiTi";
		this.text = value;
        this.name = row + "-" + col;
        this.row = row;
        this.col = col;

        this.touchEnabled = true;

        console.log("==加载MyText:" , this.name,this.x,this.y,this.text);
	}
	public static createNullElement(row:number,col:number):MyElement{
		return new MyElement(row,col,0,0,null);
	}

	public static clone(element:MyElement):MyElement{
		return new MyElement(element.row,element.col,element.x,element.y,element.text);
	}

	public static swapText(a:MyElement,b:MyElement):Array<MyElement>{
		let a1 :MyElement = MyElement.clone(a);
		let b1 :MyElement = MyElement.clone(b);

		a1.text = b.text;
		b1.text = a.text;

		let array:Array<MyElement> = new Array<MyElement>(2);
		array[0] = a1;
		array[1] = b1;

		return array;

	}

	public printStr():void{
		console.log("name:",this.name,"x:",this.x,"y:",this.y,"text:",this.text,"row:",this.row,"col:",this.col);
	}
}