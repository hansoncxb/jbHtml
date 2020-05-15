<?php 
error_reporting(0);
require_once('email.php');
//获取提交IP
$ip = $_SERVER['REMOTE_ADDR'];
$name = $_POST['name'];
$phone = $_POST['phone'];

if(empty($name) || empty($phone)){
	echo "<script>alert('提交的姓名或联系方式不能为空！');window.location.href = document.referrer;</script>";exit;
}
if(!is_numeric($phone)){
	echo "<script>alert('请出入正确的手机号码！');window.location.href = document.referrer;</script>";exit;
}
$address = 'jbsj5822788@163.com';
$title   = '金榜手机网站提交信息';
$content = '姓名：'.$name.'+联系方式：'.$phone.'+IP地址：'.$ip;

$flag = sendMail($address,$title,$content);
if($flag){
    echo "<script>alert('提交成功！');window.location.href = document.referrer;</script>";
}else{
    echo "<script>alert('提交失败！');window.location.href = document.referrer;</script>";
}


