package com.mps.team3.qresent.controller;

import com.mps.team3.qresent.dao.Student;
import com.mps.team3.qresent.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    StudentService studentService;

    @GetMapping("/all")
    public ResponseEntity findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(studentService.findAll());
    }

    @GetMapping
    public ResponseEntity getById(@RequestParam(name = "studentId") int studentId) {
        return ResponseEntity.status(HttpStatus.OK).body(studentService.getById(studentId));
    }

    @PostMapping
    public ResponseEntity createStudent(@RequestBody Student student) {
        return ResponseEntity.status(HttpStatus.CREATED).body(studentService.save(student));
    }

    @DeleteMapping
    public ResponseEntity deleteStudent(@RequestParam(name = "studentId") int studentId) {
        return ResponseEntity.status(HttpStatus.OK).body(studentService.delete(studentId));
    }
}
