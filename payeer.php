<?php
$sum = $_POST['sum'];
$name = $_POST['user'];
$email = $_POST['email'];
if (in_array($sum, ['4.99', '10.99', '19.99'])) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $orders = file_get_contents('orders.txt');
        $orders2 = explode("\n", $orders);
        $count_orders = count($orders2);
        $orders3 = $count_orders ? $orders2[$count_orders - 1] : '';
        $orders4 = explode("|", $orders3);
        $m_orderid = intval($orders4[0]) + 1;
        $m_shop = '896688266';
        $m_amount = number_format($sum, 2, '.', '');
        $m_curr = 'USD';
        $m_desc = base64_encode('Pay');
        $m_key = 'msfB0TiRxe9wrZlr';
        $arHash = array($m_shop, $m_orderid, $m_amount, $m_curr, $m_desc);
        $arHash[] = $m_key;
        $sign = strtoupper(hash('sha256', implode(':', $arHash)));
        $order_info = "{$m_orderid}|{$sum}|{$email}";
        file_put_contents('orders.txt', "\n" . $order_info, FILE_APPEND);	
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls';
$mail->Port = 587;
$mail->Host = 'smtp.gmail.com';
$mail->Username = 'fortnite.legendstore@gmail.com';
$mail->Password = 'Dropitlikeitshot@2019';
$mail->setFrom('fortnite.legendstore@gmail.com');
$mail->addAddress('fortnite.legendstore@gmail.com'); 
$mail->isHTML(true);
$mail->Subject = 'Заявка с legendstorequiz.info';
$mail->Body    = "Ник: ".$name."\nE-mail: " .$email."\nСумма: " .$sum;
$mail->AltBody = '';
$mail->send();
?>
<body onload="document.myform.submit();">
<form name="myform" method="post" action="https://payeer.com/merchant/" style="display:none;">
<input type="hidden" name="m_shop" value="<?=$m_shop
?>">
<input type="hidden" name="m_orderid" value="<?=$m_orderid
?>">
<input type="hidden" name="m_amount" value="<?=$m_amount
?>">
<input type="hidden" name="m_curr" value="<?=$m_curr
?>">
<input type="hidden" name="m_desc" value="<?=$m_desc
?>">
<input type="hidden" name="m_sign" value="<?=$sign
?>">
<input type="submit" name="m_process" value="Оплатить" />
</form>
</body>
<?php
    }
}
?>