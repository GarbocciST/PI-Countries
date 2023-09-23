import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../redux/actions";
import style from "./Activities.module.css";


export const Activities = () => {
  const { activities, isLoading } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
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