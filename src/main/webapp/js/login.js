/**
 * Created by hrz on 2016/4/14.
 */
$(document).ready(function () {
    /* 点击登录按钮 start*/
    $("#login").click(function () {
        var username = $("#username").val();
        var password = $("#password").val();
        var role = $("#inlineRadio:checked").val();
        if (username == "" || password == "") {
            $("#errorcontent").html("用户名密码不能为空！");
            $("#warn").css("display", "");
        } else {
            var user = {
                userName: $("#username").val(),
                password: $("#password").val(),
            };
            $.ajax({
                url: role + "/login",
                type: "post",
                data: user,
                success: function (data) {
                    if (data == "notexist") {
                        $("#errorcontent").html("用户名密码错误！");
                        $("#warn").css("display", "");
                    }
                    if (data == "exist") {
                        location.href = "jsp/" + role + "Index.jsp";
                    }
                    if (data == "fail") {
                        $("#errorcontent").html("登录失败！");
                        $("#warn").css("display", "");
                    }
                }
            });
        }
    });
    /* 点击登录按钮 end*/
    /* 点击注册按钮 start*/
    $("#regist").click(function () {
        location.href = "jsp/register.jsp";
    });
    /* 点击注册按钮 end*/
});