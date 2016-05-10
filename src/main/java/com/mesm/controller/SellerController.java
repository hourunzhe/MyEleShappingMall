package com.mesm.controller;

import com.mesm.model.Seller;
import com.mesm.repositories.SellerRepository;
import com.mesm.util.MD5Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
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
    public String login(String userName, String password, HttpServletRequest rq) {

        try {
            Seller seller = sellerRepository.findByUserNameAndPassword(userName, MD5Util.MD5(password));
            if (seller == null) {
                return "notexist";
            } else {
                rq.getSession().setAttribute("sellerId", seller.getId());
                rq.getSession().setAttribute("userName", userName);
                rq.getSession().setAttribute("photo", seller.getPhoto());
                return "exist";
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "fail";
        }
    }

    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    public String logout(HttpServletRequest rq) {

        try {
            rq.getSession().removeAttribute("sellerId");
            rq.getSession().removeAttribute("userName");
            rq.getSession().removeAttribute("photo");
            return "login";

        } catch (Exception e) {
            e.printStackTrace();
            return "fail";
        }
    }

    @ResponseBody
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String register(Seller seller, HttpServletRequest rq) {
        try {
            Seller existSeller = sellerRepository.findByUserName(seller.getUserName());
            if (existSeller == null) {
                seller.setPassword(MD5Util.MD5(seller.getPassword()));
                sellerRepository.save(seller);
                rq.getSession().setAttribute("sellerId", seller.getId());
                rq.getSession().setAttribute("userName", seller.getUserName());
                rq.getSession().setAttribute("photo", seller.getPhoto());
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
    @RequestMapping(value = "/load", method = RequestMethod.POST)
    public Seller load(String sellerName) {
        try {
            Seller seller = sellerRepository.findBySellerName(sellerName);
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
