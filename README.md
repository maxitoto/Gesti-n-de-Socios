# Gestión-de-Socios

111111111111111111111111111111

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

# Crear y ejecutar el script runServers.sh
touch runServers.sh

(cd client && npm run dev) &
(cd server && node server.js) &
wait

chmod +x runServers.sh
./runServers.sh


npm install @vitejs/plugin-react
