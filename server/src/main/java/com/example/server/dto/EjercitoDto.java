package com.example.server.dto;

import com.sun.istack.NotNull;

public class EjercitoDto {

    private String nombre;

    public EjercitoDto() {
    }

    public EjercitoDto(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
