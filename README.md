Accessing DB
* in "application.properties", add line spring.h2.console.enabled=true
* in browser: http://localhost:8080/h2-console
* turn off automatic schema creation to avoid conflicts: spring.jpa.hibernate.ddl-auto=none

Running the project
* to start back-end, run:
    * mvn clean install
    * mvn spring-boot:run
    * server is accessible at localhost:8080
    
* to start the front-end:
    * cd ui
    * yarn
    * yarn start
    * FE dev server is accessible at localhost:3001
    
Observations
* check "cerinte.txt" for theoretical solution to front-end requirements