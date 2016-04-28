package com.mesm.repositories;

import com.mesm.model.Appraise;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by hrz on 2016/4/28.
 */
public interface AppraiseRepository extends CrudRepository<Appraise,String>{
    @Query("select count(a.id) from Appraise a where good.id=?1")
    int countForGood(String goodId);
    @Query("select new Appraise(a.id,a.user.userName,a.content,a.creatAt) " +
            "from Appraise a where a.good.id=?1 order by a.creatAt DESC ")
    Page<Appraise> findForGood(String goodId, Pageable pageRequest);
}
