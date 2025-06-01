#!/bin/bash

# Pedir al usuario el nombre de la base de datos
echo "🔹 Ingrese el nombre de la base de datos donde se restaurarán los datos:"
read DATABASE

# Pedir al usuario la ruta del archivo comprimido (.tar.gz)
echo "🔹 Ingrese la ruta del archivo de respaldo (.tar.gz):"
read BACKUP_COMPRESSED_FILE

# Configuración de usuario y contraseña
USER="root"
PASSWORD="root"
MYSQL_BIN="/usr/bin/mysql"

# Verificar si el archivo de respaldo comprimido existe
if [ ! -f "$BACKUP_COMPRESSED_FILE" ]; then
    echo "⚠️ Error: El archivo de respaldo no existe en la ruta proporcionada."
    exit 1
fi

# Definir el directorio temporal de extracción
EXTRACTION_DIR="/tmp/backup_restore"
mkdir -p "$EXTRACTION_DIR"

# Extraer el respaldo SQL
echo "📂 Descomprimiendo el respaldo..."
tar -xzf "$BACKUP_COMPRESSED_FILE" -C "$EXTRACTION_DIR"

# Buscar el archivo SQL dentro del directorio extraído
BACKUP_FILE=$(find "$EXTRACTION_DIR" -name "*.sql" | head -n 1)

# Verificar si se encontró el archivo SQL
if [ -z "$BACKUP_FILE" ]; then
    echo "❌ Error: No se encontró un archivo .sql dentro del respaldo."
    exit 1
fi

echo "🚀 Iniciando la restauración de la base de datos: $DATABASE desde $BACKUP_FILE..."

# Restaurar la base de datos desde el archivo SQL
if $MYSQL_BIN -u "$USER" -p"$PASSWORD" "$DATABASE" < "$BACKUP_FILE"; then
    echo "✅ Restauración exitosa en la base de datos: $DATABASE"
    # Limpiar archivos temporales
    rm -rf "$EXTRACTION_DIR"
else
    echo "❌ ¡Se produjo un error en el proceso de restauración!"
    exit 1
fi
