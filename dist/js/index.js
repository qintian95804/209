function miaosha(){
    var date1 = new Date();//当前时间
    var date2 = new Date("2020-11-20 21:30:00");//指定时间
    var ss = (date2 - date1) / 1000;//剩余时间
    var shi = Math.floor(ss / 3600);//小时
    var fen = Math.floor(ss / 60 % 60);//分钟
    var miao = Math.floor(ss % 60);//秒
    shi = shi < 10 ? "0" + shi : shi;//小时为0时补零00
    fen = fen < 10 ? "0" + fen : fen;//分钟为0时补零00
    miao = miao < 10 ? "0" + miao : miao;//秒为0时补零00
    shi1.innerText = shi//打印时间
    fen1.innerText = fen//打印时间
    miao1.innerText = miao//打印时间
    if(ss <= 0){
        clearInterval(timer);
        alert("秒杀结束")
        shi1.innerText = shi = shi < 0 ? "0" + shi : "0"+"0";
        fen1.innerText = fen = fen < 0 ? "0" + fen : "0"+"0";
        miao1.innerText = miao = miao < 0 ? "0" + miao : "0"+"0";
    }
}
var timer = setInterval(miaosha,1);
var tet = document.getElementById("miao1")
if(tet == 0){
    alert("秒杀结束")
}