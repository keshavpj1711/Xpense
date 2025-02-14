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
import { login } from "../db/apiAuth";
import { useNavigate } from "react-router-dom";
import { UrlState } from "../context";


const Login = () => {

  const [errors, setErrors] = useState({})

  const [formData, setFormData] = useState({
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

  const { data, error, loading, fn: fnLogin } = useFetch(login, formData);

  // Creating an object for keeping track of UrlState
  const {fetchUser} = UrlState();

  useEffect(() => {
    console.log(data);
    if (error === null && data) {
      navigate('/dashboard');
      fetchUser();
    }
  }, [data, error])

  // The function which handles the login logic
  const handleLogin = async () => {
    setErrors([]);
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      });

      await schema.validate(formData, { abortEarly: false });
      await fnLogin();
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
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your accout if you have one</CardDescription>
          {error && <Error message={error.message} />}
        </CardHeader>
        <CardContent className="space-y-2">
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
          <Button variant="outline" onClick={handleLogin}>
            {loading ? <BeatLoader size={10} color="#3b82f6" /> : "Login"}
          </Button>

        </CardFooter>
      </Card>

    </div>
  )
};

export default Login;
