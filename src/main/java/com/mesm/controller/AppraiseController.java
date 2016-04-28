package com.mesm.controller;

import com.mesm.model.Appraise;
import com.mesm.model.Good;
import com.mesm.model.Trade;
import com.mesm.model.User;
import com.mesm.repositories.AppraiseRepository;
import com.mesm.repositories.GoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by hrz on 2016/4/28.
 */
@Controller
@RequestMapping(value = "/appraise")
public class AppraiseController {
    @Autowired
    private GoodRepository goodRepository;
    @Autowired
    private AppraiseRepository appraiseRepository;

    @ResponseBody
    @RequestMapping(value = "add",method = RequestMethod.POST)
    public String add(String goodId, String content, HttpServletRequest rq){
        try {
            String userId = (String) rq.getSession().getAttribute("userId");
            User user = new User();
            user.setId(userId);
            Good good = goodRepository.findOne(goodId);
            good.setAppraiseTotal(good.getAppraiseTotal() + 1);
            goodRepository.save(good);
            Appraise appraise = new Appraise();
            appraise.setContent(content);
            appraise.setSeller(good.getSeller());
            appraise.setGood(good);
            appraise.setUser(user);
            appraiseRepository.save(appraise);
            return "success";
        }catch (Exception e){
            e.printStackTrace();
            return "fail";
        }

    }

    @ResponseBody
    @RequestMapping(value = "loadForGood",method = RequestMethod.POST)
    public Map<String,Object> loadForGood(String goodId,int page, HttpServletRequest rq){
        try{
            int count = appraiseRepository.countForGood(goodId);
            int pageCount = (int)Math.ceil((double)count/10);

            if(page > pageCount){
                page = pageCount;
            }
            if(page <= 0){
                page = 1;
            }
            PageRequest pageRequest = new PageRequest(page-1,10);
            Page<Appraise> appraises = appraiseRepository.findForGood(goodId,pageRequest);
            Map<String,Object> map = new HashMap<String,Object>();
            map.put("page",page);
            map.put("pageCount",pageCount);
            map.put("appraises",appraises.getContent());
            return map;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
}
