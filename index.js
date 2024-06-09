const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.text());

let todoar = [
    ["reading",'r0'] ,
    ["cycling",'c5'],
    ["painting",'p2'],
    ["cooking",'c3']];

app.get('/todos',(request,response)=>
    {
        console.log("List of todos and ids:");
        for(let i = 0 ; i < todoar.length ; i++)
        {
            console.log(todoar[i]);
        }          
    });

app.get('/todo/:id',(request,response)=>
    {
        switch(request.params.id)
        {
            case 'r0' :
                {
                    console.log(todoar[0][0]);
                    break;
                }
            case 'c5' :
                {
                    console.log(todoar[1][0]);
                    break;
                }
            case 'p2' :
                {
                    console.log(todoar[2][0]);
                    break;
                }
            case 'c3' :
                {
                    console.log(todoar[3][0]);
                    break;
                }
            default :
            {
                console.log("Wrong id");
            }
        }
    }
);

app.post('/todos',(request,response)=>
    {
        todoar.push([request.body,'t5']);
        for(let i = 0 ; i < todoar.length ; i++)
            {
                console.log(todoar[i]);
            }          
    });
 
app.delete('/todo/:id',(request,response)=>
    {
        let c = 0;

        for(let i = 0 ; i < todoar.length ; i++)
        {
            if(request.params.id == todoar[i][1])
            {
                todoar.splice(i,1);
                c++;
                console.log("Task deleted");
                break;
                }
            }

            if(c == 0)
                {
                console.log("Wrong id");
                }
            
            console.log("Final list :");

            for(let i = 0 ; i < todoar.length ; i++)
            {
                console.log(todoar[i]);
                }
        });
app.listen(3000,()=>{console.log("Server startes at the port " , port)});