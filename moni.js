function validate(){
    let Fname=document.getElementById("Fname");
    // let check=document.getElementById("Lname");
    let email=document.getElementById("email");
    // let phone=document.getElementById("pq");
    // let radio=document.getElementById("man");
    // let ist=document.getElementById("ist");
    let pst=document.getElementById("cool");
    if(Fname.value.trim() == "" || check.value.trim()== "" ||  email.value.trim() == "" || cit.checked == false){
        alert("The form is not completely filled, please fill it");
    }
    else if(pass.value!=cool.value){
       alert("It didn't match");
    }
    else if(pass.value.length<7){
        alert("The password should atleast contain 7 characters");
    }
    // else if(pq.value[0]!= 7 || 8 || 9){
    //     alert("please enter the correct number");
    // }
    // else if(pq.value.length!=10){
    //     document.getElementById("letsgo").innerHTML="It should contain ten digits";
    //     alert("Wrong number");
    // }
}