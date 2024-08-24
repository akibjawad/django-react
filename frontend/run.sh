lsoutput=$(ls ./node_modules 2> /dev/null)
lsReturnCode=$?
if [ $lsReturnCode == 0 ]; then 
    rm -r ./node_modules
fi

CONTENT='VITE_API_URL="http://127.0.0.1:8000"'
echo "$CONTENT" > .env 
npm install
npm run dev
