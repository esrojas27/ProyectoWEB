package com.example.server.service;


import com.example.server.entity.Ejercito;
import com.example.server.repository.EjercitoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class EjercitoService {

    @Autowired
    EjercitoRepository ejercitoRepository;

    public List<Ejercito> list(){
        return ejercitoRepository.findAll();
    }

    public Optional<Ejercito> getOne(int id){
        return ejercitoRepository.findById(id);
    }

    public Optional<Ejercito> getByNombre(String nombre){
        return ejercitoRepository.findByNombre(nombre);
    }

    public void save(Ejercito ejercito){
        ejercitoRepository.save(ejercito);
    }

    public void deleted(int id){
        ejercitoRepository.deleteById(id);
    }

    public boolean existById(int id){
        return ejercitoRepository.existsById(id);
    }

    public boolean existByNombre(String nombre){
        return ejercitoRepository.existsByNombre(nombre);
    }
}
