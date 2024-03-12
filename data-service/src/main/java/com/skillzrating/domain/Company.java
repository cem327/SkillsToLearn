package com.skillzrating.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Document
public class Company implements Serializable {

    @Id
    String Id;
    /**
     * UNIQUE FIELD
     */
    @Indexed(unique = true)
    String companyName;

    @Builder.Default
    private List<JobPost> jobPostIds = new ArrayList<>();


}
