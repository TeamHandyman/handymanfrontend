export const userColumns = [
    {field: "id", headerName: "ID", width: 70},
    {
        field: "user",
        headerName : "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt=""/>
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email", 
        headerName: "Email", 
        width: 230
    },
    {
        field: "category", 
        headerName: "Category", 
        width: 130
    },
    {
        field: "status", 
        headerName: "Status", 
        width: 160,
        renderCell: (params)=> {
            return(
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    }
];



//temp data
export const userRows = [
    {
        id:1,
        username: "Sanath Perera",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg", 
        email: "1sana@gmail.com",
        category: "plumber",
        status: "Pending"
       
    },
    {
        id:2,
        username: "Sanath Perera",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg", 
        email: "2sana@gmail.com",
        category: "plumber",
        status: "Approved"
       
    },
    {
        id:3,
        username: "Sanath Perera",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg", 
        email: "3sana@gmail.com",
        category: "plumber",
        status: "Approved"
       
    },
    {
        id:4,
        username: "Sanath Perera",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg", 
        email: "4sana@gmail.com",
        category: "plumber",
        status: "Revision"
       
    },
    {
        id:5,
        username: "Sanath Perera",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg", 
        email: "5sana@gmail.com",
        category: "carpenter",
        status: "Pending"
       
    },
    {
        id:6,
        username: "Sanath Perera",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg", 
        email: "1sana@gmail.com",
        category: "plumber",
        status: "Pending"
       
    },
    {
        id:7,
        username: "Sanath Perera",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg", 
        email: "2sana@gmail.com",
        category: "plumber",
        status: "Approved"
       
    },
    {
        id:8,
        username: "Sanath Perera",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg", 
        email: "3sana@gmail.com",
        category: "plumber",
        status: "Approved"
       
    },
    {
        id:9,
        username: "Sanath Perera",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg", 
        email: "4sana@gmail.com",
        category: "plumber",
        status: "Revision"
       
    },
    {
        id:10,
        username: "Sanath Perera",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg", 
        email: "5sana@gmail.com",
        category: "carpenter",
        status: "Pending"
       
    }

];