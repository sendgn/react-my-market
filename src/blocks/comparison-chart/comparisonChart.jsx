function ComparisonChart(props) {
    const { table } = props;
    return (
        <div className="comparison-chart">
            {/* Chart header */}
            <div className="comparison-chart__header">
                <div className="comparison-chart__row">
                    { table.header.map((item, index) => {
                        return <div className="comparison-chart__col" key={index}>{item}</div>
                    }) }
                </div>
            </div>
            {/* Chart body */}
            <div className="comparison-chart__body">
                { table.rows.map((row, index) => {
                    return (
                        <div className="comparison-chart__row" key={index}>
                            { row.map((item, index) => {
                                return <div className="comparison-chart__col" key={index}>{item}</div>
                            }) }
                        </div>
                    );
                }) }
            </div>
        </div>
    );
}

export default ComparisonChart;
