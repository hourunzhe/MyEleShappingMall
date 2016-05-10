/**
 * Created by hrz on 2016/4/18.
 */
var seller;
function loadFirst(sellerName) {
    if (sellerName == null) {
        location.href = "./jsp/login.jsp";
        return;
    }

    $.ajax({
        url: "seller/load",
        data: {sellerName: sellerName},
        type: "post",
        success: function (data) {
            seller = data;
            loadTop(data);
            loadGoods(1);
        }
    });
    return;
};



function loadTop(data) {
    var img='';
    if(data.photo == null || data.photo ==''){
        img = 'http://localhost:8080/MyEleShoppingMall/uploadPicture/noPhoto.jpg';
    }else{
        img ='http://localhost:8080/MyEleShoppingMall/uploadPicture/'+data.photo;
    }
    var phone='';
    if(data.phone == null||data.phone ==''){
        phone = '未填写';
    }else{
        phone = data.phone;
    }
    $("#top").append(
        "<div id = 'sellerName' class = ''>" + data.sellerName + "</div>" +
        "<img id ='photo'  src='"+img+"'" +
        "class='img-rounded col-lg-offset-1 col-md-offset-1'>" +
        "<div id = 'phone'><span id = 'phone_img'" +
        " class = 'col-lg-offset-1 col-md-offset-1 col-sm-offset-1  glyphicon glyphicon-earphone'>" +
        "</span>&nbsp;&nbsp;&nbsp;" + phone + "</div>" +
        "<div id = 'type'><span id = 'type_img'" +
        " class = 'col-lg-offset-1 col-md-offset-1 col-sm-offset-1  glyphicon glyphicon-th'>" +
        "</span>&nbsp;&nbsp;&nbsp;" + data.type + "</div>" +
        "<div id = 'address'><span id = 'address_img'" +
        " class = 'col-lg-offset-1 col-md-offset-1 col-sm-offset-1  glyphicon glyphicon-map-marker'>" +
        "</span>&nbsp;&nbsp;&nbsp;" + data.address + "</div>" +
        "<button type='submit' id = 'update' class='btn btn-primary'><span class ='glyphicon glyphicon-pencil'></span></button>" +
        "<button type='submit' id = 'add' class='btn btn-primary'><span class ='glyphicon glyphicon-plus'></span></button>" +
        "");
    return;

};
function deleteGood(i){
    $.ajax({
        url:"good/delete",
        data:{
            id:i
        },
        type:"post",
        success:function(data){
            $("#"+i).remove();
        }
    });
}
function loadGoods(page){
    $("#right").html("");
    $("#pageDiv").html("");
    $.ajax({
        url:"good/showForSeller?page="+page,
        type:"get",
        success:function(data){
            var goods = data.goods;
            var pageCount = data.pageCount;
            var nowPage = data.page;
            if(goods.length == 0){
                $("#right").append("<strong>你还么有发布任何商品，赶紧去添加吧!</strong>");
            }
            for(var i = 0; i<goods.length; i++) {
                var goodId = "'"+goods[i].id+"'";
                $("#right").append(
                    "<div id ='"+goods[i].id+"' style ='margin-top: 10px' class='col-lg-4 col-md-4 col-sm-6 col-xs-6'>" +
                    "<div class='thumbnail'>" +
                        "<a class='thumbnail'>"+
                    "<img width='500px' height='500px' " +
                    "src='http://localhost:8080/MyEleShoppingMall/uploadPicture/"+goods[i].photo+"' alt=''>" +
                    "</a>"+
                    "<div class='caption'>" +
                    "<h3><strong>"+goods[i].goodName+"</strong></h3>" +

                    "<div>"+goods[i].price+"&nbsp;&nbsp;<span class ='glyphicon glyphicon-yen'></span></div>"+
                        "<div >已售<strong style='color: red'>&nbsp;"+goods[i].sales+"&nbsp;</strong>件" +
                        "&nbsp;评论<strong style='color: red'>&nbsp;"+goods[i].appraiseTotal+"&nbsp;</strong>条" +
                        "<button class='btn btn-danger' onclick='deleteGood(\""+goods[i].id+"\");' style = 'float:right;margin-top: -10px'><span class = 'glyphicon glyphicon-trash'></span></button>"+
                    "</div>"+
                    "</div>" +
                    "</div>" +
                    "</div>"
                );
            }
            loadPage(pageCount,nowPage);
        }

    });

}
function loadPage(pageCount,page){
    if(pageCount == 0){
        return;
    }
    $("#pageDiv").html("");
    $("#pageDiv").append(
        "<li>"+
        "<a href='javascript:;' onclick='loadGoods("+(page-1)+")' aria-label='Previous'>"+
        "<span aria-hidden='true'>&laquo;</span>"+
        "</a>"+
        "</li>"
    );
    for(var i = 1;i<=pageCount;i++ ){
        if(i == page){
            $("#pageDiv").append(
                "<li class = 'active'>"+
                "<a href='javascript:;' onclick='loadGoods("+(i)+")' >"+ i +"</a>"+
                "</li>"
            );
        }else{
            $("#pageDiv").append(
                "<li>"+
                "<a href='javascript:;' onclick='loadGoods("+(i)+")'>"+ i +"</a>"+
                "</li>"
            );
        }
    }
    $("#pageDiv").append(
        "<li>"+
        "<a  href='javascript:;' onclick='loadGoods("+(page+1)+")' aria-label='Next'>"+
        "<span aria-hidden='true'>&raquo;</span>"+
        "</a>"+
        "</li>"
    );
};

