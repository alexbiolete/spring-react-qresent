package com.mps.team3.qresent.service;

import com.mps.team3.qresent.dao.Subject;
import com.mps.team3.qresent.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubjectService {
    @Autowired
    SubjectRepository subjectRepository;

    public List<Subject> findAll() {
        return subjectRepository.findAll();
    }

    public Subject getById(int id) {
        return subjectRepository.findById(id).get();
    }

    public Subject save(Subject subject){
        return subjectRepository.save(subject);
    }

    public Subject delete(int subjectId){
        Subject subject = getById(subjectId);
        subjectRepository.delete(subject);
        return subject;
    }

    public List<Subject> findAllSubjectByTeacherId(int teacherId) {
        return subjectRepository.findAllSubjectByUserIdAndRole(teacherId, "teacher");
    }

    public List<Subject> findAllSubjectByStudentId(int studentId) {
        return subjectRepository.findAllSubjectByUserIdAndRole(studentId, "student");
    }
}
