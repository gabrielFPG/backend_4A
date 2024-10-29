# instalacion
```
npm i --save @nestjs/jwt passport-jwt bcrypt
npm i --save-dev @types/passport-jwt
```

# arrancamos proyecto
```
npm run start:dev
```

# modules & resource
```
nest g mo modules/auth
nest g res modules/users
```

# controllers & services
```
nest g co modules/auth
nest g s modules/auth
```

# para que no este con error el class-validator
```
npm i --save class-validator class-transformer
```

# para instalar swagger
```
npm install --save @nestjs/swagger
```

# database
```
nest g mo database
```

# para typeOrm
```
npm install typeorm @nestjs/typeorm pg
```

