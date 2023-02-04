//recuperation éléments 
const wrapper = document.querySelector(".wrapper");
toast = wrapper.querySelector(".toast");
title = toast.querySelector("span");
subTitle = toast.querySelector("p");
wifiIcon = toast.querySelector(".icon");
closeIcon = toast.querySelector(".close-icon");

window.onload = () => {
    function ajax(){
        let xhr = new XMLHttpRequest(); // creating new XML object
        xhr.open("GET","https://jsonplaceholder.typicode.com/posts/1", true); //sendind get request on this url
        xhr.onload = () => { //once ajax loaded
            //if ajax status is equal to 200 or less than 300 that mean user is getting data from tahat provide url
            //or user response statuts is 200 that mean user is online 
            if(xhr.status == 200 && xhr.status < 300){
                toast.classList.remove("offline");
                title.innerText = "You're online now ";
                subTitle.innerText = "Hurray! Internet is connected!";
                wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';
                wifiIcon.style.backgroundColor = " #2ecc71";
                toast.style.borderLeft = "5px solid #2ecc71";
                closeIcon.onclick = () =>{ //hide toast notification on close icon click
                    wrapper.classList.add("hide");
                }
                setTimeout(() =>{ //hide the toast notification automatically after 5 sec
                    wrapper.classList.add("hide");
                },5000);
            }else{
                offline(); //calling offline function if ajax statuts is not equal to 200 or not less that 300
            }
        }
        xhr.onerror = () =>{
            offline(); //calling offline function if the passed url is not correct or returning 404 or other error
            
        }
        xhr.send(); // sending get request to the passed url
    }

    function offline() { // function for offline
        wrapper.classList.remove("hide");
        toast.classList.add("offline");
        title.innerText = "You're offline now";
        subTitle.innerText = "Oopps ! Internet is disconnected.";
        wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
        wifiIcon.style.backgroundColor = "#ccc";
        toast.style.borderLeft = "5px solid red";

    }

    setInterval(()=>{ //this setInterval function call ajax frequently after 100ms
        ajax();
    }, 100);
}
