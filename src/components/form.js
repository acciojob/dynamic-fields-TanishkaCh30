import React,{useState} from "react";

const Form = () =>{

    let [rows,setRows] = useState([
        { key: Date.now(), name: "", age: "" },
      ]);

   

   function addMore(){
      
    let newRow = {
        key : Date.now(), name: "", age: "" 
    }

    setRows([...rows,newRow]);
   }
    

   function removeRows(rowkey){
    
    let updatedRows = rows.filter(row => row.key !== rowkey)
    setRows(updatedRows);
   }



   const handleChange = (index,field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };


   function submitData(e){
    e.preventDefault();
    console.log(rows);
   }


   
    return (
      
        <div>

            <form>
                { rows.map((row,index)=>(
                    <div key={row.key}>
                <input type="text" name="name" placeholder="Name" value={row.name}
                onChange={(e) =>
                    handleChange(index, "name", e.target.value)
                  }
                ></input>
                <input type="number" name="Age" placeholder="Age" value={row.age}
                onChange={(e) =>
                    handleChange(index,"age", e.target.value)
                  }
                ></input>
                <button type="button" onClick={
                    ()=>(removeRows(row.key))
                }>Remove</button>
                
                </div>
                ))}

            <button type="button" onClick={addMore}>Add More...</button>
            <button type="button" onClick={submitData}>Submit</button>
            </form>

        </div>
        
    )
}


export default Form;