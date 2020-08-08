import React, { useContext, useState, useCallback, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import AppState from 'src/data/context';

const basicChartData = {
    labels: [],
    datasets: [{
        data: [],
        backgroundColor: [
            '#642483',
            '#40556F',
            '#FF0056',
            '#FFCC00',
        ]
    }]
};

function getChartData(data) {
    if (data.total) {
        return Object.entries(data.school_types)
            .reduce((output, [schoolType, value]) => ({
                ...output,
                labels: [
                    ...output.labels,
                    schoolType
                ],
                datasets: [{
                    ...output.datasets[0],
                    data: [
                        ...output.datasets[0].data,
                        value
                    ]
                }]
            }), basicChartData);
    } else {
        return null;
    }
}

const Content = () => {
    const { data } = useContext(AppState);
    const [ chartData, setChartData ] = useState(getChartData(data));

    useEffect(() => {
        setChartData(getChartData(data));
    }, [data]);

    return (
        <section data-testid="content"
          className="main-content">
            <div className="card">
                <h3 data-testid="chart-card-title">
                    School Type
                </h3>
                {chartData ? (
                    <div data-testid="chart">
                        <Pie data={chartData || {}}
                          width={300}
                          height={300}
                          options={{
                              legend: {
                                  position: 'bottom',
                                  align: 'start',
                                  boxWidth: 100
                              }
                          }} />
                    </div>
                ) : (
                    <p>No content to display</p>
                )}
            </div>
        </section>
    );
}

export default Content;
