package com.example.server;
import com.example.server.controller.PanteraController;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import com.example.server.entity.Pantera;
import com.example.server.service.PanteraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Optional;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.notNullValue;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = PanteraController.class)
class ServerApplicationTests {

	@Autowired
	MockMvc mockMvc;
	@Autowired
	ObjectMapper objectMapper;
	@MockBean
	PanteraService service;

	Pantera pantera = new Pantera("T'Challa");
	Pantera pantera2 = new Pantera("T'Chaka");
	Pantera pantera3 = new Pantera("N'Jadaka");

	@Test
	public void getAllTest() throws Exception {
		ArrayList<Pantera> panteras = new ArrayList<>(Arrays.asList(pantera, pantera2, pantera3));
		Mockito.when(service.list()).thenReturn(panteras);
		mockMvc.perform(MockMvcRequestBuilders
				.get("/pantera/lista"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$", hasSize(2)));
	}

	@Test
	public void detailTest() throws Exception{
		Mockito.when(service.getOne(pantera.getId())).thenReturn(Optional.ofNullable(pantera));
		mockMvc.perform(MockMvcRequestBuilders.get("/pantera/detail/pantera/getId")).andExpect(status().isOk()).andExpect(jsonPath("$", notNullValue()));
	}
}
