var wmsBuilder = angular.module("wms-builder", [
  "ngRoute",
]);

wmsBuilder.value("hosts", {
  "NICTA - GeoTopo250K": "http://geospace.research.nicta.com.au:8080/geotopo_250k/web/ows",
  "NICTA - Admin Bounds": "http://geospace.research.nicta.com.au:8080/admin_bnds/web/ows",
});

wmsBuilder.value("serviceTypes", {
  "WMS": {
    url: "WMS",
    requestTypes: [
      "GetFeature",
    ],
  },
  "WFS": {
    url: "WFS",
    requestTypes: [
      "GetMap",
    ],
  }
});

wmsBuilder.value("requestTypes", {
  "Get Feature": "GetFeature",
  "Get Map": "GetMap",
});

wmsBuilder.controller("builder", ["$scope",
  "hosts", "serviceTypes", "requestTypes",
  function($scope, hosts, serviceTypes, requestTypes) {
    $scope.hosts = hosts;
    $scope.host = hosts["NICTA - Admin Bounds"];

    $scope.serviceTypes = serviceTypes;
    $scope.serviceType = serviceTypes["WMS"];

    $scope.requestTypes = requestTypes;
    $scope.requestType = requestTypes["Get Map"];
    $scope.validRequestType = function(requestType) {
      return $scope.serviceType.requestTypes[requestType] !== undefined;
    }

    $scope.url = function() {
      return $scope.host + '?' +
        'service=' + $scope.serviceType.url +
        '&request=' + $scope.requestType;
    }
  }]);
