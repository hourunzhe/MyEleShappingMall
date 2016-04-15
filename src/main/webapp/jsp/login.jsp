<%--
  Created by IntelliJ IDEA.
  User: hrz
  Date: 2016/4/14
  Time: 18:06
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
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
    <script src="js/login.js"></script>
    <style>
        footer {
            color: #999;
            text-align: center;
            font-size: 12px;
            font-family: initial;
            margin-top: 70px;
        }
    </style>
</head>

<body style="">
<div class="container " style="width:300px;vertical-align: middle;margin-top:70px">
    <form class="form-signin" id="loginform" action="user!login.action" method="post">
        <h2 class="form-signin-heading"><strong>我的电商</strong></h2>
        <div class="alert alert-danger col-sm-12 col-xs-1 " id="warn" role="alert" style="display:none">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span id="errorcontent"></span>
        </div>
        <div class="form-group">
            <label class="control-label sr-only" for="username">用户名</label>
            <input type="text" class="form-control" id="username" name="userName" placeholder="用户名"
                   aria-describedby="inputSuccess2Status">
            <!-- <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>  -->
            <!-- <span id="inputSuccess2Status" class="sr-only">(success)</span> -->
        </div>
        <div class="form-group ">
            <label class="control-label sr-only" for="password">密码</label>
            <input type="password" class="form-control" name="password" id="password" placeholder="密码"
                   aria-describedby="inputWarning2Status">
            <!--  <span class="glyphicon glyphicon-warning-sign form-control-feedback" aria-hidden="true"></span> -->
            <!-- <span id="inputWarning2Status" class="sr-only">(warning)</span> -->
        </div>

        <div class="form-group ">
            <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio" value="user" checked> 我要购物
            </label>
            <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio" value="seller"> 我是商家
            </label>
        </div>
    </form>
    <button type="button " id="login" onclick="javascript:void(0)" class="btn btn-primary col-xs-5 col-sm-5">登陆</button>
    <button type="button " id="regist" class="btn btn-primary col-xs-5 col-xs-offset-2 col-sm-offset-2 col-sm-5">注册
    </button>
    <span id="errorMess"></span>
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
