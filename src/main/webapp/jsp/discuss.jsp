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
    <link href="ueditor/themes/default/css/umeditor.min.css" type="text/css" rel="stylesheet">

    <!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
    <script src="bootstrap/js/jquery.min.js"></script>
    <%--<script type="text/javascript" src="ueditor/third-party/jquery.min.js"></script>--%>
    <!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <script src="js/discuss.js"></script>
    <link rel="stylesheet" href="css/discuss.css">

    <!-- 配置文件 -->
    <script type="text/javascript" src="ueditor/umeditor.config.js"></script>
    <!-- 编辑器源码文件 -->
    <script type="text/javascript" src="ueditor/umeditor.js"></script>
    <script type="text/javascript" src="ueditor/umeditor.min.js"></script>
    <script type="text/javascript" src="ueditor/lang/zh-cn/zh-cn.js"></script>

    <style>

    </style>
    <script type="text/javascript">
        $(document).ready(function () {
            var tradeId = '<%=request.getParameter("tradeId")%>';
             loadGoodInfo(tradeId);
            $("#submit").click(function () {
                submit();
            });
            $("#return").click(function () {
                location.href="jsp/listOrder.jsp"
            })
        });
    </script>
</head>
<body style="">
<div class="container-fluid">
    <div class="row" id="head">
        <div class="" id="limit"><strong style="font-size:30px;color:#337AB7">&nbsp;&nbsp;&nbsp;&nbsp;我的电商</strong>
        </div>
        <div class="" id="title" style="">商品评论</div>
    </div>
    <!-- 实例化编辑器 -->
    <div id="goodInfo">

    </div>
    <textarea id="description" name="description" type="text/plain" value="">
     </textarea>
    <script type="text/javascript">
        var um = UM.getEditor('description', {
            initialFrameWidth: 600,
            initialFrameHeight: 200,
            imageScaleEnabled: false,
            toolbar: [
                'undo redo | emotion',
            ]
        })
    </script>
    <div class="col-sm-1 col-xs-1" style="margin-top: 10px">
        <button type="submit" id="submit" class="btn btn-primary"><span class="glyphicon glyphicon-floppy-disk"></span>
        </button>
    </div>
    <div class=" col-sm-1 col-xs-1" style="margin-top: 10px">
        <button type="submit" id="return" class="btn btn-primary"><span class="glyphicon glyphicon-arrow-left"></span>
            &nbsp;&nbsp;返回
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
