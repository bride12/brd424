FROM openjdk

COPY target/D387_sample_code-0.0.2-SNAPSHOT.jar app.jar

#LABEL authors="Rider"

WORKDIR /app

EXPOSE 8080 4200

ENTRYPOINT ["java", "-jar", "/app.jar"]