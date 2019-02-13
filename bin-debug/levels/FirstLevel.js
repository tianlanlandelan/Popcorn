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
        var my2DArray = new My2DArray();
        my2DArray.initRandom(4, 4, 5);
        var array = my2DArray.getArray();
        var size = 100;
        for (var i = 0; i < array.length; i++) {
            var x = size * (i + 1);
            for (var j = 0; j < array[i].length; j++) {
                var y = size * (j + 1);
                var textfield = new MyText(i, j, x, y, array[i][j] + "");
                this.addChild(textfield);
            }
        }
        /*
        test
        */
        my2DArray.print();
    };
    return FirstLevel;
}(egret.DisplayObjectContainer));
__reflect(FirstLevel.prototype, "FirstLevel");
//# sourceMappingURL=FirstLevel.js.map