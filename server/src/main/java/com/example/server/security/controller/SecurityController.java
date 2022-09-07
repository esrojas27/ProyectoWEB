package com.example.server.security.controller;

import com.example.server.security.dto.JwtDTO;
import com.example.server.dto.Mensaje;
import com.example.server.dto.UsuarioDTO;
import com.example.server.entity.Usuario;
import com.example.server.security.jwt.JwtProvider;
import com.example.server.repository.UsuarioRepository;
import com.example.server.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class SecurityController {

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UsuarioService usuarioService;

    @Autowired
    JwtProvider jwtProvider;

    @Autowired
    UsuarioRepository usuarioRepository;

    @GetMapping ("/login")
    public ResponseEntity<JwtDTO> auth(@RequestBody UsuarioDTO usuarioDTO) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(usuarioDTO.getUsername(), usuarioDTO.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateToken(authentication);
        UserDetails userDetails = (UserDetails)authentication.getPrincipal();
        JwtDTO jwtDto = new JwtDTO(jwt, userDetails.getUsername(), userDetails.getAuthorities());
        return new ResponseEntity(jwtDto, HttpStatus.OK);
    }

    @PostMapping ("/crear")
    public ResponseEntity<?> nuevo(@RequestBody UsuarioDTO nuevoUsuario){
        Usuario usuario =
                new Usuario(nuevoUsuario.getUsername(), nuevoUsuario.getPassword());
        usuarioService.save(usuario);
        return new ResponseEntity<>(new Mensaje("Usuario guardado correctamente."), HttpStatus.CREATED);
    }
}
