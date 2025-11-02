#!/bin/sh
set -e

echo "Waiting for postgres to be ready..."

until pg_isready -d "$DATABASE_URL" -q; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"

exec "$@"
