package com.mps.team3.qresent.service;

import com.mps.team3.qresent.dao.Student;
import com.mps.team3.qresent.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    StudentRepository studentRepository;

    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    public Student getById(int id) {
        return studentRepository.findById(id).get();
    }

    public Student save(Student student){
        return studentRepository.save(student);
    }

    public Student delete(int studentId){
        Student student = getById(studentId);
        studentRepository.delete(student);
        return student;
    }

}
