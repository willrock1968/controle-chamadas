package com.willian.backendcontrolechamada.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.willian.backendcontrolechamada.repository.AulaRepository;

@Service
public class AulaService {
	
	@Autowired
	private AulaRepository aulaRepository;

}
