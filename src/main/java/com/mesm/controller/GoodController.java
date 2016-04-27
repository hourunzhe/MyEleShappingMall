package com.mesm.controller;

import com.mesm.model.Good;
import com.mesm.model.Seller;
import com.mesm.repositories.GoodRepository;
import com.mesm.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
            good.setSales(0);
            good.setAppraiseTotal(0);
            goodRepository.save(good);
            return "success";
        } catch (Exception e) {
            e.printStackTrace();
            return "fail";
        }
    }

    @ResponseBody
    @RequestMapping(value = "/showForSeller", method = RequestMethod.GET)
    public Map<String ,Object> findForSeller(int page,HttpServletRequest rq){
        try {
            String userName = (String)rq.getSession().getAttribute("userName");
            int count = goodRepository.findAllForSeller(userName);
            int pageCount = (int)Math.ceil((double)count/9);

            if(page > pageCount){
                page = pageCount;
            }
            if(page <= 0){
                page = 1;
            }
            PageRequest pageRequest = new PageRequest(page-1,9);
            Page<Good> goods = goodRepository.findForSeller(userName,pageRequest);
            Map<String,Object> map = new HashMap<String,Object>();
            map.put("page",page);
            map.put("pageCount",pageCount);
            map.put("goods",goods.getContent());
            return map;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @ResponseBody
    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public String delete(String id){
        try{
            goodRepository.delete(id);
            return "success";
        } catch (Exception e) {
            e.printStackTrace();
            return "fail";
        }
    }

    @ResponseBody
    @RequestMapping(value = "/listGoodByType", method = RequestMethod.POST)
    public Map<String ,Object> listByType(String content,int page,HttpServletRequest rq){
        try {

            int count = goodRepository.findCountBytype(content);
            int pageCount = (int)Math.ceil((double)count/12);

            if(page > pageCount){
                page = pageCount;

            }
            if(page <= 0){
                page = 1;
            }
            PageRequest pageRequest = new PageRequest(page-1,12);
            Page<Good> goods = goodRepository.findByType(content,pageRequest);
            Map<String,Object> map = new HashMap<String,Object>();
            map.put("page",page);
            map.put("pageCount",pageCount);
            map.put("goods",goods.getContent());
            return map;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @ResponseBody
    @RequestMapping(value = "/listGoodBySearch", method = RequestMethod.POST)
    public Map<String ,Object> listBySearch(String content,int page,HttpServletRequest rq){
        try {

            int count = goodRepository.findCountBySearch("%"+content+"%");
            int pageCount = (int)Math.ceil((double)count/12);
            if(page > pageCount){
                page = pageCount;
            }
            if(page <= 0){
                page = 1;
            }
            PageRequest pageRequest = new PageRequest(page-1,12);
            Page<Good> goods = goodRepository.findBySearch("%"+content+"%",pageRequest);
            Map<String,Object> map = new HashMap<String,Object>();
            map.put("page",page);
            map.put("pageCount",pageCount);
            map.put("goods",goods.getContent());
            return map;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @ResponseBody
    @RequestMapping(value = "/listGoodAll", method = RequestMethod.POST)
    public Map<String ,Object> listAll(int page,HttpServletRequest rq){
        try {

            int count = goodRepository.findCount();
            int pageCount = (int)Math.ceil((double)count/12);
            if(page > pageCount){
                page = pageCount;
            }
            if(page <= 0){
                page = 1;
            }
            PageRequest pageRequest = new PageRequest(page-1,12);
            Page<Good> goods = goodRepository.findAllGoods(pageRequest);
            Map<String,Object> map = new HashMap<String,Object>();
            map.put("page",page);
            map.put("pageCount",pageCount);
            map.put("goods",goods.getContent());
            return map;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @ResponseBody
    @RequestMapping(value = "/showGood", method = RequestMethod.POST)
    public Good showGood(String id){
        try{
            Good good = goodRepository.findById(id);
            return good;
        }catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
