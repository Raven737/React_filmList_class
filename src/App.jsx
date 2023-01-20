import { useState, useEffect } from 'react';

const App = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setUsers(json)
      })
  }, [])

  return (
    <>
      <h1>Favourite Movies</h1>
      {/* {todo && <h2>{todo.title}</h2>} */}
      {
        users && users.map(user => {
          return (
            <>
              <h2 key={user.name}>{user.name}</h2>
              <p key={user.email}>{user.email}</p>
            </>
          )
        })
      }
    </>
  )
}

export default App;