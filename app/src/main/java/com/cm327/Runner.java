package com.cm327;

import com.cm327.entity.JobPosts;
import com.cm327.repository.JobPostRepository;
import com.cm327.services.DataReading;
import org.postgresql.util.PSQLException;

import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;

public class Runner {
    public static void main(String[] args) {


        JobPostRepository jobPostRepository = new JobPostRepository();



        DataReading dataReading = new DataReading();

        dataReading.jobPostsList().forEach(jobPosts -> {

            jobPostRepository.save(JobPosts.builder()
                    .location(jobPosts.getLocation())
                    .details(jobPosts.getDetails())
                    .postTitle(jobPosts.getPostTitle())
                    .link(jobPosts.getLink())
                    .build());

        });

    }
}
