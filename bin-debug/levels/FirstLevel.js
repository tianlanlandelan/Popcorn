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
        _this.elementRows = 4;
        //元素列数
        _this.elementCols = 4;
        //元素大小
        _this.elementSize = 100;
        console.log("==加载第一关==");
        _this.show();
        return _this;
    }
    FirstLevel.prototype.show = function () {
        this.elementArray = this.initElements();
        this.loadElementArray();
    };
    FirstLevel.prototype.loadElementArray = function () {
        for (var i = 0; i < this.elementArray.rows; i++) {
            for (var j = 0; j < this.elementArray.columns; j++) {
                var element = this.elementArray.getValue(i, j);
                if (element != null) {
                    var el = this.getChildByName(element.name);
                    if (el != null) {
                        this.removeChild(el);
                    }
                    this.addChild(element);
                }
            }
        }
    };
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
            var x = this.elementSize * (i + 1);
            for (var j = 0; j < my2DArray.columns; j++) {
                var y = this.elementSize * (j + 1);
                var element = new MyElement(i, j, x, y, array[i][j] + "");
                element.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickElement, this);
                my2DArray.setValue(i, j, element);
            }
        }
        return my2DArray;
    };
    FirstLevel.prototype.clickElement = function (evt) {
        var element = evt.currentTarget;
        console.log(element.name, element.text, element.row, element.col);
        this.removeElementArray();
        this.elementArray.setValue(element.row, element.col, null);
        this.loadElementArray();
    };
    return FirstLevel;
}(egret.DisplayObjectContainer));
__reflect(FirstLevel.prototype, "FirstLevel");
//# sourceMappingURL=FirstLevel.js.map