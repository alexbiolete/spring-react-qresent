package com.mps.team3.qresent.dao;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="user")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column(name="name")
    String name;
    @Column(name="email")
    String email;
    @Column(name="username")
    String username;
    @Column(name="password")
    String password;
    @Column(name="role")
    String role;
}
