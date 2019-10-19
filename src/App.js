import React ,{useState,Fragment} from 'react';
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './Tables/UserTable'

const App = () => {
  //data
  const userData = [
    {id:1 , name:'Prasannjeet' , username:'floppydisk'},
    {id:2 , name:'Deepa' , username:'Hharddisk'},
    {id:3 , name:'AMAMM' , username:'hhhdisk'},
  ]

  const initialFormState = {id: null ,name:'',username:''}
  //setting state
  const [users,setUsers] = useState(userData)
  const [currentUser,setCurrentUser] = useState(initialFormState)
  const [editing,setEditing] = useState (false)

  //CRUD operations
  const addUser = user =>{
    user.id = user.length + 1
    setUsers([...users,user ])
  }
  
  const deleteUser = id =>{
     setEditing (false)
      setUsers(users.filter( user => user.id !==id))  
    }

  const updateUser = (id,updateUser) =>{
       setEditing(false)
       setUsers(users.map(user =>(user.id ===id ? updateUser:user)))
  }
  const editRow = user =>{
       setEditing(true)
       setCurrentUser({ id: user.id , name: user.name , username:user.username})
  }
return(
  <div className="container">
       <h1>CRUD App with Hooks</h1>
       <div className="flex-row">
         <div className="flex-large">
           {
             editing ? (
               <Fragment>
                 <h2>Edit users</h2>
                 <EditUserForm
                    editing= {editing}
                    setEditing = {setEditing}
                    currentUser = {currentUser}
                    updateUser = {updateUser}
                    />
               </Fragment>
             ) : (
               <Fragment>
                 <h2>Add User</h2>
                 <AddUserForm adduser = {addUser}/>
               </Fragment>
             )
           }
         </div>
         <div className="flex-large">
           <h2>View users</h2>
           <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
         </div>
       </div>
  </div>
)
          }

export default App;
