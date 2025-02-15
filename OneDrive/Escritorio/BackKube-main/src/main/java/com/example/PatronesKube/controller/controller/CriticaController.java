package com.example.PatronesKube.controller.controller;

import com.example.PatronesKube.bd.orm.CriticaORM;
import com.example.PatronesKube.logica.JuegoService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")

public class CriticaController {

    JuegoService juegoService;

    @GetMapping("/Criticas/{idJuego}")
    public List<CriticaORM> obtenerCriticas(@PathVariable Long idJuego) {
        return juegoService.obtenerCriticasPorJuego(idJuego);
    }
}
