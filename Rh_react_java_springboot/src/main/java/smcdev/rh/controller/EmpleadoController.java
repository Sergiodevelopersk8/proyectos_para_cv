package smcdev.rh.controller;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import smcdev.rh.exception.RecursoNoEncontradoExcepcion;
import smcdev.rh.model.Empleado;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import smcdev.rh.service.EmpleadoService;
import smcdev.rh.service.IEmpleadoService;
@RestController
@RequestMapping("rh-app")
@CrossOrigin("http://localhost:3000")
public class EmpleadoController {

    private static final Logger logger = LoggerFactory.getLogger(EmpleadoController.class);

    @Autowired
    private IEmpleadoService empleadoServicio;

    @GetMapping("/empleados")

    public List<Empleado> obtenerEmpleados(){
        //var empleados = empleadoServicio.listarEmpleados();
        List<Empleado> empleados = empleadoServicio.listarEmpleados();
        empleados.forEach((empleado -> logger.info(empleado.toString())));
        return empleados;
    }

    @PostMapping("/empleados")
    public Empleado agregarEmpleado(@RequestBody Empleado empleado){
        return empleadoServicio.guardarEmpleado(empleado);

    }

    @GetMapping("/empleados/{id}")
    /*se envuelve la respuetsa en el objeto ResponseEntity */
    public ResponseEntity<Empleado> obtenerEmpleadoPorId(@PathVariable Integer id){

        Empleado empleado = empleadoServicio.buscarEmpleadoPorId(id);

        if(empleado == null){
          throw new RecursoNoEncontradoExcepcion("No se encontro el id: " + id);
        }
        return ResponseEntity.ok(empleado);

    }

    @PutMapping("/empleados/{id}")
    public ResponseEntity<Empleado>actualizarEmpleado(@PathVariable Integer id, @RequestBody Empleado empleadoRecibido){

        Empleado empleado = empleadoServicio.buscarEmpleadoPorId(id);



        if(empleado == null){
            throw new RecursoNoEncontradoExcepcion("no se encontro el empleado" + id );
        }
        empleado.setNombre(empleadoRecibido.getNombre());
        empleado.setDepartamento(empleadoRecibido.getDepartamento());
        empleado.setSueldo(empleadoRecibido.getSueldo());

        empleadoServicio.guardarEmpleado(empleado);

        return ResponseEntity.ok(empleado);

    }

    @DeleteMapping("/empleados/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarEmpleado(@PathVariable Integer id){
        Empleado empleado = empleadoServicio.buscarEmpleadoPorId(id);
        if(empleado == null){
            throw new RecursoNoEncontradoExcepcion("no se encontro el empleado");
        }
        empleadoServicio.eliminarEmpleado(empleado);

        //respuesta json
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminado", true);

        return ResponseEntity.ok(respuesta);

    }



}
