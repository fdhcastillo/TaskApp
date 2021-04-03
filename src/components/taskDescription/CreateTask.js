import Button from '@material-ui/core/Button';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';

export const CreateTask = () => {
  return (
    <div>
      <h2>Descripción de las prioridades</h2>
      <ul>
        <li><span style={{fontWeight:'bold', color:'#ff555593',fontSize:'20px'}}>Muy urgente:</span> Tareas que tienen que realizarse con mucha prioridad y en la misma fecha de ser creada. </li>
        <li><span style={{fontWeight:'bold', color:'#ff9c55bd',fontSize:'20px'}}>Urgente:</span> Tareas que deben realizarse luego de realizar la mas urgentes. </li>
        <li><span style={{fontWeight:'bold', color:'#fdaf0794',fontSize:'20px'}}>Puede esperar:</span> Tareas que se pueden realizarse en cualquier momento. </li>
        <li><span style={{fontWeight:'bold', color:'#1ec11b8c',fontSize:'20px'}}>Finalizado:</span> Tareas que se realizó con exito. </li>
        <li><span style={{fontWeight:'bold', color:'#555bff8c',fontSize:'20px'}}>No urgente:</span> Tareas que no son urgentes y no son tan importantes. </li>
      </ul>
      <Button
        className="task__main-folder--buttonmodal"
        variant='contained'
        startIcon={<AssignmentReturnedIcon  style={{fontSize:'25px'}} />}
      >
        Crear Tarea
      </Button>
    </div>
  )
}
