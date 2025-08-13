import "./posts.scss"
import Post from "../post/post";

const Posts = () =>{
    
    //Tem
    const posts = [
    
        {
            id: 1,
            name: "Tony Stark",
            userId: 1,
            profilePic: "https://i.pinimg.com/736x/71/1a/8d/711a8dd1c91efedbd2aae34c9613e3ef.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            img: "https://i.pinimg.com/736x/7f/36/72/7f3672034b3f1b6ab03270c058eae258.jpg",
                
        },

        {
            id: 2,
            name: "Bruce Banner",
            userId: 1,
            profilePic: "https://i.pinimg.com/1200x/a3/08/36/a30836b4b63346342dd9d509ecb904a2.jpg",
            desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        },
        
    ];

    return <div className="posts">
        {posts.map(post =>(
            <Post post={post} key={post.id}/>
        ))}
    </div>

}

export default Posts;