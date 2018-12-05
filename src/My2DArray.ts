/**
 * @author 杨松恺
 * @date 2018-12-05 15:45:08
 * 定义二维数组，提供相关操作
 */
class My2DArray{
    private my2DArray : Array<Array<any>> =  new Array<Array<any>>();
    private rows :number;
    private columns :number;

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
    public initRandom(rows:number,columns:number,value:number):void{
        this.init(rows,columns,0);
        for(let i = 0 ; i < this.rows ; i ++){
            for(let j = 0 ; j < this.columns; j ++){
                this.setValue(i,j,Math.floor(Math.random() * value));
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

    public test(){
        let my2DArray:My2DArray = new My2DArray();
        my2DArray.init(5,6,0);
        console.log("数组:",my2DArray.getArray());
        console.log("取值:",my2DArray.getValue(1,1));
        my2DArray.setValue(1,1,5);
        console.log("赋值后取值:",my2DArray.getValue(1,1));
        console.log("取数组范围外的值:",my2DArray.getValue(10,1));
    }
    
}