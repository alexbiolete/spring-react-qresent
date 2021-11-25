package com.mps.team3.qresent.service;

import com.mps.team3.qresent.dao.Course;
import com.mps.team3.qresent.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {
    @Autowired
    CourseRepository courseRepository;

    public List<Course> findAll() {
        return courseRepository.findAll();
    }

    public Course getById(int id) {
        return courseRepository.findById(id).get();
    }

    public Course save(Course course){
        return courseRepository.save(course);
    }

    public Course delete(int courseId){
        Course course = getById(courseId);
        courseRepository.delete(course);
        return course;
    }
}
