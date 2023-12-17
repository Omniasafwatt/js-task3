var siteName=document.getElementById('siteName')
var siteurl=document.getElementById('siteURL')
var errormessage = [];
siteList=[]
if(localStorage.getItem('sites')){
siteList = JSON.parse(localStorage.getItem('sites'))
displaysite()
}

function submit(){
    var sites={
        name: siteName.value,
        URL: siteurl.value
    }
    siteList.push(sites)
    localStorage.setItem('sites',JSON.stringify(siteList))
    console.log(siteList)
    displaysite()
    clear()
}
function displaysite(){
    row=''
    for(var i=0;i<siteList.length;i++){
        row+=`
        <tr>
        <td>${i}</td>
        <td>${siteList[i].name}</td>
        <td><a href='${siteList[i].URL}'><button class="btn btn-visit"><i class="fa-solid fa-eye"></i> Visit</button></a></td>
        <td><button onclick="deletesite(${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i> Delete</button></td>
    </tr>`
    }
    document.getElementById('tbody').innerHTML=row
}
function clear(){
    siteName.value=''
    siteurl.value=''
}
function deletesite(i){
    siteList.splice(i,1)
    localStorage.setItem('sites',JSON.stringify(siteList))
    displaysite()
}
function validation(){

    var urlpattern = new RegExp('^(https?|ftp):\\/\\/[\\w-]+(\\.[\\w-]+)+([\\w.,@?^=%&:/+#-]*[\\w@?^=%&/+#-])?$');

    if(siteName.value.length > 3 && urlpattern.test(siteurl.value)){
        submit();
    }
    else{
        alert('Site name must contain at least 3 characters \nSite URL must be a valid one ')
    }
    // var namepattern = /^[A-Z][a-z]{3,8}$/;
    // if(siteName!=namepattern){
    //     if(!namepattern.test(siteName)){
    //     errormessage.push('Site name must contain at least 3 characters')
    // }}

    // var urlpattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    // if(siteurl!= urlpattern){
    //     if(!urlpattern.test(siteurl)){
    //     errormessage.push('Site URL must be a valid one')
    // }}
    // if(errormessage.length>0){
    //     alert(errormessage.join("\n"));
    //     return false;
    // }
    // return true;

}
