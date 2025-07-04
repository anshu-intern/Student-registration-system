let captureddata = {};
let validText = /^[A-Za-z\s]+$/;
let validClass = /^[\dA-Za-z\-]+$/;
let validNum = /^\d+$/;
let validmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let validAddress = /^[A-Za-z\d\s.,#\/\-]+$/;


//validate form input...................................
const i_id = document.getElementById("inputid");
i_id.addEventListener("input",()=> {
  if (i_id.value === "" || validNum.test(i_id.value))
  {
    i_id.nextElementSibling.innerHTML = "";
    document.getElementById("registerStudent").disabled = false;
    document.getElementById("registerStudent").classList.add("hover:bg-blue-900");

  }else{
    i_id.nextElementSibling.innerHTML = "ID should be number only!";
    document.getElementById("registerStudent").disabled = true;
    document.getElementById("registerStudent").classList.remove("hover:bg-blue-900");
  }
});

const i_name = document.getElementById("inputName");
i_name.addEventListener("input",()=> {
  if (i_name.value === "" || validText.test(i_name.value))
  {
    i_name.nextElementSibling.innerHTML = "";
    document.getElementById("registerStudent").disabled = false;
    document.getElementById("registerStudent").classList.add("hover:bg-blue-900");

  }else{
    i_name.nextElementSibling.innerHTML = "Only alphabets and spaces allowed!";
    document.getElementById("registerStudent").disabled = true;
    document.getElementById("registerStudent").classList.remove("hover:bg-blue-900");
  }
});

const i_class = document.getElementById("inputClass");
i_class.addEventListener("input",()=> {
   if (i_class.value === "" || validClass.test(i_class.value))
  {
    i_class.nextElementSibling.innerHTML = "";
    document.getElementById("registerStudent").disabled = false;
    document.getElementById("registerStudent").classList.add("hover:bg-blue-900");

  }else{
    i_class.nextElementSibling.innerHTML = "Only alphabets, numbers and hyphen allowed!";
    document.getElementById("registerStudent").disabled = true;
    document.getElementById("registerStudent").classList.remove("hover:bg-blue-900");
  }
});

const i_mail = document.getElementById("inputMail");
i_mail.addEventListener("blur",()=> {
  if (i_mail.value === "" || validmail.test(i_mail.value))
  {
    i_mail.nextElementSibling.innerHTML = "";
    document.getElementById("registerStudent").disabled = false;
    document.getElementById("registerStudent").classList.add("hover:bg-blue-900");

  }else{
    i_mail.nextElementSibling.innerHTML = "Invalid email address format!";
    document.getElementById("registerStudent").disabled = true;
    document.getElementById("registerStudent").classList.remove("hover:bg-blue-900");
  }
});
i_mail.addEventListener("input",()=> {
    i_mail.nextElementSibling.innerHTML = "";
    document.getElementById("registerStudent").disabled = false;
    document.getElementById("registerStudent").classList.add("hover:bg-blue-900");
});


const i_address = document.getElementById("inputAddress");
i_address.addEventListener("input",()=> {
  if (i_address.value === "" || validAddress.test(i_address.value))
  {
    i_address.nextElementSibling.innerHTML = "";
    document.getElementById("registerStudent").disabled = false;
    document.getElementById("registerStudent").classList.add("hover:bg-blue-900");

  }else{
    i_address.nextElementSibling.innerHTML = "Only alphabets, numbers, spaces and ('-' , ',' , '.' , '#' , '/' ) allowed!";
    document.getElementById("registerStudent").disabled = true;
    document.getElementById("registerStudent").classList.remove("hover:bg-blue-900");
  }
});

const i_contact = document.getElementById("inputContact");
i_contact.addEventListener("input",()=> {
  if (i_contact.value === "" || validNum.test(i_contact.value))
  {
    i_contact.nextElementSibling.innerHTML = "";
    document.getElementById("registerStudent").disabled = false;
    document.getElementById("registerStudent").classList.add("hover:bg-blue-900");

  }else{
    i_contact.nextElementSibling.innerHTML = "Only numbers allowed!";
    document.getElementById("registerStudent").disabled = true;
    document.getElementById("registerStudent").classList.remove("hover:bg-blue-900");
  }
});


//Modify section input validations.......................................

const M_name = document.getElementById("M_name");
M_name.addEventListener("input",()=> {
  if (M_name.value === "" || validText.test(M_name.value))
  {
    M_name.nextElementSibling.innerHTML = "";
    document.getElementById("updateStudent").disabled = false;
    document.getElementById("updateStudent").classList.add("hover:bg-blue-900");

  }else{
    M_name.nextElementSibling.innerHTML = "Only alphabets and spaces allowed!";
    document.getElementById("updateStudent").disabled = true;
    document.getElementById("updateStudent").classList.remove("hover:bg-blue-900");
  }
});

const M_class = document.getElementById("M_class");
M_class.addEventListener("input",()=> {
   if (M_class.value === "" || validClass.test(M_class.value))
  {
    M_class.nextElementSibling.innerHTML = "";
    document.getElementById("updateStudent").disabled = false;
    document.getElementById("updateStudent").classList.add("hover:bg-blue-900");

  }else{
    M_class.nextElementSibling.innerHTML = "Only alphabets, numbers and hyphen allowed!";
    document.getElementById("updateStudent").disabled = true;
    document.getElementById("updateStudent").classList.remove("hover:bg-blue-900");
  }
});

const M_mail = document.getElementById("M_mail");
M_mail.addEventListener("blur",()=> {
  if (M_mail.value === "" || validmail.test(M_mail.value))
  {
    M_mail.nextElementSibling.innerHTML = "";
    document.getElementById("updateStudent").disabled = false;
    document.getElementById("updateStudent").classList.add("hover:bg-blue-900");

  }else{
    M_mail.nextElementSibling.innerHTML = "Invalid email address format!";
    document.getElementById("updateStudent").disabled = true;
    document.getElementById("updateStudent").classList.remove("hover:bg-blue-900");
  }
});
M_mail.addEventListener("input",()=> {
    M_mail.nextElementSibling.innerHTML = "";
    document.getElementById("updateStudent").disabled = false;
    document.getElementById("updateStudent").classList.add("hover:bg-blue-900");
});


const M_address = document.getElementById("M_address");
M_address.addEventListener("input",()=> {
  if (M_address.value === "" || validAddress.test(M_address.value))
  {
    M_address.nextElementSibling.innerHTML = "";
    document.getElementById("updateStudent").disabled = false;
    document.getElementById("updateStudent").classList.add("hover:bg-blue-900");

  }else{
    M_address.nextElementSibling.innerHTML = "Only alphabets, numbers, spaces and ('-' , ',' , '.' , '#' , '/' ) allowed!";
    document.getElementById("updateStudent").disabled = true;
    document.getElementById("updateStudent").classList.remove("hover:bg-blue-900");
  }
});

const M_contact = document.getElementById("M_contact");
M_contact.addEventListener("input",()=> {
  if (M_contact.value === "" || validNum.test(M_contact.value))
  {
    M_contact.nextElementSibling.innerHTML = "";
    document.getElementById("updateStudent").disabled = false;
    document.getElementById("updateStudent").classList.add("hover:bg-blue-900");

  }else{
    M_contact.nextElementSibling.innerHTML = "Only numbers allowed!";
    document.getElementById("updateStudent").disabled = true;
    document.getElementById("updateStudent").classList.remove("hover:bg-blue-900");
  }
});





//buttons event listeners.................................................

//view registered students button listener
document.getElementById("getData").addEventListener("click", () => {
  const database = JSON.parse(localStorage.getItem("student_detail")) || [];
  if (database.length > 0) {
    document.getElementById("main").style.display = "none";
    document.getElementById("data").style.display = "block";
    loadData();
    window.scrollTo(0, 0);
  } else {
    alert("No students registered! Add details to register!");
  }
});

//go to main registration section from data dispay section...
document.getElementById("gomain").addEventListener("click", () => {
  document.getElementById("data").style.display = "none";
  document.getElementById("main").style.display = "block";
  window.scrollTo(0, 0);
});

// go to modify form from data display section.......
document.getElementById("modifyData").addEventListener("click", () => {
  if (!captureddata || Object.keys(captureddata).length === 0) {
    const select = document.querySelectorAll('input[name="selection"]');
    select.forEach((radio) => {
      radio.value = "off";
    });
    alert("select any ID!");
  } else {
    document.getElementById("data").style.display = "none";
    document.getElementById("upddata").style.display = "block";
    modifyData(captureddata);
  }
});

// delete record from database ...............
document.getElementById("delete").addEventListener("click", () => {
  if (!captureddata || Object.keys(captureddata).length === 0) {
    const select = document.querySelectorAll('input[name="selection"]');
    select.forEach((radio) => {
      radio.value = "off";
    });
    alert("select any ID!");
  } else {
    if (confirm("Are you sure you want to delete!!!")) {
      deleteRecord(captureddata);
      loadData();
    }
    window.scrollTo(0, 0);
  }
});

//cancel modification section.......................
document.getElementById("cancel").addEventListener("click", () => {
  document.getElementById("upddata").style.display = "none";
  const modifyform = document.getElementById("updateform");
  modifyform.reset();
  const inputs = modifyform.querySelectorAll("input");
  inputs.forEach(input => {
    input.nextElementSibling.innerHTML = '';
  });
  document.getElementById("data").style.display = "block";
  loadData();
  window.scrollTo(0, 0);
});


//add event listener on register student button ...........
const form = document.getElementById("registerform");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const studentID = form.student_id.value;
  const name = form.name.value;
  const studentClass = form.class.value;
  const email = form.email.value;
  const address = form.address.value;
  const contact = form.contact.value;

  const data = {
    student_ID: studentID,
    name: name,
    class: studentClass,
    address: address,
    email: email,
    contact: contact,
  };
  const database = JSON.parse(localStorage.getItem("student_detail")) || [];
  database.push(data);
  localStorage.setItem("student_detail", JSON.stringify(database));
  form.reset();
  alert(
    `Student ID:${data.student_ID}, Name:${data.name} registered successfully!`
  );
});


