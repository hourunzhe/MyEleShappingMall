<%--
  Created by IntelliJ IDEA.
  User: hrz
  Date: 2016/4/14
  Time: 10:51
  To change this template use File | Settings | File Templates.
--%>
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
    <link rel="stylesheet" href="css/register.css">
    <script src="js/register.js"></script>
</head>

<body style="">
<div class="container-fluid">
    <!--   			<div class="row">
      <div class="col-md-12"> -->
    <div class="row" id="head">
        <div class="" id="limit"><strong style="font-size:30px;color:#337AB7">&nbsp;&nbsp;&nbsp;&nbsp;我的电商</strong>
        </div>
        <div class="" id="title" style="">注册我的电商</div>
        <div class="" id="button" style="">已经有账号？<a href="jsp/login.jsp" class="btn btn-primary  " role="button">登陆</a>
        </div>
    </div>
    <!-- </div>
    </div> -->
    <form class="form-horizontal" id="form" action="user!regist.action" method="post">
        <div class="alert alert-danger col-sm-12 col-xs-12" role="alert" id="warn" style="display:none;">
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
            <label class="col-sm-2 col-xs-2 control-label " for="phone">手机号</label>
            <div class="col-sm-3 col-xs-3">
                <input type="tel" class="form-control" name="phone" id="phone" placeholder="手机号">
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
    <a href="jsp/sellerRegister.jsp" class="col-sm-offset-4 col-sm-2 col-xs-offset-4 col-xs-2 btn btn-primary "
       role="button">
        <span class="glyphicon glyphicon-home">店家注册入口</span>
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

