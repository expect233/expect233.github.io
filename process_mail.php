<?php
$allowedExtensions = ['gif', 'jpg', 'jpeg', 'png', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'txt', 'pdf', 'odt', 'ods', 'odp', 'odg', 'avi', 'mp4', 'wav', 'wma', 'wmv', 'mp3'];
$maxSize = 50 * 1024 * 1024; // 50MB

if (!empty($_FILES['attachments'])) {
    $files = $_FILES['attachments'];

    for ($i = 0; $i < count($files['name']); $i++) {
        if ($files['name'][$i] === "") continue; // 若無檔案則跳過

        $fileName = $files['name'][$i];
        $fileSize = $files['size'][$i];
        $fileTmp = $files['tmp_name'][$i];
        $fileExt = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

        if (!in_array($fileExt, $allowedExtensions)) {
            die("檔案 $fileName 格式不允許！");
        }

        if ($fileSize > $maxSize) {
            die("檔案 $fileName 超過 50MB！");
        }

        // 儲存檔案
        move_uploaded_file($fileTmp, "uploads/" . $fileName);
    }
}
?>
