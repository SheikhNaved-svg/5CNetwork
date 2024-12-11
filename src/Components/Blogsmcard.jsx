import data from "../data/data"
import { useState } from "react"
import { NavLink } from "react-router-dom"

import Card from "../Components/Card"



export default function Blogsmcard(){
    const [datas,setDatas]=useState(data)
    return(
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 2xl:gap-20 pt-16 px-5 lg:px-20 2xl:px-40 custom-lg:px-60">
          {datas.slice(1).map((item,i) => (
            <NavLink key={i}  to={`/innerblog/${item.id}`}>
              <Card
                author={item.author}
                date={item.date}
                title={item.title}
                content={item.content}
                image={item.imageUrl}
              />
            </NavLink>
          ))}
        </div>
    )
}