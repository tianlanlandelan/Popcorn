var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var FirstLevel = (function (_super) {
    __extends(FirstLevel, _super);
    function FirstLevel() {
        var _this = _super.call(this) || this;
        //元素最大值
        _this.elementMaxValue = 5;
        //元素行数
        _this.elementRows = 9;
        //元素列数
        _this.elementCols = 9;
        //元素大小
        _this.elementSize = 100;
        //第一个点击的元素
        _this.clickedElementA = null;
        //第二个点击的元素
        _this.clickedElementB = null;
        console.log("==加载第一关==");
        _this.show();
        return _this;
    }
    FirstLevel.prototype.show = function () {
        this.elementArray = this.initElements();
        this.loadElementArray();
        this.checkClean();
    };
    FirstLevel.prototype.reloadElementArray = function () {
        this.removeElementArray();
        this.loadElementArray();
    };
    /**
     * 加载元素数组
     */
    FirstLevel.prototype.loadElementArray = function () {
        for (var i = 0; i < this.elementArray.rows; i++) {
            for (var j = 0; j < this.elementArray.columns; j++) {
                var element = this.elementArray.getValue(i, j);
                if (element != null && element.text != null) {
                    element.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickElement, this);
                    this.addChild(element);
                }
            }
        }
    };
    /**
     * 移除元素数组
     */
    FirstLevel.prototype.removeElementArray = function () {
        for (var i = 0; i < this.elementArray.rows; i++) {
            for (var j = 0; j < this.elementArray.columns; j++) {
                var element = this.elementArray.getValue(i, j);
                if (element != null) {
                    var el = this.getChildByName(element.name);
                    if (el != null) {
                        this.removeChild(el);
                    }
                }
            }
        }
    };
    /**
     * 初始化元素
     * 把可移动的元素、障碍物、空白区都看作数组中的一个元素
     * TODO 添加障碍物和空白区
     */
    FirstLevel.prototype.initElements = function () {
        var my2DArray = new My2dArray();
        my2DArray.initWithRandomNumber(this.elementRows, this.elementCols, this.elementMaxValue);
        var array = my2DArray.getArray();
        for (var i = 0; i < my2DArray.rows; i++) {
            var y = this.elementSize * (my2DArray.rows - i);
            for (var j = 0; j < my2DArray.columns; j++) {
                var x = this.elementSize * (j + 1);
                var element = new MyElement(i, j, x, y, array[i][j] + "");
                my2DArray.setValue(i, j, element);
            }
        }
        return my2DArray;
    };
    FirstLevel.prototype.elementChangeState = function (cloneElement) {
        cloneElement.changeColor();
        this.elementArray.setValue(cloneElement.row, cloneElement.col, cloneElement);
        this.reloadElementArray();
        this.clickedElementA = cloneElement;
    };
    /**
     * 判断两次点击的元素是否相邻，如果相邻，进行处理
     * 如果不相邻，重置
     */
    FirstLevel.prototype.clickElement = function (evt) {
        var element = evt.currentTarget;
        console.log(element.name, element.text, element.row, element.col);
        var cloneElement = MyElement.clone(this.elementArray.getValue(element.row, element.col));
        //没有点击过元素
        if (this.clickedElementA == null) {
            this.elementChangeState(cloneElement);
            //点击过一个元素    
        }
        else {
            this.clickedElementB = cloneElement;
            //如果相邻，尝试交换，看是否能消除元素
            if (MyElement.isAdjoin(this.clickedElementA, this.clickedElementB)) {
                //如果不相邻，清空已点击的其他元素,将该元素设置为第一次点击的元素
            }
            else {
                var cloneA = MyElement.clone(this.clickedElementA);
                cloneA.changeColor();
                this.elementArray.setValue(cloneA.row, cloneA.col, cloneA);
                this.reloadElementArray();
                this.elementChangeState(cloneElement);
                this.clickedElementB = null;
            }
        }
        for (var i = this.elementArray.rows - 1; i >= 0; i--) {
            for (var j = this.elementArray.columns - 1; j >= 0; j--) {
                if (this.elementArray.getValue(i, j).canBeClean) {
                    this.removeElementAndMoveDown(i, j);
                }
            }
        }
        // this.removeElementAndMoveDown(element.row,element.col);
    };
    /**
     * 移除一个元素，同时该元素上一行同列的数据下移
     */
    FirstLevel.prototype.removeElementAndMoveDown = function (row, col) {
        this.removeElementArray();
        for (var i = row; i < this.elementArray.rows - 1; i++) {
            var array = MyElement.swapText(this.elementArray.getValue(i + 1, col), this.elementArray.getValue(i, col));
            this.elementArray.setValue(i + 1, col, array[0]);
            this.elementArray.setValue(i, col, array[1]);
        }
        this.elementArray.setValue(this.elementArray.rows - 1, col, MyElement.createNullElement(this.elementArray.rows - 1, col));
        this.loadElementArray();
    };
    FirstLevel.prototype.checkClean = function () {
        var rows = this.elementArray.rows;
        var cols = this.elementArray.columns;
        var elements = this.elementArray;
        for (var i = 0; i < rows - 3; i++) {
            for (var j = 0; j < cols; j++) {
                if (elements.getValue(i, j).text == elements.getValue(i + 1, j).text && elements.getValue(i, j).text == elements.getValue(i + 2, j).text) {
                    elements.getValue(i, j).changeState();
                    elements.getValue(i + 1, j).changeState();
                    elements.getValue(i + 2, j).changeState();
                    this.reloadElementArray();
                }
            }
        }
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols - 3; j++) {
                if (elements.getValue(i, j).text == elements.getValue(i, j + 1).text && elements.getValue(i, j).text == elements.getValue(i, j + 2).text) {
                    elements.getValue(i, j).changeState();
                    elements.getValue(i, j + 1).changeState();
                    elements.getValue(i, j + 2).changeState();
                    this.reloadElementArray();
                }
            }
        }
    };
    return FirstLevel;
}(egret.DisplayObjectContainer));
__reflect(FirstLevel.prototype, "FirstLevel");
//# sourceMappingURL=FirstLevel.js.map