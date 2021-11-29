package com.mps.team3.qresent.service;

import com.mps.team3.qresent.dao.SubjectUser;
import com.mps.team3.qresent.repository.SubjectUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubjectUserService {
    @Autowired
    SubjectUserRepository subjectUserRepository;

    public List<SubjectUser> findAll() {
        return subjectUserRepository.findAll();
    }

    public SubjectUser getById(int id) {
        return subjectUserRepository.findById(id).get();
    }

    public SubjectUser save(SubjectUser subjectUser){
        return subjectUserRepository.save(subjectUser);
    }

    public SubjectUser delete(int subjectUserId){
        SubjectUser subjectUser = getById(subjectUserId);
        subjectUserRepository.delete(subjectUser);
        return subjectUser;
    }
}
