package com.mesm.model;

import javax.persistence.Column;
import java.util.Date;

/**
 * Created by hrz on 2016/4/12.
 */
public class BaseEntity {
    @Column(name = "createAt")
    private Date creatAt;
    @Column(name = "updateAt")
    private Date updateAt;
    @Column(name = "deleteAt")
    private Date deleteAt;
}
