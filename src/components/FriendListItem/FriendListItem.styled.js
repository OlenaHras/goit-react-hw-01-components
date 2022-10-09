import styled from '@emotion/styled'

export const Item = styled.li`
    display: flex;
    width: 250px;
    border: color: var(--primary-color);
    border-radius: 10%;
    background-color: white;
    margin: 0 auto;
    margin-bottom: 5px;
    padding: 5px;
    box-shadow: var(--box-shadow);
    transition: transform .2s;
    
    &:hover {
    transform: scale(1.1);
`;

export const FriendName = styled.p`
    font-size: 18px;
    font-weight: 700;
    margin-left: 10px;
`;

export const Status = styled.span`
    width:20px;
    height: 20px;
    border-radius:50%;
    margin: auto 10px;
    background-color: ${props => 
    props.type === 'true' ? "green" : "red"
    }}
`;