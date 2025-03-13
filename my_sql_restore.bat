@echo off
color F0

set MYSQL_BIN=F:\laragon\bin\mysql\mysql-5.7.24-win32\bin\mysql.exe
set USER=root
set PASSWORD=root
@REM set BACKUP_DIR=F:\Users\gabry\OneDrive\BroacApoyoContacts\Backup\
@REM set SCRIPTS_DIR=F:\Users\gabry\OneDrive\BroacApoyoContacts\Scripts\

title Restore DB in MySQL           Dev by Gabry 2022

echo Script para restaurar una DB en MySQL ...


REM Ejecucion para restaurar la base de datos
set /p db=Escriba el nombre de la base de datos:
set /p backup=Arrastre el backup SQL que desea restaurar:

REM Execution
%MYSQL_BIN% --user=%USER% --password=%PASSWORD% %db% < %backup%



REM esperar 7s y cerrar
timeout /t 7

exit
