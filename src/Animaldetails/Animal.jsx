import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Animal(){
    const {id}=useParams();
    const [imgdata,setimgdata]=useState("");
    const [title,settitle]=useState("");
    const [desc,setdesc]=useState("");
    const [imagedata,setimagedata]=useState({
        imgdata:"",
        title:"",
        descp:"",
    });
    async function downloadprogress(){
        const resp=await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        console.log(resp);
        setimagedata({imgdata:resp.data.photo.url,title:resp.data.photo.title,descp:resp.data.photo.description});
    }
    useEffect(()=>{
        downloadprogress()
    },[])
    return(
        <>
        <div className="flex flex-wrap flex-col">
            <div className=" ml-60 ">
                <img src={imagedata.imgdata} alt="" />
            </div>
            <div>
               <h1 className="text-3xl">Title : {imagedata.title}</h1>
            </div>
            <div>
               <h1 className="text-2xl">Description : {imagedata.descp}</h1>
            </div>
        </div>
        </>
    )
}