import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import womanTask from '../../assets/mainscreen/womanTask.png'

const percentageSuccess = 66;
const percentageUnsucess = 33;
export const StatisticTask = () => {
  return (
    <>
      <h1 className="task__main-priority-titlestatistic mt-5 mb-5">Estadística de Tareas</h1>
      <div className="task__main-priority-taskpaper">
        <div style={{display:'flex',flexFlow:'column nowrap'}}>
          <span style={{fontWeight:'bold'}}>Tareas Realizadas</span>
          <span style={{fontWeight:'bold'}}>Por mes</span>
        </div>
          <CircularProgressbar
            value={percentageSuccess}
            text={`${percentageSuccess}%`}
            background
            backgroundPadding={10}
            styles={buildStyles({
              backgroundColor: "#1ec11b8c",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent"
            })}
          />
      </div>
      <div className="task__main-priority-taskpaper mt-1">
        <div style={{display:'flex',flexFlow:' column nowrap'}}>
          <span style={{fontWeight:'bold'}}>Tareas Pendientes</span>
          <span style={{fontWeight:'bold'}}>Por mes</span>
        </div>
        <CircularProgressbar
          value={percentageUnsucess}
          text={`${percentageUnsucess}%`}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "rgba(252, 7, 7, 0.5)",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent"
          })}
        />
      </div>
      <div className="task__main-imgcontainer">
        <img src={womanTask} style={{width:'100%'}}></img>
      </div>
    </>
  )
}
