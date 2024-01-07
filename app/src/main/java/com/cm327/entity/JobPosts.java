package com.cm327.entity;

import com.cm327.utils.TurkishCity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="tbl_jobposts")
public class JobPosts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String postTitle;
    @OneToOne
    Company company;
    @Enumerated(EnumType.STRING)
    TurkishCity location;
    @Column(unique = true, columnDefinition = "TEXT")
    String link;
    @Column(columnDefinition = "TEXT")
    String details;

    public JobPosts(String postTitle, String companyName, TurkishCity location, String link, String details) {
        this.postTitle = postTitle;
        this.company = new Company(companyName);
        this.location = location;
        this.link = link;
        this.details = details;
    }

    @Override
    public String toString() {
        return "JobPosts{" +
                "id=" + id +
                ", postTitle='" + postTitle + '\'' +
                ", company=" + company +
                ", location=" + location +
                ", link='" + link + '\'' +
                ", details='" + details + '\'' +
                '}';
    }
}
