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
    @Query("select count(id) from Good as g where g.seller.userName =?1  ")
    int findAllForSeller(String userName);
    @Query("select new Good(id,goodName,sales,price,photo,appraiseTotal) " +
            "from Good as g where g.seller.userName =?1 ")
    Page<Good> findForSeller(String userName, Pageable pageRequest);
}
