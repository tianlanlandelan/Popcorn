/**
 * @author 杨松恺
 * @date 2018-12-05 15:45:08
 * 定义二维数组，提供相关操作
 */
class My2dArray{
    private my2DArray : Array<Array<any>> =  new Array<Array<any>>();
    public rows :number;
    public columns :number;

    /**
     * 初始化数组
     * @param rows      行数
     * @param columns   列数
     * @param value     初始值
     */
    public init(rows:number,columns:number,value:any){
        this.rows = rows;
        this.columns = columns;
        this.initRows(rows);
        this.initColumns(columns,value);
    }

    /**
     * 随机生成一个二维数组
     * @param rows      行数
     * @param columns   列数
     * @param value     数组值的范围
     */
    public initWithRandomNumber(rows:number,columns:number,value:number):void{
        this.init(rows,columns,0);
        for(let i = 0 ; i < this.rows ; i ++){
            for(let j = 0 ; j < this.columns; j ++){
                this.setValue(i,j,Math.floor(Math.random() * value));
            }
        }

    }

    /**
     * 随机生成一个二维数组
     * @param rows      行数
     * @param columns   列数
     * @param min     数组值的最小值
     * @param max     数组值的最大值
     */
    public initWithRandom2Number(rows:number,columns:number,min:number,max:number):void{
        this.init(rows,columns,0);
        for(let i = 0 ; i < this.rows ; i ++){
            for(let j = 0 ; j < this.columns; j ++){
                this.setValue(i,j,Math.floor(Math.random() * (max - min) + min));
            }
        }

    }

    /**
     * 取数组中的值
     */
    public getValue(rows:number,columns:number):any{
        if(rows < 0 || columns < 0 || rows >= this.rows || columns >= this.columns){
            return null;
        }
        return this.my2DArray[rows][columns];
    }
    /**
     * 为数组赋值
     */
    public setValue(rows:number,columns:number,value:any):void{
        if(rows < 0 || columns < 0 || rows >= this.rows || columns >= this.columns){
            return ;
        }
        this.my2DArray[rows][columns] = value;
    }

    /**
     * 移除一个元素，同时该元素上一行同列的数据下移
     */
    // public removeElementAndMoveDown(row:number,col:number):void{
    //     this.setValue(row,col,null);
    //     for(let i = row; i < this.rows - 1; i ++){
    //         let a = this.getValue(i + 1 , col);
    //         this.setValue(i + 1,col,this.getValue(i,col));
    //         this.setValue(i,col,a);
    //     }
    // }


    /**
     * 初始化行数
     */
    private initRows(rows:number):void{
        if(rows < 1) {
            return;
        }
        for(let i = 0 ; i < rows ; i ++){
            this.my2DArray.push(new Array<any>());
        }
    }
    /**
     * 初始化列数
     */
    private initColumns(columns:number,value:number):void{
        if(columns < 1){
            return;
        }
        for(let i = 0 ; i < this.my2DArray.length ; i ++){
            for(let j = 0 ; j < columns ; j ++){
                this.my2DArray[i].push(value);
            }
        }
    }
    /**
     * 获取数组
     */
    public getArray():Array<Array<any>>{
        return this.my2DArray;
    }

    public print():void{
        console.log("====打印数组====");
        let array : Array<Array<any>> = this.my2DArray;
        for(let i = 0 ; i < array.length ; i ++){
            let lineStr : string = "";
            for(let j = 0 ; j < array[i].length ; j ++){
                lineStr = lineStr + array[i][j] + "\t";
            }
            console.log(lineStr);
        }
        console.log("====打印结束====");
    }
   
}