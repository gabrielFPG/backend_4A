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

# para variables de entorno en contraseñas y el servidor
```
nest g mo config
nest g s config 
```

# instalacion del paquete config
```
npm i --save @nestjs/config
```

# instalacion dotenev para config varables de entorno
```
npm install dotenv
```

# para ver comandos de typeorm
```
typeorm
o
npx typeorm
```

# crear un nuevo recuerso "categoria" dentro de modules
```
nest g res modules/categoria
```

# crear recurso persona en modules
```
nest g res modules/persona
```

# crear recursos producto en modules
```
nest g res modules/producto
```

# crear recursos role en modules
```
nest g res modules/role
```

# crear recursos cliente en modules
```
nest g res modules/cliente
```

# crear recursos pedido en modules
```
nest g res modules/pedido
```