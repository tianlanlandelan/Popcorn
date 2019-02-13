class FirstLevel extends egret.DisplayObjectContainer{

    public  constructor() {
		super();
        console.log("==加载第一关==")


        this.show(); 
	}

    public show() :void{
        let my2DArray:My2DArray = new My2DArray();
        my2DArray.initRandom(4,4,5);
        let array : Array<Array<number>> = my2DArray.getArray();
        let size :number = 100;
        for(let i = 0 ; i < array.length ; i ++){
            let x :number = size * ( i + 1);
            for(let j = 0 ; j < array[i].length ; j ++){
                let y :number = size * (j + 1); 

                let textfield = new MyText(i,j,x,y,array[i][j] + "");
                this.addChild(textfield);
            }
        }
        /*
        test
        */
        my2DArray.print();
    }
}