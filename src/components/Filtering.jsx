import { sampleData } from "./Data";
import Table from "./Table";

const TableHeaderRow = () => {
    return <tr><th>id</th><th>Name</th><th>Age</th><th>City</th><th>Ocuupation</th></tr>;
  }

  
function search(name,age){
    sampleData.filter(item.name==name && item.age == age).map(filtered =>(
        <tr key={item.id}>
        <td>{item.id}</td><td>{item.name}</td><td>{item.age}</td><td>{item.city}</td><td>{item.occupation}</td>
      </tr>

    ))
}

function MyForm(){
    return (
        <form>
          <label>Enter your name:
           <input type="text" id="name" />
          </label>

          <label>Enter your age:
            <input type="text" id = "age" />
          </label>
        
        {/* <button on onClick={search(name,age)}></button> */}
        </form>
      )
}



  

  export default MyForm