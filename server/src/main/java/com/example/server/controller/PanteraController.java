package com.example.server.controller;

import com.example.server.dto.Mensaje;
import com.example.server.dto.PanteraDto;
import com.example.server.entity.Pantera;
import com.example.server.service.PanteraService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pantera")
@CrossOrigin
public class PanteraController {

    @Autowired
    PanteraService panteraService;

    @GetMapping("/lista")
    public ResponseEntity<List<Pantera>> list(){
        List<Pantera> list = panteraService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Pantera> getById(@PathVariable("id") int id){
        if(!panteraService.existById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        Pantera pantera = panteraService.getOne(id).get();
        return new ResponseEntity(pantera, HttpStatus.OK);
    }

    @GetMapping("/detailname/{nombre}")
    public ResponseEntity<Pantera> getByNombre(@PathVariable("nombre") String nombre){
        if(!panteraService.existByNombre(nombre))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        Pantera producto = panteraService.getByNombre(nombre).get();
        return new ResponseEntity(producto, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody PanteraDto panteraDto){
        if(StringUtils.isBlank(panteraDto.getNombre()))
            return new ResponseEntity(new Mensaje("el nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        if(panteraService.existByNombre(panteraDto.getNombre()))
            return new ResponseEntity(new Mensaje("ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        Pantera pantera = new Pantera(panteraDto.getNombre());
        panteraService.save(pantera);
        return new ResponseEntity(new Mensaje("pantera creada"), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id")int id, @RequestBody PanteraDto panteraDto){
        if(!panteraService.existById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        if(panteraService.existByNombre(panteraDto.getNombre()) && panteraService.getByNombre(panteraDto.getNombre()).get().getId() != id)
            return new ResponseEntity(new Mensaje("ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        if(StringUtils.isBlank(panteraDto.getNombre()))
            return new ResponseEntity(new Mensaje("el nombre es obligatorio"), HttpStatus.BAD_REQUEST);

        Pantera pantera = panteraService.getOne(id).get();
        pantera.setNombre(panteraDto.getNombre());
        panteraService.save(pantera);
        return new ResponseEntity(new Mensaje("pantera actualizada"), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id")int id){
        if(!panteraService.existById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        panteraService.deleted(id);
        return new ResponseEntity(new Mensaje("pantera eliminada"), HttpStatus.OK);
    }
}
