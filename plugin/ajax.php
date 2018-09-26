<?php

$data = array();
if (!empty($order)) {
    $data['status'] = "success";
    $data['data'] = $order;
    echo json_encode($data);
} else {
    $data['status'] = "error";
    $data['data'] = '';
    echo json_encode($data);
}


            
?>
