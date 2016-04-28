/**
 * Created by hrz on 2016/4/24.
 */

var description;
var goodId;
function loadGood(id) {
    var good = {
        id: id,
    };
    $.ajax({
        url: "good/showGood",
        data: good,
        type: "post",
        success: function (data) {
            $("#top").append(
                "<img id ='photo'  src='http://localhost:8080/MyEleShoppingMall/uploadPicture/" + data.photo + "'" +
                "class='img-rounded col-lg-offset-1 col-md-offset-1'>" +
                "<div ><strong style='font-size: 20px;' class='col-lg-offset-1 col-md-offset-1 col-sm-offset-1'>" + data.goodName + "</strong></div>" +
                "<div id = 'phone'><span id = 'phone_img'" +
                " class = 'col-lg-offset-1 col-md-offset-1 col-sm-offset-1  glyphicon glyphicon-yen'>" +
                "</span>&nbsp;&nbsp;&nbsp;" + data.price + "&nbsp;元</div>" +
                "<div id = 'type'><span id = 'type_img'" +
                " class = 'col-lg-offset-1 col-md-offset-1 col-sm-offset-1  glyphicon glyphicon-comment'>" +
                "</span>&nbsp;&nbsp;&nbsp;顾客评论&nbsp;<strong style='color: red'>" + data.appraiseTotal + "</strong>&nbsp;条</div>" +
                "<div id = 'address'><span id = 'address_img'" +
                " class = 'col-lg-offset-1 col-md-offset-1 col-sm-offset-1  glyphicon glyphicon-usd'>" +
                "</span>&nbsp;&nbsp;&nbsp;已售&nbsp;<strong style='color: red'>" + data.sales + "</strong>&nbsp;件</div>" +
                "<button type='submit' id = 'shopping' class='col-lg-offset-1 col-md-offset-1 col-sm-offset-1 btn btn-warning'><span class ='glyphicon glyphicon-shopping-cart'></span>&nbsp;&nbsp;加入购物车</button>" +
                "");
            $("#right").append("" + data.description);
            description = data.description;
            goodId = id;
            return;

        }

    });
}
function loadGoodDescription() {
    $("#right").html("");
    $("#pageDiscuss").html("");
    $("#right").append("" + description);
}
function loadDiscuss(page) {
    $("#right").html("");
    $("#pageDiscuss").html("");
    var appraise = {
        goodId: goodId,
        page: page,
    };
    var pageContent;
    $.ajax({
        url: "appraise/loadForGood",
        data: appraise,
        type: "post",
        success: function (data) {
            for (var i = 0; i < data.appraises.length; i++) {
                var date = new Date(data.appraises[i].creatAt);
                date = date.Format("yyyy-MM-dd hh:mm:ss");
                $("#right").append(
                    "<blockquote>" +
                    "<p>"+data.appraises[i].content+"</p>" +
                    "<footer><strong>"+data.appraises[i].user.userName+"&nbsp;&nbsp;</strong><cite >"+date+"</cite></footer>" +
                    "</blockquote>"
                );
            }

            loadDescussPage(data.pageCount, data.page);
        }
    })
}
function loadDescussPage(pageCount, page) {
    $("#pageDiscuss").html("");
    $("#pageDiscuss").append(
        "<li>" +
        "<a href='javascript:;' onclick='loadDiscuss(" + (page - 1) + ")' aria-label='Previous'>" +
        "<span aria-hidden='true'>&laquo;</span>" +
        "</a>" +
        "</li>"
    );
    for (var i = 1; i <= pageCount; i++) {
        if (i == page) {
            $("#pageDiscuss").append(
                "<li class = 'active'>" +
                "<a href='javascript:;' onclick='loadDiscuss(" + (i) + ")' >" + i + "</a>" +
                "</li>"
            );
        } else {
            $("#pageDiscuss").append(
                "<li>" +
                "<a href='javascript:;' onclick='loadDiscuss(" + (i) + ")'>" + i + "</a>" +
                "</li>"
            );
        }
    }
    $("#pageDiscuss").append(
        "<li>" +
        "<a  href='javascript:;' onclick='loadDiscuss(" + (page + 1) + ")' aria-label='Next'>" +
        "<span aria-hidden='true'>&raquo;</span>" +
        "</a>" +
        "</li>"
    );
};
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