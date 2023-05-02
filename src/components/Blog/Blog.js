import React, {Component} from 'react'
import axios from 'axios'; 
import { Link } from 'react-router-dom';

 
const BlogPost = props => (
      
    <Link to= {props.newPost['_id']}  className=' db black link dim mv2 ' >
        <article className='   bg-blue   ba bw2 b--dark-blue '>


            <div className='h-100 mb0   ' >        
                <h2 className='dark-red f2'>{props.newPost["title"]}</h2>
                <p>by: {props.newPost["author"]}</p>         
                <p  className='tl pa3 ' style={{whiteSpace:'pre-wrap'}}>{props.newPost["content"]}</p>   
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
                if(element.content.length > 600){
                    element.content = element.content.slice(0,600);
                }
            
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

                <section className='w-50 pa0 ml-auto mr-auto  '>
                    {this.displayPosts()}
                </section>
            </div>
        )
        
    }
}