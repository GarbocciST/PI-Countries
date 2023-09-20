import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../redux/actions";


export const Activities = () => {
  const { activities, isLoading } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  return (
    <div>
      <button onClick={''}>Agregar nueva actividad</button>
      {isLoading && <h1>Loading...</h1>}

        {activities.map(activity => (
          <div className="card" key={activity.id}>
            <div className="card-body">
              <h5 className="card-title">{activity.name}</h5>
              <p className="card-text">Dificultad: {activity.difficulty}</p>
              <p className="card-text">Duración: {activity.duration}</p>
              <p className="card-text">Temporada: {activity.season}</p>
            </div>
          </div>
        ))}
    </div>
  )
}