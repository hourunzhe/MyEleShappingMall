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
   <%-- <script src="bootstrap/js/jquery.min.js"></script>--%>
    <script type="text/javascript" src="ueditor/third-party/jquery.min.js"></script>
    <!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <script src="js/goodAdd.js"></script>
    <link rel="stylesheet" href="css/goodAdd.css">

    <!-- 配置文件 -->
    <script type="text/javascript" src="ueditor/umeditor.config.js"></script>
    <!-- 编辑器源码文件 -->
    <script type="text/javascript" src="ueditor/umeditor.js"></script>
    <script type="text/javascript" src="ueditor/umeditor.min.js"></script>
    <script type="text/javascript" src="ueditor/lang/zh-cn/zh-cn.js"></script>

    <script src="bootstrap/js/ajaxfileupload.js"></script>
    <style>

    </style>
    <script type="text/javascript">

    </script>
</head>
<body style="">
<div class="container-fluid">
    <div class="row" id="head">
        <div class="" id="limit"><strong style="font-size:30px;color:#337AB7">&nbsp;&nbsp;&nbsp;&nbsp;我的电商</strong>
        </div>
        <div class="" id="title" style="">商品添加</div>
    </div>
    <form class="form-horizontal" id="form" action="" method="post">
        <div class="alert alert-danger col-sm-12 col-xs-12" role="alert" id="warn" style="display:none;">
            <!-- <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> -->
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span id="errorcontent"></span>
        </div>
        <div class="form-group" style="margin-top:30px">
            <label for="file" class="col-sm-2 control-label col-xs-2">商品照片</label>
            <div class="col-sm-3 col-xs-10">
                <input type="file" class="form-control" id="file" name="file" required>
            </div>

        </div>

        <div class="form-group">
            <label class="col-sm-2 col-xs-2 control-label " for="goodName">商品名称</label>
            <div class="col-sm-3 col-xs-10">
                <input type="text" class="form-control" name="goodName" id="goodName" >
            </div>
        </div>

        <div class="form-group">
            <label class="col-sm-2 col-xs-2 control-label " for="price">商品价格<span class = "glyphicon glyphicon-yen"></span></label>
            <div class="col-sm-3 col-xs-10">
                <input type="number" value="0" class="form-control" name="price" id="price">
            </div>
        </div>
    <!-- 加载编辑器的容器 -->
        <div class="form-group">
            <label class="col-sm-2 col-xs-2 control-label " for="description">商品详细描述</label>
            <div class="col-sm-10 col-xs-10">
                <textarea id="description"  name="description" type="text/plain" value="">
                </textarea>
            </div>
        </div>
    <!-- 实例化编辑器 -->
    <script type="text/javascript">
        var um = UM.getEditor('description',{
            initialFrameWidth :1000,
            initialFrameHeight:300,
            imageScaleEnabled:false,
            toolbar:[
            'source | undo redo | bold italic underline strikethrough | superscript subscript | forecolor backcolor | removeformat |',
            'insertorderedlist insertunorderedlist | selectall cleardoc paragraph | fontfamily fontsize' ,
            '| justifyleft justifycenter justifyright justifyjustify |',
            'link unlink | emotion image |',
            '| horizontal print preview fullscreen', 'drafts', 'formula'
        ]
        })
    </script>
    </form>
    <div class="col-sm-offset-2 col-sm-3 col-xs-offset-2 col-xs-3">
        <button type="submit" id="submit" class="btn btn-primary"><span class="glyphicon glyphicon-floppy-disk"></span>
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
