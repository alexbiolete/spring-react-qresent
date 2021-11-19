package com.mps.team3.qresent.repository;

import com.mps.team3.qresent.dao.Subject;
import com.mps.team3.qresent.dao.SubjectTeacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubjectTeacherRepository extends JpaRepository<SubjectTeacher, Integer> {
    @Query(
            value = "SELECT * FROM subject_teacher t WHERE t.teacher_id = :teacherId",
            nativeQuery = true)
    List<SubjectTeacher> findAllSubjectByTeacherId(@Param("teacherId") int teacherId);
}
