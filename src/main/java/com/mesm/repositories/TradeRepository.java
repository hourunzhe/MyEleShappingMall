package com.mesm.repositories;

import com.mesm.model.Trade;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by hrz on 2016/4/27.
 */
public interface TradeRepository extends CrudRepository<Trade,String>{
    @Query("Select new Trade(id,t.good.id,t.good.price,t.good.photo,t.good.goodName,t.count)" +
            "from Trade t where t.user.id =?1 and t.state=1")
    List<Trade> findByUser(String userId);
    @Query("Select t " +
            "from Trade t where t.good.id =?1 and t.state=1")
    Trade findByGoodId(String goodId);
    @Query("Select new Trade(id,t.good.id,t.good.price,t.good.photo,t.good.goodName,t.count,t.updateAt,t.state)" +
            "from Trade t where t.id =?1")
    Trade findById(String id);
    @Query("select count(id) from Trade t where t.user.id =?1 and t.state <> 1 and t.deleteAt = null ")
    int findCountForUser(String userId);
    @Query("Select new Trade(id,t.good.id,t.good.price,t.good.photo,t.good.goodName,t.count,t.updateAt,t.state) " +
            "from Trade t where t.user.id =?1 and t.state <> 1 and t.deleteAt = null ORDER BY t.state asc,t.updateAt desc")
    Page<Trade> findForUser(String userId, Pageable pageRequest);
    @Query("select count(id) from Trade t where t.seller.id =?1 and t.state <> 1 ")
    int findCountForSeller(String sellerId);
    @Query("Select new Trade(id,t.good.id,t.good.price,t.good.photo,t.good.goodName,t.count,t.updateAt,t.state,t.user.address) " +
            "from Trade t where t.seller.id =?1 and t.state <> 1 ORDER BY t.state asc,t.updateAt desc")
    Page<Trade> findForSeller(String sellerId, Pageable pageRequest);
}
