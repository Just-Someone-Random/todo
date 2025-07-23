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
  div.setAttribute('draggable',"true");
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
  if(complete.style.color==="")
  {complete.style.color="#7DF9FF";
    const allTasks=document.querySelectorAll('.task');
  allTasks.forEach(task=>{
    task.style.display='none';/* to hide all tasks */
  });
  const tasks=document.querySelectorAll('.completed');
  tasks.forEach(task=>{
    task.style.display='flex';
  });
}
  else
 {complete.style.color="";
  const allTasks=document.querySelectorAll('.task');
  allTasks.forEach(task=>{
    task.style.display='flex';
  });
}
  all.style.color="";
  active.style.color="";
  
});

all.addEventListener('click',()=>{
  if(all.style.color==="")
  all.style.color="#7DF9FF";
  else
  all.style.color="";
  complete.style.color="";
  active.style.color="";
  const allTasks=document.querySelectorAll('.task');
  allTasks.forEach(task=>{
    task.style.display='flex';
  });
});

active.addEventListener('click',()=>{
  if(active.style.color==="")
  {active.style.color="#7DF9FF";
  const allTasks=document.querySelectorAll('.task');
  
  allTasks.forEach(task => {
    if (task.classList.contains('completed')) {
      task.style.display = 'none';
    } else {
      task.style.display = 'flex'; 
    }
  });
}
  else
  {
    active.style.color="";
    const allTasks=document.querySelectorAll('.task');
  
  allTasks.forEach(task => {
    task.style.display = 'flex';
  });
  }
  all.style.color="";
  complete.style.color="";
});


//dragging and dropping tasks

let container=document.getElementById('list');
let selected=null;
container.addEventListener('dragstart',(e)=>{
  if(e.target.classList.contains('task'))
    selected=e.target;
});

container.addEventListener('dragover',(e)=>{
  e.preventDefault();
});

container.addEventListener('dragend',(e)=>{
  selected=null;
});

container.addEventListener('drop',(e)=>{
  e.preventDefault();
  if(selected && selected!== e.target && e.target.classList.contains('task')) 
    container.insertBefore(selected, e.target.nextSibling);
  else
  container.appendChild(selected);
  selected=null;
});

  


















