package com.cm327.services;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
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
        File csvDirectory = new File(System.getProperty("user.dir")+"\\server\\src\\output_data");
        File[] files = csvDirectory.listFiles();


        if (files != null) {
            for (File file : files) {
                try (Reader reader = new FileReader(file);
                     CSVParser csvParser = new CSVParser(reader, CSVFormat.EXCEL.builder().setHeader().setSkipHeaderRecord(true).build())) {

                    records.add(csvParser.getRecords().toArray(CSVRecord[]::new));
                }
            }
        }

        return records;
    }


}