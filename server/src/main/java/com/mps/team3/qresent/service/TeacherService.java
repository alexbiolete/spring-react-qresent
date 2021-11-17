package com.mps.team3.qresent.service;

import com.mps.team3.qresent.dao.Teacher;
import com.mps.team3.qresent.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {
    @Autowired
    TeacherRepository teacherRepository;

    public List<Teacher> findAll() {
        return teacherRepository.findAll();
    }

    public Teacher getById(int id) {
        return teacherRepository.findById(id).get();
    }

    public Teacher save(Teacher teacher){
        return teacherRepository.save(teacher);
    }

    public Teacher delete(int teacherId){
        Teacher teacher = getById(teacherId);
        teacherRepository.delete(teacher);
        return teacher;
    }
}
