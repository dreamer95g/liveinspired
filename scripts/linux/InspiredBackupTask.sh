#!/bin/bash

# Variables de configuración
DATABASE="inspired"
USER="root"
PASSWORD="root"
MYSQLDUMP_BIN="/usr/bin/mysqldump"
BACKUP_DIR="/home/gabry/Descargas/liveinspired/backup"

# Verificar si el directorio de respaldo existe, si no, crearlo
if [ ! -d "$BACKUP_DIR" ]; then
    echo "📂 Creando directorio de respaldo: $BACKUP_DIR"
    mkdir -p "$BACKUP_DIR"
fi

# Obtener fecha y hora actual
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="$BACKUP_DIR/${DATABASE}_backup_${TIMESTAMP}.sql"
COMPRESSED_FILE="$BACKUP_FILE.tar.gz"

# Crear respaldo
echo "🚀 Iniciando respaldo automático de la base de datos..."
if $MYSQLDUMP_BIN --default-character-set=utf8mb4 -u "$USER" -p"$PASSWORD" "$DATABASE" > "$BACKUP_FILE"; then
    echo "✅ Respaldo exitoso: $BACKUP_FILE"

    # Comprimir el respaldo
    tar -czf "$COMPRESSED_FILE" -C "$BACKUP_DIR" "$(basename "$BACKUP_FILE")"
    echo "🗜️ Archivo comprimido: $COMPRESSED_FILE"

    # Eliminar el archivo SQL original
    rm "$BACKUP_FILE"

else
    echo "❌ ¡Error en el respaldo!"
    exit 1
fi
