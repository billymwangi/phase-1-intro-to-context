// Your code here
function createEmployeeRecord(employees){
    return{
        firstName: employees[0],
        familyName: employees[1],
        title: employees[2],
        payPerHour:employees[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
}
    function createEmployeeRecords(array){
        
        return array.map((records) =>{
            return  createEmployeeRecord(records)
        })
    }
    function createTimeInEvent(employeeRecord, dateStamp){
        const [date, hour] = dateStamp.split(' ')
        employeeRecord.timeInEvents.push({
            type: "TimeIn",
            hour: parseInt(hour, 10),
            date,
        })
        return employeeRecord
    }
    function  createTimeOutEvent(employeeRecord, dateStamp){
        let [date, hour] = dateStamp.split(' ')
        employeeRecord.timeOutEvents.push({
            type: "TimeOut",
            hour: parseInt(hour, 10),
            date,
        })
        return employeeRecord
    }
    function hoursWorkedOnDate(employee, dates) {
        let timeIn = employee.timeInEvents.find(event =>
            event.date == dates)
        let timeOut = employee.timeOutEvents.find(event =>
            event.date == dates)
        let totalTime = (timeOut.hour - timeIn.hour) / 100
        return totalTime;
      }
      function wagesEarnedOnDate(employee, dates) {
        let hours = hoursWorkedOnDate(employee, dates)
        return employee.payPerHour * hours;
      }
      function allWagesFor(employee) {
        return employee.timeInEvents.reduce((total, event) => {
            return total + wagesEarnedOnDate(employee, event.date)
        }, 0)
      }
      function calculatePayroll(employeeRecord) {
        return employeeRecord.reduce((total, employee) => {
            return total + allWagesFor(employee)
        }, 0)
      }