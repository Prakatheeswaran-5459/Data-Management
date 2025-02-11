var btn = document.getElementById("btn");
var tbody = document.getElementById("container");

btn.addEventListener("click", function () {
  var username = document.getElementById("username");
  var age = document.getElementById("age");
  var mailid = document.getElementById("mailid");
  var selectedRadio = document.querySelector(
    'input[name="gender"]:checked'
  );

  if (!username.value || !age.value || !mailid.value || !selectedRadio) {
    alert("Please fill all fields before saving!");
    return;
}


  var country = document.getElementById("country");

  var tr = document.createElement("tr");

  var tdName = document.createElement("td");
  tdName.textContent = username.value;
  tr.appendChild(tdName);

  var tdAge = document.createElement("td");
  tdAge.textContent = age.value;
  tr.appendChild(tdAge);

  var tdMail = document.createElement("td");
  tdMail.textContent = mailid.value;
  tr.appendChild(tdMail);

  var tdGender = document.createElement("td");
  tdGender.textContent = selectedRadio.value;
  tr.appendChild(tdGender);

  var tdCountry = document.createElement("td");
  tdCountry.textContent = country.value;
  tr.appendChild(tdCountry);

  var tdOption = document.createElement("td");
var deletebtn = document.createElement("button");
deletebtn.textContent = "Delete";
deletebtn.classList.add('btn1')

deletebtn.addEventListener("click", function () {
  tr.remove();
});
tdOption.appendChild(deletebtn);
tr.appendChild(tdOption);

tbody.appendChild(tr);


username.value = "";
age.value = "";
mailid.value = "";
selectedRadio.checked = false;
});

