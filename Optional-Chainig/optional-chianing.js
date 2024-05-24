let employee = {
  id: 1567,
  email: "xyz@confirm.mail",
  pasrsonalInfo: {
    firstName: "John",
    lastName: "Doe",
    mobile: 987654356,

    address: {
      city: "New York",
      state: "NY",
      country: "USA",
    },
  },
};

//optional chaining ante ? Ivvadam... manaki aa propertie undho ledho  theliyanappudu, lekapothe error vasthudnhi so aa error raakunda undataniki ? use chesthe aa error dhaggara undefined ani vachi code execution jaruguthundhi..

console.log(employee.pasrsonalInfo.address.city); // idhi correct
console.log(employee.pasrsonalInf?.address?.city); // idhi Wrong kabatti manam question mark use chesaamu

console.log("hello");
