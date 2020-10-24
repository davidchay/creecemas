 angular.module('app', ['ui.bootstrap-slider','ui.bootstrap.buttons'])
.controller('calculadoraCtrl', ['$scope', '$log', function ($scope, $log) {
    $scope.cantidad=35000;
    $scope.tiempo=16;
    $scope.periodoPago="Mensual";
    $scope.pago=3675;
    $scope.pagoTotal=58800;
    $scope.cat=48;
    $scope.cantidadOptions = {
        min: 10000,
        max: 100000,
        step: 1000,
        orientation: 'horizontal',  // vertical
        handle: 'round', //'square', 'triangle' or 'custom'
        tooltip: 'show', //'hide','always'
        tooltipseparator: ':',
        tooltipsplit: false,
        enabled: true,
        naturalarrowkeys: false,
        range: false,
        ngDisabled: false,
        reversed: false
    };
    $scope.tiempoOptions = {
        min: 1,
        max: 24,
        step: 1,
        orientation: 'horizontal',  // vertical
        handle: 'round', //'square', 'triangle' or 'custom'
        tooltip: 'show', //'hide','always'
        tooltipseparator: ':',
        tooltipsplit: false,
        enabled: true,
        naturalarrowkeys: false,
        range: false,
        ngDisabled: false,
        reversed: false
    };
    $scope.changeCantidad=function(){
      if($scope.cantidad<21000){
          $scope.periodoPago='Quincenal';
          $scope.cantidadOptions.step=2000;
      }else if($scope.cantidad>20000){
          $scope.periodoPago='Mensual';
          $scope.cantidadOptions.step=5000;
      }
      $scope.calculaPago($scope.cantidad,$scope.tiempo,$scope.periodoPago);
    }
    $scope.changeTiempo=function(){
      $scope.calculaPago($scope.cantidad,$scope.tiempo,$scope.periodoPago);
    }
    $scope.calculaPago=function(cantidad,tiempo,periodoPago){
      $scope.iva=0.16;
      if(periodoPago=='Mensual'){
        $scope.cat=48;
        if(tiempo>12){
          $scope.caty=68;  
        }else{
          $scope.caty=33;  
        }
      }else{
        $scope.cat=60;
        if(tiempo>12){
          $scope.caty=42;  
        }else{
          $scope.caty=22;  
        }
      }
      
      $scope.interes=(cantidad*$scope.caty)/100;
      //$scope.interesTotal=(cantidad+$scope.interes)*$scope.iva;
      $scope.pagoTotal=cantidad+$scope.interes;
      $scope.pago=$scope.pagoTotal/tiempo;
    }


}]
);
