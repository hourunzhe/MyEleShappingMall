package com.mesm.controller;

import com.mesm.model.User;
import com.mesm.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by hrz on 2016/4/11.
 */
@Controller
public class TestController {

    @Autowired
    UserRepository userRepository;

    @ResponseBody
    @RequestMapping("/test")
    public String test(){
        System.out.println("123");
        User user = new User();
        user.setAddress("123");
        user.setPhone("asdf");
        user.setRole(1);
        user.setUserName("222");
        user.setPassword("asdf");
        userRepository.save(user);
        return "6666";
    }
}
