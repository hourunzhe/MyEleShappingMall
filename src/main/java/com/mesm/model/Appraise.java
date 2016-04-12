package com.mesm.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

/**
 * Created by hrz on 2016/4/12.
 */
@Entity
@Table(name = "appraise")
public class Appraise extends BaseEntity{
    private String id;
    private Good good;
    private User user;
    private Seller seller;
    private String content;
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
    @Column(name = "content")
    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
