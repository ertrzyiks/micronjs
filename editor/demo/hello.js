var StateGame = State.extend({

    textX : 0,
    bgr : null,

    constructor : function()
    {
        this.callParent();
        Camera.fade( {r:0, g:0, b:0, a:1}, {r:0, g:0, b:0, a:0}, 1);
    },

    init : function()
    {
        this.bgr = { r:Utils.randRange(0.0, 0.9), g:Utils.randRange(0.0, 0.9), b:Utils.randRange(0.0, 0.9) };
        this.onChangeBgr();
    },

    update : function(delta)
    {
        this.callParent(delta);
        if(Input.isKeyPressed(Input.KEY_A)) console.log('a!');
        this.textX += delta * 250;
        if(this.textX > Graphics.getWidth())
        {
            this.textX = -150;
        }
    },

    draw : function()
    {
        this.callParent();
        Graphics.drawFullScreenRect(this.bgr.r, this.bgr.g, this.bgr.b, 1.0);
        Graphics.drawText('Hello world!', this.textX, 250, 1, 1, 1, 1, 24, 'Arial');
    },

    onChangeBgr : function()
    {
        Utils.tween(this.bgr, 'r', Utils.randRange(0.0, 0.9), 3.5, Utils.E_LINEAR_IN, this.onChangeBgr.bind(this));
        Utils.tween(this.bgr, 'g', Utils.randRange(0.0, 0.9), 4);
        Utils.tween(this.bgr, 'b', Utils.randRange(0.0, 0.9), 4);

    }
});

Core.init(640, 480);
Core.setState(new StateGame());
Core.addAsset([	'empty', 'img/empty.jpg' ]);
Core.loadAndRun();
