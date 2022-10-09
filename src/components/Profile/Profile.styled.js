import styled from '@emotion/styled'

export const UserProfile = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    border: 1px solid var(--primary-color);;
    background-color: white;
    margin: 50px auto;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`;

export const UserName = styled.p`
font-size: 24px;
font-weight: 700;
`;

export const UserInfo = styled.p`
margin: 5px;
color: var(--primary-color);
`

export const StatsList = styled.ul`
    display: flex;
    height: 70px;
    width: 100%;
    padding: 0;
`;

export const StatsItem = styled.li`
    display: grid;
    justify-items: center;
    align-items: center;
    background-color: var(--background-color);
    border: 1px solid var(--primary-color);;
    width: 100%;
`;

export const StatInfo = styled.span`
    font-weight: 700;
`;