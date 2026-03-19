const myTasks=[];
        const butt=document.querySelector("#addbutton");
        butt.addEventListener("click",function f(){


            const data = document.querySelector("#textt");
           
            
            
            myTasks.push(data.value);
            data.value="";

            let codehtml='';

            for(let i =0 ; i<myTasks.length;i++){
                 codehtml+=`<p>${myTasks[i]}</p>`;
            }
            document.querySelector("#taskshow").innerHTML=codehtml;
            console.log(myTasks);

            

        }
        );
