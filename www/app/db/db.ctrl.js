(function() {
  angular.module('starter').controller('DBCtrl', DBCtrl);

  DBCtrl.$inject = ['starterConfig', 'utilService', '$state',
    '$ionicPopup', 'lsService', 'settingsService', '$ionicActionSheet',
    '$scope'
  ];

  function DBCtrl(sConfig, utilService, $state, $ionicPopup, lsService,
    settingsService, $ionicActionSheet, $scope) {
    // Variables section
    var logger = utilService.getLogger();
    logger.debug("DBCtrl start");

    var dbc = this;

    // Variables section
    dbc.lineLabels = ["January", "February", "March", "April", "May", "June",
      "July"
    ];
    dbc.lineSeries = ['Series A', 'Series B'];
    dbc.lineData = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    dbc.lineDatasetOverride = [{
      yAxisID: 'y-axis-1'
    }, {
      yAxisID: 'y-axis-2'
    }];
    dbc.lineOptions = {
      scales: {
        yAxes: [{
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        }, {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }]
      }
    };

    // Bar charts
    dbc.barLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    dbc.barSeries = ['Series A', 'Series B'];

    dbc.barData = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

    // Buble chart
    dbc.bubleSeries = ['Series A', 'Series B'];

    dbc.bubleData = [
      [{
        x: 40,
        y: 20,
        r: 5
      }],
      [{
        x: 10,
        y: 40,
        r: 10
      }]
    ];

    // Dynamic chart
    dbc.dLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales",
      "Tele Sales", "Corporate Sales"
    ];
    dbc.dData = [300, 500, 100, 40, 120];
    dbc.dType = 'polarArea';

    dbc.toggle = function() {
      dbc.dType = dbc.dType === 'polarArea' ?
        'pie' : 'polarArea';
    };

    // Doughnut chart
    dbc.doughnutLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    dbc.doughnutData = [300, 500, 100];

    // Function section
    dbc.showChart = showChart;

    // Functions definations
    function showChart() {
      try {
        logger.debug("showChart function");


      } catch (exception) {
        logger.error("exception: " + exception);
      }
    }

    logger.debug("DBCtrl end");
  }
})();
