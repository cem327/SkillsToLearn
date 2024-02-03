package com.cm327.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="tbl_company")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long Id;

    /**
     * UNIQUE FIELD
     */
    @Column(unique = true)
    String companyName;

    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<JobPosts> jobAds = new ArrayList<>();



}
