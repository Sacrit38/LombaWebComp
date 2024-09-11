import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { useState } from "react";
const Login = () => {
    const [passwordVisible, setPassowrdvisible] = useState(false);
    const togglePassword = () => {
        setPassowrdvisible(!passwordVisible);
    };
    const [visible, setVisible] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const Submit = async (event) => {
        event.preventDefault();
        let data = await axios.post("http://localhost:8000/login", {
            username: email,
            password: password,
        });
        if (data.data != "") {
            return navigate("/home");
        }
    };
    return (
        <>
            <div className="">
                <Button label="Login" rounded onClick={() => setVisible(true)} />
                <Dialog
                    header="Login"
                    visible={visible}
                    onHide={() => {
                        if (!visible) return;
                        setVisible(false);
                    }}
                    className="w-3/12 "
                >
                    <h3 className="px-4 font-semibold">Enter Your Details here for LogIn</h3>
                    <form onSubmit={Submit} className="flex flex-col w-full p-4 ">
                        <label htmlFor="" className="font-semibold text-slate-500">Email</label>
                        <InputText required placeholder="Email" className="mb-4 font-semibold w-100" />
                        <label htmlFor="" className="font-semibold text-slate-500">Password</label>
                        <InputText required type="password" placeholder="Password" className="w-full mb-4 font-semibold" />
                        <hr />
                        <p className="flex justify-center font-semibold">Or</p>
                        <div className="flex items-center justify-center w-full gap-3 my-4 border">
                            <Button><span className="pi pi-facebook"></span>Facebook</Button>
                            <Button severity="info"><span className="pi pi-google" ></span>Google</Button>
                        </div>
                        <Button label="Login" />
                    </form>
                </Dialog>
            </div>
        </>
    );
};
export default Login;
