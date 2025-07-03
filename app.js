let captureddata = {};

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

document.getElementById("gomain").addEventListener("click", () => {
  document.getElementById("data").style.display = "none";
  document.getElementById("main").style.display = "block";
  window.scrollTo(0, 0);
});

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

document.getElementById("cancel").addEventListener("click", () => {
  document.getElementById("upddata").style.display = "none";
  const modifyform = document.getElementById("updateform");
  modifyform.reset();
  document.getElementById("data").style.display = "block";
  window.scrollTo(0, 0);
});

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
