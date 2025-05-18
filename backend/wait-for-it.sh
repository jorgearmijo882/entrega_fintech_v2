#!/bin/sh
until nc -z $DB_HOST 5432; do
  echo "Esperando a la base de datos..."
  sleep 2
done

exec "$@"
