package com.mps.team3.qresent.controller;

import com.mps.team3.qresent.dao.Student;
import com.mps.team3.qresent.dao.Subject;
import com.mps.team3.qresent.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/subject")
public class SubjectController {
    @Autowired
    SubjectService subjectService;

    @GetMapping("/all")
    public ResponseEntity findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(subjectService.findAll());
    }

    @GetMapping
    public ResponseEntity getById(@RequestParam(name = "subjectId") int subjectId) {
        return ResponseEntity.status(HttpStatus.OK).body(subjectService.getById(subjectId));
    }

    @PostMapping
    public ResponseEntity createSubject(@RequestBody Subject subject) {
        return ResponseEntity.status(HttpStatus.CREATED).body(subjectService.save(subject));
    }

    @DeleteMapping
    public ResponseEntity deleteSubject(@RequestParam(name = "subjectId") int subjectId) {
        return ResponseEntity.status(HttpStatus.OK).body(subjectService.delete(subjectId));
    }
}
