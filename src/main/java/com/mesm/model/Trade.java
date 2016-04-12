package com.mesm.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

/**
 * Created by hrz on 2016/4/12.
 */
@Entity
@Table(name = "trade")
public class Trade extends BaseEntity{
    private String id;
    private Good good;
    private User user;
    private Seller seller;
    private int state;
    private int count;
    @Id
    @Column(name = "id")
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid")
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    @ManyToOne
    @JoinColumn(name = "goodId")
    public Good getGood() {
        return good;
    }

    public void setGood(Good good) {
        this.good = good;
    }
    @ManyToOne
    @JoinColumn(name = "userId")
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
    @ManyToOne
    @JoinColumn(name = "sellerId")
    public Seller getSeller() {
        return seller;
    }

    public void setSeller(Seller seller) {
        this.seller = seller;
    }
    @Column(name = "state")
    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }
    @Column(name = "count")
    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
