package com.willian.backendcontrolechamada;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = "com.willian.backendcontrolechamada.entity")
@ComponentScan(basePackages = "com.willian.backendcontrolechamada.controller")
@ComponentScan(basePackages = "com.willian.backendcontrolechamada.service")
@ComponentScan(basePackages = "com.willian.backendcontrolechamada.repository")
@EnableJpaRepositories(basePackages = "com.willian.backendcontrolechamada.repository")
public class BackEndControleChamadaApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackEndControleChamadaApplication.class, args);
	}

}
