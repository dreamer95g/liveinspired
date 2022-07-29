@echo off
color F0

set SCRIPT=C:\laragon\www\liveinspired\create_database_script.txt
set USER=root
set PASSWORD=root


@REM  CREAR BASE DATOS INSPIRED
cd C:\laragon\bin\mysql\mysql-5.7.24-win32\bin
mysql --user=%USER% --password=%PASSWORD% < %SCRIPT%


pause
exit
