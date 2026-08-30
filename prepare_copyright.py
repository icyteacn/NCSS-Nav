# -*- coding: utf-8 -*-
"""
软著申请材料整理工具
整理NCSS-Nav项目的源代码，生成软著申请所需的文档
"""
import os
import sys
from pathlib import Path
from datetime import datetime

sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = Path(r"D:\2025海之子计算机复试电子资料\福star\学习\wiki\中国国际大学生创新大赛（2026）产业赛道\NCSS-Nav")
OUTPUT_DIR = Path(r"D:\2025海之子计算机复试电子资料\福star\学习\wiki\中国国际大学生创新大赛（2026）产业赛道\软著材料")

# 源代码文件列表（按重要性排序）
SOURCE_FILES = [
    # 核心配置
    "src/config/site.js",
    "src/main.js",
    "src/router.js",
    "src/App.vue",
    
    # 组件
    "src/components/KpiCard.vue",
    "src/components/BarRow.vue",
    "src/components/PieChart.vue",
    "src/components/LineChart.vue",
    "src/components/InsightPanel.vue",
    "src/components/CountUp.vue",
    "src/components/ScorePicker.vue",
    "src/components/CourseCalculator.vue",
    "src/components/ZcAccumulator.vue",
    
    # 核心数据
    "src/data/apps.js",
    "src/data/industryValue.js",
    "src/data/siteSentiment.js",
    
    # 核心视图
    "src/views/Home.vue",
    "src/views/IndustryValue.vue",
    "src/views/SiteSentiment.vue",
    "src/views/GraduatePlan.vue",
    "src/views/TiebaSentiment.vue",
    
    # API
    "src/api/index.js",
    "src/api/localCourse.js",
    "src/api/courseStats.js",
    "src/api/termTimetable.js",
    
    # 工具
    "src/utils/course.js",
    "src/utils/format.js",
    "src/utils/billImport.js",
    "src/utils/xlsReader.js",
    "src/utils/xlsxExport.js",
    
    # 状态管理
    "src/stores/scholarship.js",
    
    # 其他视图
    "src/views/Timetable.vue",
    "src/views/Canteen.vue",
    "src/views/ClassroomNav.vue",
    "src/views/Calendar.vue",
    "src/views/Budget.vue",
    "src/views/WhatToEat.vue",
    "src/views/FoodWheel.vue",
    "src/views/QuizGame.vue",
    "src/views/BuildingMatch.vue",
    "src/views/LeaderTest.vue",
    "src/views/CampusNews.vue",
    "src/views/PhysicalTest.vue",
    "src/views/StudentId.vue",
    "src/views/OfficialSites.vue",
    "src/views/Categories.vue",
    "src/views/Contributors.vue",
    "src/views/Welcome.vue",
    "src/views/NoticeDetail.vue",
    "src/views/BudgetPro.vue",
    "src/views/BudgetSim.vue",
    "src/views/CourseStats.vue",
]

# 一键换校工具
TOOL_FILES = [
    "customize_tui.py",
    "customize.py",
]

