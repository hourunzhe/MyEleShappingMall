package com.mesm.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by hrz on 2016/4/11.
 */
@Controller
public class TestController {
    @ResponseBody
    @RequestMapping("/test")
    public String test(){
        System.out.println("123");
        return "6666";
    }
}
