@echo off
color F0

set SCRIPT=F:\laragon\www\liveinspired\create_database_script.txt
set USER=root
set PASSWORD=root


@REM  CREAR BASE DATOS INSPIRED
cd F:\laragon\bin\mysql\mysql-5.7.24-win32\bin
@REM cd F:\laragon\bin\mysql\mariadb-10.2.3-win32\bin
mysql --user=%USER% --password=%PASSWORD% < %SCRIPT%


pause
exit
