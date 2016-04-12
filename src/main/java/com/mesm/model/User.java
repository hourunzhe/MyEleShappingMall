package com.mesm.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by hrz on 2016/4/12.
 */
@Entity
@Table(name = "user")
public class User extends BaseEntity{
    private String id;
    private String userName;
    private int role;
    private String address;
    private String phone;
    private Set<Trade> trades = new HashSet<Trade>();
    private Set<Appraise> appraises = new HashSet<Appraise>();
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
    @Column(name = "username")
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
    @Column(name = "role")
    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }
    @Column(name = "address")
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
    @Column(name = "phone")
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
    @OneToMany(mappedBy = "user")
    public Set<Trade> getTrades() {
        return trades;
    }

    public void setTrades(Set<Trade> trades) {
        this.trades = trades;
    }
    @OneToMany(mappedBy = "user")
    public Set<Appraise> getAppraises() {
        return appraises;
    }

    public void setAppraises(Set<Appraise> appraises) {
        this.appraises = appraises;
    }
}
