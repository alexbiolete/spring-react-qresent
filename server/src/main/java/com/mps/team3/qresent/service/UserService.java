package com.mps.team3.qresent.service;

import com.mps.team3.qresent.dao.User;
import com.mps.team3.qresent.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User getById(int id) {
        return userRepository.findById(id).get();
    }

    public List<User> getByRole(String role) { return userRepository.findAllByRole(role); }

    public User save(User user){
        return userRepository.save(user);
    }

    public User delete(int userId){
        User user = getById(userId);
        userRepository.delete(user);
        return user;
    }
}
