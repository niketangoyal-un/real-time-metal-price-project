let container=document.getElementById("container")
  import { io } from "https://cdn.socket.io/4.8.3/socket.io.esm.min.js";
const socket = io('http://localhost:3000');
const fetchData=(data)=>{
    let y = ''
   
    
    const metals=data?.metals
    for(let metal in metals){
        y+=` <div class="metal">
            <h2>${metal}</h2>
            <h3>${metals[metal]}/kg</h3>
        </div>

`
    }
    container.innerHTML=y;
}


socket.on("connect", () => {
  console.log("Connected:", socket.id);
});

socket.on("disconnect", (reason) => {
  console.log("Disconnected:", reason);
});
socket.on('price_update',(data)=>{
    console.log("hlo")
    fetchData(JSON.parse(data) )
})
window.onload=async function(){
    let url="http://localhost:3000/api/v1/getprices"
 const response=await fetch(url)
 const data=await response.json();
 console.log(data.data)
 fetchData(data.data)

}