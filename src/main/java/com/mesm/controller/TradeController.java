package com.mesm.controller;

import com.mesm.model.Good;
import com.mesm.model.Trade;
import com.mesm.model.User;
import com.mesm.repositories.GoodRepository;
import com.mesm.repositories.TradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by hrz on 2016/4/27.
 */
@Controller
@RequestMapping(value = "/trade")
public class TradeController {
    @Autowired
    private TradeRepository tradeRepository;
    @Autowired
    private GoodRepository goodRepository;
    @ResponseBody
    @RequestMapping(value = "addCart",method = RequestMethod.POST)
    public String addCart(String userId,String goodId){
        try {
            Trade trade1 = tradeRepository.findByGoodId(goodId);
            if(trade1 == null) {
                Good good = goodRepository.findOne(goodId);
                User user = new User();
                user.setId(userId);
                Trade trade = new Trade();
                trade.setSeller(good.getSeller());
                trade.setUser(user);
                trade.setGood(good);
                trade.setCount(1);
                trade.setState(1);
                tradeRepository.save(trade);
                return "success";
            }else{
                trade1.setCount(trade1.getCount()+1);
                tradeRepository.save(trade1);
                return "success";
            }
        }catch (Exception e){
            e.printStackTrace();
            return "fail";
        }
    }


    @ResponseBody
    @RequestMapping(value = "loadCart",method = RequestMethod.POST)
    public List<Trade> loadCart(HttpServletRequest rq){
        try {
            String userId = (String) rq.getSession().getAttribute("userId");
            List<Trade> trades = tradeRepository.findByUser(userId);
            if(trades.size() == 0){
                return null;
            }else {
                return trades;
            }
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @ResponseBody
    @RequestMapping(value = "deleteCart",method = RequestMethod.POST)
    public String deleteCart(String id){
        try{
            tradeRepository.delete(id);
            return "success";
        }catch (Exception e){
            e.printStackTrace();
            return "fail";
        }
    }

    @ResponseBody
    @RequestMapping(value = "order",method = RequestMethod.POST)
    public Trade order(String id){
        try{
            Trade trade = tradeRepository.findOne(id);
            trade.setState(2);
            tradeRepository.save(trade);
            trade = tradeRepository.findById(id);
            return trade;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @ResponseBody
    @RequestMapping(value = "pay",method = RequestMethod.POST)
    public String pay(String id){
        try {
            Trade trade = tradeRepository.findOne(id);
            trade.setState(3);
            tradeRepository.save(trade);
            Good good = goodRepository.findById(trade.getGood().getId());
            good.setSales(good.getSales()+1);
            goodRepository.save(good);
            return "success";
        }catch (Exception e){
            e.printStackTrace();
            return "fail";
        }
    }

}
