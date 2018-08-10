import React from 'react'


const ProfileCard = props => {
	const {user} = props
	return (
		<div className="profile">
			<div className="profile-info">
				<p>
					{user.firstName + ' ' + user.lastName}
					<br />
					{user.description}
				</p>
			</div>
		</div>
	)
}

export default ProfileCard
