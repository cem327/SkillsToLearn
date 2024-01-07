package com.cm327.repository;

import com.cm327.entity.JobPosts;

public class JobPostRepository extends RepositoryManager<JobPosts,Long>{
    public JobPostRepository() {
        super(new JobPosts());
    }
}
