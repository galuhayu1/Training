const array=["javascript","angular","java","springboot"]
const comments=["apa"]
let alias=document.querySelector("#alias")
alias.innerHTML="@galuh"
let input =document.getElementById("input").value
let a=comments.push(input)
let data =document.querySelector("#data")
let com =document.querySelector("#form")
function inputdata(param){
    let li = document.createElement("p")
    li.textContent=param;
    return li;
}
const clicked=function(){
    var input =document.getElementById("input").value
    var a=comments.push(input)
    comments.forEach(c => com.appendChild(inputdata(c)) )

}
const clicked2 =function()
{
    array.forEach(m => data.appendChild(inputdata(m)))
}
