
const summaries = {
    EPSS: (
        <span>
            EPSS (Enhanced Powerline Safety Settings) is a wildfire mitigation program that started in 2021
            to reduce ignitions by making grid settings more sensitive to electrical faults.
            <br></br><br></br>
            The program relies on dynamic protective devices (a.k.a. &quot;reclosers&quot;) set up on the grid
            to track extreme fluctuations in voltage and current and then cause a rapid trip
            to cut the power to that part of a circuit to significantly reduce the likelihood of sparks and thus ignitions.
        </span>
    ),
    COJ: (
        <span>
            The goal of the <strong>Customer Outage Journey</strong> effort is to improve our Customers' experience when they are impacted by a planned or unplanned electric outage.
            <br /> <br />
            The effort focuses on ensuring customers receive accurate information that is provided in a timely, consistent manner across preferred communication channels.
            <br /> <br />
            The effort also focuses on creating transparency and traceability of the data regarding customer experience so that
            we can effectively simplify the process for supporting outage communications.
        </span>
    )
}

const announcements = {
    EPSS: (
        <>
            <span><span className='font-semibold'>Customer Matrix</span> - Tool to facilitate communication within 24 hours to customers experiencing multiple
            outages as a result of EPSS. Surfaces customer experience with EPSS outages.</span>
            <br /><br />
            Go to{' '}
            <Link href="https://pge.sharepoint.com/Topics/EPSS/SitePages/Home.aspx" className="text-blue-500">
                Coworker Resources
            </Link>{' '}
            for more details.
        </>
    ),
    COJ: <span>2024 Heart of the Customer Award Winner.</span>
}


export const getSummary = (key) => summaries[key];
export const getAnnouncements = (key) => announcements[key];