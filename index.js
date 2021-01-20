  let sublist1=document.querySelector("#list1");
  let sublist2=document.querySelector("#list2");
  let sublist3=document.querySelector("#list3");
  let sublist4=document.querySelector("#list4");
  
        fetch('1.txt')
      .then( (data) => {
             return data.text();
             }).then( (actualdata) =>{
             let arr = actualdata.split("\n");   
               let Array = arr.map(actualdata =>{
                 let index= actualdata.indexOf('-');
                 return actualdata.substr(index+2);
                }); 
               let temp = Array.map(actualdata => actualdata.split('>'));
              
               let a=[];
               temp.map(ele=>{
                   let b=ele[0].trim();
                   if(a.indexOf(b)==-1){
            
                    a.push(b);
                    let createdOption=document.createElement('option');
                    
                    createdOption.append(b);
                    sublist1.append( createdOption);

                   }
               })
               sublist1.addEventListener("change", () =>{

                let c=[];
                temp.map(ele=>{
                    if(ele.length>1)
                    {
                        let d=ele[1].trim();
                        if(c.indexOf(d)==-1 && ele[0].trim()==sublist1.value){
                            c.push(d);
                            let  createdOption2=document.createElement('option');
                             createdOption2.append(d);
                             sublist2.append(createdOption2);
                        }
                    }
    
                })
                sublist2.addEventListener("change",() => {
                    let r=[];
                    let option1=document.createElement('option');
                        option1.textContent="category";
                        option1.setAttribute('selected',true);
                        option1.setAttribute('disabled',true);
                        sublist3.append(option1);
                    temp.map(ele=>{
                        if(ele.length>2)
                        {
                            let x=ele[2].trim();
                            if(r.indexOf(x)==-1 && ele[0].trim()==sublist1.value&& ele[1].trim()==sublist2.value){
                                r.push(x);
                                let createdOption3=document.createElement('option');
                                console.log(createdOption3)
                                createdOption3.append(x);
                                sublist3.append(createdOption3);
                            }
                        }
                    })

                  
                    sublist3.addEventListener("change",()=>{console.log("hello")
                        let s=[];
                        
                        temp.map(ele=>{
                            if(ele.length>3)
                            {
                                let p=ele[3].trim();
                                if(s.indexOf(p)==-1 && ele[0].trim()==sublist1.value && ele[1].trim()==sublist2.value && ele[2].trim() ==sublist3.value){
                                    s.push(p);
                                    let createdOption4=document.createElement('option');
                                    createdOption4.append(p);
                                    sublist4.append(createdOption4)
                                }
                            }
                        })
                    })
                })

               })
               
              }).catch(error => {
             console.log(error);  
         });

