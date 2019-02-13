class MyText extends egret.TextField {
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

        console.log("==加载MyText:" + this.name);
	}
}