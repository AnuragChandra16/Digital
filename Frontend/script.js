// // const API = "http://localhost:5000/api/tasks";

// // // Load tasks
// // async function loadTasks() {
// //   const res = await fetch(API);
// //   const tasks = await res.json();

// //   const list = document.getElementById("taskList");
// //   list.innerHTML = "";

// //   tasks.forEach(task => {
// //     const li = document.createElement("li");

// //     if (task.status === "completed") {
// //       li.classList.add("completed");
// //     }

// //     li.innerHTML = `
// //       <span onclick="toggleStatus('${task._id}', '${task.status}')">
// //         ${task.title}
// //       </span>
// //       <button onclick="deleteTask('${task._id}')">❌</button>
// //     `;

// //     list.appendChild(li);
// //   });
// // }

// // // Add task
// // async function addTask() {
// //   const title = document.getElementById("title").value;
// //   const description = document.getElementById("desc").value;

// //   if (!title) return alert("Enter title");

// //   await fetch(API, {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify({ title, description })
// //   });

// //   document.getElementById("title").value = "";
// //   document.getElementById("desc").value = "";

// //   loadTasks();
// // }

// // // Delete task
// // async function deleteTask(id) {
// //   await fetch(`${API}/${id}`, {
// //     method: "DELETE"
// //   });

// //   loadTasks();
// // }

// // // Toggle completed
// // async function toggleStatus(id, current) {
// //   const newStatus = current === "pending" ? "completed" : "pending";

// //   await fetch(`${API}/${id}`, {
// //     method: "PUT",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify({ status: newStatus })
// //   });

// //   loadTasks();
// // }

// // loadTasks();


// const API = "http://localhost:5000/api/tasks";


// // AUTO RESIZE TEXTAREA
// function autoResize(el) {
//   el.style.height = "auto";
//   el.style.height = el.scrollHeight + "px";
// }


// // LOAD TASKS
// async function loadTasks() {
//   const res = await fetch(API);
//   const tasks = await res.json();

//   const list = document.getElementById("taskList");
//   list.innerHTML = "";

//   tasks.forEach(task => {

//     const div = document.createElement("div");
//     div.className = "task";

//     if (task.status === "completed")
//       div.classList.add("completed");

//     div.innerHTML = `
//       <div class="task-info">
//         <div class="task-title">${task.title}</div>
//         <div class="task-desc">${task.description || ""}</div>
//       </div>

//       <div class="actions">
//         <button onclick="toggle('${task._id}','${task.status}')">✔</button>
//         <button onclick="editTask('${task._id}','${task.title}','${task.description}')">✏</button>
//         <button onclick="deleteTask('${task._id}')">❌</button>
//       </div>
//     `;

//     list.appendChild(div);
//   });
// }


// // ADD
// async function addTask() {
//   const title = document.getElementById("title").value;
//   const description = document.getElementById("desc").value;

//   if (!title) return alert("Enter title");

//   await fetch(API, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ title, description })
//   });

//   document.getElementById("title").value = "";
//   document.getElementById("desc").value = "";

//   loadTasks();
// }


// // DELETE
// async function deleteTask(id) {
//   await fetch(`${API}/${id}`, { method: "DELETE" });
//   loadTasks();
// }


// // TOGGLE STATUS (UPDATE)
// async function toggle(id, current) {
//   const newStatus = current === "pending" ? "completed" : "pending";

//   await fetch(`${API}/${id}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ status: newStatus })
//   });

//   loadTasks();
// }


// // EDIT TASK
// async function editTask(id, title, desc) {

//   const newTitle = prompt("Edit title", title);
//   const newDesc = prompt("Edit description", desc);

//   await fetch(`${API}/${id}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       title: newTitle,
//       description: newDesc
//     })
//   });

//   loadTasks();
// }


// loadTasks();


// const API = "http://localhost:5000/api";


// // ================= TOKEN =================

// function getToken() {
//   return localStorage.getItem("token");
// }

// function authHeader() {
//   return {
//     "Content-Type": "application/json",
//     "Authorization": getToken()
//   };
// }


// // ================= AUTO LOGIN =================

// window.onload = () => {
//   if (getToken()) {
//     showTasks();
//     loadTasks();
//   }
// };

// function showTasks() {
//   document.getElementById("authSection").style.display = "none";
//   document.getElementById("taskSection").style.display = "block";
// }


// // ================= AUTO RESIZE =================

// function autoResize(el) {
//   el.style.height = "auto";
//   el.style.height = el.scrollHeight + "px";
// }


// // ================= AUTH =================

// async function register() {

//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   await fetch(`${API}/auth/register`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ name, email, password })
//   });

//   alert("Registered! Now login.");
// }


// async function login() {

//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   const res = await fetch(`${API}/auth/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email, password })
//   });

//   const data = await res.json();

//   localStorage.setItem("token", data.token);

//   showTasks();
//   loadTasks();
// }


// function logout() {
//   localStorage.removeItem("token");
//   location.reload();
// }


// // ================= TASKS =================

// async function loadTasks() {

//   const res = await fetch(`${API}/tasks`, {
//     headers: authHeader()
//   });

//   const tasks = await res.json();

//   const list = document.getElementById("taskList");
//   list.innerHTML = "";

//   tasks.forEach(task => {

