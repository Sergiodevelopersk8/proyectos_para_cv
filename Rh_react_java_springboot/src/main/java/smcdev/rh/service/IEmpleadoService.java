package smcdev.rh.service;
import smcdev.rh.model.Empleado;
import java.util.List;

public interface IEmpleadoService {

    public List<Empleado> listarEmpleados();
    public Empleado buscarEmpleadoPorId(Integer id_empleado);
    public Empleado guardarEmpleado(Empleado empleado);
    public void eliminarEmpleado(Empleado empleado);

}
