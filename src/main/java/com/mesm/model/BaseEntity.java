package com.mesm.model;

import javax.persistence.Column;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.MappedSuperclass;
import java.util.Date;

/**
 * Created by hrz on 2016/4/12.
 */
@MappedSuperclass
@Inheritance(strategy = InheritanceType.JOINED)
//使用了继承映射策略，父类不会被持久化到数据库中但继承他
//的子类会将其属性持久化到自己的数据库中
public class BaseEntity {

    private Date creatAt;

    private Date updateAt;

    private Date deleteAt;

    @Column(name = "createAt")
    public Date getCreatAt() {
        return creatAt;
    }

    public void setCreatAt(Date creatAt) {
        this.creatAt = creatAt;
    }

    @Column(name = "deleteAt")
    public Date getDeleteAt() {
        return deleteAt;
    }

    public void setDeleteAt(Date deleteAt) {
        this.deleteAt = deleteAt;
    }

    @Column(name = "updateAt")
    public Date getUpdateAt() {
        return updateAt;
    }

    public void setUpdateAt(Date updateAt) {
        this.updateAt = updateAt;
    }
}
