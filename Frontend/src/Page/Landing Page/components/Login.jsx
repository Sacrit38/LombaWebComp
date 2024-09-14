import axios from "axios";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toast } from 'primereact/toast';
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
const Login = () => {
    const [passwordVisible, setPassowrdvisible] = useState(false);
    const togglePassword = () => {
        setPassowrdvisible(!passwordVisible);
    };
    const toast = useRef(null);
    const [page,setPage]=useState("login")
    const navigate=useNavigate()

    const [visible, setVisible] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [namasign,setNamaSign]=useState()
    const [emailsign,setEmailSign]=useState()
    const [passwordsign, setPasswordSign] = useState();
    const [keep,setKeep]=useState(false)
    const Submit = async (event) => {
        event.preventDefault();
        let data = await axios.post("http://localhost:8000/login", {
            email: email,
            password: password,
        });
        if (data.data != "gagal") {
            return navigate("/home");
        }
    };
    const Close=()=>{
        if (!visible) return;
        setVisible(false);
        setPage("login")
    }
    return (
        <>
            <div className="">
                <Button label="Login" rounded onClick={() => setVisible(true)} outlined className="text-white" />
                <Dialog
                    draggable={false}
                    visible={visible}

                    onHide={Close}
                    className="w-[40vw]"
                >
                    {page=="login"&&
                        <>
                            <h1 className="text-center text-black mb-3">Login</h1>

                            <Toast ref={toast} />
                            <form onSubmit={Submit} className="flex flex-col w-full p-4 ">
                                <label htmlFor="" className="font-semibold text-black">Email</label>
                                <InputText required type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="mb-4 font-semibold w-100" />
                                <label htmlFor="" className="font-semibold text-black">Password</label>
                                <InputText required onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="w-full mb-4 font-semibold" />
                                <div className="flex items-center gap-3 ">
                                    <Checkbox onChange={e => setKeep(e.checked)} checked={keep}></Checkbox>
                                    <p className="text-black">Keep Login</p>
                                </div>
                                <Button label="Login"  className="bg-black text-white mt-3 rounded-md"/>
                                <div className="flex justify-center my-3">
                                    <p className="text-black">Doesn't have an account ? </p>
                                    <button type="button" className="bg-white border-none text-blue-800" onClick={()=>setPage("signup")}>Sign up</button>
                                </div>
                                <div class="flex items-center justify-center my-4">
                                    <div class="flex-grow border-t border-black border-solid"></div>
                                    <span class="mx-4 text-black">OR</span>
                                    <div class="flex-grow border-t border-black border-solid"></div>
                                </div>


                                <div className="flex items-center justify-center w-full gap-3 my-4 border">
                                    <Avatar icon="pi pi-google" className="bg-red-500 text-white" size="large" shape="circle" />
                                    <Avatar icon="pi pi-facebook" className="bg-blue-500 text-white" size="large" shape="circle" />
                                </div>

                            </form>
                        </>
                    }
                    {page=="signup"&&
                        <>
                            <SignUp/>
                        </>
                    }

                </Dialog>
            </div>
        </>
    );
};
export default Login;
