package com.mps.team3.qresent.controller;

import com.mps.team3.qresent.dao.Attendance;
import com.mps.team3.qresent.dao.Student;
import com.mps.team3.qresent.service.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/attendance")
public class AttendanceController {
    @Autowired
    AttendanceService attendanceService;

    @GetMapping("/all")
    public ResponseEntity findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(attendanceService.findAll());
    }

    @GetMapping
    public ResponseEntity getById(@RequestParam(name = "attendanceId") int attendanceId) {
        return ResponseEntity.status(HttpStatus.OK).body(attendanceService.getById(attendanceId));
    }

    @PostMapping
    public ResponseEntity createAttendance(@RequestBody Attendance attendance) {
        return ResponseEntity.status(HttpStatus.CREATED).body(attendanceService.save(attendance));
    }

    @DeleteMapping
    public ResponseEntity deleteAttendance(@RequestParam(name = "attendanceId") int attendanceId) {
        return ResponseEntity.status(HttpStatus.OK).body(attendanceService.delete(attendanceId));
    }
}
