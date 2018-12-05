var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * @author 杨松恺
 * @date 2018-12-05 15:45:08
 * 定义二维数组，提供相关操作
 */
var My2DArray = (function () {
    function My2DArray() {
        this.my2DArray = new Array();
    }
    /**
     * 初始化数组
     * @param rows      行数
     * @param columns   列数
     * @param value     初始值
     */
    My2DArray.prototype.init = function (rows, columns, value) {
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
    My2DArray.prototype.initRandom = function (rows, columns, value) {
        this.init(rows, columns, 0);
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                this.setValue(i, j, Math.floor(Math.random() * value));
            }
        }
    };
    /**
     * 取数组中的值
     */
    My2DArray.prototype.getValue = function (rows, columns) {
        if (rows < 0 || columns < 0 || rows >= this.rows || columns >= this.columns) {
            return null;
        }
        return this.my2DArray[rows][columns];
    };
    /**
     * 为数组赋值
     */
    My2DArray.prototype.setValue = function (rows, columns, value) {
        if (rows < 0 || columns < 0 || rows >= this.rows || columns >= this.columns) {
            return;
        }
        this.my2DArray[rows][columns] = value;
    };
    /**
     * 初始化行数
     */
    My2DArray.prototype.initRows = function (rows) {
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
    My2DArray.prototype.initColumns = function (columns, value) {
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
    My2DArray.prototype.getArray = function () {
        return this.my2DArray;
    };
    My2DArray.prototype.test = function () {
        var my2DArray = new My2DArray();
        my2DArray.init(5, 6, 0);
        console.log("数组:", my2DArray.getArray());
        console.log("取值:", my2DArray.getValue(1, 1));
        my2DArray.setValue(1, 1, 5);
        console.log("赋值后取值:", my2DArray.getValue(1, 1));
        console.log("取数组范围外的值:", my2DArray.getValue(10, 1));
    };
    return My2DArray;
}());
__reflect(My2DArray.prototype, "My2DArray");
//# sourceMappingURL=My2DArray.js.map