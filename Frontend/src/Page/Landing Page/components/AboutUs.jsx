import { useMediaQuery } from "@uidotdev/usehooks";
import about from "../../../assets/about.png";
const AboutUs=()=>{
    const isSmallDevice = useMediaQuery("only screen and (max-width : 811px)");
    return(
        <>
              {
                isSmallDevice &&
                <div className={`w-[100vw] h-[80vh]  flex flex-col p-[5%] py-[10%]  `}  >
                    <div className='w-[100%]  h-[80%]  flex justify-center items-center'>
                        <div className=' h-[70%] w-[70%] rounded-xl ' data-aos="flip-right">
                        <img src={about} className="'h-[100%] w-[100%]"/>
                        </div>
                    </div>
                    <div className={`w-[95%] h-100 flex  text-white justify-center items-center flex-col  `} data-aos="fade-up">
                        <div className='mr-auto flex' >
                            <h1 className='text-start text-[2rem] text-black'>
                                About Us
                            </h1>

                        </div>
                        <div className='mr-auto'>
                            <p className='mt-5 text-[1.5rem] mb-5 text-black'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fuga dolor blanditiis accusantium id iusto, tempora recusandae itaque rerum ex dolorum excepturi impedit mollitia, similique fugiat nostrum maxime, modi enim?
                            </p>

                        </div>
                    </div>

                </div>
            }
            {
                !isSmallDevice &&
                <div className={`w-[100vw] h-[100vh]  flex  `}>

                    <div className={`w-[50vw] h-100 flex   justify-center items-center flex-col pl-[10%] `} data-aos="fade-right">
                        <div className='mr-auto flex' >
                            <h1 className='text-start text-[3rem] text-black'>
                                About Us
                            </h1>

                        </div>
                        <div className='mr-auto'>
                            <p className='mt-5 text-[1.5rem] mb-5 text-black'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, minus odio itaque autem, est ut excepturi iure animi repudiandae totam velit, facilis nesciunt. Ratione, accusamus eligendi facilis officiis itaque perferendis!
                            </p>
                        </div>

                    </div>
                    <div className='w-[50vw]   flex justify-center items-center' data-aos="flip-right">
                        <div className=' h-[70%] w-[70%] rounded-xl '>
                            <img src={about} className="h-[100%]"/>
                        </div>
                    </div>

                </div>
            }
        </>
    )
}
export default AboutUs
