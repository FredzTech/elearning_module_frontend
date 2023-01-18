import React from 'react'

export default function editUser() {
    const handleEdit = () =>{
        const url = `http://localhost:5000/users${id}`
        const Credentials = [username, email , role ]
        axios.put(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
  return (
    <div>

    </div>
  )
}
