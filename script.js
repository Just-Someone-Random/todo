const input=document.getElementById('input');
const list=document.getElementById('list');
const add=document.getElementById('add-btn');
const themeBtn=document.getElementById('theme-btn');
const complete=document.getElementById('completed');
const all=document.getElementById('all');
const active=document.getElementById('active');

add.addEventListener('click',()=>
{
  if(input.value.trim()===""){
  alert("Please enter a task");
  return;
  }
  const div=document.createElement('div');
  div.textContent=input.value;
  div.classList.add("task");

  const btn=document.createElement('div');
  const delet=document.createElement('button');
  delet.textContent="Clear";
  btn.append(delet);
  delet.addEventListener('click',function(){
    div.remove();
  });
    const done=document.createElement('button');
  done.textContent="Completed";
  btn.append(done);
  done.addEventListener('click',function(){
    div.classList.toggle('completed');
    if(div.style.textDecoration==="")
    div.style.textDecoration="line-through";
    else
    div.style.textDecoration="";
  });
  div.append(btn);
  list.append(div);
  input.value="";
});

input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    add.click(); // this simulates clicking the Add button
  }
});

themeBtn.addEventListener('click',()=>{
  const body = document.body;
  body.classList.toggle('lightmode');/*didnt get the idea */
});

complete.addEventListener('click',()=>{
  complete.style.color="#7DF9FF";
  all.style.color="";
  active.style.color="";
  const allTasks=document.querySelectorAll('.task');
  allTasks.forEach(task=>{
    task.style.display='none';/* to hide all tasks */
  });
  const tasks=document.querySelectorAll('.completed');
  tasks.forEach(task=>{
    task.style.display='flex';
  });
});

all.addEventListener('click',()=>{
  all.style.color="#7DF9FF";
  complete.style.color="";
  active.style.color="";
  const allTasks=document.querySelectorAll('.task');
  allTasks.forEach(task=>{
    task.style.display='flex';
  });
});

active.addEventListener('click',()=>{
  active.style.color="#7DF9FF";
  all.style.color="";
  complete.style.color="";
  const allTasks=document.querySelectorAll('.task');
  
  allTasks.forEach(task => {
    if (task.classList.contains('completed')) {
      task.style.display = 'none';
    } else {
      task.style.display = 'flex'; 
    }
  });
});


  


















