import pandas as pd
import json

def excel_to_json(excel_file, output_json):
    xls = pd.ExcelFile(excel_file)
    result = {}

    for sheet_name in xls.sheet_names:
        df = pd.read_excel(xls, sheet_name=sheet_name, header=None)
        print(f"處理工作表：{sheet_name}")

        result[sheet_name] = {
            "types": {"labels": [], "data": []},
            "status": {"labels": [], "data": []},
            "monthly": {"labels": [], "data": []}
        }

        try:
            # 案件類別統計：A、B欄
            type_df = df[[0, 1]].dropna().iloc[0:]
            result[sheet_name]["types"]["labels"] = type_df[0].astype(str).tolist()
            result[sheet_name]["types"]["data"] = type_df[1].astype(int).tolist()
        except Exception as e:
            print(f"{sheet_name} - 類別統計錯誤：{e}")

        try:
            # 案件來源統計：D、E欄
            status_df = df[[3, 4]].dropna().iloc[0:]
            result[sheet_name]["status"]["labels"] = status_df[3].astype(str).tolist()
            result[sheet_name]["status"]["data"] = status_df[4].astype(int).tolist()
        except Exception as e:
            print(f"{sheet_name} - 來源統計錯誤：{e}")

        try:
            # 鄉鎮別統計：G、H欄
            monthly_df = df[[6, 7]].dropna().iloc[0:]
            result[sheet_name]["monthly"]["labels"] = monthly_df[6].astype(str).tolist()
            result[sheet_name]["monthly"]["data"] = monthly_df[7].astype(int).tolist()
        except Exception as e:
            print(f"{sheet_name} - 鄉鎮統計錯誤：{e}")

    # 輸出為 JSON
    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)
    print(f"轉換完成，已儲存為：{output_json}")

# 使用方法
excel_to_json("chart_data.xlsx", "chart_data.json")
