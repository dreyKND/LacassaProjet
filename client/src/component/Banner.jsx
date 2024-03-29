import React from "react";
import house from "../images/house.jpg"
const Banner = () =>{
    return(
        
        <div className="relative sm:h-96 h-80 xl:h-[600px] lg:h-[500px] 2xl:h-[700px]">
            <img className=" object-cover w-full " src={house}
             />
             <div className=" absolute top-1/4 w-full  text-center">
                <p className="text-3xl font-extrabold text-white  ">Not sure what to choose?</p>

                <button className=" px-10 py-4 my-3 hover:shadow-xl bg-white rounded-full"> click here</button>
             </div>
        </div>

    

    )
}
export default Banner;