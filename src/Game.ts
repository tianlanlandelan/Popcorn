class Game extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        console.log("==加载游戏大厅==")

        this.show();
    }

    public show() :void{
        let firstLevel : FirstLevel = new FirstLevel();
        firstLevel.name = "firstLevel";
        this.addChild(firstLevel);
    }
}