package com.mps.team3.qresent.service;

import com.mps.team3.qresent.dao.Student;
import com.mps.team3.qresent.dao.Subject;
import com.mps.team3.qresent.repository.SubjectRepository;
import com.mps.team3.qresent.repository.SubjectTeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SubjectService {
    @Autowired
    SubjectRepository subjectRepository;

    @Autowired
    SubjectTeacherRepository subjectTeacherRepository;

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
        System.out.println("START");
        System.out.println(subjectTeacherRepository.findAllSubjectByTeacherId(teacherId));
        System.out.println("END");
        return subjectRepository.findAllSubjectByTeacherId(subjectTeacherRepository.findAllSubjectByTeacherId(teacherId).stream().map(x -> x.getSubjectId()).collect(Collectors.toList()));
    }
}
