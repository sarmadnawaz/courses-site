import { useReducer } from "react";

const reducer = (state, action) => ({ ...state, ...action });

export function useForm(initialValues) {
  const [state, dispatch] = useReducer(reducer, initialValues);

  function handleChange(e) {
    const { name, value } = e.target;
    dispatch({ [name]: value });
  }

  function handleReset() {
    dispatch(initialValues);
  }

  return [state, handleChange, handleReset];
}
