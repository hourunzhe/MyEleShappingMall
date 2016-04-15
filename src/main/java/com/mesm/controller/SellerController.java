package com.mesm.controller;

import com.mesm.model.Seller;
import com.mesm.repositories.SellerRepository;
import com.mesm.util.MD5Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

/**
 * Created by hrz on 2016/4/14.
 */
@Controller
@RequestMapping(value = "/seller")
public class SellerController {
    @Autowired
    private SellerRepository sellerRepository;

    @ResponseBody
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(String userName, String password, HttpSession httpSession) {

        try {
            Seller seller = sellerRepository.findByUserNameAndPassword(userName, MD5Util.MD5(password));
            if (seller == null) {
                return "notexist";
            } else {
                httpSession.setAttribute("username", userName);
                httpSession.setAttribute("photo", seller.getPhoto());
                return "exist";
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "fail";
        }
    }

    @ResponseBody
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String register(Seller seller, HttpSession httpSession) {
        try {
            Seller existSeller = sellerRepository.findByUserName(seller.getUserName());
            if (existSeller == null) {
                seller.setPassword(MD5Util.MD5(seller.getPassword()));
                sellerRepository.save(seller);
                httpSession.setAttribute("userName", seller.getUserName());
                httpSession.setAttribute("photo", seller.getPhoto());
                return "success";
            } else {
                return "exist";
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "fail";
        }
    }

    @ResponseBody
    @RequestMapping(value = "/findInfo", method = RequestMethod.GET)
    public Seller findInfo(String sellerId) {
        try {
            Seller seller = sellerRepository.findById(sellerId);
            return seller;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @ResponseBody
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public String update(Seller seller) {
        try {
            sellerRepository.save(seller);
            return "success";
        } catch (Exception e) {
            e.printStackTrace();
            return "fail";
        }
    }
}
