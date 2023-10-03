import Tablebox from "../components/table";



const SavedJobs = () => {
    return (
        <>
        <Tablebox btncolor='red' btn_title='DELETE' path='*' jobslist={[]}/>
        </>
    )
}

export default SavedJobs;