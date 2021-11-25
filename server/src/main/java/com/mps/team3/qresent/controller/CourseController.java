package com.mps.team3.qresent.controller;

import com.mps.team3.qresent.dao.Course;
import com.mps.team3.qresent.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/course")
public class CourseController {
    @Autowired
    CourseService courseService;

    @GetMapping("/all")
    public ResponseEntity findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(courseService.findAll());
    }

    @GetMapping
    public ResponseEntity getById(@RequestParam(name = "courseId") int courseId) {
        return ResponseEntity.status(HttpStatus.OK).body(courseService.getById(courseId));
    }

    @PostMapping
    public ResponseEntity createCourse(@RequestBody Course course) {
        return ResponseEntity.status(HttpStatus.CREATED).body(courseService.save(course));
    }

    @DeleteMapping
    public ResponseEntity deleteCourse(@RequestParam(name = "courseId") int courseId) {
        return ResponseEntity.status(HttpStatus.OK).body(courseService.delete(courseId));
    }
}
