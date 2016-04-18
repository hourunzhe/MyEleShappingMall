package com.mesm.repositories;

import com.mesm.model.Good;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by hrz on 2016/4/18.
 */
public interface GoodRepository extends CrudRepository<Good, String> {
}
