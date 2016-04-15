<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>

<!DOCTYPE html>
<html>
<head>
    <base href="<%=basePath%>">

    <title>My JSP 'login.jsp' starting page</title>

    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
    <meta http-equiv="description" content="This is my page">
    <!--
    <link rel="stylesheet" type="text/css" href="styles.css">
    -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <!-- 可选的Bootstrap主题文件（一般不用引入） -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap-theme.min.css">

    <!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
    <script src="bootstrap/js/jquery.min.js"></script>

    <!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <script src="js/sellerUpdate.js"></script>
    <link rel="stylesheet" href="css/sellerUpdate.css">
    <style>

    </style>
    <script src="bootstrap/js/ajaxfileupload.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            <%
              String sellerId= request.getParameter("sellerId");
           %>
            var sellerId = '<%=sellerId%>';
            var sellercurrent;
            $.ajax({
                url: "seller/findInfo?sellerId=" + sellerId + "",
                success: function (data) {
                    $("#sellername").val(data.sellerName);
                    $("#type").val(data.type);
                    $("#address").val(data.address);
                    $("#phone").val(data.phone);
                    sellercurrent = data;
                }
            });
            /* ================================================ */
            var truepicture;
            $("#file").change(function () {
                var imgPath = $("#file").val();
                if (imgPath == "") {
                    alert("请选择上传图片！");
                    return;
                }
                //判断上传文件的后缀名
                var strExtension = imgPath.substr(imgPath.lastIndexOf('.') + 1);
                if (strExtension != 'jpg' && strExtension != 'gif'
                        && strExtension != 'png' && strExtension != 'bmp') {
                    alert("请选择图片文件");
                    return;
                }
                var upload = $("#file").val();

                $.ajaxFileUpload
                (
                        {
                            url: 'file/upload', //你处理上传文件的服务端
                            secureuri: false,
                            fileElementId: 'file',
                            dataType: 'text',
                            success: function (data) {
                                alert("上传成功！");
                            },
                            error: function (data) {

                            }
                        }
                )


            });
            /* 点击注册按钮 start*/
            $("#regist").click(function () {
                alert(sellerId);
                var sellername = $("#sellername").val();
                var type = $("#type").val();
                var address = $("#address").val();
                var phone = $("#phone").val();
                var seller = {
                    id: sellerId,
                    sellerName: sellername,
                    address: address,
                    phone: phone,
                    type: type,
                    userName: sellercurrent.userName,
                    password: sellercurrent.password,
                };


                $.ajax({
                    url: "seller/update",
                    type: "post",
                    data: seller,
                    success: function (data) {
                        alert("更新成功！");
                    }
                });


            });
            /* 点击注册按钮 end*/
        });
    </script>
</head>
<body style="">
<div class="container-fluid">
    <div class="row" id="head">
        <div class="" id="limit"><strong style="font-size:30px;color:#337AB7">&nbsp;&nbsp;&nbsp;&nbsp;我的电商</strong>
        </div>
        <div class="" id="title" style="">商家信息管理</div>
    </div>
    <form class="form-horizontal" id="form" action="user!regist.action" method="post">
        <div class="alert alert-danger col-sm-12 col-xs-12" role="alert" id="warn" style="display:none;">
            <!-- <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> -->
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span id="errorcontent"></span>
        </div>
        <div class="form-group">
            <label for="file" class="col-sm-2 control-label col-xs-2">商店图标</label>
            <div class="col-sm-3 col-xs-3">
                <input type="file" class="form-control" id="file" name="file" required>
            </div>

        </div>

        <div class="form-group">
            <label class="col-sm-2 col-xs-2 control-label " for="sellername">商店名称</label>
            <div class="col-sm-3 col-xs-3">
                <input type="text" class="form-control" name="sellername" id="sellername" placeholder="商店名称">
            </div>
        </div>

        <div class="form-group">
            <label class="col-sm-2 col-xs-2 control-label " for="phone">电话</label>
            <div class="col-sm-3 col-xs-3">
                <input type="text" class="form-control" name="phone" id="phone">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 col-xs-2 control-label " for="type">商店类型</label>
            <div class="col-sm-3 col-xs-3">
                <select class="form-control" id="type" name="type">
                    <option value="女装男装">女装男装</option>
                    <option value="鞋类箱包">鞋类箱包</option>
                    <option value="母婴用品">母婴用品</option>
                    <option value="护肤彩妆">护肤彩妆</option>
                    <option value="汇吃美食">汇吃美食</option>
                    <option value="珠宝配饰">珠宝配饰</option>
                    <option value="家装建材">家装建材</option>
                    <option value="家居家纺">家居家纺</option>
                    <option value="百货市场">百货市场</option>
                    <option value="汽车·用品">汽车·用品</option>
                    <option value="手机数码">手机数码</option>
                    <option value="家电办公">家电办公</option>
                    <option value="农资采购">农资采购</option>
                    <option value="花鸟文娱">花鸟文娱</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label for="address" class="col-sm-2 col-xs-2 control-label">地址</label>
            <div class="col-sm-3 col-xs-3">
                <textarea id="address" class="form-control" rows="3" name="address"></textarea>
            </div>
        </div>
    </form>
    <div class="col-sm-offset-2 col-sm-3 col-xs-offset-2 col-xs-3">
        <button type="submit" id="regist" class="btn btn-primary"><span class="glyphicon glyphicon-floppy-disk"></span>
        </button>
    </div>
</div>
<footer>
    <small>长沙理工大学计算机与通信工程学院</small>
    <br>
    <small>201258080208</small>
    <br>
    <small>侯润哲</small>
</footer>
</body>
</html>
