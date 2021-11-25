package com.mps.team3.qresent.repository;

import com.mps.team3.qresent.dao.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, Integer> {
    @Query(value = "SELECT s.* FROM subject s WHERE s.id IN (SELECT t.subject_id FROM subject_user t WHERE t.user_id = ?1 AND t.user_role = ?2);", nativeQuery = true)
    List<Subject> findAllSubjectByUserIdAndRole(Integer userId, String userRole);
}
