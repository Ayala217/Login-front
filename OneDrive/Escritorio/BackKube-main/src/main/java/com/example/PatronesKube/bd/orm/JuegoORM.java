package com.example.PatronesKube.bd.orm;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "juego")
@Data
@NoArgsConstructor
public class JuegoORM {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "fechaLanzamiento")
    private LocalDateTime fechaLanzamiento;

    @Column(name = "desarrollador")
    private String desarrollador;

    @OneToMany(mappedBy = "juego", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CriticaORM> criticas;

    public JuegoORM(LocalDateTime fechaLanzamiento, Long id, String nombre, String desarrollador) {
        this.id = id;
        this.fechaLanzamiento = fechaLanzamiento;
        this.nombre = nombre;
        this.desarrollador = desarrollador;
    }
}