function showOrders(page){
    $("#right").html("");
    $("#pageDiv").html("");
    var nowPage={
        page:page,
    };
    var pageCount;


    $.ajax({
        url: "trade/listOrderForSeller",
        type: "post",
        data:nowPage,
        success: function (data) {
            $("#tbody").html("");
            pageCount = data.pageCount;
            if (data.trades == ""){
                $("#right").append("<strong>还没有人买你的商品!</strong>")
            }else {
                $("#right").append(
                    "<table style = 'margin-top: 10px' class='table table-bordered'>" +
                    "<thead id='thead'>" +
                    "<tr>" +
                    "<th>宝贝</th>" +
                    "<th>单价（元）</th>" +
                    "<th>数量</th>" +
                    "<th>实付款</th>" +
                    "<th>下单时间</th>" +
                    "<th>交易状态</th>" +
                    "<th>送货地址</th>" +
                    "</tr>" +
                    "</thead>" +
                    "<tbody id='tbody'>" +
                    "</tbody>" +
                    "</table>"
                );
                for (var i = 0; i < data.trades.length; i++) {
                    var date = new Date(data.trades[i].updateAt);
                    var state;
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
                        "<img  width='100px',height='100px' src='http://localhost:8080/MyEleShoppingMall/uploadPicture/" + data.trades[i].good.photo + "' " +
                        "class='img-rounded'>" + data.trades[i].good.goodName + "</td>" +
                        "<td style='height: 100px;line-height: 100px'>" + data.trades[i].good.price + "</td>" +
                        "<td style='height: 100px;line-height: 100px'>" + data.trades[i].count + "</td>" +
                        "<td style='height: 100px;line-height: 100px'>" + (data.trades[i].count * data.trades[i].good.price) + "</td>" +
                        "<td style='height: 100px;line-height: 100px'>" + date + "</td>" +
                        "<td id = 'state_" + data.trades[i].id + "' style='height: 100px;line-height: 100px'>" + state + "</td>" +
                        "<td style='height: 100px;line-height: 100px'>" + data.trades[i].user.address + "</td>" +
                        "</tr>"
                    );
                }
                loadPageForOrder(pageCount, page)
            }
        }
    });

}
function  loadPageForOrder(pageCount,page){
    $("#pageDiv").html("");
    $("#pageDiv").append(
        "<li>"+
        "<a href='javascript:;' onclick='showOrders("+(page-1)+")' aria-label='Previous'>"+
        "<span aria-hidden='true'>&laquo;</span>"+
        "</a>"+
        "</li>"
    );
    for(var i = 1;i<=pageCount;i++ ){
        if(i == page){
            $("#pageDiv").append(
                "<li class = 'active'>"+
                "<a href='javascript:;' onclick='showOrders("+(i)+")' >"+ i +"</a>"+
                "</li>"
            );
        }else{
            $("#pageDiv").append(
                "<li>"+
                "<a href='javascript:;' onclick='showOrders("+(i)+")'>"+ i +"</a>"+
                "</li>"
            );
        }
    }
    $("#pageDiv").append(
        "<li>"+
        "<a  href='javascript:;' onclick='showOrders("+(page+1)+")' aria-label='Next'>"+
        "<span aria-hidden='true'>&raquo;</span>"+
        "</a>"+
        "</li>"
    );
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



