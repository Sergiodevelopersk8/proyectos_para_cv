package smcdev.rh.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import smcdev.rh.model.Empleado;


public interface EmpleadoRepository extends JpaRepository<Empleado,Integer> {

}
