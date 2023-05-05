export const salesBarChartData = {
  series: [
    {
      name: "Sales",
      data: [200, 300, 500, 700, 1000, 1200, 1600, 1800, 2000, 2200],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: true,
        offsetX: -15,
        offsetY: -40,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          // reset: true | '<img src="/static/icons/reset.png" width="20">',
          customIcons: [],
        },
        export: {
          csv: {
            filename: "sales data",
            columnDelimiter: ",",
            headerCategory: "category",
            headerValue: "value",
            //   dateFormatter(timestamp) {
            //     return new Date(timestamp).toDateString()
            //   }
          },
          svg: {
            filename: "Sales Data",
          },
          png: {
            filename: "sales Data",
          },
        },
        autoSelected: "zoom",
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: [
        "Nairobi",
        "Kisumu",
        "Migori",
        "Kilgoris",
        "Butula",
        "Londiani",
        "Bungoma",
        "Kisii",
        "Kajiado",
        "Kiambu",
      ],
    },
  },
};

export const areaSpaline = {
  series: [
    {
      name: "This Month",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Last month",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#FEB01A", "#56BEFF"],
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
};
export const demographicPieChartsData = {
  series: [14, 35],
  labels: ["Skin care", "Hair care", "Lightener", "Natural Health"],
  options: {
    chart: {
      type: "donut",
      //   width: '100%'
    },
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      //   formatter: function (val: any) {
      //     return Math.round(val) + "%";
      //   },
      dropShadow: {
        enabled: false,
        top: 1,
        left: 1,
        blur: 1,
        color: "#000",
        opacity: 0.45,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        expandOnClick: true,
        offsetX: 0,
        offsetY: 0,
        customScale: 1,
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 10,
        },
        donut: {
          size: "65%",
          background: "transparent",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "22px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              color: undefined,
              offsetY: -10,
              formatter: function (val: any) {
                return val;
              },
            },
            value: {
              show: true,
              fontSize: "16px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              color: undefined,
              offsetY: 16,
              formatter: function (val: any) {
                return val;
              },
            },
            total: {
              show: true,
              showAlways: false,
              label: "Total",
              fontSize: "22px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              color: "red",
              formatter: function (w: any) {
                return w.globals.seriesTotals.reduce((a: any, b: any) => {
                  return a + b;
                }, 0);
              },
            },
          },
        },
      },
    },
  },
};

export const apexMixedCharts = {
  series: [
    {
      name: "Expenses",
      type: "column",
      data: [
        230000, 110000, 220000, 270000, 130000, 220000, 370000, 210000, 440000,
        220000, 300000,
      ],
    },
    {
      name: "Profits",
      type: "area",
      data: [
        440000, 550000, 410000, 670000, 220000, 430000, 210000, 410000, 560000,
        270000, 430000,
      ],
    },
    {
      name: "Refunded products",
      type: "line",
      data: [
        300000, 250000, 360000, 300000, 450000, 350000, 640000, 520000, 590000,
        360000, 390000,
      ],
    },
  ],
  options: {
    chart: {
      height: 400,
      type: "line",
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },

    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: [
      "01/01/2023",
      "02/01/2023",
      "03/01/2023",
      "04/01/2023",
      "05/01/2023",
      "06/01/2023",
      "07/01/2023",
      "08/01/2023",
      "09/01/2023",
      "10/01/2023",
      "11/01/2023",
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
    },
    colors: ["#7366ff", "#51bb25", "#7366ff"],
    yaxis: {
      title: {
        text: "Shillings",
      },
      min: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y: any) {
          if (typeof y !== "undefined") {
            return "Ksh" + y.toFixed(0);
          }
          return y;
        },
      },
    },
  },
};

