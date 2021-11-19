package com.mps.team3.qresent.service;

import com.mps.team3.qresent.dao.Student;
import com.mps.team3.qresent.dao.Subject;
import com.mps.team3.qresent.dao.SubjectTeacher;
import com.mps.team3.qresent.repository.SubjectTeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubjectTeacherService {
    @Autowired
    SubjectTeacherRepository subjectTeacherRepository;

    public List<SubjectTeacher> findAll() {
        return subjectTeacherRepository.findAll();
    }

    public SubjectTeacher getById(int id) {
        return subjectTeacherRepository.findById(id).get();
    }

    public SubjectTeacher save(SubjectTeacher subjectTeacher){
        return subjectTeacherRepository.save(subjectTeacher);
    }

    public SubjectTeacher delete(int subjectTeacherId){
        SubjectTeacher subjectTeacher = getById(subjectTeacherId);
        subjectTeacherRepository.delete(subjectTeacher);
        return subjectTeacher;
    }
}
