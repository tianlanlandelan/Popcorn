class MyElement extends egret.TextField {
    public row :number;
    public col :number;

	public canBeClean:boolean = false;
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
	public changeColor():void{
		if(this.textColor == 0xffffff){
			this.textColor = 0x000000;
		}else{
			this.textColor = 0xffffff;
		}
	}
	public changeState():void{
		this.textColor = 0x000000;
		this.canBeClean = true;
	}
	

	public static createNullElement(row:number,col:number):MyElement{
		return new MyElement(row,col,0,0,null);
	}

	public static clone(element:MyElement):MyElement{
		let clone : MyElement = new MyElement(element.row,element.col,element.x,element.y,element.text);
		clone.textColor = element.textColor;
		return clone;
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
	//判断两个元素是否相邻
	public static isAdjoin(a:MyElement,b:MyElement):boolean{

		if(a.row == b.row){
			if(a.col == b.col -1 || a.col == b.col + 1){
				return true;
			}
		}
		if(a.col == b.col){
			if(a.row == b.row -1 || a.row == b.row + 1){
				return true;
			}
		}
		return false;
	}

	public printStr():void{
		console.log("name:",this.name,"x:",this.x,"y:",this.y,"text:",this.text,"row:",this.row,"col:",this.col);
	}
}