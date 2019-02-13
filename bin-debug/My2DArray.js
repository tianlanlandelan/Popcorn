var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * @author 杨松恺
 * @date 2018-12-05 15:45:08
 * 定义二维数组，提供相关操作
 */
var My2dArray = (function () {
    function My2dArray() {
        this.my2DArray = new Array();
    }
    /**
     * 初始化数组
     * @param rows      行数
     * @param columns   列数
     * @param value     初始值
     */
    My2dArray.prototype.init = function (rows, columns, value) {
        this.rows = rows;
        this.columns = columns;
        this.initRows(rows);
        this.initColumns(columns, value);
    };
    /**
     * 随机生成一个二维数组
     * @param rows      行数
     * @param columns   列数
     * @param value     数组值的范围
     */
    My2dArray.prototype.initWithRandomNumber = function (rows, columns, value) {
        this.init(rows, columns, 0);
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                this.setValue(i, j, Math.floor(Math.random() * value));
            }
        }
    };
    /**
     * 随机生成一个二维数组
     * @param rows      行数
     * @param columns   列数
     * @param min     数组值的最小值
     * @param max     数组值的最大值
     */
    My2dArray.prototype.initWithRandom2Number = function (rows, columns, min, max) {
        this.init(rows, columns, 0);
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                this.setValue(i, j, Math.floor(Math.random() * (max - min) + min));
            }
        }
    };
    /**
     * 取数组中的值
     */
    My2dArray.prototype.getValue = function (rows, columns) {
        if (rows < 0 || columns < 0 || rows >= this.rows || columns >= this.columns) {
            return null;
        }
        return this.my2DArray[rows][columns];
    };
    /**
     * 为数组赋值
     */
    My2dArray.prototype.setValue = function (rows, columns, value) {
        if (rows < 0 || columns < 0 || rows >= this.rows || columns >= this.columns) {
            return;
        }
        this.my2DArray[rows][columns] = value;
    };
    /**
     * 移除一个元素，
     */
    My2dArray.prototype.removeElement = function (row, col) {
    };
    /**
     * 初始化行数
     */
    My2dArray.prototype.initRows = function (rows) {
        if (rows < 1) {
            return;
        }
        for (var i = 0; i < rows; i++) {
            this.my2DArray.push(new Array());
        }
    };
    /**
     * 初始化列数
     */
    My2dArray.prototype.initColumns = function (columns, value) {
        if (columns < 1) {
            return;
        }
        for (var i = 0; i < this.my2DArray.length; i++) {
            for (var j = 0; j < columns; j++) {
                this.my2DArray[i].push(value);
            }
        }
    };
    /**
     * 获取数组
     */
    My2dArray.prototype.getArray = function () {
        return this.my2DArray;
    };
    My2dArray.prototype.print = function () {
        console.log("====打印数组====");
        var array = this.my2DArray;
        for (var i = 0; i < array.length; i++) {
            var lineStr = "";
            for (var j = 0; j < array[i].length; j++) {
                lineStr = lineStr + array[i][j] + "\t";
            }
            console.log(lineStr);
        }
        console.log("====打印结束====");
    };
    My2dArray.prototype.test = function () {
        var my2DArray = new My2dArray();
        my2DArray.init(5, 6, 0);
        console.log("数组:", my2DArray.getArray());
        console.log("取值:", my2DArray.getValue(1, 1));
        my2DArray.setValue(1, 1, 5);
        console.log("赋值后取值:", my2DArray.getValue(1, 1));
        console.log("取数组范围外的值:", my2DArray.getValue(10, 1));
    };
    return My2dArray;
}());
__reflect(My2dArray.prototype, "My2dArray");
//# sourceMappingURL=My2dArray.js.map