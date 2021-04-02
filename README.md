Accessing DB
* in "application.properties", add line spring.h2.console.enabled=true
* in browser: http://localhost:8080/h2-console
* turn off automatic schema creation to avoid conflicts: spring.jpa.hibernate.ddl-auto=none