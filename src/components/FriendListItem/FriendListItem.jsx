import {Item,FriendName} from './FriendListItem.styled';

export const FriendListItem = ({id, avatar, name, isOnline}) => {
    return <Item key={id} >
                <span className="status">{isOnline}</span>
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <FriendName>{name}</FriendName>
            </Item>
}

