import home from "../images/home.png";
import plus from "../images/plus.png";
import budget from "../images/budget.png";
import add_expense from "../images/add_expense.png";
import lend from "../images/lend.png";
import wavy_bg from "../images/wavy_bg.jpg"; 
import wallet from "../images/wallet.png";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

function Footer() {

    const [image , setImage] = useState(false);

    const  [budgetImage , setBudgetImage] = useState(false);

    const [plusDiv , setPlusDiv] = useState(false);

    const Navigate = useNavigate()

    const handleClick = () => {
        Navigate("/expense");
    } 

    const handleClickLend = () => {
        Navigate("/lend");
    }

    const handleClickToHome = () => {
        Navigate("/home")
    }

    const handleClickToReport = () => {
        Navigate("/report")
    }

    const handleClickToWallet = () => {
        Navigate("/wallet")
    }

    return (
        <div className="w-full flex justify-center">
            <div className="w-[35%] flex justify-center items-center border-2 border-t-0 border-l-[#f5ebe0] border-r-[#f5ebe0] border-b-[#f5ebe0] bg-white pt-6">
                <div className="w-[100%] bg-[#fcfcfc] flex items-center justify-evenly mt-2">

                    <div className="w-[12%] flex justify-center items-center mt-8 mb-5">
                        <div onMouseEnter={() => setImage(true)} onMouseLeave={() => setImage(false)} className="w-[90%] object-contain flex justify-center items-center flex-col">
                            {image &&  (
                                <img src={home} className="w-[40%] object-contain p-1 animate-bounce duration cursor-pointer" onClick={handleClickToHome}/>
                            )}

                            <p className={`text-[15px] font-bold transition-all duration-400 font-Poppins ${image ? "-translate-y-2" : "translate-y-0"} cursor-pointer`}>Home</p>
                        </div>	
                    </div>




                    <div className="w-[20%] bg-[#fcfcfc] relative h-[75px] flex items-center justify-center">
                    {/* Shallow Dip */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-[150px] h-[75px] bg-white rounded-b-full z-10" />

                    {/* ✅ Independent DIV above the plus image */}
                    {plusDiv && (
                        <div className="absolute left-1/2 -translate-y-[110px] transform -translate-x-1/2 z-30 bg-white rounded-4xl shadow-lg flex h-[100px] w-[200px] cursor-pointer justify-evenly items-center">
                            <div className="w-[100%] flex object-contain rounded-4xl border-2 border-[#f5ebe0] justify-evenly items-center p-4"  style={{backgroundImage : `url(${wavy_bg})`}}> 
                                <div className="flex items-center 0 w-[30%] mt-2 mb-2"> 
                                    <img src={add_expense} onClick={handleClick} className="p-1
                                    " alt="transaction register" />
                                </div>
                                <div className="flex justify-center items-center p-1 w-[30%]">
                                    <img src={lend} onClick={handleClickLend} className="" alt="transaction register" />
                                </div>
                                <div className="flex justify-center items-center p-1 w-[30%]">
                                    <img src={wallet} onClick={handleClickToWallet} className=" p-1" alt="wallet" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Plus Button */}
                    <div
                        onClick={() => setPlusDiv(!plusDiv)}    
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-[15px] z-30 cursor-pointer rounded-full p-2"
                    >
                        <img className="w-[60px] h-[60px]" src={plus} alt="plus icon" />
                    </div>
                    </div>


                    
                    <div className="w-[10%] flex justify-center items-center mt-8 mb-5">
                        <div onMouseEnter={() => setBudgetImage(true)} onMouseLeave={() => setBudgetImage(false)} className="w-[90%] object-contain flex justify-center items-center flex-col">

                            {budgetImage &&  (
                                <img src={budget} className="w-[70%] object-contain p-1 animate-bounce duration cursor-pointer" onClick={handleClickToReport}/>
                            )}

                            <p className={`text-[15px] font-bold transition-all duration-400 font-Poppins ${budgetImage ? "-translate-y-2" : "translate-y-0"} cursor-pointer`}>Budget</p>
                        
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default Footer;