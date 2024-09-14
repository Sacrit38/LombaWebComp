import { useMediaQuery } from '@uidotdev/usehooks';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from 'primereact/button';
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from 'react';

import { Avatar } from 'primereact/avatar';
import { Sidebar } from 'primereact/sidebar';
import Icon from "../../../assets/logo.png";
const Navbar = ({cari,home,product,company,event}) => {
    const isSmallDevice = useMediaQuery("only screen and (max-width : 811px)");
    const [sidebar, setSidebar] = useState(false)
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className="w-[100vw] h-[18vh] shadow-md bg-black p-5 pb-0 pt-11  flex items-center fixed top-0">
            <div className='flex flex-col gap-5 '>

                {!isSmallDevice &&
                    <>
                        <div className="flex gap-10 items-center">
                            <img src={Icon} className={`h-[4vh] w-[7vw]" } `} />
                            <IconField iconPosition="left" className='flex items-center  '>
                                <InputIcon className="pi pi-search my-auto"> </InputIcon>
                                <InputText onChange={cari} v-model="value1" placeholder="Search" className='w-[70vw] rounded-3xl ' />
                            </IconField>
                            <a href="/"><i className="items-center px-4 text-3xl text-white pi pi-bell"></i></a>  {/* bell */}
                            <a href="/"><i className="items-center px-4 text-3xl text-white pi pi-circle"></i></a> {/* account */}
                        </div>

                        <div className='flex w-[100vw] justify-center text-white gap-5 mt-auto  text-[1.3rem]'>
                            <a className={`${home ? "border-b-[8px] border-solid border-white border-0 w-[10%] text-center no-underline text-white":"w-[10%] text-center text-white no-underline"}`} >Home</a>
                            <a className={`${product ? "border-b-[8px] border-solid border-white border-0 w-[10%] text-center no-underline text-white":"w-[10%] text-center text-white no-underline"} ` } href='products/foryou'>Product</a>
                            <a className={`${company ? "border-b-[8px] border-solid border-white border-0 w-[10%] text-center  no-underline text-white":"w-[10%] text-center text-white no-underline"}`} href='/company'>Company</a>
                            <a className={`${event ? "border-b-[8px] border-solid border-white border-0 w-[10%] text-center no-underline text-white":"w-[10%] text-center text-white no-underline"}`}>Event</a>
                        </div>

                    </>
                }

                {isSmallDevice &&
                    <>
                        <IconField iconPosition="left" className='flex items-center  '>
                            <InputIcon className="pi pi-search my-auto"> </InputIcon>
                            <InputText v-model="value1" placeholder="Search" className='w-[70vw] rounded-3xl ' />
                        </IconField>
                        <Button icon="pi pi-align-justify" className='bg-transparent border-none' onClick={() => setSidebar(!sidebar)} />

                        <Sidebar visible={sidebar} onHide={() => setSidebar(false)} >
                            <div className='flex gap-3 p-5'>
                                <Avatar label="R" size="large" style={{ backgroundColor: 'blue', color: '#ffffff' }} />
                                <div>
                                    <h3 className='text-black'>
                                        Rifki Ahmad Rivera
                                    </h3>
                                    <h4 className='text-black'>
                                        rifki@gmail.com
                                    </h4>

                                </div>
                            </div>
                            <div className='flex flex-col gap-5 p-5'>
                                <a className='w-100 text-blue-800 flex items-center gap-3'>
                                    <span className='pi pi-home'></span>
                                    <h3>Home</h3>
                                </a>
                                <a className='w-100 text-blue-800 flex items-center gap-3'>
                                    <span className='pi pi-shopping-bag'></span>
                                    <h3>Product</h3>
                                </a>
                                <a className='w-100 text-blue-800 flex items-center gap-3'>
                                    <span className='pi pi-user'></span>
                                    <h3>Company</h3>
                                </a>
                                <a className='w-100 text-blue-800 flex items-center gap-3'>
                                    <span className='pi pi-calendar'></span>
                                    <h3>Event</h3>
                                </a>
                                <a className='w-100 text-blue-800 absolute bottom-6 flex items-center gap-3'>

                                    <span className='pi pi-sign-out'></span>
                                    <h3>Logout</h3>
                                </a>
                            </div>



                        </Sidebar>
                    </>
                }
            </div>




        </div>
    )
}
export default Navbar
