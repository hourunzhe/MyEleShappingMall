package com.mesm.repositories;

import com.mesm.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by hrz on 2016/4/13.
 */
public interface UserRepository extends CrudRepository<User, String> {
    //@Query("select User from user where password =?1 and username =?2")
    User findByPasswordAndUserName(String password, String userName);

    User findByUserName(String userName);
}
