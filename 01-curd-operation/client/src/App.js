import "./App.css";
// import { createBrowserRouter } from "react-router-dom";
function App() {
  // const route = createBrowserRouter([{ path: "/" }]);
  return (
    <div className="container">
      <div className="hero">
        <button>Add User</button>
        <table>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Bhavesh Balendra</td>
            <td>bhavesh@gmail.com</td>
            <td>Delete Edit</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Bhavesh Balendra</td>
            <td>bhavesh@gmail.com</td>
            <td>Delete Edit</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Bhavesh Balendra</td>
            <td>bhavesh@gmail.com</td>
            <td>Delete Edit</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
