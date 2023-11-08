import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Job from "./Job";


const Category = () => {

    const jobs = useLoaderData()
    // console.log(jobs);
    const webDesignerJobs = jobs.filter((job) => job.category === "Web Design");
    const graphicsDesignJobs = jobs.filter((job) => job.category === "Graphics Design");
    const digitalMarketingJobs = jobs.filter((job) => job.category === "Digital Marketing");



    return (
        <div className="max-w-7xl mx-auto border-2 px-20 pb-20 pt-10 mt-10">
            <Tabs className="mt-5">
                <TabList className="text-center mb-10">
                    <Tab>Web Design</Tab>
                    <Tab>Graphics Design</Tab>
                    <Tab>Digital Marketing</Tab>

                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20">
                        {
                            webDesignerJobs.map(job => <Job key={job._id} job={job}></Job>)
                        }
                    </div>
                </TabPanel>


                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20">
                        {
                            graphicsDesignJobs.map(job => <Job key={job._id} job={job}></Job>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20">
                        {
                            digitalMarketingJobs.map(job => <Job key={job._id} job={job}></Job>)
                        }
                    </div>
                </TabPanel>


            </Tabs>
        </div>
    );
};

export default Category;