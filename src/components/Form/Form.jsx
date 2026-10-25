import { useState,useReducer } from "react";
import styles from "./Form.module.css";

const formReducer = (state, action) => {
  switch (action.type) {
    case "email":
      return {
        ...state,
        email: action.payload
      };
    case "password":
      return {
        ...state,
        password: action.payload
      };
    default:
      throw new Error(`Action with type ${action.type} is not supported`);
  }
};
  
export const Form = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [state, dispatch] = useReducer(formReducer, {
    email: "",
    password:"",
  })
  const handleSubmit = e => {
    e.preventDefault();
    console.log(state);
    
    dispatch({ type: "email", payload: "" });
    dispatch({ type: "password", payload: "" });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({type:name,payload:value})
    }

  return (
    <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
      <label>
        email:
        <input
          className={styles.input}
          name="email"
          type="email"
          value={state.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          className={styles.input}
          name="password"
          type="password"
          value={state.password}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Signup</button>
    </form>
  );
};
