var myApp = angular.module('loginApp', []);
myApp.controller('loginCtrl', ['$scope', function( $scope ){
    //method for toggle password view
    $scope.inputType = 'password';
    $scope.hideShowPassword = function(){
        if ($scope.inputType == 'password') {
            $scope.inputType = 'text';
            $scope.isHidden = true;
        }
        else {
            $scope.inputType = 'password';
            $scope.isHidden = false;
        }
    };
    //method to validate user name is string ?
    $scope.nameIsString=true;
    $scope.checkName= function(){
        if($scope.name==null || $scope.name==""){
            $scope.nameIsString=false;
        }
        else{
            if($scope.name.match(/^[A-Za-z]+\s?[A-Za-z]+$/))
            {
                $scope.nameIsString=true;
            }
            else
            {
                $scope.nameIsString=false;
            }
        }
    };
    //method to validate eMail ID
    $scope.isValidMailId=true;
    $scope.checkMailId= function() {
        if($scope.email==null || $scope.email=="") $scope.isValidMailId=false;
        else {
            if ($scope.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,24})+$/)) {
                $scope.isValidMailId = true;
            }
            else {
                $scope.isValidMailId = false;
            }
        }
    };
    //method to validate userID
    $scope.isValidUserName=true;
    $scope.checkUserId= function() {
        if($scope.username==null || $scope.username==""){
            $scope.isValidUserName=false;
        }
        else {
            if ($scope.username.match(/[a-zA-Z]+[a-zA-Z0-9]*[._]?[a-zA-Z0-9]+$/)) {
                $scope.isValidUserName=true;
            }
            else{
                $scope.isValidUserName=false;
            }
        }
    };
    //method to check password strength
    $scope.passwordStrength="";
    $scope.checkPasswordStrength= function() {
        if($scope.password==null || $scope.password==""){
            $scope.passwordStrength="cannot be empty";
            $scope.passwordStrengthPercentage="";
        }
        else {
            if ($scope.password.length > 7)    $scope.passwordStrength = "strong";
            if ($scope.password.length < 8)    $scope.passwordStrength = "medium";
            if ($scope.password.length < 6)    $scope.passwordStrength = "weak";
            if ($scope.password.length < 4)    $scope.passwordStrength = "short";

            $scope.passwordStrengthPercentage = $scope.password.length * 12.5;
            if ($scope.passwordStrengthPercentage > 100)   $scope.passwordStrengthPercentage = 100;
            $scope.passwordStrengthPercentage+="%";
        }
        $scope.checkPasswordConfirm();
    };
    //method to check confirm password field
    $scope.confirm="";
    $scope.checkPasswordConfirm= function() {
        if($scope.confirm!="") {
            if ($scope.password == $scope.confirm)     $scope.isPasswordsMatch = "Matched";
            else    $scope.isPasswordsMatch = "Not Matched";
        }
        else $scope.isPasswordsMatch = null;
    };
    //checking the agree terms
    $scope.checkAgreeTerms= function() {

    };
    //enabling the register button
    $scope.isValidated=false;
    $scope.checkRegister= function () {
        $scope.checkName();$scope.checkMailId();$scope.checkUserId();
        $scope.checkPasswordStrength();$scope.checkPasswordConfirm();
        if($scope.agreeterms==false || $scope.agreeterms==undefined){
            $scope.highlightTerms="highlight";
        }
        if($scope.nameIsString && $scope.isValidMailId && $scope.isValidUserName &&
                ($scope.passwordStrength=="strong" || $scope.passwordStrength=="medium") &&
                $scope.isPasswordsMatch == "Matched" && $scope.agreeterms){
            $scope.isValidated=true;
            $scope.highlightTerms="";
        }
        else    $scope.isValidated=false;
    };
    $scope.editDetails= function() {
        $scope.isValidated=false;
    };
}]);