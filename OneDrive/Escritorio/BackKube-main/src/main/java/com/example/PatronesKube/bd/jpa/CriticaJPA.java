package com.example.PatronesKube.bd.jpa;

import com.example.PatronesKube.bd.orm.CriticaORM;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CriticaJPA extends JpaRepository <CriticaORM, Long> {
}
