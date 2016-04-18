package com.mesm.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by hrz on 2016/4/15.
 */
@Controller
@RequestMapping(value = "/file")
public class FileController {
    @ResponseBody
    @RequestMapping(value = "/upload")
    public String processUpload(MultipartFile file, HttpServletRequest rq) throws IOException {

        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd_HH_mm_ss");
        String time = sdf.format(date);
        String path = rq.getServletContext().getRealPath("/") + "uploadPicture" + "\\" + time + ".jpg";
        /*FileOutputStream op = new FileOutputStream(path);
        InputStream is = file.getInputStream();
        byte[] buffer = new byte[1024 * 1024];
        int bytesum = 0;
        int byteread = 0;
        while ((byteread = is.read(buffer)) != -1) {
            bytesum += byteread;
            op.write(buffer, 0, byteread);
            op.flush();
        }
        op.close();
        is.close();*/
        File newFile = new File(path);
        file.transferTo(newFile);
        return time + ".jpg";
    }
}
