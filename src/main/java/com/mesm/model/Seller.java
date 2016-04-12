package com.mesm.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by hrz on 2016/4/12.
 */
@Entity
@Table(name = "seller")
public class Seller extends BaseEntity {
    private String id;
    private String sellerName;
    private String password;
    private String phone;
    private String photo;
    private Set<Trade> trades = new HashSet<Trade>();
    private Set<Appraise> appraises = new HashSet<Appraise>();
    private Set<Good> goods = new HashSet<Good>();
    @Id
    @Column(name = "id")
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid",strategy = "uuid")
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    @Column(name = "sellername")
    public String getSellerName() {
        return sellerName;
    }

    public void setSellerName(String sellerName) {
        this.sellerName = sellerName;
    }
    @Column(name = "password")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    @Column(name = "phone")
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
    @Column(name = "photo")
    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
    @OneToMany(mappedBy = "seller")
    public Set<Trade> getTrades() {
        return trades;
    }

    public void setTrades(Set<Trade> trades) {
        this.trades = trades;
    }
    @OneToMany(mappedBy = "seller")
    public Set<Appraise> getAppraises() {
        return appraises;
    }

    public void setAppraises(Set<Appraise> appraises) {
        this.appraises = appraises;
    }
    @OneToMany(mappedBy = "seller")
    public Set<Good> getGoods() {
        return goods;
    }

    public void setGoods(Set<Good> goods) {
        this.goods = goods;
    }
}
