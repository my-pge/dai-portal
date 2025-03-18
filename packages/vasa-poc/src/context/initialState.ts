
const initialState = {
    data: [],
    totalCount: 0,
    nextPageToken: "",
    error: "",
    selected: {},
    KPI: {
        incomplete: 0,
        complete: 0,
        totalPlanned: 0,
        quarterAlignment: 0
    },
    filterMultipleValue: {
        completedInput: [],
        recurringProject: [],
        scheduledDelays: [],
        prevQuarter: [],
    },
    filterSingleValue: {
        division: "",
        serviceTerritoryName: "",
        projectName: "",
        oneVmProjectNumber: ""
    },
    leftVisible: false,
    rightVisible: true

};

export default initialState;