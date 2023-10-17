import { sampleData } from "./Data";
import Table from "./Table";

const TableHeaderRow = () => {
    return <tr><th>id</th><th>Name</th><th>Age</th><th>City</th><th>Ocuupation</th></tr>;
}


function search(name, age) {
    sampleData.filter(item.name == name && item.age == age).map(filtered => (
        <tr key={item.id}>
            <td>{item.id}</td><td>{item.name}</td><td>{item.age}</td><td>{item.city}</td><td>{item.occupation}</td>
        </tr>

    ))
}

function MyForm() {
    return (
        <form>
            <label>Enter your name:
                <input type="text" id="nameinput" />
            </label>

            <label>Enter your age:
                <input type="text" id="ageinput" />
            </label>

            <label>
          City
          </label>
        
        
                
            <label>
                Occupation
                </label>
            <button>reset</button>

            <button >search</button>
            <br/>

            {/* <button on onClick={search(document.getElementById(nameinput),document.getElementById(ageinput))}></button> */}
        </form>
    )
}





export default MyForm