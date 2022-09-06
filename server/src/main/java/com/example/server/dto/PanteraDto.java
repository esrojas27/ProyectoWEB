package com.example.server.dto;

import com.sun.istack.NotNull;

public class PanteraDto {

    private String nombre;

    public PanteraDto() {
    }

    public PanteraDto(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
