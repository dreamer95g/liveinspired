@echo off
color F0

REM declarar las variables
set DATABASE=inspired
set USER=root
set PASSWORD=root
REM set BACKUP_DIR=C:\Users\gabry\OneDrive\Develop\Liveinspired\Backup\
set BACKUP_DIR=%1%
set MYSQLDUMP_BIN=C:\laragon\bin\mysql\mysql-5.7.24-win32\bin\mysqldump.exe

set FECHA=%date:/=_%


REM Ejecucion

 %MYSQLDUMP_BIN% --user=%USER% --password=%PASSWORD% %DATABASE%> %BACKUP_DIR%%DATABASE%_backup_%FECHA%.sql

REM Manejar errores
if  errorlevel 1 goto ERROR
REM echo SUCCESSFUL
:ERROR
REM echo FAILED

exit
