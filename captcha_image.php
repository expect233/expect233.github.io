<?php
session_start();

// 設定驗證碼內容
$captcha_code = '';
$charset = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // 避免混淆字符
$captcha_length = 5; // 驗證碼長度
for ($i = 0; $i < $captcha_length; $i++) {
    $captcha_code .= $charset[rand(0, strlen($charset) - 1)];
}
$_SESSION['captcha'] = $captcha_code; // 儲存至 session

// 建立圖片
$width = 120;
$height = 40;
$image = imagecreate($width, $height);

// 設定顏色
$background_color = imagecolorallocate($image, 240, 240, 240); // 淡灰色背景
$text_color = imagecolorallocate($image, 50, 50, 50); // 深灰色字體
$line_color = imagecolorallocate($image, 200, 200, 200); // 淡灰色干擾線

// 添加干擾線
for ($i = 0; $i < 5; $i++) {
    imageline($image, rand(0, $width), rand(0, $height), rand(0, $width), rand(0, $height), $line_color);
}

// 添加驗證碼文字
$font_size = 20; // 字體大小
$font_file = __DIR__ . '/arial.ttf'; // 字體檔案
if (!file_exists($font_file)) {
    die('字體檔案不存在，請添加 arial.ttf 至此目錄。');
}
imagettftext($image, $font_size, rand(-10, 10), 10, 30, $text_color, $font_file, $captcha_code);

// 輸出圖片
header('Content-Type: image/png');
imagepng($image);
imagedestroy($image);
?>
