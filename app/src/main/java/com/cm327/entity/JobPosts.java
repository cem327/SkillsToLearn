package com.cm327.entity;

import com.cm327.utils.TurkishCity;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@Setter
@Getter
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
    @ManyToOne
    @JoinColumn(name = "company_id")
    Company company;
    @Enumerated(EnumType.STRING)
    TurkishCity location;
    @Column(unique = true, columnDefinition = "TEXT")
    String link;
    @Column(columnDefinition = "TEXT")
    String details;
    @Temporal(TemporalType.DATE)
    Date date;
    @ElementCollection
    private List<String> words;
    int openDays;

    public JobPosts(String postTitle, Company company, TurkishCity location, String link, String details, Date date, int openDays) {
        this.postTitle = postTitle;
        this.company = company;
        this.location = location;
        this.link = link;
        this.details = details;
        this.date = date;
        this.openDays = openDays;
    }

}
