import React, { Component } from 'react'
import PostData from '../data/posts.json';


class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <tr className = "table">
                    <th className = "tHeading">Id</th>
                    <th className = "tHeading">Description</th>
                    <th className = "tHeading">Deadline</th>
                    <th className = "tHeading">Done?</th>
                </tr>
        {PostData.map((postDetail, index)=>{
          return <tr className ="table">
                    <td className="tInput" >{postDetail.id}</td>
                    <td className="tInput">{postDetail.description}</td>
                    <td className="tInput">{postDetail.deadline}</td>
                    <td className="tInput">{postDetail.done}</td>
                    <td>
                        <form>
                            <input type ="checkbox" value="done"value="Done?"></input>
                        </form>
                    </td>
                 </tr>
        })}
            </div>
        )
    }
}

export default PostList;