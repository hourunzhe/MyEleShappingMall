package com.mesm.controller;

import com.mesm.model.Good;
import com.mesm.model.Seller;
import com.mesm.repositories.GoodRepository;
import com.mesm.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by hrz on 2016/4/18.
 */
@Controller
@RequestMapping(value = "/good")
public class GoodController {
    @Autowired
    private GoodRepository goodRepository;
    @Autowired
    private SellerRepository sellerRepository;

    @ResponseBody
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public String add(Good good, HttpServletRequest rq) {
        try {
            String userName = (String) rq.getSession().getAttribute("userName");
            Seller seller = sellerRepository.findByUserName(userName);
            good.setSeller(seller);
            good.setPrice(0);
            good.setAppraiseTotal(0);
            goodRepository.save(good);
            return "success";
        } catch (Exception e) {
            e.printStackTrace();
            return "fail";
        }


    }
}
