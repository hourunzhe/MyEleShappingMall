package com.mesm.repositories;

import com.mesm.model.Seller;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by hrz on 2016/4/15.
 */
public interface SellerRepository extends CrudRepository<Seller, String> {
    Seller findByUserName(String username);

    Seller findByUserNameAndPassword(String username, String password);

    @Query("select new Seller(id,userName,sellerName,password,phone,photo,type,address) from Seller where id=?1")
    Seller findById(String sellerId);
}
