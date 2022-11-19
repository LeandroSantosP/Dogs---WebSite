import React from 'react'
import PhotoGet from './endpoint/PhotoGet'
import PhotoPost from './endpoint/PhotoPost'
import TokenPost from './endpoint/TokenPost'
import UserPost from './endpoint/UserPost'

const Api = () => {
  return (
    <div>
      <h2>UserPost</h2>
      <UserPost />
      <h2>Token Post</h2>
      <TokenPost />
      <h2>Photo Post</h2>
      <PhotoPost/>
      <h2>Photo get</h2>
      <PhotoGet />
    </div>
  )
}

export default Api