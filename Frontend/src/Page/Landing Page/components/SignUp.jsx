import axios from "axios";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { SelectButton } from 'primereact/selectbutton';
import { Toast } from 'primereact/toast';
import { useRef, useState } from "react";
const SignUp=()=>{
    const toast = useRef(null);
    const [role,setRole]=useState()
    const [password,setPassword]=useState()
    const [email,setEmail]=useState()
    const [tlp,setTlp]=useState()
    const [first,setFirst]=useState()
    const [last,setLast]=useState()
    const [terms,setTerms]=useState(false)
    const items=[
        {name:"UMKM",value:"UMKM"},
        {name:"Event Organizer",value:"EventOrganizer"},
        {name:"Investor",value:"Investor"},
    ]
    const Submit=async(e)=>{
        e.preventDefault()
        try{
            let data=await axios.post("http://localhost:8000/api/register",{
                name:first+" "+last,
                email:email,
                telepon:tlp,
                password:password,
                role:role,

            })
            toast.current.show({ severity: 'info', summary: 'Info', detail: 'Account has successfully created' });
        }
        catch(e){
            toast.current.show({severity:'error', summary: 'Error', detail:'Something Wrong', life: 3000});
        }

    }
    return(
        <>
            <h1 className="text-center text-black mb-3">Sign up</h1>
            <Toast ref={toast} />
            <form className="flex flex-col w-full p-4 " onSubmit={Submit}>
                <div className="flex items-center justify-center gap-3">
                    <h3 className="text-black">As :  </h3>
                    <SelectButton required value={role} onChange={(e) => setRole(e.value)} optionLabel="name" options={items}  />
                </div>

                <div className="w-[100%] gap-3 flex mt-3">
                    <div className="w-[50%] flex flex-col ">
                        <label htmlFor="" className="font-semibold text-black">First Name</label>
                        <InputText className=" focus:border-2 w-[100%] focus:ring-0 border-black focus:ring-black focus:border-black" required onChange={(e)=>setFirst(e.target.value)} placeholder="first name" />

                    </div>
                    <div>
                        <label htmlFor="" className="font-semibold text-black">First Name</label>
                        <InputText className=" focus:border-2 w-[100%] focus:ring-0 border-black focus:ring-black focus:border-black" required onChange={(e)=>setLast(e.target.value)} placeholder="first name" />
                    </div>
                </div>
                <div className="mt-3">
                    <label htmlFor="" className="font-semibold text-black mt-3">Email</label>
                    <InputText type="email" className=" focus:border-2 w-[100%] focus:ring-0 border-black focus:ring-black focus:border-black" required onChange={(e)=>setEmail(e.target.value)} placeholder="email" />
                </div>
                <div className="mt-3">
                    <label htmlFor="" className="font-semibold text-black mt-3">Telephone</label>
                    <InputText keyfilter="int"  className=" focus:border-2 w-[100%] focus:ring-0 border-black focus:ring-black focus:border-black" required onChange={(e)=>setTlp(e.target.value)} placeholder="telephone" />
                </div>
                <div className="mt-3">
                    <label htmlFor="" className="font-semibold text-black mt-3">Password</label>
                    <InputText type="password" className=" focus:border-2 w-[100%] focus:ring-0 border-black focus:ring-black focus:border-black" required onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
                </div>
                <div className="flex gap-3 items-center mt-3">
                    <Checkbox  onChange={e => setTerms(e.checked)} checked={terms}></Checkbox>
                    <p>
                    By signing up, I agree with the Terms of Use & Privacy Policy
                    </p>
                </div>
                {terms ? <Button label="Sign Up" className="bg-black focus:ring-0 border-none mt-4 text-white"/> : <Button disabled label="Sign Up" className="bg-black focus:ring-0 border-none mt-4 text-white"/>}

                <div className="flex">
                    <p >Already have an account ? </p>
                    <button type="button" className="bg-white border-none text-blue-800" onClick={()=>setPage("login")}>Login</button>
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
    )
}
export default SignUp
