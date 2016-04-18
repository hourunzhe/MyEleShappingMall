/**
 * Created by hrz on 2016/4/18.
 */
var seller
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
        }
    });

    /*loadGoods();*/
    return;
}


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

}


