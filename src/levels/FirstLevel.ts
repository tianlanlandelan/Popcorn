class FirstLevel extends egret.DisplayObjectContainer{

    //元素数组
    public elementArray:My2dArray ;
    //元素最大值
    public elementMaxValue :number = 5;
    //元素行数
    public elementRows :number = 9;
    //元素列数
    public elementCols :number = 9;
    //元素大小
    public elementSize :number = 100;

    //第一个点击的元素
    public clickedElementA :MyElement = null;

    //第二个点击的元素
    public clickedElementB :MyElement = null;


    public  constructor() {
		super();
        console.log("==加载第一关==")


        this.show(); 
	}

    public show() :void{
        this.elementArray = this.initElements();
        this.loadElementArray();

        this.checkClean();
    }

    public reloadElementArray():void{
        this.removeElementArray();
        this.loadElementArray();
    }
    /**
     * 加载元素数组
     */
    public loadElementArray():void{
        for(let i = 0 ; i < this.elementArray.rows; i ++){
            for(let j = 0 ; j < this.elementArray.columns; j ++){
                let element = this.elementArray.getValue(i,j);
                if(element != null && element.text != null){
                    element.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickElement,this);
                    this.addChild(element);
                }
            }
        }
    }
    /**
     * 移除元素数组
     */
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
            let y :number = this.elementSize * (my2DArray.rows - i);
            for(let j = 0 ; j < my2DArray.columns; j ++){
                let x :number = this.elementSize * (j + 1); 
                let element:MyElement = new MyElement(i,j,x,y,array[i][j] + "");
                my2DArray.setValue(i,j,element);
            }
        }
        return my2DArray;
    }


    public elementChangeState(cloneElement:MyElement):void{
        cloneElement.changeColor();
        this.elementArray.setValue(cloneElement.row,cloneElement.col,cloneElement);
        this.reloadElementArray();
        this.clickedElementA = cloneElement;
    }

    /**
     * 判断两次点击的元素是否相邻，如果相邻，进行处理
     * 如果不相邻，重置
     */
    public clickElement(evt: egret.TouchEvent):void{
        let element:MyElement = evt.currentTarget;
        console.log(element.name,element.text,element.row,element.col);
        let cloneElement:MyElement = MyElement.clone(this.elementArray.getValue(element.row,element.col));
        //没有点击过元素
        if(this.clickedElementA == null){
            this.elementChangeState(cloneElement);

        //点击过一个元素    
        }else{
            this.clickedElementB = cloneElement;
            //如果相邻，尝试交换，看是否能消除元素
            if(MyElement.isAdjoin(this.clickedElementA,this.clickedElementB)){

            //如果不相邻，清空已点击的其他元素,将该元素设置为第一次点击的元素
            }else{
                let cloneA = MyElement.clone(this.clickedElementA);
                cloneA.changeColor();
                this.elementArray.setValue(cloneA.row,cloneA.col,cloneA);
                this.reloadElementArray();

                this.elementChangeState(cloneElement);
                this.clickedElementB = null;
            }
        }


        // this.removeElementAndMoveDown(element.row,element.col);
    }

    /**
     * 移除一个元素，同时该元素上一行同列的数据下移
     */
    public removeElementAndMoveDown(row:number,col:number):void{
        this.removeElementArray();

        for(let i = row; i < this.elementArray.rows - 1; i ++){
            let array: Array<MyElement> = MyElement.swapText(this.elementArray.getValue(i + 1 , col),this.elementArray.getValue(i , col));
            this.elementArray.setValue(i + 1,col,array[0]);
            this.elementArray.setValue(i,col,array[1]);
        }
        this.elementArray.setValue(this.elementArray.rows - 1,col,MyElement.createNullElement(this.elementArray.rows - 1,col));

        this.loadElementArray();
    }

    public checkClean():void{
        let rows:number = this.elementArray.rows;
        let cols:number = this.elementArray.columns;
        let elements:My2dArray = this.elementArray;
        for(let i = 0 ; i < rows - 3 ; i ++){
            for(let j = 0 ; j < cols; j ++){
                if(elements.getValue(i,j).text == elements.getValue(i + 1,j).text  && elements.getValue(i,j).text == elements.getValue(i + 2,j).text){
                    elements.getValue(i,j).changeState();
                    elements.getValue(i + 1,j).changeState();
                    elements.getValue(i + 2,j).changeState();
                    this.reloadElementArray();

                }
            }
        }
        for(let i = 0 ; i < rows ; i ++){
            for(let j = 0 ; j < cols - 3; j ++){
                if(elements.getValue(i,j).text == elements.getValue(i,j + 1).text  && elements.getValue(i,j).text == elements.getValue(i,j + 2).text){
                    elements.getValue(i,j).changeState();
                    elements.getValue(i,j + 1).changeState();
                    elements.getValue(i,j + 2).changeState();
                    this.reloadElementArray();

                }
            }
        }
        
    }


}