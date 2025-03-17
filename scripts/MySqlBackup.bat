@echo off
color F0

@REM Declarar las variables
set DATABASE=inspired
set USER=root
set PASSWORD=root
@REM set BACKUP_DIR=C:\Users\Admin\OneDrive\Develop\Liveinspired\Backup
set BACKUP_DIR=%1%
set MYSQLDUMP_BIN=C:\laragon\bin\mysql\mysql-5.7.24-win32\bin\mysqldump.exe
@REM set FECHA=%date:~4,2%_%date:~7,2%_%date:~10,4%

@REM Realizar el respaldo
@REM echo Intentando realizar el respaldo...
(
    @REM %MYSQLDUMP_BIN% --user=%USER% --password=%PASSWORD% %DATABASE% > "%BACKUP_DIR%\%DATABASE%_backup.sql" 2> "%BACKUP_DIR%\error_log.txt"
     %MYSQLDUMP_BIN% --default-character-set=utf8mb4 --user=%USER% --password=%PASSWORD% %DATABASE% > "%BACKUP_DIR%\%DATABASE%_backup.sql"
    @REM echo Error durante el respaldo.
    @REM goto ERROR
)

@REM echo Respaldo exitoso.
goto END

:ERROR
echo ¡Se produjo un error en el proceso de respaldo!
goto END

:END
@REM pause

