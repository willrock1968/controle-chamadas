package com.willian.backendcontrolechamada.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.willian.backendcontrolechamada.service.AulaService;

@RestController
@RequestMapping("/api")
public class AulaController {
	
	@Autowired
	private AulaService aulaService;

}
