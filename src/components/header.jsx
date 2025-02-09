import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import Logo from "@/assets/image.png";
import { UrlState } from "../context";
import useFetch from "../hooks/use-fetch";
import { logout } from "../db/apiAuth";
import { BarLoader } from "react-spinners";
import { LayoutDashboard, PlusCircle } from "lucide-react";

const Header = (props) => {
    const navigate = useNavigate();

    // To show what the user should see if logged in or not
    const { isAuthenticated, fetchUser } = UrlState();
    const [toShow, setToShow] = useState("Sign In");

    useEffect(() => {
        if (isAuthenticated) {
            setToShow("Log Out");
        } else {
            setToShow("Sign In");
        }
    }, [isAuthenticated]);

    const { loading, fn: fnLogout } = useFetch(logout)

    // This is to handle what that button does signin or logout
    const handleClick = () => {
        if (toShow === "Log Out") {
            fnLogout().then(() => {
                navigate('/');
                fetchUser();
            })
        } else {
            navigate('/auth');
        }
    }

    return <>
        <nav className="flex items-center justify-between px-4 py-4 mx-auto">
            <div className="flex gap-4 items-center">
                <Link>
                    <img src={Logo} alt="logo" className="h-8" />
                </Link>
                <p className="text-2xl font-semibold">
                    Xpense
                </p>
            </div>
            <div className="gap-2 flex">
                {isAuthenticated && (
                    <Button variant="outline" onClick={() => {
                        navigate('/dashboard')
                    }}>
                        <LayoutDashboard size={18} />
                        <span className="hidden md:inline">Dashboard</span>
                    </Button>
                )}
                {isAuthenticated && (
                    <Button variant="" className="text-color-white" onClick={() => {
                        navigate('/transaction/create')
                    }}>
                        <PlusCircle size={18} />
                        <span className="hidden md:inline">Add Transaction</span>
                    </Button>
                )}
                <Button variant="outline" onClick={handleClick}>{toShow}</Button>
            </div>
        </nav>
        {loading && <BarLoader className="mb-4" width={"100%"} color="#3b82f6" />}
    </>;
};

export default Header;
