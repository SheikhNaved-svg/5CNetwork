import data from "../data/data";
import Card from "../Components/Card";
import { NavLink } from "react-router-dom";
export default function IbReadmore(){
    return(
        <div>
        <div className="pt-10 w-full">
          <div className="flex justify-center">
            <h1 className="font-semibold text-[36px] text-center   leading-[54px] tracking-[0.5px] text-transparent bg-clip-text bg-custom-gradient2">
              Read More{" "}
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5  gap-10 2xl:gap-14">
            {data.slice(4).map((item, index) => (
              <NavLink
                key={index}
                to={`/innerblog/${item.id}`}
                onClick={() => window.scrollTo(0, 0)}
              >
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

          {/*pagination*/}
          <div className="flex gap-3 justify-center items-center w-full py-10">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
              >
                <circle cx="5.5" cy="5" r="5" fill="#2D5980" />
              </svg>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
              >
                <circle cx="5.5" cy="5" r="5" fill="#D9D9D9" />
              </svg>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
              >
                <circle cx="5.5" cy="5" r="5" fill="#D9D9D9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
}