// add event listener to modify form submit button...............
const modifyform = document.getElementById("updateform");
document.getElementById("updateStudent").addEventListener("click", function () {
  const studentID = modifyform.student_id.value;
  const name = modifyform.name.value;
  const studentClass = modifyform.class.value;
  const email = modifyform.email.value;
  const address = modifyform.address.value;
  const contact = modifyform.contact.value;

  const data = {
    student_ID: studentID,
    name: name,
    class: studentClass,
    address: address,
    email: email,
    contact: contact,
  };
  const database = JSON.parse(localStorage.getItem("student_detail")) || [];
  const existingstudent = database.findIndex(
    (item) => item.student_ID === data.student_ID
  );
  if (existingstudent !== -1) {
    database[existingstudent] = data;
  } else {
    database.push(data);
  }
  localStorage.setItem("student_detail", JSON.stringify(database));
  modifyform.reset();
  alert(`Data modified for student ID:${data.student_ID}!`);
  document.getElementById("upddata").style.display = "none";
  document.getElementById("data").style.display = "block";
  loadData();
  window.scrollTo(0, 0);
});


//modify data function to display modify form ..................
function modifyData(data) {
  const modifyform = document.getElementById("updateform");

  modifyform.student_id.value = data.student_ID;
  modifyform.name.value = data.name;
  modifyform.class.value = data.class;
  modifyform.email.value = data.email;
  modifyform.address.value = data.address;
  modifyform.contact.value = data.contact;
  captureddata = {};

  document.getElementById("disabled").disabled = true;

  window.scrollTo(0, 0);
}


