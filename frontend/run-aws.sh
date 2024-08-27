lsoutput=$(ls ./node_modules 2> /dev/null)
lsReturnCode=$?
if [ $lsReturnCode == 0 ]; then 
    rm -r ./node_modules
fi

CONTENT='VITE_API_URL="http://34.216.141.140:80"'
echo "$CONTENT" > .env 
npm install
npm build

echo "move contents of dist directory to your s3 and configure s3"
