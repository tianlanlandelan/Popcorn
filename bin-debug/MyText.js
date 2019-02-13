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
var MyText = (function (_super) {
    __extends(MyText, _super);
    /**
     * 文字提示
     */
    function MyText(row, col, x, y, value) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.textColor = 0xffffff;
        _this.size = 72;
        _this.fontFamily = "KaiTi";
        _this.text = value;
        _this.name = row + "-" + col;
        _this.row = row;
        _this.col = col;
        console.log("==加载MyText:" + _this.name);
        return _this;
    }
    return MyText;
}(egret.TextField));
__reflect(MyText.prototype, "MyText");
//# sourceMappingURL=MyText.js.map