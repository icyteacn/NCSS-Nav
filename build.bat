@echo off
chcp 65001 >nul
echo ========================================
echo   NCSS-Nav 一键换校工具 - 打包脚本
echo ========================================
echo.

REM 检查Python
python --version >nul 2>&1
if errorlevel 1 (
    echo [错误] 未找到Python，请先安装Python
    pause
    exit /b 1
)

REM 安装依赖
echo [1/3] 安装依赖...
pip install rich openpyxl pyinstaller -q

REM 打包
echo [2/3] 打包为exe...
pyinstaller --onefile --name "NCSS-Nav换校工具" --console ^
    --icon=NONE ^
    --add-data "templates;templates" ^
    --clean ^
    customize_tui.py

REM 复制到桌面
echo [3/3] 复制到桌面...
copy /Y "dist\NCSS-Nav换校工具.exe" "%USERPROFILE%\Desktop\" >nul 2>&1

echo.
echo ========================================
echo   打包完成！
echo   exe位置: dist\NCSS-Nav换校工具.exe
echo   桌面快捷: %USERPROFILE%\Desktop\NCSS-Nav换校工具.exe
echo ========================================
pause
