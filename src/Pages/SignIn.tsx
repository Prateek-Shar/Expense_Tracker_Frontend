import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg_image from "../images/bg_image.png";
import eye_open from "../images/eye_open.png";
import eye_close from "../images/eye_close.png";

function SignIn() {

    const navigate = useNavigate()

    const defaultForm = {
        UserName: "" , 
        password: "",
    }

    const [showDiv , setShowDiv] = useState(false)
    const [form , setForm] = useState(defaultForm)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name , value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const ValidateLogin = async (e: React.FormEvent) => {  
        e.preventDefault();
      
        try {
          const res = await fetch("https://expense-tracker-backend-ibme.onrender.com/authenticateLogin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // credentials : 'include',
            body: JSON.stringify(form),
          });
          
          if(!res.ok) {
            console.log("Something broke at frontend")
          }

          const data = await res.json();

          console.log("Login successful:", data);
          alert("Login Successful!");
          handleClicktoHome();

        } catch (err) {
          console.error("Error:", err);

        } finally {
          setForm({ ...defaultForm });
        }
    };

    const handleClicktoSignUp = () => {
        navigate("/signup")
    }

    const handleClicktoHome = () => {
        navigate("/home")
    }


    return (
        <div className="w-full bg-cover h-screen flex justify-center items-center" style={{ backgroundImage: `url(${bg_image})` }} >
            <div className="border-[#2b7fff] border-2 w-[30%] rounded-lg flex flex-col items-center bg-white bg-opacity-80 justify-evenly">

                <form onSubmit={ValidateLogin} method="POST" className="flex flex-col items-center justify-center w-full overflow-hidden">
                    <div className="w-[90%] rounded-lg "> 
                        <input type="text" placeholder="Enter Name" name="UserName" className="w-[100%] p-4 mt-4 border-2 border-[#f1f1fa] rounded-lg focus:outline-none" onChange={handleChange} value={form.UserName} required />
                    </div>

                    <div className="w-[90%] rounded-lg border-2 border-[#f1f1fa] mt-4 flex">
                        <div className="w-[90%]"> 
                            <input
                                type={showDiv ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                                className="w-[100%] p-3 rounded-lg mb-2 focus:outline-none"
                                onChange={handleChange}
                                value={form.password}
                                required
                            />
                        </div>
                        <div
                            className="w-[10%] flex justify-center items-center"
                            onClick={() => setShowDiv((prev) => !prev)}
                            style={{ cursor: "pointer" }}
                        >
                            <img
                                src={showDiv ? eye_open : eye_close}
                                className="object-contain w-[70%]"
                                alt={showDiv ? "Hide password" : "Show password"}
                            />
                        </div>
                    </div>  

                    {/* <div className="w-[90%] rounded-lg flex border-2 border-[#f1f1fa] mt-3 mb-5"> 
                        <div className="w-5 h-5 rounded border-2 border-gray-400 mt-4 mb-3 mr-5 ml-2 hover:bg-blue-600"></div>

                        <div className=" w-[90%] flex items-center justify-center p-1">
                            <p>By Signing up , you agree to the <span className="text-[#7f3dff]">Terms of Service and Privacy Policy</span></p>
                        </div>
                    </div> */}

                    <div className="w-[90%] mb-4 mt-3 flex justify-center">
                        <button type="submit" className="bg-blue-500 w-[60%] text-white rounded-[15px] p-4 cursor-pointer">Login</button>
                    </div>
                </form>

                <div className="w-[30%]">
                    <button type="submit" className=" p-1 w-[100%] bg-[#eee5ff] text-[#7f3dff] font-poppins rounded-md cursor-pointer mb-3 mt-5">Forgot Password ?</button>
                </div>

                {/* <div className="w-[90%] border-[#f1f1fa] border-2 flex items-center justify-center rounded-lg mb-3 mt-3 p-2">
                    <img src={google} className="w-[10%] object-contain p-2 mr-2"  alt="Google Sign Up" />
                    <div className="p-3 text-[20px]">Sign Up With Google</div>
                </div> */}

                <div className="border-[#eee5ff] w-[90%] flex border-2 mt-3 mb-8">
                    <div className="w-[65%] text-[#91919f] p-2  flex items-center flex-row-reverse">
                        <p>Don't have any account ? </p>
                    </div>

                    <div className="w-[35%] ">
                        <button type="submit" className="pt-2 pb-2 w-[100%]  text-[#7f3dff] rounded-md cursor-pointer flex items-center" onClick={handleClicktoSignUp}>Sign Up</button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default SignIn;