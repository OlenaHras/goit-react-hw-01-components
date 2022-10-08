import PropTypes from 'prop-types';
import { Container, StatList, Item,Title } from './Statistics.styled';
import { generateRandomColor } from "common/randomColor";

export const Statistics = ({ stats }) => {
    return <Container>
        <Title className="title">Upload stats</Title>
        
        <StatList>
            {stats.map(({ id, label, percentage }) => {
                
                return (<Item key={id.toString()} style={{backgroundColor: generateRandomColor(),
          }}>
                            <span className="label">{label}</span>
                            <span className="percentage">{percentage}%</span>
                        </Item>)
                    })
            }
        </StatList>
        </Container>   
}

Statistics.propTypes ={
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
  }),   )
}
