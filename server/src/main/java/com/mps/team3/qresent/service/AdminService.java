package com.mps.team3.qresent.service;

import com.mps.team3.qresent.dao.Admin;
import com.mps.team3.qresent.dao.Teacher;
import com.mps.team3.qresent.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    @Autowired
    AdminRepository adminRepository;

    public List<Admin> findAll() {
        return adminRepository.findAll();
    }

    public Admin getById(int id) {
        return adminRepository.findById(id).get();
    }

    public Admin save(Admin admin){
        return adminRepository.save(admin);
    }

    public Admin delete(int adminId){
        Admin admin = getById(adminId);
        adminRepository.delete(admin);
        return admin;
    }
}
