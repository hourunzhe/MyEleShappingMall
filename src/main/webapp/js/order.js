/**
 * Created by hrz on 2016/4/27.
 */

var state = '';
function loadTrade(tradeId) {
    var trade = {
        id: tradeId
    };
    $.ajax({
        url: "trade/order",
        data: trade,
        type: "post",
        success: function (data) {
            var date = new Date(data.updateAt);
            date = date.Format("yyyy-MM-dd hh:mm:ss");

            if (data.state == 2) {
                state = "<strong style='color: red;'>等待支付</strong>"
            }
            if (data.state == 3) {
                state = "<strong style='color: green;'>支付成功</strong>"
            }
            $("#tbody").append(
                "<tr id ='" + data.id + "'>" +
                "<td>" +
                "<img id ='photo' width='100px',height='100px' src='http://localhost:8080/MyEleShoppingMall/uploadPicture/" + data.good.photo + "' " +
                "class='img-rounded'>" +
                "<a href ='jsp/showGood.jsp?goodId=" + data.good.id + "'>" + data.good.goodName + "</a></td>" +
                "<td style='height: 100px;line-height: 100px'>" + data.good.price + "</td>" +
                "<td style='height: 100px;line-height: 100px'>" + data.count + "</td>" +
                "<td style='height: 100px;line-height: 100px'>" + (data.count * data.good.price) + "</td>" +
                "<td style='height: 100px;line-height: 100px'>" + date + "</td>" +
                "<td id = 'state' style='height: 100px;line-height: 100px'>" + state + "</td>" +
                "<td style='height: 100px;line-height: 100px'><span id = 'delete' onclick ='deleteCart(\"" + data.id + "\")'style='color: red' class ='glyphicon glyphicon-trash'></span>&nbsp;&nbsp;" +
                "<span id = 'pay' onclick ='pay(\"" + data.id + "\")'style='color: #337AB7' class ='glyphicon glyphicon-yen'></span>" +
                "</td>" +
                "</tr>"
            );
        }
    });
}
function pay(tradeId){
    var trade = {
        id: tradeId,
    };
    $.ajax({
        url: "trade/pay",
        data: trade,
        type: "post",
        success: function (data) {
            if (data == "success") {
                alert("支付成功!");
                $("#state").html("<strong style='color: green;'>支付成功</strong>");
                return ;
            }
            if (data == "hadPay"){
                alert("您已经支付了该订单!");
                return;
            }
            if(data == "fail"){
                alert("支付失败!");
            }
        }
    });
}
function deleteCart(tradeId) {
    var trade = {
        id: tradeId,
    };
    $.ajax({
        url: "trade/deleteCart",
        data: trade,
        type: "post",
        success: function (data) {
            if (data == "success") {
                $("#" + tradeId).remove();
                location.href="jsp/userIndex.jsp";
            } else {
                alert("删除订单失败!");
            }
        }
    });
}
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};