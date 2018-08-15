import React from 'react'

const UserProfileForm = props => {
  const { handleClick, handleSubmit, user } = props

  if (user && !user.id) {
    return null
  }

	return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-sm-12">
          <label htmlFor="firstName">First Name</label>
          <input type="text" className="form-control" defaultValue={user.firstName}/>
        </div>
          <div className="control">
            <label htmlFor="lastName">Last Name</label>
            <input type="text"
            className="form-control"
            defaultValue={user.lastName}/>
          </div>
          <div className="control">
              <label htmlFor="description">Description</label>
              <textarea type="text"
              className="form-control" defaultValue={user.description}/>
          </div>
        <div className="form-button">
          <button type="submit">Update Profile</button>
          <button type="button" onClick={handleClick}>Logout</button>
        </div>
      </div>
    </form>
	)
}

export default UserProfileForm