def read_file_lines(file_path):
    """读取文件内容并返回行列表"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.readlines()
    except Exception as e:
        print(f"  读取失败: {e}")
        return []

def generate_source_code_doc():
    """生成源代码文档"""
    print("=" * 60)
    print("  NCSS-Nav 软著申请材料整理工具")
    print("=" * 60)
    
    # 创建输出目录
    OUTPUT_DIR.mkdir(exist_ok=True)
    
    all_lines = []
    file_info = []
    
    print("\n📁 整理源代码文件...")
    
    for file_path in SOURCE_FILES:
        full_path = BASE_DIR / file_path
        if full_path.exists():
            lines = read_file_lines(full_path)
            if lines:
                all_lines.extend(lines)
                file_info.append({
                    'path': file_path,
                    'lines': len(lines),
                    'size': full_path.stat().st_size
                })
                print(f"  ✓ {file_path} ({len(lines)} 行)")
        else:
            print(f"  ✗ {file_path} (文件不存在)")
    
    total_lines = len(all_lines)
    print(f"\n📊 总计: {len(file_info)} 个文件, {total_lines} 行代码")
    
    # 生成源代码文档（前30页 + 后30页，每页50行）
    lines_per_page = 50
    pages_to_include = 30
    
    front_lines = all_lines[:pages_to_include * lines_per_page]
    back_lines = all_lines[-pages_to_include * lines_per_page:] if total_lines > pages_to_include * lines_per_page * 2 else []
    
    # 写入文档
    output_file = OUTPUT_DIR / "NCSS-Nav源代码.txt"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("=" * 60 + "\n")
        f.write("NCSS-Nav 模块化校园导航平台\n")
        f.write("软件著作权申请 - 源代码文档\n")
        f.write(f"生成日期: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
        f.write("=" * 60 + "\n\n")
        
        f.write("【源代码说明】\n")
        f.write(f"总行数: {total_lines} 行\n")
        f.write(f"文件数量: {len(file_info)} 个\n")
        f.write(f"本文档包含前{pages_to_include}页和后{pages_to_include}页源代码\n")
        f.write(f"每页{lines_per_page}行，共{pages_to_include * 2 * lines_per_page}行\n\n")
        
        f.write("=" * 60 + "\n")
        f.write("第一部分：前30页源代码\n")
        f.write("=" * 60 + "\n\n")
        
        for i, line in enumerate(front_lines, 1):
            f.write(f"{i:4d} | {line}")
        
        if back_lines:
            f.write("\n\n" + "=" * 60 + "\n")
            f.write("第二部分：后30页源代码\n")
            f.write("=" * 60 + "\n\n")
            
            start_line = total_lines - len(back_lines) + 1
            for i, line in enumerate(back_lines, start_line):
                f.write(f"{i:4d} | {line}")
    
    print(f"\n✅ 源代码文档已生成: {output_file}")
    
    # 生成文件清单
    list_file = OUTPUT_DIR / "文件清单.txt"
    with open(list_file, 'w', encoding='utf-8') as f:
        f.write("NCSS-Nav 项目文件清单\n")
        f.write("=" * 60 + "\n\n")
        f.write(f"{'序号':<6}{'文件路径':<50}{'行数':<10}{'大小':<10}\n")
        f.write("-" * 76 + "\n")
        
        for i, info in enumerate(file_info, 1):
            f.write(f"{i:<6}{info['path']:<50}{info['lines']:<10}{info['size']:<10}\n")
        
        f.write("-" * 76 + "\n")
        f.write(f"{'合计':<6}{'':<50}{total_lines:<10}\n")
    
    print(f"✅ 文件清单已生成: {list_file}")
    
    return output_file, list_file

def generate_tool_source_code():
    """生成一键换校工具源代码文档"""
    print("\n📁 整理一键换校工具源代码...")
    
    tool_lines = []
    for file_path in TOOL_FILES:
        full_path = BASE_DIR / file_path
        if full_path.exists():
            lines = read_file_lines(full_path)
            if lines:
                tool_lines.extend(lines)
                print(f"  ✓ {file_path} ({len(lines)} 行)")
    
    total_lines = len(tool_lines)
    print(f"\n📊 一键换校工具: {total_lines} 行代码")
    
    # 生成文档
    output_file = OUTPUT_DIR / "一键换校工具源代码.txt"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("=" * 60 + "\n")
        f.write("NCSS-Nav 一键换校工具\n")
        f.write("软件著作权申请 - 源代码文档\n")
        f.write(f"生成日期: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
        f.write("=" * 60 + "\n\n")
        
        f.write("【源代码说明】\n")
        f.write(f"总行数: {total_lines} 行\n")
        f.write(f"文件数量: {len(TOOL_FILES)} 个\n")
        f.write(f"功能: 通过TUI交互界面或配置文件，将校园导航站快速适配到新高校\n\n")
        
        f.write("=" * 60 + "\n")
        f.write("源代码内容\n")
        f.write("=" * 60 + "\n\n")
        
        for i, line in enumerate(tool_lines, 1):
            f.write(f"{i:4d} | {line}")
    
    print(f"\n✅ 一键换校工具源代码文档已生成: {output_file}")
    return output_file

def generate_software_manual():
    """生成软件说明书"""
    print("\n📝 生成软件说明书...")
    
    manual_content = """NCSS-Nav 模块化校园导航平台
