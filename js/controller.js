angular.module('expenseTracker', []).controller('addExpenseController', function($scope){
        
        
         $scope.categories=['Fruits','Snacks','Vegetables'];
         $scope.selectedItem;
            $scope.selectedCategory = function(item){
                console.log("in selectedCategory")
                $scope.selectedItem = item;
                
            }
            
            $scope.expenses = [];
        

    
        $scope.saveExpense = function() {
            //category:
            $scope.form.selectedItem = $scope.selectedItem;
            
            //date
            $scope.form.date = new Date();
        
            var dataSaved = {};
            dataSaved.categoryName = $scope.form.selectedItem;
            dataSaved.date = $scope.form.date;
            dataSaved.amount = $scope.form.amount;
            dataSaved.storeName = $scope.form.storeName;
            $scope.expenses.push(dataSaved);
            console.log($scope.expenses);
        }  
        
        
    /*expenses=[
                                         {
                                         categoryName: 'Fruits',
                                         date: '04/23/2017',
                                         amount: '89.09',
                                         storeName: 'Safeway'
                                    
                                         },
                                         {
                                         categoryName: 'Movies',
                                         date: '04/27/2017',
                                         amount: '30.09',
                                         storeName: 'Regal Movies'
                                    
                                         },
                                         {
                                         categoryName: 'Vegetables',
                                         date: '04/28/2017',
                                         amount: '89.09',
                                         storeName: 'New India Bazar'
                                    
                                         },
                                         {
                                         categoryName: 'Snacks',
                                         date: '04/28/2017',
                                         amount: '50.09',
                                         storeName: 'Walmart'
                                    
                                         }];
        
                    this.expenses = expenses;*/
        
    })