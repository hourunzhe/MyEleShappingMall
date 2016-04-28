/**
 * Created by hrz on 2016/4/28.
 */
var goodId;
function loadGoodInfo(tradeId) {
    var trade = {
        id:tradeId,
    }
    $.ajax({
        url:"trade/loadGoodInfo",
        data:trade,
        type:"post",
        success:function(data){
            $("#goodInfo").append(
                "<img width='150px' height='150px' src='http://localhost:8080/MyEleShoppingMall/uploadPicture/"+data.good.photo+"'>"+
                "<a href ='jsp/showGood.jsp?goodId=" + data.good.id + "'><strong >"+data.good.goodName+"</strong></a>"
            )
           goodId = data.good.id
        }
    })
}

function submit() {
    var content = UM.getEditor('description').getContent();
    var appraise = {
        goodId: goodId,
        content: content,
    }
    $.ajax({
        url: "appraise/add",
        data: appraise,
        method: "post",
        success: function (data) {
            if (data == "success") {
                alert("评论成功!");
            } else {
                alert("评论失败!");
            }
        }
    });
}







