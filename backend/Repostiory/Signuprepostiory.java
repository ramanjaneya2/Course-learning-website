package com.example.demo.Repostiory;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.Model.Signupmodel;
public interface Signuprepostiory extends JpaRepository<Signupmodel,Long> {
	
	Signupmodel findByusername(String user);

}
