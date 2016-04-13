package com.mesm.controller;

import com.mesm.model.User;
import com.mesm.repositories.UserRepository;
import com.mesm.util.MD5Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

/**
 * Created by hrz on 2016/4/13.
 */
@Controller
@RequestMapping(value = "/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @ResponseBody
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(String password, String userName, HttpSession httpSession) {
        try {
            User user = userRepository.findByPasswordAndUserName(MD5Util.MD5(password), userName);
            if (user == null) {
                return "fail";
            } else {
                httpSession.setAttribute("userName", userName);
                return "success";
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "fail";
        }
    }

    @ResponseBody
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String register(User user, HttpSession httpSession) {
        try {
            User oldUser = userRepository.findByUserName(user.getUserName());
            if (oldUser == null) {
                user.setPassword(MD5Util.MD5(user.getPassword()));
                userRepository.save(user);
                httpSession.setAttribute("userName", user.getUserName());
                return "success";
            } else {
                return "haveOne";
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "fail";
        }
    }
}