import React, { Component } from 'react'


class PostList extends Component {
    render() {
        return (
            <div>
                <tr className = "table">
                    <th className = "tHeading">Id</th>
                    <th className = "tHeading">Description</th>
                    <th className = "tHeading">Deadline</th>
                </tr>
        {PostData.map((postDetail, index)=>{
          return <tr className ="table">
                    <td className="tInput" >{postDetail.id}</td>
                    <td className="tInput">{postDetail.description}</td>
                    <td className="tInput">{postDetail.deadline}</td>
                </tr>
        })}
            </div>
        )
    }
}

export default PostList;