import React, {Component} from 'react'
import axios from 'axios'; 
 
const BlogPost = props => (
    <article>
    <h2> {props.newPost["title"]}</h2>
    <p>{props.newPost["author"]}</p>
    <p>{props.newPost["content"]}</p>   
    </article>
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