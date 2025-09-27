import log_out from "../images/log_out.png"
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate()

  const handleClickToLogout = () => {
    navigate("/")
  } 

  return (
 
    <div className="w-full flex">

      <div className="w-[57%] flex flex-row-reverse">
          <div className="border-[#0077b6] w-[21%] rounded-[20px] flex items-center justify-center border-2 m-1">
              <h1 className="font-semibold text-[24px] text-[#64748B] p-5 w-[100%] bg-linear-to-r from-[#48cae4] to-[#90e0ef] flex items-center rounded-[19px] justify-center">Expense Tracker</h1>
          </div>
      </div>


      <div className="w-[43%] flex flex-row-reverse  items-center ">

        <div className="w-[20%] flex bg-red-600 mr-10 rounded-4xl hover:cursor-pointer p-5" onClick={handleClickToLogout}>
          <div className="w-[20%] flex justify-center items-center">
            <img src={log_out} />
          </div>

          <div className="w-[80%] flex items-center justify-center">
            <p className="font-Poppins">Sign Out</p>
          </div>
        </div>

      </div>

    </div>

  );
}   

export default Navbar;