/**
 * Created by hrz on 2016/4/23.
 */

loadGoods("good/listGoodAll?page=","",1);
function loadGoods(url,data,page){
    $("#content").html("");
    $("#pageDiv").html("");
    $.ajax({ url:url+page,
        type:"post",
        data:data,
        success: function(data){
            var goods = data.goods;
            var pageCount = data.pageCount;
            var nowPage = data.page;
            if(goods == ""){
                $("#content").append("没有您想要的");
                return;
            }
            for(var i = 0; i<goods.length; i++) {
                var goodId = "'"+goods[i].id+"'";
                $("#content").append(
                    "<div id ='"+goods[i].id+"' style ='margin-top: 10px' class='col-lg-3 col-md-3 col-sm-4 col-xs-6'>" +
                    "<div class='thumbnail'>" +
                    "<a href='jsp/showGood.jsp?goodId="+goods[i].id+"' class='thumbnail'>"+
                    "<img width='500px' height='500px' " +
                    "src='http://localhost:8080/MyEleShoppingMall/uploadPicture/"+goods[i].photo+"' alt=''>" +
                    "</a>"+
                    "<div class='caption'>" +
                    "<h3><strong>"+goods[i].goodName+"</strong></h3>" +

                    "<div>"+goods[i].price+"&nbsp;&nbsp;<span class ='glyphicon glyphicon-yen'></span></div>"+
                    "<div >已售<strong style='color: red'>&nbsp;"+goods[i].sales+"&nbsp;</strong>件" +
                    "&nbsp;评论<strong style='color: red'>&nbsp;"+goods[i].appraiseTotal+"&nbsp;</strong>条" +
                    "<button class='btn btn-info' onclick='showGood(\""+goods[i].id+"\");' style = 'float:right;margin-top: -10px'><span class = 'glyphicon glyphicon-plus'></span></button>"+
                    "</div>"+
                    "</div>" +
                    "</div>" +
                    "</div>"
                );
            }
            loadPage(pageCount,nowPage,url,data);

        }
    });
}
/* ==================================================== */
function loadPage(pageCount,page,url,data){
    $("#pageDiv").html("");
    $("#pageDiv").append(
        "<li>"+
        "<a href='javascript:void(0);' onclick='loadGoods(\""+url+"\",\""+data+"\","+(page-1)+")' aria-label='Previous'>"+
        "<span aria-hidden='true'>&laquo;</span>"+
        "</a>"+
        "</li>"
    );
    for(var i = 1;i<=pageCount;i++ ){
        if(i == page){
            $("#pageDiv").append(
                "<li class = 'active'>"+
                "<a href='javascript:;' onclick='loadGoods(\""+url+"\",\""+data+"\","+(i)+")' >"+ i +"</a>"+
                "</li>"
            );
        }else{
            $("#pageDiv").append(
                "<li>"+
                "<a href='javascript:;' onclick='loadGoods(\""+url+"\",\""+data+"\","+(i)+")'>"+ i +"</a>"+
                "</li>"
            );
        }
    }
    $("#pageDiv").append(
        "<li>"+
        "<a  href='javascript:;' onclick='loadGoods(\""+url+"\",\""+data+"\","+(page+1)+")' aria-label='Next'>"+
        "<span aria-hidden='true'>&raquo;</span>"+
        "</a>"+
        "</li>"
    );
};
