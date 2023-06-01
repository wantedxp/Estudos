fetch('https://reqres.in/api/users')
    .then((res) => res.json())
    .then(data => {
        const users = data.data
        console.log(users)

        users.forEach((user) => {
            const userName = `${user.first_name} ${user.last_name}`

            const userAvatar = user.avatar

            const userList = document.querySelector('#userList')
            const p = document.createElement('p')
            p.innerText = userName

            const avatarImg = document.createElement('img')

            avatarImg.src = userAvatar


            userList.append(avatarImg, p)
        })
    })


    
    



