package com.mesm.repositories;

import com.mesm.model.Good;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by hrz on 2016/4/18.
 */
public interface GoodRepository extends CrudRepository<Good, String> {
    @Query("select count(id) from Good as g where g.seller.userName =?1 and deleteAt = null ")
    int findAllForSeller(String userName);
    @Query("select new Good(id,goodName,sales,price,photo,appraiseTotal) " +
            "from Good as g where g.seller.userName =?1 and deleteAt = null order by g.creatAt desc ")
    Page<Good> findForSeller(String userName, Pageable pageRequest);
    @Query("select count(id) from Good as g where g.seller.type =?1 and deleteAt = null ")
    int findCountBytype(String type);
    @Query("select new Good(id,goodName,sales,price,photo,appraiseTotal) " +
            "from Good as g where g.seller.type =?1 and deleteAt = null order by g.creatAt desc ")
    Page<Good> findByType(String type, Pageable pageRequest);
    @Query("select count(id)" +
            "    from Good as g where g.goodName like ?1 and deleteAt = null")
    int findCountBySearch(String search);
    @Query("select new Good(id,goodName,sales,price,photo,appraiseTotal) " +
            "from Good as g where g.goodName like ?1 and deleteAt = null order by g.creatAt desc ")
    Page<Good> findBySearch(String search, Pageable pageRequest);
    @Query("select count(id) from Good as g where g.deleteAt = null")
    int findCount();
    @Query("select new Good(id,goodName,sales,price,photo,appraiseTotal) " +
            "from Good as g where g.deleteAt = null order by g.creatAt desc ")
    Page<Good> findAllGoods(Pageable pageRequest);
    @Query("select new Good(id,goodName,sales,price,photo,appraiseTotal,description,g.seller.sellerName) " +
            "from Good as g where g.id=?1 and deleteAt = null")
    Good findById(String id);
}
