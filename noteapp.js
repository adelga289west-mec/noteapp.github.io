
const noteForm = document.getElementById("noteForm");
const noteContainer = document.querySelector(".notes");
const newTopic = noteForm["topic"]
const newNote = noteForm["note"];



const noteEntered = JSON.parse(localStorage.getItem("noteEntered")) || [];
const addNote = (topic, note) => {
    noteEntered.push({
        topic,
        note
    });
    localStorage.setItem("noteEntered", JSON.stringify(noteEntered));
    return { topic, note };
};

const createNoteElement = ({ topic, note }) => {
    const noteDiv = document.createElement("div");
    noteDiv.setAttribute('id', 'snote')
    const noteTopic = document.createElement("h2");
    const noteInfo = document.createElement("p");
    const deleteNote = document.createElement("button");
    deleteNote.setAttribute('id', 'button');
    deleteNote.addEventListener('click', btnPress)
    noteEntered.value = noteEntered.length
    
 
   
    noteTopic.innerText = "Title: " + topic;
    noteInfo.innerText = "Details: " + note;
    deleteNote.innerText = "Remove";
    noteDiv.append(noteTopic, noteInfo, deleteNote);
    noteContainer.appendChild(noteDiv);
    
    
    


   
  
   

};
function btnPress(){
    document.getElementById("snote").style.display = "none"

 
}
let divTag = `<div id="snote">
    <h2>Title:""</h2>
    <p>Details:""</p>
    <button id="button">Remove</button></div>`

    
function noteDelete(noteId){
    console.log(noteEntered[noteId]);
    let confirmDel = confirm("Are you sure you want to delete this note?");
    if(confirmDel) return;
    noteEntered.splice(noteId, 1);
    localStorage.setItem("noteEntered", JSON.stringify(noteEntered));
    noteContainer.remove()
}


noteEntered.forEach(createNoteElement);
noteForm.onsubmit = e => {
    e.preventDefault();
    const noteNew = addNote(
        newTopic.value,
        newNote.value,
   
    );
    createNoteElement(noteNew);
    newTopic.value = "";
    newNote.value = "";

};

function buttonPress(){
    localStorage.removeItem('noteEntered')
    window.location.reload()
}
