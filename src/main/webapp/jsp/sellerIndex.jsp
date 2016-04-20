<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>

<!DOCTYPE html>
<html>
<head>
    <base href="<%=basePath%>">

    <title>商店首页</title>

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
    <script src="js/sellerIndex.js"></script>
    <link rel="stylesheet" href="css/sellerIndex.css">
    <style>

    </style>
    <script type="text/javascript">
        $(document).ready(function () {

            var sellerName = <%=request.getSession().getAttribute("userName")%>;
            var sellerId = '<%=request.getSession().getAttribute("sellerId")%>';
            loadFirst(sellerName);
            $("#top").on("click", "#update", function () {
                location.href = "jsp/sellerUpdate.jsp?sellerId=" + sellerId;
            });

            $("#top").on("click", "#add", function () {
                location.href = "jsp/goodAdd.jsp";
            });
        });

    </script>
</head>
<body style="">
<div class="container-fluid">
    <div class="row" id="head">
        <div class="" id="limit"><strong style="font-size:30px;color:#337AB7">&nbsp;&nbsp;&nbsp;&nbsp;我的电商</strong>
        </div>
        <div class="" id="title" style="">商家首页</div>
    </div>
    <div id="top" class="container-fluid">

    </div>
    <ul id="left"
        class="nav nav-pills nav-stacked col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2 col-sm-3 col-sm-offset-1 col-xs-12">
        <li role="presentation" class="active"><a href="#"><span class="glyphicon glyphicon-gift"></span>&nbsp;&nbsp;&nbsp;我的商品</a>
        </li>
        <li role="presentation"><a href="#"><span class="glyphicon glyphicon-list-alt"></span>&nbsp;&nbsp;&nbsp;我的订单</a>
        </li>
    </ul>
    <div id="right" class="container-fluid  col-lg-9  col-md-9 col-sm-8  col-xs-12">
    </div>
    <nav class="col-lg-offset-3 col-md-offset-3 col-sm-offset-4">
        <ul class="pagination" id = "pageDiv">

        </ul>
    </nav>
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
