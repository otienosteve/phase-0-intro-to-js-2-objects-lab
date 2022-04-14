let employee = {name:"Sam",
streetAddress:"Kano"}
function updateEmployeeWithKeyAndValue(employee, key, value){
    let placehold={...employee};
    placehold.streetAddress=value;
    return placehold;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee.streetAddress=value;
return employee;
}
function deleteFromEmployeeByKey(employee, key){
var placehold={...employee}
delete placehold[key];
return placehold;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
delete employee[key];
return employee;
}