软件说明书

一、软件概述

NCSS-Nav是一款模块化、可拼接的校园导航单页应用，旨在为高校提供一站式校园服务聚合解决方案。软件采用Vue3加Vite技术栈开发，支持路由懒加载，已部署于GitHub Pages，通过GitHub Actions实现自动化构建和部署。

二、软件功能

1. 模块化架构
采用应用注册表模式，每个功能模块独立注册，支持热插拔，便于维护和扩展。目前已注册20余个功能模块。

2. 一键换校
通过运行customize_tui.py脚本，支持交互式配置、Excel模板导入、JSON配置导入三种方式，可在5分钟内完成新高校的适配部署。

3. 主题定制
内置9套配色方案，支持自定义主题，满足不同高校品牌需求。

4. 数据驱动
静态数据与实时数据结合，支持离线使用，GitHub Actions每6小时自动更新数据快照。

三、技术架构

1. 前端技术栈
- 框架：Vue 3 Composition API
- 构建工具：Vite 6.0
- 路由：Hash路由，支持懒加载
- 状态管理：Composition API
- UI组件：自研组件库

2. 数据处理
- 爬虫：Python爬虫 + Node.js脚本（双实现）
- 数据格式：JSON静态快照
- 更新机制：GitHub Actions定时任务

3. 部署方案
- 托管平台：GitHub Pages
- CI/CD：GitHub Actions
- 访问方式：HTTPS自动部署

四、运行环境

1. 开发环境
- Node.js 18+
- Python 3.8+
- npm 或 yarn

2. 运行环境
- 现代浏览器（Chrome、Firefox、Safari、Edge）
- 支持移动端、平板、桌面端

五、安装部署

1. 本地开发
```
npm install
npm run dev
```

2. 生产构建
```
npm run build
```

3. 一键换校
```
python customize_tui.py
```

六、版权声明

版权所有：FJNU-Nav团队
开源协议：MIT License
项目地址：https://github.com/icyteacn/FJNU-Nav

七、联系方式

如有问题，请通过GitHub Issues反馈。
"""
    
    output_file = OUTPUT_DIR / "软件说明书.txt"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(manual_content)
    
    print(f"✅ 软件说明书已生成: {output_file}")
    return output_file

def main():
    """主函数"""
    # 生成源代码文档
    source_file, list_file = generate_source_code_doc()
    
    # 生成一键换校工具源代码
    tool_file = generate_tool_source_code()
    
    # 生成软件说明书
    manual_file = generate_software_manual()
    
    print("\n" + "=" * 60)
    print("  软著申请材料生成完成！")
    print("=" * 60)
    print(f"\n📁 材料位置: {OUTPUT_DIR}")
    print(f"\n📄 生成的文件:")
    print(f"  1. {source_file.name}")
    print(f"  2. {tool_file.name}")
    print(f"  3. {manual_file.name}")
    print(f"  4. {list_file.name}")
    print(f"\n📋 申请流程:")
    print(f"  1. 登录中国版权保护中心: https://www.ccopyright.com.cn/")
    print(f"  2. 注册账号 → 填写申请表")
    print(f"  3. 上传源代码文档（前30页+后30页）")
    print(f"  4. 上传软件说明书")
    print(f"  5. 提交审核（约30-60个工作日）")

if __name__ == '__main__':
    main()
