package com.mps.team3.qresent.repository;

import com.mps.team3.qresent.dao.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    @Query(value = "Select * FROM user u WHERE u.role = ?1", nativeQuery = true)
    public List<User> findAllByRole(String role);
}
