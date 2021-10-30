package com.mps.team3.qresent.dao;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="subject_student")
@Data
public class SubjectStudent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column(name="subject_id")
    int subjectId;
    @Column(name="student_id")
    int studentId;
}
