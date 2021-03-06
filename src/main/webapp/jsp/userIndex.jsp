<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <base href="<%=basePath%>">

    <title>My JSP 'showSeller.jsp' starting page</title>

    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
    <meta http-equiv="description" content="This is my page">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <!-- 可选的Bootstrap主题文件（一般不用引入） -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap-theme.min.css">

    <!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
    <script src="bootstrap/js/jquery.min.js"></script>

    <!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <script src="js/userIndex.js"></script>
    <script src="js/masonry.js"></script>
    <script src="js/imagesLoaded.js"></script>
    <link rel="stylesheet" href="css/userIndex.css">

</head>
<script type="text/javascript">
    $(document).ready(function(){

        checklogin();
        loadCart();
        function checklogin(){

            var user= <%=request.getSession().getAttribute("userName")%>;
            var userId = '<%=request.getSession().getAttribute("userId")%>';
            if( user != null){
                $("#notlogin").css("display","none");
                $("#haslogin").css("display","");
            }
            setUser(user,userId);
        };


        /*==================  */
        $("#type").change(function() {

            loadGoods("good/listGoodByType?page=",$("#type").val(),1);
        });

        $("#cart").click(function (){
            if(user == null){
                alert("请先登录!");
                return;
            }
           $("#cartContent").slideToggle("slow");
        });
        /*=======================  */
        $("#search").click(function(){

            loadGoods("good/listGoodBySearch?page=",$("#searchContent").val(),1);
        });
    });
</script>
<body>
<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid"  id ="nav">
        <div class="navbar-text" id = "title"><strong>我的电商</strong></div>
        <form class="navbar-form navbar-left" role="search">
            <div class="form-group">
                <label for="type" style = "color:white"  class="control-label">商品类别</label>

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

            <div class="form-group">
                <label  for="searchContent" class="control-label">搜索</label>
                <input type="text" class="form-control" placeholder="搜索" id ="searchContent">
            </div>

        </form>
        <a class="btn btn-info navbar-btn" role="button" id="search"> <span class="glyphicon glyphicon-search" aria-hidden="true"></span></a>
        <div id = "notlogin" class="navbar-right" style="margin-right:20px">
            <a class="btn btn-info navbar-btn" href="jsp/register.jsp"style="margin-right:20px" role="button"> 注册</a>
            <a class="btn btn-info navbar-btn" href="jsp/login.jsp" role="button" > 登录</a>
        </div>
        <div id = "haslogin" style = "display:none;margin-right:20px;color:white" class="navbar-text navbar-right">
            用户：<%=request.getSession().getAttribute("userName")%>&nbsp;| &nbsp;<a id = "listOrder" href = 'user/logout'>注销</a>&nbsp; | &nbsp;<a id = "listOrder" href = "jsp/listOrder.jsp">您的订单<span class ="glyphicon glyphicon-list-alt"></span></a>
        </div>
    </div>

</nav>
<div id="content" class = "masonry-container" style="margin-top: 50px" class="container-fluid"></div>
<nav class="" style ="width:1000px">
    <ul class="pagination" id = "pageDiv">

    </ul>
</nav>
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
<footer><small>长沙理工大学计算机与通信工程学院</small><br>
    <small>201258080208</small><br>
    <small>侯润哲</small>
</footer>
</body>
</html>
