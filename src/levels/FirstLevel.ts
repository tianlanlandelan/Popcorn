class FirstLevel extends egret.DisplayObjectContainer{

    public elementArray:My2dArray ;
    public  constructor() {
		super();
        console.log("==加载第一关==")


        this.show(); 
	}

    public show() :void{
        this.elementArray = this.initElements();
        for(let i = 0 ; i < this.elementArray.rows; i ++){
            for(let j = 0 ; j < this.elementArray.columns; j ++){
                this.addChild(this.elementArray.getValue(i,j));
            }
        }
    }

    public initElements() : My2dArray{
        let my2DArray:My2dArray = new My2dArray();
        my2DArray.initWithRandomNumber(4,4,5);
        let array : Array<Array<number>> = my2DArray.getArray();
        let size :number = 100;
        for(let i = 0 ; i < my2DArray.rows ; i ++){
            let x :number = size * ( i + 1);
            for(let j = 0 ; j < my2DArray.columns; j ++){
                let y :number = size * (j + 1); 
                let element:MyElement = new MyElement(i,j,x,y,array[i][j] + "");
                element.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickElement,this);
                my2DArray.setValue(i,j,element);
            }
        }
        return my2DArray;
    }

    public clickElement(evt: egret.TouchEvent):void{
        let element:MyElement = evt.currentTarget;

        console.log(element.name,element.text);
    }
}