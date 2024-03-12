package com.skillzrating;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.data.mongodb.config.EnableMongoAuditing;


@SpringBootApplication
@EnableFeignClients
@EnableMongoAuditing // HACK: this enables mongodb auditing, MAY BE REMOVED LATER
public class DataServiceApplication {


    public static void main(String[] args) {
        SpringApplication.run(DataServiceApplication.class, args); // run the app

    }
}
