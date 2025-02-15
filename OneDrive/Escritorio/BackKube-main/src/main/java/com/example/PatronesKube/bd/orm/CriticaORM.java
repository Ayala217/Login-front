package com.example.PatronesKube.bd.orm;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "critica")
@Data
@NoArgsConstructor
public class CriticaORM {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column
    private String criticaParrafo;

    @Column
    private LocalDate fechaCritica;

    @Column
    private int nota;

    @ManyToOne
    @JoinColumn(name = "juego_id")
    @JsonIgnore
    private JuegoORM juego;
}
