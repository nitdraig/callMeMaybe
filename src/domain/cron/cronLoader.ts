import pingLinksJob from "./jobs/pingLinksJob";

const startCronJobs = () => {
  pingLinksJob();
};

export default startCronJobs;
