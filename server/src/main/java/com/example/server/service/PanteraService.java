package com.example.server.service;

import com.example.server.entity.Pantera;
import com.example.server.repository.PanteraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PanteraService {

    @Autowired
    PanteraRepository panteraRepository;

    public List<Pantera> list(){
        return panteraRepository.findAll();
    }

    public Optional<Pantera> getOne(int id){
        return panteraRepository.findById(id);
    }

    public Optional<Pantera> getByNombre(String nombre){
        return panteraRepository.findByNombre(nombre);
    }

    public void save(Pantera pantera){
        panteraRepository.save(pantera);
    }

    public void deleted(int id){
        panteraRepository.deleteById(id);
    }

    public boolean existById(int id){
        return panteraRepository.existsById(id);
    }

    public boolean existByNombre(String nombre){
        return panteraRepository.existsByNombre(nombre);
    }
}
