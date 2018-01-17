import React from 'react';
import PropTypes from 'prop-types';

const Tr = ({ index, onClick, toggleHover, hovered, selected, ...props }) => {
  const getColor = () => {
    if (selected) return '#928c8c';
    if (hovered) return '#EEEEEE';
    return 'white';
  };

  return (
    <tr
      onClick={onClick}
      onMouseEnter={() => toggleHover(index)}
      onMouseLeave={() => toggleHover(null)}
      style={{
        backgroundColor: getColor(),
        color: selected ? 'white' : 'black',
        height: 48,
        borderTop: 'solid 1px #0000004a',
        cursor: 'pointer'
      }}
      {...props}
    />
  );
};

const Td = ({ style, children }) => (
  <td
    style={{
      textAlign: isNaN(children) ? 'left' : 'right',
      fontSize: 14,
      ...style
    }}
  >
    {children}
  </td>
);

const Th = ({ style, children }) => (
  <th
    style={{
      fontSize: 13,
      color: '#00000082',
      ...style
    }}
  >
    {children}
  </th>
);

class VisitList extends React.Component {
  state = {
    hovered: null
  };

  toggleHover = index => this.setState({ hovered: index });

  render() {
    const { hovered } = this.state;
    const { visit, visits, setVisit, predictedVisit } = this.props;

    return (
      <div>
        <div style={{ height: 50, fontSize: 20, paddingLeft: 24 }}>
          Completed visits:
        </div>

        <table
          style={{
            width: '98%',
            tableLayout: 'fixed',
            height: 62
          }}
        >
          <thead>
            <tr>
              <Th
                style={{
                  paddingLeft: 24
                }}
              >
                Date
              </Th>
              <Th>Observer</Th>
              <Th
                style={{
                  textAlign: 'right'
                }}
              >
                Age (months)
              </Th>
              <Th
                style={{
                  textAlign: 'right'
                }}
              >
                Weight (kg)
              </Th>
              <Th
                style={{
                  textAlign: 'right'
                }}
              >
                Height (cm)
              </Th>
              <Th
                style={{
                  textAlign: 'right',
                  paddingRight: 24
                }}
              >
                MUAC (cm)
              </Th>
            </tr>
          </thead>
        </table>

        <div
          style={{
            maxHeight: 216,
            overflow: 'auto',
            borderStyle: 'solid',
            borderLeft: 'none',
            borderRight: 'none',
            borderWidth: 1
          }}
        >
          <table
            style={{
              width: '100%',
              tableLayout: 'fixed'
            }}
          >
            <tbody>
              {visits.map(v => (
                <Tr
                  key={v.index}
                  index={v.index}
                  onClick={() => setVisit(v.index)}
                  toggleHover={this.toggleHover}
                  hovered={hovered === v.index}
                  selected={visit.index === v.index}
                >
                  <Td style={{ paddingLeft: 24 }}>
                    {v.eventDate.toISOString().slice(0, 10)}
                  </Td>
                  <Td>{v.completedBy}</Td>
                  <Td>{Math.round(v.ageInDays / 30.25)}</Td>
                  <Td>{v.weight}</Td>
                  <Td>{v.height}</Td>
                  <Td style={{ paddingRight: 24 }}>{v.muac}</Td>
                </Tr>
              ))}
              {predictedVisit && (
                <Tr
                  index={predictedVisit.index}
                  onClick={() => setVisit(predictedVisit.index)}
                  toggleHover={this.toggleHover}
                  hovered={hovered === predictedVisit.index}
                  selected={visit.index === predictedVisit.index}
                >
                  <Td style={{ paddingLeft: 24 }}>
                    {predictedVisit.eventDate.toISOString().slice(0, 10)}{' '}
                    (Predicted)
                  </Td>
                  <Td>-</Td>
                  <Td>{Math.round(predictedVisit.ageInDays / 30.25)}</Td>
                  <Td>{predictedVisit.weight}</Td>
                  <Td>{predictedVisit.height}</Td>
                  <Td style={{ paddingRight: 24 }}>{predictedVisit.muac}</Td>
                </Tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

VisitList.propTypes = {
  visit: PropTypes.object.isRequired,
  predictedVisit: PropTypes.object,
  visits: PropTypes.arrayOf(PropTypes.object).isRequired,
  setVisit: PropTypes.func.isRequired
};

VisitList.defaultProps = {
  predictedVisit: null
};

export default VisitList;
