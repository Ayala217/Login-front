package com.example.PatronesKube.controller.dto;


import com.example.PatronesKube.bd.orm.JuegoORM;

import java.time.LocalDate;

public record CriticaDTO( String criticaParrafo, LocalDate fechaCritica, int nota, Long juegoId) {
}
