/**
 * Created by hrz on 2016/4/28.
 */

    
    function loadOrderForUser(page){
        var nowPage={
            page:page,
        };
        var pageCount;
        $.ajax({
            url: "trade/listOrderForUser",
            type: "post",
            data:nowPage,
            success: function (data) {
                $("#tbody").html("");
                pageCount = data.pageCount;
                for (var i = 0; i < data.trades.length; i++) {
                    var date = new Date(data.trades[i].updateAt);
                    var state ;
                    date = date.Format("yyyy-MM-dd hh:mm:ss");
                    if (data.trades[i].state == 2) {
                        state = "<strong style='color: red;'>等待支付</strong>"
                    }
                    if (data.trades[i].state == 3) {
                        state = "<strong style='color: green;'>支付成功</strong>"
                    }
                    $("#tbody").append(
                        "<tr id ='" + data.trades[i].id + "'>" +
                        "<td>" +
                        "<img id ='photo' width='100px',height='100px' src='http://localhost:8080/MyEleShoppingMall/uploadPicture/" +data.trades[i].good.photo + "' " +
                        "class='img-rounded'>" +
                        "<a href ='jsp/showGood.jsp?goodId=" + data.trades[i].good.id + "'>" +data.trades[i].good.goodName + "</a></td>" +
                        "<td style='height: 100px;line-height: 100px'>" + data.trades[i].good.price + "</td>" +
                        "<td style='height: 100px;line-height: 100px'>" + data.trades[i].count + "</td>" +
                        "<td style='height: 100px;line-height: 100px'>" + (data.trades[i].count * data.trades[i].good.price) + "</td>" +
                        "<td style='height: 100px;line-height: 100px'>" + date + "</td>" +
                        "<td id = 'state_"+data.trades[i].id+"' style='height: 100px;line-height: 100px'>" + state + "</td>" +
                        "<td style='height: 100px;line-height: 100px'><span id = 'delete' onclick ='deleteCart(\"" + data.trades[i].id + "\")'style='color: red' class ='glyphicon glyphicon-trash'></span>&nbsp;&nbsp;" +
                        "<span id = 'pay' onclick ='pay(\"" + data.trades[i].id + "\")'style='color: #337AB7' class ='glyphicon glyphicon-yen'></span>" +
                        "</td>" +
                        "</tr>"
                    );
                }
                loadPage(pageCount,page)
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
                    $("#state_"+tradeId).html("<strong style='color: green;'>支付成功</strong>");
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
                    alert("订单删除成功!");
                    $("#" + tradeId).remove();
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

    function loadPage(pageCount,page){
        $("#pageDiv").html("");
        $("#pageDiv").append(
            "<li>"+
            "<a href='javascript:;' onclick='loadOrderForUser("+(page-1)+")' aria-label='Previous'>"+
            "<span aria-hidden='true'>&laquo;</span>"+
            "</a>"+
            "</li>"
        );
        for(var i = 1;i<=pageCount;i++ ){
            if(i == page){
                $("#pageDiv").append(
                    "<li class = 'active'>"+
                    "<a href='javascript:;' onclick='loadOrderForUser("+(i)+")' >"+ i +"</a>"+
                    "</li>"
                );
            }else{
                $("#pageDiv").append(
                    "<li>"+
                    "<a href='javascript:;' onclick='loadOrderForUser("+(i)+")'>"+ i +"</a>"+
                    "</li>"
                );
            }
        }
        $("#pageDiv").append(
            "<li>"+
            "<a  href='javascript:;' onclick='loadOrderForUser("+(page+1)+")' aria-label='Next'>"+
            "<span aria-hidden='true'>&raquo;</span>"+
            "</a>"+
            "</li>"
        );
    };


