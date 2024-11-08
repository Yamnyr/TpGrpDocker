#!/bin/sh
sed -i 's/\r//' wait-for-mysql.sh

check_mysql() {
  nc -z mysql 3306
}

until check_mysql; do
  echo "MySQL n'est pas encore prêt - attente..."
  sleep 2
done

echo "MySQL est prêt !"
node app.js