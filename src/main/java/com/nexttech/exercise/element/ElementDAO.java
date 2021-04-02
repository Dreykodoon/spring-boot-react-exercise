package com.nexttech.exercise.element;

import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class ElementDAO {

    @PersistenceContext
    private EntityManager entityManager;

    public List<Element> getElements() {
        TypedQuery<Element> query = entityManager.createNamedQuery("query_find_all_elements", Element.class);
        return query.getResultList();
    }
}
