package com.mps.team3.qresent.repository;

import com.mps.team3.qresent.dao.SubjectUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubjectUserRepository extends JpaRepository<SubjectUser, Integer> {
}
