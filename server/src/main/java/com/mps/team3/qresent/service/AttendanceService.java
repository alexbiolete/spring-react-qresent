package com.mps.team3.qresent.service;

import com.mps.team3.qresent.dao.Attendance;
import com.mps.team3.qresent.repository.AttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttendanceService {
    @Autowired
    AttendanceRepository attendanceRepository;

    public List<Attendance> findAll() {
        return attendanceRepository.findAll();
    }

    public Attendance getById(int id) {
        return attendanceRepository.findById(id).get();
    }

    public Attendance save(Attendance attendance){
        return attendanceRepository.save(attendance);
    }

    public Attendance delete(int attendanceId){
        Attendance attendance = getById(attendanceId);
        attendanceRepository.delete(attendance);
        return attendance;
    }
}
