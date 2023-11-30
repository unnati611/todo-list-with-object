let data = [];

const showdata = () => {
  //   data.forEach((todo, index) => {
  //     console.log(todo, index);
  //   });
  let maincontainer = document.getElementById("todolist");
  maincontainer.innerHTML = "";
  for (let index = 0; index < data.length; index++) {
    console.log(data[index]);
    console.log(index);
    let div = document.createElement("div");
    div.className = "addedvalue";
    div.id = `addedvalue${index}`;
    maincontainer.appendChild(div);
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.id = `inputcheckbox${index}`;
    div.appendChild(checkbox);
    let label = document.createElement("label");
    label.id = `label${index}`;
    label.innerHTML = data[index].name;
    div.appendChild(label);
    let dltbtn = document.createElement("button");
    dltbtn.className = "dltbtn";
    dltbtn.id = `dltbtn${index}`;
    dltbtn.innerHTML = "delete";
    dltbtn.addEventListener("click", dltfunc);
    div.appendChild(dltbtn);
    let editbtn = document.createElement("button");
    editbtn.className = "editbtn";
    editbtn.id = `editbtn${index}`;
    editbtn.innerHTML = "edit";
    editbtn.addEventListener("click", editfunc);
    div.appendChild(editbtn);
  }
};

function adddata() {
  let listname = document.getElementById("maininput").value;
  const newdata = {
    name: listname,
  };
  data.push(newdata);
  showdata();
}
function dltfunc(e) {
  id = e.target.id;
  id = id.slice(6);
  console.log(id);
  let divdlt = document.getElementById(`addedvalue${id}`);
  divdlt.style.display = "none";
  data.splice(Number(id), 1);
}
function editfunc(e) {
  console.log("edit");
}