export const polarChartData = {
  series: [14, 23, 21, 17, 15, 20],
  // labels:["Men", "Women", "Women(19-25)","Men(19-25)","Men(25>)", "Women(25>)"],
  options: {
    chart: {
      type: "polarArea",
    },
    stroke: {
      // colors: ['#fff']
    },
    legend: {
      position: "bottom",
    },
    fill: {
      opacity: 0.8,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 250,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

export const Currentlysale = {
  series: [
    {
      name: "series1",
      data: [6, 20, 15, 40, 18, 20, 18, 23, 18, 35, 30, 55, 0],
    },
    {
      name: "series2",
      data: [2, 22, 35, 32, 40, 25, 50, 38, 42, 28, 20, 45, 0],
    },
  ],
  options: {
    chart: {
      height: 240,
      type: "area",
      toolbar: {
        show: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "category",
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
      ],
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisTicks: {
        show: true,
      },
    },
    markers: {
      strokeWidth: 3,
      colors: "#ffffff",
      strokeColors: ["#373d3f", "#56BEFF"],
      hover: {
        size: 6,
      },
    },
    yaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
        bottom: -15,
        top: -40,
      },
    },
    colors: ["#373d3f", "#56BEFF"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.5,
        stops: [0, 80, 100],
      },
    },
    legend: {
      show: true,
    },
    tooltip: {
      x: {
        format: "MM",
      },
    },
  },
};

export const Marketvalue = {
  series: [
    {
      name: "Market value",
      data: [20, 100, 40, 30, 50, 80, 33],
    },
  ],
  options: {
    chart: {
      type: "radar",
      toolbar: {
        show: false,
      },
    },

    stroke: {
      width: 3,
      curve: "smooth",
    },
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    plotOptions: {
      radar: {
        size: 140,
        polygons: {
          fill: {
            colors: ["#fcf8ff", "#f7eeff"],
          },
        },
      },
    },
    colors: ["#373d3f"],

    markers: {
      size: 6,
      colors: ["#fff"],
      strokeColor: "#373d3f",
      strokeWidth: 3,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return val;
        },
      },
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        formatter: function (val: any, i: number) {
          if (i % 2 === 0) {
            return val;
          } else {
            return "";
          }
        },
      },
    },
  },
};

// Ecommerce
export const Monthlysales = {
  series: [
    {
      name: "series1",
      data: [280, 170, 440, 170, 270, 130],
    },
    {
      name: "series2",
      data: [150, 500, 300, 250, 420, 350],
    },
    {
      name: "series3",
      data: [450, 150, 320, 500, 280, 100],
    },
  ],

  options: {
    chart: {
      height: 150,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 0,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
      ],
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
        top: -50,
        bottom: -40,
      },
    },
    fill: {
      type: "gradient",
      opacity: [1, 0.4, 0.25],
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 1,
        gradientToColors: ["#a26cf8", "#a927f9", "#373d3f"],
        opacityFrom: [1, 0.4, 0.25],
        opacityTo: [1, 0.4, 0.25],
        stops: [30, 100],
        colorStops: [],
      },
      colors: ["#373d3f", "#373d3f", "#373d3f"],
    },
    colors: ["#373d3f", "#56BEFF", "#56BEFF"],
  },
};

export const columnCharts = {
  series: [
    {
      name: "Inflation",
      data: [2.3, 5.1, 3.0, 9.1, 2.0, 4.6, 2.2, 9.3, 5.4, 4.8, 3.5, 5.2],
    },
  ],
  options: {
    chart: {
      height: 105,
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: "top", // top, center, bottom
        },

        columnWidth: "20%",
        startingShape: "rounded",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,

      formatter: function (val: any) {
        return val + "%";
      },
      offsetY: -10,
      style: {
        fontSize: "12px",
        colors: ["#373d3f"],
      },
    },

    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      position: "bottom",

      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#7366ff",
            colorTo: "#c481ec",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val: any) {
          return val + "%";
        },
      },
    },
    grid: {
      show: false,
      padding: {
        top: -35,
        right: -45,
        bottom: -20,
        left: -10,
      },
    },
    colors: ["#373d3f"],
  },
};
