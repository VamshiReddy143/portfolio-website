const themeToggleBtn=document.getElementById("theme-toggle")


const lightTheme={
    "--background-color":"#fff",
    "--text-color":"#000"
}


const darkTheme={
     "--background-color":"#000",
    "--text-color":"#fff"

}


function applyTheme(theme){
    for(const property in theme){
        document.documentElement.style.setProperty(property,theme[property])
    }
}



themeToggleBtn.addEventListener("click",function(){
    const currentBgcolor=getComputedStyle(document.documentElement).getPropertyValue("--background-color").trim()
    if (currentBgcolor === '#fff') {
        applyTheme(darkTheme);
        themeToggleBtn.textContent = 'Light Mode';
      } else {
        applyTheme(lightTheme);
        themeToggleBtn.textContent = 'Dark Mode';
      }
})