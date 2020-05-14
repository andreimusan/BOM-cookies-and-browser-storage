// let a = "CONSENT=YES+RO.ro+20150705-15-0; SID=uAfqpabYDJqJU2pAAZpcbIyS0TrJPrQ0cDK-b2HgitHXLVX5mhVGQBHK_gMfWGLwK5z6Bg.; APISID=eBRnMBOWac5u7KAe/ACS0-i08KSbGUXkor; SAPISID=lF4WHWTZCie8rhch/A717hjGnB3B1GZwxI; __Secure-APISID=eBRnMBOWac5u7KAe/ACS0-i08KSbGUXkor; __Secure-3PAPISID=lF4WHWTZCie8rhch/A717hjGnB3B1GZwxI; s_gl=1d66449087a04d9f44d5acfc94bdd3a5cwIAAABSTw==; PREF=al=ro&f5=30000&f4=4000000; SIDCC=AJi4QfH_Q04qcIyg_k6ElDBJTsTBxne0gK8oEbw7JpGV4u70xYBt4JfmQyJ8QYUxpB8yzZuEV3s"

function getCookies() {
  let cookieArray = document.cookie.split("; ")

  let cookieObject = {};
  
  cookieArray.forEach(elem => {
    let cookieValue = elem.split("=");
    cookieObject[cookieValue[0]] = cookieValue[1];
  })
  // for(let i=0; i<cookieArray.length; i++){
  //     let cookieValue = cookieArray[i].split("=");
  //     cookieObject[cookieValue[0]] = cookieValue[1];
  // }

  // console.log(cookieObject);    
  
  return cookieObject;
}

const cookieObject = getCookies();

const radioBtn = document.getElementsByName('language');

for (let i=0; i<radioBtn.length; i++ ){

    if(radioBtn[i].value === cookieObject.language) {
      radioBtn[i].checked = 'checked';
    }
    
    radioBtn[i].addEventListener('click', function(event) {
      document.cookie = "language=" + event.target.value;
    })
}