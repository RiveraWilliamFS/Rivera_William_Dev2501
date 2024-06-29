import React, { useState } from 'react';
import ChartSmall from '../components /Charts/ChartSmall';
import ChartMedium from '../components /Charts/ChartMedium';

function Dashboard() {
    const [chartSmallData] = useState([
        { chartHeader: 'Skateboards' },
        { chartHeader: 'Wheels' }
    ]);
    const [chartMediumData] = useState([
        { chartHeader: 'Bearings' },
        { chartHeader: 'Bolts' }
    ]);

    const styles = {
        container: {
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        },
        chartSmall: {
            display: 'flex',
            justifyContent: 'space-around',
            marginBottom: '20px'
        },
        row: {
            display: 'flex',
            justifyContent: 'space-around'
        },
        chartMedium: {
            display: 'flex',
            justifyContent: 'space-around'
        },
        header: {
            textAlign: 'center',
            color: '#333',
            marginBottom: '20px'
        }
    };

    return (
        <section style={styles.container}>
            <h1 style={styles.header}>Dashboard</h1>
            <div style={styles.chartSmall}>
                {chartSmallData.map((chart, id) => (
                    <ChartSmall
                        key={id}
                        id={id}
                        chartSmall={chart}
                    />
                ))}
            </div>

            <section style={styles.row}>
                <div style={styles.chartMedium}>
                    {chartMediumData.map((chart, id) => (
                        <ChartMedium
                            key={id}
                            id={id}
                            chartMedium={chart}
                        />
                    ))}
                </div>
            </section>
        </section>
    );
}

export default Dashboard;









/*import React from 'react';

const Dashboard = () => {
  return (
    <section style={StyleSheet.container}>
    <h1>Dashboard</h1>
</section>
  );
};

export default Dashboard;*/