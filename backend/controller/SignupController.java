package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Signupmodel;
import com.example.demo.Repostiory.Signuprepostiory;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/course")
public class SignupController {
	@Autowired
	Signuprepostiory repo;
	@PostMapping("/postdata")
	public String savelog(@RequestBody Signupmodel s) {
		String user=s.getUsername();
		Signupmodel s1=repo.findByusername(user);
		  if(s1==null)
	        {
	            repo.save(s);
	            return "added";
	        }
	        else {
	            return "Exist user";
	        }
		
	}
	

}
