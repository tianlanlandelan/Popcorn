class My2dElementArray extends My2dArray{
    /**
     * 移除一个元素，同时该元素上一行同列的数据下移
     */
    public removeElementAndMoveDown(row:number,col:number):void{
        for(let i = row; i < this.rows - 1; i ++){
            let a:MyElement = this.getValue(i + 1 , col);
            let b:MyElement = this.getValue(i , col);

            let a1:MyElement = this.getValue(i + 1 , col);
            a1.x = b.x;
            a1.y = b.y;

            let b1:MyElement = this.getValue(i , col);
            b1.x = a.x;
            b1.y = a.y;

            this.setValue(i + 1,col,b1);
            this.setValue(i,col,a1);
        }
        this.setValue(row - 1,col,null);

    }
}