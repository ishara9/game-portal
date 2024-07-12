import { Button } from "@chakra-ui/react";
import React, { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = {
    name: "",
    age: 0,
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nameRef.current !== null) {
      console.log(nameRef.current.value);
      person.name = nameRef.current.value;
    }
    if (ageRef.current !== null) {
      console.log(ageRef.current.value);
      person.age = parseInt(ageRef.current.value);
    }
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="text" className="form-control" />
      </div>
      <Button className="btn btn-submit" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
