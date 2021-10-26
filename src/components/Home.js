import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
    state = {
        posts: []
    }
    render() {
        const { posts } = this.state
        const postList = posts.length ? (posts.map(post => {
            return (
                <div className="post card" key={post.id}>
                    <div className="card-content">
                        <span className="card-title">{post.title}</span>       
                    </div>
                    <div className="card-action">
                    <a href="#">open in tab</a>
                  </div>
                </div>
           )}))
            : (<div className="center">No posts to show</div>)
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}     
            </div>)
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then (res => {
            console.log(res);
            this.setState({
                posts: res.data.slice(0, 10)
            });
        })
    }
}

export default Home;