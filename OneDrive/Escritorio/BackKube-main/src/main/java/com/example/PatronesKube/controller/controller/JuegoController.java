package com.example.PatronesKube.controller.controller;

import com.example.PatronesKube.controller.dto.CriticaDTO;
import com.example.PatronesKube.controller.dto.JuegoDTO;
import com.example.PatronesKube.logica.JuegoService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")


public class JuegoController {

    private JuegoService juegoService;
    @PostMapping(path = "/Juego")
    public String guardarJuego(@RequestBody JuegoDTO juegoDTO) {

        juegoService.añadirYGuardarJuego(juegoDTO);

        return "proyecto guardado correctamente";
    }
    @PostMapping(path = "/Critica")
    public String añadirCritica(@RequestBody CriticaDTO criticaDTO) {
        juegoService.añadirCritica(criticaDTO.juegoId(), criticaDTO);
        return "Crítica guardada correctamente";
    }



    @GetMapping(path = "/Juegos")
    public List obtenerJuegos() {

        return juegoService.obtenerJuegos();

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> eliminarJuego(@PathVariable Long id) {
        juegoService.eliminarJuego(id);
        return ResponseEntity.ok("Juego eliminado correctamente");
    }
}
