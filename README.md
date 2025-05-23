# 陳情入口整合平台

##共同開發流程：

1. **同步主分支**

   ```bash
   git checkout main
   git pull origin main
   ```

2. **建立/切換到開發分支**

   ```bash
   git checkout -b 分支名稱  //例：最新消息
   ```

3. **開發、提交**

   ```bash
   git commit -a "點擊最新消息開彈跳視窗顯示詳細訊息"
   git commit -m "點擊最新消息開彈跳視窗顯示詳細訊息"
   ```

4. **推送到遠端**

   ```bash
   git push origin 分支名稱
   ```

5. **GitHub 上建立 Pull Request**
   → 由其他人進行 Code Review → 通過後 Merge
6. **合併後刪除開發分支**

   ```bash
   git branch -d 分支名稱              //刪除本地端分支
   git push origin --delete 分支名稱    //刪除遠端分支

   ```
