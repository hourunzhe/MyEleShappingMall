/**
 * Created by hrz on 2016/4/15.
 */
$(document).ready(function () {

    /* 点击注册按钮 start*/
    $("#regist").click(function () {
        var username = $("#username").val();
        var password = $("#password").val();
        var sellername = $("#sellername").val();
        var address = $("#address").val();
        var type = $("#type").val();
        var seller = {
            userName: username,
            password: password,
            sellerName: sellername,
            address: address,
            type: type,
        };
        if (password == "" || username == "") {
            $("#errorcontent").html("用户名密码不能为空！");
            $("#warn").removeClass().addClass("alert alert-danger col-sm-12 col-xs-12");
            $("#warn").css("display", "");
        } else {
            if (sellername == "") {
                $("#errorcontent").html("商店名不能为空！");
                $("#warn").removeClass().addClass("alert alert-danger col-sm-12 col-xs-12");
                $("#warn").css("display", "");
            }
            else {
                $.ajax({
                    url: "seller/register",
                    type: "post",
                    data: seller,
                    success: function (data) {
                        if (data == "exist") {
                            $("#errorcontent").html("用户名已存在！");
                            $("#warn").removeClass().addClass("alert alert-danger col-sm-12 col-xs-12");
                            $("#warn").css("display", "");
                        }
                        if (data == "fail") {
                            $("#errorcontent").html("添加失败！");
                            $("#warn").removeClass().addClass("alert alert-danger col-sm-12 col-xs-12");
                            $("#warn").css("display", "");
                        }
                        if (data == "success") {
                            $("#errorcontent").html("注册成功！");
                            $("#warn").removeClass().addClass("alert alert-success col-sm-12 col-xs-12");
                            $("#warn").css("display", "");
                        }
                    }
                });
            }
        }
    });
    /* 点击注册按钮 end*/
});