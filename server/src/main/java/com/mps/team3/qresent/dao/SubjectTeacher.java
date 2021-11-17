package com.mps.team3.qresent.dao;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="subject_teacher")
@Data
public class SubjectTeacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column(name="subject_id")
    int subjectId;
    @Column(name="teacher_id")
    int teacherId;
}
