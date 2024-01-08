package com.cm327.repository;

import com.cm327.entity.Company;

public class CompanyRepository extends RepositoryManager<Company,Long>{
    public CompanyRepository() {
        super(new Company());
    }

}
