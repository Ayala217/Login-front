# 1. Usar una imagen base de OpenJDK optimizada para producción
FROM eclipse-temurin:17-jdk-alpine

# 2. Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiar el archivo JAR generado en la imagen
COPY target/backend.jar app.jar

# 4. Exponer el puerto en el que corre el backend (por defecto 8080 en Spring Boot)
EXPOSE 8080

# 5. Definir el comando de ejecución
CMD ["java", "-jar", "app.jar"]
