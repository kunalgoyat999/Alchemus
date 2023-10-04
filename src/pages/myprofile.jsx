import "../assests/css/myprofile.css";
import { Box } from "@chakra-ui/react";
import DropdownBox from "../components/dropdown";
import { useState } from "react";
import Tablebox from "../components/table";
import Profile_Container from "../components/profile";

let Arr = [
    {
    title:"Profile",
    Component : Profile_Container,
}, {
    title:"Education",
    Component : Tablebox    
},{
    title:  "Experirnce",
    Component : Tablebox    
},{
    title:"Job Preference",
    Component : Tablebox    
},{
    title:  "Attachment",
    Component : Tablebox    
},{
    title: "Candidate Skills",
    Component : Tablebox    
},{
    title:   "Relocation Preference", 
    Component : Tablebox    
},{
    title:   'Reffernce',
    Component : Tablebox    
},{
    title: 'Certification',
    Component : Tablebox    
},{
    title: 'Securuty Credentials',
    Component : Tablebox    
},{
    title:'Resume Additional',
    Component : Tablebox    
},{
    title: 'Goals',
    Component : Tablebox    
},{
    title:'Objective',
    Component : Tablebox    
}

  

  
  


  
  

];
const Myprofile = () => {
    let [box,setbox] = useState(Arr);

  return (
    <>
      <Box width="80%" className="myprofile">
       {
        box?.map((element,i )=>{
            if(i==0 || i ==1){
                return(  <DropdownBox borderLeft='0.2em solid red' title={element.title} Component={element.Component} />  )
            }
            return ( <DropdownBox title={element.title} Component={element.Component} />  )
        })
       } 
      </Box>
    </>
  );
};

export default Myprofile;
