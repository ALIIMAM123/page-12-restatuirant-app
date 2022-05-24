import MenuSidebar from "../components/menu/MenuSidebar";
import Navbar from "../components/Navbar";
import MenuImage from "../images/menu image.png";

import Riche from "../images/Richie_1.png";
import "./menu.css";


import menuItems from "../data";
// console.log(menuItems);
import YourImg from "../images/your image here (1).png";
import Bg from "../images/your image here.png";
import ImgSvg from  "../images/image.svg"
console.log(menuItems.desc)


const Menu = (props) => {
  // console.log(props);

  const { MenuData } = props;
  console.log(MenuData);
  const { menuheading, desc} = MenuData;
  // console.log(menuheading)
  // console.log(desc)



  return (
    
      <div className=" container-fluid menu-content-container">
        <div className="row wrapper-container">
        <div className=" col-md-2 sidebar" style = {{backgroundColor:"#ffffff", height: "100vh"}}>Sidebar</div>
            <div className=" col-12 col-md-10" style = {{backgroundColor: "#ffffff"}}>
            <div className="container-fluid ">
            <div className="row">
             <div className=" col-12 col-md-10" >
             <Navbar MenuData={MenuData}  />
             </div>
             <div className="col-7 col-md-9 d-flex flex-column" style = {{backgroundColor:"white" , height: "100vh" }}>
                  <div className = "container d-flex flex-column">
                   <div className="row">
                     <div className="col-12">
                       <img src = {MenuImage}  className = "menu-button-logo" style = {{height: "90px", width: "90px"}}  /> 
                     </div>
                     <div className="col-12 d-flex menu-button-container">
                       <h1 className="menu mt-3 " >Menu</h1>
                     <button className="add-button mt-3 " style = {{width: "80px",height: "30px" ,display:"flex",alignItems: "center",justifyContent:"center", textAlign: "center",marginLeft: "30px"}}>Add+ </button>
                     </div>
                     {/*..........*/}
                     <div className="container ">
                      <div className="row ">
            {
           menuItems.map(image => {
             const {amount,desc,id ,img} = image
             console.log(id)
             console.log(img)
             console.log(image)
            return (
              
              <div className = "col-12 col-md-3  chocolateImg " key = {image.id} style = {{position:"relative"}} >
              <img key={image.id} src={image.img}  alt =  "" className="img-responsive" />
               
              
              <h1 className="text-on-image" style = {{fontSize:"10px",color:"#ffffff", position: "absolute", top:"35px",right:"15px",bottom:"15px",display:"flex",alignItems: "center",justifyContent:"center", textAlign: "center",borderRadius:"16px", height: "40px",width:"40px",border:"2px solid #ffffff"}}>{id}</h1>
              <h1 className="text-on-image" style = {{fontSize:"10px",color:"#ffffff", position: "absolute", bottom:"10px",left:"18px",bottom:"55px",display:"flex",alignItems: "center",justifyContent:"center", textAlign: "center",borderRadius:"16px", height: "40px",width:"60px",border:"2px solid #ffffff"}}>{amount}</h1>
              <p className="desc" style = {{borderRadius:"15px", border:"1px solid #EBEBEB",marginTop: "12px", textAlign:"center", color:"#7A86A1", fontSize:"10px",padding:"5px", cursor:"pointer" }}>{desc}</p>

              </div>
              
             )
             
         })
         }
           </div>
        </div>
        </div>
    </div>
           </div>








             <div className="col-5 col-md-3" style = {{backgroundColor:"#FBF9FE"}}>
                <div className="container">
                       <div className="row left-container ">
                         <div className="col-12" style={{ backgroundImage: `url(${Bg })` }}>
                            <img src = {YourImg}  className = "photo "/>
                            <h1 className="name" >Pizzeria Italiana</h1>
                         </div>
                         <div className="col-12">
                           <img src = {ImgSvg} />
                         </div>
                         <div className="col-12">
                         
                           <h1 className="connect-and-chat-heading">
                           Connect and char reguarly with members
                           </h1>   
                                              
                           
                           </div>
                           <button className="chat-now">Chat now!</button> 
                       </div>
                </div>
             </div>
            </div>
           </div>
            </div>
         </div>
      </div>
      
  );
};

export default Menu;
