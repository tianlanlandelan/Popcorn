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
var My2dElementArray = (function (_super) {
    __extends(My2dElementArray, _super);
    function My2dElementArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 移除一个元素，同时该元素上一行同列的数据下移
     */
    My2dElementArray.prototype.removeElementAndMoveDown = function (row, col) {
        for (var i = row; i < this.rows - 1; i++) {
            var a = this.getValue(i + 1, col);
            var b = this.getValue(i, col);
            var a1 = this.getValue(i + 1, col);
            a1.x = b.x;
            a1.y = b.y;
            var b1 = this.getValue(i, col);
            b1.x = a.x;
            b1.y = a.y;
            this.setValue(i + 1, col, b1);
            this.setValue(i, col, a1);
        }
        this.setValue(row - 1, col, null);
    };
    return My2dElementArray;
}(My2dArray));
__reflect(My2dElementArray.prototype, "My2dElementArray");
//# sourceMappingURL=My2dElementArray.js.map