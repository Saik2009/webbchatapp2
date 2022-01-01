function storeuserlocal()
{
    user=document.getElementById("userinput").value;
    localStorage.setItem("user",user);
    window.location="rooms.html";
}