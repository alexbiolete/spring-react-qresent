package com.mps.team3.qresent.controller;

import com.mps.team3.qresent.dao.Student;
import com.mps.team3.qresent.dao.Teacher;
import com.mps.team3.qresent.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/teacher")
public class TeacherController {
    @Autowired
    TeacherService teacherService;

    @GetMapping("/all")
    public ResponseEntity findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(teacherService.findAll());
    }

    @GetMapping
    public ResponseEntity getById(@RequestParam(name = "teacherId") int teacherId) {
        return ResponseEntity.status(HttpStatus.OK).body(teacherService.getById(teacherId));
    }

    @PostMapping
    public ResponseEntity createTeacher(@RequestBody Teacher teacher) {
        return ResponseEntity.status(HttpStatus.CREATED).body(teacherService.save(teacher));
    }

    @DeleteMapping
    public ResponseEntity deleteTeacher(@RequestParam(name = "teacherId") int teacherId) {
        return ResponseEntity.status(HttpStatus.OK).body(teacherService.delete(teacherId));
    }
}
