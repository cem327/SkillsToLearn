package com.skillzrating.utils;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.apache.commons.io.input.BOMInputStream;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

public class ReadCSVFiles {

    /**
     * CSV files are read here. CSV files are used as a buffer, to validate files.
     * Before the data is sent to the database, it is validated manually.
     *
     * @return CSVRecord[]
     * @throws IOException when file cant be read
     */
    public List<CSVRecord[]> readCSVFiles() throws IOException {

        List<CSVRecord[]> records = new ArrayList<>();
        File csvDirectory = new File(System.getProperty("user.dir") + "\\server\\src\\LDataSetter\\output_data");
        File[] files = csvDirectory.listFiles();


        if (files != null) {
            for (File file : files) {
                try (FileInputStream fileInputStream = new FileInputStream(file);
                     BOMInputStream bomInputStream = new BOMInputStream(fileInputStream);
                     InputStreamReader reader2 = new InputStreamReader(bomInputStream, StandardCharsets.UTF_8);
                     CSVParser csvParser = new CSVParser(reader2, CSVFormat.EXCEL.builder()
                             .setHeader()
                             .setAllowMissingColumnNames(false)
                             .setIgnoreSurroundingSpaces(true)
                             .setSkipHeaderRecord(true)
                             .build())) {

                    if (csvParser.getHeaderNames().contains("Location")) {
                        records.add(csvParser.getRecords().toArray(CSVRecord[]::new));
                    }

                }
            }
        }

        return records;
    }


}