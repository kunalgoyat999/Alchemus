import { Box, Image, Table, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import '../assests/css/jobdetails.css';
import company_logo from '../assests/images/common/building_logo.png'
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Job_Details = () => {

const location = useLocation();
const data = location.state.data;
let [title,setTitle] = useState(data.title)

 console.log(data,'data...')
// let title = 'Software Manual Tester'
let description = `We are looking for a software developer to work on development and customization of open source ERP (www.erpnext.com). Our company is into implementation and customization of this ERP and the opening is at our company and not with the product company. Key Skills: Server side scripting : Python Databases : MariaDB / MySQL User interfaces : Javascript / JQuery / HTML / CSS / Boostrap CSS Framewjjtjt times, you can work from home or come to office and are free to take days off when you want. We are a small company with big aspirations. We encourage open communication in our organization and have a friendly work culture. If you have requisite skills and this opportunity excites you then let's meet over a cup of coffee.`
    return(
        <>
        <Box w='80%' className="Job_Details_container" >
        <Box>
             <Box className="job_details_firstbox">
             <Text fontSize='1.4em' fontWeight='semibold' color={'blackAlpha.800'}>{title}</Text>
             <Box className="Box_Status">{'Applied'}</Box>
             </Box>
             <Text  fontSize={'1em'}  lineHeight={'1.6em'} >{description}</Text>
        </Box>
        <Box >
          <Text fontWeight={'semibold'} className="job_overview" fontSize={'1.2em'}>Job Overview</Text>
          <Table variant={''} className="job_details_second_Box">
            <Tbody>
                <Tr className="job_overview_box">
                    <Td><Image src={company_logo} width={''} /></Td>
                    <Td>
                         <Text pb='0.5em' fontWeight={'semibold'}>Industry :</Text>
                         <Text>{'Technology'}</Text>
                    </Td>
                </Tr>

                <Tr className="job_overview_box">
                    <Td><Image src={company_logo} /></Td>
                    <Td>
                         <Text pb='0.5em' fontWeight={'semibold'}>Job Type :</Text>
                         <Text>{'IS Quality Assurance'}</Text>
                    </Td>
                </Tr>

                <Tr className="job_overview_box">
                    <Td><Image src={company_logo} /></Td>
                    <Td>
                         <Text pb='0.5em' fontWeight={'semibold'}>Job Term :</Text>
                         <Text>{data.type || 'Permanent'}</Text>
                    </Td>
                </Tr>

                <Tr className="job_overview_box">
                    <Td><Image src={company_logo} /></Td>
                    <Td>
                         <Text pb='0.5em' fontWeight={'semibold'}>Posted Date :</Text>
                         <Text>{data.date || '06/29/2016'}</Text>
                    </Td>
                </Tr>

                <Tr className="job_overview_box">
                    <Td><Image src={company_logo} /></Td>
                    <Td>
                         <Text pb='0.5em' fontWeight={'semibold'}>Reference ID :</Text>
                         <Text>{'25-0256-0125'}</Text>
                    </Td>
                </Tr>

                <Tr className="job_overview_box">
                    <Td><Image src={company_logo} /></Td>
                    <Td>
                         <Text pb='0.5em' fontWeight={'semibold'}>Location :</Text>
                         <Text>{data.location || 'Maharashtra, India'}</Text>
                    </Td>
                </Tr>

            </Tbody>
          </Table>
        </Box>
        </Box>
        </>
    )
}

export default Job_Details;