//     const div = document.createElement("div");
//     div.className = "task";

//     if (task.status === "completed")
//       div.classList.add("completed");

//     div.innerHTML = `
//       <div>
//         <div class="task-title">${task.title}</div>
//         <div class="task-desc">${task.description || ""}</div>
//       </div>

//       <div class="actions">
//         <button onclick="toggle('${task._id}','${task.status}')">✔</button>
//         <button onclick="editTask('${task._id}','${task.title}','${task.description}')">✏</button>
//         <button onclick="deleteTask('${task._id}')">❌</button>
//       </div>
//     `;

//     list.appendChild(div);
//   });
// }


// // ================= ADD =================

// async function addTask() {

//   const title = document.getElementById("title").value;
//   const description = document.getElementById("desc").value;

//   await fetch(`${API}/tasks`, {
//     method: "POST",
//     headers: authHeader(),
//     body: JSON.stringify({ title, description })
//   });

//   document.getElementById("title").value = "";
//   document.getElementById("desc").value = "";

//   loadTasks();
// }


// // ================= DELETE =================

// async function deleteTask(id) {
//   await fetch(`${API}/tasks/${id}`, {
//     method: "DELETE",
//     headers: authHeader()
//   });

//   loadTasks();
// }


// // ================= UPDATE STATUS =================

// async function toggle(id, current) {

//   const newStatus = current === "pending" ? "completed" : "pending";

//   await fetch(`${API}/tasks/${id}`, {
//     method: "PUT",
//     headers: authHeader(),
//     body: JSON.stringify({ status: newStatus })
//   });

//   loadTasks();
// }


// // ================= EDIT =================

// async function editTask(id, title, desc) {

//   const newTitle = prompt("Edit title", title);
//   const newDesc = prompt("Edit description", desc);

//   await fetch(`${API}/tasks/${id}`, {
//     method: "PUT",
//     headers: authHeader(),
//     body: JSON.stringify({
//       title: newTitle,
//       description: newDesc
//     })
//   });

//   loadTasks();
// }


const API = "http://localhost:5000/api";


// ================= HELPERS =================

function getToken() {
  return localStorage.getItem("token");
}

function authHeader() {
  return {
    "Content-Type": "application/json",
    "Authorization": getToken()
  };
}


// ================= UI SWITCH =================

function showLogin() {
  document.getElementById("loginSection").style.display = "block";
  document.getElementById("registerSection").style.display = "none";
}

function showRegister() {
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("registerSection").style.display = "block";
}

function showTasks() {
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("registerSection").style.display = "none";
  document.getElementById("taskSection").style.display = "block";
}


// ================= AUTO LOGIN =================

window.onload = () => {
  if (getToken()) {
    showTasks();
    loadTasks();
  }
};


// ================= AUTH =================

async function register() {

  const name = regName.value;
  const email = regEmail.value;
  const password = regPassword.value;

  await fetch(`${API}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  });

  alert("Registered successfully. Please login.");
  showLogin();
}


async function login() {

  const email = loginEmail.value;
  const password = loginPassword.value;

  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  // 🔴 ADD THIS CHECK
  if (!data.token) {
    alert(data.msg || "Login failed");
    return;
  }

  localStorage.setItem("token", data.token);

  showTasks();
  loadTasks();
}



function logout() {
  localStorage.removeItem("token");
  location.reload();
}


// ================= TASKS =================

function autoResize(el) {
  el.style.height = "auto";
  el.style.height = el.scrollHeight + "px";
}


async function loadTasks() {

  const res = await fetch(`${API}/tasks`, {
    headers: authHeader()
  });

  const tasks = await res.json();

  taskList.innerHTML = "";

  tasks.forEach(task => {

    const div = document.createElement("div");
    div.className = "task";

    if (task.status === "completed")
      div.classList.add("completed");

    div.innerHTML = `
      <div>
        <div class="task-title">${task.title}</div>
        <div class="task-desc">${task.description || ""}</div>
      </div>

      <div class="actions">
        <button onclick="toggle('${task._id}','${task.status}')">✔</button>
        <button onclick="editTask('${task._id}','${task.title}','${task.description}')">✏</button>
        <button onclick="deleteTask('${task._id}')">❌</button>
      </div>
    `;

    taskList.appendChild(div);
  });
}


// CRUD

async function addTask() {
  await fetch(`${API}/tasks`, {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify({ title: title.value, description: desc.value })
  });

  title.value = "";
  desc.value = "";

  loadTasks();
}

async function deleteTask(id) {
  await fetch(`${API}/tasks/${id}`, {
    method: "DELETE",
    headers: authHeader()
  });
  loadTasks();
}

async function toggle(id, current) {
  const newStatus = current === "pending" ? "completed" : "pending";

  await fetch(`${API}/tasks/${id}`, {
    method: "PUT",
    headers: authHeader(),
    body: JSON.stringify({ status: newStatus })
  });

  loadTasks();
}

async function editTask(id, t, d) {
  const newTitle = prompt("Edit title", t);
  const newDesc = prompt("Edit description", d);

  await fetch(`${API}/tasks/${id}`, {
    method: "PUT",
    headers: authHeader(),
    body: JSON.stringify({ title: newTitle, description: newDesc })
  });

  loadTasks();
}
