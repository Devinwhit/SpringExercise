FROM gradle:latest AS TEMP_BUILD_IMAGE
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle bootJar --no-daemon 

FROM openjdk:17-slim
COPY --from=TEMP_BUILD_IMAGE /home/gradle/src/build/libs/javaservice-1.0-SNAPSHOT.jar /app/spring-boot-application.jar
EXPOSE 8080
CMD ["java","-jar","/app/spring-boot-application.jar"]