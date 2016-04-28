/**
 * Created by hrz on 2016/4/23.
 */
var user;
var userId;
function setUser(username, userid) {
    user = username;
    userId = userid;
}
loadGoods("good/listGoodAll?page=", "", 1);

function loadGoods(url, value, page) {
    $("#content").html("");
    $("#pageDiv").html("");
    var good = {
        content: value,
    };
    $.ajax({
        url: url + page,
        type: "post",
        data: good,
        success: function (data) {
            var goods = data.goods;
            var pageCount = data.pageCount;
            var nowPage = data.page;
            if (goods == "") {
                $("#content").append("没有您想要的");
                return;
            }
            for (var i = 0; i < goods.length; i++) {
                var goodId = "'" + goods[i].id + "'";
                $("#content").append(
                    "<div id ='" + goods[i].id + "' style ='margin-top: 10px' class='col-lg-3 col-md-3 col-sm-4 col-xs-6'>" +
                    "<div class='thumbnail'>" +
                    "<a href='jsp/showGood.jsp?goodId=" + goods[i].id + "' class='thumbnail'>" +
                    "<img width='500px' height='500px' " +
                    "src='http://localhost:8080/MyEleShoppingMall/uploadPicture/" + goods[i].photo + "' alt=''>" +
                    "</a>" +
                    "<div class='caption'>" +
                    "<h3><strong>" + goods[i].goodName + "</strong></h3>" +

                    "<div>" + goods[i].price + "&nbsp;&nbsp;<span class ='glyphicon glyphicon-yen'></span></div>" +
                    "<div >已售<strong style='color: red'>&nbsp;" + goods[i].sales + "&nbsp;</strong>件" +
                    "&nbsp;评论<strong style='color: red'>&nbsp;" + goods[i].appraiseTotal + "&nbsp;</strong>条" +
                    "<button class='btn btn-info' onclick='addInCart(\"" + goods[i].id + "\")' style = 'float:right;margin-top: -10px'><span class = 'glyphicon glyphicon-plus'></span></button>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>"
                );
            }
            loadPage(pageCount, nowPage, url, value);

        }
    });
}

function addInCart(goodId) {
    if (user == null) {
        alert("请登录!");
        return;
    }
    var trade = {
        userId: userId,
        goodId: goodId,
    };
    $.ajax({
        url: 'trade/addCart',
        data: trade,
        type: "post",
        success: function (data) {
            if (data == "success") {
                loadCart();
                $("#cartContent").slideDown("slow");
            }
            else {
                alert("加入购物车失败!");
            }
        }
    });
};

function loadCart() {
    if (user == null) {
        return;
    }
    $("#thead").html("");
    $("#tbody").html("");
    $.ajax({
        url: 'trade/loadCart',
        type: "post",
        success: function (data) {
            if (data == "") {
                $("#thead").append("您的购物车空空如也！")
            }
            else {
                $("#thead").append(
                    "<tr style='font-size: small'>" +
                    "<th width='20%'>照片</th>" +
                    "<th width='35%'>商品</th>" +
                    "<th width='13%'>件数</th>" +
                    "<th width='15%'>价格</th>" +
                    "<th width='17%'>操作</th>" +
                    "</tr>"
                );
                for (var i = 0; i < data.length; i++) {
                    $("#tbody").append(
                        "<tr id ='" + data[i].id + "'>" +
                        "<td>" +
                        "<img  width='25px',height='25px' src='http://localhost:8080/MyEleShoppingMall/uploadPicture/" + data[i].good.photo + "' " +
                        "class='img-rounded'>" +
                        "</td>" +
                        "<td  style='font-size: 10px'><a href ='jsp/showGood.jsp?goodId=" + data[i].good.id + "'>" + data[i].good.goodName + "</a></td>" +
                        "<td style='font-size: 10px'>" + data[i].count + "</td>" +
                        "<td style='font-size: 10px'>" + (data[i].count * data[i].good.price) + "</td>" +
                        "<td><span id = 'delete' onclick ='deleteCart(\"" + data[i].id + "\")'style='color: red' class ='glyphicon glyphicon-trash'></span>&nbsp;&nbsp;" +
                        "<span id = 'order' onclick ='orderCart(\"" + data[i].id + "\")'style='color: #337AB7' class ='glyphicon glyphicon-list-alt'></span>" +
                        "</td>" +
                        "</tr>"
                    )
                }
            }
            
        }
    });
}

function orderCart(tradeId){
    location.href="jsp/order.jsp?tradeId="+tradeId;
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
                $("#" + tradeId).remove()
            } else {
                alert("删除订单失败!");
            }
        }
    });
}
/* ==================================================== */
function loadPage(pageCount, page, url, data) {
    $("#pageDiv").html("");
    $("#pageDiv").append(
        "<li>" +
        "<a href='javascript:void(0);' onclick='loadGoods(\"" + url + "\",\"" + data + "\"," + (page - 1) + ")' aria-label='Previous'>" +
        "<span aria-hidden='true'>&laquo;</span>" +
        "</a>" +
        "</li>"
    );
    for (var i = 1; i <= pageCount; i++) {
        if (i == page) {
            $("#pageDiv").append(
                "<li class = 'active'>" +
                "<a href='javascript:;' onclick='loadGoods(\"" + url + "\",\"" + data + "\"," + (i) + ")' >" + i + "</a>" +
                "</li>"
            );
        } else {
            $("#pageDiv").append(
                "<li>" +
                "<a href='javascript:;' onclick='loadGoods(\"" + url + "\",\"" + data + "\"," + (i) + ")'>" + i + "</a>" +
                "</li>"
            );
        }
    }
    $("#pageDiv").append(
        "<li>" +
        "<a  href='javascript:;' onclick='loadGoods(\"" + url + "\",\"" + data + "\"," + (page + 1) + ")' aria-label='Next'>" +
        "<span aria-hidden='true'>&raquo;</span>" +
        "</a>" +
        "</li>"
    );
};
