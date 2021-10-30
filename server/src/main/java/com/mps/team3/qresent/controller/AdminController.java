package com.mps.team3.qresent.controller;

import com.mps.team3.qresent.dao.Admin;
import com.mps.team3.qresent.dao.Teacher;
import com.mps.team3.qresent.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    AdminService adminService;

    @GetMapping("/all")
    public ResponseEntity findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(adminService.findAll());
    }

    @GetMapping
    public ResponseEntity getById(@RequestParam(name = "adminId") int adminId) {
        return ResponseEntity.status(HttpStatus.OK).body(adminService.getById(adminId));
    }

    @PostMapping
    public ResponseEntity createAdmin(@RequestBody Admin admin) {
        return ResponseEntity.status(HttpStatus.CREATED).body(adminService.save(admin));
    }

    @DeleteMapping
    public ResponseEntity deleteAdmin(@RequestParam(name = "adminId") int adminId) {
        return ResponseEntity.status(HttpStatus.OK).body(adminService.delete(adminId));
    }
}