// load data from database................
function loadData() {
  //const displayStyle = window.getComputedStyle(document.getElementById("displayTable")).display == "block" ? "table" : "block";
  /* if(displayStyle == "table"){
    loadtable();
  }
  if (displayStyle == "block") {
    loadblock();
  } */

  loadtable();
  loadblock();
  addradiolistener();
}

//add event listener for selection of displayed records...............
function addradiolistener() {
  const select = document.querySelectorAll('input[name="selection"]');
  select.forEach((radio) => {
    radio.addEventListener("change", () => {
      const span = radio.nextElementSibling;
      const value = span.innerHTML;
      const database = JSON.parse(localStorage.getItem("student_detail")) || [];
      const selection = database.findIndex((item) => item.student_ID === value);
      if (selection !== -1) {
        captureddata = database[selection];
      }
    });
  });
}


//delete record logic........................
function deleteRecord(data) {
  const database = JSON.parse(localStorage.getItem("student_detail")) || [];
  const existingdata = database.findIndex(
    (item) => item.student_ID === data.student_ID
  );
  captureddata = {};
  if (existingdata !== -1) {
    const delitem = database.splice(existingdata, 1);
    alert(
      `Student ID:${delitem[0].student_ID}, Name:${delitem[0].name} deleted!!!`
    );
    localStorage.setItem("student_detail", JSON.stringify(database));
  } else {
    alert("Error! Data not found for delete");
  }
}


