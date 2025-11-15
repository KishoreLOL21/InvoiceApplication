# -----------------------------
# BUILD STAGE
# -----------------------------
FROM maven:3.9.4-eclipse-temurin-17 AS build

# Create directory inside container
WORKDIR /workspace

# Copy Maven configuration files
COPY pom.xml .

# Copy source code (backend + frontend)
COPY src ./src

# Build Spring Boot application (skip tests for speed)
RUN mvn clean package -DskipTests


# -----------------------------
# RUNTIME STAGE
# -----------------------------
FROM eclipse-temurin:17-jre-jammy

# Create working directory
WORKDIR /app

# Copy the built jar from the build container
COPY --from=build /workspace/target/*.jar app.jar

# Expose port (Spring Boot default)
EXPOSE 8080

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
