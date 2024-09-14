import { useMediaQuery } from '@uidotdev/usehooks';
import 'aos/dist/aos.css';
import bg from "../../assets/background.png";
import local from "../../assets/local.png";
import marketing from "../../assets/marketing.png";
import tenant from "../../assets/tenant.png";
import AboutUs from './components/AboutUs';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Typewriter from './TyperWriter';
const LandingPage=()=>{
    const isSmallDevice = useMediaQuery("only screen and (max-width : 811px)");

    return(
        <div className='overflow-hidden'>

            {
                isSmallDevice &&
                <div className={`w-[100vw] h-[60vh]  flex flex-col p-[5%] py-[15%]  bg-cover bg-center bg-no-repeat`}  style={{ backgroundImage: `url(${bg})`}}>
                    <div className='w-[100%]  h-[80%]  flex justify-center items-center'>
                        <div className=' h-[70%] w-[70%] rounded-xl' data-aos="fade-up">
                            <img src={local} className='h-[100%]'/>
                        </div>
                    </div>
                    <div className={`w-[95%] h-100 flex  text-white justify-center items-center flex-col  `}>
                        <div className='mr-auto'>
                            <h1 className='text-start text-[1.2rem]'>
                                <Typewriter text="OPTIMIZE FOR MSMEs " delay={100} />
                            </h1>
                        </div>

                        <h2 className='mt-5 text-[1rem]'>
                            helping MSME businesses to continue to develop, and be able to continue to compete internationally
                        </h2>
                    </div>

                </div>
            }
            {
                !isSmallDevice &&
                <div className={`w-[100vw] h-[100vh]  flex  bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: `url(${bg})`}}>
                    <div className={`w-[50vw] h-100 flex  text-white justify-center items-center flex-col pl-[10%] `}>
                        <div className='mr-auto'>
                            <h1 className='text-start text-[3rem]'>
                                <Typewriter text="OPTIMIZE FOR MSMEs " delay={100} />
                            </h1>
                        </div>

                        <h2 className='mt-5 text-[2rem]'>
                            helping MSME businesses to continue to develop, and be able to continue to compete internationally
                        </h2>
                    </div>
                    <div className='w-[50vw]   flex justify-center items-center' data-aos="flip-left">
                        <div className='h-[50%] w-[50%] rounded-xl '>
                         <img src={local} className='h-[100%]'/>
                            {/* <Store/> */}
                        </div>
                    </div>
                </div>
            }
            <Feature/>
            {/* marketing */}
            {
                isSmallDevice &&
                <div className={`w-[100vw] h-[60vh]  flex flex-col p-[5%] py-[10%]  `}  >
                    <div className='w-[100%]  h-[80%]  flex justify-center items-center' data-aos="flip-right">
                        <div className=' h-[70%] w-[70%] rounded-xl s' >
                            <img src={marketing} className='h-[100%] w-[100%]'/>
                        </div>
                    </div>
                    <div className={`w-[95%] h-100 flex  text-white justify-center items-center flex-col  `} data-aos="fade-up">
                        <div className='mr-auto flex' >
                            <h1 className='text-start text-[2rem] text-blue-400'>
                                Marketing
                            </h1>
                            <h1 className='text-start text-[2rem] text-black'>
                                Product
                            </h1>
                        </div>
                        <div className='mr-auto'>
                            <p className='mt-5 text-[1.5rem] mb-5 text-black'>
                                Market the products you make at our place
                            </p>
                            <a href='#' className='mt-10 text-[.9rem] text-blue-40000 no-underline'>
                                <div className='flex items-center gap-2'>
                                    <p>
                                    Learn More
                                    </p>
                                    <span className='pi pi-arrow-right'></span>
                                </div>

                            </a>
                        </div>
                    </div>

                </div>
            }
            {
                !isSmallDevice &&
                <div className={`w-[100vw] h-[100vh]  flex  `}>
                    <div className='w-[50vw]   flex justify-center items-center' data-aos="flip-right">
                        <div className='h-[50%] w-[50%] rounded-xl '>
                        <img src={marketing} className='h-[100%]'/>
                        </div>
                    </div>
                    <div className={`w-[50vw] h-100 flex   justify-center items-center flex-col pl-[10%] `} data-aos="fade-left">
                        <div className='mr-auto flex' >
                            <h1 className='text-start text-[3rem] text-blue-400'>
                                Marketing
                            </h1>
                            <h1 className='text-start text-[3rem] text-black'>
                                Product
                            </h1>
                        </div>
                        <div className='mr-auto'>
                            <p className='mt-5 text-[1.5rem] mb-5 text-black'>
                                Market the products you make at our place
                            </p>
                            <a href='#' className='mt-10 text-[1.3rem] text-blue-40000 no-underline'>
                                <div className='flex items-center gap-2'>
                                    <p>
                                        Learn More
                                    </p>
                                    <span className='pi pi-arrow-right'></span>
                                </div>

                            </a>
                        </div>

                    </div>

                </div>
            }
            {/* tenant */}
            {
                isSmallDevice &&
                <div className={`w-[100vw] h-[60vh]  flex flex-col p-[5%] py-[10%]  `}  >
                    <div className='w-[100%]  h-[80%]  flex justify-center items-center' data-aos="flip-right" >
                        <div className='h-[70%] w-[70%] rounded-xl ' >
                            <img src={tenant} className='h-[100%] w-[100%]'/>
                        </div>
                    </div>
                    <div className={`w-[95%] h-100 flex  text-white justify-center items-center flex-col  `} data-aos="fade-up">
                        <div className='mr-auto flex' >
                            <h1 className='text-start text-[2rem] text-blue-400'>
                                Open
                            </h1>
                            <h1 className='text-start text-[2rem] text-black'>
                                Tenant
                            </h1>
                        </div>
                        <div className='mr-auto'>
                            <p className='mt-5 text-[1.5rem] mb-5 text-black'>
                                Create your open tenant promotion here
                            </p>
                            <a href='#' className='mt-10 text-[.9rem] text-blue-40000 no-underline'>
                                <div className='flex items-center gap-2'>
                                    <p>
                                    Learn More
                                    </p>
                                    <span className='pi pi-arrow-right'></span>
                                </div>

                            </a>
                        </div>
                    </div>

                </div>
            }
            {
                !isSmallDevice &&
                <div className={`w-[100vw] h-[100vh]  flex  `}>

                    <div className={`w-[50vw] h-100 flex   justify-center items-center flex-col pl-[10%] `} data-aos="fade-right">
                        <div className='mr-auto flex' >
                            <h1 className='text-start text-[3rem] text-blue-400'>
                                Open
                            </h1>
                            <h1 className='text-start text-[3rem] text-black'>
                                Tenant
                            </h1>
                        </div>
                        <div className='mr-auto'>
                            <p className='mt-5 text-[1.5rem] mb-5 text-black'>
                                Create your open tenant promotion here
                            </p>
                            <a href='#' className='mt-10 text-[1.3rem] text-blue-40000 no-underline'>
                                <div className='flex items-center gap-2'>
                                    <p>
                                    Learn More
                                    </p>
                                    <span className='pi pi-arrow-right'></span>
                                </div>

                            </a>
                        </div>

                    </div>
                    <div className='w-[50vw]   flex justify-center items-center' data-aos="flip-right">
                        <div className=' h-[60%] w-[60%] rounded-xl '>
                        <img src={tenant} className='h-[100%]'/>
                        </div>
                    </div>

                </div>
            }
            <AboutUs/>

            <Footer/>
            <Navbar/>
        </div>
    )
}
export default LandingPage
