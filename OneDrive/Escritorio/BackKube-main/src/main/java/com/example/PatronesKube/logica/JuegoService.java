package com.example.PatronesKube.logica;

import com.example.PatronesKube.bd.jpa.JuegoJPA;
import com.example.PatronesKube.bd.orm.CriticaORM;
import com.example.PatronesKube.bd.orm.JuegoORM;
import com.example.PatronesKube.controller.dto.CriticaDTO;
import com.example.PatronesKube.controller.dto.JuegoDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class JuegoService {

    JuegoJPA juegoJPA;

    public JuegoORM añadirJuego(JuegoDTO juegoDTO) {

        JuegoORM juego = new JuegoORM();
        juego.setNombre(juegoDTO.nombre());
        juego.setDesarrollador(juegoDTO.desarrollador());
        juego.setFechaLanzamiento(juegoDTO.fechaLanzamiento());
        return juego;
    }

    public boolean guardarJuego(JuegoORM juegoORM) {
        juegoJPA.save(juegoORM);
        return true;
    }

    public boolean añadirYGuardarJuego(JuegoDTO juegoDTO) {
        JuegoORM juegoORM = añadirJuego(juegoDTO);
        guardarJuego(juegoORM);
        return true;
    }

    public List<JuegoORM> obtenerJuegos() {
        return juegoJPA.findAll().stream()
                .map(juego -> new JuegoORM( juego.getFechaLanzamiento(),juego.getId(),juego.getNombre(),juego.getDesarrollador()))
                .collect(Collectors.toList());
    }
    public boolean añadirCritica(Long juegoId, CriticaDTO criticaDTO) {

        Optional<JuegoORM> optionalJuego = juegoJPA.findById(juegoId);
        if (optionalJuego.isEmpty()) {
            return false;
        }
        JuegoORM juego = optionalJuego.get();

        CriticaORM critica = new CriticaORM();
        critica.setCriticaParrafo(criticaDTO.criticaParrafo());
        critica.setFechaCritica(criticaDTO.fechaCritica());
        critica.setNota(criticaDTO.nota());
        critica.setJuego(juego);
        juego.getCriticas().add(critica);

        juegoJPA.save(juego);

        return true;
    }
    public List<CriticaORM> obtenerCriticasPorJuego(Long idJuego) {
        return juegoJPA.findById(idJuego)
                .map(JuegoORM::getCriticas)
                .orElseThrow(() -> new RuntimeException("Juego no encontrado"));
    }
    public void eliminarJuego(Long id) {
        if (juegoJPA.existsById(id)) {
            juegoJPA.deleteById(id);
        } else {
            throw new RuntimeException("Juego no encontrado");
        }
    }



}
