/**
 * Created by hrz on 2016/4/24.
 */
function loadGood(id){
    var good={
        id:id,
    };
    $.ajax({
        url:"good/showGood",
        data:good,
        type:"post",
        success:function (data) {
            $("#top").append(
                "<img id ='photo'  src='http://localhost:8080/MyEleShoppingMall/uploadPicture/" + data.photo + "'" +
                "class='img-rounded col-lg-offset-1 col-md-offset-1'>" +
                "<div ><strong style='font-size: 20px;' class='col-lg-offset-1 col-md-offset-1 col-sm-offset-1'>"+data.goodName+"</strong></div>"+
                "<div id = 'phone'><span id = 'phone_img'" +
                " class = 'col-lg-offset-1 col-md-offset-1 col-sm-offset-1  glyphicon glyphicon-yen'>" +
                "</span>&nbsp;&nbsp;&nbsp;" + data.price + "&nbsp;元</div>" +
                "<div id = 'type'><span id = 'type_img'" +
                " class = 'col-lg-offset-1 col-md-offset-1 col-sm-offset-1  glyphicon glyphicon-comment'>" +
                "</span>&nbsp;&nbsp;&nbsp;顾客评论&nbsp;<strong style='color: red'>" + data.appraiseTotal + "</strong>&nbsp;条</div>" +
                "<div id = 'address'><span id = 'address_img'" +
                " class = 'col-lg-offset-1 col-md-offset-1 col-sm-offset-1  glyphicon glyphicon-usd'>" +
                "</span>&nbsp;&nbsp;&nbsp;已售&nbsp;<strong style='color: red'>" + data.sales + "</strong>&nbsp;件</div>" +
                "<button type='submit' id = 'get' class='col-lg-offset-1 col-md-offset-1 col-sm-offset-1 btn btn-primary'><span class ='glyphicon glyphicon-pencil'>&nbsp;立即购买</span></button>" +
                "<button type='submit' id = 'shopping' class='col-lg-offset-1 col-md-offset-1 col-sm-offset-1 btn btn-warning'><span class ='glyphicon glyphicon-shopping-cart'></span>&nbsp;&nbsp;加入购物车</button>" +
                "");
            $("#right").append(""+data.description);
            return;

        }

    });
}