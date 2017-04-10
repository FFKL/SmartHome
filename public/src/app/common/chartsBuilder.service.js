angular
    .module('SmartHome.Common')
    .service('chartsBuilderService', chartsBuilderService);

function chartsBuilderService() {
    return {
        buildLinearChart: buildLinearChart
    };

    function buildLinearChart(svgElem, data, options) {
        let svg = d3.select(svgElem[0]);
        svg.attr('width', options.width);
        svg.attr('height', options.height);
        let timeFormat = d3.timeFormat("%H-%M");

        let xMin = d3.min(data, d => d[0]), xMax = d3.max(data, d => d[0]);
        let yMin = d3.min(data, d => d[1]), yMax = d3.max(data, d => d[1]);

        let xScale = d3.scaleLinear()
            .range([options.margin.left, options.width - options.margin.right])
            .domain([xMin, xMax]);

        let yScale = d3.scaleLinear()
            .range([options.height - options.margin.top, options.margin.bottom])
            .domain([yMin, yMax]);

        let xAxis = d3.axisBottom(xScale)
                .ticks(5)
                .tickFormat(timeFormat),
            yAxis = d3.axisLeft(yScale)
                .ticks(5);
        svg.append('svg:g')
            .call(xAxis)
            .attr('transform', `translate(0, ${options.height - options.margin.bottom})`);
        svg.append('svg:g')
            .call(yAxis)
            .attr('transform', `translate(${options.margin.left}, 0)`);

        let lineGen = d3.line()
            .x(d => xScale(d[0]))
            .y(d => yScale(d[1]));
        svg.append('svg:path')
            .attr('d', lineGen(data))
            .attr('stroke', 'green')
            .attr('stroke-width', 2)
            .attr('fill', 'none');
    }
}