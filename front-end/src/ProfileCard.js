import React from 'react'


const ProfileCard = props => {
	const user = props.user
	return (
		<div className="profile">
			<div className="profile-image">
				<img src={user.photo} />
			</div>
			<div className="profile-info">
				<p>
					{user.name}
					<br />
					{user.description}
				</p>
			</div>
		</div>
	)
}

export default ProfileCard
