

// var num = 234;
// var abc;
// abc = num + 100;
// alert(abc);
// var num = 23;
// var abc;
// abc = (num*2)+5-(2+9);
// alert(abc);
// var str = "rabeeea";
// str = str + "razzaq";
// var name = " please visit again" + 2;
// alert(str + name);
// var question = "what is your name";
// var response = "rbeea";
// var name = prompt(question,response);
// if (name===response){
//     alert("you can enter");
// }
// else if (name==="sana") {
//     alert("acha ajao yar");
// }
// else {
//     alert("ab to dfa hi ho jao");
// }
// var num,abc,name;
// num = 16;
// abc = 04;
// name = "rabeea";
// var temp = prompt("Name", "rabeea");
// if (temp==="rabeea"){
//     if (temp==="rabeea" && num==16 )
//     {
//         alert("you are allowed");
//     }
//     else {
//         alert("dafa");
//     }
// }
// else {
//     alert("fuck you");
// }
// push,pop,shift,unshift,splice and slice
// var arr = ["dog","ct","cow","goat"];
// //alert(arr[2]);
// arr.push("tiger","lion","bhensa");
// //alert(arr[5]);
// arr.unshift("fish","ferret");
// //alert(arr[1]);
// arr.shift();
// //alert(arr[1]);
// arr.splice(1,2,"kamina");
// //alert(arr[1]);
// //alert(arr[2]);
// var replace = arr.slice(1,3);
// alert(replace[0]);
// *** for loop ***
// var checker = false;
// var id = [1,2,3,4,5,6];
// var resp = prompt("please enter id:", "id number");
// if (resp=="id number"){
//     alert("please enter id first");
// }
// else {
//     for( var i=0;i<6;i++)
//     {
//          if (resp==id[i]){
//              checker = true;
//              alert("you are enrolled");
//              break;
//          }
//     }
//     if (checker===false){
//         alert("you are not enrolled");
//     }
// }
  

//  *** changing case***
// var name ="rabeea";
// var resp = prompt("enter name");
// resp=resp.toLowerCase();
// if (resp===name){
//     alert("RAJA RAJA KOREJA M SAMA Ja");
// }


// ***strings***
// var war = "world war II";
// var str = "everthing was destroyed in world war II thousnads of houses were demolished it was indeed an era of brutality";
// var len = str.length;
// var temp = str.indexOf("world war II");
// if (temp !== -1){
//     //alert(str.slice(0,temp) + "second worls war" + str.slice(temp + 12));
// }
// var temp2 = str.length;
// len = str.charAt(0);
// temp = str.charAt(temp2-1);
//alert(len + temp);
// var text = "my name is rabeea razzaq but i dont like this name i want my name to be roshni"
// //alert(text);
// //var name = prompt("what name you want","roshni");
// var newText = text.replace("rabeea razzaq",name);
// //alert(newText);
// var strnum = "256" - 1;
// alert(strnum);
// strnum = "9" / 3 + "name0";
// alert(strnum);
// strnum = parseInt(strnum);
// alert(strnum);
// strnum = strnum.toString();
// alert(strnum);
// strnum = 10.547846843;
// strnum = strnum.toFixed(2);
// alert(strnum);

// ***** date nd time*****
// function tellTime() {
//     var now = new Date();
//     var currentHour = now.getHours();
//     var currentMinut = now.getMinutes();
//     alert("Time :" + currentHour + ":" + currentMinut);
// }
// function greetuser(greeting,string,num) {
//     alert(greeting + string + num);
// }
// function total(num,num1,num2){
//      var comp=num+num1+num2;
//      return comp;
//  }
// var num,num1,num2;
// num=prompt("enter the first value");
// //numNew=number(num);
// num1=prompt("enter the second value");
// //num1New=number(num1);
// num2=prompt("enter the third value");
// num=Number(num);
// num1=Number(num1);
// num2=Number(num2);
//  alert(total(num,num1,num2));
// tellTime();
// var newDate = new Date();
// alert(newDate);

