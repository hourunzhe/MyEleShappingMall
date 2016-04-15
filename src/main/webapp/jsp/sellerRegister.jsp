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
    <script src="js/sellerRegister.js"></script>
    <link rel="stylesheet" href="css/sellerRegister.css">
</head>

<body style="">
<div class="container-fluid">
    <div class="row" id="head">
        <div class="" id="limit"><strong style="font-size:30px;color:#337AB7">&nbsp;&nbsp;&nbsp;&nbsp;我的电商</strong>
        </div>
        <div class="" id="title" style="">注册我的电商</div>
        <div class="" id="button" style="">已经有账号？<a href="jsp/login.jsp" class="btn btn-primary  " role="button">登陆</a>
        </div>
    </div>
    <form class="form-horizontal" id="form" action="user!regist.action" method="post">
        <div class="alert alert-danger col-sm-12 col-xs-12" role="alert" id="warn" style="display:none;">
            <!-- <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> -->
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span id="errorcontent"></span>
        </div>
        <div class="form-group">
            <label for="username" class="col-sm-2 control-label col-xs-2">用户名</label>
            <div class="col-sm-3 col-xs-3">
                <input type="text" class="form-control" id="username" name="userName" placeholder="用户名" required>
            </div>

        </div>
        <div class="form-group ">
            <label class="col-sm-2 col-xs-2 control-label " for="password">密码</label>
            <div class="col-sm-3 col-xs-3">
                <input type="password" class="form-control" name="password" id="password" placeholder="密码" required>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 col-xs-2 control-label " for="sellername">商店名称</label>
            <div class="col-sm-3 col-xs-3">
                <input type="text" class="form-control" name="sellername" id="sellername" placeholder="商店名称">
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
        <button type="submit" id="regist" class="btn btn-primary">注册</button>
    </div>
    <a href="jsp/register.jsp" class="col-sm-offset-4 col-sm-2 col-xs-offset-4 col-xs-2 btn btn-primary " role="button">
        <span class="glyphicon glyphicon-user">用户注册入口</span>
    </a>
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
