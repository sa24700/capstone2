import React, {Component} from 'react'
import axios from 'axios'; 
import { Link } from 'react-router-dom';

 
const BlogPost = props => (
     
    <Link to= {props.newPost['_id']}   className='link dim black b'>
        <article className="  w-50 pa0 ml-auto mr-auto mv2  bg-blue   ba bw2 b--dark-blue">
            
                <h2>{props.newPost["title"]}</h2>
                <p>by: {props.newPost["author"]}</p>
            
            <div className='h-100 mb0 bt bw2 b--dark-blue bg-light-blue' >
                <p>{props.newPost["content"]}</p>   
            </div>
        </article>
    </Link>
)
export default class Blog extends Component{
    constructor(props){
        super(props);

        this.onChangePosts = this.onChangePosts.bind(this);

        this.state = {
            posts: props.value || []
        }
    }

    onChangePosts(e){
        this.setState({posts: e});
    }

    displayPosts = () => {
        var reverseArray = this.state.posts;
        reverseArray = reverseArray.reverse();
        return reverseArray.map(element => {

            return <BlogPost newPost={element} key={element._id}/>
        });
    }

    componentDidMount(){
        axios.get('http://localhost:5001/showAllBlogPosts').then(res=>{
            this.onChangePosts(res.data)   ;
            
        });
    }
    render(){
        return (
            <div>
                <h1>Blog</h1>
                {this.displayPosts()}
            </div>
        )
        
    }
}