// var minu = newDate.getMinutes();
// alert(minu);
// var greet = "hello there whts aup!!!!!!";
// var num = 19;
// greetuser(greet, "my age is ",num);
// function paraExpand(){
//     var value = "<ol><li>rabeea</li><li>sana</li><li>wajiha</li><li>wajiha umer</li><li>zainab</li></ol>"
//    document.getElementById("exp").innerHTML=value; 
// }
// function setCity(fieldId){
//     var val = document.getElementById(fieldId).value;
//     var cityName;
//     switch (val){
//         case "001" :
//         cityName = "karachi";
//         break;
//         case "002" :
//         cityName = "lahore";
//         break;
//         case "003" :
//         cityName = "islamabad";
//         break;
//     }
//     document.getElementById("city").value=cityName;
// }
// function congrat(){
//     alert("wohoo!!!!! thanks fo your valuable time dear!!!!...");
// }
// function vanish(){
//     document.getElementById("chupja").className="hide";
// }
// function setChange(){
//     document.getElementById("chupja").className+= " changecol";
// }
// function swap() {
//     document.getElementById("image").src = "trypic6.jpeg";
// }
// function swapUni(id, newPic){
//     document.getElementById(id).src = newPic;
//
// document.getElementById("container").style.background="#ccc";
// var select = document.getElementsByClassName('navitem');
// for(var i=0;i<=select.length;i++)
// {
//     console.log(select[i]);
// }
// var set="<a href='#'>BONUS</a>";
//  document.querySelectorAll('.navbar .navitem').style.background="red";
// // for(var i=0;i<=select.length;i++)
// {
//     console.log(select[i]);
// // }
// var array=document.querySelectorAll('#paraCollect .para');
// for(var i=0;i<=array.length;i++)
// {
//     array[i].textContent+= ' (this is a paragraph)';
//}
      // var select = document.querySelector('.lists');
      // select.innerHTML += '<ul><li>dafa</li><li>bhar</li></ul'
     
      // var btn = document.querySelectorAll('.lists #listval .listitem .delete');
      // Array.from(btn).forEach(function(each){
      //       each.addEventListener('click',function(e){
      //            var li= e.target.parentElement;
      //            li.parentElement.removeChild(li);
      //       })
      // })
      // var link = document.querySelector('.navbar .navitem a');
      // link.addEventListener('click',function(e){
      //       e.preventDefault();
      //       var div = e.target.parentElement;
      //       div.parentElement.removeChild(div);
      // })
      //   var selectForm = document.forms['add-item'];
      //    selectForm.addEventListener('submit',function(e){
      //          e.preventDefault();
      //          var getValue=document.querySelector('input[type="text"]').value;
      //           //created new items
      // var newItem = document.createElement('li');
      // var newBtn= document.createElement('button');
      // //adding content
      // newItem.textContent= getValue;
      // newBtn.textContent="DELETE";
      // //adding classes
      // newItem.classList.add('listItem');
      // newBtn.classList.add('delete')

      
      // //append the items
      // newItem.appendChild(newBtn);
      // var list=document.querySelector('.lists #listval');
      // list.appendChild(newItem);
      //    })
      // //created new items
      // var newItem = document.createElement('li');
      // var newBtn= document.createElement('button');
      // //adding content
      // newItem.textContent="saim";
      // newBtn.textContent="DELETE";
      // //adding classes
      // newItem.classList.add('listItem');
      // newBtn.classList.add('delete')

      
      // //append the items
      // newItem.appendChild(newBtn);
      // var list=document.querySelector('.lists #listval');
      // list.appendChild(newItem);
      // // console.log(list);
      // const check = document.querySelector('#add-item #hide');
      // check.addEventListener('change',function(e){
      //       if(check.checked){
      //             list.style.display = "none"
      //       }
      //       else{
      //             list.style.display = "block";
      //       }
      // })

      //  // search filter
      //  list = document.querySelector('.lists ul')
      //  var searchField = document.forms['search'].querySelector('input')
      //  searchField.addEventListener('keyup',function(e){
      //        letter = e.target.value;
      //        letter = letter.toLowerCase();
      //        var comp=list.getElementsByTagName('li');
      //        Array.from(comp).forEach(function(val){
      //              var each = val.textContent;
      //              if(each.toLowerCase().indexOf(letter) != -1)
      //              {
      //                    val.style.display = "block";
      //              }
      //              else{
      //                    val.style.display = "none"
      //              }

      //        })
      //  })
      var createBtn = document.querySelector('.createbutton button');
      createBtn.addEventListener('click',function(e){
            e.preventDefault();
            var title = document.querySelector('.title');
            title.style.display = "block";
      })
      var addForm = document.forms['createform'];
      addForm.addEventListener('submit',function(e){
            e.preventDefault();
            var inputValue = addForm.querySelector('input[type="text"]').value;
            console.log(inputValue);
            if(inputValue !== "")
            {
                  var titleShow = document.createElement('h5');
                  titleShow.textContent = inputValue;
                  var titleContainer = document.querySelector('#titlecontainer');
                  titleContainer.appendChild(titleShow);
                  var titleDup = document.querySelector('.title');
                  titleDup.style.display = "none";
                  var createList = document.querySelector('.addlistitem');
                  createList.style.display= "initial";
                  var createBtn = document.querySelector('.createbutton');
                  createBtn.style.display= "none"; 

                  
            }
            else{
                  alert("Input vlid title name");
            }
           
      })
      var addList = document.forms['add-listitems'];
      var ul = document.querySelector('#items')
      addList.addEventListener('submit',function(e){
            e.preventDefault();
            var getItem = addList.querySelector('input[type="text"]').value;
            if(getItem !== "")
            {
                  // creating elements
                  var li = document.createElement('li');
                              var span = document.createElement('span');
                              var delet =  document.createElement('a');
                              var edit = document.createElement('a');
                              var divider = document.createElement('div');
                              span.textContent = getItem;
                              delet.textContent = "DELETE";
                              edit.textContent = "EDIT";
                              // setting attributes
                              span.setAttribute('class','textcontent');
                              delet.setAttribute('href','javascript:void(0)');
                              delet.setAttribute('class','delete');
                              edit.setAttribute('href','javascript:void(0)');
                              edit.setAttribute('class','edit');
                              divider.setAttribute('class','divider');
                              
                              // appending childs
                              li.appendChild(span);
                              li.appendChild(edit);
                              li.appendChild(delet);
                              ul.appendChild(li);
                              ul.appendChild(divider);
                  
                              addList.querySelector('input[type="text"]').value = null;   
            }
            else{
                  alert("input valid list item");
            }
            
            
            
      })
      var clearForm = addForm.querySelector('input[type="text"]');
      var showTitle = document.querySelector('.title');
      var hideForm = document.querySelector('.addlistitem');
      var done = document.querySelector('#done');
      var hideList = document.querySelector('.showlistitem');
      var addMore = document.querySelector('.addmoreitems');
      done.addEventListener('click',function(e){
           
            hideList.style.display = "none";
            addMore.style.display = "block";
            hideForm.style.display = "none";
            showTitle.style.display = "block";
            clearForm.value = null;

      })
      addMore.addEventListener('click',function(e){
               hideList.style.display = "block";
               hideForm.style.display = "block";
               showTitle.style.display = "none";
               addMore.style.display = "none";
      })
      
     
      ul.addEventListener('click',function(e){
            e.preventDefault();
            // var dlthBtn = ul.querySelector('.delete');
            if(e.target.className=== "delete"){
                 var deletParent = e.target.parentElement;
                 ul.removeChild(deletParent);
            }

      })
     
      ul.addEventListener('click',function(e){
             e.preventDefault();
             var editBtn = ul.querySelector('.edit');
           if(e.target.className=== "edit"){
          var editValue = e.target.previousSibling;
       const valueTo = editValue.textContent;  
          addList.querySelector('input[type="text"]').value = valueTo;
          var hideExistList = e.target.parentElement;
          console.log(hideExistList);
          ul.removeChild(hideExistList);
        }
 })



