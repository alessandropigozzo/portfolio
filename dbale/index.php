<?php
require_once 'functions.php';
 require_once 'view/top.php';
require_once 'view/navbar.php';
?>



<!-- Begin page content -->
<main role="main" class="container">
  <br>
   <h1>USER MANAGEMENT SYSTEM </h1>
   <?php
        $action = getParam('action');
        switch($action){
            
            case 'insert':
                break;
            
            default:
                $orderBy = getParam('orderBy','id');
                if(!in_array($orderBy,getConfig('orderByColumns'))){
                    $orderBy ='id';
                }
                $params = [
                    'orderBy' => getParam('orderBy','id')
                ];
                
                $users = getUser($params);
               // $users = [];
                require_once 'view/usersList.php';
        }
    
    ?>
   
   
</main>

<?php
require_once 'view/footer.php';
?>
