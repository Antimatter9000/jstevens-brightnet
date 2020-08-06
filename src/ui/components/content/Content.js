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
    // const canvasRef = useCallback(node => {
    //     console.log('node:', node, data);
    //     if (node && data.school_types) {
    //         const ctx = node.getContext('2d');
    //         const dataArray = Object.entries(data.school_types)
    //             .map(([key, value]) => value);
    //         console.log(dataArray);
    //         const chart = new Chart(ctx, {
    //             type: 'pie',
    //             data: {
    //                 labels: ['red', 'green', 'blue', 'yellow'],
    //                 datasets: [{
    //                     data: dataArray,
    //                     backgroundColor: [
    //                         "#878BB6", 
    //                         "#4ACAB4", 
    //                         "#FF8153", 
    //                         "#FFEA88"
    //                     ] 
    //                 }]
    //             }
    //         });
    //         console.log('I MADE PIE', chart);
    //     } else {
    //         console.log('I want my pie');
    //     }
    // }, [data.school_types]);

    // useEffect(() => {
    //     console.log('canvasref:', canvasRef);
    //     if (canvasRef.current) {
    //         const ctx = canvasRef.current.getContect('2d');
    //         console.log(Chart);
    //         const chart = new Chart(ctx, {
    //             type: 'pie',
    //             data: data.school_types
    //         });
    //     }
    // }, [canvasRef.current])

    useEffect(() => {
        setChartData(getChartData(data));
    }, [data]);

    return (
        <section data-testid="content"
          className="main-content">
            <div data-testid="chart-card"
              className="card">
                {data.total ? (
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
                ) : (
                    <p>No content to display</p>
                )}
            </div>
        </section>
    );
}

export default Content;
