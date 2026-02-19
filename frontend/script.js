let container=document.getElementById("container")

const fetchData=async()=>{
    let url="http://localhost:3000/api/v1/getprices"
    let y = ''
    let response=await fetch(url)
    let data=await response.json();
    const metals=data?.data?.metals
    // console.log(data?.data?.metals)
    for(let metal in metals){
        y+=` <div class="metal">
            <h2>${metal}</h2>
            <h3>${metals[metal]}/kg</h3>
        </div>

`
    }
    container.innerHTML=y;
}
setInterval(fetchData, 5000);
fetchData();