package com.mesm.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by hrz on 2016/4/12.
 */
@Entity
@Table(name = "good")
public class Good extends BaseEntity {
    private String id;
    private Seller seller;
    private String goodName;
    private String description;
    private int sales;
    private float price;
    private String photo;
    private int appraiseTotal;
    private java.util.Set<Appraise> appraises = new HashSet<Appraise>();

    public Good() {
    }

    public Good(String id, String goodName, int sales, float price, String photo, int appraiseTotal) {
        this.id = id;
        this.goodName = goodName;
        this.sales = sales;
        this.price = price;
        this.photo = photo;
        this.appraiseTotal = appraiseTotal;
    }

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
    @JoinColumn(name = "sellerId")
    public Seller getSeller() {
        return seller;
    }

    public void setSeller(Seller seller) {
        this.seller = seller;
    }

    @Column(name = "goodName")
    public String getGoodName() {
        return goodName;
    }

    public void setGoodName(String goodName) {
        this.goodName = goodName;
    }
    @Column(name = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    @Column(name = "sales")
    public int getSales() {
        return sales;
    }

    public void setSales(int sales) {
        this.sales = sales;
    }
    @Column(name = "price")
    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
    @Column(name = "appraiseTotal")
    public int getAppraiseTotal() {
        return appraiseTotal;
    }

    public void setAppraiseTotal(int appraiseTotal) {
        this.appraiseTotal = appraiseTotal;
    }
    @Column(name = "photo")
    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
    @OneToMany(mappedBy = "good")
    public Set<Appraise> getAppraises() {
        return appraises;
    }

    public void setAppraises(Set<Appraise> appraises) {
        this.appraises = appraises;
    }

}
