import { useMediaQuery } from '@uidotdev/usehooks';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';

import { Avatar } from 'primereact/avatar';
import { Sidebar } from 'primereact/sidebar';
import Icon from "../../../assets/logo.png";
import Login from './Login';
const Navbar=()=>{
    const isSmallDevice = useMediaQuery("only screen and (max-width : 811px)");
    const [sidebar,setSidebar]=useState(false)
    useEffect(()=>{
        AOS.init()
    },[])
    return(
        <div className="w-[100vw] h-[10vh] shadow-md bg-[#4069e5] p-5 flex items-center fixed top-0">
            <div className="flex">
                <img src={Icon} className={`${isSmallDevice ? "h-[100%] w-[20%]" : "h-[100%] w-[10%]" } `}/>
            </div>
            <div className="ml-auto flex gap-10">
                {!isSmallDevice&&
                    <>
                        {/* <a className=' text-white flex items-center gap-3 no-underline' href='#'>
                            <span className='pi pi-home'></span>
                            <h3>Home</h3>
                        </a>
                        <a className=' text-white w-auto flex items-center gap-3 no-underline' href='#'>
                            <span className='pi pi-shopping-bag'></span>
                            <h3>Product</h3>
                        </a>
                        <a className=' text-white flex items-center gap-3 no-underline' href='#'>
                            <span className='pi pi-user'></span>
                            <h3>Company</h3>
                        </a>
                        <a className=' text-white flex items-center gap-3 no-underline' href='#'>
                            <span className='pi pi-calendar'></span>
                            <h3>Event</h3>
                        </a>
                        <Avatar label="R" size="large" style={{ backgroundColor: 'red', color: '#ffffff' }} shape="circle" /> */
                        <Login/>}
                    </>
                }
                {isSmallDevice &&
                    <>
                        <Button icon="pi pi-align-justify" className='bg-transparent border-none' onClick={()=>setSidebar(!sidebar)}/>

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
