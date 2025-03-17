@echo off
color F0

@REM Declarar las variables
set DATABASE=inspired
set USER=root
set PASSWORD=root
set BACKUP_DIR=C:\Users\Admin\OneDrive\Develop\Liveinspired\Backup
set MYSQLDUMP_BIN=C:\laragon\bin\mysql\mysql-5.7.24-win32\bin\mysqldump.exe
set FECHA=%date:~4,2%_%date:~7,2%_%date:~10,4%

@REM Realizar el respaldo
echo Intentando realizar el respaldo...
(
    %MYSQLDUMP_BIN% --user=%USER% --password=%PASSWORD% %DATABASE% > "%BACKUP_DIR%\%DATABASE%_backup_%FECHA%.sql" 2> "%BACKUP_DIR%\error_log.txt"

) || (
    echo Error durante el respaldo. Simulando un "catch".
    goto ERROR
)

echo Respaldo exitoso.
goto END

:ERROR
echo ¡Se produjo un error en el proceso de respaldo!
goto END

:END
pause
