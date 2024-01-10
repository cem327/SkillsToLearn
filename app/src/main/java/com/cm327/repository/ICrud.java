package com.cm327.repository;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

public interface ICrud<T, ID extends Serializable> {
    T save(T entity);
    Iterable<T> saveAll(Iterable<T> entities);
    Optional<T> findById(ID id);
    boolean existById(ID id);
    List<T> findAll();
    List<T> findByColumnAndValue(String columnName, Object value); // select * from tblurun where ad= ?
    void deleteById(ID id);
    List<T> findAllEntity(T entity);
}
