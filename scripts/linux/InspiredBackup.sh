#!/bin/bash

# Pedir al usuario el nombre de la base de datos
echo "🔹 Ingrese el nombre de la base de datos a respaldar:"
read DATABASE

# Pedir al usuario la ruta donde se guardará el respaldo
echo "🔹 Ingrese la ruta donde se guardará el respaldo:"
read BACKUP_DIR

# Configuración de usuario y contraseña
USER="root"
PASSWORD="root"
MYSQLDUMP_BIN="/usr/bin/mysqldump"

# Obtener fecha y hora actual
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

# Verificar si se ingresó la ruta
if [ -z "$BACKUP_DIR" ]; then
    echo "⚠️ Error: No se especificó un directorio de respaldo."
    exit 1
fi

# Crear el archivo de respaldo
BACKUP_FILE="$BACKUP_DIR/${DATABASE}_backup_${TIMESTAMP}.sql"
COMPRESSED_FILE="$BACKUP_FILE.tar.gz"

echo "🚀 Intentando realizar el respaldo de la base de datos: $DATABASE..."

if $MYSQLDUMP_BIN --default-character-set=utf8mb4 -u "$USER" -p"$PASSWORD" "$DATABASE" > "$BACKUP_FILE"; then
    echo "✅ Respaldo exitoso: $BACKUP_FILE"
    
    # Comprimir el archivo de respaldo
    tar -czf "$COMPRESSED_FILE" -C "$BACKUP_DIR" "$(basename $BACKUP_FILE)"
    
    echo "🗜️ Archivo comprimido: $COMPRESSED_FILE"
    
    # Eliminar el archivo SQL original para ahorrar espacio
    rm "$BACKUP_FILE"

else
    echo "❌ ¡Se produjo un error en el proceso de respaldo!"
    exit 1
fi
