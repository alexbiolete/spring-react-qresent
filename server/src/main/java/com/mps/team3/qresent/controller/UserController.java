package com.mps.team3.qresent.controller;

import com.mps.team3.qresent.dao.LoginForm;
import com.mps.team3.qresent.dao.User;
import com.mps.team3.qresent.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/all")
    public ResponseEntity findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(userService.findAll());
    }

    @GetMapping
    public ResponseEntity getById(@RequestParam(name = "userId") int userId) {
        return ResponseEntity.status(HttpStatus.OK).body(userService.getById(userId));
    }

    @GetMapping("/all/role")
    public ResponseEntity getByRole(@RequestParam(name = "userRole") String userRole) {
        return ResponseEntity.status(HttpStatus.OK).body(userService.getByRole(userRole));
    }

    @PostMapping
    public ResponseEntity createUser(@RequestBody User user) {
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(user));
    }

    @DeleteMapping
    public ResponseEntity deleteUser(@RequestParam(name = "userId") int userId) {
        return ResponseEntity.status(HttpStatus.OK).body(userService.delete(userId));
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginForm loginForm) {
        User user = userService.login(loginForm.getUsername(), loginForm.getPassword());
        if (user == null)
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("User does not exist");
        else return ResponseEntity.status(HttpStatus.OK).body(user);
    }
}
