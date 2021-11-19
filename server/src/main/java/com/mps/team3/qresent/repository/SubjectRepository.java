package com.mps.team3.qresent.repository;

import com.mps.team3.qresent.dao.Subject;
import com.mps.team3.qresent.dao.SubjectTeacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, Integer> {
    @Query(value = "Select s.* FROM subject s WHERE s.id IN ?1", nativeQuery = true)
    List<Subject> findAllSubjectByTeacherId(List<Integer> subjectsId);
}
