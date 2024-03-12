package com.skillzrating.utils;

public class TurkishToEnglish {

    /**
     * Scraped websites are sometimes written in Turkish. This method aims to convert special characters to English.
     * Also, punctuation makes hard to read pages. So, it is better to remove it.
     *
     * @param input - String to be cleaned.
     * @return String – Cleaned String from Turkish characters and punctuation.
     */
    public static String convertTurkishToEnglish(String input) {
        if (input == null || input.isEmpty()) {
            return input;
        }
        String result = input;
        result = result.replaceAll("ç", "c");
        result = result.replaceAll("ğ", "g");
        result = result.replaceAll("ı", "i");
        result = result.replaceAll("ö", "o");
        result = result.replaceAll("ş", "s");
        result = result.replaceAll("ü", "u");

        // Büyük harfleri de çevir
        result = result.replaceAll("Ç", "C");
        result = result.replaceAll("Ğ", "G");
        result = result.replaceAll("İ", "I");
        result = result.replaceAll("Ö", "O");
        result = result.replaceAll("Ş", "S");
        result = result.replaceAll("Ü", "U");

        // Türkçe karakterleri İngilizce karakterlere çevir

        return result.replaceAll("[\\p{Punct}&&[^']]+", "");
    }
}

