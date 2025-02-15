package com.example.PatronesKube.bd.jpa;

import com.example.PatronesKube.bd.orm.JuegoORM;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JuegoJPA  extends JpaRepository<JuegoORM, Long>{}
