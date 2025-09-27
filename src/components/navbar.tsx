import log_out from "../images/log_out.png"

const Navbar = () => {

  return (
 
    <div className="w-screen flex">

      <div className="w-[57%] flex flex-row-reverse">
          <div className="border-[#0077b6] w-[21%] rounded-[20px] flex items-center justify-center border-2 m-1">
              <h1 className="font-semibold text-[24px] text-[#64748B] p-5 w-[100%] bg-linear-to-r from-[#48cae4] to-[#90e0ef] flex items-center rounded-[19px] justify-center">Expense Tracker</h1>
          </div>
      </div>


      <div className="w-[43%] flex flex-row-reverse  items-center">

        <div className="w-[20%] flex bg-red-600 mr-10 rounded-2xl">
          <div className="w-[20%] p-1 flex justify-center items-center mt-2 mb-2">
            <img src={log_out} />
          </div>

          <div className="w-[80%] mt-2 mb-2 flex items-center justify-center">
            <p className="font-Poppins">Sign Out</p>
          </div>
        </div>

      </div>

    </div>

  );
}   

export default Navbar;