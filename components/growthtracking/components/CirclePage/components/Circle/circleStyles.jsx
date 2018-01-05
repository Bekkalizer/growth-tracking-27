import React from 'react';

const p = (scale, color, zscore, percentile) => (
  <div
    // Centile text style
    style={{
      textAlign: 'center',
      color,
      fontSize: `${3.3 * scale}rem`,
      fontWeight: 'bold',
      paddingTop: `${2 * scale}rem`,
      marginBottom: -6 * scale,
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <div>{percentile}</div>
    <div
      // Percentage symbol style
      style={{
        display: 'inline-block',
        alignSelf: 'flex-end',
        fontSize: `${1.5 * scale}rem`,
        marginBottom: 8 * scale,
        marginRight: 10 * scale,
        width: 0,
      }}
    >
      %
    </div>
  </div>
);

const z = (scale, color, zscore, percentile) => (
  <div
    // Z-score text style
    style={{
      color,
      paddingTop: `${1.7 * scale}rem`,
      fontWeight: 'bold',
      fontSize: `${3.8 * scale}rem`,
      marginTop: 2 * scale,
    }}
  >
    {zscore}
  </div>
);

const zp = (scale, color, zscore, percentile) => (
  <div>
    <div
      // Centile text style
      style={{
        textAlign: 'center',
        color,
        fontSize: `${3.3 * scale}rem`,
        fontWeight: 'bold',
        paddingTop: `${1.2 * scale}rem`,
        marginBottom: -6 * scale,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {zscore}
    </div>
    <div
      // Divider line style
      style={{
        borderBottom: `${2 * scale}px solid ${color}`,
        width: '70%',
        margin: '0 auto',
      }}
    />
    <div
      // Z-score text style
      style={{
        textAlign: 'center',
        marginBottom: -6 * scale,
        display: 'flex',
        justifyContent: 'center',
        color,
        fontSize: `${1.8 * scale}rem`,
        marginTop: 2 * scale,
      }}
    >
      <div>{percentile}</div>
      <div
        // Percentage symbol style
        style={{
          display: 'inline-block',
          alignSelf: 'flex-end',
          fontSize: `${1.2 * scale}rem`,
          marginBottom: 3 * scale,
          marginRight: 10 * scale,
          width: 0,
        }}
      >
        %
      </div>
    </div>
  </div>
);

const pz = (scale, color, zscore, percentile) => (
  <div>
    <div
      // Centile text style
      style={{
        textAlign: 'center',
        color,
        fontSize: `${3.3 * scale}rem`,
        fontWeight: 'bold',
        paddingTop: `${1.2 * scale}rem`,
        marginBottom: -6 * scale,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {percentile}
      <div
        // Percentage symbol style
        style={{
          display: 'inline-block',
          alignSelf: 'flex-end',
          fontSize: `${1.5 * scale}rem`,
          marginBottom: 8 * scale,
          marginRight: 10 * scale,
          width: 0,
        }}
      >
        %
      </div>
    </div>

    <div
      // Divider line style
      style={{
        borderBottom: `${2 * scale}px solid ${color}`,
        width: '70%',
        margin: '0 auto',
      }}
    />

    <div
      // Z-score text style
      style={{ color, fontSize: `${1.8 * scale}rem`, marginTop: 2 * scale }}
    >
      {zscore}
    </div>
  </div>
);

export { p, z, zp, pz };
