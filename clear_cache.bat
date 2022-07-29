@echo off
color F0

set PHP_DIR=C:\laragon\bin\php\php-7.4.19-Win32-vc15-x86\php.exe

%PHP_DIR% artisan cache:clear
%PHP_DIR% artisan lighthouse:clear-cache


pause
exit
