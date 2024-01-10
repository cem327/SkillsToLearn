package com.cm327.utils;

import com.cm327.utils.logger.LogFiles;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Take any string and convert it to Date with a format(yyyy-MM-dd)
 */
public class StringToDate {
    public static Date convertStringToDate(String dateString) { //REFACTOR

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        try {

            return dateFormat.parse(dateString);
        } catch (ParseException e) {
            LogFiles.getLogger().error("Error while converting string to date", e);
            return null;
        }
    }
}
