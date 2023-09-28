package NivelCursoService;

import org.springframework.stereotype.Service;


import entity.NivelCurso;
import repository.NivelCursoRepository;

@Service
public class NivelCursoService {
	
	private final NivelCursoRepository nivelCursoRepository = null;
	
	public NivelCurso saveNivelCurso(NivelCurso nivelCurso) {                                                                                                       

        return nivelCursoRepository.save(nivelCurso);
    }

}
