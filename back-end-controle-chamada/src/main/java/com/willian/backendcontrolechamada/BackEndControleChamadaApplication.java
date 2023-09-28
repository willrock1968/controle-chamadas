package com.willian.backendcontrolechamada;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.willian.backendcontrolechamada.repository")
@EntityScan(basePackages = "entity")
public class BackEndControleChamadaApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackEndControleChamadaApplication.class, args);
	}

}
