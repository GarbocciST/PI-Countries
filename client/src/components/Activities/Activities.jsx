import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteActivity, getActivities } from "../../redux/actions";
import { Loading } from "../Loading/Loading";
import style from "./Activities.module.css";

export const Activities = () => {
  const { activities, isLoading } = useSelector(state => state);
  const dispatch = useDispatch();


  const handleDelete = (id) => {
    dispatch(deleteActivity(id));
  }

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className={style.activityGrid}>
      { activities?.map(activity => (
        <div className={style.card} key={activity.id}>
          { activity.id && <div className={style.deleteButton} onClick={() => handleDelete(activity.id)}>X</div>}
          <div className={style.cardBody}>
            <h5 className={style.cardTitle}>{activity.name}</h5>
            <p className={style.cardText}>Difficulty: {activity.difficulty}</p>
            <p className={style.cardText}>Duration: {activity.duration} hours</p>
            <p className={style.cardText}>Season: {activity.season}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
