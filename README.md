# image-processing-api

## abstruct:
This project is image processing api which resizes and saves images using  Nodejs, TypeScript, Express framework and Sharp.


 ## Scripts:
 ### 1. Install All Dependencies:
  npm install 
 ### 2. Run Server:
  npm run start
 ### 3. Build:
  npm run build
 ### 4. Test:
  npm run test
 ### 5.Lint:
  npm run lint
 ### 6.prettier
  npm run prettier
  
 ## Endpoint:
 http://localhost:3000/ 
 check if the app running successfully
 
 http://localhost:3000/api/images 
 Invalid
 
 
 http://localhost:3000/api/images?filename=fjord&width=200&height=200
 Display image after resizing
 
 
 http://localhost:3000/api/images?filename=fjord&width=-200&height=200
 Invalid width 
 
 http://localhost:3000/api/images?filename=test&width=200&height=2000
 The image isn't exist

