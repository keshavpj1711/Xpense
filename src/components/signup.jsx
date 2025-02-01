import React, { useEffect } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BeatLoader } from "react-spinners";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import * as Yup from 'yup'
import Error from "./error";
import useFetch from "../hooks/use-fetch";
import { signup } from "../db/apiAuth";
import { useNavigate } from "react-router-dom";
import { UrlState } from "../context";


const SignUp = (props) => {
  const [errors, setErrors] = useState({})

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { data, error, loading, fn: fnSignUp } = useFetch(signup, formData);
  const{fetchUser} = UrlState();

  useEffect(() => {
    console.log(data);
    if (error === null && data) {
      navigate('/dashboard');
      fetchUser();
    }
  }, [data, error])

  // The function which handles the login logic
  const handleSignUp = async () => {
    setErrors([]);
    try {
      const schema = Yup.object().shape({
        userName: Yup.string()
          .required("User Name is Required"),
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      });

      await schema.validate(formData, { abortEarly: false });
      await fnSignUp();
    } catch (e) {
      const newErrors = {};

      e?.inner?.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);
    }
  };
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Don't have an account? Sign Up now</CardDescription>
          {error && <Error message={error.message} />}
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Input name="userName" type="userName" placeholder="Enter Username" onChange={handleInputChange} />
            {errors.userName && <Error message={errors.userName} />}
          </div>
          <div className="space-y-1">
            <Input name="email" type="email" placeholder="Enter Email" onChange={handleInputChange} />
            {errors.email && <Error message={errors.email} />}
          </div>
          <div className="space-y-1">
            <Input name="password" type="password" placeholder="Enter Password" onChange={handleInputChange} />
            {errors.password && <Error message={errors.password} />}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" onClick={handleSignUp}>
            {loading ? <BeatLoader size={10} color="#3b82f6" /> : "Sign Up"}
          </Button>
        </CardFooter>
      </Card>

    </div>
  )
};

export default SignUp;
