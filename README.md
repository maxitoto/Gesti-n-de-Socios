# Gestión-de-Socios

UNIX

mkdir repoclone
cd repoclone
git clone https://github.com/maxitoto/Gestion-de-Socios.git

cd Gestion-de-Socios

cd client
npm install --save-dev vite
cd ..

cd server
npm install express dotenv
cd ..

touch runServers.sh

chmod +x runServers.sh

./runServers.sh
