package com.example.server.repository;

import com.example.server.entity.Ejercito;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface EjercitoRepository extends JpaRepository<Ejercito, Integer> {
    Optional<Ejercito> findByNombre(String nombre);
    boolean existsByNombre(String nombre);
}
