import { useMediaQuery } from "@uidotdev/usehooks";
import Icon from "../../../assets/logo.png";
const Footer=()=>{
    const isSmallDevice = useMediaQuery("only screen and (max-width : 811px)");
    return(
        <div className="bg-black w-full h-auto">
            <div className={`p-10 gap-5 flex justify-center ${isSmallDevice ? "flex-col":"flex-row  items-center"}  w-[100vw] `}>
                <div className={`${isSmallDevice ? "w-[100%]}":"w-[30%]"}`}>
                    <div className="flex">
                        <img src={Icon} className={`${isSmallDevice ? "w-[20%]":"w-[30%]"}`}/>
                    </div>
                    <h1 className={`text-white mt-5 ${isSmallDevice ? "text-[1rem]":"text-[1.3rem]"}`}>
                       Grow your business using the latest technology with user-friendly services
                    </h1>
                </div>

                <div className={`${isSmallDevice ? "w-[100%]}":"w-[30%]"} flex flex-col `}>
                    <h1 className={`text-white ${isSmallDevice? "text-[1.4rem]": "text-[2rem]"}`}>Our Social Media</h1>
                    <div className="flex  gap-3 text-white items-center">
                        <span className="pi pi-youtube"></span>
                        <p>Youtube</p>
                    </div>
                    <div className="flex  gap-3 text-white items-center">
                        <span className="pi pi-facebook"></span>
                        <p>Facebook</p>
                    </div>
                    <div className="flex  gap-3 text-white items-center">
                        <span className="pi pi-instagram"></span>
                        <p>Instagram</p>
                    </div>

                </div>
            </div>
            <ul className="p-10 flex justify-center gap-10 text-gray-400 border-t-gray-400 border-t-2">
                <li>
                    Site Map
                </li>
                <li>
                    Privacy Policy
                </li>
                <li>
                    Terms & Condition
                </li>
                <li>
                    Forumus
                </li>
            </ul>
        </div>
    )
}
export default Footer
