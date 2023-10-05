import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Resetpassword from "../pages/reset_password";
import Searchpage from "../pages/searchpage";
import Table from "../components/table";
import Myprofile from "../pages/myprofile";
import RefferdJobs from "../pages/Refferdjobs";
import SavedJobs from "../pages/savedjobs";
import JobsApplied from "../pages/jobsapplied";
import DocumentoryRepo from "../pages/documentoryrepo";
import Profile from "../pages/profile";
import SignupPage from "../pages/Signuppage";
import LoginPage from "../pages/loginpage";
import Job_Details from "../pages/JobDetails";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Searchpage />} />
            <Route path="/search-jobs" element={<Searchpage />} />
            <Route path="/resetPassword" element={<Resetpassword />} />
            <Route path='/my-profile' element={<Myprofile />} />
            <Route path='/referred-jobs' element={<RefferdJobs/>} />
            <Route path='/saved-jobs' element={<SavedJobs />} />
            <Route path='/jobs-applied' element={<JobsApplied />} />
            <Route path='/document-repository' element={<DocumentoryRepo/>} />
            <Route path='/profile' element={<Profile />} />      
            <Route path='/job-details' element={<Job_Details />} />      
        </Routes>
    )
}