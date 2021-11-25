package com.mps.team3.qresent.dao;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="subject_user")
@Data
public class SubjectUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column(name="subject_id")
    int subjectId;
    @Column(name="user_id")
    int userId;
    @Column(name="user_role")
    String userRole;
}
