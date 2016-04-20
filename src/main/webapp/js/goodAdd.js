/**
 * Created by hrz on 2016/4/19.
 */
$(document).ready(function () {
    var price;
    var goodName;
    var description;
    var path;
    $("#price").change(function(){
        var num = $("#price").val();
        if(num < 0 || isNaN(num)){
            $("#price").val(0);
        }
    });

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
                    path = data;
                    $("#warn").css("display", "none");
                },
                error: function (data) {

                }
            }
        )
    });
    $("#return").click(function(){
        location.href="jsp/sellerIndex.jsp";
    });
    $("#submit").click(function(){
        price = $("#price").val();
        goodName = $("#goodName").val();
        description = UM.getEditor('description').getContent();
        if(path == null){
            $("#errorcontent").html("请上传商品图片！");
            $("#warn").removeClass().addClass("alert alert-danger col-sm-12 col-xs-12");
            $("#warn").css("display", "");
            return ;
        }
        if(goodName == null || goodName==""){
            $("#errorcontent").html("请输入商品名称！");
            $("#warn").removeClass().addClass("alert alert-danger col-sm-12 col-xs-12");
            $("#warn").css("display", "");
            return ;
        }
        if(price == ""){
            $("#errorcontent").html("价格请输入数字！");
            $("#warn").removeClass().addClass("alert alert-danger col-sm-12 col-xs-12");
            $("#warn").css("display", "");
            return ;
        }
        if(description == null||description==""){
            $("#errorcontent").html("请添加商品描述！");
            $("#warn").removeClass().addClass("alert alert-danger col-sm-12 col-xs-12");
            $("#warn").css("display", "");
            return ;
        }
        var good = {
            goodName:goodName,
            price:price,
            photo:path,
            description:description,
        };
        $.ajax({
            url:"good/add",
            data:good,
            method:"post",
            success: function(data){
                if(data == "success") {
                    $("#errorcontent").html("商品添加成功！");
                    $("#warn").removeClass().addClass("alert alert-success col-sm-12 col-xs-12");
                    $("#warn").css("display", "");
                }else{
                    $("#errorcontent").html("商品添加失败！");
                    $("#warn").removeClass().addClass("alert alert-danger col-sm-12 col-xs-12");
                    $("#warn").css("display", "");
                }
            }
    });
    });

});
