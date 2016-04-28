<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>

<!DOCTYPE html>
<html>
<head>
    <base href="<%=basePath%>">

    <title>商品详情</title>

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
    <script src="js/showGood.js"></script>
    <script src="js/userIndex.js"></script>
    <link rel="stylesheet" href="css/showGood.css">
    <style>

    </style>
    <script type="text/javascript">
        $(document).ready(function () {

            var id = '<%=request.getParameter("goodId")%>';

            loadGood(id);
            checkLogin();
            loadCart();
            function checkLogin(){

                var user= <%=request.getSession().getAttribute("userName")%>;
                var userId = '<%=request.getSession().getAttribute("userId")%>';
                if( user != null){
                    $("#notlogin").css("display","none");
                    $("#haslogin").css("display","");
                }
                setUser(user,userId);
            };
            $("#cart").click(function (){
                if(user == null){
                    alert("请先登录!");
                    return;
                }
                $("#cartContent").slideToggle("slow");
            });


            $("#top").on("click", "#shopping", function () {
                addInCart(id);
            });
        });

    </script>
</head>
<body style="">
<div class="container-fluid">
    <div class="row" id="head">
        <div class="" id="limit"><strong style="font-size:30px;color:#337AB7">&nbsp;&nbsp;&nbsp;&nbsp;我的电商</strong>
        </div>
        <div class="" id="title" style="">商品详情</div>
        <div id = "notlogin"  style="float:right;margin-right:20px;margin-top:-45px">
            <a class="btn btn-info " href="jsp/register.jsp"style="margin-right:20px" role="button"> 注册</a>
            <a class="btn btn-info " href="jsp/login.jsp" role="button" > 登录</a>
        </div>
        <div id = "haslogin" style = "float:right; display:none;margin-right:20px;margin-top:-40px" >
            用户：<%=request.getSession().getAttribute("userName")%>&nbsp; | &nbsp;<a id = "listOrder" href = "jsp/listOrder.jsp">您的订单<span class ="glyphicon glyphicon-list-alt"></span></a>
        </div>
    </div>
    <div id="top" class="container-fluid">

    </div>
    <ul id="left"
        class="nav nav-pills nav-stacked col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2 col-sm-3 col-sm-offset-1 col-xs-12">
        <li role="presentation" class="active"><a href="#"><span class="glyphicon glyphicon-gift"></span>&nbsp;&nbsp;&nbsp;商品详情</a>
        </li>
        <li role="presentation"><a href="#"><span class="glyphicon glyphicon-comment"></span>&nbsp;&nbsp;&nbsp;顾客评论</a>
        </li>
    </ul>
    <div id="right" class="container-fluid  col-lg-9  col-md-9 col-sm-8  col-xs-12">
    </div>
    <nav class="col-lg-offset-3 col-md-offset-3 col-sm-offset-4">
        <ul class="pagination" id = "pageDiscuss">

        </ul>
    </nav>
</div>
<div id = "cartContent">
    <div id="cartHead">
        <strong>购物车</strong>
    </div>
    <div id="cartBody">
        <table class='table table-striped'>
            <thead id="thead"></thead>
            <tbody id="tbody"></tbody>
        </table>
    </div>
</div>
<div id="cart" ><span class = "glyphicon glyphicon-shopping-cart"></span></div>

<footer>
    <small>长沙理工大学计算机与通信工程学院</small>
    <br>
    <small>201258080208</small>
    <br>
    <small>侯润哲</small>
</footer>
</body>
</html>
