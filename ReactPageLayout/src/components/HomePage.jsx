import React from "react";
import Header1 from "./Header1.jsx";
import SearchBar from "./SearchBar.jsx";
import EmployeeList from "./EmployeeList.jsx";

export default function HomePage()
{
    return (
        <>
        <div className="home"> 
        <Header1/>
        <SearchBar/>
        <EmployeeList/>
        </div>
        </>
    )
}