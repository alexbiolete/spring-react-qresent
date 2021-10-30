package com.mps.team3.qresent.dao;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="attendance")
@Data
public class Attendance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column(name="course_id")
    int courseId;
    @Column(name="student_id")
    int studentId;
}
