import React from "react";
import { Route,Routes } from "react-router-dom";
import Galleryimage from "../customhook/gallery";
import Animal from "../Animaldetails/Animal";
export default function CustomRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Galleryimage/>} />
            <Route path="/animal/:id" element={<Animal/>}/>
        </Routes>
    )
}