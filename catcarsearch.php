<?php
  if (isset($_GET['partnumber']) && isset($_GET['catalog'])) {
    echo $_GET['partnumber'] . '<br>';
    echo $_GET['catalog'];
  }
 
?>