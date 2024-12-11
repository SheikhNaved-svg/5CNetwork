import BookDemo from '../buttons/BookDemo.jsx'
export default function ServiceBookdemo(){
    return(
        <div className="px-5 lg:px-40 2xl:px-60 custom-lg:px-96 flex flex-col items-center gap-10">
        <div className="flex flex-col gap-5 text-center 2xl:text-xl">
        <p>Every dream has its roots in reality. Kalyan, one of our co-founders, from personal experience decided to set on this path of not having any patient left without an accurate and timely diagnosis. He believes that the transition of India using advanced high-tech will be instrumental in assisting healthcare professionals to make better decisions contributing to the dream of healthier India, one image at a time.</p>
        <p>Syed Ahmed, our co-founder, 5C Network is well on its way realize this enormous mission with a team of 300+ expert radiologist experts and presence in 1000+ hospitals throughout the nation.</p>
        <p>We invite healthcare organizations to be a part of it. Let’s make India healthier together!</p>
        </div>

        {/*bookdemo button*/}
        <BookDemo />
    </div>
    )
}