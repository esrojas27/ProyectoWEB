package com.example.server.controller;

import com.example.server.dto.Mensaje;
import com.example.server.dto.PanteraDto;
import com.example.server.entity.Ejercito;
import com.example.server.service.EjercitoService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ejercito")
@CrossOrigin
public class EjercitoController {

    @Autowired
    EjercitoService ejercitoService;

    @GetMapping("/lista")
    public ResponseEntity<List<Ejercito>> list(){
        List<Ejercito> list = ejercitoService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Ejercito> getById(@PathVariable("id") int id){
        if(!ejercitoService.existById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        Ejercito ejercito = ejercitoService.getOne(id).get();
        return new ResponseEntity(ejercito, HttpStatus.OK);
    }

    @GetMapping("/detailname/{nombre}")
    public ResponseEntity<Ejercito> getByNombre(@PathVariable("nombre") String nombre){
        if(!ejercitoService.existByNombre(nombre))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        Ejercito producto = ejercitoService.getByNombre(nombre).get();
        return new ResponseEntity(producto, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody PanteraDto panteraDto){
        if(StringUtils.isBlank(panteraDto.getNombre()))
            return new ResponseEntity(new Mensaje("el nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        if(ejercitoService.existByNombre(panteraDto.getNombre()))
            return new ResponseEntity(new Mensaje("ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        Ejercito ejercito = new Ejercito(panteraDto.getNombre());
        ejercitoService.save(ejercito);
        return new ResponseEntity(new Mensaje("ejercito creada"), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id")int id, @RequestBody PanteraDto panteraDto){
        if(!ejercitoService.existById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        if(ejercitoService.existByNombre(panteraDto.getNombre()) && ejercitoService.getByNombre(panteraDto.getNombre()).get().getId() != id)
            return new ResponseEntity(new Mensaje("ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        if(StringUtils.isBlank(panteraDto.getNombre()))
            return new ResponseEntity(new Mensaje("el nombre es obligatorio"), HttpStatus.BAD_REQUEST);

        Ejercito ejercito = ejercitoService.getOne(id).get();
        ejercito.setNombre(panteraDto.getNombre());
        ejercitoService.save(ejercito);
        return new ResponseEntity(new Mensaje("ejercito actualizada"), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id")int id){
        if(!ejercitoService.existById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        ejercitoService.deleted(id);
        return new ResponseEntity(new Mensaje("ejercito eliminada"), HttpStatus.OK);
    }
}
