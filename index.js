// Write your solution in this file!
const employee = {
    name: "nameValue",
    streetAddress: "streetAddressValue",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {
        ...employee,
        [key]: value,
    }
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
  
    return employee;
  }