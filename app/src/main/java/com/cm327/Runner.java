package com.cm327;

import com.cm327.entity.Company;
import com.cm327.entity.JobPosts;
import com.cm327.repository.CompanyRepository;
import com.cm327.repository.JobPostRepository;
import com.cm327.services.DataReading;
import org.hibernate.Hibernate;
import org.postgresql.util.PSQLException;


import java.io.IOException;

public class Runner {
    public static void main(String[] args) {


        DataReading dataReading = new DataReading();
        try {
            dataReading.jobPostsList();
        } catch (IOException e) {
            e.printStackTrace(); // TODO LOW : MAYBE A NEW LOGGER CAN BE USED.
        }


    }
}
