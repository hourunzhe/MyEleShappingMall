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
    $("#top").append(
        "<div id = 'sellerName' class = ''>" + data.sellerName + "</div>" +
        "<img id ='photo'  src='http://localhost:8080/MyEleShoppingMall/uploadPicture/" + data.photo + "'" +
        "class='img-rounded col-lg-offset-1 col-md-offset-1'>" +
        "<div id = 'phone'><span id = 'phone_img'" +
        " class = 'col-lg-offset-1 col-md-offset-1 col-sm-offset-1  glyphicon glyphicon-earphone'>" +
        "</span>&nbsp;&nbsp;&nbsp;" + data.phone + "</div>" +
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
    $.ajax({
        url:"good/showForSeller?page="+page,
        type:"get",
        success:function(data){
            var goods = data.goods;
            var pageCount = data.pageCount;
            var nowPage = data.page;
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




