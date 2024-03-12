package com.skillzrating.domain;

import com.skillzrating.utils.enums.TurkishCity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;


@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Document
public class JobPost implements Serializable {

    @Field(targetType = FieldType.STRING, name = "location")
    TurkishCity location;
    @Field(targetType = FieldType.STRING, name = "link")
    @Indexed(unique = true)
    String link;
    @Field(targetType = FieldType.STRING, name = "details")
    String details;
    @Field(targetType = FieldType.STRING, name = "date")
    String date;
    @Field(targetType = FieldType.INT32, name = "openDays")
    int openDays;
    @Id
    private String id;
    @Field(targetType = FieldType.STRING, name = "postTitle")
    private String postTitle;
    @Field(targetType = FieldType.OBJECT_ID, name = "company")
    private Company company;
    private List<String> words;
    @Field(targetType = FieldType.TIMESTAMP, name = "creationDate")
    @CreatedDate
    private LocalDateTime creationDate;
    @Field(targetType = FieldType.TIMESTAMP, name = "modifiedDate")
    @LastModifiedDate
    private LocalDateTime modifiedDate;


}
