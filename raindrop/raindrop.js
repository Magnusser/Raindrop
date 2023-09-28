function init(){
    var canvas=document.getElementById("canvas");
    if(canvas.getContext)
    {
        var ctx=canvas.getContext("2d")
        ctx.lineWidth=5;
        ctx.strokeStyle="lightblue";
        ctx.fillStyle="rgba(0,154,255,0.5)";

        var linear=ctx.createLinearGradient(0,10,0,110);
        ctx.beginPath();
        ctx.moveTo(150,50);
        ctx.bezierCurveTo(450,150,150,200,150,50);
        linear.addColorStop(0,"yellow");
        linear.addColorStop(1,"green");
        ctx.fillStyle=linear;
        ctx.fill();
        ctx.stroke();
    }
}
onload=init;