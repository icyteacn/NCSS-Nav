# -*- mode: python ; coding: utf-8 -*-


a = Analysis(
    ['customize_tui.py'],
    pathex=[],
    binaries=[],
    datas=[],
    hiddenimports=[],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=['PyQt5', 'PySide6', 'matplotlib', 'numpy', 'pandas', 'scipy', 'sklearn', 'jieba', 'IPython', 'sphinx', 'black', 'pytest', 'PIL', 'tkinter', 'psutil', 'zmq'],
    noarchive=False,
    optimize=0,
)
pyz = PYZ(a.pure)

exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.datas,
    [],
    name='NCSS-Nav换校工具',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    upx_exclude=[],
    runtime_tmpdir=None,
    console=True,
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
)
