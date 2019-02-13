class FirstLevel extends egret.DisplayObjectContainer{

    //元素数组
    public elementArray:My2dArray ;
    //元素最大值
    public elementMaxValue :number = 5;
    //元素行数
    public elementRows :number = 4;
    //元素列数
    public elementCols :number = 4;
    //元素大小
    public elementSize :number = 100;
    public  constructor() {
		super();
        console.log("==加载第一关==")


        this.show(); 
	}

    public show() :void{
        this.elementArray = this.initElements();
        this.loadElementArray();
    }
    public loadElementArray():void{
        for(let i = 0 ; i < this.elementArray.rows; i ++){
            for(let j = 0 ; j < this.elementArray.columns; j ++){
                let element = this.elementArray.getValue(i,j);
                if(element != null){
                    let el  = this.getChildByName(element.name);
                    if(el != null){
                        this.removeChild(el);
                    }
                    this.addChild(element);
                }
            }
        }
    }

    public removeElementArray():void{
        for(let i = 0 ; i < this.elementArray.rows; i ++){
            for(let j = 0 ; j < this.elementArray.columns; j ++){
                let element = this.elementArray.getValue(i,j);
                if(element != null){
                    let el  = this.getChildByName(element.name);
                    if(el != null){
                        this.removeChild(el);
                    }
                }
            }
        }
    }

    /**
     * 初始化元素
     * 把可移动的元素、障碍物、空白区都看作数组中的一个元素
     * TODO 添加障碍物和空白区
     */
    public initElements() : My2dArray{
        let my2DArray:My2dArray = new My2dArray();
        my2DArray.initWithRandomNumber(this.elementRows,this.elementCols,this.elementMaxValue);
        let array : Array<Array<any>> = my2DArray.getArray();
        for(let i = 0 ; i < my2DArray.rows ; i ++){
            let x :number = this.elementSize * ( i + 1);
            for(let j = 0 ; j < my2DArray.columns; j ++){
                let y :number = this.elementSize * (j + 1); 
                let element:MyElement = new MyElement(i,j,x,y,array[i][j] + "");
                element.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickElement,this);
                my2DArray.setValue(i,j,element);
            }
        }
        return my2DArray;
    }

    public clickElement(evt: egret.TouchEvent):void{
        let element:MyElement = evt.currentTarget;
        console.log(element.name,element.text,element.row,element.col);
        this.removeElementArray();

        this.elementArray.setValue(element.row,element.col,null);
        this.loadElementArray();

    }


}