import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActivity, getCountries } from "../../redux/actions";
import validations from "./validations";
import style from "./Form.module.css";



export const Form = ({setShowForm}) => {
  const { activities, isLoading, allCountries } = useSelector(state => state);
  const dispatch = useDispatch();

  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });
  const [errors, setErrors] = useState({});

  
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setActivity((prevData) => ({ //le paso al estado de las actividades los nuevos valores ingresados 
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddCountry = (countryId) => {
    const updatedCountries = activity.countries.includes(countryId)
      ? activity.countries.filter((id) => id !== countryId)
      : [...activity.countries, countryId];
  
    setActivity((prevData) => ({
      ...prevData,
      countries: updatedCountries,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addActivity(activity));
    setActivity({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
    setShowForm(false);
  };


  useEffect(() => {
    setErrors(validations(activity)); 
  }, [activity]);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <form onSubmit={handleSubmit} className={style.formContainer}> 
    <button onClick={() => setShowForm(false)}>X</button>
    <div className={style.formContent}>
      <div className={style.formField}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={activity.name}
          onChange={changeHandler}
        />
        {errors.name && (
          <span className={style.formError}>{errors.name}</span>
        )}
      </div>
      <div className={style.formField}>
        <label>Difficulty: </label>
        <input
          type="number"
          name="difficulty"
          value={activity.difficulty}
          onChange={changeHandler}
        />
        {errors.difficulty && (
          <span className={style.formError}>{errors.difficulty}</span>
        )}
      </div>

      <div className={style.formField}>
        <label>Duration: </label>
        <input
          type="number"
          name="duration"
          value={activity.duration}
          onChange={changeHandler}
        />
        {errors.duration && (
          <span className={style.formError}>{errors.duration}</span>
        )}
      </div>
      <div>
        <label>Season: </label>
        <select
          name="season"
          value={activity.season}
          onChange={changeHandler}
        >
          <option value="" disabled>
            Select a season:
          </option>
          <option value="Summer">Summer</option>
          <option value="Autumn">Autumn</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
        </select>
        {errors.season && (
          <span className={style.formError}>{errors.season}</span>
        )}
      </div>

      <div className={style.formField}>
        <label>Countries: </label>
        <div className={style.formCountrySearch}>
            <select
              name="countries"
              value={activity.countries}
              onChange={(event) => handleAddCountry(event.target.value)}
              multiple
            >
              <option value="" disabled>
                Select a country:
              </option>
              {allCountries
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>  
          <div className={style.searchResults}>
        </div>

        </div>
        {activity.name && //solo si se completan todos los campos requeridos 
        activity.difficulty && 
        activity.season &&
        activity.countries.length > 0 &&
        Object.keys(errors).length === 0 ? (
          <button className={style.formButton} disabled={isLoading}>
            {isLoading ? 'Creating Activity...' : 'CREATE ACTIVITY'}
            CREATE ACTIVITY
            </button>
        ) : (
          <button className={style.formButton} disabled>
            Some fields are missing
          </button>
        )}
      </div>
    </div>
  </form>
);
};