//load data in tabular format......................
function loadtable() {
  const database = JSON.parse(localStorage.getItem("student_detail")) || [];

  const tablebody = document.getElementById("tablebody");
  document.getElementById("tablebody").innerHTML = "";

  database.forEach((element) => {
    const tablerow = document.createElement("tr");
    tablerow.classList = "tablerow";
    for (const key in element) {
      const tabledata = document.createElement("td");
      if (key === "student_ID") {
        const inputtag = document.createElement("input");
        inputtag.type = "radio";
        inputtag.name = "selection";
        inputtag.className = "tablesel";
        const span = document.createElement("span");
        span.innerHTML = element[key];
        span.style.align = "left";
        tabledata.appendChild(inputtag);
        tabledata.appendChild(span);
      } else {
        tabledata.innerHTML = element[key];
      }
      tabledata.classList = "tablestyle";
      tablerow.appendChild(tabledata);
    }
    tablebody.appendChild(tablerow);
  });
}


//load data in block/flex format....................................
function loadblock() {
  let number = 0;
  const database = JSON.parse(localStorage.getItem("student_detail")) || [];
  const section = document.getElementById("displayBlock");
  section.innerHTML = "";

  database.forEach((element) => {
    const sectionitem = document.createElement("div");
    sectionitem.className = "l1";
    const inputitem = document.createElement("input");
    inputitem.className = "l2";
    inputitem.classList.add("peer");
    inputitem.id = `sel${++number}`;
    inputitem.name = "selection";
    inputitem.type = "radio";
    sectionitem.appendChild(inputitem);
    const spanitem = document.createElement("span");
    spanitem.className = "l3";
    sectionitem.appendChild(spanitem);
    const labelitem = document.createElement("label");
    labelitem.htmlFor = inputitem.id;
    labelitem.className = "l4";
    sectionitem.appendChild(labelitem);
    section.appendChild(sectionitem);

    let index = -1;
    const label = [
      "Student ID",
      "Name",
      "Class",
      "Address",
      "Email ID",
      "Contact No.",
    ];

    for (const key in element) {
      const blockdata = document.createElement("div");
      blockdata.className = "l4-1";
      const datalabel = document.createElement("p");
      datalabel.className = "l4-1-1";
      const datavalue = document.createElement("p");
      datavalue.className = "l4-1-2";
      datalabel.innerHTML = label[++index];
      datavalue.innerHTML = element[key];
      blockdata.appendChild(datalabel);
      blockdata.appendChild(datavalue);
      labelitem.appendChild(blockdata);
      const colon = document.createTextNode(":");
      blockdata.insertBefore(colon, datavalue);
      if (index === 0) {
        spanitem.innerHTML = `${element[key]}`;
      }
    }
  });
}
