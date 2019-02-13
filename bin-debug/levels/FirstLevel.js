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
        console.log("==加载第一关==");
        _this.show();
        return _this;
    }
    FirstLevel.prototype.show = function () {
        this.elementArray = this.initElements();
        for (var i = 0; i < this.elementArray.rows; i++) {
            for (var j = 0; j < this.elementArray.columns; j++) {
                this.addChild(this.elementArray.getValue(i, j));
            }
        }
    };
    FirstLevel.prototype.initElements = function () {
        var my2DArray = new My2dArray();
        my2DArray.initWithRandomNumber(4, 4, 5);
        var array = my2DArray.getArray();
        var size = 100;
        for (var i = 0; i < my2DArray.rows; i++) {
            var x = size * (i + 1);
            for (var j = 0; j < my2DArray.columns; j++) {
                var y = size * (j + 1);
                var element = new MyElement(i, j, x, y, array[i][j] + "");
                element.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickElement, this);
                my2DArray.setValue(i, j, element);
            }
        }
        return my2DArray;
    };
    FirstLevel.prototype.clickElement = function (evt) {
        var element = evt.currentTarget;
        console.log(element.name, element.text);
    };
    return FirstLevel;
}(egret.DisplayObjectContainer));
__reflect(FirstLevel.prototype, "FirstLevel");
//# sourceMappingURL=FirstLevel.js.map