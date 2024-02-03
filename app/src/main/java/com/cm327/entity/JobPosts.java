package com.cm327.entity;

import com.cm327.utils.enums.TurkishCity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;


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
    /**
     * UNIQUE FIELD
     */
    @Column(unique = true, columnDefinition = "TEXT")
    String link;
    @Column(columnDefinition = "TEXT")
    String details;
    @Temporal(TemporalType.DATE)
    Date date;
    @ElementCollection
    @Column(columnDefinition = "TEXT")
    private List<String> words;
    int openDays;


}
