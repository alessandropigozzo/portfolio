<?php
   $page = $_SERVER['PHP_SELF'];
?>
   
   <table class='table table-striped'>
    <thead>
        <tr>
            <th><a href="<?=$page?>?orderBy=id">ID</a></th>
            <th><a href="<?=$page?>?orderBy=username">NAME</a></th>
            <th><a href="<?=$page?>?orderBy=fiscalcode">FISCAL CODE</a></th>
            <th><a href="<?=$page?>?orderBy=email">EMAIL</a></th>
            <th><a href="<?=$page?>?orderBy=age">AGE</a></th>
            
        </tr>
        
        
    </thead>
    <tbody>
        <?php
        if($users){
            foreach ($users as $user){  ?>
               <tr>
                   <td><?=$user['id']?></td>
                   <td><?=$user['username']?></td>
                   <td><?=$user['fiscalcode']?></td>
                   <td><a href="mailto:<?=$user['email']?>"> <?=$user['email']?></a></td>
                   <td><?=$user['age']?></td>
               </tr>    
                  <?php
            }
        } else {
            
            echo '<tr><td colspan="5" class="text-center"><h2> no record found</h2> </td></tr>';
        }
        
      ?>
        
    </tbody>
    
    
</table>