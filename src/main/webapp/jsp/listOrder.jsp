<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>

<!DOCTYPE html>
<html>
<head>
    <base href="<%=basePath%>">

    <title>全部订单</title>

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
    <script src="js/listOrder.js"></script>
    <link rel="stylesheet" href="css/listOrder.css">
    <style>

    </style>
    <script type="text/javascript">
        $(document).ready(function () {
            loadOrderForUser(1);
        });


    </script>
</head>
<body style="">
<div class="container-fluid">
    <div class="row" id="head">
        <div class="" id="limit"><strong style="font-size:30px;color:#337AB7">&nbsp;&nbsp;&nbsp;&nbsp;我的电商</strong>
        </div>
        <div class="" id="title" style="">全部订单</div>
    </div>
    <h1><strong>您的订单：</strong></h1>
    <table style = 'margin-top: 10px' class='table table-bordered'>
        <thead id="thead">
        <tr>
            <th>宝贝</th>
            <th>单价（元）</th>
            <th>数量</th>
            <th>实付款</th>
            <th>下单时间</th>
            <th>交易状态</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody id="tbody">

        </tbody>
    </table>
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
